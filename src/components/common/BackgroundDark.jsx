import React, { useEffect } from "react";
import useWindowsSize from "../hooks/useWindowsSize";

function BackgroundDark() {
  const { width, height } = useWindowsSize();
  useEffect(() => {
    background();
  }, []);
  const background = () => {
    let fillColor = "rgba(0, 0, 0, .1)";
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
      ctx.fillStyle = fillColor;
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
  return <canvas style={styles.canvas}></canvas>;
}

const styles = {
  canvas: {
    position: "fixed",
    width: "100%",
    height: "100vh",
    zIndex: "-1",
  },
};

export default BackgroundDark;
