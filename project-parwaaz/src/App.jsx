import Navbar from "./components/Navbar";
import CarouselComponent from "./components/CarouselComponent";
import GoToTop from "./components/GoToTop";
import MyCarousel from "./components/MyCarousel";

import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar/>
      <CarouselComponent/>
      <MyCarousel/>
      <GoToTop/>
  
      <header>
        <Navbar />
      </header>
      <main>
        <CarouselComponent />
        <GoToTop />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
