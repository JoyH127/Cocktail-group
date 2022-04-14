import { useState } from "react";
import CocktailCard from "../components/CocktailCard";
import fetchData from "../services/constants";
import Banner from "../img/Banner.jpg";
import left from "../img/next.png";
import right from "../img/right.png";
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
  const slideRight = () => {
    let slide = document.querySelector(".drinksContainer");
    slide.scrollLeft = slide.scrollLeft + 700;
  };
  const slideLeft = () => {
    let slide = document.querySelector(".drinksContainer");
    slide.scrollLeft = slide.scrollLeft - 700;
  };

  return (
    <div className="Cocktails">
      <div className="Banner">
        <div className="Cock-text"></div>
        <img src={Banner} />
      </div>
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
      {cocktails.length == 0 ? (
        <></>
      ) : (
        <div className="main-slider">
          <img className="left" src={left} onClick={slideLeft} />
          <div className="drinksContainer">{renderCocktails()}</div>
          <img className="right" src={right} onClick={slideRight} />
        </div>
      )}
    </div>
  );
}

export default Cocktails;