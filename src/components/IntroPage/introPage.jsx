import React from "react";
import "./introPage.css";
import pokemonLogo from "../../img/pokemon_logo.png";
import fightLogo from "../../img/fight_logo.png";
import rules_logo from '../../img/rules_logo.png'
import { Link } from "react-router-dom";
import BackgroundImage from "../BackgroundComponent/backgroundComponent";
import backGroundImage from "../../img/background.webp";

const IntroPage = ({ setUserPoints }) => {
  return (
    <div className="introPage">
      <BackgroundImage image={backGroundImage} />

      <div className="introPage vh100">

        <img className="logo" src={pokemonLogo} />
        <Link
          to="/battleground"
          className="button"
          onClick={() => setUserPoints(0)}
        >
          <img className="buttonLogo" src={fightLogo} />
        </Link>



      </div>
        <Link
            to="/rules"
            className="rules-button"
            onClick={() => setUserPoints(0)}
        >
            <img className="rules-img" src={rules_logo} />
        </Link>
    </div>
  );
};
export default IntroPage;
