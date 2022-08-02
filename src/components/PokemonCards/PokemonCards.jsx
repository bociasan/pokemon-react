import "./card.css";
import "../../styles/fonts.css";
import { useEffect, useState } from "react";
import BackgroundImage from "../BackgroundComponent/backgroundComponent";
import backgroundImage from "../../img/background.webp";
import FavoriteIcon from "@material-ui/icons/Favorite";

import RoundIntroduction from "./RoundIntroduction";
function PokemonCards() {
  const [gameHeart, setGameHeart] = useState(new Array(3));
  const [pokemons, setPokemons] = useState([]);
  const [battleGroundCardsStatus, setBattleGroundCardStatus] = useState(false);

  useEffect(() => {
    (async (limit = 2) => {
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
    <div className="battleground page">
      <BackgroundImage image={backgroundImage} />
      <div className="gameHeartRemaining">
        {[...gameHeart].map((value, index) => (
          <FavoriteIcon
            key={index}
            style={{ color: "red", fontSize: "100px" }}
          />
        ))}
      </div>
      <RoundIntroduction
        delay={2000}
        pokemons={pokemons}
        setBattleGroundCardStatus={setBattleGroundCardStatus}
        battleGroundCardsStatus={battleGroundCardsStatus}
      />
    </div>
  );
}
export default PokemonCards;
