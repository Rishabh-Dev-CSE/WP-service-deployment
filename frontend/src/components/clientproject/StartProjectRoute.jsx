import React from "react";
import Navbar from "../navbar/Navbar";
import StartProjectHero from "./StartHeroSection";
import EcommerceShowcase from "./ecommerce";
import SaaSShowcase from "./SaaSShowcase";
import EnquiryForm from "./EnquiryForm";
import Footer from "../footer/Footer";



const StartProjectRoute = () => {
    return (
        <div>
            <Navbar />
            <StartProjectHero />
            <EcommerceShowcase />
            <SaaSShowcase />
            <EnquiryForm />
            <Footer />

        </div>
    )
}

export default StartProjectRoute;