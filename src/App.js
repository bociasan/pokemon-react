import './App.css';
// import {pokemons} from './data/pokemons.js'
// import {typeColor} from "./data/typeColor";
// import {pokemonsFirst20} from "./data/pokemons-first20";
import {fetchData} from "./functions/utils";
import {Card} from './components/Card'
import './styles/fonts.css'
import {useEffect, useState} from "react";
import {AnotherCard} from "./components/AnotherCard";

function App() {
    const TYPES_URL = `https://pokeapi.co/api/v2/type`
    const POKEMONS_URL = `https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`
    const [types, setTypes] = useState({})
    const [x, setX] = useState('0')
    const [y, setY] = useState('0')
    const pokeballMove = (e) => {
        setX(`${e.clientX+30}px`)
        setY(`${e.clientY+35}px`)
    }




    useEffect(()=>{
        const getTypes = async () => {
            const {results} = await fetchData(TYPES_URL)
            const relations = {}
            const types = await Promise.all(results.map(async type=> await fetchData(type.url)))
            types.forEach(element=>{
                relations[element.name] = element
            })
            //console.log(relations)
            return relations
        }


        // const t0 = performance.now();
        getTypes().then(pokemonRelations =>   setTypes(pokemonRelations))
        // const t1 = performance.now();

        const getTypes2 = async () => {
            let types = {}
            fetchData(TYPES_URL).then(res => res.results.map(el => fetchData(el.url)
                .then(rsp => types[el.name] = rsp)))
            return types
        }

        // const t3 = performance.now();
        // getTypes2().then(pokemonRelations =>   console.log(pokemonRelations))
        // const t4 = performance.now();
        //
        // console.log(`Call Zsolt took ${t1 - t0} milliseconds.`);
        // console.log(`Call Sandu took ${t4 - t3} milliseconds.`);
    }, [])


    useEffect(()=> {
        const getPokemons = async () => {

        }
    }, [])


    useEffect(()=>{
        // console.log(types)
    }, [types])

    return <div onContextMenu={(e)=> e.preventDefault()} className="cards-container" onMouseMove={(e)=>pokeballMove(e)}>
                    <Card key={1} id={1}/>
                    <Card key={10} id={15}/>
                    {/*<Card key={7} id={7}/>*/}

            {/*<div className="cards-container">*/}
            {/*    {*/}
            {/*        pokemons && pokemons.map((pokemon) =>*/}
            {/*            (<AnotherCard key={pokemon.id} pokemon={pokemon}/>))*/}
            {/*    }*/}
            {/*</div>*/}

            <div className="pokeball" style={{left:x, top:y}} >
                <img  style={{width: 40, height:40}} src={require("./img/pokeball.png")}/>
            </div>

            <div> {} </div>
        </div>


}

export default App;
