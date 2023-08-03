import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoToTop from "../components/GoToTop"

const Layout = (props) => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        {props.children}
        <GoToTop />
      </main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Layout;
