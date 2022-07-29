import React from "react";
import "./introPage.css";
import pokemonLogo from "./background-logo.png";
import fightLogo from "./fight_logo.png";

const IntroPage = () => {
  return (
    <div className="introPage">
      <div className="introPage background"></div>
      <div className="introPage container">
        <img className="logo" src={pokemonLogo} />
        <div className="button">
          <img className="buttonLogo" src={fightLogo} />
        </div>
      </div>
    </div>
  );
};
export default IntroPage;
