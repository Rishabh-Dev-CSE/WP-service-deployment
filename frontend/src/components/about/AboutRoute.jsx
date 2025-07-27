import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import AboutHero from "./AboutHero";
import MissionSection from "./MissionSection";


const AboutRoute = () => {
    return (
        <>
        <Navbar />
        <AboutHero />
        <MissionSection />
        <Footer />

        </>
    );

};

export default AboutRoute;