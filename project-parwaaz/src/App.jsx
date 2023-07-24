import "./App.css";
import Navbar from "./components/Navbar";
import CarouselComponent from "./components/CarouselComponent";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <CarouselComponent />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default App;
