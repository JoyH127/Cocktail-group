import { useState } from "react";
import CocktailCard from "../components/CocktailCard";
import {fetchData} from "../services/constants";
//import Banner from "../img/Banner.jpg";

function Cocktails() {
  const [cocktails, setCocktails] = useState([]);

  const handleNonAlcoholicBtn = async (e) => {
    e.preventDefault();
    try {
      let res = await fetchData(e.target.value);
      console.log("NonAlc", res);
      const nonAlc = res.data.drinks;
      if (nonAlc) {
        setCocktails(nonAlc);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAlcoholicBtn = async (e) => {
    e.preventDefault();
    try {
      let res = await fetchData(e.target.value);
      console.log("Alc", res);
      const alc = res.data.drinks;
      if (alc) {
        setCocktails(alc);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const renderCocktails = () => {
    return cocktails.map((cocktail, index) => {
      return (
        <CocktailCard name={cocktail.strDrink} image={cocktail.strDrinkThumb} />
      );
    });
  };

  return (
    <div className="Cocktails">
      {/* <div className="Banner">
        <img src={Banner} />
      </div> */}
      <div className="space"></div>
      <div className="buttons">
        <button
          onClick={(e) => {
            handleAlcoholicBtn(e);
          }}
          value="Alcoholic"
        >
          Alcoholic Cocktails
        </button>
        <button
          onClick={(e) => {
            handleNonAlcoholicBtn(e);
          }}
          value="Non_Alcoholic"
        >
          Non-Alcoholic Cocktails
        </button>
      </div>
      <div></div>
      <div className="drinksContainer">{renderCocktails()}</div>
    </div>
  );
}

export default Cocktails;