import { Carousel } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "./Slider.module.css";
import slideData from "../../components/json/sliderdata.json";
import FeatureSection from "../../components/FeatureSection";
import TotalProjectNumber from "../../components/StatsComponent";

const Slider = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path); // Navigate to the specified path
        window.scrollTo(0, 0); // Scroll to the top of the page
    };

    return (
        <div className={styles.sliderContainer}>
            <Carousel autoplay>
                {slideData.map((slide, index) => (
                    <div key={index} className={styles.carouselSlide}>
                        <div className={styles.heading}>{slide.heading}</div>
                        <div className={styles.description}>{slide.description}</div>
                        <div className={styles.actionContainer}>
                            <button
                                className={styles.Button}
                                onClick={() => handleNavigation(slide.route)}
                            >
                                {slide.buttonText}
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
};

export default Slider;
