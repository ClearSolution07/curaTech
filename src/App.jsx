import CommonCarousel from "./components/common/CommonCarousel";
import slideImage from "./assets/slide.jpg";
import Dashboard from "./container/dashboard/Dashboard"
import Contact from "./container/contact/Contact"

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
            {/* <Dashboard /> */}
            <Contact />
        </>
    );
}

export default App;
