import React from "react";
import Job from "./Job";
import { experiences } from "./resume.js";

function Experience() {
  const darkTheme = true;
  // console.log(darkTheme);
  const experienceList = experiences.map((experience, i) => {
    if (darkTheme)
      return (
        <Job
          key={i}
          job={experience.job}
          time={experience.time}
          description={experience.description}
          img={experience.dark_img}
          pos={i}
        />
      );
    else return <></>;
  });
  const styles = {
    container: {
      //height: "fit-content",
      height: "100vh",
      width: "95%",
      overflowY: "scroll",
      display: "flex",
      flexDirection: "column",
      margin: "auto",
    },
  };
  return (
    <div>
      <div style={styles.container}>{experienceList}</div>
    </div>
  );
}

export default Experience;
