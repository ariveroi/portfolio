import React from "react";
import useTheme from "../hooks/useTheme";

function Text(props) {
  const color = useTheme();
  let style = {
    color: color,
    fontSize: props.size || "60px",
  };
  return <p style={style}>{props.children}</p>;
}

export default Text;
