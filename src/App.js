import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Routes } from "react-router-dom";
import "./App.css";
import IntroPage from "./components/IntroPage/introPage";
import PokemonCards from "./components/PokemonCards/PokemonCards";
import BattleStatisticsComponent from "./components/BattleStatistics/BattleStatisticsPage";
import { useState } from "react";

function App() {
  const [userPoints, setUserPoints] = useState(0);
  // const [x, setX] = useState("0");
  // const [y, setY] = useState("0");
  // const pokeballMove = (e) => {
  //   setX(`${e.clientX + 25}px`);
  //   setY(`${e.clientY + 25}px`);
  // };
  console.log(userPoints);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route
            path="/battleground"
            element={
              <PokemonCards
                userPoints={userPoints}
                setUserPoints={setUserPoints}
              />
            }
          />
          <Route path="/statistics" element={<BattleStatisticsComponent />} />
        </Routes>
      </Router>
      {/* <div className="pokeball" style={{ left: x, top: y }}>
        <img
          style={{ width: 40, height: 40 }}
          src={require("./img/pokeball.png")}
        />
      </div> */}
    </div>
  );
}

export default App;
