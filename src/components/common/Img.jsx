import React from "react";

function Img(props) {
  const style = {
    margin: "30px",
    height: props.size ? `${props.size}px` : "50px",
  };
  return <img src={props.src} alt={props.alt} style={style} />;
}

export default Img;
