// Models
import Search from "./models/Search";
import Recipe from "./models/Recipe";
import Saves from "./models/Saves";
// Views
import * as searchView from "./views/searchView";
import * as recipeView from "./views/recipeView";

import { uiElements } from "./views/base";

// imports

// state = each of the apps data with current values
const state = {};

// SEARCH CONTROLLER
const controlSearch = async () => {
  // 1) get query from view
  const query = searchView.getSearchQuery(); // TODO
  if (query) {
    // 2) new search object and add to state
    state.search = new Search(query);

    // 3) prepare ui for results
    // clear res list
    searchView.clearSearchResults();
    // clear search input
    searchView.clearSearchInput();

    // render loader feedback

    try {
      // 4) Search for recipes
      await state.search.getResults(query);

      // 5) render results on UI
      searchView.renderResultsForLabel(query, state.search.results.length);
      console.log(state.search.results.length);

      searchView.renderRecipes(state.search.results);
      console.log(state.search.results);

      // clear loader
    } catch (error) {
      console.log(error);
      alert("something wrong with search");
      // clear loader
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

    // highlight selected recipe
    try {
      // create new recipe obj/ get recipe data
      await state.recipe.getRecipe();

      // calc servings/ time
      state.recipe.calculateTime();
      state.recipe.calculateServings();

      // render recipe in UI
      recipeView.renderRecipe(state.recipe);
    } catch (error) {
      console.log("error RECIPE :" + error);
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
    state.saves.addSave(state.recipe);
  } else {
    state.saves.deleteSaved(currentId);
  }

  // add to ui
};

// button clicks
// get the search button put summit event on it call controll search
document.querySelector(".search-form").addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

window.addEventListener("hashchange", controlRecipe);
window.state = state;

uiElements.recipe.addEventListener("click", e => {
  if (e.target.matches(".save-recipe, .save-recipe *")) {
    controlSaves();
  }
});
