import Navbar from "./components/Navbar";
import CarouselComponent from "./components/CarouselComponent";
import GoToTop from "./components/GoToTop";
import MyCarousel from "./components/MyCarousel";

import Footer from "./components/Footer";

const App = () => {
  return (
    <>
     
  
      <header>
        <Navbar />
      </header>
      <main>
        <CarouselComponent />
        <MyCarousel/>
        <GoToTop />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
