import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imageOne from "../assets/h.jpg";
import imageTwo from "../assets/floral.jpg";
import imageThree from "../assets/diwali.jpg";
import "../styles/carouselComponent.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const CarouselComponent = () => {
  return (
    <Carousel showArrows onChange onClickItem onClickThumb autoPlay infiniteLoop showThumbs={false}>
      <div>
        <img src={imageOne} className="carousel-image" />
      </div>
      <div>
        <img src={imageTwo} className="carousel-image"/>
      </div>
      <div>
        <img src={imageThree} className="carousel-image"/>
      </div>
    </Carousel>
  );
};

export default CarouselComponent;
