import React from "react";
import Navbar from "../navbar/Navbar";
import EnquiryForm from "../clientproject/EnquiryForm";
import Contact from "./Contact";
import Footer from "../footer/Footer";
import AdUnit from "../navbar/AdUnit";

const ContactRoute = () => {
    return (
        <>
            <Navbar />
            <EnquiryForm />
            <Contact />
            <div style={{ width: "100%", height: "100px" }} className=" bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#952ca3] text-white text-center">
                    ads loading...
                <AdUnit style={{ display: "block", width: "100%", height: "100px" }} />
            </div>

            <Footer />
        </>
    );
};

export default ContactRoute;