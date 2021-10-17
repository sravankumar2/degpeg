import React from "react";
import Slider1 from "./Slider1";
import styles from "./Banner.module.scss";
import Slider2 from "./Slider2";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
export default function Banner() {
  return (
    <div className={styles.container}>
      <Carousel>
        <Carousel.Item interval={3000}>
          <Slider1 />
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <Slider2 />
        </Carousel.Item>
      </Carousel>

      {/* <Slider2 /> */}
    </div>
  );
}
