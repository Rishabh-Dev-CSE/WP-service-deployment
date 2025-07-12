import { useState } from "react";
import Navbar from "../navbar/Navbar";
import HeroSection from "./HeroSection";
import FeatureSection  from "./FeatureSection";
import TopClientsCarousel from "./ClientBIO";
import ServicesSection from "./Services";
import DailyOrderStatus from "./OrderStatus";
import EnquiryForm from "../clientproject/EnquiryForm";
import Footer from "../footer/Footer";

const HomePageRoute = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <FeatureSection />
            <ServicesSection />
            <DailyOrderStatus />
            <TopClientsCarousel />
            <EnquiryForm />
            <Footer />

        </div>
    )
}

export default HomePageRoute;