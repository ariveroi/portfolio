import React from "react";
import Container from "../common/Container";

import me from "../../assets/me.svg";
import whatsapp from "../../assets/whatsapp.png";
import github from "../../assets/github.png";
import linkedIn from "../../assets/linkedin.png";
import gmail from "../../assets/gmail.png";
import Img from "../common/Img";

function Contact() {
  return (
    <Container prev="/projects">
      <div style={styles.container}>
        <div style={styles.img_section}>
          <Img me size={400} src={me} alt="" />
        </div>
        <div style={styles.contact_info}>
          <ul style={styles.contact_ul}>
            <li style={styles.contact_li}>
              <Img src={github} alt="" />
              <a
                href="https://github.com/ariveroi"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li style={styles.contact_li}>
              <Img src={linkedIn} alt="" />
              <a
                href="https://www.linkedin.com/in/agustin-rivero-ib%C3%A1%C3%B1ez-8635b8a6/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li style={styles.contact_li}>
              <Img src={gmail} alt="" />
              <a
                href="mailto:agusrive96@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                agusrive96@gmail.com
              </a>
            </li>
            <li style={styles.contact_li}>
              <Img src={whatsapp} alt="" />
              <a
                href="https://wa.me/+34628773284?text=mensaje"
                target="_blank"
                rel="noreferrer"
              >
                +34 628 773 284
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

const styles = {
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  img_section: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },
  contact_info: {
    flex: 1,
  },
  contact_ul: {
    listStyle: "none",
  },
  contact_li: {
    display: "flex",
    alignItems: "center",
  },
  img: {
    height: "500px",
  },
  link_img: {
    marginRight: "30px",
    height: "50px",
  },
};

export default Contact;
