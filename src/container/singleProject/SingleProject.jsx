import Navbar from "../../components/common/Navbar";
import CommonCarousel from "../../components/common/CommonCarousel";
import Footer from "../../components/common/FooterComponent";
import slideImage from "../../assets/slide.jpg";
import phone from "../../assets/phone.png";
import image from "../../assets/img.png";
import Project from "./Projects"

function SingleProject() {
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
        <div
            style={{
                margin: "100px 0 100px 0",
                width: "100vw",
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
                        <p style={{ textAlign: "justify" }}>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                            Finibus Bonorum et Malorum" (The Extremes of Good
                            and Evil) by Cicero, written in 45 BC. This book is
                            a treatise on the theory of ethics,
                        </p>
                        <p style={{ textAlign: "justify" }}>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections 1.10.32 and 1.10.33 of "de
                            Finibus Bonorum et Malorum" (The Extremes of Good
                            and Evil) by Cicero, written in 45 BC. This book is
                            a treatise on the theory of ethics,
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
                    }}
                >
                    right section jshfbdshj dsjhfbdsjh jhgjh jhgjhg jvjgv jgvjgv
                    hgvghv vjhgvgh vjhgvhjg vhgvgjk vjghkv ghkjvgk jkgh vkgv
                    kjgv kjgfv kgjkhjg vghkj vghkj vhgfv hgfg ghj ghjf kjghfv
                    khgvfkghj vghj vgjh vjgh vghv ghv ghvgh vhg vv v v vv v
                    vvvvvvvvvvvv vghcjhf h vhcv jhvjh vh
                </div>
            </div>
        </div>
        <div
            style={{
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div>
                <div>Bottom section</div>
            </div>
        </div>
        <Project />
        <Footer />
    </>
);

}

export default SingleProject;
