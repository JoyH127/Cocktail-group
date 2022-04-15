import "./App.css";
import { useState } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./components/Globalstyle";
import { lightTheme, darkTheme } from "./components/Themes"
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Cocktails from "./screens/Cocktails";
import AboutUs from "./screens/AboutUs";
import Cocktail from "./screens/Cocktail";
import logo from "./logo/foodlogo.png";
import Footer from "./screens/Footer";
import Recipes from "./screens/Recipes";
import Recipe from "./screens/Recipe";

function App() {
  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>
    <div className="App">
   
      <div className="navDiv">
        <img className="logo" src={logo} />
        <button onClick={themeToggler}>Switch Mode</button>
        
        <nav>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/recipes"}>Recipes</NavLink>
          <NavLink to={"/cocktails"}>Cocktails</NavLink>
          <NavLink to={"/about"}>About Us</NavLink>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/:name" element={<Recipe />} />
        <Route path="/cocktails" element={<Cocktails />} />
        <Route path="/cocktails/:name" element={<Cocktail />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <footer>
        <Footer />
      </footer>
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;