import Slider from './Carousel';
import About from "./About";
import ProcessSteps from "./ProcessSteps";
import Navbar from '../../components/common/Navbar';
import Footer from '../../components/common/Footer'
function Dashboard() {
    return (
        <>
            <Navbar />
            <Slider />
            <About />
            <ProcessSteps />
            <Footer />
        </>
    );
}

export default Dashboard;
