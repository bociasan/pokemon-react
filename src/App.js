import React from "react";
import "./App.css";
// import {pokemons} from './data/pokemons.js'
// import {typeColor} from "./data/typeColor";
// import {pokemonsFirst20} from "./data/pokemons-first20";

import { Card } from "./components/Card";
import "./styles/fonts.css";
import { useEffect, useState } from "react";
import { AnotherCard } from "./components/AnotherCard";

function App() {
  // pokemonsFirst20.forEach((pokemon) => pokemon.id = pokemon.url.slice(0, -1).split("/").pop())

  const [pokemons, setPokemons] = useState("");

  useEffect(() => {
    (async (limit = 4) => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`
      );
      const json = await res.json();
      json.results.forEach(
        (pokemon) =>
          (pokemon.id = pokemon.url
            .slice(0, -1)
            .split("/")
            .pop())
      );
      //console.log(json.results);
      setPokemons(json.results);
    })();
  }, []);

  const [x, setX] = useState("0");
  const [y, setY] = useState("0");
  // let x,y;
  const pokeballMove = (e) => {
    setX(`${e.clientX + 30}px`);
    setY(`${e.clientY + 35}px`);
    // console.log(x)
    // x = `${e.clientX}px`
    // y = `${e.clientY}px`
  };

  return (
    <div
      onContextMenu={(e) => e.preventDefault()}
      className="cards-container"
      onMouseMove={(e) => pokeballMove(e)}
    >
      {pokemons &&
        pokemons.map((pokemon) => <Card key={pokemon.id} pokemon={pokemon} />)
      // (<AnotherCard key={pokemon.id} pokemon={pokemon}/>))
      }
      <div className="cards-container">
        {pokemons &&
          pokemons.map((pokemon) => (
            <AnotherCard key={pokemon.id} pokemon={pokemon} />
          ))}
      </div>

      <div className="pokeball" style={{ left: x, top: y }}>
        <img
          style={{ width: 40, height: 40 }}
          src={require("./img/pokeball.png")}
        />
      </div>
    </div>
  );
}

export default App;
