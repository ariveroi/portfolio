import React, { useContext, useState, useEffect } from "react";
import "./scrollDown.css";
import { ThemeContext } from "../App";

function ScrollDown(props) {
  const [theme, setTheme] = useState("light");
  const darkTheme = useContext(ThemeContext);
  useEffect(() => {
    darkTheme ? setTheme("dark") : setTheme("light");
  }, [darkTheme]);
  return (
    <div onClick={props.click} id="containerDown">
      <div className={`chevronDown ${theme}`}></div>
      <div className={`chevronDown ${theme}`}></div>
      <div className={`chevronDown ${theme}`}></div>
      <span className={`text-sc ${theme}`}>Click me</span>
    </div>
  );
}

export default ScrollDown;