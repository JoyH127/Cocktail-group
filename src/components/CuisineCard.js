
//import { useNavigate } from "react-router-dom"

function CuisineCard(props){
    // console.log(props)
    //const navigate = useNavigate()
    return(
        <div className="cuisines">
           <img src={props.image} alt="category" />
           <h3>{props.name}</h3>
        </div>
    )
}

export default CuisineCard