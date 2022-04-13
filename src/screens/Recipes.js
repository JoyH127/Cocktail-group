import { useState } from 'react';
import {fetchCategoryList, fetchRecipes, fetchCuisineList} from '../services/constants'
import RecipeCard from '../components/RecipeCard';

function Recipes(){
    const [recipes, setRecipes] = useState([])
    const [categLists, setCategLists] = useState([])
    const [cuisLists, setCuisLists] = useState([])

    const handleRecipesList = async (e) => {
        e.preventDefault()
        try {
            let res = await fetchRecipes(e.target.value)
             console.log(res)
             setRecipes(res.data.meals)
        } catch (error) {
            console.log(error)
        }
    }

    const renderRecipes = () => {
        return(
            recipes.map((recipe,index) => {
                return(
                <div>
                    <button onClick={(e) => handleCategoryListBtn(e)} value={recipe.strCategory}>{recipe.strCategory}</button>
                    <button onClick={(e) => handleCuisineListBtn(e)} value={recipe.strArea}>{recipe.strArea}</button>
                </div>
                )
            })
        )
    }

    const handleCategoryListBtn = async (e) => {
        try {
            // console.log(e.target.value)
            let response = await fetchCategoryList(e.target.value)
            //console.log(response)
            setCategLists(response.data.meals)
        } catch (error) {
            console.log(error)
        }
        console.log(categLists)
    }

    const renderCategoryList = async () => {
        try {
            categLists.map((categList,index) => {
                return(
                    <div>
                      <RecipeCard 
                        name={categList.strMeal}
                        image={categList.strMealThumb}
                      />
                    </div>
                )
            })
        } catch (error) {
            console.log(error)
        }
     }

    const handleCuisineListBtn = async (e) => {
       try {
          let response = await fetchCuisineList(e.target.value)
          console.log(response)
          setCuisLists(response.data.meals)
       } catch (error) {
           console.log(error)
       }
       console.log(cuisLists)
    }
   
    const renderCuisineList = async () => {
        try {
            cuisLists.map((cuisList,index) => {
                return(
                    <div>
                      <RecipeCard 
                        name={cuisList.strMeal}
                        image={cuisList.strMealThumb}
                      />
                    </div>
                )
            })
        } catch (error) {
            console.log(error)
        }
     }
 

    return(
        <div>
            <div>
                <h1>Welcome to Recipes Page!</h1>
            </div>
        <div>
            <button onClick={(e) => handleRecipesList(e)} value="c=list">Recipes by Category</button>
            <button onClick={(e) => handleRecipesList(e)} value="a=list">Recipes by Cuisine</button>
        </div>
        <div>{renderRecipes()} </div>
        <div>
           <div>{renderCategoryList()}</div>
           <div> {renderCuisineList()}</div>
        </div>
        </div>
    )
}

export default Recipes