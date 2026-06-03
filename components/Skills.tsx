"use client";

import { useState, useEffect, useRef } from "react";
import { skills } from "@/app/data";

const categories = ["All","Design", "Frontend", "Backend", "Database", "Mobile", "Tools"];

const colorMap: Record<string, { text: string; bar: string; border: string; bg: string }> = {
  cyan: {
    text: "#00f5ff",
    bar: "linear-gradient(to right, #00f5ff, #bf00ff)",
    border: "rgba(0,245,255,0.2)",
    bg: "rgba(0,245,255,0.05)",
  },
  green: {
    text: "#39ff14",
    bar: "linear-gradient(to right, #39ff14, #00f5ff)",
    border: "rgba(57,255,20,0.2)",
    bg: "rgba(57,255,20,0.05)",
  },
  purple: {
    text: "#bf00ff",
    bar: "linear-gradient(to right, #bf00ff, #ff00ff)",
    border: "rgba(191,0,255,0.2)",
    bg: "rgba(191,0,255,0.05)",
  },
  pink: {
    text: "#ff00ff",
    bar: "linear-gradient(to right, #ff00ff, #bf00ff)",
    border: "rgba(255,0,255,0.2)",
    bg: "rgba(255,0,255,0.05)",
  },
};

export default function Skills() {
  const [active, setActive] = useState("All");
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filtered = active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative z-10 py-28 px-6 bg-dark-2/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-neon-cyan text-xs tracking-[6px] uppercase font-semibold mb-3">
            // 02. Skills
          </p>
          <h2
            className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          >
            Tech Stack
          </h2>
          <div className="neon-line w-20" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-xs font-orbitron font-bold tracking-widest uppercase transition-all duration-300 clip-skew ${
                active === cat
                  ? "bg-gradient-to-r from-neon-cyan to-neon-purple text-dark"
                  : "border border-white/10 text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/40"
              }`}
              style={
                active === cat
                  ? { boxShadow: "0 0 20px rgba(0,245,255,0.3)" }
                  : {}
              }
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((skill) => {
            const c = colorMap[skill.color];
            return (
              <div
                key={skill.name}
                className="p-6 rounded-sm border transition-all duration-300 group hover:scale-[1.02]"
                style={{
                  background: c?.bg,
                  borderColor: c?.border,
                }}
              >
                <div className="flex justify-between items-center mb-2">
                  <h3
                    className="font-orbitron font-bold text-sm tracking-wide text-white group-hover:text-neon-cyan transition-colors"
                  >
                    {skill.name}
                  </h3>
                  <span
                    className="text-xs font-semibold font-orbitron"
                    style={{ color: c?.text }}
                  >
                    {skill.level}%
                  </span>
                </div>
                <p className="text-xs text-slate-500 tracking-widest uppercase mb-4">
                  {skill.category}
                </p>

                {/* Progress Bar */}
                <div className="w-full bg-white/5 h-[3px] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: animated ? `${skill.level}%` : "0%",
                      background: c?.bar,
                      boxShadow: `0 0 8px ${c?.text}`,
                      transitionDelay: `${Math.random() * 300}ms`,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
