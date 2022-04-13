import axios from "axios";
import { useEffect, useState } from "react";

function FoodRandom() {
  const [FRandom, setFRandom] = useState([]);

  const randomFood = async () => {
    try {
      let response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/random.php`
      );
      const { meals } = response.data;
      //console.log(meals);
      setFRandom(meals[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    randomFood();
  }, []);

  return (
    <div className="Random">
      <div className="cover">
        <span>
          <h1>Food</h1>
        </span>
        <div className="foodText">
          <p>Featured recommend</p>
          <h1>{FRandom.strMeal}</h1>
          <p>{FRandom.strArea}</p>
          <a href={FRandom.strSource}>
            <button>Resource</button>
          </a>
        </div>
      </div>
      <img src={FRandom.strMealThumb} />
    </div>
  );
}

export default FoodRandom;
