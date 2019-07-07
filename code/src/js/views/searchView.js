import { uiElements } from "./base";

export const clearSearchInput = () => {
  uiElements.searchInput.value = "";
};

export const getSearchQuery = () => {
  return uiElements.searchInput.value;
};

export const renderRecipes = recipes => {
  console.log(recipes);

  recipes.forEach(recipe => {
    const markup = `
        <a href="${recipe.recipe_id}" class="recipe-link">
        <div class="res-tab">
          <img src="${recipe.image_url}" alt="${recipe.title}" />
          <div class="recipe-details">
            <p>${recipe.title}</p>
            <p>${recipe.publisher}</p>
          </div>
        </div>
      </a>
      `;

    uiElements.recipeSearchResultsList.insertAdjacentHTML("beforeend", markup);
  });
};
