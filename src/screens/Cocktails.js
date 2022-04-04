import axios from 'axios'
import { useState }from 'react'
import CocktailCard from '../components/CocktailCard'

 function Cocktails(){

 const [nonAlcoholics, setNonAlcoholics] = useState([])
    
        const nonAlcoholicDrinks = async () => {
        try {
            let response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic`)
            //console.log(response.data.drinks)
             const { drinks } = response.data
            setNonAlcoholics(drinks)
            // const newArr = [...nonAlcoholics,response.data.drinks]
            // console.log(newArr)
            // setNonAlcoholics(newArr)
            console.log(nonAlcoholics)
        } catch (error) {
            console.log(error)
        }
    }
    
    const handleNonAlcoholicBtn = (e)=>{
       e.preventDefault()
       nonAlcoholicDrinks()
       renderDrinks()
    }

    const renderDrinks = () => {
        return nonAlcoholics.map((nonAlcoholic,index) => {
            return (
                <CocktailCard 
                  name={nonAlcoholic.strDrink}
                  image={nonAlcoholic.strDrinkThumb}
                />
            )
        })
    }

    return(
         <div>
             <div>
             <button>Alcoholic Cocktails</button>
             <button onClick={(e) => {handleNonAlcoholicBtn(e)}}>Non-Alcoholic Cocktails</button>
            </div>
            <div className='drinks'>{renderDrinks()}</div>
         
         </div>
       
    )
}

export default Cocktails