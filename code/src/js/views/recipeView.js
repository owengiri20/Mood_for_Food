import { uiElements } from "./base";

export const clearRecipe = () => {
  uiElements.recipe.innerHTML = "";
};

export const renderRecipe = (recipe, isSaved) => {
  //   uiElements.recipeImg.style.background = ``;

  const markup = `
    <div class="recipe-img" style="background: url('${
      recipe.img
    }')no-repeat center center/cover">
            <h1 class="food-title">${recipe.title}</h1>
            <div class="color-overlay"></div>
          </div>
          <div class="content-details">
          <div class="author-save">
          <h2 class="author-label">by ${recipe.author}</h2>
          <button class="save-recipe">
            <i class="${isSaved ? "fas" : "far"} fa-bookmark"></i>
          </button>
        </div>
            <p class="servings-label">2-4 servings</p>
            <p class="time-label">time to make: ${recipe.time} mins </p>
            <a href="${recipe.source}" target="_blank" class="see-more"
              >more about this recipe...</a
            >
            <h2 class="ing-title">Ingredients</h2>
          </div>
          <span></span>
          
          <ul class="ing-list">
          ${recipe.ingredients
            .map(ingredient => {
              return `<li>${ingredient}</li>`;
            })
            .join("")}
          </ul>
    `;

  uiElements.recipe.insertAdjacentHTML("afterbegin", markup);

  console.log(recipe.img);
};
