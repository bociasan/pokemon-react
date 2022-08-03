import React from "react";

const Popup = (props) => {
  return props.trigger ? (
    <div className="popup-box">
      <div className="box">
        {props.shouldClose ? (
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            X
          </button>
        ) : (
          ""
        )}

        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
};

export default Popup;
