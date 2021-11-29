import React from "react";
import Project from "./Project";
import lwq from "../../../assets/lwq.svg";

const description =
  "Web Application based on Kahoot playstyle. Here you will be able to create quizzes and participate in them";
const tags = ["React", "Express", "Node", "Javascript", "Redux", "MySQL"];

function LWQ() {
  return (
    <Project
      name="LWQ (Learn With Quizzes)"
      img={lwq}
      description={description}
      tags={tags}
    />
  );
}

export default LWQ;
