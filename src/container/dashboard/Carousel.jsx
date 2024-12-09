import { Carousel } from "antd";
import styles from "./Slider.module.css";
import slideData from "../../components/json/sliderdata.json";
import FeatureSection from "../../components/FeatureSection";
import TotalProjectNumber from "../../components/StatsComponent";

const Slider = () => (
    <div className={styles.sliderContainer}>
        <Carousel autoplay>
            {slideData.map((slide, index) => (
                <div key={index} className={styles.carouselSlide}>
                    <div className={styles.heading}>{slide.heading}</div>
                    <div className={styles.description}>
                        {slide.description}
                    </div>
                    <div className={styles.actionContainer}>
                        <button className={styles.Button}>{slide.buttonText}
                        </button>
                    </div>
                </div>
            ))}
        </Carousel>
        <div className={styles.FloatingContainer}>
            <TotalProjectNumber />
            <FeatureSection />
        </div>
    </div>
);

export default Slider;
