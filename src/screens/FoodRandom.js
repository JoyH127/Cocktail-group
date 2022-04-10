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
      console.log(meals);
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
      <h2>Today's Food</h2>
      <h3>Name: {FRandom.strMeal}</h3>
      <h4>{FRandom.strCategory}</h4>
      <img src={FRandom.strMealThumb} />
      <a href={FRandom.strYoutube}>How to make</a>
    </div>
  );
}

export default FoodRandom;
