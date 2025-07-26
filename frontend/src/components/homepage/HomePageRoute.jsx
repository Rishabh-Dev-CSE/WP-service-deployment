import { useState } from "react";
import Navbar from "../navbar/Navbar";
import HeroSection from "./HeroSection";
import FeatureSection  from "./FeatureSection";
import TopClientsCarousel from "./ClientBIO";
import ServicesSection from "./Services";
import DailyOrderStatus from "./OrderStatus";
import Footer from "../footer/Footer";
// import LoginAndSend from "./LoginAndSend";

const HomePageRoute = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <FeatureSection />
            <TopClientsCarousel />
            <ServicesSection />
            <DailyOrderStatus />
            {/* <LoginAndSend /> */}
            <Footer />

        </div>
    )
}

export default HomePageRoute;