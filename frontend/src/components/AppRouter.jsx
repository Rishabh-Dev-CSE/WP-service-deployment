import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePageRoute from "./homepage/HomePageRoute";
import ScrollToTop from "./ScrollToTop";
import StartProjectRoute from "./clientproject/StartProjectRoute";

const AppRouter = () => {
    return (
        <BrowserRouter>
            <ScrollToTop />

            <Routes>
                 <Route path="/" element={<HomePageRoute />} />
                 <Route path="/start-project" element={<StartProjectRoute />} />
            </Routes>

        </BrowserRouter>
    );
}
export default AppRouter;