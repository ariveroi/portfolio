import React, { useState, useContext } from "react";
import { ThemeContext } from "../../App";
import { IoSettingsOutline } from "react-icons/io5";

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
      width: "3vw",
      WebkitTransition: "width 1s, background 1s",
    },
    container: {
      position: "fixed",
      right: 0,
      margin: 0,
      padding: 0,
      zIndex: 10001,
      backgroundColor: darkTheme ? "#fff" : "#237D82",
      width: "400px",
      height: "20vh",
      borderBottomLeftRadius: "30px",
      WebkitTransition: "width 1s, background 1s",
    },
  };

  return (
    <div
      //onClick={props.click}
      style={show ? style.container : style.containerHidden}
    >
      {show ? (
        <Sidebar
          theme={darkTheme}
          changeTheme={props.click}
          onClick={() => setShow(!show)}
        />
      ) : (
        <IoSettingsOutline
          size={30}
          color={darkTheme ? "#fff" : "#000"}
          onClick={() => setShow(!show)}
          style={
            darkTheme
              ? { backgroundColor: "#000", cursor: "pointer" }
              : { backgroundColor: "#fff", cursor: "pointer" }
          }
        />
      )}
    </div>
  );
}

// const style = {
//   zIndex: 10001,
//   position: "absolute",
//   right: 0,
//   cursor: "pointer",
//   margin: "5px",
// };

export default Settings;
