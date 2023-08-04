import "../styles/about.css";
import AnimatedBox from "../components/AnimatedBox";
import { useState, useEffect } from "react";

export default function About() {
  const [scrollY, setScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(true);
  
  // Handle the scroll event
  const handleScroll = () => {
    setScrollY(window.scrollY);
    setIsFixed(window.scrollY < 690 ? true : false);
  };

  // Attach the scroll event listener on component mount
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Adjust the animation values as per your requirements
  const opacity = 1 - scrollY * 0.0015; // Decrease opacity as the user scrolls down
  const translate = scrollY * 1.05;
  return (
    <>
      <div className="about-page-container">
        <div className={`vision ${isFixed ? "fixed" : ""}`}>
          <div className="vision-title">
            <span>Our Vision</span>
           
          </div>
          <div className="vision-text-container">
            <div className="vision-text">
             <p>
              Giving wings to the future of Jammu and Kashmir by delievering education, dreams and chocolates.
              </p>
              </div>
          </div>
        </div>
        <div>
          {/* The animated part */}
          <AnimatedBox opacity={opacity} translate={translate} />
        </div>
        <div className={`mission ${isFixed ? "fixed" : ""}`}>
          <div className="mission-title">
            <span>Our Mission</span>
          </div>
          <div className="mission-text-container">
            <div className="mission-text">
              <p>
                To provide education to the youth of Jammu and Kashmir.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
