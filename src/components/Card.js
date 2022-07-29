import {useEffect, useState} from "react";
import {typeColor} from "../data/typeColor";

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
                        <div className="shadow"></div>
                    </div>
                </div>
                <div className="id-div">{pokemon.id}</div>
                <div className="details-container">
                    <div className="pokemon-name">{pokemon.name}</div>
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