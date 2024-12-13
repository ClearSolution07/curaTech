import CommonCarousel from "../../components/common/CommonCarousel";
import slideImage from "../../assets/slide.jpg";
import phone from "../../assets/L12.jpg";
import image from "../../assets/7jb.jpg";
import Project from "./Projects"




function SingleProject() {
return (
    <>
        <CommonCarousel
            heading="Contacts"
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
                margin: "100px 0 100px 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    width: "60%",
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "100px",
                }}
            >
                <div
                    style={{
                        flex: 3,
                    }}
                >
                    <img
                        src={phone}
                        alt="Descriptive text"
                        style={{
                            width: "100%",
                            borderRadius: "12px",
                            marginBottom: "40px",
                        }}
                    />
                    <div
                        style={{
                            marginBottom: "40px",
                        }}
                    >
                        <p
                            style={{
                                textAlign: "justify",
                                fontSize: "1.2rem",
                                lineHeight: "1.5",
                            }}
                        >
                                                Cura Tech transformed a traditional office space into a modern, open-plan workplace for a leading tech company. Our team handled the architectural design, providing a sleek and functional layout that encourages collaboration and creativity. We also integrated interior design elements, selecting contemporary furniture, lighting, and color schemes that foster productivity. Additionally, our structural design team ensured that the building's framework supported the new open-concept design, while maintaining safety standards. We guided the client through the regulatory compliance process, ensuring all building codes, safety standards, and environmental regulations were met.

                        </p>

                    </div>
                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: "16px",
                            justifyContent: "space-between",
                        }}
                    >
                        <img
                            src={image}
                            alt="Image 1"
                            style={{
                                width: "calc(50% - 8px)",
                            }}
                        />
                        <img
                            src={image}
                            alt="Image 2"
                            style={{
                                width: "calc(50% - 8px)",
                            }}
                        />
                        <img
                            src={image}
                            alt="Image 3"
                            style={{
                                width: "calc(50% - 8px)",
                            }}
                        />
                        <img
                            src={image}
                            alt="Image 4"
                            style={{
                                width: "calc(50% - 8px)",
                            }}
                        />
                    </div>
                </div>
                <div
                    style={{
                        flex: 2,
                        textAlign: "justify",
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                    }}
                >
                    <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>
                    Modern Office Space for Tech Firm
                    </h2>

                    <p style={{ fontSize: "1.2rem", lineHeight: "1.5" }}>
                    Cura Tech transformed a traditional office into a modern, collaborative workspace with innovative design, structural enhancements, and full regulatory compliance.
                    </p>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                            Project Info
                        </h3>

                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px",
                            }}
                        >
                            <div>
                                <strong>Client:</strong> John Doe
                            </div>
                            <div>
                                <strong>Category:</strong> Construction Business
                            </div>
                            <div>
                                <strong>Completed on:</strong> 20 January 2022
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            gap: "10px",
                        }}
                    >
                        <img
                            src={phone}
                            alt="Facebook"
                            style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "8px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                            }}
                        />
                        <img
                            src={phone}
                            alt="Twitter"
                            style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "8px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                            }}
                        />
                        <img
                            src={phone}
                            alt="LinkedIn"
                            style={{
                                width: "30px",
                                height: "30px",
                                borderRadius: "8px",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
        <Project />
    </>
);

}

export default SingleProject;
