import { useNavigate } from "react-router-dom";

function CocktailCard(props) {
  const navigate = useNavigate();

  return (
    <div className="card">
      <div>
        <img src={props.image} alt="drink" />
        <button onClick={() => navigate(`/cocktails/${props.name}`)}>
          More Info
        </button>
      </div>
      <h4>{props.name}</h4>
    </div>
  );
}

export default CocktailCard;
