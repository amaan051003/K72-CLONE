import React, { Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
const Home = lazy(() => import("./pages/home"));
const Agence = lazy(() => import("./pages/agence"));
const Project = lazy(() => import("./pages/project"));
import Navbar from "./components/navigation/navbar";
import Fullscreennav from "./components/navigation/fullscreennav";
import Stairs from "./components/common/stairs";
import CustomCursor from "./components/common/CustomCursor";
import SmoothScroll from "./components/common/SmoothScroll";
import TimeDateDisplay from "./components/common/TimeDateDisplay";

const App = () => {
  const location = useLocation();
  return (
    <SmoothScroll>
      <div className="bg-black text-white min-h-screen relative font-light selection:bg-[#D3FD50] selection:text-black">
        <CustomCursor />
        <TimeDateDisplay />
        <Navbar />
        <Fullscreennav />
        <Stairs key={location.pathname}>
          <Suspense
            fallback={
              <div className="h-screen w-full flex items-center justify-center bg-black text-[#D3FD50] font-medium uppercase tracking-widest text-sm">
                Loading...
              </div>
            }
          >
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/agence" element={<Agence />} />
              <Route path="/project" element={<Project />} />
            </Routes>
          </Suspense>
        </Stairs>
      </div>
    </SmoothScroll>
  );
};
export default App;
