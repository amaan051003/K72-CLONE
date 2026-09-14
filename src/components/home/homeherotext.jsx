import React, { useRef } from "react";
import Vidio from "./vidio";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Homeherotext = () => {
  const containerRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-line", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
      }).from(
        ".video-pill",
        {
          scale: 0,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          clearProps: "all",
        },
        "-=0.6",
      );
    },
    { scope: containerRef },
  );
  return (
    <div
      ref={containerRef}
      className="font-light text-center text-white select-none mt-16 md:mt-24"
    >
      <div className="hero-line text-[10vw] md:text-[9vw] flex items-center justify-center uppercase leading-[0.9] tracking-tight">
        The spark for
      </div>
      <div className="hero-line text-[10vw] md:text-[9vw] flex items-center justify-center uppercase leading-[0.9] tracking-tight gap-2 md:gap-4">
        all
        <div
          data-cursor="hover"
          data-cursor-text="K72 VIDEO PILL"
          role="button"
          tabIndex={0}
          aria-label="Play K72 Video"
          className="video-pill bg-black h-[10vw] md:h-[16vh] w-[35vw] md:w-[18vw] rounded-full overflow-hidden inline-block hover:scale-105 transition-transform duration-300 shadow-2xl cursor-pointer"
        >
          <Vidio />
        </div>
        things
      </div>
      <div className="hero-line text-[10.5vw] md:text-[9.5vw] flex items-center justify-center uppercase leading-[0.9] tracking-tight">
        creative
      </div>
    </div>
  );
};
export default Homeherotext;
