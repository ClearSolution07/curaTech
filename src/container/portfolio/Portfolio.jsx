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
        />
        <ImageGallery/>
    </>
);

}

export default Portfolio;
