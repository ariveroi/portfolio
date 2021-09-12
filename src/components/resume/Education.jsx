import React, { useContext, useEffect, useState } from "react";
import Job from "../common/Job";
import Section from "../common/Section";
import Title from "../common/Title";
import { ThemeContext } from "../App";
import { educations } from "./resume";
import InnerContainer from "../common/InnerContainer";

function Education() {
  const theme = useContext(ThemeContext);
  const [darkTheme, setDarkTheme] = useState(true);
  // console.log(darkTheme);
  const educationList = educations.map((education, i) => {
    if (darkTheme)
      return (
        <Job
          key={i}
          job={education.job}
          time={education.time}
          description={education.description}
          img={theme ? education.img : education.dark_img}
          pos={i}
        />
      );
  });
  const styles = {
    container: {
      height: "70vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  };
  return (
    <InnerContainer>
      <div style={styles.container}>{educationList}</div>
    </InnerContainer>
  );
}

export default Education;
