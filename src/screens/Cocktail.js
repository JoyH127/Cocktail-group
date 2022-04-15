import "../styles/Cocktail.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Cocktail(props) {
  const [cocktail, setCocktail] = useState([]);
  //const [info, setInfo] = useState([]);

  const [measurement, setMeasure] = useState([]);
  const [ingredient, setIngredients] = useState([]);
  const [drinkName, setDrinkName] = useState([]);
  const [drinkGlass, setDrinkGlass] = useState([]);
  const [alcoholic, setAlcoholic] = useState([]);
  const [instruction, setInstruction] = useState([]);

  const { name } = useParams();
  async function fetchData() {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );
    const { drinks } = response.data;
    console.log(drinks);
    setCocktail(drinks[0]);
    const entries = Object.entries(drinks[0]);
    const filterNull = entries.filter((array) => {
      if (!array.includes(null)) return array;
    });

    const filterKey = filterNull.filter((array) => {
      if (
        !array[1].includes("http") &&
        !array[0].includes("strInstructionsDE") &&
        !array[0].includes("strInstructionsIT") &&
        !array[0].includes("idDrink") &&
        !array[0].includes("Creative") &&
        !array[1].includes("null")
      )
        return array;
    });
    console.log(measurement);

    const filterMeasure = filterKey.filter((array) =>
      array[0].includes("strMeasure")
    );
    const filterIngredients = filterKey.filter((array) =>
      array[0].includes("strIngredient")
    );
    const filterName = filterKey.filter((array) =>
      array[0].includes("strDrink")
    );
    const filterGlass = filterKey.filter((array) =>
      array[0].includes("strGlass")
    );
    const filterAlcoholic = filterKey.filter((array) =>
      array[0].includes("strAlcoholic")
    );
    const filterInstructions = filterKey.filter((array) =>
      array[0].includes("strInstruction")
    );

    const strAlcoholic = filterAlcoholic.map((array) => array[1]);
    const strName = filterName.map((array) => array[1]);
    const strGlass = filterGlass.map((array) => array[1]);
    const strMeasure = filterMeasure.map((array) => array[1]);
    const strIngredient = filterIngredients.map((array) => array[1]);
    const strInstruction = filterInstructions.map((array) => array[1]);

    setMeasure(strMeasure);
    setIngredients(strIngredient);
    setDrinkName(strName);
    setDrinkGlass(strGlass);
    setAlcoholic(strAlcoholic);
    setInstruction(strInstruction);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {typeof cocktail !== "undefined" ? (
        <section className="">
          <div className="main-cocktail-info-container">
            <div className="cover-cock"></div>
            <div className="info-image-container">
              <div className="image">
                <p className="cocktail-name">{drinkName}</p>
                <img
                  className="info-thumb"
                  src={cocktail.strDrinkThumb}
                  alt="cocktail"
                />
                <p>served in a {drinkGlass}</p>
              </div>
              <div className="info-details">
                <div className="how-to-make-container">
                  <div className="cocktail-ingredients-heading">
                    <h3>Ingredients</h3>
                  </div>

                  <div className="cocktail-ingredients">
                    {ingredient.map((ing) => (
                      <p>{ing}</p>
                    ))}
                  </div>

                  <div className="cocktail-measurements">
                    {measurement.map((measure) => (
                      <p>{measure}</p>
                    ))}
                  </div>
                </div>
                <div className="cocktail-directions">
                  <p className="cocktail-directions-title">Directions</p>
                  <p>{instruction}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cocktail;
