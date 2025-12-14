import { useState } from "react";
import Navbar from "../navbar/Navbar";
import HeroSection from "./HeroSection";
import FeatureSection  from "./FeatureSection";
import TopClientsCarousel from "./ClientBIO";
import ServicesSection from "./Services";
import Footer from "../footer/Footer";
import DocumentationComponent from "./Documentation";


const HomePageRoute = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <ServicesSection />
            <FeatureSection />
            <TopClientsCarousel />
            <DocumentationComponent />
            <Footer />
        </div>
    )
}

export default HomePageRoute;