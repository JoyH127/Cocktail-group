import axios from "axios";
import { useState } from "react";
import CocktailCard from "../components/CocktailCard";

function Cocktails() {
  const [nonAlcoholics, setNonAlcoholics] = useState([]);

  const nonAlcoholicDrinks = async () => {
    try {
      let response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`
      );
      //console.log(response.data.drinks)
      const { drinks } = response.data;
      setNonAlcoholics(drinks);
      // const newArr = [...nonAlcoholics,response.data.drinks]
      // console.log(newArr)
      // setNonAlcoholics(newArr)
      console.log(nonAlcoholics);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNonAlcoholicBtn = (e) => {
    e.preventDefault();
    nonAlcoholicDrinks();
    renderDrinks();
  };

  const renderDrinks = () => {
    return nonAlcoholics.map((nonAlcoholic, index) => {
      return (
        <CocktailCard
          name={nonAlcoholic.strDrink}
          image={nonAlcoholic.strDrinkThumb}
        />
      );
    });
  };

  return (
    <div>
      <div>
        <button>Alcoholic Cocktails</button>
        <button
          onClick={(e) => {
            handleNonAlcoholicBtn(e);
          }}
        >
          Non-Alcoholic Cocktails
        </button>
      </div>
      <div className="drinks">{renderDrinks()}</div>
    </div>
  );
=======
function Cocktails(){

 const [nonAlcoholics, setNonAlcoholics] = useState([])
 const [alcoholics, setAlcoholics] = useState([])
    
    const nonAlcoholicDrinks = async () => {
        try {
            let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
            //console.log(response.data.drinks)
             const { drinks } = response.data
            setNonAlcoholics(drinks)
           console.log(nonAlcoholics)
        } catch (error) {
            console.log(error)
        }
    }


    const alcoholicDrinks = async () => {
        try {
            let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic`)
            //console.log(response.data.drinks)
             const { drinks } = response.data
            setAlcoholics(drinks)
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleNonAlcoholicBtn = (e)=>{
       e.preventDefault()
       nonAlcoholicDrinks()
       renderNonAlcoholic()
    }
   
    const handleAlcoholicBtn = (e)=>{
        e.preventDefault()
        alcoholicDrinks()
        renderAlcoholic()
     }
 
    const renderNonAlcoholic = () => {
        return nonAlcoholics.map((nonAlcoholic,index) => {
            return (
                <CocktailCard 
                  name={nonAlcoholic.strDrink}
                  image={nonAlcoholic.strDrinkThumb}
                />
            )
        })
    }

    const renderAlcoholic = () => {
        return alcoholics.map((alcoholic,index) => {
            return (
                <CocktailCard 
                  name={alcoholic.strDrink}
                  image={alcoholic.strDrinkThumb}
                />
            )
        })
    }

    return(
         <div>
             <div>
             <button onClick={(e) => {handleAlcoholicBtn(e)}}>Alcoholic Cocktails</button>
             <button onClick={(e) => {handleNonAlcoholicBtn(e)}}>Non-Alcoholic Cocktails</button>
            </div>
            <div className='nonalcoholic'>{renderNonAlcoholic()}</div>
            <div className='alcoholic'>{renderAlcoholic()}</div>
         
         </div>
       
    )
>>>>>>> main
}

export default Cocktails;
