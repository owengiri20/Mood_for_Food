export const uiElements = {
  col1: document.querySelector(".main-col-1"),
  searchInput: document.querySelector(".search-query"),
  recipeSearchResultsList: document.querySelector(".list-res"),
  resForLabel: document.querySelector(".res-for-recipe"),
  recipe: document.querySelector(".recipe-show"),
  recipeImg: document.querySelector(".recipe-img"),
  savedList: document.querySelector(".saved-list")
};

export const renderLoader = parent => {
  const markup = `
  <div class="loader">
    <div class="circle"></div>
    <div class="circle"></div>
  </div>
  `;

  parent.insertAdjacentHTML("afterbegin", markup);
};

export const clearLoader = () => {
  const loader = document.querySelector(".loader");
  if (loader) loader.parentElement.removeChild(loader);
};
