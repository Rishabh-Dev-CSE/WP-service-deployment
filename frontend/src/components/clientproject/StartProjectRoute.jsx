import React from "react";
import Navbar from "../navbar/Navbar";
import StartProjectHero from "./StartHeroSection";
import EcommerceShowcase from "./ecommerce";
import SaaSShowcase from "./SaaSShowcase";
import EnquiryForm from "./EnquiryForm";
import Footer from "../footer/Footer";
import RestaurantDesign from "./Restaurant";



const StartProjectRoute = () => {
    return (
        <div>
            <Navbar />
            <StartProjectHero />
            <EcommerceShowcase />
            <RestaurantDesign />
            <SaaSShowcase />
            <EnquiryForm />
            <Footer />

        </div>
    )
}

export default StartProjectRoute;