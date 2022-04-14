import axios from "axios";
import { useEffect, useState } from "react";

function Random() {
  const [random, setRandom] = useState([]);

  const randomDrink = async () => {
    try {
      let response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/random.php`
      );
      //console.log(response.data.drinks)
      const { drinks } = response.data;
      //console.log(drinks);
      setRandom(drinks[0]);
      //  console.log(random)
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    randomDrink();
  }, []);

  return (
    <div className="Random">
      <div className="cover">
        <span>
          <h1>Cocktail</h1>
        </span>
        <div className="cockText">
          <p>Featured recommend</p>
          <h1>{random.strDrink}</h1>
          <p>{random.strAlcoholic}</p>
          <a href={random.strSource}>
            <button>Resource</button>
          </a>
        </div>
      </div>
      <img src={random.strDrinkThumb} alt="random" />
    </div>
  );
}

export default Random;