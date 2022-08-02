import React from "react";
import "./buttonComponent.css";

export const ButtonComponent = ({
  style,
  text,
  onClick,
  className = "buttonComponent",
}) => {
  return (
    <button onClick={onClick} className={className} style={{ ...style }}>
      {text}
    </button>
  );
};
