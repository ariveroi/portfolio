import React, { useState, useContext } from "react";
import { ThemeContext } from "../../laptop/LaptopApp";
import * as AiIcons from "react-icons/ai";

import Sidebar from "./Sidebar";

function Settings(props) {
  const darkTheme = useContext(ThemeContext);
  const [show, setShow] = useState(false);

  const style = {
    containerHidden: {
      position: "fixed",
      right: 0,
      margin: 0,
      padding: 0,
      zIndex: 10001,
      height: "3vh",
      width: props.mobile ? "10vw" : "3vw",
    },
    container: {
      position: "fixed",
      right: 0,
      margin: 0,
      zIndex: 2,
      backgroundColor: "grey",
      opacity: "0.3",
      width: "100vw",
      height: "100vh",
    },
  };

  return (
    <div
      //onClick={props.click}
      style={show ? {} : style.containerHidden}
    >
      {show ? (
        <>
          {/* <div style={style.container} onClick={() => setShow(false)}></div> */}
          <Sidebar
            mobile={props.mobile}
            theme={darkTheme}
            changeTheme={props.click}
            click={() => setShow(!show)}
          />
        </>
      ) : (
        <AiIcons.AiOutlineMenu
          size={30}
          color={darkTheme ? "#fff" : "#237d82"}
          onClick={() => setShow(!show)}
        />
      )}
    </div>
  );
}

export default Settings;
