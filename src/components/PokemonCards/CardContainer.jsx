import React from "react";
import { Card } from "./Card";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {rewards} from "../../data/rewards";
import {
  fetchPokemonData,
  fetchPokemonsData,
  fetchData,
  comparePokemons,
  fetchTypesData, nameCompare, whoWillWin,
} from "../../functions/utils";
import VSLogo from "../../img/vs.png";
import powerUpLogo from "../../img/powerUpLogo.png"
import { Multipliers } from "../Multipliers/Multipliers";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import {GuessPokemonNameComponent} from "../../components/ChanceComponents/guessPokemonNameComponent"
import {types} from "../../data/types";

const CardsContainer = ({
    chance,
  handleChangeRoundClick,
  // battleRound,
  // setBattleRound,
  gameHearts,
  setGameHearts,
  userPoints,
  setUserPoints,
}) => {
  const [showName, setShowName] = useState(chance==0 ? false : true)
  const [boosted, setBoosted] = useState(false)
  const [allPokemons, setAllPokemons] = useState([]);
  const [allTypes, setAllTypes] = useState({});
  const [pokemon1, setPokemon1] = useState({});
  const [pokemon2, setPokemon2] = useState({});
  const [style, setStyle] = useState({ visibility: "hidden" });
  const [buttonsStyle, setButtonsStyle] = useState({ visibility: "visible" });
  let typesflag = false;
  useEffect(() => {
    fetchTypesData().then((types) => {setAllTypes(types); typesflag = true});
    fetchPokemonsData().then((res) => {
      setAllPokemons(res.results);
    });
    // console.log(chance)

  }, []);

  const tryName = (value, buttonPressed = false, reward) => {
    // console.log(value)
    if (Object.keys(pokemon1).length>0) {
      if (nameCompare(pokemon1.name, value)){
        setShowName(true)
        switch (reward){
          case "boost":
            setBoosted(true)
            break;
          case "heart":
            setBoosted(false)
            setGameHearts(gameHearts+1)
            break;

          case "double-score":
            setBoosted(false)
            setUserPoints(userPoints*2)
            break;

          case "double-heart":
            setBoosted(false)
            setGameHearts(gameHearts*2)
            break;

        }
        console.log("boooosted")
      } else {
        console.log("Wrong name")
        if (buttonPressed) {
          setBoosted(false)
          setShowName(true)
        }
      }
    }
  }

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
    const { prediction, firstPokemonPoints, secondPokemonPoints } = comparePokemons(
      pokemon1,
      pokemon2,
      allTypes,
      userPrediction,
        boosted
    );
    setStyle({ visibility: "visible" });
    setButtonsStyle({ visibility: "hidden" });
    if (prediction === false) {
      setGameHearts(new Array(gameHearts.length - 1));
    } else if (prediction === true) {
      setUserPoints(userPoints + 1);
    }
    setBoosted(false)

    setTimeout(() => handleChangeRoundClick(), 1000);
  };

  return (
    <div className="battleground container">


      <div className="button-interaction" style={buttonsStyle}>
        <ButtonComponent
          text={"WIN"}
          onClick={() => handleClickUserDecicision("leftWin")}
          style={{ color: "#00ff03" }}
        />

        <ButtonComponent
          text={"LOSE"}
          onClick={() => handleClickUserDecicision("leftLoose")}
          style={{ color: "red" }}
        />

        <ButtonComponent
          text={"DRAW"}
          onClick={() => handleClickUserDecicision("draw")}
          style={{ color: "yellow" }}
        />
      </div>

      {/* <div className="topscreen-message">
        Choose prediction for the left card
      </div> */}

      <div
        onContextMenu={(e) => e.preventDefault()}
        className="cards-container"
      >
        {/*{Object.keys(pokemon1).length > 0 && Object.keys(pokemon2).length > 0 && Object.keys(types) && typesflag &&*/}
        {/*<div> {whoWillWin(pokemon1, pokemon2, types, boosted)} </div>}*/}
        {Object.keys(pokemon1).length > 0 && (
          <Card boosted={boosted} showName={showName} pokemon={pokemon1} key={pokemon1.id} style={style} />
        )}

        <div className="battleground versus">
          <img src={VSLogo} />
        </div>
        {Object.keys(pokemon2).length > 0 && (
          <Card boosted={false} showName={true} pokemon={pokemon2} key={pokemon2.id} style={style} />
        )}
        {/* {Object.keys(allTypes).length > 0 && <Multipliers types={allTypes} />} */}
      </div>
      {!showName && <GuessPokemonNameComponent tryName={tryName} yourPokemon={pokemon1}
          reward={rewards[Math.trunc(Math.random()*rewards.length)]}
      />}

    </div>
  );
};
export default CardsContainer;
