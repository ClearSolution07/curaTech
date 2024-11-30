import { Carousel } from "antd";
import styles from "./Slider.module.css";
import slideData from "../../components/json/sliderdata.json";
import FeatureSection from "../../components/FeatureSection";

const Slider = () => (
  <div className={styles.sliderContainer}>
    <Carousel autoplay>
      {slideData.map((slide, index) => (
        <div key={index} className={styles.carouselSlide}>
          <div className={styles.heading}>{slide.heading}</div>
          <div className={styles.description}>{slide.description}</div>
          <div className={styles.buttonContainer}>
            <button className={styles.slideButton}>{slide.buttonText}</button>
          </div>
          <FeatureSection />
        </div>
      ))}
    </Carousel>
  </div>
);

export default Slider;
