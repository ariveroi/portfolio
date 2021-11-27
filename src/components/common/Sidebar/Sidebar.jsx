import React, { useState, useEffect, useRef } from "react";
import * as AiIcons from "react-icons/ai";

function Sidebar(props) {
  const hoverButton = useRef(null);
  const [hover, setHover] = useState(false);

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    button: {
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      fontSize: "1.5rem",
      fontWeight: "bold",
      color: props.theme ? "#237D82" : "#fff",
      borderBottom: hover
        ? `3px solid ${props.theme ? "#237D82" : "#fff"}`
        : "none",
      WebkitTransition: "color 1s, border-color 1s",
    },
  };

  useEffect(() => {
    hoverButton.current.addEventListener("mouseover", () => {
      setHover(true);
    });
    hoverButton.current.addEventListener("mouseout", () => {
      setHover(false);
    });

    // let button = document.querySelector("changeThemeButton");
    // console.log(button);
    // document
    //   .querySelector("#changeThemeButton")
    //   .addEventListener("hover", () => {
    //     document.querySelector("#changeThemeButton").style.backgroundColor =
    //       "red";
    //   });
  });

  return (
    <div>
      <div>
        <AiIcons.AiOutlineClose
          size={30}
          color={props.theme ? "000" : "fff"}
          onClick={props.onClick}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div style={styles.container}>
        <button
          ref={hoverButton}
          style={styles.button}
          onClick={props.changeTheme}
        >
          Change theme
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
