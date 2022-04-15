import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function Recipe(props) {
  const [cocktail, setCocktail] = useState([]);

  const[measurement, setMeasure] = useState([]);
  const[measurement1, setMeasurement1] = useState([]);
  const[measurement2, setMeasurement2] = useState([]);
  const[recipeName, setRecipeName] = useState([]);
  const[instruction, setInstruction] = useState([]);
  const[ingredients1, setIngredients1] = useState([]);
  const[ingredients2, setIngredients2] = useState([]);

  const { name } = useParams();
  async function fetchData() {
    const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`);
    const { meals } = response.data;
    console.log(meals)
    setCocktail(meals[0]);
    const entries = Object.entries(meals[0]);
    const filterNull = entries.filter((array) => {
      if(!array.includes(null)) return array
    });
    
    const filterKey = filterNull.filter((array) => {
      if( !array[1].includes('http') 
      && !array[0].includes('strInstructionsDE')
      && !array[0].includes('strInstructionsIT')
      && !array[0].includes('Creative')
      && !array[1].includes('null')) return array;
    });

    const filterMeasure = filterKey.filter(array => array[0].includes('strMeasure'))
    const filterIngredients = filterKey.filter(array => array[0].includes('strIngredient'))
    const filterName = filterKey.filter(array => array[0].includes('strMeal'))
    const filterInstructions = filterKey.filter(array => array[0].includes('strInstruction'))

    const strName = filterName.map(array => array[1])
    const strMeasure = filterMeasure.map(array => array[1])
    const strIngredient = filterIngredients.map(array => array[1])
    const strInstruction = filterInstructions.map(array => array[1])

    const firstPartOfIngredients = 
    typeof strIngredient !== 'undefined' 
    && strIngredient.length > 7 ? strIngredient.slice(0,8) 
    : strIngredient;

   const secondPartOfIngredients = 
    typeof strIngredient !== 'undefined' 
    && strIngredient.length > 7 ? strIngredient.slice(9, strIngredient.length - 1) 
    : filterIngredients;
    
   const firstPartOfMeasurements = 
    typeof strMeasure !== 'undefined' 
    && strMeasure.length > 7 ? strMeasure.slice(0,8) 
    : strMeasure;

   const secondPartOfMeasurements = 
    typeof strMeasure !== 'undefined' 
    && strMeasure.length > 7 ? strMeasure.slice(9, strMeasure.length - 1) 
    : strMeasure;

    setMeasure(strMeasure);
    //setIngredients(strIngredient);
    setRecipeName(strName);
    setInstruction(strInstruction);
    
     setIngredients1(firstPartOfIngredients);
     setIngredients2(secondPartOfIngredients);

     setMeasurement1(firstPartOfMeasurements);
     setMeasurement2(secondPartOfMeasurements);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {typeof cocktail !== "undefined" ? (
          <div className="main-recipe-info-container" >
        <div className="info-image-container">
          <div className="image">
          <p className="recipe-name" >{recipeName}</p>
            <img
              className="info-thumb"
              src={cocktail.strMealThumb}
              alt="cocktail"
              height={500}
              width={500}
            />
              <p>serving suggestion</p>

          </div>
          <div className="info-details">
            
            <div className="how-to-make-recipe-container">  

            <div className="recipe-ingredients-heading" >
              <h3>Ingredients</h3>
              </div>    

              <div className="recipe-ingredients">
              {   ingredients1.map(ingredient => 
                  <p className="individual-list-item" >{ingredient}</p> ) }
              </div>
              
              <div className="recipe-measurements" >
                {measurement1.map(measure => 
                  <p className="individual-list-item" >{measure}</p> )}
              </div>

              <div className="recipe-ingredients">
              {   ingredients2.map(ing => 
                  <p className="individual-list-item" >{ing}</p> ) }
              </div>
              
              <div className="recipe-measurements" >
                {measurement2.map(measure => 
                  <p className="individual-list-item" >{measure}</p> )}
              </div>
              
            </div>
            <div className="recipe-directions" >
              <p className="recipe-directions-title" >Directions</p>
            <p>{instruction}</p>
            </div>
          </div>

        </div>
        </div>
      ) : ("")
      }
    </div>
  );
}

export default Recipe;
