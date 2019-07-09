// Models
import Search from "./models/Search";

// Views
import * as searchView from "./views/searchView";

import { uiElements } from "./views/base";
import Recipe from "./models/Recipe";

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

      if (state.search.results.length > 0) {
        // 5) render results on UI
        searchView.renderResultsForLabel(query);
        searchView.renderRecipes(state.search.results);
        console.log(state.search.results);
      } else {
        console.log("no recipes");
        // TODO
      }

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

    // render loader

    // highlight selected recipe
    try {
      // create new recipe obj/ get recipe data
      await state.recipe.getRecipe();

      // calc servings/ time
      state.recipe.calculateTime();
      state.recipe.calculateServings();

      // render recipe in UI
    } catch (error) {
      console.log("error RECIPE :" + error);
    }
  }
};

// button clicks
// get the search button put summit event on it call controll search
document.querySelector(".search-form").addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});

window.addEventListener("hashchange", controlRecipe);
window.state = state;
