
//import { useNavigate } from "react-router-dom"

function CuisineCard(props){
    // console.log(props)
    //const navigate = useNavigate()
    return(
        <div className="cuisines">
            { props ? 
            <div>
           <img src={props.image} alt="cuisines" />
           <h3>{props.name}</h3> 
           </div> : null
           }
        </div>
    )
}

export default CuisineCard