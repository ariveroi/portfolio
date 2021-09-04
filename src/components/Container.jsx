import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useHistory } from "react-router-dom";

function Container(props) {
  const history = useHistory();
  const [loaded, setLoaded] = useState("");
  useEffect(() => {
    setLoaded("loaded");
    return () => {
      setLoaded("");
    };
  }, []);

  const handleScroll = (e) => {
    if (e.deltaY > 0) {
      history.push(props.next);
    } else {
      history.push(props.prev);
    }
    // history.goBack();
  };

  return (
    <div
      onWheel={(e) => handleScroll(e)}
      className={`container ${loaded}`}
      style={styles.container}
    >
      <Navbar />
      {props.children}
    </div>
  );
}

const styles = {
  container: {
    maxHeight: "100vh",
    minHeight: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontSize: "50px",
  },
};

export default Container;
