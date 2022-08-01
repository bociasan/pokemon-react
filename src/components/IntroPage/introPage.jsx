import React from "react";
import "./introPage.css";
import pokemonLogo from "../../img/pokemon_logo.png";
import fightLogo from "../../img/fight_logo.png";
import { Link } from "react-router-dom";
import BackgroundImage from "../BackgroundComponent/backgroundComponent";
import backGroundImage from "../../img/background.webp";

const IntroPage = () => {
  return (
    <div className="introPage">
      <BackgroundImage image={backGroundImage} />
      <div className="introPage container">
        <img className="logo" src={pokemonLogo} />
        <Link to="/battleground" className="button">
          <img className="buttonLogo" src={fightLogo} />
        </Link>
      </div>
    </div>
  );
};
export default IntroPage;
