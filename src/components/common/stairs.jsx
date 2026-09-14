import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
const Stairs = ({ children }) => {
  const currentPath = useLocation().pathname;
  const containerRef = useRef(null);
  const pageRef = useRef(null);
  useGSAP(
    () => {
      if (!containerRef.current || !pageRef.current) return;
      const stairs = containerRef.current.querySelectorAll(".stair-column");
      const tl = gsap.timeline();
      gsap.set(containerRef.current, { display: "block", opacity: 1 });
      gsap.set(stairs, { height: "100%", y: "0%" });
      gsap.set(pageRef.current, { opacity: 0 });
      tl.to(stairs, {
        y: "100%",
        duration: 0.6,
        stagger: {
          amount: 0.25,
          from: "start",
        },
        ease: "power3.inOut",
      })
        .to(
          pageRef.current,
          {
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          },
          "-=0.3",
        )
        .set(containerRef.current, { display: "none" });
      return () => {
        tl.kill();
      };
    },
    { scope: containerRef, dependencies: [currentPath] },
  );
  return (
    <div className="relative w-full min-h-screen">
      <div
        ref={containerRef}
        className="fixed inset-0 z-[100] pointer-events-none hidden"
      >
        <div className="h-full w-full flex">
          <div className="stair-column h-full w-1/5 bg-black border-r border-white/5"></div>
          <div className="stair-column h-full w-1/5 bg-black border-r border-white/5"></div>
          <div className="stair-column h-full w-1/5 bg-black border-r border-white/5"></div>
          <div className="stair-column h-full w-1/5 bg-black border-r border-white/5"></div>
          <div className="stair-column h-full w-1/5 bg-black"></div>
        </div>
      </div>
      <div ref={pageRef} className="w-full min-h-screen">
        {children}
      </div>
    </div>
  );
};
export default Stairs;
