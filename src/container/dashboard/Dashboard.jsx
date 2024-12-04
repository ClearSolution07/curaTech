import Slider from "./Carousel";
import About from "./About";
import ProcessSteps from "./ProcessSteps";
import SpecialProjects from "./SpecialProjects";
import ContactInfo from "./ContactInfo";
import Testimonials from "./Testimonials";
import VideoWithPlayButton from "./VideoWithPlayButton";

function Dashboard() {
    return (
        <>
            <Slider />
            <About />
            <ProcessSteps />
            <SpecialProjects />
            <ContactInfo />
            <Testimonials />
            <VideoWithPlayButton />
        </>
    );
}

export default Dashboard;
