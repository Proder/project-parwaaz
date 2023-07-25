import "./App.css";
import CarouselComponent from "./components/CarouselComponent";
import GoToTop from "./components/GoToTop";
import MyCarousel from "./components/MyCarousel";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar/>
      <CarouselComponent/>
      <MyCarousel/>
      <GoToTop/>
      </>
  );
};

export default App;
