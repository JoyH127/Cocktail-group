import axios from "axios";
import { useEffect, useState } from "react";
import CocktailCard from "../components/CocktailCard";

function Cocktails() {
  const [nonAlcoholics, setNonAlcoholics] = useState([]);
  const [alcoholics, setAlcoholics] = useState([]);
  const [render, setRender] = useState([]);
  const nonAlcoholicDrinks = async () => {
    try {
      let response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
      );
      //console.log(response.data.drinks)
      const { drinks } = response.data;
      setNonAlcoholics(drinks);
    } catch (error) {
      console.log(error);
    }
  };

  const alcoholicDrinks = async () => {
    try {
      let response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`
      );
      //console.log(response.data.drinks)
      const { drinks } = response.data;
      setAlcoholics(drinks);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    nonAlcoholicDrinks();
    alcoholicDrinks();
  }, []);

  console.log("non", nonAlcoholics);
  console.log("he", alcoholics);

  //switch render value depending on button.
  const handleNonAlcoholicBtn = (e) => {
    e.preventDefault();
    setRender(nonAlcoholics);
  };

  const handleAlcoholicBtn = (e) => {
    e.preventDefault();
    setRender(alcoholics);
  };

  return (
    <div>
      <div>
        <button
          onClick={(e) => {
            handleAlcoholicBtn(e);
          }}
        >
          Alcoholic Cocktails
        </button>
        <button
          onClick={(e) => {
            handleNonAlcoholicBtn(e);
          }}
        >
          Non-Alcoholic Cocktails
        </button>
      </div>
      <div className="nonalcoholic">
        {render.map((nonAlcoholic, index) => {
          return (
            <CocktailCard
              name={nonAlcoholic.strDrink}
              image={nonAlcoholic.strDrinkThumb}
            />
          );
        })}
      </div>
      <div className="alcoholic">
        {render.map((alcoholic, index) => {
          return (
            <CocktailCard
              name={alcoholic.strDrink}
              image={alcoholic.strDrinkThumb}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Cocktails;
