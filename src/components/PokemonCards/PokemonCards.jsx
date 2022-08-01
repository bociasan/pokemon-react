import { Card } from "./Card";
import "./card.css";
import "../../styles/fonts.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../BackgroundComponent/backgroundComponent";
import backGroundImage from "../../img/background.webp";
function PokemonCards() {
  const [battleRound, setBattleRound] = useState(1);
  const [pokemons, setPokemons] = useState([]);
  const [battleGroundCardsStatus, setBattleGroundCardStatus] = useState(false);
  const handleChangeRoundClick = () => {
    setBattleGroundCardStatus(!battleGroundCardsStatus);
    setBattleRound(battleRound + 1);
  };
  const handleStartRound = () =>
    setBattleGroundCardStatus(!battleGroundCardsStatus);
  useEffect(() => {
    (async (limit = 4) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
      );
      const json = await res.json();
      json.results.forEach(
        (pokemon) => (pokemon.id = pokemon.url.slice(0, -1).split("/").pop())
      );
      setPokemons(json.results);
    })();
  }, []);

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
            {pokemons.length > 0 &&
              pokemons.map((pokemon) => (
                <Card pokemon={pokemon} key={pokemon.id} />
              ))}
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
