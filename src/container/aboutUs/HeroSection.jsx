import styles from "./HeroSection.module.css";

const HeroSection = () => {
    return (
        <section className={styles.heroSection}>
            <div className={styles.heroContent}>
                <p className={styles.subtitle}>Get a Quote</p>
                <h1 className={styles.title}>Build Your Future Today</h1>
                <p className={styles.description}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s.
                </p>
                <div className={styles.buttonContainer}>
                    <button className={styles.slideButton}>Know More</button>
                </div>
            </div>

            <div className={styles.cardsContainer}>
                <div className={styles.card}>
                    <div className={styles.cardNumber}>01</div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Kind Consultation</h3>
                        <p className={styles.cardDescription}>
                            Etiam ac leo at quam aliquet
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardNumber}>02</div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Kind Consultation</h3>
                        <p className={styles.cardDescription}>
                            Etiam ac leo at quam aliquet
                        </p>
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardNumber}>03</div>
                    <div className={styles.cardContent}>
                        <h3 className={styles.cardTitle}>Kind Consultation</h3>
                        <p className={styles.cardDescription}>
                            Etiam ac leo at quam aliquet
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
