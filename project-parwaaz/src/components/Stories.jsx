import "../styles/myCarousel.css";

import image1 from "../assets/floral.jpg";
import image2 from "../assets/diwali.jpg";
import image3 from "../assets/Simplicity.jpg";
import image4 from "../assets/mountain.jpg";
import { useState } from "react";

const Stories = () => {
  const [slideState, setSlideState] = useState(0);

  const animatePrevSlide = () => {
    const animateTitle = document.getElementById("slide-title");
    const animateContent = document.getElementById("slide-content");
    const animateImage = document.getElementById("slide-image");

    animateTitle.classList.add("animate1");
    animateTitle?.addEventListener(
      "animationend",
      () => animateTitle.classList.remove("animate1"),
      { once: true }
    );
    animateContent.classList.add("animate2");
    animateContent?.addEventListener(
      "animationend",
      () => animateContent.classList.remove("animate2"),
      { once: true }
    );
    animateImage.classList.add("animate5");
    animateImage?.addEventListener(
      "animationend",
      () => animateImage.classList.remove("animate5"),
      { once: true }
    );
  };

  const animateNextSlide = () => {
    const animateTitle = document.getElementById("slide-title");
    const animateContent = document.getElementById("slide-content");
    const animateImage = document.getElementById("slide-image");

    animateTitle.classList.add("animate3");
    animateTitle?.addEventListener(
      "animationend",
      () => animateTitle.classList.remove("animate3"),
      { once: true }
    );
    animateContent.classList.add("animate4");
    animateContent?.addEventListener(
      "animationend",
      () => animateContent.classList.remove("animate4"),
      { once: true }
    );
    animateImage.classList.add("animate5");
    animateImage?.addEventListener(
      "animationend",
      () => animateImage.classList.remove("animate5"),
      { once: true }
    );
  };

  const PrevImage = () => {
    if (slideState > 0) {
      setSlideState((prevState) => prevState - 1);
      animatePrevSlide();
    } else {
      setSlideState(slides.length - 1);
      animatePrevSlide();
    }
  };
  const NextImage = () => {
    if (slideState < slides.length - 1) {
      setSlideState((prevState) => prevState + 1);
      animateNextSlide();
    } else {
      setSlideState(0);
      animateNextSlide();
    }
  };

  const slides = [
    {
      imgSrc: image1,
      title: "Title of Slide2",
      content: "Content of Slide2",
    },
    {
      imgSrc: image2,
      title: "Title of Slide3",
      content: "Content of Slide3",
    },
    {
      imgSrc: image3,
      title: "Title of Slide4",
      content: "Content of Slide4",
    },
    {
      imgSrc: image4,
      title: "Title of Slide5",
      content: "Content of Slide5",
    },
  ];

  return (
    <div className="carousel-container">
      <div className="current-slide-container">
        <i
          id="left-arrow"
          className="fa-solid fa-circle-chevron-left fa-2xl"
          onClick={PrevImage}
        />
        <div className="slide-container">
          <div className="image-container">
            <img
              src={slides[slideState].imgSrc}
              className="current-image"
              id="slide-image"
            />
          </div>
          <div className="slide-info">
            <div className="slide-title" id="slide-title">
              {slides[slideState].title}
            </div>
            <div className="slide-content" id="slide-content">
              {slides[slideState].content}
            </div>

            <button className="button-28" role="button">
              Know More
            </button>
          </div>
        </div>
        <i
          id="right-arrow"
          className="fa-solid fa-circle-chevron-right fa-2xl"
          onClick={NextImage}
        />
      </div>
    </div>
  );
};

export default Stories;
