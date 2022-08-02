import React from "react";
import { Card } from "./Card";
import { Link } from "react-router-dom";
const CardsContainer = ({ pokemons, handleChangeRoundClick, battleRound }) => (
  <div className="battleground container">
    <div onContextMenu={(e) => e.preventDefault()} className="cards-container">
      {pokemons.length > 0 &&
        pokemons.map((pokemon) => <Card pokemon={pokemon} key={pokemon.id} />)}
    </div>
    {battleRound < 3 ? (
      <div className="roundAnnouncer next" onClick={handleChangeRoundClick}>
        Next Round
      </div>
    ) : (
      <Link to="/statistics" className="roundAnnouncer statistics">
        End game
      </Link>
    )}
  </div>
);
export default CardsContainer;
