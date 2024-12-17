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

        />
        <AboutSection/>
        <HeroSection/>
    </>
);

}

export default AboutUs;
