import "./card.css";
import "../../styles/fonts.css";
import { useEffect, useState } from "react";
import BackgroundImage from "../BackgroundComponent/backgroundComponent";
import backgroundImage from "../../img/background.webp";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {fetchPokemonData, fetchPokemonsData, fetchData, comparePokemons, fetchTypesData} from "../../functions/utils";
import {Multipliers} from "../Multipliers/Multipliers";
import RoundIntroduction from "./RoundIntroduction";
function PokemonCards() {
  const [gameHeart, setGameHeart] = useState(new Array(3));
  const [pokemons, setPokemons] = useState([]);
  const [battleGroundCardsStatus, setBattleGroundCardStatus] = useState(false);
  const [allPokemons, setAllPokemons] = useState([])
  const [allTypes, setAllTypes] = useState({})
  const [pokemon1, setPokemon1] = useState({})
  const [pokemon2, setPokemon2] = useState({})
  useEffect(()=>{
    fetchTypesData().then(types => setAllTypes(types))
    fetchPokemonsData().then(res => {
      setAllPokemons(res.results)
    })
  }, [])
  const setRandomPokemons = () => {
    fetchData(allPokemons[Math.trunc(Math.random()*allPokemons.length)].url).then(pokemon1Data => setPokemon1(pokemon1Data))
    fetchData(allPokemons[Math.trunc(Math.random()*allPokemons.length)].url).then(pokemon2Data => setPokemon2(pokemon2Data))
  }
  useEffect(()=>{
    if (allPokemons.length>0){
      setRandomPokemons()
    }
  }, [allPokemons])
  // <div
  //           onContextMenu={(e) => e.preventDefault()}
  //           className="cards-container"
  //         >

  //           {Object.keys(pokemon1).length>0 && <Card pokemon={pokemon1} key={pokemon1.id} />}
  //           {Object.keys(pokemon2).length>0 && <Card pokemon={pokemon2} key={pokemon2.id} />}
  //           {Object.keys(allTypes).length>0 &&<Multipliers types={allTypes}/>}
  //         </div>
  //         <button className="compare-button" onClick={() => {comparePokemons(pokemon1, pokemon2, allTypes); }}> Compare</button>
  //         <button className="random-button" onClick={() => {setRandomPokemons() }}> Set Random</button>
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
