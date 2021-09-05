import React from "react";

function LargeImage(props) {
  const styles = {
    img: {
      height: "300px",
    },
  };
  return <img src={props.src} alt={props.alt} style={styles.img} />;
}

export default LargeImage;
