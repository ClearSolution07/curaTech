import Slider from "./Carousel";
import About from "./About";
import ProcessSteps from "./ProcessSteps";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/FooterComponent";
import SpecialProjects from "./SpecialProjects";
import ContactInfo from "./ContactInfo";
import Testimonials from "./Testimonials";
import VideoWithPlayButton from "./VideoWithPlayButton";

function Dashboard() {
  return (
    <>
      <Navbar />          
      <Slider />
      <About />
      <ProcessSteps />
      <SpecialProjects />
      <ContactInfo />
      <Testimonials />
      <VideoWithPlayButton />
      <Footer />
    </>
  );
}

export default Dashboard;
