import styles from "./ProcessSteps.module.css"; 

const ProcessSteps = () => {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.leftContainer}>
                    <div
                        className={`${styles.background} ${styles.bgImage1}`}
                    ></div>
                    <div className={styles.content}>
                        <h2>Research & Analysis</h2>
                        <p>
                            Nullam tincidunt libero eu augue eleifend, vitae
                            condimentum lacus
                        </p>
                        <button className={styles.arrowButton}>
                            <span>&rarr;</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <div className={styles.step}>
                    <div
                        className={`${styles.background} ${styles.bgImage1}`}
                    ></div>
                    <div className={styles.content}>
                        <h2>Research & Analysis</h2>
                        <p>
                            Nullam tincidunt libero eu augue eleifend, vitae
                            condimentum lacus
                        </p>
                        <button className={styles.arrowButton}>
                            <span>&rarr;</span>
                        </button>
                    </div>
                </div>
                <div className={styles.step}>
                    <div
                        className={`${styles.background} ${styles.bgImage2}`}
                    ></div>
                    <div className={styles.content}>
                        <h2>Industry Development</h2>
                        <p>
                            Fusce id hendrerit lectus. Morbi vitae tortor sed
                            turpis feugiat
                        </p>
                        <button className={styles.arrowButton}>
                            <span>&rarr;</span>
                        </button>
                    </div>
                </div>
                <div className={styles.step}>
                    <div
                        className={`${styles.background} ${styles.bgImage3}`}
                    ></div>
                    <div className={styles.content}>
                        <h2>Production Launch</h2>
                        <p>
                            Nullam tincidunt libero eu augue eleifend, vitae
                            condimentum lacus
                        </p>
                        <button className={styles.arrowButton}>
                            <span>&rarr;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProcessSteps;
