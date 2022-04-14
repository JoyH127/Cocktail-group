import { useNavigate } from "react-router-dom";

function CocktailCard(props) {
  const navigate = useNavigate();

  return (
    <div className="card" onClick={() => navigate(`/cocktails/${props.name}`)}>
      <div>
        <img src={props.image} alt="drink" />
        <div className="cock-cover">
          <h3>{props.name}</h3>
          {/* <button onClick={() => navigate(`/cocktails/${props.name}`)}>
            More Info
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default CocktailCard;
