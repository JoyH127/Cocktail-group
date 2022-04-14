import '../styles/Recipes.css'
import { useState } from 'react';
import {fetchCategoryList, fetchRecipes, fetchCuisineList} from '../services/constants'
import RecipeCard from '../components/RecipeCard';
import left from "../img/next.png";
import right from "../img/right.png";
import food from '../img/food.jpeg'
import food2 from '../img/food2.jpeg'
import food1 from '../img/food1.jpeg'
import food3 from '../img/food3.jpeg'
import food4 from '../img/food4.jpeg'
import foodbanner from '../img/foodbanner.jpeg'

function Recipes(){
    const [recipes, setRecipes] = useState([])
    const [categLists, setCategLists] = useState([])
  
    const handleRecipesList = async (e) => {
        e.preventDefault()
        try {
            let res = await fetchRecipes(e.target.value)
             //console.log(res)
             setRecipes(res.data.meals)
        } catch (error) {
            console.log(error)
        }
    }

    const renderRecipes = () => {
        return(
            recipes.map((recipe,index) => {
                let categName  = recipe.strCategory
                let cuisName = recipe.strArea
                //console.log(categName)
                return(
                <div className="recipeGrp">
                { categName ?
                    <button onClick={(e) => handleCategoryListBtn(e)} value={categName}>{categName}</button>:
                    <button onClick={(e) => handleCuisineListBtn(e)} value={cuisName}>{cuisName}</button>
                 }
                </div>
                )
            })
        )
    }

    const handleCategoryListBtn = async (e) => {
        e.preventDefault()
        try {
            let response = await fetchCategoryList(e.target.value)
            //console.log(response)
            let cat = response.data.meals
            if(cat) {
            setCategLists(cat)
            }
        } catch (error) {
            console.log(error)
        }
        //console.log(categLists)
    }

    const handleCuisineListBtn = async (e) => {
        e.preventDefault()
       try {
          let response = await fetchCuisineList(e.target.value)
          //console.log(response)
          let cuis = response.data.meals
          if(cuis){
            setCategLists(cuis)
          }
       } catch (error) {
           console.log(error)
       }
    }

    const renderCategoryList = () => {
          return categLists.map((categList,index) => {
            //console.log("categ", categList.strMealThumb)
                return(
                    <RecipeCard 
                        name={categList.strMeal}
                        image={categList.strMealThumb}
                    />
                )
            })
    }
 
    const slideRight = () => {
        let slide = document.querySelector(".renderDiv");
        slide.scrollLeft = slide.scrollLeft + 700;
      };
      const slideLeft = () => {
        let slide = document.querySelector(".renderDiv");
        slide.scrollLeft = slide.scrollLeft - 700;
      };

    return(
        <div className="recipesMain">
        <div className="foodbanner">
            <img src={food4} />
        </div>
        <div className="space"></div>
        <div className="choiceList">
            <button onClick={(e) => handleRecipesList(e)} value="c=list">Recipes by Category</button>
            <button onClick={(e) => handleRecipesList(e)} value="a=list">Recipes by Cuisine</button>
        </div>
        <div className="choiceDiv">{renderRecipes()} </div>
        <div><br></br></div>
        {categLists.length === 0 ? (
            <></>
          ) : (
            <div className="foodslider">
                <img className="left" src={left} onClick={slideLeft} />
                <div className="renderDiv">{renderCategoryList()}</div>
                <img className="right" src={right} onClick={slideRight} />
            </div>
          )}
        </div>
    )
}


export default Recipes