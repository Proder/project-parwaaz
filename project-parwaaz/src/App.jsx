
import { Route, Routes } from "react-router-dom";
import Layout from "./UI/Layout";
import Home from "./pages/Home";
import Volunteer from "./pages/Volunteer";
import ContactUs from "./pages/ContactUs";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<ContactUs/>} />
        <Route path="/Volunteer" element={<Volunteer />} />
      </Routes>
    </Layout>
  );
};

export default App;
