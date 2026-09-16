import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "lenis";
const ProjectModal = ({ project, onClose }) => {
  const panelRef = useRef(null);
  const contentRef = useRef(null);
  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    gsap.fromTo(
      "#modal-backdrop",
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: "power2.out" },
    );
    gsap.fromTo(
      panelRef.current,
      { y: "100%" },
      { y: "0%", duration: 0.5, ease: "power3.out" },
    );

    const lenis = new Lenis({
      wrapper: panelRef.current,
      content: contentRef.current,
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    
    const update = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(update);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(update);
      document.body.style.overflow = "";
    };
  }, [project]);
  if (!project) return null;
  const handleClose = () => {
    gsap.to(panelRef.current, { y: "100%", duration: 0.4, ease: "power3.in" });
    gsap.to("#modal-backdrop", {
      opacity: 0,
      duration: 0.3,
      onComplete: onClose,
    });
  };
  return (
    <div className="fixed inset-0 z-[10000] flex items-end justify-center">
      <div
        id="modal-backdrop"
        onClick={handleClose}
        className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
      />
      <div
        id="modal-panel"
        ref={panelRef}
        data-lenis-prevent
        className="relative bottom-9 z-10 w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-neutral-950 border-t md:border border-white/20 rounded-t-3xl md:rounded-3xl p-6 md:p-12 text-white shadow-2xl custom-scrollbar"
      >
        <div ref={contentRef} className="w-full">
        <button
          onClick={handleClose}
          className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white/10 hover:bg-[#D3FD50] hover:text-black flex items-center justify-center transition-all duration-300 z-20 cursor-pointer"
        >
          <svg
            className="w-6 h-6"
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
        <div className="mb-8">
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-4 py-1 rounded-full text-xs font-semibold uppercase bg-[#D3FD50] text-black">
              {project.category || "Case Study"}
            </span>
            <span className="px-4 py-1 rounded-full text-xs font-semibold uppercase bg-white/10 text-white/80 border border-white/10">
              {project.year || "2024"}
            </span>
          </div>
          <h2 className="text-4xl md:text-7xl font-medium uppercase tracking-wide text-white">
            {project.title}
          </h2>
          <p className="text-xl text-[#D3FD50] mt-2 font-light">
            {project.subtitle || "Brand Strategy & Communications"}
          </p>
        </div>
        <div className="w-full h-[300px] md:h-[500px] rounded-2xl overflow-hidden mb-10 border border-white/10">
          <img
            className="w-full h-full object-cover"
            src={project.image}
            alt={project.title}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 border-y border-white/10 py-8">
          <div>
            <h4 className="text-xs uppercase text-gray-400 font-semibold mb-1">
              Client
            </h4>
            <p className="text-lg font-medium">{project.title} Canada</p>
          </div>
          <div>
            <h4 className="text-xs uppercase text-gray-400 font-semibold mb-1">
              Services
            </h4>
            <p className="text-lg font-medium">
              {project.category || "Branding"}, Identity, Web
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase text-gray-400 font-semibold mb-1">
              Agency
            </h4>
            <p className="text-lg font-medium">K72 Agency Montreal</p>
          </div>
        </div>
        <div className="space-y-6 text-gray-300 font-light leading-relaxed text-base md:text-lg max-w-4xl">
          <p>
            When {project.title} approached K72, the objective was clear:
            redefine their market narrative with friction and raw authenticity.
            We engineered a holistic brand system that bridges strategy, graphic
            identity, and high-impact digital messaging.
          </p>
          <p>
            By disrupting conventional visual codes in the industry, the
            campaign generated immediate engagement across digital and
            out-of-home platforms.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectModal;
