// import {pokemons} from './data/pokemons.js'
// import {typeColor} from "./data/typeColor";
// import {pokemonsFirst20} from "./data/pokemons-first20";
import React from "react";
import { Card } from "../Card";
import "./card.css";
import "../../styles/fonts.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../BackgroundComponent/backgroundComponent";
import backGroundImage from "../../img/background.webp";
import { ButtonComponent } from "../ButtonComponent/ButtonComponent";
import {
  fetchPokemonData,
  fetchPokemonsData,
  fetchData,
  comparePokemons,
  fetchTypesData,
} from "../../functions/utils";
import { Multipliers } from "../Multipliers/Multipliers";
function PokemonCards() {
  // pokemonsFirst20.forEach((pokemon) => pokemon.id = pokemon.url.slice(0, -1).split("/").pop())

  const [pokemons, setPokemons] = useState([]);

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
  const [battleRound, setBattleRound] = useState(1);
  const [battleGroundCardsStatus, setBattleGroundCardStatus] = useState(false);
  const [allPokemons, setAllPokemons] = useState([]);
  const [allTypes, setAllTypes] = useState({});
  const [pokemon1, setPokemon1] = useState({});
  const [pokemon2, setPokemon2] = useState({});

  useEffect(() => {
    fetchTypesData().then((types) => setAllTypes(types));
    fetchPokemonsData().then((res) => {
      setAllPokemons(res.results);
      // console.log(res.results)

      // setRandomPokemons()

      // fetchData(res.results[0].url).then(pokemon1Data => setPokemon1(pokemon1Data))
      // fetchData(res.results[14].url).then(pokemon2Data => setPokemon2(pokemon2Data))
    });
  }, []);

  const setRandomPokemons = () => {
    // console.log(allPokemons)

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
            {Object.keys(pokemon1).length > 0 && (
              <Card pokemon={pokemon1} key={pokemon1.id} />
            )}
            {Object.keys(pokemon2).length > 0 && (
              <Card pokemon={pokemon2} key={pokemon2.id} />
            )}
            {Object.keys(allTypes).length > 0 && (
              <Multipliers types={allTypes} />
            )}
          </div>
          <ButtonComponent
            style={{
              backgroundColor: "#7DCE13",
              marginBottom: "10px ",
            }}
            text="Compare"
            onClick={() => comparePokemons(pokemon1, pokemon2, allTypes)}
          />
          <ButtonComponent
            style={{
              borderColor: "#C4DFAA",
              borderWidth: "3px",
            }}
            text="Set Random"
            onClick={() => setRandomPokemons()}
          />

          {battleRound < 3 ? (
            <ButtonComponent
              className="roundAnnouncer next"
              text="Next Round"
              onClick={handleChangeRoundClick}
            />
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
