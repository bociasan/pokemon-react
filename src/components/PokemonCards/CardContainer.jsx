import React from "react";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  fetchPokemonData,
  fetchPokemonsData,
  fetchData,
  comparePokemons,
  fetchTypesData,
} from "../../functions/utils";
import { Multipliers } from "../Multipliers/Multipliers";
const CardsContainer = ({ handleChangeRoundClick, battleRound }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [allTypes, setAllTypes] = useState({});
  const [pokemon1, setPokemon1] = useState({});
  const [pokemon2, setPokemon2] = useState({});
  useEffect(() => {
    fetchTypesData().then((types) => setAllTypes(types));
    fetchPokemonsData().then((res) => {
      setAllPokemons(res.results);
    });
  }, []);
  const setRandomPokemons = () => {
    fetchData(
      allPokemons[Math.trunc(Math.random() * allPokemons.length)].url
    ).then((pokemon1Data) => setPokemon1(pokemon1Data));
    fetchData(
      allPokemons[Math.trunc(Math.random() * allPokemons.length)].url
    ).then((pokemon2Data) => setPokemon2(pokemon2Data));
  };
  useEffect(() => {
    if (allPokemons.length > 0) {
      setRandomPokemons();
    }
  }, [allPokemons]);
  return (
    <div className="battleground container">
      <div
        onContextMenu={(e) => e.preventDefault()}
        className="cards-container"
      >
        {Object.keys(pokemon1).length > 0 && (
          <Card pokemon={pokemon1} key={pokemon1.id} />
        )}
        {Object.keys(pokemon2).length > 0 && (
          <Card pokemon={pokemon2} key={pokemon2.id} />
        )}
        {/* {Object.keys(allTypes).length > 0 && <Multipliers types={allTypes} />} */}
      </div>
      <button
        className="compare-button"
        onClick={() => {
          comparePokemons(pokemon1, pokemon2, allTypes);
        }}
      >
        {" "}
        Compare
      </button>
      <button
        className="random-button"
        onClick={() => {
          setRandomPokemons();
        }}
      >
        {" "}
        Set Random
      </button>

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
};
export default CardsContainer;
