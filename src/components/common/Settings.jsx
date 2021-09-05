import React, { useState, useContext, useEffect } from "react";
import { ThemeContext } from "../App";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";

function Settings(props) {
  const darkTheme = useContext(ThemeContext);
  return (
    <div onClick={props.click} style={style}>
      {darkTheme ? (
        <IoSettingsOutline
          size={30}
          color="fff"
          style={{ backgroundColor: "#000" }}
        />
      ) : (
        <IoSettingsOutline
          size={30}
          color="#000"
          style={{ backgroundColor: "#fff" }}
        />
      )}
    </div>
  );
}

const style = {
  zIndex: 10001,
  position: "absolute",
  right: 0,
  cursor: "pointer",
  margin: "5px",
};

export default Settings;
