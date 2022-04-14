import '../styles/Recipes.css'
import { useState } from 'react';
import {fetchCategoryList, fetchRecipes, fetchCuisineList} from '../services/constants'
import RecipeCard from '../components/RecipeCard';
import CuisineCard from '../components/CuisineCard';

function Recipes(){
    const [recipes, setRecipes] = useState([])
    const [categLists, setCategLists] = useState([])
    const [cuisLists, setCuisLists] = useState([])

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
            // console.log(e.target.value)
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
          setCuisLists(cuis)
          }
       } catch (error) {
           console.log(error)
       }
       //console.log(cuisLists)
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
   
    const renderCuisineList = () => {
        return cuisLists.map((cuisList,index) => {
               //console.log("cuis", cuisList.strMealThumb)
                return(
                    <CuisineCard 
                        name={cuisList.strMeal}
                        image={cuisList.strMealThumb}
                    />
                )
        })
    }
 
    return(
        <div className="recipesMain">
            <h1>Welcome to Recipes Page!</h1>
        <div className="space"></div>
        <div className="choiceList">
            <button onClick={(e) => handleRecipesList(e)} value="c=list">Recipes by Category</button>
            <button onClick={(e) => handleRecipesList(e)} value="a=list">Recipes by Cuisine</button>
        </div>
        <div className="choiceDiv">{renderRecipes()} </div>
        <div className="renderDiv">
         <div> Categories {renderCategoryList()} </div>
         <div></div>
         <div>Cuisines{renderCuisineList()} </div> 
        </div>
        </div>
    )
}

export default Recipes