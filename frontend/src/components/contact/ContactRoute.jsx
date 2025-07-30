import React from "react";
import Navbar from "../navbar/Navbar";
import EnquiryForm from "../clientproject/EnquiryForm";
import Contact from "./Contact";
import Footer from "../footer/Footer";

const ContactRoute = () => {
    return(
        <>
        <Navbar />
        <EnquiryForm />
        <Contact />
        <Footer />
        </>
    );
};

export default ContactRoute;