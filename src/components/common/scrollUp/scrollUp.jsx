import React, { useContext, useState, useEffect } from "react";
import "./scrollUp.css";
import { ThemeContext } from "../../laptop/LaptopApp";

function ScrollUp(props) {
  const [theme, setTheme] = useState("light");
  const darkTheme = useContext(ThemeContext);
  useEffect(() => {
    darkTheme ? setTheme("dark") : setTheme("light");
  }, [darkTheme]);
  return (
    <div onClick={props.click} id="containerUp">
      <div className={`chevronUp ${theme}`}></div>
      <div className={`chevronUp ${theme}`}></div>
      <div className={`chevronUp ${theme}`}></div>
      <span className={`text-sc ${theme}`}>Previous</span>
    </div>
  );
}

export default ScrollUp;
