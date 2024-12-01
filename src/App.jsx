import CommonCarousel from "./components/common/CommonCarousel";
import slideImage from "./assets/slide.jpg";
import Dashboard from "./container/dashboard/Dashboard";
import Contact from "./container/contact/Contact";
import SingleProject from "./container/singleProject/SingleProject";

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
            <SingleProject />
            {/* <Dashboard /> */}
        </>
    );
}

export default App;
