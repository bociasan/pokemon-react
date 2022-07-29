import {useEffect, useState} from "react";

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
                <div className="img-div">
                    <img className="pokemon-image" src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}/>
                </div>
                {/*<div className="index-div">#{index}</div>*/}
                <div className="details-container">
                    <div className="pokemon-name">{pokemon.name}</div>
                    <div className="types-container">
                        {
                            types && types.map((type) => (<div className="type"> {type.type.name} </div>))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}