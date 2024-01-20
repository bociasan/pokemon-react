import React from "react";
import { HashRouter, Route } from "react-router-dom";
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
      <HashRouter basename='/'>
        <Routes>
          <Route
            exact path="/"
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
      </HashRouter>
    </div>
  );
}

export default App;
