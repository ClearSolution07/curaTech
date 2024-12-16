import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import Dashboard from "./container/dashboard/Dashboard";
import Contact from "./container/contact/Contact";
import SingleProject from "./container/singleProject/SingleProject";
import SingleService from "./container/singleService/SingleService";
import ServiceArchive from "./container/serviceArchive/ServiceArchive";
import AboutUs from "./container/aboutUs/AboutUs";
import Portfolio from "./container/portfolio/Portfolio";
import AppLayout from "./routConfig/AppLayout";
import Loader from './components/Loader/progress';
import "./app.css";

function App() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();

    // Simulate loading during page refresh
    useEffect(() => {
        setLoading(true);
        const timeout = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timeout);
    }, []);

    // Simulate loading during route changes
//    useEffect(() => {
//        setLoading(true);
//        const timeout = setTimeout(() => setLoading(false), 500);
//        return () => clearTimeout(timeout);
//    }, [location]);

    return (
        <>
            {loading && <Loader imageSrc="/src/assets/Cura Tech Enginnering WithoutB.png" />}
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
        </>
    );
}

export default function Root() {
    return (
        <Router>
            <App />
        </Router>
    );
}
