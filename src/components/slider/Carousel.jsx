import React, { useState, useEffect, useRef } from "react";
import "./Carousel.scss";
import img from "../../assets/rectangle.svg";
import elements from "./elements";
import Title from "../common/Title";
import Text from "../common/Text";

const imgs = [img, img, img];
const delay = 8500;

const Carousel = () => {
  const width = window.innerWidth;
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const styles = {
    slideshow: {
      margin: "0 auto",
      overflow: "hidden",
      width: width * 0.8,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    slideshowSlider: {
      whiteSpace: "nowrap",
      transition: "ease 3000ms",
      transform: `translate3d(${-index * 100}%, 0, 0)`,
    },
    slide: {
      display: "inline-block",
      height: "500px",
      maxWidth: "100%",
      minWidth: "100%",
    },
    slideContent: {
      display: "flex",
      flexDirection: "row",
    },
    slideImg: {
      flex: 1,
      height: "500px",
    },
    slideText: {
      flex: 1,
      marginLeft: "40px",
    },
    slideP: {
      fontSize: "30px",
      wordBreak: "break-all",
      width: "79%",
      margin: 0,
    },
    slideshowImgs: { textAlign: "center" },
  };

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  const elementsList = elements.map((element, id) => (
    <div style={styles.slide} key={id}>
      <div style={styles.slideContent}>
        <img src={element.img} alt="" style={styles.slideImg} />
        <div style={styles.slideText}>
          <Title style={{ margin: 0 }}>{element.title}</Title>
          <Text size={20} style={{ fontSize: "20px" }}>
            {element.link}
          </Text>
          <Text size={30} style={styles.slideP}>
            {element.description}
          </Text>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <div style={styles.slideshow}>
        <div style={styles.slideshowSlider}>
          {/* {imgs.map((img, idx) => (
            <img style={styles.slide} key={idx} src={img} alt="perro" />
          ))} */}
          {elementsList}
        </div>
        <div style={styles.slideshowImgs}>
          {imgs.map((_, idx) => (
            <img
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
              src={img}
              alt=""
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Carousel;
