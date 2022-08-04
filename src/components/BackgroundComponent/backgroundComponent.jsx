import React from "react";
import "./backGroundComponent.styles.css";
import backGroundImage from "../../img/background.webp";
const BackgroundImage = ({ image = backGroundImage }) => (
  <div className="background">
    <div
      style={{
        backgroundImage: `url(${image}
        )`,
        height: "100%",
        width: "100%",
        backgroundSize: "100% 100%",
      }}
    ></div>
  </div>
);
export default BackgroundImage;
