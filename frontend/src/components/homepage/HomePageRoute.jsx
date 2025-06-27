import { useState } from "react";
import Navbar from "../navbar/Navbar";
import HeroSection from "./HeroSection";
import FeatureSection  from "./FeatureSection";

const HomePageRoute = () => {
    return (
        <div>
            <Navbar />
            <HeroSection />
            <FeatureSection />
            
        </div>
    )
}

export default HomePageRoute;