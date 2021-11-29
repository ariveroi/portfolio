import React from "react";
import Img from "../../common/Img";
import Tags from "../../common/Tags";
import Text from "../../common/Text";

function Project(props) {
  return (
    <div style={container}>
      <div style={innerContainer}>
        <Img rounded size={100} src={props.img} />
        <Text size={30}>{props.name}</Text>
      </div>
      <div>
        <Text size={20}>{props.description}</Text>
        <Tags tags={props.tags} />
      </div>
    </div>
  );
}

const container = {
  height: "100vh",
  overflowY: "scroll",
  paddingLeft: "5px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

const innerContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
};

export default Project;
