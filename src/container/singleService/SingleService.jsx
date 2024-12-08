import CommonCarousel from "../../components/common/CommonCarousel";
import slideImage from "../../assets/slide.jpg";
import styles from "./SingleService.module.css";
import phone from "../../assets/5jb.jpg";
import image from "../../assets/3jb.jpg";



function SingleService() {

    const cardData = [
        {
            id: 1,
            company: "Company Name 1",
            description:
                "Themeforest, Envato HQ 24 Fifth St., Los Angeles, USA",
        },
        {
            id: 2,
            company: "Company Name 2",
            description: "Codecanyon, Envato HQ 24 Fifth St., New York, USA",
        },
        {
            id: 3,
            company: "Company Name 3",
            description: "Photodune, Envato HQ 24 Fifth St., Chicago, USA",
        },
        {
            id: 4,
            company: "Company Name 4",
            description: "Videohive, Envato HQ 24 Fifth St., Boston, USA",
        },
    ];

    return (
        <>
            <CommonCarousel
                heading="Single Service"
                description="Explore opportunities and possibilities."
                backgroundImage={slideImage}
                showFloatingContact={false}
                containerStyle={{}}
                floatingContactProps={{
                    title: "We Construct and Manage Places and Infrastructures",
                    description: "We offer the best solutions for your needs.",
                }}
            />
            <div
                style={{
                    margin: "100px 0 0 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <div className={styles.imageContainer}>
                    <img src={phone} alt="Phone" className={styles.image} />
                    <img src={image} alt="Image" className={styles.image} />
                    <img
                        src={slideImage}
                        alt="Slide"
                        className={styles.image}
                    />
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.contantContainer}>
                    <div className={styles.leftContent}>
                        <h2 className={styles.leftTitle}>Project Title</h2>
                        <p className={styles.leftDescription}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.Lorem Ipsum is simply dummy text of the
                            printing and typesetting industry. Lorem Ipsum has
                            been the industrys standard dummy text ever since
                            the 1500s, when an unknown printer took a galley of
                            type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also
                            the leap into electronic typesetting, remaining
                            essentially unchanged.
                        </p>
                        <p className={styles.leftDescription}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                        </p>
                        <p className={styles.leftDescription}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                        </p>
                    </div>

                    <div className={styles.rightCard}>
                        <h3 className={styles.cardHeading}>Card Title</h3>
                        <p className={styles.cardDescription}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged.
                        </p>
                        <p className={styles.cardDescription}>
                            A brief description goes here. Add meaningful and
                            concise information.
                        </p>
                        <p className={styles.cardDescription}>
                            A brief description goes here. Add meaningful and
                            concise information.
                        </p>
                        <div className={styles.buttonContainer}>
                            <button
                                className={styles.slideButton}
                                style={{
                                backgroundColor: "#001d52",
                                color: "white",
                                padding: "12px 24px",
                                border: "none",
                                borderRadius: "4px",
                                fontWeight: "600",
                                cursor: "pointer",
                                transition: "background-color 0.3s ease, transform 0.2s",
                                fontSize: "1rem",
                                textTransform: "uppercase",
                                }}
                            >
                                Know More
                            </button>
                            </div>

                    </div>
                </div>
                <div>
                    <h2 className={styles.leftTitle}>Project Title</h2>
                    <div className={styles.cardContainer}>
                        {cardData.map((card) => (
                            <div key={card.id} className={styles.card}>
                                <div className={styles.company}>
                                    {card.company}
                                </div>
                                <div className={styles.description}>
                                    {card.description}
                                </div>
                                <div className={styles.buttonContainer}>
                                        <button className={styles.slideButton}>Know More</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleService;
