import { Card } from "./Card";
import "./card.css";
import "../../styles/fonts.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../BackgroundComponent/backgroundComponent";
import backGroundImage from "../../img/background.webp";
import {fetchPokemonData, fetchPokemonsData, fetchData, comparePokemons, fetchTypesData} from "../../functions/utils";
import {Multipliers} from "../Multipliers/Multipliers";
function PokemonCards() {
  const [battleRound, setBattleRound] = useState(1);
  const [battleGroundCardsStatus, setBattleGroundCardStatus] = useState(false);
  const [allPokemons, setAllPokemons] = useState([])
  const [allTypes, setAllTypes] = useState({})
  const [pokemon1, setPokemon1] = useState({})
  const [pokemon2, setPokemon2] = useState({})

  useEffect(()=>{
    fetchTypesData().then(types => setAllTypes(types))
    fetchPokemonsData().then(res => {
      setAllPokemons(res.results)
      // console.log(res.results)

      // setRandomPokemons()

      // fetchData(res.results[0].url).then(pokemon1Data => setPokemon1(pokemon1Data))
      // fetchData(res.results[14].url).then(pokemon2Data => setPokemon2(pokemon2Data))
    })
  }, [])

  const setRandomPokemons = () => {
    // console.log(allPokemons)

    fetchData(allPokemons[Math.trunc(Math.random()*allPokemons.length)].url).then(pokemon1Data => setPokemon1(pokemon1Data))
    fetchData(allPokemons[Math.trunc(Math.random()*allPokemons.length)].url).then(pokemon2Data => setPokemon2(pokemon2Data))
  }

  useEffect(()=>{
    if (allPokemons.length>0){
      setRandomPokemons()
    }
  }, [allPokemons])

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

            {Object.keys(pokemon1).length>0 && <Card pokemon={pokemon1} key={pokemon1.id} />}
            {Object.keys(pokemon2).length>0 && <Card pokemon={pokemon2} key={pokemon2.id} />}
            {Object.keys(allTypes).length>0 &&<Multipliers types={allTypes}/>}
          </div>
          <button className="compare-button" onClick={() => {comparePokemons(pokemon1, pokemon2, allTypes); }}> Compare</button>
          <button className="random-button" onClick={() => {setRandomPokemons() }}> Set Random</button>

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
