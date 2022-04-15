import FoodRandom from "./FoodRandom";
import Random from "./Random";
import backgroundvideo from "../video/cheese.mp4";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div>
      <section id="MainSection">
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
            <source src={backgroundvideo} type="video/mp4" />
         </video>
        </div>
      </section>
      <section id="recommendSection">
        <h1>-Today's è buono's-</h1>
        <div className="recommend">
          <Random />
          <FoodRandom />
        </div>
      </section>
    </div>
  );
}

export default Home;