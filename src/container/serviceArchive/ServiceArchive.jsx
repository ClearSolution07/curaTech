import Navbar from "../../components/common/Navbar";
import CommonCarousel from "../../components/common/CommonCarousel";
import Footer from "../../components/common/FooterComponent";
import slideImage from "../../assets/slide.jpg";
import styles from "./ServiceArchive.module.css";
import image from "../../assets/img.png";

function ServiceArchive() {
    const contentList = [
        {
            heading: "Heading Title 1",
            description: `Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry’s standard 
            dummy text ever since the 1500s, when an unknown printer took a galley 
            of type and scrambled it to make a type specimen book.`,
            imagePosition: "left",
        },
        {
            heading: "Heading Title 2",
            description: `Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry’s standard 
            dummy text ever since the 1500s, when an unknown printer took a galley 
            of type and scrambled it to make a type specimen book.`,
            imagePosition: "right",
        },
        {
            heading: "Heading Title 3",
            description: `Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry’s standard 
            dummy text ever since the 1500s, when an unknown printer took a galley 
            of type and scrambled it to make a type specimen book.`,
            imagePosition: "left",
        },
        {
            heading: "Heading Title 4",
            description: `Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry’s standard 
            dummy text ever since the 1500s, when an unknown printer took a galley 
            of type and scrambled it to make a type specimen book.`,
            imagePosition: "right",
        },
    ];

    return (
        <>
            <Navbar />

            <CommonCarousel
                heading="Service Archive"
                description="Explore opportunities and possibilities."
                backgroundImage={slideImage}
                showFloatingContact={true}
                containerStyle={{}}
                floatingContactProps={{
                    title: "We Construct and Manage Places and Infrastructures",
                    description: "We offer the best solutions for your needs.",
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
                            src={image}
                            alt="Illustration"
                            className={styles.image}
                        />
                        <div className={styles.descriptionContainer}>
                            <h2 className={styles.heading}>{item.heading}</h2>
                            <p className={styles.description}>
                                {item.description}
                            </p>
                            <button className={styles.button}>
                                Learn More
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default ServiceArchive;
