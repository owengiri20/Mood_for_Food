import Search from "./models/Search";

// imports

// state = each of the apps data with current values
const state = {};

const controlSearch = async () => {
  // 1) get query from view
  const query = "pizza"; // TODO
  if (query) {
    // 2) new search object and add to state
    state.search = new Search(query);

    // 3) prepare ui for results
    // clear res list
    // clear search input
    // render loader feedback

    try {
      // 4) Search for recipes
      await state.search.getResults(query);

      // 5) render results on UI
      console.log(state.search.results);

      // clear loader
    } catch (error) {
      console.log(error);
      alert("something wrong with search");
      // clear loader
    }
  }
};

// get the search button put summit event on it call controll search
document.querySelector(".search-form").addEventListener("submit", e => {
  e.preventDefault();
  controlSearch();
});
