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
            containerStyle={{}}
            floatingContactProps={{
                title: "Call Us Today",
                description: "+1 123 4567 789",
                
            }}
          
        />
        <AboutSection/>
        <HeroSection/>
    </>
);

}

export default AboutUs;
