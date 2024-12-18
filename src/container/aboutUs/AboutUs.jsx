import CommonCarousel from "../../components/common/CommonCarousel";
import slideImage from "../../assets/Rectangle.svg";
import AboutSection from "./AboutSection";
import HeroSection from "./HeroSection";

function AboutUs() {
    return (
        <>
            <CommonCarousel
                heading="About Us"
                description="Home / About Us"
                backgroundImage={slideImage}
                showFloatingContact={true}
                floatingContactProps={{
                    title: "Call us now!",
                    description: "Click the call Icon",
                    phoneNumber: "+91 7002394679",
                }}
            />
            <AboutSection />
            <HeroSection />
        </>
    );
}

export default AboutUs;
