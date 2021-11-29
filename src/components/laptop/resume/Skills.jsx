import React from "react";
import ProgressBar from "../../common/ProgressBar";
import Text from "../../common/Text";
import { sw_skills, soft_skills } from "../../common/skills";
import Title from "../../common/Title";
import InnerContainer from "../../common/InnerContainer";
const size = 20;

const sw_skillList = sw_skills.map((skill, i) => (
  <div key={i}>
    <Text size={size}>{skill.name}</Text>
    <ProgressBar fill={skill.expertise} />
  </div>
));
const soft_skillList = soft_skills.map((skill, i) => (
  <div key={i}>
    <Text size={size}>{skill.name}</Text>
    <ProgressBar fill={skill.expertise} />
  </div>
));

function Skills() {
  return (
    <InnerContainer>
      <div style={style.container}>
        <div style={style.section}>
          <Title>Software Skills</Title>
          <div style={style.inner_section}>{sw_skillList}</div>
        </div>
        <div style={style.section}>
          <Title>Soft Skills</Title>
          <div style={style.inner_section}>{soft_skillList}</div>
        </div>
      </div>
    </InnerContainer>
  );
}

const style = {
  container: {
    height: "70vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  section: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "70vh",
  },
  inner_section: {
    overflowY: "scroll",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default Skills;
