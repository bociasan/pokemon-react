import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import IntroPage from "./components/IntroPage/introPage";
import RulesPage from "./components/RulesPage/rulesPage";
import { BattleStatisticsComponent } from "./components/BattleStatistics/BattleStatisticsPage";
import PokemonCards from "./components/PokemonCards/PokemonCards";
import { useState } from "react";

function App() {
  const [userPoints, setUserPoints] = useState(0);
  const handleChangeUserPoints = () => setUserPoints(userPoints + 1);
  return (
    <div className="App">
      <Router basename={"/pokemon-react"}>
        <Routes>
          <Route
            path="/"
            element={<IntroPage />}
            setUserPoints={setUserPoints}
          />
          <Route path="/rules" element={<RulesPage />} />
          <Route
            path="/battleground"
            element={
              <PokemonCards handleChangeUserPoints={handleChangeUserPoints} />
            }
          />
          <Route
            path="/statistics"
            element={<BattleStatisticsComponent userPoints={userPoints} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
