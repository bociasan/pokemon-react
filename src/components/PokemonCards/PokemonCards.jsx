import { Card } from "./Card";
import "./card.css";
import "../../styles/fonts.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../BackgroundComponent/backgroundComponent";
import backGroundImage from "../../img/background.webp";
function PokemonCards() {
  const [battleRound, setBattleRound] = useState(1);
  const [battleGroundCardsStatus, setBattleGroundCardStatus] = useState(false);
  const [first, setFirst] = useState(Math.trunc(Math.random()*1000)+1)
  const [second, setSecond] = useState(Math.trunc(Math.random()*1000)+2)


  const handleChangeRoundClick = () => {
    setBattleGroundCardStatus(!battleGroundCardsStatus);
    setBattleRound(battleRound + 1);
  };
  const handleStartRound = () =>
    setBattleGroundCardStatus(!battleGroundCardsStatus);


  return (
    <div className="battleGround page">
      <BackgroundImage image={backGroundImage} />
      {battleGroundCardsStatus === false ? (
        <button
          className="roundAnnouncer"
          onClick={handleStartRound}
        >{`Round ${battleRound}`}</button>
      ) : (
        <div className="battleGround container">
          <div
            onContextMenu={(e) => e.preventDefault()}
            className="cards-container"
          >

            <Card id={first} key={first} />
            <Card id={second} key={second} />

          </div>
          {battleRound < 3 ? (
            <button
              className="roundAnnouncer next"
              onClick={handleChangeRoundClick}
            >
              Next Round
            </button>
          ) : (
            <Link to="/statistics" className="roundAnnouncer statistics">
              End game
            </Link>
          )}
        </div>
      )}
    </div>
  );
}
export default PokemonCards;
