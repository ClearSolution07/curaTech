import styles from "./About.module.css";
import myImage from "../../assets/about.png";

const About = () => (
    <div className={styles.sliderContainer}>
        <div className={styles.carouselSlide}>
            <div className={styles.title}>About Us</div>
            <div className={styles.heading}>Slider Container</div>
            <div className={styles.subheading}>
                {" "}
                Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat
                congue
            </div>
            <div className={styles.description}>
                Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus
                rutrum leo consectetur accumsan. Vivamus viverra ante turpis,
                dignissim condimentum elit egestas sit amet. Phasellus faucibus
                pellentesque
            </div>
            <div className={styles.buttonContainer}>
                <button className={styles.slideButton}>Know More</button>
            </div>
        </div>

        <div className={styles.carouselSlide}>
            <img src={myImage} alt="About us" className={styles.image} />
        </div>
    </div>
);

export default About;
