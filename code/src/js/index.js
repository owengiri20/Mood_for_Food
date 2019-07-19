// Models
import Search from "./models/Search";
import Recipe from "./models/Recipe";
import Saves from "./models/Saves";
// Views
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";
import * as savesView from "./views/savesView";

import { uiElements, clearLoader, renderLoader } from "./views/base";

// imports

// state = each of the apps data with current values
const state = {};

// SEARCH CONTROLLER
const controlSearch = async query => {
  // 1) get query from view
  if (!query) query = " ";
  // const query = searchView.getSearchQuery(); // TODO
  if (query) {
    // 2) new search object and add to state
    state.search = new Search(query);

    // 3) prepare ui for results
    // clear res list
    searchView.clearSearchResults();
    // clear search input
    searchView.clearSearchInput();

    // render loader feedback
    renderLoader(uiElements.col1);

    try {
      // 4) Search for recipes
      await state.search.getResults(query);

      // 5) render results on UI
      searchView.renderResultsForLabel(query, state.search.results.length);

      searchView.renderRecipes(state.search.results);

      // clear loader
      setTimeout(clearLoader(), 1000);
    } catch (error) {
      console.log(error);
      alert("something wrong with search");
      // clear loader
      clearLoader();
    }
  }
};

// RECIPE CONTROLLER
const controlRecipe = async () => {
  // get id
  const id = window.location.hash.replace("#", "");

  if (id) {
    // prepare UI for changes
    state.recipe = new Recipe(id);
    // clear old recipe
    recipeView.clearRecipe();

    // render loader
    renderLoader(uiElements.recipe);

    // highlight selected recipe
    try {
      // create new recipe obj/ get recipe data
      await state.recipe.getRecipe();

      // calc servings/ time
      state.recipe.calculateTime();
      state.recipe.calculateServings();

      clearLoader();
      // render recipe in UI
      recipeView.renderRecipe(state.recipe, state.saves.isSaved(id));
    } catch (error) {
      console.log("error RECIPE :" + error);
      clearLoader();
    }
  }
};

// Save Controller
state.saves = new Saves();
const controlSaves = () => {
  // get id
  if (!state.saves) state.saves = new Saves();
  const currentId = state.recipe.id;
  // get recipe to save
  if (!state.saves.isSaved(currentId)) {
    // save that recipe in state
    savesView.toggleSaveBtn(true);
    state.saves.addSave(state.recipe);
  } else {
    state.saves.deleteSaved(currentId);
    savesView.toggleSaveBtn(false);
  }

  // add to ui
  savesView.clearSavedUI();
  savesView.renderSaves(state.saves.savesArr);
};

// button clicks
// get the search button put summit event on it call controll search
document.querySelector(".search-form").addEventListener("submit", e => {
  e.preventDefault();
  controlSearch(searchView.getSearchQuery());
});

window.addEventListener("hashchange", controlRecipe);
window.addEventListener("load", controlRecipe);

window.addEventListener("load", () => {
  state.saves = new Saves();
  state.saves.readData();
  savesView.clearSavedUI();
  savesView.renderSaves(state.saves.savesArr);
});

window.addEventListener("load", () => {
  controlSearch();
});
window.state = state;

uiElements.recipe.addEventListener("click", e => {
  if (e.target.matches(".save-recipe, .save-recipe *")) {
    controlSaves();
  } else if (e.target.matches(".pizza-panel, .pizza-panel *")) {
    controlSearch("pizza");
  } else if (e.target.matches(".cake-panel, .cake-panel *")) {
    controlSearch("cake");
  } else if (e.target.matches(".vegan-panel, .vegan-panel *")) {
    controlSearch("vegan");
  }
});

// popalar picks clicked
