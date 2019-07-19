import { uiElements } from "./base";

export const clearSearchInput = () => {
  uiElements.searchInput.value = "";
};

export const getSearchQuery = () => {
  return uiElements.searchInput.value;
};
export const renderResultsForLabel = (query, recipeLength) => {
  let markup = "";
  if (query === " ") {
    markup = `<h2 class="res-for">Popular Recipes</h2>`;
  } else if (recipeLength > 0) {
    markup = `<h2 class="res-for">Results for "${query}"</h2>`;
  } else {
    markup = `<h2 class="res-for">no results "${query}"</h2>`;
  }

  uiElements.resForLabel.insertAdjacentHTML("afterbegin", markup);
};

export const renderRecipes = recipes => {
  recipes.forEach(recipe => {
    const markup = `
        <a href="#${recipe.recipe_id}" class="recipe-link">
        <div class="res-tab">
          <img src="${recipe.image_url}" alt="${recipe.title}" />
          <div class="recipe-details">
            <p>${recipe.title}</p>
            <p>by ${recipe.publisher}</p>
          </div>
        </div>
      </a>
      `;

    uiElements.recipeSearchResultsList.insertAdjacentHTML("beforeend", markup);
  });
};

export const clearSearchResults = () => {
  uiElements.recipeSearchResultsList.innerHTML = "";
  uiElements.resForLabel.innerHTML = "";
};
