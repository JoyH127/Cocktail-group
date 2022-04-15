import "../styles/Recipes.css";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  fetchCategoryList,
  fetchRecipes,
  fetchCuisineList,
} from "../services/constants";
import RecipeCard from "../components/RecipeCard";
import food4 from "../img/food4.jpeg";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [categLists, setCategLists] = useState([]);
  const [images, setImages] = useState(0);

  const handleRecipesList = async (e) => {
    e.preventDefault();
    try {
      let res = await fetchRecipes(e.target.value);
      //console.log(res)
      setRecipes(res.data.meals);
    } catch (error) {
      console.log(error);
    }
  };

  const renderRecipes = () => {
    return recipes.map((recipe, index) => {
      let categName = recipe.strCategory;
      let cuisName = recipe.strArea;
      //console.log(categName)
      return (
        <div className="recipeGrp">
          {categName ? (
            <button onClick={(e) => handleCategoryListBtn(e)} value={categName}>
              {categName}
            </button>
          ) : (
            <button onClick={(e) => handleCuisineListBtn(e)} value={cuisName}>
              {cuisName}
            </button>
          )}
        </div>
      );
    });
  };

  const handleCategoryListBtn = async (e) => {
    e.preventDefault();
    try {
      let response = await fetchCategoryList(e.target.value);
      //console.log(response)
      let cat = response.data.meals;
      if (cat) {
        setCategLists(cat);
      }
    } catch (error) {
      console.log(error);
    }
    //console.log(categLists)
  };

  const handleCuisineListBtn = async (e) => {
    e.preventDefault();
    try {
      let response = await fetchCuisineList(e.target.value);
      //console.log(response)
      let cuis = response.data.meals;
      if (cuis) {
        setCategLists(cuis);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderCategoryList = () => {
    return categLists.map((categList, index) => {
      //console.log("categ", categList.strMealThumb)
      return (
        <RecipeCard name={categList.strMeal} image={categList.strMealThumb} />
      );
    });
  };

  return (
    <div className="recipesMain">
      <div className="foodbanner">
        <img src={food4} />
      </div>
      <div className="choiceList">
        <button onClick={(e) => handleRecipesList(e)} value="c=list">
          Recipes by Category
        </button>
        <button onClick={(e) => handleRecipesList(e)} value="a=list">
          Recipes by Cuisine
        </button>
      </div>
      <div className="choiceDiv">{renderRecipes()} </div>
      <div>
        <br></br>
      </div>

      <Slider
        className="renderDiv"
        dots={false}
        arrows={true}
        slidesToShow={4}
        // slidesToScroll={4}
      >
        {renderCategoryList()}
      </Slider>
    </div>
  );
}

export default Recipes;
