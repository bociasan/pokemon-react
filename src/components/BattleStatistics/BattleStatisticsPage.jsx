import "./battleStatistics.css";
import pokemonEnd from "../../img/pokemon_end.jpeg";
import Popup from "./Popup.js";
import { Player } from "./Player.js";
import { Link } from "react-router-dom";
import BackgroundImage from "../BackgroundComponent/backgroundComponent";
import { useState, useEffect } from "react";

const players = [
  // { name: "player1", score: 20 },
  // { name: "player2", score: 10 },
  // { name: "player3", score: 60 },
  // { name: "player4", score: 40 },
  // { name: "player5", score: 30 },
];


export const BattleStatisticsPage = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [username,setUsername] = useState("")
  const [playerHasNoUsername,setPlayerHasNoUsername] = useState(true)

  const [savedPlayers,setSavedPlayers] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("players");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const handleUsername = event => {
    setUsername(event.target.value);
  };

function savePlayer(){
  setSavedPlayers([...savedPlayers, {name:username,score:userPoints}])
  setPlayerHasNoUsername(false)
}


useEffect(() => {
  // storing input name
  localStorage.setItem("players", JSON.stringify(savedPlayers));
}, [savedPlayers]);

  return (
    <div className="battleStatistics">
      <div className="imageContainer">
        <img className="pokemonImg" src={pokemonEnd} alt="pokemon" />
      </div>
      <div className="textContainer">
        <h1 className="title">Battle Results</h1>
        {playerHasNoUsername===true?"":<h3>{`Your name: ${username}`}</h3>}
        <h3>{` Your score: ${userPoints}`}</h3>
        <button className="showResultsBtn" onClick={() => setButtonPopup(true)}>
          Display results
        </button>
        <Link className="showResultsBtn" to="/">
          New game
        </Link>
        <Popup trigger={buttonPopup} shouldClose={true} setTrigger={setButtonPopup}>
          {savedPlayers.map((player, index) => {
            return <Player key={index} player={player} index={index} />;
          })}
        </Popup>

        <Popup trigger={playerHasNoUsername} shouldClose={false}>
         <input placeholder="Enter name:" value={username} onChange={handleUsername}></input>
         <button onClick={() => savePlayer()}>Save</button>
        </Popup>
        
      </div>
    </div>
  );
};
