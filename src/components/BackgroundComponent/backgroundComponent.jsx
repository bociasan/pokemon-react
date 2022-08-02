import React from "react";
import "./backGroundComponent.styles.css";
import backGroundImage from "../../img/background.webp";
const BackgroundImage = ({ image = backGroundImage }) => (
  <div className="background">
    <img className="backgroundImage" src={image} />
  </div>
);
export default BackgroundImage;
