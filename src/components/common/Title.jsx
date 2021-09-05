import React from "react";
import useTheme from "../hooks/useTheme";

function Title({ revert = false, children }) {
  const color = useTheme(revert);
  let style = {
    color: color,
  };
  return <h4 style={style}>{children}</h4>;
}

export default Title;
