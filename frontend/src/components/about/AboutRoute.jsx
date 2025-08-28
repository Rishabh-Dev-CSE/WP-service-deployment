import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import AboutHero from "./AboutHero";
import MissionSection from "./MissionSection";
import MeetOurTeam from "./TeamBio";
// import VideoGeneratorUI from "./ai";


const AboutRoute = () => {
    return (
        <>
        <Navbar />
        <AboutHero />
        <MissionSection />
        <MeetOurTeam />
        {/* <VideoGeneratorUI /> */}
        <Footer />

        </>
    );

};

export default AboutRoute;