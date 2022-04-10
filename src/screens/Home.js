import FoodRandom from "./FoodRandom";
import Random from "./Random";
import backgroundVideo from "../video/cheese.mp4";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
      <div className="backCotain">
        <div className="text">
          <h1>Welcome, home cooker</h1>
          <p>
            Explore your food journey. A recipe has no soul. You, as the cook,
            must bring soul to the recipe.
          </p>
          <NavLink to={"/about"}>
            <button>Go to About</button>
          </NavLink>
        </div>
        <div className="background_cover"></div>
        <video className="background" autoPlay loop muted>
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </div>
      <Random />

      <FoodRandom />
    </div>
  );
}

export default Home;
