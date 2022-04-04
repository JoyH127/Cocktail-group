import "./App.css";
import { NavLink, Route, Routes } from 'react-router-dom'
import Home from "./screens/Home";

function App() {
  return <div className="App">
      <div className="navDiv">
      <nav>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/cocktails"}>Cocktails</NavLink>
        <NavLink to={"/about"}>About</NavLink>
      </nav>
      </div>
      
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/cocktails" element={<Cocktails />} />
         <Route path="/about" element={<About />} />
      </Routes>
  </div>;
}

export default App;
