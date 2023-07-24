import { useEffect, useState } from "react";
import "../styles/goToTop.css";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  function smoothScrollTo(target, duration) {
    const startPosition = window.scrollY;
    const targetPosition = 0;//target.getBoundingClientRect().top + window.scrollY if we want to scroll to specific element
    const startTime = performance.now();
  
    function ease(t) {
      return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
  
    function scrollStep(timestamp) {
      const currentTime = timestamp - startTime;
      const progress = Math.min(currentTime / duration, 1);
      const easedProgress = ease(progress);
  
      window.scrollTo(0, startPosition + (targetPosition - startPosition) * easedProgress);
  
      if (currentTime < duration) {
        window.requestAnimationFrame(scrollStep);
      }
    }
  
    window.requestAnimationFrame(scrollStep);
  }
  
  const goToBtn = () => {
    const targetElement = document.documentElement; // Replace 'target' with the ID of your target element
    const duration = 300; // Duration of the smooth scroll in milliseconds

    smoothScrollTo(targetElement, duration);

  };

  const listenToScroll = () => {
    let heightToHidden = 225;//height after which we want the button to be enabled
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="top-btn-container">
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <i className="fa-solid fa-arrow-up"></i>
        </div>
      )}
    </div>
  );
};

export default GoToTop;
