import amazon from "../../assets/amazon.svg";
import amazon_dark from "../../assets/amazon-dark.svg";
import senate from "../../assets/senate.svg";
import freelance from "../../assets/freelance.svg";
import deloitte from "../../assets/deloitte.svg";
import deloitte_dark from "../../assets/deloitte_dark.svg";
import imf from "../../assets/imf.svg";
import upm from "../../assets/upm.svg";

const experiences = [
  {
    job: "Product Manager Intern",
    time: "May 2021 - November 2021",
    description:
      "Focused on the development of a web-based tool to automate internal business processes. I used AWS to manage the back-end logic and Vue as the front-end framework. Also, I did product management tasks, gathering feedback from users to improve the tool, and trying to gain adoption of the tool.",
    img: amazon,
    dark_img: amazon_dark,
  },
  {
    job: "Freelance Web Developer",
    time: "January 2018 - Now",
    description:
      "Development of on-demand web applications. My clients contact me if they need to digitalize their business and do not have the necessary knowledge. For this I have a range of services ranging from simple web pages (only HTML&CSS) to more advanced tools.",
    img: freelance,
    dark_img: freelance,
  },
  {
    job: "Political Coordinator",
    time: "October 2020 - April 2021",
    description:
      "Dedicated to the management and organization of a parliamentary group within the Spanish Senate. In addition, if time allowed, I developed software tools to streamline and automate some processes.",
    img: senate,
    dark_img: senate,
  },
  {
    job: "Cybersecurity Risk Consultant",
    time: "July 2019 - September 2020",
    description:
      "Consultant specialized in cybersecurity risks, oriented towards the study and analysis of the cybersecurity capabilities of different companies, as well as in the development and advice on their Continuity Plans.",
    img: deloitte,
    dark_img: deloitte_dark,
  },
];

const educations = [
  {
    job: "Master in Big Data & Bussiness Analytics",
    time: "September 2020 - Currently",
    description: "IMF Bussiness School",
    img: imf,
    dark_img: imf,
  },
  {
    job: "Telecommunications Engineering",
    time: "September 2014 - July 2020",
    description: "Universidad Politécnica de Madrid",
    img: upm,
    dark_img: upm,
  },
];

export { experiences, educations };
