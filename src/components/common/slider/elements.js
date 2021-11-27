import flappy_bird from "../../assets/flappy_bird.svg";
import padle from "../../assets/padle.svg";
import lwq from "../../assets/lwq.svg";
import lalberca from "../../assets/lalberca.svg";

const elements = [
  {
    id: 1,
    title: "AI Flappy Bird",
    link: "https://github.com/ariveroi/aiflapy",
    description: "Flapy Bird game with Artifical Intelligence",
    img: flappy_bird,
    tags: ["Python", "AI", "Machine Learning"],
    status: "Completed",
  },
  {
    id: 2,
    title: "Padel Tournaments",
    link: "https://github.com/ariveroi/padel-torunaments",
    description:
      "Mobile Application that helps to create and organize Padel Tournaments between friends",
    img: padle,
    tags: ["React", "React Native", "Javascript"],
    status: "WIP",
  },
  {
    id: 3,
    title: "LWQ (Learn With Quizzes)",
    link: "https://github.com/ariveroi/Learn-with-quiz",
    description:
      "Web Application based on Kahoot playstyle. Here you will be able to create quizzes and participate in them",
    img: lwq,
    tags: ["React", "Express", "Node", "Javascript", "Redux", "MySQL"],
    status: "WIP",
  },
  {
    id: 4,
    title: "L'Alberca",
    link: "https://github.com/ariveroi/lalberca-web",
    description: "Web page for the restaurant L'Alberca",
    img: lalberca,
    tags: ["React", "Javascript", "HTML", "CSS"],
    status: "WIP",
  },
];

export default elements;
