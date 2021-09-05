import React from "react";
import Container from "./common/Container";
import Text from "./common/Text";

export default function Landing(props) {
  const goNext = () => {
    props.history.push("/curriculum");
  };

  return (
    <Container next="/curriculum">
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
          <Text>
            Hi, I’m <strong style={style.text}>Agustin Rivero</strong>
          </Text>
          <Text>
            I’m a ##<strong style={style.text}>SOFTWARE DEVELOPER</strong> and
            this is [me]{" "}
          </Text>
          <br />
        </div>
      </div>
    </Container>
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
