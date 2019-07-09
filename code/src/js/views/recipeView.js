import { uiElements } from "./base";

export const clearRecipe = () => {
  uiElements.recipe.innerHTML = "";
};

export const renderRecipe = recipe => {
  //   uiElements.recipeImg.style.background = ``;

  const markup = `
    <div class="recipe-img" style="background: url('${
      recipe.img
    }')no-repeat center center/cover">
            <h1 class="food-title">${recipe.title}</h1>
            <div class="color-overlay"></div>
          </div>
          <div class="content-details">
            <h1 class="ing-title">Ingredients</h1>
            <button class="save-recipe">save</button>
            <h2 class="author-label">${recipe.author}</h2>
            <p class="servings-label">2-4 servings</p>
            <p class="time-label">${recipe.calcTime}</p>
            <a href="${recipe.source}" target="_blank" class="see-more"
              >more about this recipe...</a
            >
          </div>

          <span></span>
          <ul class="ing-list">
          ${recipe.ingredients.forEach(ingredient => {
            return `<li>${ingredient}</li>`;
          })}
          </ul>
    `;

  uiElements.recipe.insertAdjacentHTML("afterbegin", markup);

  console.log(recipe.img);
};
