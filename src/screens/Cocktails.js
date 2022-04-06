import { useState }from 'react'
import CocktailCard from '../components/CocktailCard'
import fetchData from '../services/constants'

function Cocktails(){

 const [cocktails, setCocktails] = useState([])
     
    const handleNonAlcoholicBtn = async (e)=>{
       e.preventDefault()
       try {
           let res = await fetchData(e.target.value)
           console.log("NonAlc", res)
           const nonAlc = res.data.drinks
           if(nonAlc){
               setCocktails(nonAlc)
           }
       } catch (error) {
           console.log(error)
       }
    }
   
    const handleAlcoholicBtn = async (e)=>{
        e.preventDefault()
        try {
            let res = await fetchData(e.target.value)
            console.log("Alc", res)
            const alc = res.data.drinks
            if(alc){
                setCocktails(alc)
            }
        } catch (error) {
            console.log(error)
        }
    }
 
    const renderCocktails = () => {
        return cocktails.map((cocktail,index) => {
            return (
                <CocktailCard 
                  name={cocktail.strDrink}
                  image={cocktail.strDrinkThumb}
                />
            )
        })
    }

    return(
         <div>
             <div>
             <button onClick={(e) => {handleAlcoholicBtn(e)}} value='Alcoholic'>Alcoholic</button>
             <button onClick={(e) => {handleNonAlcoholicBtn(e)}} value='Non_Alcoholic'>Non_Alcoholic</button>
            </div>
            <div className='nonalcoholic'>{renderCocktails()}</div>
         </div>
    )
}

export default Cocktails