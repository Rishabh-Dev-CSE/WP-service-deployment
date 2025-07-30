import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import AboutHero from "./AboutHero";
import MissionSection from "./MissionSection";
import MeetOurTeam from "./TeamBio";


const AboutRoute = () => {
    return (
        <>
        <Navbar />
        <AboutHero />
        <MissionSection />
        <MeetOurTeam />
        <Footer />

        </>
    );

};

export default AboutRoute;