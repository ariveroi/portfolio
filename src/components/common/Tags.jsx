import React from "react";
import useTheme from "../hooks/useTheme";

function Tags(props) {
  let color = useTheme();
  let backgroundColor = "";
  let textColor = "";
  color === "#000" ? (backgroundColor = "#237D82") : (backgroundColor = "#fff");
  color === "#000" ? (textColor = "#fff") : (textColor = "#333");
  const styles = {
    container: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      alignItems: "center",
      margin: "0 auto",
      width: "100%",
      padding: "0.5rem 0",
    },
    tag: {
      backgroundColor: backgroundColor,
      borderRadius: "0.25rem",
      color: textColor,
      fontSize: "0.75rem",
      fontWeight: "bold",
      margin: "0.25rem",
      padding: "0.5rem",
      textTransform: "uppercase",
    },
  };
  const tags = props.tags.map((tag, index) => (
    <div style={styles.tag} key={index}>
      {tag}
    </div>
  ));

  return <div style={styles.container}>{tags}</div>;
}

export default Tags;
