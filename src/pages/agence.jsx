import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Helmet } from "react-helmet-async";
const teamMembers = [
  {
    name: "Carl",
    role: "Partner & Executive Director",
    img: "/images/Carl_480x640-480x640.jpg",
  },
  {
    name: "Olivier",
    role: "Creative Director",
    img: "/images/Olivier_480x640-480x640.jpg",
  },
  {
    name: "Lawrence",
    role: "Strategy Lead",
    img: "/images/Lawrence_480x640-480x640.jpg",
  },
  {
    name: "Hugo-Joseph",
    role: "Art Director",
    img: "/images/HugoJoseph_480x640-480x640.jpg",
  },
  {
    name: "Chantal",
    role: "Managing Director",
    img: "/images/ChantalG_480x640-480x640.jpg",
  },
  {
    name: "Mylène",
    role: "Account Director",
    img: "/images/MyleneS_480x640-480x640.jpg",
  },
  {
    name: "Sophie",
    role: "Senior Producer",
    img: "/images/SophieA_480x640-480x640.jpg",
  },
  {
    name: "Claire",
    role: "Copywriter Lead",
    img: "/images/Claire_480x640-480x640.jpg",
  },
  {
    name: "Michèle",
    role: "Brand Strategist",
    img: "/images/Michele_480X640-480x640.jpg",
  },
  {
    name: "Mélanie",
    role: "Digital Designer",
    img: "/images/MEL_480X640-480x640.jpg",
  },
  {
    name: "Camille",
    role: "Motion Designer",
    img: "/images/CAMILLE_480X640_2-480x640.jpg",
  },
  {
    name: "Maxime",
    role: "Content Creator",
    img: "/images/MAXIME_480X640_2-480x640.jpg",
  },
  {
    name: "Méggie",
    role: "Project Manager",
    img: "/images/MEGGIE_480X640_2-480x640.jpg",
  },
  {
    name: "Joël",
    role: "Technical Director",
    img: "/images/joel_480X640_3-480x640.jpg",
  },
];
const values = [
  {
    title: "Real Talk, Real Feelings",
    desc: "We lean into the uncomfortable because that's where the breakthroughs hide.",
  },
  {
    title: "No Bullshit",
    desc: "We say what we mean and mean what we say. No corporate jargon, just honesty.",
  },
  {
    title: "Built to Last",
    desc: "We aren't interested in a quick flash in the pan. We build brands for tomorrow.",
  },
  {
    title: "Leave the Ego",
    desc: "We care deeply about the work, not who gets the credit for it.",
  },
];
const Agence = () => {
  const containerRef = useRef(null);
  const pinnedCardRef = useRef(null);
  const imageRef = useRef(null);
  const nameRef = useRef(null);
  const roleRef = useRef(null);
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
          if (
            member &&
            imageRef.current &&
            nameRef.current &&
            roleRef.current
          ) {
            imageRef.current.src = member.img;
            nameRef.current.innerText = member.name;
            roleRef.current.innerText = member.role;
          }
        },
      });
      ScrollTrigger.refresh();
      return () => {
        trigger.kill();
      };
    },
    { scope: containerRef },
  );
  return (
    <>
      <Helmet>
        <title>Agence - K72</title>
        <meta
          name="description"
          content="Meet the K72 team and learn more about our culture."
        />
      </Helmet>
      <div
        ref={containerRef}
        className="min-h-screen bg-black text-white px-4 md:px-12 pt-28 md:pt-36"
      >
        <div className="team-scrub-container relative min-h-[250vh] pb-32">
          <div
            ref={pinnedCardRef}
            className="z-30 w-[240px] md:w-[340px] h-[320px] md:h-[450px] rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl bg-neutral-900 mx-auto md:ml-[15%] md:mr-auto my-8"
          >
            <img
              ref={imageRef}
              src={teamMembers[0].img}
              alt="Team Member"
              className="w-full h-full object-cover transition-opacity duration-150"
            />
            <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
              <span className="text-[10px] text-[#D3FD50] font-bold uppercase tracking-widest block">
                Team Member
              </span>
              <h4
                ref={nameRef}
                className="text-xl font-bold text-white uppercase"
              >
                {teamMembers[0].name}
              </h4>
              <p ref={roleRef} className="text-xs text-gray-300 font-light">
                {teamMembers[0].role}
              </p>
            </div>
          </div>
          <div className="pt-12 md:pt-20 select-none">
            <h1 className="text-[18vw] font-medium text-center uppercase leading-none tracking-tighter text-white/90">
              SEVEN7Y <br /> TWO
            </h1>
            <div className="max-w-3xl ml-auto mt-24 md:mt-36 font-light">
              <span className="text-[#D3FD50] font-semibold text-xs uppercase tracking-widest block mb-4">
                Our Philosophy
              </span>
              <p className="text-xl md:text-3xl lg:text-4xl leading-relaxed text-gray-200">
                We’re a curious bunch. We leave our egos at the door because we
                know that the best ideas can come from anyone, anywhere. Sure,
                taking shortcuts might win the day, but we're here to build
                things that actually last.
              </p>
            </div>
          </div>
        </div>
        <div className="my-32 border-t border-white/10 pt-20">
          <div className="mb-16">
            <span className="text-[#D3FD50] text-xs font-semibold uppercase tracking-widest">
              Core Drivers
            </span>
            <h2 className="text-4xl md:text-7xl font-medium uppercase mt-2">
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
                <h3 className="text-2xl font-medium uppercase text-white mb-3 group-hover:text-[#D3FD50] transition-colors">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-400 font-light leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="my-32 border-t border-white/10 pt-20 pb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <span className="text-[#D3FD50] text-xs font-semibold uppercase tracking-widest">
                The Roster — ({teamMembers.length})
              </span>
              <h2 className="text-4xl md:text-7xl font-medium uppercase mt-2">
                People of K72
              </h2>
            </div>
            <p className="text-gray-400 text-sm md:text-base max-w-md mt-4 md:mt-0 font-light">
              Just a group of thinkers, makers, and doers who love bringing wild
              ideas to life.
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
                  <p className="text-xs text-gray-400 font-light">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Agence;
