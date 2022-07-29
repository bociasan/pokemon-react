import './App.css';
import {pokemons} from './data/pokemons.js'
import {Card} from './components/Card'
import './styles/card.css'
import './styles/fonts.css'
import {pokemonsFirst20} from "./data/pokemons-first20";

function App() {
    pokemonsFirst20.forEach((pokemon) => pokemon.id = pokemon.url.slice(0, -1).split("/").pop()  )
    return <div className="cards-container">
            {
                pokemonsFirst20.map((pokemon, index) =>
                    (<Card pokemon={pokemon} index={index+1}/>))
            }
        </div>


}

export default App;
