import "./battleStatistics.css";
import pokemonEnd from "../../img/pokemon_end.jpeg";
import Popup from "./Popup.js";
import { useState } from "react";
import { Player } from "./Player.js";

const mockDataPlayers = [
  { name: "player1", score: 20 },
  { name: "player2", score: 10 },
  { name: "player3", score: 60 },
  { name: "player4", score: 40 },
  { name: "player5", score: 30 },
];

const sortedMockDataPlayers = [...mockDataPlayers].sort((a, b) =>
  a.score > b.score ? -1 : 1
);

export const BattleStatisticsComponent = ({userPoints}) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
    <div className="battleStatistics">
      <div className="imageContainer">
        <img className="pokemonImg" src={pokemonEnd} alt="pokemon" />
      </div>
      <div className="textContainer">
        <h1 className="title">Battle Results</h1>
        <h3>{`Your score: ${userPoints}`}</h3>
        <button className="showResultsBtn" onClick={() => setButtonPopup(true)}>
          Display results
        </button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
          {sortedMockDataPlayers.map((player, index) => {
            return <Player key={index} player={player} index={index} />;
          })}
        </Popup>
      </div>
    </div>
  );
};
