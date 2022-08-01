// import {pokemons} from './data/pokemons.js'
// import {typeColor} from "./data/typeColor";
// import {pokemonsFirst20} from "./data/pokemons-first20";

import { Card } from "../Card";
import "../../styles/fonts.css";
import { useEffect, useState } from "react";
import { AnotherCard } from "../AnotherCard.js";

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

  return (
    <div onContextMenu={(e) => e.preventDefault()} className="cards-container">
      {pokemons.length > 0 &&
        pokemons.map((pokemon) => <Card pokemon={pokemon} key={pokemon.id} />)}
    </div>
  );
}
export default PokemonCards;
