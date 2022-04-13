import { useNavigate } from "react-router-dom"

function RecipeCard(props){

    console.log(props)
    const navigate = useNavigate()
    return(
        <div>
           <img src={props.image} alt="category" />
           {console.log("img", props.image)}
           <h3>{props.name}</h3>
        </div>
    )
}

export default RecipeCard