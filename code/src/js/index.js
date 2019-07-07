import axios from "axios";
import { key } from "./config";

const getResults = async query => {
  try {
    const result = await axios(
      `https://www.food2fork.com/api/search?key=${key}&q=${query}`
    );
    console.log(result);
  } catch (error) {
    console.log("error: " + error);
  }
};

getResults("pizza");
