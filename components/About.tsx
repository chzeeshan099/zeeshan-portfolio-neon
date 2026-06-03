"use client";

import { useRef } from "react";
import { personalInfo } from "@/app/data";
import { Code2, Smartphone, Database, Server, Globe, Container, LayoutDashboard } from "lucide-react";

const stats = [
  { num: personalInfo.yearsExperience, suffix: "+", label: "Years Exp" },
  { num: personalInfo.projectsCompleted, suffix: "+", label: "Projects" },
  { num: personalInfo.happyClients, suffix: "+", label: "Clients" },
  { num: personalInfo.techStacks, suffix: "+", label: "Technologies" },
];

const highlights = [
{ icon: <Code2 size={20} />,      text: "MERN Stack Developer",      color: "cyan"   },
{ icon: <Smartphone size={20} />, text: "React Native Developer",     color: "pink"   },
{ icon: <Globe size={20} />,      text: "Next.js & Vue.js Expert",    color: "green"   },
{ icon: <LayoutDashboard size={20} />, text: "SaaS Product Builder",color: "purple" },
{ icon: <Server size={20} />,     text: "REST API Architect",         color: "green"  },
{ icon: <Database size={20} />,   text: "MongoDB & Firebase",         color: "purple" },
{ icon: <Container size={20} />,  text: "Docker & Git Workflows",     color: "cyan" },
];

const colorMap: Record<string, string> = {
  cyan: "#00f5ff",
  pink: "#ff00ff",
  green: "#39ff14",
  purple: "#bf00ff",
};

export default function About() {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateY(${x * 15}deg) rotateX(${-y * 10}deg) translateZ(10px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "perspective(1000px) rotateY(0) rotateX(0) translateZ(0)";
    }
  };

  return (
    <section id="about" className="relative z-10 py-28 px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="mb-16">
        <p className="text-neon-cyan text-xs tracking-[6px] uppercase font-semibold mb-3">
          // 01. About Me
        </p>
        <h2
          className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4"
          style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
        >
          Who I Am
        </h2>
        <div className="neon-line w-20" />
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div>
          <p className="text-slate-300 text-lg leading-relaxed mb-5">
            {personalInfo.bio}
          </p>
          <p className="text-slate-400 text-base leading-relaxed mb-10">
            {personalInfo.bio2}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            {highlights?.map((h) => (
              <div
                key={h.text}
                className="flex items-center gap-3 p-3 border border-white/5 bg-dark-2/50 rounded-sm transition-all duration-300 hover:border-opacity-40 group"
                style={{ borderColor: `${colorMap[h.color]}20` }}
              >
                <span style={{ color: colorMap[h.color] }}>{h.icon}</span>
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                  {h.text}
                </span>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <span
                  className="block font-orbitron font-black text-3xl text-neon-cyan"
                  style={{ textShadow: "0 0 15px #00f5ff" }}
                >
                  {s.num}
                  {s.suffix}
                </span>
                <span className="text-xs tracking-widest text-slate-500 uppercase mt-1 block">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: 3D Card */}
        <div
          className="flex justify-center"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={cardRef}
            className="w-full max-w-sm bg-dark-2 border border-neon-cyan/20 rounded-sm overflow-hidden relative transition-transform duration-200"
            style={{ boxShadow: "0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(0,245,255,0.05)" }}
          >
            {/* Top accent line */}
            <div
              className="h-[2px] w-full"
              style={{ background: "linear-gradient(to right, transparent, #00f5ff, #bf00ff, transparent)" }}
            />

            {/* Background decoration */}
            <div
              className="absolute top-0 right-0 font-orbitron font-black text-[10rem] leading-none select-none pointer-events-none"
              style={{ color: "rgba(0,245,255,0.03)" }}
            >
              Z
            </div>

            <div className="p-10 relative">
              {/* Avatar */}
              <div
                className="w-24 h-24 rounded-full border-2 border-neon-cyan flex items-center justify-center font-orbitron font-black text-2xl text-neon-cyan mb-6"
                style={{
                  background: "linear-gradient(135deg, #0a1628, #060f1e)",
                  boxShadow: "0 0 20px rgba(0,245,255,0.3), inset 0 0 20px rgba(0,245,255,0.05)",
                }}
              >
                ZA
              </div>

              <h3 className="font-orbitron font-bold text-xl text-white mb-2">
                {personalInfo.fullName}
              </h3>
              <p className="text-slate-400 text-sm tracking-widest uppercase mb-6">
                Full Stack Developer
              </p>

              {/* Info rows */}
              {[
                { label: "Location", value: "Pakistan" },
                { label: "Experience", value: "2 Years" },
                { label: "Speciality", value: "MERN + RN" },
                { label: "Status", value: "Available ✅" },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between items-center py-3 border-b border-white/5"
                >
                  <span className="text-xs tracking-widest uppercase text-slate-500">
                    {row.label}
                  </span>
                  <span className="text-sm font-semibold text-slate-200">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom glow line */}
            <div
              className="h-[2px] w-full"
              style={{
                background: "linear-gradient(to right, transparent, #00f5ff, transparent)",
                boxShadow: "0 0 10px #00f5ff",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
