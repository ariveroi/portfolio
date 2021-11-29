import React from "react";
import ProgressBar from "../common/ProgressBar";
import Text from "../common/Text";
import { sw_skills, soft_skills } from "../common/skills";
const size = 15;

const sw_skillList = sw_skills.map((skill, i) => (
  <div key={i}>
    <Text size={size}>{skill.name}</Text>
    <ProgressBar mobile fill={skill.expertise} />
  </div>
));
const soft_skillList = soft_skills.map((skill, i) => (
  <div key={i}>
    <Text size={size}>{skill.name}</Text>
    <ProgressBar mobile fill={skill.expertise} />
  </div>
));

function Skills() {
  return (
    <div style={style.container}>
      <Text size={30}>Software Skills</Text>
      {sw_skillList}

      <Text size={30}>Soft Skills</Text>
      {soft_skillList}
    </div>
  );
}

const style = {
  container: {
    height: "100vh",
    width: "95%",
    overflowY: "scroll",
    display: "flex",
    flexDirection: "column",
  },
};

export default Skills;
