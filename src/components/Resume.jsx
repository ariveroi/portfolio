import React, { useState, useEffect } from "react";
import Container from "./common/Container";
import StyledButton from "./common/StyledButton";
import Title from "./common/Title";
import Section from "./common/Section";
import Skills from "./resume/Skills";
import Experience from "./resume/Experience";
import Education from "./resume/Education";

export default function Resume() {
  const [showComponent, setShowComponent] = useState(false);
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);

  const handleClick = (id) => {
    const doc = document.getElementById(id);
    setId(id);
    setTop(doc.offsetTop);
    setLeft(doc.offsetLeft);
    setWidth(doc.clientWidth - 60);
    id === "skills"
      ? setTitle("Skills")
      : id === "experience"
      ? setTitle("Experience")
      : setTitle("Education");
    setShowComponent(true);
  };

  return (
    <Container next="/projects" prev="/intro">
      {showComponent ? (
        <>
          <StyledButton
            top={top}
            left={left}
            width={width}
            click={() => {
              setShowComponent(false);
            }}
          >
            <Title revert>{title}</Title>
          </StyledButton>
          <div style={styles.section}>
            {id === "skills" ? (
              <Skills />
            ) : id === "education" ? (
              <Education />
            ) : (
              <Experience />
            )}
          </div>
        </>
      ) : (
        <div style={styles.content}>
          <Section id="skills" click={() => handleClick("skills")}>
            <Title revert={true}>Skills</Title>
          </Section>
          <Section id="experience" click={() => handleClick("experience")}>
            <Title revert={true}>Experience</Title>
          </Section>
          <Section id="education" click={() => handleClick("education")}>
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
  section: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
