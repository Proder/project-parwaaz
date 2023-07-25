import { Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const Layout = (props) => {
  return (
    <Fragment>
      <header>
        <Navbar />
      </header>
      <main>{props.children}</main>
      <footer>
        <Footer />
      </footer>
    </Fragment>
  );
};

export default Layout;
