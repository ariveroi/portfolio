import React from "react";
import * as AiIcons from "react-icons/ai";

import { useHistory } from "react-router-dom";

function Sidebar(props) {
  const history = useHistory();

  const redirect = (path) => {
    history.push(path);
  };

  const styles = {
    container: {
      width: "100%",
      height: "100vh",
      backgroundColor: "#f5f5f5",
      opacity: "0.4",
      zIndex: "2",
      left: 0,
      top: 0,
      position: "absolute",
    },
    sidebarContainer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      right: 0,
      top: 0,
      margin: 0,
      paddingBottom: "3vh",
      zIndex: 10001,
      opacity: 1.5,
      backgroundColor: props.theme ? "#fff" : "#237D82",
      width: props.mobile ? "100vw" : "400px",
      height: "fit-content",
      borderBottomLeftRadius: "30px",
      WebkitTransition: "width 1s, background 1s",
    },
    redirects: {
      display: "flex",
      flexDirection: "column",
    },
    button: {
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      fontSize: "1.5rem",
      fontWeight: "bold",
      margin: "0.5rem",
      color: props.theme ? "#237D82" : "#fff",
      WebkitTransition: "color 1s, border-color 1s",
    },
  };

  return (
    <div>
      <div>
        <AiIcons.AiOutlineClose
          size={30}
          color={props.theme ? "000" : "fff"}
          onClick={props.click}
          style={{
            cursor: "pointer",
            position: "absolute",
            top: "0.5rem",
            right: "0.5rem",
            zIndex: "10002",
          }}
        />
      </div>
      <div style={styles.container} onClick={props.click}></div>
      <div style={styles.sidebarContainer}>
        {props.mobile ? (
          <>
            <div style={styles.redirects}>
              <button style={styles.button} onClick={() => redirect("/")}>
                Home
              </button>
              <button style={styles.button} onClick={() => redirect("/skills")}>
                Skills
              </button>
              <button
                style={styles.button}
                onClick={() => redirect("/education")}
              >
                Education
              </button>
              <button
                style={styles.button}
                onClick={() => redirect("/experience")}
              >
                Experience
              </button>
            </div>
          </>
        ) : (
          <>
            <button
              className={
                !props.theme ? "sidebarButtonLight" : "sidebarButtonDark"
              }
              onClick={props.changeTheme}
            >
              Change theme
            </button>
            <hr style={{ width: "80%" }} />
            <div style={styles.redirects}>
              <button
                className={
                  !props.theme ? "sidebarButtonLight" : "sidebarButtonDark"
                }
                onClick={() => redirect("/intro")}
              >
                Home
              </button>
              <button
                className={
                  !props.theme ? "sidebarButtonLight" : "sidebarButtonDark"
                }
                onClick={() => redirect("/curriculum")}
              >
                Resume
              </button>
              <button
                className={
                  !props.theme ? "sidebarButtonLight" : "sidebarButtonDark"
                }
                onClick={() => redirect("/projects")}
              >
                Projects
              </button>
              <button
                className={
                  !props.theme ? "sidebarButtonLight" : "sidebarButtonDark"
                }
                onClick={() => redirect("/contact")}
              >
                Contact
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Sidebar;
