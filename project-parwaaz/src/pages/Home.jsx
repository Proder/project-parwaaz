import CardComponent from "../components/CardComponent";
import CarouselComponent from "../components/CarouselComponent";
import Stories from "../components/Stories";

export default function Home() {
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  return (
    <>
      <CarouselComponent />
      <div className="reveal">
        <Stories />
      </div>
      <div className="reveal">
        <CardComponent />
      </div>
    </>
  );
}
