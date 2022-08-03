import React from "react";

const Popup = (props) => {
  const nameClass = props.className;
  return props.trigger ? (
    <div className="popup-box">
      <div className={nameClass}>
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
