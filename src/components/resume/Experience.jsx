import React, { useContext } from "react";
import Job from "../common/Job";
import { ThemeContext } from "../App";
import { experiences } from "./resume";
import InnerContainer from "../common/InnerContainer";

function Experience() {
  const theme = useContext(ThemeContext);
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
          img={theme ? experience.img : experience.dark_img}
          pos={i}
        />
      );
    else return <></>;
  });
  const styles = {
    container: {
      height: "70vh",
      width: "70%",
      overflowY: "scroll",
    },
  };
  return (
    <InnerContainer>
      <div style={styles.container}>{experienceList}</div>
    </InnerContainer>
  );
}

export default Experience;
