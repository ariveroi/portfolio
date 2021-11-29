import React from "react";
import Project from "./Project";

import lalberca from "../../../assets/lalberca.svg";
const description = "Web page for the restaurant L'Alberca";
const tags = ["React", "Javascript", "HTML", "CSS"];
function Lalberca() {
  return (
    <Project
      name="L'Alberca"
      description={description}
      img={lalberca}
      tags={tags}
    />
  );
}

export default Lalberca;
