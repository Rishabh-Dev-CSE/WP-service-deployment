import React from "react";
import WebsiteTheameCards from "./WebsiteTheameCards";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";
import ServicesPageSidebar from "../servicespage/ServicesPageSidebar";

const WebsiteRoute = () => {
    return (
        <>
        <Navbar />
        <WebsiteTheameCards />
        <Footer />
        </>
    )
}
export default WebsiteRoute;