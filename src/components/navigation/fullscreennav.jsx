import React, { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Navbarcontext } from "../../context/Navcontext";
const FullScreenNav = () => {
  const [navOpen, setnavOpen] = useContext(Navbarcontext);
  const overlayRef = useRef(null);
  const crossRef = useRef(null);
  const tlRef = useRef(null);
  useGSAP(
    () => {
      if (!tlRef.current) {
        const stairs = overlayRef.current.querySelectorAll(".nav-stair");
        const links = overlayRef.current.querySelectorAll(".nav-menu-link");
        const cross = crossRef.current;
        const tl = gsap.timeline({
          defaults: { ease: "power3.inOut" },
          paused: true,
        });
        tl.set(overlayRef.current, { display: "block" })
          .set(stairs, { height: "0%" })
          .set(links, { opacity: 0, y: 40 })
          .set(cross, { rotate: -90, opacity: 0, scale: 0.5 })
          .to(stairs, {
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
        tlRef.current = tl;
      }
      if (navOpen) {
        tlRef.current.play();
      } else {
        tlRef.current.reverse().eventCallback("onReverseComplete", () => {
          gsap.set(overlayRef.current, { display: "none" });
        });
      }
      return () => {
        if (tlRef.current) {
          tlRef.current.kill();
        }
      };
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
      img: "/images/WS---K72.ca---MenuThumbnail-640x290.jpg",
    },
    {
      label: "Agence",
      path: "/agence",
      subtitle: "KNOW US",
      img: "/images/PJC_SiteK72_Thumbnail_640x290-640x290.jpg",
    },
    {
      label: "Home",
      path: "/",
      subtitle: "BACK TO START",
      img: "/images/thumbnailimage_shelton.jpg",
    },
  ];
  return (
    <div
      ref={overlayRef}
      id="fullscreennav"
      className="fixed inset-0 z-[95] hidden text-white select-none overflow-hidden"
    >
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
      <div className="absolute inset-0 flex pointer-events-none z-0">
        <div className="nav-stair h-full w-1/5 bg-black border-r border-white/5" />
        <div className="nav-stair h-full w-1/5 bg-black border-r border-white/5" />
        <div className="nav-stair h-full w-1/5 bg-black border-r border-white/5" />
        <div className="nav-stair h-full w-1/5 bg-black border-r border-white/5" />
        <div className="nav-stair h-full w-1/5 bg-black" />
      </div>
      <div className="relative z-10 h-full w-full flex flex-col justify-between p-6 md:p-12">
        <div className="flex justify-between items-center w-full">
          <span className="text-[#D3FD50] font-semibold text-xs uppercase tracking-widest">
            K72 Navigation
          </span>
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
                <h2 className="text-4xl md:text-9xl font-medium uppercase tracking-tight text-white group-hover:text-[#D3FD50] transition-colors duration-300">
                  {item.label}
                </h2>
                <span className="text-xs md:text-sm font-semibold uppercase text-gray-400 group-hover:text-white transition-colors">
                  0{idx + 1} / {item.subtitle}
                </span>
              </div>
              <div className="absolute inset-0 bg-[#D3FD50] text-black translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center overflow-hidden">
                <div className="marquee-track flex items-center gap-8 whitespace-nowrap font-[900] text-4xl md:text-7xl uppercase leading-none">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <React.Fragment key={i}>
                      <span>{item.subtitle}</span>
                      <img
                        src={item.img}
                        alt=""
                        className="h-16 md:h-24 w-28 md:w-52 rounded-full object-cover border border-black/20"
                      />
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
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
