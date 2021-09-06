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
  const [show, setShow] = useState("show");
  const [title, setTitle] = useState("");
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [width, setWidth] = useState(0);
  const showSkills = () => {
    console.log("showSkills");
  };

  const handleClick = (id) => {
    // setShowComponent(true);
    const doc = document.getElementById(id);
    setTop(doc.offsetTop);
    setLeft(doc.offsetLeft);
    setWidth(doc.clientWidth - 60);
    console.log(width);
    id === "skills"
      ? setTitle("Skills")
      : id === "experience"
      ? setTitle("Experience")
      : setTitle("Education");
    setShowComponent(true);
    setShow("");
  };

  return (
    <Container next="/projects" prev="/intro">
      {showComponent ? (
        <>
          <StyledButton
            title={title}
            top={top}
            left={left}
            width={width}
            click={() => {
              setShowComponent(false);
              setShow("show");
            }}
          />
          <div style={styles.section}>
            <Skills />
          </div>
        </>
      ) : (
        <div className={`sections ${show}`} style={styles.content}>
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
