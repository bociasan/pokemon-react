import './App.css';
// import {pokemons} from './data/pokemons.js'
// import {typeColor} from "./data/typeColor";
// import {pokemonsFirst20} from "./data/pokemons-first20";

import {Card} from './components/Card'
import './styles/card.css'
import './styles/fonts.css'
import {useEffect, useState} from "react";

function App() {
    // pokemonsFirst20.forEach((pokemon) => pokemon.id = pokemon.url.slice(0, -1).split("/").pop())

    const [pokemons, setPokemons] = useState('')

    useEffect(()=> {
        (async (limit = 5) => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`);
            const json = await res.json();
            json.results.forEach((pokemon) => pokemon.id = pokemon.url.slice(0, -1).split("/").pop())
            //console.log(json.results);
            setPokemons(json.results)
        })();
    }, [])

    return <div className="cards-container">
            {
                pokemons && pokemons.map((pokemon) =>
                    (<Card key={pokemon.id} pokemon={pokemon}/>))
            }
        </div>


}

export default App;
