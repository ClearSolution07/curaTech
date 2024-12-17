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
            description: "Themeforest, Envato HQ 24 Fifth St., Los Angeles, USA",
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
                heading="Our Service"
                description="Explore opportunities and possibilities."
                backgroundImage={slideImage}
                showFloatingContact={false}
                floatingContactProps={{
                    title: "We Construct and Manage Places and Infrastructures",
                    description: "We offer the best solutions for your needs.",
                }}
            />

            {/* Two Column Section */}
            <div className={styles.serviceSection}>
                {/* LEFT COLUMN: CIVIL ENGINEERING WORK */}
                <div className={styles.column}>
                    <h2 className={styles.title}>CIVIL ENGINEERING WORK</h2>
                    <p className={styles.description}>
                        At Cura Tech, we specialize in providing end-to-end civil engineering solutions,
                        ensuring each project meets the highest standards of quality and efficiency.
                        Our expertise includes architectural and structural design, where we create
                        aesthetically pleasing and durable spaces for residential, commercial, and institutional needs.

                    </p>
                    <div className={styles.offerSection}>
                        <h3>What We Offer</h3>
                        <ul className={styles.offerList}>
                            <li>Architectural & Structural Design</li>
                            <li>Residential & Commercial Construction</li>
                            <li>Interior Designing</li>
                            <li>Building Permissions and Approvals</li>
                            <li>Complete Turnkey Solutions</li>
                        </ul>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={phone} alt="Civil Work" className={styles.image} />
                    </div>
                </div>

                {/* RIGHT COLUMN: MECHANICAL ENGINEERING WORK */}
                <div className={styles.column}>
                    <h2 className={styles.title}>MECHANICAL ENGINEERING WORK</h2>
                    <p className={styles.description}>
                        Cura Tech is a leader in mechanical engineering, delivering specialized solutions
                        for industrial needs. We offer firefighting systems for residential and commercial
                        properties, equipment erection services, and industrial piping work to ensure operational efficiency.       

                    </p>
                    <div className={styles.offerSection}>
                        <h3>What We Offer</h3>
                        <ul className={styles.offerList}>
                            <li>Firefighting Solutions</li>
                            <li>Equipment Erection</li>
                            <li>Industrial Piping Work</li>
                            <li>Structural Work</li>
                        </ul>
                    </div>
                    <div className={styles.imageContainer}>
                        <img src={image} alt="Mechanical Work" className={styles.image} />
                    </div>
                </div>
            </div>

            {/* Project Title Section */}
            <div className={styles.projectSection}>
                <h2 className={styles.projectTitle}>Project Title</h2>
                <div className={styles.cardContainer}>
                    {cardData.map((card) => (
                        <div key={card.id} className={styles.card}>
                            <div className={styles.company}>{card.company}</div>
                            <div className={styles.description}>{card.description}</div>
                            <div className={styles.buttonContainer}>
                                <button className={styles.slideButton}>Know More</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default SingleService;
