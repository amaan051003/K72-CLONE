import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const teamMembers = [
  { name: "Carl", role: "Partner & Executive Director", img: "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" },
  { name: "Olivier", role: "Creative Director", img: "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg" },
  { name: "Lawrence", role: "Strategy Lead", img: "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg" },
  { name: "Hugo-Joseph", role: "Art Director", img: "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg" },
  { name: "Chantal", role: "Managing Director", img: "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg" },
  { name: "Mylène", role: "Account Director", img: "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg" },
  { name: "Sophie", role: "Senior Producer", img: "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg" },
  { name: "Claire", role: "Copywriter Lead", img: "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg" },
  { name: "Michèle", role: "Brand Strategist", img: "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg" },
  { name: "Mélanie", role: "Digital Designer", img: "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg" },
  { name: "Camille", role: "Motion Designer", img: "https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg" },
  { name: "Maxime", role: "Content Creator", img: "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg" },
  { name: "Méggie", role: "Project Manager", img: "https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg" },
  { name: "Joël", role: "Technical Director", img: "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg" },
];

const values = [
  { title: "Friction & Feeling", desc: "The best sparks fly when comfort zones get left behind and friction infuses our strategies." },
  { title: "Radical Candor", desc: "We’re transparent, honest and say what we mean. No corporate buzzwords." },
  { title: "Long-term Impact", desc: "We build brands from every angle. Today, tomorrow and years from now." },
  { title: "Creativity Over Ego", desc: "We make sure creativity crowds out ego from every single corner." },
];

const Agence = () => {
  const containerRef = useRef(null);
  const pinnedCardRef = useRef(null);
  const imageRef = useRef(null);
  const [activeMember, setActiveMember] = useState(teamMembers[0]);

  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);

      if (!pinnedCardRef.current || !containerRef.current) return;

      const trigger = ScrollTrigger.create({
        trigger: ".team-scrub-container",
        start: "top top+=100",
        end: "bottom bottom",
        pin: pinnedCardRef.current,
        pinSpacing: false,
        scrub: 0.3,
        onUpdate: (self) => {
          const rawIdx = Math.floor(self.progress * teamMembers.length);
          const idx = Math.max(0, Math.min(rawIdx, teamMembers.length - 1));
          const member = teamMembers[idx];
          if (member && imageRef.current) {
            imageRef.current.src = member.img;
            setActiveMember(member);
          }
        },
      });

      ScrollTrigger.refresh();

      return () => {
        trigger.kill();
      };
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="min-h-screen bg-black text-white px-4 md:px-12 pt-28 md:pt-36">
      {/* Pinned Scrubber Section */}
      <div className="team-scrub-container relative min-h-[250vh] pb-32">
        {/* Pinned Frame */}
        <div
          ref={pinnedCardRef}
          className="z-30 w-[240px] md:w-[340px] h-[320px] md:h-[450px] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-neutral-900 mx-auto md:ml-[15%] md:mr-auto my-8"
        >
          <img
            ref={imageRef}
            src={teamMembers[0].img}
            alt={activeMember.name}
            className="w-full h-full object-cover transition-opacity duration-150"
          />
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
            <span className="text-[10px] text-[#D3FD50] font-bold uppercase tracking-widest block">
              Team Member
            </span>
            <h4 className="text-xl font-bold text-white uppercase">{activeMember.name}</h4>
            <p className="text-xs text-gray-300 font-[font300]">{activeMember.role}</p>
          </div>
        </div>

        {/* Text Backdrop */}
        <div className="pt-12 md:pt-20 select-none">
          <h1 className="text-[18vw] font-[font500] text-center uppercase leading-none tracking-tighter text-white/90">
            SEVEN7Y <br /> TWO
          </h1>

          <div className="max-w-3xl ml-auto mt-24 md:mt-36 font-[font300]">
            <span className="text-[#D3FD50] font-semibold text-xs uppercase tracking-widest block mb-4">
              Our Philosophy
            </span>
            <p className="text-xl md:text-3xl lg:text-4xl leading-relaxed text-gray-200">
              We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. If we ignore that, we can achieve short-term success, but not influence that goes the distance.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="my-32 border-t border-white/10 pt-20">
        <div className="mb-16">
          <span className="text-[#D3FD50] text-xs font-semibold uppercase tracking-widest">
            Core Drivers
          </span>
          <h2 className="text-4xl md:text-7xl font-[font500] uppercase mt-2">
            What Drives Us
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <div
              key={i}
              data-cursor="hover"
              data-cursor-text="K72"
              className="p-8 rounded-3xl bg-neutral-900/60 border border-white/10 hover:border-[#D3FD50] transition-all duration-300 group hover:-translate-y-2"
            >
              <span className="text-3xl font-bold text-[#D3FD50] block mb-6">
                0{i + 1}
              </span>
              <h3 className="text-2xl font-[font500] uppercase text-white mb-3 group-hover:text-[#D3FD50] transition-colors">
                {v.title}
              </h3>
              <p className="text-sm text-gray-400 font-[font300] leading-relaxed">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Roster Grid */}
      <div className="my-32 border-t border-white/10 pt-20 pb-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-[#D3FD50] text-xs font-semibold uppercase tracking-widest">
              The Roster — ({teamMembers.length})
            </span>
            <h2 className="text-4xl md:text-7xl font-[font500] uppercase mt-2">
              People of K72
            </h2>
          </div>
          <p className="text-gray-400 text-sm md:text-base max-w-md mt-4 md:mt-0 font-[font300]">
            Strategists, designers, writers, and directors united by a shared passion for bold ideas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              data-cursor="hover"
              data-cursor-text={member.name}
              className="group relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-[#D3FD50] transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[3/4] w-full overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h4 className="text-lg font-bold text-white group-hover:text-[#D3FD50] transition-colors">
                  {member.name}
                </h4>
                <p className="text-xs text-gray-400 font-[font300]">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Agence;
