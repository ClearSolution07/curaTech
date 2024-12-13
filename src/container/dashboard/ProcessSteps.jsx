import styles from "./ProcessSteps.module.css";
import service1 from "../../assets/Service1.png";
import service2 from "../../assets/Service2.png";
import jb4 from "../../assets/4jb.jpg";


const ProcessSteps = () => {
    const sections = [
        {
            title: null,
            description: null,
            background: "transparent",
            image: jb4,
            showContent: false,
        },
        {
            title: "Civil Engineering Services",
            description:
                "Cura Tech provides comprehensive civil engineering solutions with quality and affordability.",
            background: "blue",
            image: service1,
        },
        {
            title: "Mechanical Engineering Services",
            description:
                "Cura Tech offers mechanical engineering solutions, specializing in piping, firefighting and equipment erection",
            background: "red",
            image: service2,
        },
        {
            title: "Consulting and Compliance",
            description:
                "Consultancy in legal procedures, project compliance, and regulatory approvals assistance",
            background: "blue",
            image: service1,
        },
    ];

    return (
        <div className={styles.section_container}>
            {sections.map((section, index) => (
                <div
                    key={index}
                    className={styles.section}
                    style={{
                        backgroundColor: section.background,
                        backgroundImage: `url(${section.image})`,
                    }}
                >
                    {section.showContent !== false && (
                        <div className={styles.content}>
                            <h3>{section.title}</h3>
                            <p>{section.description}</p>
                            <div className={styles.arrow_container}>
                                <button className={styles.arrow_btn}>→</button>
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProcessSteps;
