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
// import NatureTemplate from "./services/wesite-service/theames/nature/nature";
import AppServiceRoute from "./services/app-services/AppServiceRoute";
import SocialMediaRoute from "./services/social-media/SocialMediaRoute";
import ComingSoonPageRoute from "./comingsoon/ComingSoonRoute";
import PricingRoute from "./pricing/PricingRoute";
import AdminPanelDashboard from "./admindashboard/AdminRoute";
import SignUpAndLogin from "./signup-and-login/SignupAndLogin";


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
                {/* signup and login routes */}

                <Route path="/signup-&-login" element={<SignUpAndLogin />} />
                {/* Theme routes  */}
                <Route path="/services/seo-service" element={<SeoRoute />} />
                <Route path="/services/website-development-theme" element={<WebsiteRoute /> } />
                <Route path="/services/app-service/app-theme" element={<AppServiceRoute />} />
                <Route path="/services/social-media-service" element={<SocialMediaRoute />} />
                <Route path="/service/pricing" element={<PricingRoute />} />
                <Route path="/coming-soon" element={<ComingSoonPageRoute />} />
                <Route path="/super-admin-dashboard" element={<AdminPanelDashboard />} />

            </Routes>

        </BrowserRouter>
    );
}
export default AppRouter;