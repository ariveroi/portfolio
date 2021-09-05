import React from "react";
import * as AiIcons from "react-icons/ai";

import "./Modal.scss";

const Modal = (props) => {
  return (
    <div className={`mymodal ${props.show}`}>
      <div className="mymodal-content">
        <div className="mymodal-header">
          <h4>{props.title || ""}</h4>
          <button
            onClick={props.onHide}
            className="mymodal-close-button "
            style={{ cursor: "pointer" }}
          >
            <AiIcons.AiOutlineClose />
          </button>
        </div>
        <div className="mymodal-body">{props.children}</div>
        <div className="mymodal-footer">
          <button onClick={props.onHide} style={styles.button}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  button: {
    border: "none",
    boxShadow: `1px 1px 1px #000`,
    borderRadius: "3px",
    padding: "10px 30px 10px 30px",
    backgroundColor: "#237D82",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Modal;
