import React from "react";
import Project from "./Project";

import flappy_bird from "../../../assets/flappy_bird.svg";
const description = "Flapy Bird game with Artifical Intelligence";
const tags = ["Python", "AI", "Machine Learning"];
function Flappy() {
  return (
    <Project
      name="AI Flappy Bird"
      img={flappy_bird}
      description={description}
      tags={tags}
    />
  );
}

export default Flappy;
