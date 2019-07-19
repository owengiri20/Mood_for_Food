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
    this.saveData();

    return savedRecipe;
  }

  deleteSaved(id) {
    const recipeIndex = this.savesArr.findIndex(r => r.id == id);
    this.savesArr.splice(recipeIndex, 1);
    this.saveData();
  }

  isSaved(id) {
    return this.savesArr.findIndex(s => s.id == id) !== -1;
  }
  getNumSaves() {
    return this.savesArr.length;
  }

  saveData() {
    localStorage.setItem("savedRecipes", JSON.stringify(this.savesArr));
  }

  readData() {
    let storage = JSON.parse(localStorage.getItem("savedRecipes"));
    if (storage) this.savesArr = storage;
  }
}
