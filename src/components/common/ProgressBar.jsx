import React from "react";
import Text from "./Text";
import useTheme from "../hooks/useTheme";

function ProgressBar(props) {
  let color = useTheme();
  color === "#000" ? (color = "#237D82") : (color = "#fff");
  // color = "#237D82";
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginRight: "30px",
    },
    progress: {
      width: "400px",
      height: "10px",
      borderRadius: "20px",
      border: `1px solid #237D82`,
      marginRight: "10px",
    },
    fill: {
      width: props.fill + "%",
      height: "10px",
      borderRadius: "20px",
      borderLeft: `1px solid ${color}`,
      backgroundColor: color,
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.progress}>
        <div style={styles.fill}></div>
      </div>
      <Text size={10}>{props.fill}%</Text>
    </div>
  );
}

export default ProgressBar;
