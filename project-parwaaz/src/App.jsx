
import { Route, Routes } from "react-router-dom";
import Layout from "./UI/Layout";
import Home from "./pages/Home";
import About from "./pages/About"
import Volunteer from "./pages/Volunteer";
import ContactUs from "./pages/ContactUs";
import Faq from "./pages/Faq";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Volunteer" element={<Volunteer />} />
        <Route path="/faqs" element = {<Faq/>}/>
        <Route path="/Contact" element={<ContactUs/>} />
      </Routes>
    </Layout>
  );
};

export default App;
