import React from "react";
import Title from "./Title";
import Text from "./Text";
import Img from "./Img";

import amazon from "../../assets/amazon.svg";

function Job(props) {
  let left = props.pos % 2 === 0 ? true : false;
  const styles = {
    container: {
      height: "fit-content",
      width: "100%",
      display: "flex",
      flexDirection: "row",
      marginRight: "3px",
    },
    img_container: {
      display: "flex",
      alignItems: "center",
    },
  };
  return (
    <div style={styles.container}>
      {left ? (
        <div style={styles.img_container}>
          <Img src={props.img} size={100} rounded />
        </div>
      ) : (
        <></>
      )}

      <div>
        <Text size={30}>{props.job}</Text>
        <Text size={20}>{props.time}</Text>
        <Text size={20}>{props.description}</Text>
      </div>
      {left ? (
        <></>
      ) : (
        <div style={styles.img_container}>
          <Img src={props.img} size={100} rounded />
        </div>
      )}
    </div>
  );
}

export default Job;
