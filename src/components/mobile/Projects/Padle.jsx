import React from "react";
import Project from "./Project";

import padle from "../../../assets/padle.svg";
const description =
  "Mobile Application that helps to create and organize Padel Tournaments between friends";
const tags = ["React", "React Native", "Javascript"];
function Padle() {
  return (
    <Project
      name="Padel Tournaments"
      description={description}
      img={padle}
      tags={tags}
    />
  );
}

export default Padle;
