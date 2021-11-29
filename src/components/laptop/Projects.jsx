import React from "react";
import Container from "../common/Container";
import Carousel from "../common/slider/Carousel";

function Projects() {
  return (
    <Container next="/contact" prev="/curriculum">
      <div style={styles.container}>
        <Carousel />
      </div>
    </Container>
  );
}

const styles = {
  container: {
    display: "flex",
    height: "100vh",
    justifyContent: "flex-end",
  },
};

export default Projects;
