import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import ProjectCard from "../components/project/ProjectCard";
import ProjectModal from "../components/project/ProjectModal";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const projectList = [
  {
    id: 1,
    title: "SHELTON",
    subtitle: "Craft Brewery Brand Identity",
    category: "Branding",
    year: "2024",
    image: "https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479",
  },
  {
    id: 2,
    title: "COUP FUMANT",
    subtitle: "High-Impact Product Launch",
    category: "Campaign",
    year: "2024",
    image: "https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c",
  },
  {
    id: 3,
    title: "A TABLE",
    subtitle: "Culinary Ecosystem Platform",
    category: "Digital",
    year: "2023",
    image: "https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47",
  },
  {
    id: 4,
    title: "BEST",
    subtitle: "Urban Lifestyle Strategy",
    category: "Branding",
    year: "2023",
    image: "https://k72.ca/images/caseStudies/BEST/BEST_site_Thumbnail.jpg?w=1280&h=960&s=2b73eecfda8d95a72efa768383b50860",
  },
  {
    id: 5,
    title: "WIDESCAPE",
    subtitle: "Snowmobile Brand Revolution",
    category: "Campaign",
    year: "2023",
    image: "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e",
  },
  {
    id: 6,
    title: "OPTO-RÉSEAU",
    subtitle: "Optical Chain Rebrand",
    category: "Branding",
    year: "2022",
    image: "https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996",
  },
  {
    id: 7,
    title: "PJC PHARMAPRIX",
    subtitle: "Health & Wellbeing Experience",
    category: "Digital",
    year: "2022",
    image: "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b",
  },
  {
    id: 8,
    title: "iA FINANCIAL",
    subtitle: "National Brand positioning",
    category: "Campaign",
    year: "2022",
    image: "https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=1280&h=960&s=008dc81d7a1c8fa45e299f6d2dbafc93",
  },
];

const Project = () => {
  const [activeCategory, setActiveCategory] = useState("ALL");
  const [selectedProject, setSelectedProject] = useState(null);

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".projects-header", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const filteredProjects = activeCategory === "ALL"
    ? projectList
    : projectList.filter((p) => p.category.toUpperCase() === activeCategory);

  // Chunk array into pairs for 2-column layout
  const projectPairs = [];
  for (let i = 0; i < filteredProjects.length; i += 2) {
    projectPairs.push([filteredProjects[i], filteredProjects[i + 1]]);
  }

  return (
    <div className="min-h-screen px-4 md:px-12 pt-28 md:pt-36 pb-32">
      {/* Header */}
      <div className="projects-header mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8">
        <div>
          <span className="text-[#D3FD50] font-semibold text-sm tracking-widest uppercase mb-2 block">
            Selected Work — ({filteredProjects.length})
          </span>
          <h1 className="font-[font500] text-5xl md:text-8xl lg:text-9xl uppercase text-white tracking-tight">
            Projets
          </h1>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mt-6 md:mt-0">
          {["ALL", "BRANDING", "CAMPAIGN", "DIGITAL"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-xs font-semibold uppercase transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#D3FD50] text-black shadow-lg scale-105"
                  : "bg-white/5 text-gray-300 hover:bg-white/15 border border-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="space-y-8 md:space-y-12">
        {projectPairs.map(([p1, p2], idx) => (
          <div key={idx} className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <ProjectCard
              project1={p1}
              project2={p2}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
          </div>
        ))}
      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Project;
