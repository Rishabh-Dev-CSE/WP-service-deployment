import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageRoute from "./homepage/HomePageRoute";
import ScrollToTop from "../../../../project/deployment-test/frontend/src/components/ScrollToTop";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <Routes>
                 <Route path="/" element={<HomePageRoute />} />
            </Routes>


        </BrowserRouter>
       
    );
}

export default AppRouter;