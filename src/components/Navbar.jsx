import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav style={styles.nav}>
      <ul style={styles.navbar_ul}>
        <li style={styles.navbar_li}>
          <NavLink style={styles.links} activeClassName="active" to="/intro">
            Intro
          </NavLink>
        </li>
        <li style={styles.navbar_li}>
          <NavLink
            style={styles.links}
            activeClassName="active"
            to="/curriculum"
          >
            Curriculum
          </NavLink>
        </li>
        <li style={styles.navbar_li}>
          <NavLink style={styles.links} activeClassName="active" to="/projects">
            Projects
          </NavLink>
        </li>
        <li style={styles.navbar_li}>
          <NavLink style={styles.links} activeClassName="active" to="/contact">
            Contact me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    width: "100%",
    backgroundColor: "#237D82",
    position: "absolute",
  },
  navbar_ul: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: "2px",
    paddingRight: "40px",
    paddingLeft: "40px",
    listStyle: "none",
  },
  navbar_li: {
    flex: 1,
    textAlign: "center",
    fontSize: "20px",
    color: "#FFFFFF",
  },
  links: {
    textDecoration: "none",
    color: "#FFFFFF",
  },
};
