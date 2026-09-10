import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/home";
import Agence from "./pages/agence";
import Project from "./pages/project";
import Navbar from "./components/navigation/navbar";
import Fullscreennav from "./components/navigation/fullscreennav";
import Stairs from "./components/common/stairs";
import CustomCursor from "./components/common/CustomCursor";
import SmoothScroll from "./components/common/SmoothScroll";

const App = () => {
  const location = useLocation();

  return (
    <SmoothScroll>
      <div className="bg-black text-white min-h-screen relative font-[font300] selection:bg-[#D3FD50] selection:text-black">
        <CustomCursor />
        <Navbar />
        <Fullscreennav />
        <Stairs key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/agence" element={<Agence />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </Stairs>
      </div>
    </SmoothScroll>
  );
};

export default App;
