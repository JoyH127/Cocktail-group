import { useState } from 'react';
import { fetchCategory } from '../services/constants';
import { fetchCuisine } from '../services/constants';
import RecipeCard from '../components/RecipeCard';
import RecipeList from './RecipeList';

function Recipes(){

    const [categories, setCategories] = useState([])
    const [cuisines, setCuisines] = useState([])
 
    const handleCategoryBtn = async (e) => {
        e.preventDefault()
        try {
            let res = await fetchCategory()
            //console.log("Categories", res)
            const categ = res.data.meals
            //console.log(categ)
            if(categ){
                setCategories(categ)
                //console.log(categories)
                renderCategoryList()
            }
            console.log(categories)
       
        } catch (error) {
            console.log(error)
        }
    }

    const handleCuisineBtn = async (e) => {
        e.preventDefault()
        try {
            let response = await fetchCuisine()
            //console.log("Cuisines", response)
            const cuis = response.data.meals
            console.log(cuis)
            if(cuis){
                setCuisines(cuis)
                renderCuisineList()
            }
            console.log(cuisines)
        } catch (error) {
            console.log(error)
        }
    }

    const renderCategoryList = () => {
        return categories.map((category,index) => {
            //console.log(category.strCategory)
            return(
                <li>{category.strCategory}</li>
            //    <RecipeList 
            //    category={category.strCategory}
            //    />
            )
        })
    }

    const renderCuisineList = () => {
        return cuisines.map((cuisine,index) => {
          return (
            <div>
                <li>{cuisine.strArea}</li>
                {/* <RecipeList 
                cuisine={cuisine.strArea}
                /> */}
            </div>
        )
        })
    }

    return(
        <div>
            <div>
                <h1>Welcome to Recipes Page!</h1>
            </div>
        <div>
            <button onClick={(e) => handleCategoryBtn(e)}>Recipes by Category</button>
            <button onClick={(e) => handleCuisineBtn(e)}>Recipes by Cuisine</button>
        </div>
        <div>
          {renderCategoryList()} ? <div>{renderCategoryList()}</div>: <div>{renderCuisineList()}</div>
        </div>
        <div>
            <RecipeCard />
        </div>
        </div>
    )
}

export default Recipes