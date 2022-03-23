import React, { useState } from "react";
import Slider from "react-slick";
import LeftCaretIcon from "./LeftCaretIcon";
import styles from "./../styles/Slider.module.scss";

const SampleNextArrow = ({ onClick }: { onClick?: any }) => {
  return (
    <button className={styles.next} onClick={onClick}>
      <LeftCaretIcon />
    </button>
  );
};
const SamplePrevArrow = ({ onClick }: { onClick?: any }) => {
  return (
    <button className={styles.prev} onClick={onClick}>
      <LeftCaretIcon />
    </button>
  );
};

const Sliderr = ({ device }: { device: string }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const testSettings = {};

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: device == "mobile" ? 2.5 : 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    pauseOnHover: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: styles.button__bar,
    beforeChange: (prev: any, next: any) => {
      setCurrentSlide(next);
    },
    appendDots: function AppenDot(dots: any) {
      return (
        <div>
          <ul>
            {dots.map((item: any, index: any) => {
              return <li key={index}>{item.props.children}</li>;
            })}
          </ul>
        </div>
      );
    },
    customPaging: function CustomPaging(index: any) {
      return (
        <button
          style={
            index === currentSlide
              ? { backgroundColor: "#64C000", outline: "none" }
              : { backgroundColor: "#DDDDDD", outline: "none" }
          }
        >
          {" "}
          {index + 1}
        </button>
      );
    },
  };
  return (
    <div className={styles.con}>
      <Slider {...settings}>
        {Array(10)
          .fill("")
          .map((_, index) => (
            <div key={`carouselindex-${index}`} className={styles.slide}>
              <img src="/images/builtlast.svg" alt="" />
            </div>
          ))}
      </Slider>
    </div>
  );
};
export default Sliderr;
