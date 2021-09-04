import React from "react";
import Container from "./Container";

import skills from "../assets/skills.svg";
import experience from "../assets/experience.svg";
import education from "../assets/education.svg";

export default function Curriculum(props) {
  const showSkills = () => {
    console.log("showSkills");
  };

  return (
    <Container next="/projects" prev="/intro" history={props.history}>
      <div style={styles.content}>
        <div className="focusable" style={styles.section} onClick={showSkills}>
          <img src={skills} alt="" style={styles.img} />
          <h4>Skills</h4>
        </div>
        <div className="focusable" style={styles.section}>
          <img src={experience} alt="" style={styles.img} />
          <h4>Experience</h4>
        </div>
        <div className="focusable" style={styles.section}>
          <img src={education} alt="" style={styles.img} />
          <h4>Education</h4>
        </div>
      </div>
    </Container>
  );
}

const styles = {
  content: {
    height: "100vh",
    width: "70%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  section: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  img: {
    height: "300px",
  },
};
