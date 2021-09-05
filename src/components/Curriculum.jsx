import React, { useState } from "react";
import Container from "./common/Container";
import StyledButton from "./common/StyledButton";
import skills from "../assets/skills.svg";
import experience from "../assets/experience.svg";
import education from "../assets/education.svg";
import Title from "./common/Title";
import LargeImage from "./common/LargeImage";
import Section from "./common/Section";
import Skills from "./Skills";

export default function Curriculum(props) {
  const [showComponent, setShowComponent] = useState(false);
  const [modalDetail, setModalDetail] = useState({ title: "Hello" });
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const showSkills = () => {
    console.log("showSkills");
  };

  const handleClick = (id) => {
    setShowComponent(true);
    const doc = document.getElementById(id);
    setTop(doc.offsetTop);
    setLeft(doc.offsetLeft);
    console.log(doc.offsetLeft, doc.offsetTop);
  };

  return (
    <Container next="/projects" prev="/intro">
      {showComponent ? (
        <div style={styles.section}>
          <StyledButton
            id="skills-section-styled-button"
            top={top}
            left={left}
          />

          <Skills />
        </div>
      ) : (
        <div style={styles.content}>
          <Section
            id="skills-section"
            click={() => handleClick("skills-section")}
          >
            <Title revert={true}>Skills</Title>
          </Section>
          <Section
            id="experience-section"
            click={() => handleClick("experience-section")}
          >
            <Title revert={true}>Experience</Title>
          </Section>
          <Section
            id="education-section"
            click={() => handleClick("education-section")}
          >
            {/* <LargeImage src={education} alt="" /> */}
            <Title revert={true}>Education</Title>
          </Section>
        </div>
      )}
    </Container>
  );
}

const styles = {
  content: {
    minHeight: "100vh",
    width: "70%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  sections: {
    width: "100%",
  },
};
