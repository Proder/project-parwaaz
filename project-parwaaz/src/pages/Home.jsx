
import CardComponent from "../components/CardComponent";
import CarouselComponent from "../components/CarouselComponent";
import GoToTop from "../components/GoToTop";
import Stories from "../components/Stories";

export default function Home() {
  return (
    <>
      <CarouselComponent />
      <Stories />
      <CardComponent/>
      <GoToTop />
    </>
  );
}
