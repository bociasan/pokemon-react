import React from "react";
import "./buttonComponent.styles.css";

const ButtonComponent = ({
  style,
  text,
  onClick,
  className = "buttonComponent",
}) => {

  return (
    <button onClick={onClick} className={className} style={{ ...style, "--var-color": style.color }}>
      {text}
    </button>
  );
};
export default ButtonComponent;
