import React from "react";
import "./backGroundComponent.styles.css";
const BackgroundImage = ({ image }) => (
  <div className="background">
    <img className="backgroundImage" src={image} />
  </div>
);
export default BackgroundImage;
