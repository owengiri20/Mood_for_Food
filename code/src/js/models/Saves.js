export default class Saves {
  constructor() {
    this.saves = [];
  }

  addSave(recipe) {
    const savedRecipe = {
      title: recipe.title,
      img: recipe.img
    };
    this.saves.push(savedRecipe);
    return savedRecipe;
  }
}
