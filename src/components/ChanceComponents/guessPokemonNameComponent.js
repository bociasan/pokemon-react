import "./guessPokemonName.css"
import {useEffect, useState} from "react";
export const GuessPokemonNameComponent = ({yourPokemon, tryName, reward}) => {
    // const IMG_URL = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${yourPokemon.id}.svg`;

    const [inputValue, setInputValue] = useState("")

    useEffect(()=>{
        tryName(inputValue == "" ? " " : inputValue, false, reward.reward)
    }, [inputValue])



    return <div className="guess-pokemon-name-container">
        <div className="guess-pokemon-name-box">
            <div className="guess-pokemon-name-message userFinalInfo">
                {reward.message}
            </div>
            <div className="guess-pokemon-name-img-div">
                {Object.keys(yourPokemon).length>0 &&<img className="guess-pokemon-name-img" src={`https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${yourPokemon.id}.svg`} />}
            </div>
            <div className="guess-pokemon-name-input-button-container">
                <input onChange={(e) => setInputValue(e.target.value)} className="guess-pokemon-name-imput userInput"/>
                <button onClick={()=>tryName(inputValue, true, reward.reward)} className="guess-pokemon-name-button buttonComponent">Guess</button>
            </div>
        </div>
    </div>
}