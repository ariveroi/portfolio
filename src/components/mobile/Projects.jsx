import React from "react";

import flappy_bird from "../../assets/flappy_bird.svg";
import padle from "../../assets/padle.svg";
import lalberca from "../../assets/lalberca.svg";
import lwq from "../../assets/lwq.svg";

import { useHistory } from "react-router-dom";

//const imgs = [flappy_bird, padle, lwq, lalberca];
const imgs = [
  {
    src: flappy_bird,
    alt: "flappy",
  },
  {
    src: padle,
    alt: "padle",
  },
  {
    src: lwq,
    alt: "lwq",
  },
  {
    src: lalberca,
    alt: "lalberca",
  },
];

function Projects() {
  const history = useHistory();

  const redirect = (path) => {
    history.push(path);
  };

  const imgs_list = imgs.map((img, index) => {
    return (
      <div
        onClick={() => redirect(img.alt)}
        className="project-item"
        key={index}
      >
        <img src={img.src} alt="project" style={styles.img} />
      </div>
    );
  });
  return (
    <div>
      <div style={styles.container}>{imgs_list}</div>;
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: "20px",
    marginBottom: "50px",
  },
  img: {
    width: "130px",
    height: "130px",
    objectFit: "contain",
  },
};

export default Projects;
