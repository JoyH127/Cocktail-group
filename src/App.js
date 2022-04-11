import "./App.css";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Cocktails from "./screens/Cocktails";
import About from "./screens/About";
import Cocktail from "./screens/Cocktail";
import logo from "./logo/foodlogo.png";
import Footer from "./screens/Footer";
function App() {
  return (
    <div className="App">
      <div className="navDiv">
        <img className="logo" src={logo} />

        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/cocktails"}>Cocktails</NavLink>
          <NavLink to={"/about"}>About</NavLink>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/cocktails/:name" element={<Cocktail />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
