import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./About";
import Sign from "./JS/Sign";
function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Sign-in</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Sign />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
export default App;
