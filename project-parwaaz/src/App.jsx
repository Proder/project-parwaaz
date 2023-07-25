import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./UI/Layout";
import Home from "./pages/Home";
import Volunteer from "./pages/Volunteer";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
    </Layout>
  );
};

export default App;
