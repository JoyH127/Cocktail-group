import { useNavigate } from "react-router-dom"

function RecipeCard(props){
    const navigate = useNavigate()
    return(
        <div className="recipecard" onClick={() => navigate(`/recipes/${props.name}`)}>
            <div>
              <img src={props.image} alt="category" />
              {/* {console.log("img", props.image)} */}
              <h3>{props.name}</h3>
           </div>
        </div>
    )
}

export default RecipeCard