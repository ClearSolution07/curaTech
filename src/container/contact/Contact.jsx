import Navbar from "../../components/common/Navbar";
import CommonCarousel from "../../components/common/CommonCarousel";
import Footer from "../../components/common/FooterComponent";
import slideImage from "../../assets/slide.jpg";
import phone from "../../assets/phone.png";
import dmail from "../../assets/dmail.png";
import SubmitForm from "./Form";

function Contact() {
    return (
        <>
            <Navbar />
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
            <SubmitForm />
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "0px 0 100px 0",
                }}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76650.73386535747!2d91.6705859906647!3d26.14216014929935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a5a287f9133ff%3A0x2bbd1332436bde32!2sGuwahati%2C%20Assam!5e0!3m2!1sen!2sin!4v1732977526834!5m2!1sen!2sin"
                    width="60%"
                    height="450"
                    style={{
                        border: "0",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps"
                ></iframe>
            </div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    gap: "10px",
                    paddingBottom: "100px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        width: "60%",
                        justifyContent: "space-between",
                        alignItems: "start",
                        gap: "32px",
                        padding: "10px",
                    }}
                >
                    <div
                        style={{
                            width: "40%",
                            padding: "10px",
                            height: "160px",
                            border: "1px solid #ccc",
                            boxShadow:
                                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            borderLeft: "8px solid #b02636",
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <div
                            style={{ fontWeight: "bold", marginBottom: "10px" }}
                        >
                            Company Name
                        </div>
                        <h1
                            style={{
                                fontSize: "24px",
                                lineHeight: "1.5",
                                wordWrap: "break-word",
                                margin: 0,
                            }}
                        >
                            Themeforest, Envato HQ 24 Fifth st., Los Angeles,
                            USA
                        </h1>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            width: "30%",
                            borderRadius: "6px",
                        }}
                    >
                        <div
                            style={{
                                width: "30%",
                                borderRadius: "6px",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                padding: "10px",
                            }}
                        >
                            <img
                                src={phone}
                                alt="Descriptive text"
                                style={{ width: "60%" }}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div>Company Phones</div>
                            <div
                                style={{
                                    fontSize: "16px",
                                    color: "#16213E",
                                }}
                            >
                                <div
                                    style={{
                                        marginTop: "8px",
                                    }}
                                >
                                    + 1 234 5678 098
                                </div>
                                <div
                                    style={{
                                        marginTop: "8px",
                                    }}
                                >
                                    + 1 234 5678 098
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            width: "30%",
                            borderRadius: "6px",
                        }}
                    >
                        <div
                            style={{
                                width: "30%",
                                borderRadius: "6px",
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                padding: "10px",
                            }}
                        >
                            <img
                                src={dmail}
                                alt="Descriptive text"
                                style={{ width: "60%" }}
                            />
                        </div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <div>Company Phones</div>
                            <div
                                style={{
                                    fontSize: "16px",
                                    color: "#16213E",
                                }}
                            >
                                <div
                                    style={{
                                        marginTop: "8px",
                                    }}
                                >
                                    + 1 234 5678 098
                                </div>
                                <div
                                    style={{
                                        marginTop: "8px",
                                    }}
                                >
                                    + 1 234 5678 098
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Contact;
