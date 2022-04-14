import axios from "axios";

export const fetchData = async (category) => {
  try {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${category}`
    );
    //console.log(response)
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const fetchRecipes = async (list) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/list.php?${list}`
    );
    //console.log(res)
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCategoryList = async (clists) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${clists}`
    );
    //console.log(res)
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCuisineList = async (lists) => {
  try {
    const res = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?a=${lists}`
    );
    //console.log(res)
    return res;
  } catch (error) {
    console.log(error);
  }
};
