import styles from "./ProcessSteps.module.css";
import researchAnalysis from "../../assets/researchAnalysis.png";
import service1 from "../../assets/Service1.png";
import service2 from "../../assets/Service2.png";

const ProcessSteps = () => {
  const sections = [
    {
      title: null,
      description: null,
      background: "transparent",
      image: researchAnalysis, // Larger image
      showContent: false,
    },
    {
      title: "Research & Analysis",
      description:
        "Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus.",
      background: "blue",
      image: service1,
    },
    {
      title: "Industry Development",
      description:
        "Fusce id hendrerit lectus. Morbi vitae tortor sed turpis feugiat.",
      background: "red",
      image: service2,
    },
    {
      title: "Production Launch",
      description:
        "Nullam tincidunt libero eu augue eleifend, vitae condimentum lacus.",
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
