import React from "react";
import ServicePage from "./ServicePage";
import Navbar from "../../navbar/Navbar";
import Footer from "../../footer/Footer";

export default function ServicePageRoute() {
    return(
        <>
            <Navbar />
            <ServicePage />
            <Footer />
        </>
    )
}