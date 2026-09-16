import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
const Homebottomtext = () => {
  const workRef = useRef(null);
  const agenceRef = useRef(null);
  return (
    <div className="font-medium flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 text-white pb-8 select-none z-10 w-full px-4">
      <div className="p-6 w-full sm:w-auto flex justify-center">
        <div
          ref={workRef}
          data-cursor="hover"
          data-cursor-text="EXPLORE"
          className="group relative border-2 border-white/80 hover:border-[#D3FD50] h-16 md:h-28 flex items-center justify-center px-10 md:px-16 w-full sm:w-auto rounded-full uppercase transition-colors duration-100 overflow-hidden bg-black/40 backdrop-blur-md cursor-pointer"
        >
          <div className="absolute inset-0 bg-[#D3FD50] translate-y-full group-hover:translate-y-0 transition-transform duration-100 ease-out pointer-events-none" />
          <Link
            className="relative z-10 text-2xl md:text-5xl font-bold text-white group-hover:text-black transition-colors duration-300 tracking-wider"
            to="/project"
          >
            Work
          </Link>
        </div>
      </div>
      <div className="p-6 w-full sm:w-auto flex justify-center">
        <div
          ref={agenceRef}
          data-cursor="hover"
          data-cursor-text="MEET US"
          className="group relative border-2 border-white/80 hover:border-[#D3FD50] h-16 md:h-28 flex items-center justify-center px-10 md:px-16 w-full sm:w-auto rounded-full uppercase transition-colors duration-100 overflow-hidden bg-black/40 backdrop-blur-md cursor-pointer"
        >
          <div className="absolute inset-0 bg-[#D3FD50] translate-y-full group-hover:translate-y-0 transition-transform duration-100 ease-out pointer-events-none" />
          <Link
            className="relative z-10 text-2xl md:text-5xl font-bold text-white group-hover:text-black transition-colors duration-300 tracking-wider"
            to="/agence"
          >
            Agence
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Homebottomtext;
