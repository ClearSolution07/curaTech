import CommonCarousel from "../../components/common/CommonCarousel";
import slideImage from "../../assets/slide.jpg";
import styles from "./ServiceArchive.module.css";
import image1 from "../../assets/L11.jpg";
import image2 from "../../assets/L9.jpg";
import image3 from "../../assets/L10.jpg";
import image4 from "../../assets/L8.jpg";

function ServiceArchive() {
    const contentList = [
        {
            heading: "Architectural and Structural Design",
            description: `Cura Tech offers innovative and practical architectural and structural design services. Our team of experts works closely with clients to create designs that are both aesthetically appealing and structurally sound. We combine creativity with engineering precision to ensure that each design reflects the client’s vision while adhering to safety and regulatory standards. Whether it's residential, commercial, or institutional, we bring your concepts to life with sustainable and functional designs.`,
            image: image1,
            imagePosition: "left",
        },
        {
            heading: "Residential & Commercial Construction",
            description: `Cura Tech provides complete construction services for both residential and commercial projects. We manage every aspect of the construction process, from site preparation to final touches. Our team ensures timely and cost-effective delivery while maintaining the highest quality standards. Whether you’re building a new home, office, or retail space, our experience and expertise guarantee that your project will be built to last.`,
            image: image2,
            imagePosition: "right",
        },
        {
            heading: "Interior Design",
            description: `Our interior design services focus on transforming spaces to be both functional and aesthetically pleasing. We offer customized solutions for residential, commercial, and industrial interiors, ensuring that each space maximizes its potential. From selecting the right furniture and lighting to designing layouts that enhance comfort and flow, we create interiors that align with your personal or business style while optimizing space utilization.`,
            image: image3,
            imagePosition: "left",
        },
        {
            heading: "Turnkey Solutions",
            description: "At Cura Tech, we provide comprehensive turnkey solutions for a hassle-free project experience. From initial design to project completion, we take care of all aspects, ensuring seamless integration and coordination. Our turnkey services are ideal for clients who want a one-stop solution, with full accountability and no need to manage multiple contractors. We handle everything from permits to final handover, delivering a complete, ready-to-use product.",
            image: image4,
            imagePosition: "right",
        },
    ];

    return (
        <>
            <CommonCarousel
                heading="Service Archive"
                description="Explore opportunities and possibilities."
                backgroundImage={slideImage}
                showFloatingContact={true}
                containerStyle={{}}
                floatingContactProps={{
                    title: "Call Us Today",
                    description: "+91 7002394679",
                }}
            />
            <div
                style={{
                    margin: "100px 0",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexDirection: "column",
                }}
            >
                {contentList.map((item, index) => (
                    <div
                        key={index}
                        className={styles.container}
                        style={{
                            flexDirection:
                                item.imagePosition === "left"
                                    ? "row"
                                    : "row-reverse",
                        }}
                    >
                        <img
                            src={item.image}
                            alt={item.heading}
                            className={styles.image}
                        />
                        <div className={styles.descriptionContainer}>
                            <h2 className={styles.heading}>{item.heading}</h2>
                            <p className={styles.description}>
                                {item.description}
                            </p>
                            <div className={styles.buttonContainer}>
                                <button className={styles.slideButton}>
                                    Know More
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default ServiceArchive;
