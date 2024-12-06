import styles from "./SpecialProjects.module.css";
import office1 from "../../assets/office1.png";
import office2 from "../../assets/office2.png";
import office3 from "../../assets/office3.png";
import office4 from "../../assets/office4.png";

const SpecialProjects = () => {
    const projects = [
        {
            id: 1,
            image: office1,
            title: "Commercial",
            description: "Benoit Architecture",
        },
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
        {
            id: 5,
            image: office4,
            title: "Hospitality",
            description: "Luxury Hotels",
        },
    ];

    return (
        <div className={styles.special_projects_container}>
            <h4 className={styles.sub_heading}>Our Works</h4>

            <h3 className={styles.special_projects_title}>
                Our Special Projects
            </h3>

            <div className={styles.projects_layout}>
                <div className={styles.first_col}>
                    <div className={styles.project_card}>
                        <img
                            src={projects[0].image}
                            alt={`Project ${projects[0].id}`}
                            className={styles.project_image}
                        />
                        <div className={styles.hover_overlay}>
                            <h4>{projects[0].title}</h4>
                            <p>{projects[0].description}</p>
                            <button className={styles.view_more_btn}>+</button>
                        </div>
                    </div>
                </div>
                <div className={styles.second_col}>
                    {projects.slice(1).map((project) => (
                        <div className={styles.project_card} key={project.id}>
                            <img
                                src={project.image}
                                alt={`Project ${project.id}`}
                                className={styles.project_image}
                            />
                            <div className={styles.hover_overlay}>
                                <h4>{project.title}</h4>
                                <p>{project.description}</p>
                                <button className={styles.view_more_btn}>
                                    +
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SpecialProjects;
