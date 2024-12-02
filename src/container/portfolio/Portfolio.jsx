import Navbar from "../../components/common/Navbar";
import CommonCarousel from "../../components/common/CommonCarousel";
import Footer from "../../components/common/FooterComponent";
import slideImage from "../../assets/Portfolio.svg";
import ImageGallery from "./ImageGallery";




function Portfolio() {
return (
    <>
        <Navbar />
        <CommonCarousel
            heading="Portfolio Archive"
            description="Home / Portfolio Archive"
            backgroundImage={slideImage}
            showFloatingContact={true}
            containerStyle={{}}
            floatingContactProps={{
                title: "Call Us Today",
                description: "+1 123 4567 789",
                
            }}
          
        />
        <ImageGallery/>
        
       
        <Footer />
    </>
);

}

export default Portfolio;
