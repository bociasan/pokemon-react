import "./battleStatistics.css";
import pokemonEnd from "../../img/pokemon_end.png";
import Popup from "./Popup.js";
import { Player } from "./Player.js";
import { Link } from "react-router-dom";
import BackgroundImage from "../BackgroundComponent/backgroundComponent";
import { useState, useEffect } from "react";

export const BattleStatisticsComponent = ({ userPoints }) => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [username, setUsername] = useState("");
  const [playerHasNoUsername, setPlayerHasNoUsername] = useState(true);
  const [userNameInputStatus, setuserNameInputStatus] = useState(true);
  console.log(userPoints);
  const [savedPlayers, setSavedPlayers] = useState(() => {
    // getting stored value
    const saved = localStorage.getItem("players");
    const initialValue = JSON.parse(saved);
    return initialValue || [];
  });

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  function savePlayer(e) {
    e.preventDefault();
    setSavedPlayers([...savedPlayers, { name: username, score: userPoints }]);
    setPlayerHasNoUsername(false);
    setuserNameInputStatus(false);
  }

  useEffect(() => {
    // storing input name
    localStorage.setItem("players", JSON.stringify(savedPlayers));
  }, [savedPlayers]);

  return (
    <div className="battleStatistics">
      <BackgroundImage />
      <div className="imageContainer">
        <img className="pokemonImg" src={pokemonEnd} alt="pokemon" />
      </div>
      <div className="textContainer">
        <span className="title">Battle Results</span>
        {playerHasNoUsername === true ? (
          ""
        ) : (
          <div className="userFinalInfo">{`Player: ${username}`}</div>
        )}
        <span className="userFinalInfo">{`Score: ${userPoints}`}</span>
        <button className="showResultsBtn" onClick={() => setButtonPopup(true)}>
          Display results
        </button>
        <Link className="showResultsBtn" to="/pokemon-react/">
          New game
        </Link>
        <Popup
          trigger={buttonPopup}
          shouldClose={true}
          setTrigger={setButtonPopup}
        >
          {savedPlayers
            .sort((a, b) => b.score - a.score)
            .filter((players, index) => index < 10)
            .map((player, index) => {
              return <Player key={index} player={player} index={index} />;
            })}
        </Popup>
        {userNameInputStatus === true ? (
          <form className="userInputPopup">
            <input
              placeholder="Enter name"
              value={username}
              onChange={handleUsername}
              className="userInput"
            ></input>
            <button className="buttonSavePlayer" onClick={(e) => savePlayer(e)}>
              Save
            </button>
          </form>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
