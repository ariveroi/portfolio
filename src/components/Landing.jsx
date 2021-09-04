import React, { useEffect } from "react";
import ScrollDown from "./scrollDown/scrollDown";

export default function Landing(props) {
  useEffect(() => {
    background();
  }, []);

  const background = () => {
    var canvas = document.querySelector("canvas"),
      ctx = canvas.getContext("2d");

    // Setting the width and height of the canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Setting up the letters
    var letters =
      "ABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZABCDEFGHIJKLMNOPQRSTUVXYZ123456789132456789123456798132456789123456789123465789";
    letters = letters.split("");

    // Setting up the columns
    var fontSize = 10,
      columns = canvas.width / fontSize;

    // Setting up the drops
    var drops = [];
    for (var i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    // Setting up the draw function
    function draw() {
      ctx.fillStyle = "rgba(255, 255, 255, .1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (var i = 0; i < drops.length; i++) {
        var text = letters[Math.floor(Math.random() * letters.length)];
        ctx.fillStyle = "#237D82";
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        drops[i]++;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
      }
    }

    // Loop the animation
    setInterval(draw, 53);
  };

  const goNext = () => {
    props.history.push("/curriculum");
  };

  return (
    <div
      onClick={goNext}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div style={style.container}>
        <p>
          Hi, I’m <strong style={style.text}>Agustin Rivero</strong>
        </p>
        <p>
          I’m a ##<strong style={style.text}>SOFTWARE DEVELOPER</strong> and
          this is [me]{" "}
        </p>
        <br />
        <ScrollDown />
      </div>
      <canvas style={style.canvas}></canvas>
    </div>
  );
}

const style = {
  container: {
    maxHeight: "100vh",
    minHeight: "100vh",
    width: "90%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "50px",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  text: {
    color: "#227499",
  },
  canvas: {
    position: "absolute",
    width: "100%",
    height: "100vh",
    zIndex: "-1",
  },
};
