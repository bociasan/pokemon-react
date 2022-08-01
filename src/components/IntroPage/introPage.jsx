import React from "react";
import "./introPage.css";
import pokemonLogo from "./background-logo.png";
import fightLogo from "./fight_logo.png";
import { Link } from "react-router-dom";

const IntroPage = () => {
  return (
    <div className="introPage">
      <div className="introPage background"></div>
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
