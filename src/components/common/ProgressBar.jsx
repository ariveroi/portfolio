import React from "react";
import Text from "./Text";

function ProgressBar(props) {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    headings: {
      display: "flex",
      justifyContent: "space-between",
    },
    progress: {
      width: props.width,
      height: "10px",
      borderRadius: "20px",
      border: "1px solid black",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.headings}>
        <Text size={15}>Begginer</Text>
        <Text size={15}>Medium</Text>
        <Text size={15}>Expert</Text>
      </div>
      <div style={styles.progress}></div>
    </div>
  );
}

export default ProgressBar;
