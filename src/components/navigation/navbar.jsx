import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbarcontext } from "../../context/Navcontext";
const Navbar = () => {
  const [navOpen, setnavOpen] = useContext(Navbarcontext);
  return (
    <div className="z-[90] flex fixed top-0 left-0 w-full justify-between items-center px-4 md:px-8 py-4 pointer-events-none">
      <Link
        to="/"
        data-cursor="hover"
        data-cursor-text="HOME"
        className="pointer-events-auto w-24 md:w-28 transition-transform hover:scale-105 duration-200"
      >
        <svg
          className="w-full text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 103 44"
        >
          <path
            fillRule="evenodd"
            d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"
          ></path>
        </svg>
      </Link>
      <div
        data-cursor="hover"
        data-cursor-text="MENU"
        className="pointer-events-auto group relative h-12 w-32 md:w-44 rounded-full overflow-hidden border-none bg-black/80 backdrop-blur-md cursor-pointer transition-all duration-300"
      >
        <div className="absolute inset-0 bg-[#D3FD50] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        <button
          onClick={() => setnavOpen(true)}
          className="relative z-10 flex h-full w-full items-center justify-center gap-3 font-semibold uppercase text-xs tracking-widest text-white group-hover:text-black transition-colors duration-300 cursor-pointer"
        >
          <span>Menu</span>
          <div className="flex flex-col gap-1.5 w-5">
            <span className="w-full h-0.5 bg-current transition-all group-hover:translate-x-0.5" />
            <span className="w-full h-0.5 bg-current transition-all group-hover:-translate-x-0.5" />
          </div>
        </button>
      </div>
    </div>
  );
};
export default Navbar;
