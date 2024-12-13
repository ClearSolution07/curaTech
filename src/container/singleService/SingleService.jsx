import CommonCarousel from "../../components/common/CommonCarousel";
import slideImage from "../../assets/L8.jpg";
import styles from "./SingleService.module.css";
import phone from "../../assets/L9.jpg";
import image from "../../assets/L10.jpg";



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
                        <h2 className={styles.leftTitle}>OUR SERVICES</h2>
                        <p className={styles.leftDescription}>
At Cura Tech, we specialize in providing end-to-end civil engineering solutions, ensuring each project meets the highest standards of quality and efficiency. Our expertise includes architectural and structural design, where we create aesthetically pleasing and durable spaces for residential, commercial, and institutional needs. We also handle construction services, offering tailored residential and commercial construction that transforms blueprints into reality. With our interior design services, we ensure that every space is functional, elegant, and aligns with your vision. Our turnkey solutions cover the entire project cycle, from initial design to final delivery, offering clients a seamless and hassle-free experience.

                        </p>
                        <p className={styles.leftDescription}>
Cura Tech is a leader in mechanical engineering, delivering specialized solutions for a variety of industrial needs. We offer firefighting systems for both residential and commercial properties, ensuring the highest safety standards. Our industrial piping services include design, installation, and maintenance of water, gas, and oil pipelines, ensuring operational safety and efficiency. Additionally, we provide equipment erection services, handling the installation of complex machinery with precision. We also excel in structural work, providing robust and reliable frameworks for industrial and commercial projects. Our expertise guarantees that each project meets the highest safety standards and operates efficiently.


                        </p>
                        <p className={styles.leftDescription}>
                        Beyond engineering services, Cura Tech offers expert consultancy in navigating complex legal procedures, project compliance, and regulatory approvals. We help clients ensure that their projects adhere to local building codes, safety regulations, and environmental standards. Our team provides guidance throughout the process, from obtaining building permits to ensuring safety compliance, making the entire journey smoother and more efficient. With our comprehensive consultancy services, clients can rest assured that every aspect of their project is legally sound and properly managed.
                        </p>
                    </div>

                    <div className={styles.rightCard}>
                        <h3 className={styles.cardHeading}>What We Offer</h3>
                        <br/>
                        <p className={styles.cardDescription}>
                        CIVIL ENGINEERING WORK
                        </p>
                        <p className={styles.cardDescription}>
• Architectural & Structural Design
                        </p>
                        <p className={styles.cardDescription}>
                        
• Residential Construction, Commercial Construction.
                        </p>
                        <p className={styles.cardDescription}>
• Interior Designing
                        </p>
                        <p className={styles.cardDescription}>
• Building permissions and approvals
                        </p>
                        <p className={styles.cardDescription}>
• Complete turnkey solution at an affordable cost
                        </p>
                        <p className={styles.cardDescription}>
                        </p>
                        <br/>
                        <p className={styles.cardDescription}>
MECHANICAL ENGINEERING WORK
                        </p>
                        <p className={styles.cardDescription}>
                        • Firefighting Solutions
                        </p>
                        <p className={styles.cardDescription}>
                        • Equipment Erection
                        </p>
                        <p className={styles.cardDescription}>
                        • Industrial Piping WorK
                        </p>
                        <p className={styles.cardDescription}>
                        • Structural Work
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
