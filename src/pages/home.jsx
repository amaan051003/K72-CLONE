import React from "react";
import Vidio from "../components/home/vidio";
import Homeherotext from "../components/home/homeherotext";
import Homebottomtext from "../components/home/homebottomtext";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>K72 - Creative Agency</title>
        <meta
          name="description"
          content="K72 is a creative agency focused on branding, design, and digital experiences."
        />
      </Helmet>
      <div className="min-h-screen w-full relative select-none overflow-hidden flex flex-col justify-between">
        <div className="fixed inset-0 z-0 opacity-40 mix-blend-screen scale-105 pointer-events-none">
          <Vidio />
        </div>
        <div className="relative z-10 w-full flex-grow flex flex-col justify-between px-4 md:px-10 pt-20">
          <Homeherotext />
          <div className="w-full flex justify-end my-8 md:my-12">
            <div className="w-full md:w-5/12 text-right md:text-left font-light">
              <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-300 backdrop-blur-xs p-4 rounded-xl bg-black/20 border border-white/5">
                At <span className="text-[#D3FD50] font-semibold">K72</span>, we
                don't just build brands; we breathe life into them. We believe
                the magic happens when we step out of our comfort zones and
                start having real, honest conversations. No corporate jargon, no
                fluff—just genuine people creating work that actually makes you
                feel something.
              </p>
            </div>
          </div>
          <Homebottomtext />
        </div>
      </div>
    </>
  );
};
export default Home;
