"use client";

import { useState } from "react";
import { projects } from "@/app/data";
import { Github, ExternalLink, Globe, Smartphone } from "lucide-react";

const filters = ["All", "Web", "Mobile"];

const colorMap: Record<string, { text: string; border: string; bg: string; tag: string; tagBg: string }> = {
  cyan: {
    text: "#00f5ff",
    border: "rgba(0,245,255,0.25)",
    bg: "rgba(0,245,255,0.04)",
    tag: "rgba(0,245,255,0.8)",
    tagBg: "rgba(0,245,255,0.08)",
  },
  pink: {
    text: "#ff00ff",
    border: "rgba(255,0,255,0.25)",
    bg: "rgba(255,0,255,0.04)",
    tag: "rgba(255,0,255,0.8)",
    tagBg: "rgba(255,0,255,0.08)",
  },
  green: {
    text: "#39ff14",
    border: "rgba(57,255,20,0.25)",
    bg: "rgba(57,255,20,0.04)",
    tag: "rgba(57,255,20,0.8)",
    tagBg: "rgba(57,255,20,0.08)",
  },
  purple: {
    text: "#bf00ff",
    border: "rgba(191,0,255,0.25)",
    bg: "rgba(191,0,255,0.04)",
    tag: "rgba(191,0,255,0.8)",
    tagBg: "rgba(191,0,255,0.08)",
  },
};

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.type === active.toLowerCase());

  return (
    <section id="projects" className="relative z-10 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-neon-cyan text-xs tracking-[6px] uppercase font-semibold mb-3">
            // 03. Projects
          </p>
          <h2
            className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          >
            Featured Work
          </h2>
          <div className="neon-line w-20" />
          <p className="text-slate-400 text-lg mt-6 max-w-2xl">
            Real-world projects built with modern technologies — from full-stack web apps to cross-platform mobile applications.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`flex items-center gap-2 px-6 py-2 text-xs font-orbitron font-bold tracking-widest uppercase transition-all duration-300 clip-skew ${
                active === f
                  ? "bg-gradient-to-r from-neon-cyan to-neon-purple text-dark"
                  : "border border-white/10 text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/30"
              }`}
              style={active === f ? { boxShadow: "0 0 20px rgba(0,245,255,0.3)" } : {}}
            >
              {f === "Web" && <Globe size={14} />}
              {f === "Mobile" && <Smartphone size={14} />}
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => {
            const c = colorMap[project.color];
            return (
              <div
                key={project.id}
                className="group border rounded-sm overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:scale-[1.01]"
                style={{
                  background: `linear-gradient(135deg, ${c.bg}, rgba(6,15,30,0.8))`,
                  borderColor: c.border,
                  boxShadow: "0 0 0 transparent",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 50px rgba(0,0,0,0.6), 0 0 30px ${c.text}15`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 transparent";
                }}
              >
                {/* Thumb */}
                <div
                  className="relative h-[180px] flex items-center justify-center overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${c.bg}, rgba(3,8,16,0.9))` }}
                >
                  {/* Big icon */}
                  <span className="text-7xl opacity-20 group-hover:opacity-40 transition-opacity duration-400 select-none">
                    {project.icon}
                  </span>

                  {/* Type badge */}
                  <div
                    className="absolute top-4 left-4 flex items-center gap-1 px-3 py-1 text-xs font-semibold tracking-widest uppercase rounded-sm"
                    style={{ color: c.text, background: c.tagBg, border: `1px solid ${c.border}` }}
                  >
                    {project.type === "web" ? <Globe size={12} /> : <Smartphone size={12} />}
                    {project.type}
                  </div>

                  {project.featured && (
                    <div
                      className="absolute top-4 right-4 px-2 py-1 text-[10px] font-bold tracking-widest uppercase"
                      style={{ color: "#39ff14", background: "rgba(57,255,20,0.1)", border: "1px solid rgba(57,255,20,0.3)" }}
                    >
                      Featured
                    </div>
                  )}

                  {/* Top glow line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `linear-gradient(to right, transparent, ${c.text}, transparent)`, boxShadow: `0 0 10px ${c.text}` }}
                  />
                </div>

                {/* Body */}
                <div className="p-6">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-bold tracking-widest uppercase px-2 py-1 rounded-sm"
                        style={{ color: c.tag, background: c.tagBg, border: `1px solid ${c.border}` }}
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="text-[10px] text-slate-500 px-2 py-1">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  <h3 className="font-orbitron font-bold text-sm text-white mb-3 group-hover:text-neon-cyan transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-5 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 clip-skew border"
                      style={{
                        color: c.text,
                        borderColor: c.border,
                      }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = c.tagBg; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                    >
                      <Github size={13} /> GitHub
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 clip-skew border"
                        style={{
                          color: c.text,
                          borderColor: c.border,
                        }}
                        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = c.tagBg; }}
                        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                      >
                        <ExternalLink size={13} /> Live
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom accent */}
                <div
                  className="h-[1px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: `linear-gradient(to right, ${c.text}, transparent)`, boxShadow: `0 0 6px ${c.text}` }}
                />
              </div>
            );
          })}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-16">
          <p className="text-slate-400 mb-6">Want to see more? Check out my GitHub.</p>
          <a
            href={`https://github.com/zeeshandev`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3 font-orbitron font-bold text-sm tracking-widest uppercase border border-neon-cyan/30 text-neon-cyan clip-skew transition-all duration-300 hover:bg-neon-cyan/10 hover:border-neon-cyan/60"
            style={{ boxShadow: "0 0 15px rgba(0,245,255,0.1)" }}
          >
            <Github size={18} /> View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
