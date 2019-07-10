export default class Saves {
  constructor() {
    this.savesArr = [];
  }

  addSave(recipe) {
    const savedRecipe = {
      title: recipe.title,
      img: recipe.img,
      id: recipe.id
    };
    this.savesArr.push(savedRecipe);
    return savedRecipe;
  }

  deleteSaved(id) {
    const recipeIndex = this.savesArr.findIndex(r => r.id == id);
    this.savesArr.splice(recipeIndex, 1);
  }

  isSaved(id) {
    return this.savesArr.findIndex(s => s.id == id) !== -1;
  }
  getNumSaves() {
    return this.savesArr.length;
  }
}
