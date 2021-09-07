import React, { useContext, useEffect, useState } from "react";
import Job from "../common/Job";
import Section from "../common/Section";
import Title from "../common/Title";
import { ThemeContext } from "../App";
import experiences from "./experience";

function Experience() {
  const theme = useContext(ThemeContext);
  const [darkTheme, setDarkTheme] = useState(true);
  // console.log(darkTheme);
  const experienceList = experiences.map((experience, i) => {
    if (darkTheme)
      return (
        <Job
          key={i}
          job={experience.job}
          time={experience.time}
          description={experience.description}
          img={theme ? experience.img : experience.dark_img}
          pos={i}
        />
      );
  });
  const styles = {
    container: {
      height: "70vh",
      width: "70%",
      overflowY: "scroll",
    },
  };
  return <div style={styles.container}>{experienceList}</div>;
}

export default Experience;
