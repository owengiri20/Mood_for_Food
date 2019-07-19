import axios from "axios";
import { key } from "../config";

export default class Recipe {
  constructor(id) {
    this.id = id;
  }
  async getRecipe() {
    try {
      // get recipe with axios
      const result = await axios(
        `https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`
      );
      // turn that recipe to an obj
      this.title = result.data.recipe.title;
      this.img = result.data.recipe.image_url;
      this.author = result.data.recipe.publisher;
      this.ingredients = result.data.recipe.ingredients;
      this.source = result.data.recipe.source_url;
    } catch (error) {
      console.log(error);
    }
  }

  calculateTime() {
    this.time = Math.floor((this.ingredients.length / 3) * 12);
  }

  calculateServings() {
    this.servings = 4;
  }
}
