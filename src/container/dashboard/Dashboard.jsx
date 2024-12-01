import Slider from "./Carousel";
import About from "./About";
import ProcessSteps from "./ProcessSteps";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/FooterComponent";
import SpecialProjects from "./SpecialProjects";
function Dashboard() {
  return (
    <>
      <Navbar />
      <Slider />
      <About />
      <ProcessSteps />
      <SpecialProjects />
      <Footer />
    </>
  );
}

export default Dashboard;
