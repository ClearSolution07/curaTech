import CommonCarousel from "../../components/common/CommonCarousel";
import slideImage from "../../assets/slide.jpg";
import phone from "../../assets/phone.png";
import image from "../../assets/img.png";
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
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of de
                            Finibus Bonorum et Malorum (The Extremes of Good and
                            Evil) by Cicero, written in 45 BC. This book is a
                            treatise on the theory of ethics,
                        </p>
                        <p
                            style={{
                                textAlign: "justify",
                                fontSize: "1.2rem",
                                lineHeight: "1.5",
                            }}
                        >
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of de
                            Finibus Bonorum et Malorum (The Extremes of Good and
                            Evil) by Cicero, written in 45 BC. This book is a
                            treatise on the theory of ethics,
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
                        Project Title
                    </h2>

                    <p style={{ fontSize: "1.2rem", lineHeight: "1.5" }}>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industrys
                        standard dummy text ever since the 1500s, when an
                        unknown printer took a galley of type and scrambled it
                        to make a type specimen book. It has survived not only
                        five centuries, but also the leap into electronic
                        typesetting, remaining essentially unchanged.
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
