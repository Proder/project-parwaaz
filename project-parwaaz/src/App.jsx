import Navbar from "./components/Navbar";
import CarouselComponent from "./components/CarouselComponent";
import GoToTop from "./components/GoToTop";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
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
