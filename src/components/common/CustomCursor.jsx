import React, { useEffect, useState } from "react";
import gsap from "gsap";

const CustomCursor = () => {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");

  useEffect(() => {
    const cursor = document.getElementById("custom-cursor");

    if (!cursor) return;

    const onMouseMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const onPointerOver = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        const text = target.getAttribute("data-cursor-text") || "";
        const variant = target.getAttribute("data-cursor") || "hover";
        setCursorText(text);
        setCursorVariant(variant);
      } else if (e.target.closest("a, button, [role='button']")) {
        setCursorVariant("button");
        setCursorText("");
      } else {
        setCursorVariant("default");
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onPointerOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onPointerOver);
    };
  }, []);

  const getVariantStyles = () => {
    switch (cursorVariant) {
      case "project":
        return "w-24 h-24 bg-[#D3FD50] text-black font-semibold text-xs tracking-wider uppercase";
      case "button":
        return "w-10 h-10 bg-white/40 border border-white/60";
      case "hover":
        return "w-16 h-16 bg-[#D3FD50] text-black font-medium text-xs uppercase";
      default:
        return "w-4 h-4 bg-[#D3FD50] opacity-80 pointer-events-none";
    }
  };

  return (
    <div
      id="custom-cursor"
      className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-[9999] flex items-center justify-center transition-all duration-200 ease-out mix-blend-difference hidden md:flex ${getVariantStyles()}`}
    >
      <span className="text-center font-bold px-2 select-none">
        {cursorText}
      </span>
    </div>
  );
};

export default CustomCursor;
