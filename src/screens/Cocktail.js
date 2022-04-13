import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



function Cocktail(props) {
  const [cocktail, setCocktail] = useState([]);
  const [info, setInfo] = useState([]);
  const { name } = useParams();
  let results;
  // console.log(name)
  async function fetchData() {
    const response = await axios.get(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
    );
    const { drinks } = response.data;
    console.log(drinks)
    // console.log('drinks in fetch', drinks[0])
    setCocktail(drinks[0]);
    //get values of object
    const details = Object.values(drinks[0]);
    //filter null values
    const filterNull = details.filter((word) => {
      if (typeof word !== "null") return word;
    });
    //filter web Address
    const filterWords = filterNull.filter((word) => {
      if (!word.includes("http") && !word.includes("nknown")) return word;
    });
    //set info array
    setInfo(filterWords);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {typeof cocktail !== "undefined" ? (
        <div className="cocktail-info-container">
          <div className="cocktail-info-image">
            <img
              className="cocktail-info-thumb"
              src={cocktail.strDrinkThumb}
              alt="cocktail"
              height={200}
              width={200}
            />
          </div>
          <div className="cocktail-info-details">
            {info.map((item) => (
              <li className="cocktail-info-para">{item}</li>
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Cocktail;
