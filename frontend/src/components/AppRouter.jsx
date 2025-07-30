import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageRoute from "./homepage/HomePageRoute";
import ScrollToTop from "./ScrollToTop";
import StartProjectRoute from "./clientproject/StartProjectRoute";
import AboutRoute from "./about/AboutRoute";
import ContactRoute from "./contact/ContactRoute";
import SeoRoute from "./services/seoservice/SeoRoute";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <Routes>
                 <Route path="/" element={<HomePageRoute />} />
                 <Route path="/start-project" element={<StartProjectRoute />} />
                 <Route path="/about-us" element={<AboutRoute />} />
                 <Route path="/contact" element={<ContactRoute />} />
                 <Route path="/seo-service" element={<SeoRoute />} />
            </Routes>

        </BrowserRouter>
    );
}
export default AppRouter;