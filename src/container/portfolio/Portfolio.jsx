import CommonCarousel from "../../components/common/CommonCarousel";
import slideImage from "../../assets/Portfolio.svg";
import ImageGallery from "./ImageGallery";




function Portfolio() {
return (
    <>
        <CommonCarousel
            heading="Portfolio Archive"
            description="Home / Portfolio Archive"
            backgroundImage={slideImage}
            showFloatingContact={true}
            containerStyle={{}}
            floatingContactProps={{
                title: "Call Us Today",
                description: "+91 7002394679",
                
            }}
          
        />
        <ImageGallery/>
    </>
);

}

export default Portfolio;
