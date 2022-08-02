import "./rulesPage.css";
import pokemonLogo from "../../img/pokemon_logo.png";
import fightLogo from "../../img/fight_logo.png";
import rules_logo from '../../img/rules_logo.png'
import { Link } from "react-router-dom";
import BackgroundImage from "../BackgroundComponent/backgroundComponent";
import backGroundImage from "../../img/background.webp";
import {Multipliers} from "../Multipliers/Multipliers";
import {fetchTypesData} from "../../functions/utils";
import {useEffect, useState} from "react";

const RulesPage = () => {
    const [types, setTypes] = useState({})

    useEffect(()=>{
        fetchTypesData().then(res => setTypes(res))
    }, [])
  return (
    <div className="introPage">
      <BackgroundImage image={backGroundImage} />

      <div className="rules-page-container">
          {Object.keys(types).length>0 && <Multipliers types={types}/>}
            <div>Points are calculated by ... </div>
      </div>
    </div>
  );
};
export default RulesPage;
