import styles from "./Projects.module.css";
import office2 from "../../assets/office2.png";
import office3 from "../../assets/office3.png";
import office4 from "../../assets/office4.png";

const Project = () => {
    const projects = [
        {
            id: 2,
            image: office4,
            title: "Residential",
            description: "Modern Homes",
        },
        {
            id: 3,
            image: office2,
            title: "Corporate",
            description: "Office Spaces",
        },
        {
            id: 4,
            image: office3,
            title: "Retail",
            description: "Shopping Centers",
        },

    ];

    return (
        <div className={styles.special_projects_container}>

            <div className={styles.second_col}>
                {projects.map((project) => (
                    <div className={styles.project_card} key={project.id}>
                        <img
                            src={project.image}
                            alt={`Project ${project.id}`}
                            className={styles.project_image}
                        />
                        <div className={styles.hover_overlay}>
                            <h4>{project.title}</h4>
                            <p>{project.description}</p>
                            <button className={styles.view_more_btn}>+</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Project;
