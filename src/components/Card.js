import {useEffect, useState} from "react";
import {typeColor} from "../data/typeColor";
import '../styles/card.css'

export const Card = (props) => {
    const {pokemon} = props
    const [pokemonDetails, setPokemonDetails] = useState('')
    const [types, setTypes] = useState('')


    useEffect(()=> {
        (async () => {
            const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.id}`);
            const json = await res.json();
            //console.log(json);
            setPokemonDetails(json)
        })();
    }, [])

    useEffect(()=>{
        setTypes(pokemonDetails.types)
    }, [pokemonDetails])

    return (
        <div className="card">
            <div className="card-container">
                <div className="img-shadow-div">
                    <div className="img-div">
                        <img className="pokemon-image" src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}/>
                        {/*<img className="pokemon-image" src={`https://img.pokemondb.net/sprites/home/normal/2x/${pokemon.name}.jpg`}/>*/}
                        {/*<img className="pokemon-image" src={`https://projectpokemon.org/images/normal-sprite/${pokemon.name}.gif`}/>*/}
                        {/*<img className="pokemon-image" src={`https://projectpokemon.org/images/sprites-models/pgo-sprites/pm${pokemon.id}.icon.png`}/>*/}
                        {/*{pokemonDetails && <img className="pokemon-image" src={pokemonDetails.sprites.front_default}/>}*/}
                        <div className="shadow"></div>
                    </div>
                </div>
                <div className="id-div">{pokemon.id}</div>
                <div className="details-container">
                    <div className="name">{pokemon.name}</div>
                    <div className="types-container">
                        {
                            types && types.map((type) => (
                                <div className="type"
                                     // style={{"--custom-type-color": typeColor.find((findType)=> findType.type === type.type.name).color}}
                                    >
                                    {type.type.name}
                                </div>))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}