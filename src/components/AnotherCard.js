import React from "react";
import "../styles/anotherCard.css";
import { useEffect, useState } from "react";
export const AnotherCard = (props) => {
  const { pokemon } = props;
  const [pokemonDetails, setPokemonDetails] = useState("");
  const [types, setTypes] = useState("");

  useEffect(() => {
    (async () => {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon.id}`
      );
      const json = await res.json();
      //console.log(json);
      setPokemonDetails(json);
    })();
  }, []);

  useEffect(() => {
    setTypes(pokemonDetails.types);
  }, [pokemonDetails]);

  return (
    <div className="another-card">
      <div className="pokemon-id-div-top">
        <div className="pokemon-id">{pokemon.id}</div>
      </div>

      <div className="pokemon-name-div-top">
        <div className="pokemon-name">{pokemon.name}</div>
      </div>

      <div className="pokemon-pic-div">
        <img
          className="pokemon-pic"
          src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
        />
      </div>

      <div className="pokemon-id-div-bottom">
        <div className="pokemon-id">{pokemon.id}</div>
      </div>

      <div className="pokemon-name-div-bottom">
        <div className="pokemon-name">{pokemon.name}</div>
      </div>
    </div>
  );
};
