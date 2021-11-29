import React from "react";

import Text from "../common/Text";
import Section from "../common/Section";
import Title from "../common/Title";
import whatsapp from "../../assets/whatsapp.png";
import github from "../../assets/github.png";
import linkedIn from "../../assets/linkedin.png";
import gmail from "../../assets/gmail.png";
import Img from "../common/Img";

import Projects from "./Projects";

import { useHistory } from "react-router-dom";

function Main() {
  const history = useHistory();
  const redirect = (path) => {
    history.push(path);
  };

  return (
    <div style={styles.container}>
      <div style={styles.landing}>
        <Text size={30}>
          Hi, I’m <strong style={styles.text}>Agustin Rivero</strong>
        </Text>
        <Text size={30}>
          I’m a ##<strong style={styles.text}>SOFTWARE DEVELOPER</strong> and
          this is [me]
        </Text>
      </div>
      <div style={styles.resume}>
        <Section click={() => redirect("/skills")} size>
          <Title revert>Skills</Title>
        </Section>
        <Section click={() => redirect("/experience")} size>
          <Title revert>Experience</Title>
        </Section>
        <Section size>
          <Title revert>Education</Title>
        </Section>
      </div>
      <div style={styles.projects}>
        <Projects />
      </div>
      <div style={styles.contact}>
        <a href="https://github.com/ariveroi" target="_blank" rel="noreferrer">
          <Img size={30} src={github} alt="" />
        </a>
        <a
          href="https://www.linkedin.com/in/agustin-rivero-ib%C3%A1%C3%B1ez-8635b8a6/"
          target="_blank"
          rel="noreferrer"
        >
          <Img size={30} src={linkedIn} alt="" />
        </a>
        <a href="mailto:agusrive96@gmail.com" target="_blank" rel="noreferrer">
          <Img size={30} src={gmail} alt="" />
        </a>
        <a
          href="https://wa.me/+34628773284?text=mensaje"
          target="_blank"
          rel="noreferrer"
        >
          <Img size={30} src={whatsapp} alt="" />
        </a>
      </div>
    </div>
  );
}

const styles = {
  container: {
    //backgroundColor: "#fff",
    height: "100vh",
    overflowY: "scroll",
  },
  landing: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  },
  resume: {
    marginBottom: "25vh",
  },
  projects: {},
  contact: {
    paddingBottom: "10vh",
  },
  contact_info: {
    //flex: 1,
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  contact_ul: {
    listStyle: "none",
  },
  contact_li: {
    display: "flex",
    alignItems: "center",
  },
  text: {
    color: "#227499",
  },
};

export default Main;
