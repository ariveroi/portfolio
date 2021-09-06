import React, { useState, useEffect } from "react";
import useTheme from "../hooks/useTheme";
import Title from "./Title";

function StyledButton(props) {
  const [top, setTop] = useState(props.top);
  const [left, setLeft] = useState(props.left);
  const [height, setHeight] = useState(100);
  let color = useTheme();
  console.log(color);
  color === "#000" ? (color = "#237D82") : (color = "#fff");
  console.log(color);
  useEffect(() => {
    setTop(0);
    setLeft(0);
    setHeight(50);
  }, []);

  const styles = {
    button: {
      top: top + "px",
      left: left + "px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: `2px 2px 2px ${color}`,
      borderRadius: "30px",
      padding: "30px",
      backgroundColor: color,
      margin: "15px",
      height: height + "px",
      zIndex: "2000",
      cursor: "pointer",
      width: props.width,
    },
  };
  return (
    <div
      //   id="skills-section-styled-button"

      //   className="styled-button"
      className="movable"
      style={styles.button}
      onClick={props.click}
    >
      <Title revert={true}>{props.title}</Title>
    </div>
  );
}

export default StyledButton;
