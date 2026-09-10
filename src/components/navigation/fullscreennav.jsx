import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Navbarcontext } from "../../context/Navcontext";

const FullScreenNav = () => {
  const [navOpen, setnavOpen] = useContext(Navbarcontext);
  const overlayRef = useRef(null);
  const crossRef = useRef(null);

  useGSAP(
    () => {
      if (!overlayRef.current) return;

      const stairs = overlayRef.current.querySelectorAll(".nav-stair");
      const links = overlayRef.current.querySelectorAll(".nav-menu-link");
      const cross = crossRef.current;

      const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });

      if (navOpen) {
        // OPEN MENU ANIMATION
        gsap.set(overlayRef.current, { display: "block" });
        gsap.set(stairs, { height: "0%" });
        gsap.set(links, { opacity: 0, y: 40 });
        gsap.set(cross, { rotate: -90, opacity: 0, scale: 0.5 });

        tl.to(stairs, {
          height: "100%",
          duration: 0.5,
          stagger: 0.06,
        })
          .to(
            cross,
            {
              rotate: 0,
              opacity: 1,
              scale: 1,
              duration: 0.4,
              ease: "back.out(1.7)",
            },
            "-=0.2",
          )
          .to(
            links,
            {
              opacity: 1,
              y: 0,
              duration: 0.5,
              stagger: 0.08,
              ease: "power2.out",
            },
            "-=0.3",
          );
      } else {
        // CLOSE MENU ANIMATION
        tl.to(links, {
          opacity: 0,
          y: -30,
          duration: 0.3,
          stagger: 0.04,
          ease: "power2.in",
        })
          .to(
            cross,
            {
              rotate: 90,
              opacity: 0,
              scale: 0.5,
              duration: 0.25,
            },
            "-=0.2",
          )
          .to(
            stairs,
            {
              height: "0%",
              duration: 0.4,
              stagger: { amount: 0.15, from: "end" },
            },
            "-=0.15",
          )
          .set(overlayRef.current, { display: "none" });
      }
    },
    { scope: overlayRef, dependencies: [navOpen] },
  );

  const handleLinkClick = () => {
    setnavOpen(false);
  };

  const navItems = [
    {
      label: "Projets",
      path: "/project",
      subtitle: "SEE EVERYTHING",
      img: "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg",
    },
    {
      label: "Agence",
      path: "/agence",
      subtitle: "KNOW US",
      img: "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",
    },
    {
      label: "Home",
      path: "/",
      subtitle: "BACK TO START",
      img: "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479",
    },
  ];

  return (
    <div
      ref={overlayRef}
      id="fullscreennav"
      className="fixed inset-0 z-[95] hidden text-white select-none overflow-hidden"
    >
      {/* Marquee keyframes */}
      <style>{`
        @keyframes marqueeSlideRight {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .marquee-track {
          animation: marqueeSlideRight 6s linear infinite;
          animation-play-state: paused;
        }
        .group:hover .marquee-track {
          animation-play-state: running;
        }
      `}</style>

      {/* Black Stair Background Columns */}
      <div className="absolute inset-0 flex pointer-events-none z-0">
        <div className="nav-stair h-full w-1/5 bg-black border-r border-white/5" />
        <div className="nav-stair h-full w-1/5 bg-black border-r border-white/5" />
        <div className="nav-stair h-full w-1/5 bg-black border-r border-white/5" />
        <div className="nav-stair h-full w-1/5 bg-black border-r border-white/5" />
        <div className="nav-stair h-full w-1/5 bg-black" />
      </div>

      {/* Menu Overlay Content */}
      <div className="relative z-10 h-full w-full flex flex-col justify-between p-6 md:p-12">
        {/* Header */}
        <div className="flex justify-between items-center w-full">
          <span className="text-[#D3FD50] font-semibold text-xs uppercase tracking-widest">
            K72 Navigation
          </span>

          {/* Close Cross Button */}
          <button
            ref={crossRef}
            onClick={() => setnavOpen(false)}
            data-cursor="hover"
            data-cursor-text="CLOSE"
            className="h-14 w-14 rounded-full border border-white/20 hover:border-[#D3FD50] bg-black/60 backdrop-blur-md flex items-center justify-center cursor-pointer transition-colors duration-300"
          >
            <svg
              className="w-6 h-6 text-[#D3FD50]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Links List */}
        <div className="flex flex-col justify-center my-auto space-y-4 md:space-y-6 max-w-5xl mx-auto w-full">
          {navItems.map((item, idx) => (
            <Link
              key={idx}
              to={item.path}
              onClick={handleLinkClick}
              data-cursor="hover"
              data-cursor-text="GO"
              className="nav-menu-link group relative block border-b border-white/10 pb-4 md:pb-6 overflow-hidden"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-4xl md:text-9xl font-[font500] uppercase tracking-tight text-white group-hover:text-[#D3FD50] transition-colors duration-300">
                  {item.label}
                </h2>
                <span className="text-xs md:text-sm font-semibold uppercase text-gray-400 group-hover:text-white transition-colors">
                  0{idx + 1} / {item.subtitle}
                </span>
              </div>

              {/* Marquee Hover Effect: drops down + slides right continuously */}
              <div className="absolute inset-0 bg-[#D3FD50] text-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center overflow-hidden">
                <div className="marquee-track flex items-center gap-8 whitespace-nowrap font-[900] text-4xl md:text-7xl uppercase leading-none">
                  {/* First set */}
                  <span>{item.subtitle}</span>
                  <img
                    src={item.img}
                    alt=""
                    className="h-16 md:h-24 w-28 md:w-52 rounded-full object-cover border border-black/20"
                  />
                  <span>{item.subtitle}</span>
                  <img
                    src={item.img}
                    alt=""
                    className="h-16 md:h-24 w-28 md:w-52 rounded-full object-cover border border-black/20"
                  />

                  {/* Duplicate set for seamless loop */}
                  <span>{item.subtitle}</span>
                  <img
                    src={item.img}
                    alt=""
                    className="h-16 md:h-24 w-28 md:w-52 rounded-full object-cover border border-black/20"
                  />
                  <span>{item.subtitle}</span>
                  <img
                    src={item.img}
                    alt=""
                    className="h-16 md:h-24 w-28 md:w-52 rounded-full object-cover border border-black/20"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Info */}
        <div className="flex justify-between items-end text-xs text-gray-400 border-t border-white/10 pt-4">
          <p>© K72 Agency Montreal</p>
          <div className="flex gap-4">
            <span className="text-[#D3FD50] font-semibold">EN</span>
            <span className="hover:text-white cursor-pointer">FR</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenNav;
