import CommonCarousel from "../../components/common/CommonCarousel";
import slideImage from "../../assets/slide.jpg";
import Project from "./Projects"
import React from "react";
import styles from "./singleProject.module.css";


const projectInfo = [
    {
        embed_url: 'https://www.youtube.com/embed/C7u45cuhmrs?si=8_gbeqzEY6V_atnZ',
        project_title: ' Aluminium Partition Work for Kamakhya BioFuels',
        project_desc: 'Ongoing fabrication and installation of aluminium partition systems for a workspace spanning 3 lakh sq. ft.',
        client_name: 'Kamakhya BioFuels',
        category: 'Industrial Fitting',
        current_status: 'Sections installed for office and industrial zones.',
    },
    {
        embed_url: 'https://www.youtube.com/embed/Hz4Rbz5RRmE?si=wfbQxNEEH319IK9B',
        project_title: 'G+2 Residential Home Near Saai Baba Mandir, Six Mile',
        project_desc: 'A G+2 home designed for comfortable living with a focus on quality materials and contemporary styling. The project is currently in its construction phase.',
        client_name: 'Kamakhya BioFuels',
        category: 'Industrial Fitting',
        current_status: 'Foundation and structure work in progress.',
    }
]

function SingleProject() {
    return (
        <>
            <CommonCarousel
                heading="Ongoing Projects"
                description="Explore opportunities and possibilities."
                backgroundImage={slideImage}
                showFloatingContact={false}
                containerStyle={{}}
                floatingContactProps={{
                    title: "Call us now!",
                    description: "Click the call Icon",
                    phoneNumber: "+91 7002394679",
                }}
            />
            <div className={styles.sp_container}>
                {
                    projectInfo.map((project_details) => (
                        <div className={styles.sp_projects_info}>
                            <div className={styles.sp_projects_info_child}>
                                <iframe
                                    style={{
                                        borderRadius: 16
                                    }}
                                    width="100%"
                                    height="100%"
                                    src={project_details.embed_url}
                                    frameBorder="0"
                                    allow="autoplay; encrypted-media"
                                ></iframe>
                            </div>
                            <div className={styles.sp_project_title_info}>
                                <h2 style={{fontSize: "2rem", fontWeight: "bold"}}>
                                    {project_details.project_title}
                                </h2>

                                <p style={{fontSize: "1.2rem", lineHeight: "1.5"}}>
                                    {project_details.project_desc}
                                </p>
                                <div className={styles.sp_project_info_wrapper}>
                                    <h3 style={{fontSize: "1.5rem", fontWeight: "bold"}}>
                                        Project Info
                                    </h3>

                                    <div className={styles.sp_client_info}>
                                        <div>
                                            <strong>Client:</strong> {project_details.client_name}
                                        </div>
                                        <div>
                                            <strong>Category:</strong> {project_details.category}
                                        </div>
                                        <div>
                                            <strong>Current Status:</strong> {project_details.current_status}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
            <Project/>
        </>
    );

}

export default SingleProject;
