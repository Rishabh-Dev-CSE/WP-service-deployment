import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import 'swiper/css';
import 'swiper/css/navigation';

const App = () => {
  return <AppRouter />;
};

export default App;
