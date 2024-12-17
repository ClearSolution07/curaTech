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
            floatingContactProps={{
                title:"Call us now!", 
                description:"Click the call Icon",
                phoneNumber:"+91 7002394679"
            }}
            
        />
        <ImageGallery/>
    </>
);

}

export default Portfolio;
