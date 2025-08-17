import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageRoute from "./homepage/HomePageRoute";
import ScrollToTop from "./ScrollToTop";
import StartProjectRoute from "./clientproject/StartProjectRoute";
import AboutRoute from "./about/AboutRoute";
import ContactRoute from "./contact/ContactRoute";
import SeoRoute from "./services/seoservice/SeoRoute";
import ServicePageRoute from "./services/servicespage/ServicepageRoute";
import WebsiteRoute from "./services/wesite-service/WebsiteRoute";
import NatureTemplate from "./services/wesite-service/theames/nature/nature";
import EcommerceTemplate from "./services/wesite-service/theames/ecommerce/E-commerce";
import AppServiceRoute from "./services/app-services/AppServiceRoute";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<HomePageRoute />} />
                <Route path="/start-project" element={<StartProjectRoute />} />
                <Route path="/about-us" element={<AboutRoute />} />
                <Route path="/contact" element={<ContactRoute />} />

                <Route path="/services" element={<ServicePageRoute />} />
                
                <Route path="/services/website-development-theme" element={<WebsiteRoute />} />
                <Route path="/services/seo-service" element={<SeoRoute />} />
                <Route path="/services/app-service/app-theme" element={<AppServiceRoute />} />


                {/* Theme routes  */}
                <Route path="/themes/nature-theme-demo" element={<NatureTemplate />} />

                <Route path="/themes/E-commerce-theme-demo" element={<EcommerceTemplate /> } />



            </Routes>

        </BrowserRouter>
    );
}
export default AppRouter;