import React from "react";
import ProgressBar from "./common/ProgressBar";
import Text from "./common/Text";
import { sw_skills, soft_skills } from "./common/skills";
import Title from "./common/Title";
const size = 20;

const sw_skillList = sw_skills.map((skill, i) => (
  <>
    <Text size={size}>{skill.name}</Text>
    <ProgressBar fill={skill.expertise} />
  </>
));
const soft_skillList = soft_skills.map((skill, i) => (
  <>
    <Text size={size}>{skill.name}</Text>
    <ProgressBar fill={skill.expertise} />
  </>
));

function Skills() {
  return (
    <div style={style.container}>
      <div style={style.section}>
        <Title>Software Skills</Title>
        <div style={style.inner_section}>{sw_skillList}</div>
      </div>
      <div style={style.section}>
        <Title>Soft Skills</Title>
        <div style={style.inner_section}>{soft_skillList}</div>
      </div>
      {/* <Text size={size}>React</Text>
      <ProgressBar skill="react" fill={250} />
      <Text size={size}>Typescript</Text>
      <ProgressBar skill="javascript" />
      <Text size={size}>Javascript</Text>
      <ProgressBar width />
      <Text size={size}>Django</Text>
      <ProgressBar skill="react" fill={250} />
      <Text size={size}>Ptyhon</Text>
      <ProgressBar skill="javascript" />
      <Text size={size}>Vue</Text>
      <ProgressBar width />
      <Text size={size}>NodeJS</Text>
      <ProgressBar skill="react" fill={250} />
      <Text size={size}>SQL</Text>
      <ProgressBar skill="javascript" />
      <Text size={size}>AWS Lambda</Text>
      <ProgressBar width />
      <Text size={size}>AWS Api Gateway</Text>
      <ProgressBar width />
      <Text size={size}>AWS DynamoDB</Text>
      <ProgressBar width />
      <Text size={size}>AWS RDS</Text>
      <ProgressBar width /> */}
    </div>
  );
}

const style = {
  container: {
    height: "70vh",

    width: "100%",
    display: "flex",
    flexDirection: "row",
    // alignItems: "space",
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
    // width: "70%",
  },
};

export default Skills;
