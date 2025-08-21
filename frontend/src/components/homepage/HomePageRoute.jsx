import { useState } from "react";
import Navbar from "../navbar/Navbar";
import HeroSection from "./HeroSection";
import FeatureSection  from "./FeatureSection";
import TopClientsCarousel from "./ClientBIO";
import ServicesSection from "./Services";
import DailyOrderStatus from "./OrderStatus";
import Footer from "../footer/Footer";
import DocumentationComponent from "./Documentation";
// import ParallaxSections from "../testfolder/Sections";
// import LoginAndSend from "./LoginAndSend";

const HomePageRoute = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <FeatureSection />
            <TopClientsCarousel />
            <DailyOrderStatus />
            <DocumentationComponent />
            {/* <ParallaxSections /> */}
            {/* <LoginAndSend /> */}
            <Footer />

        </div>
    )
}

export default HomePageRoute;