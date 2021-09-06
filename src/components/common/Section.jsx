import React from "react";
import useTheme from "../hooks/useTheme";
function Section(props) {
  let color = useTheme();
  color === "#000" ? (color = "#237D82") : (color = "#fff");

  const styles = {
    section: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: `2px 2px 2px ${color}`,
      borderRadius: "30px",
      padding: "30px",
      backgroundColor: color,
      margin: "15px",
      height: "100px",
      zIndex: "2000",
    },
  };

  return (
    <div
      id={props.id}
      className={`focusable`}
      style={styles.section}
      onClick={props.click}
    >
      {props.children}
    </div>
  );
}

export default Section;
