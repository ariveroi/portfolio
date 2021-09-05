import React, { useState, useEffect } from "react";

function StyledButton(props) {
  const [top, setTop] = useState(props.top);
  const [left, setLeft] = useState(props.left);
  const [animate, setAnimate] = useState("");

  const m = props.top / props.left;
  console.log(m);

  useEffect(() => {
    setInterval(() => {
      if (left > 0) setLeft(left - 1);
    }, 5);
  }, [left]);

  const move = () => {
    if (top >= 0) setTop(top - 1);
    if (left >= 0) setLeft(left - 1);
    // setTimeout(() => {
    //   console.log("aa");
    // }, 20000);
  };

  const styles = {
    button: {
      position: "absolute",
      top: top,
      left: left,
      backgroundColor: "white",
    },
  };
  return (
    <div
      //   id="skills-section-styled-button"
      style={styles.button}
      //   className="styled-button"
      //   className={animate}
    >
      Hello
    </div>
  );
}

export default StyledButton;
