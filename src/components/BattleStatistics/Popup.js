import React from "react";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup-box">
      <div className="box">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
