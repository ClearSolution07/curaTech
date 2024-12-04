import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Dashboard from "./container/dashboard/Dashboard";
import Contact from "./container/contact/Contact";
import SingleProject from "./container/singleProject/SingleProject";
import SingleService from "./container/singleService/SingleService";
import ServiceArchive from "./container/serviceArchive/ServiceArchive";
import AboutUs from "./container/aboutUs/AboutUs";
import Portfolio from "./container/portfolio/Portfolio";
import AppLayout from "./routConfig/AppLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/single-project" element={<SingleProject />} />
          <Route path="/single-service" element={<SingleService />} />
          <Route path="/service-archive" element={<ServiceArchive />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
