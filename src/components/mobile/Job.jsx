import React from "react";
import Img from "../common/Img";

import Text from "../common/Text";

function Job(props) {
  return (
    <div>
      <div style={styles.title}>
        <Img size={70} rounded src={props.img} />
        <Text size={25}>{props.job}</Text>
      </div>
      <Text size={15}>{props.time}</Text>
      <Text size={20}>{props.description}</Text>
    </div>
  );
}

const styles = {
  title: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
};

export default Job;
