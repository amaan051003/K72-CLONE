import React, { useState, useEffect } from "react";

const TimeDateDisplay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const showTime = `${currentDate.getHours().toString().padStart(2, "0")}:${currentDate.getMinutes().toString().padStart(2, "0")}:${currentDate.getSeconds().toString().padStart(2, "0")}`;

  return (
    <div className="fixed bottom-2 left-3 z-0 flex items-center gap-3 mix-blend-difference text-white">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 md:w-8 md:h-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
      <h2 className="font-[font500] font-black text-white text-xl md:text-2xl tracking-wide">
        INDORE_{showTime}
      </h2>
    </div>
  );
};

export default TimeDateDisplay;
