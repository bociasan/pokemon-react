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
import VSLogo from "../../img/vs.png";
import { Multipliers } from "../Multipliers/Multipliers";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const CardsContainer = ({
  handleChangeRoundClick,
  battleRound,
  setBattleRound,
  gameHearts,
  setGameHearts,
  userPoints,
  setUserPoints,
}) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [allTypes, setAllTypes] = useState({});
  const [pokemon1, setPokemon1] = useState({});
  const [pokemon2, setPokemon2] = useState({});
  const [style, setStyle] = useState({ visibility: "hidden" });
  const [buttonsStyle, setButtonsStyle] = useState({ visibility: "visible" });
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

  const handleClickUserDecicision = (userPrediction) => {
    const { prediction } = comparePokemons(
      pokemon1,
      pokemon2,
      allTypes,
      userPrediction
    );
    setStyle({ visibility: "visible" });
    setButtonsStyle({ visibility: "hidden" });
    if (prediction === false) {
      setGameHearts(new Array(gameHearts.length - 1));
    } else if (prediction === true) {
      setUserPoints(userPoints + 1);
    }
    setTimeout(() => handleChangeRoundClick(), 1000);
  };

  return (
    <div className="battleground container">
      <div
        onContextMenu={(e) => e.preventDefault()}
        className="cards-container"
      >
        {Object.keys(pokemon1).length > 0 && (
          <Card pokemon={pokemon1} key={pokemon1.id} style={style} />
        )}
        {}
        <div>
          <img className="battleground versus" src={VSLogo} />
        </div>
        {Object.keys(pokemon2).length > 0 && (
          <Card pokemon={pokemon2} key={pokemon2.id} style={style} />
        )}
        {/* {Object.keys(allTypes).length > 0 && <Multipliers types={allTypes} />} */}
      </div>
      <div className="button-interaction" style={buttonsStyle}>
        <ButtonComponent
          text={"Left wins"}
          onClick={() => handleClickUserDecicision("leftWin")}
        />
        <ButtonComponent
          text={"Draw"}
          onClick={() => handleClickUserDecicision("draw")}
        />
        <ButtonComponent
          text={"Left looses"}
          onClick={() => handleClickUserDecicision("leftLoose")}
        />
      </div>
    </div>
  );
};
export default CardsContainer;
