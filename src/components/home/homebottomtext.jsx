import React, { useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

const Homebottomtext = () => {
  const workRef = useRef(null);
  const agenceRef = useRef(null);

  const handleMouseMove = (e, targetRef) => {
    if (!targetRef.current) return;
    const rect = targetRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * 0.4;
    const deltaY = (e.clientY - centerY) * 0.4;

    gsap.to(targetRef.current, {
      x: deltaX,
      y: deltaY,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = (targetRef) => {
    if (!targetRef.current) return;
    gsap.to(targetRef.current, {
      x: 0,
      y: 0,
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
  };

  return (
    <div className="font-[font500] flex items-center justify-center gap-6 text-white pb-8 select-none z-10">
      {/* Work Button */}
      <div
        className="p-2"
        onMouseMove={(e) => handleMouseMove(e, workRef)}
        onMouseLeave={() => handleMouseLeave(workRef)}
      >
        <div
          ref={workRef}
          data-cursor="hover"
          data-cursor-text="EXPLORE"
          className="group relative border-2 border-white/80 hover:border-[#D3FD50] h-20 md:h-28 flex items-center px-10 md:px-16 rounded-full uppercase transition-colors duration-300 overflow-hidden bg-black/40 backdrop-blur-md cursor-pointer"
        >
          <div className="absolute inset-0 bg-[#D3FD50] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none" />
          <Link
            className="relative z-10 text-3xl md:text-5xl font-bold text-white group-hover:text-black transition-colors duration-300 tracking-wider"
            to="/project"
          >
            Work
          </Link>
        </div>
      </div>

      {/* Agence Button */}
      <div
        className="p-2"
        onMouseMove={(e) => handleMouseMove(e, agenceRef)}
        onMouseLeave={() => handleMouseLeave(agenceRef)}
      >
        <div
          ref={agenceRef}
          data-cursor="hover"
          data-cursor-text="MEET US"
          className="group relative border-2 border-white/80 hover:border-[#D3FD50] h-20 md:h-28 flex items-center px-10 md:px-16 rounded-full uppercase transition-colors duration-300 overflow-hidden bg-black/40 backdrop-blur-md cursor-pointer"
        >
          <div className="absolute inset-0 bg-[#D3FD50] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none" />
          <Link
            className="relative z-10 text-3xl md:text-5xl font-bold text-white group-hover:text-black transition-colors duration-300 tracking-wider"
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
