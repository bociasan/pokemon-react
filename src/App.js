import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import IntroPage from "./components/IntroPage/introPage";
import { BattleStatisticsPage } from "./components/BattleStatistics/BattleStatisticsPage";
import PokemonCards from "./components/PokemonCards/PokemonCards";
import { useState } from "react";

function App() {
  const [x, setX] = useState("0");
  const [y, setY] = useState("0");
  const pokeballMove = (e) => {
    setX(`${e.clientX + 25}px`);
    setY(`${e.clientY + 25}px`);
  };
  return (
    <div className="App" onMouseMove={(e) => pokeballMove(e)}>
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/battleground" element={<PokemonCards />} />
          <Route path="/statistics" element={<BattleStatisticsPage />} />
        </Routes>
      </Router>
      <div className="pokeball" style={{ left: x, top: y }}>
        <img
          style={{ width: 40, height: 40 }}
          src={require("./img/pokeball.png")}
          alt="pokeball"
        />
      </div>
    </div>
  );
}

export default App;
