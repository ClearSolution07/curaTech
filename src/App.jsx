import CommonCarousel from "./components/common/CommonCarousel";
import slideImage from "./assets/slide.jpg";
import Dashboard from "./container/dashboard/Dashboard";
import Contact from "./container/contact/Contact";
import SingleProject from "./container/singleProject/SingleProject";
import SingleService from "./container/singleService/SingleService";
import ServiceArchive from "./container/serviceArchive/ServiceArchive";

function App() {
    return (
        <>
            {/* <CommonCarousel
                heading="Discover New Horizons"
                description="Explore opportunities and possibilities."
                backgroundImage={slideImage}
                showFloatingContact={true}
                containerStyle={{}}
                floatingContactProps={{
                    title: "We Construct and Manage Places and Infrastructures",
                    description: "We offer the best solutions for your needs.",
                }}
            /> */}
            {/* <Contact /> */}
            {/* <SingleProject /> */}
            {/* <SingleService /> */}
            <ServiceArchive />
            {/* <Dashboard /> */}
        </>
    );
}

export default App;
