import React, { useEffect, useState } from "react";
import ScrollDown from "../scrollDown/scrollDown";
import ScrollUp from "./scrollUp/scrollUp";

import { useHistory } from "react-router-dom";
//import useWindowsSize from "../hooks/useWindowsSize";

function Container(props) {
  const history = useHistory();
  const [loaded, setLoaded] = useState("");
  //const { width, height } = useWindowsSize();

  useEffect(() => {
    setLoaded("loaded");

    return () => {
      setLoaded("");
    };
  }, []);

  //let isMobile = width > 768 ? false : true;

  const up = () => {
    history.push(props.prev);
  };

  const down = () => {
    history.push(props.next);
  };

  const styles = {
    container: {
      position: "fixed",
      top: 0,
      maxHeight: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "50px",
    },
  };

  return (
    <div className={`container ${loaded}`} style={styles.container}>
      {props.prev === undefined ? <></> : <ScrollUp click={() => up()} />}
      {props.children}
      {props.next === undefined ? <></> : <ScrollDown click={() => down()} />}
    </div>
  );
}

export default Container;
