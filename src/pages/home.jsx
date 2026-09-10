import React from "react";
import Vidio from "../components/home/vidio";
import Homeherotext from "../components/home/homeherotext";
import Homebottomtext from "../components/home/Homebottomtext";

const Home = () => {
  return (
    <div className="min-h-screen w-full relative select-none overflow-hidden flex flex-col justify-between">
      {/* Background Video */}
      <div className="fixed inset-0 z-0 opacity-40 mix-blend-screen scale-105 pointer-events-none">
        <Vidio />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 w-full flex-grow flex flex-col justify-between px-4 md:px-10 pt-20">
        <Homeherotext />

        {/* Agency Intro Paragraph */}
        <div className="w-full flex justify-end my-8 md:my-12">
          <div className="w-full md:w-5/12 text-right md:text-left font-[font300]">
            <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-300 backdrop-blur-xs p-4 rounded-xl bg-black/20 border border-white/5">
              <span className="text-[#D3FD50] font-semibold">K72</span> is an agency that builds brands from
              every angle. Today, tomorrow and years from now. We think the best
              sparks fly when comfort zones get left behind and friction infuses
              our strategies, brands and communications with real feeling. We’re
              transparent, honest and say what we mean.
            </p>
          </div>
        </div>

        {/* Bottom CTA Buttons */}
        <Homebottomtext />
      </div>
    </div>
  );
};

export default Home;
