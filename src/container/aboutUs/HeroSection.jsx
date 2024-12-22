import styles from "./HeroSection.module.css";

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <p className={styles.subtitle}>Need any help?</p>
                <h1 className={styles.title}>Build Your Future Today</h1>
                <p className={styles.description}>
                Dreams are the whispers of your soul, guiding you toward the horizon where the impossible becomes inevitable.
                </p>
                <div className={styles.buttonContainer}>
                    <button className={styles.slideButton}>Get a Quote</button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
