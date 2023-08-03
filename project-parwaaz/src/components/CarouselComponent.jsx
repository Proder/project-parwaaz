import imageOne from "../assets/Simplicity.jpg";
import imageTwo from "../assets/floral.jpg";
import imageThree from "../assets/diwali.jpg";
import "../styles/carouselComponent.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
  return (
    <div className="carousel-component">
    <Carousel
      showArrows={true}
      onChange
      onClickItem
      onClickThumb
      autoPlay={1000}
      infiniteLoop
      fade={true}
      showStatus={false}
      showIndicators={true}
      showThumbs={false}
    >
      <div>
        <img src={imageOne} className="carousel-image" />
      </div>
      <div>
        <img src={imageTwo} className="carousel-image" />
      </div>
      <div>
        <img src={imageThree} className="carousel-image" />
      </div>
    </Carousel>
  </div>
  );
};

export default CarouselComponent;
