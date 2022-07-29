import './App.css';
import {pokemons} from './data/pokemons.js'
import {typeColor} from "./data/typeColor";
import {Card} from './components/Card'
import './styles/card.css'
import './styles/fonts.css'
import {pokemonsFirst20} from "./data/pokemons-first20";

function App() {
    pokemonsFirst20.forEach((pokemon) => pokemon.id = pokemon.url.slice(0, -1).split("/").pop())

    // console.log(types.map((type) => {
    //     return {'type': type.name, 'color':''}
    // }))


    return <div className="cards-container">
            {
                pokemonsFirst20.map((pokemon) =>
                    (<Card key={pokemon.id} pokemon={pokemon}/>))
            }
        </div>


}

export default App;
