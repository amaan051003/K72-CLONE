import React from "react";

const ProjectCard = ({ project1, project2, onSelectProject }) => {
  return (
    <>
      {/* First Card */}
      <div
        onClick={() => onSelectProject && onSelectProject(project1)}
        data-cursor="project"
        data-cursor-text="VIEW"
        className="w-full lg:w-1/2 group relative rounded-2xl md:rounded-[40px] overflow-hidden h-[380px] md:h-[550px] lg:h-[620px] cursor-pointer border border-white/10 bg-neutral-900 shadow-2xl transition-transform duration-500 hover:-translate-y-2"
      >
        <img
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          src={project1.image}
          alt={project1.title}
        />
        
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

        {/* Content Badges */}
        <div className="absolute top-6 left-6 flex gap-2 z-10">
          <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-black/60 backdrop-blur-md text-[#D3FD50] border border-[#D3FD50]/30">
            {project1.category || "Branding"}
          </span>
          {project1.year && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-black/60 backdrop-blur-md text-white/80 border border-white/10">
              {project1.year}
            </span>
          )}
        </div>

        {/* Bottom Title Info */}
        <div className="absolute bottom-8 left-8 right-8 z-10 flex justify-between items-end">
          <div>
            <h3 className="text-2xl md:text-4xl font-[font500] uppercase text-white tracking-wide group-hover:text-[#D3FD50] transition-colors duration-300">
              {project1.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-300 mt-1 line-clamp-1">
              {project1.subtitle || "Strategy & Creative Direction"}
            </p>
          </div>

          <div className="hidden md:flex h-12 w-12 rounded-full border-2 border-white/40 items-center justify-center group-hover:border-[#D3FD50] group-hover:bg-[#D3FD50] group-hover:text-black transition-all duration-300">
            <svg
              className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Second Card */}
      {project2 && (
        <div
          onClick={() => onSelectProject && onSelectProject(project2)}
          data-cursor="project"
          data-cursor-text="VIEW"
          className="w-full lg:w-1/2 group relative rounded-2xl md:rounded-[40px] overflow-hidden h-[380px] md:h-[550px] lg:h-[620px] cursor-pointer border border-white/10 bg-neutral-900 shadow-2xl transition-transform duration-500 hover:-translate-y-2 mt-4 lg:mt-0"
        >
          <img
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            src={project2.image}
            alt={project2.title}
          />
          
          {/* Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-300" />

          {/* Content Badges */}
          <div className="absolute top-6 left-6 flex gap-2 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-black/60 backdrop-blur-md text-[#D3FD50] border border-[#D3FD50]/30">
              {project2.category || "Campaign"}
            </span>
            {project2.year && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase bg-black/60 backdrop-blur-md text-white/80 border border-white/10">
                {project2.year}
              </span>
            )}
          </div>

          {/* Bottom Title Info */}
          <div className="absolute bottom-8 left-8 right-8 z-10 flex justify-between items-end">
            <div>
              <h3 className="text-2xl md:text-4xl font-[font500] uppercase text-white tracking-wide group-hover:text-[#D3FD50] transition-colors duration-300">
                {project2.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-300 mt-1 line-clamp-1">
                {project2.subtitle || "Brand Identity & Digital Experience"}
              </p>
            </div>

            <div className="hidden md:flex h-12 w-12 rounded-full border-2 border-white/40 items-center justify-center group-hover:border-[#D3FD50] group-hover:bg-[#D3FD50] group-hover:text-black transition-all duration-300">
              <svg
                className="w-5 h-5 -rotate-45 group-hover:rotate-0 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
