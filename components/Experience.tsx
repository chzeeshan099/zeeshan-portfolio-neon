"use client";

import { experience } from "@/app/data";
import { Briefcase, CheckCircle2 } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 py-28 px-6 bg-dark-2/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-neon-cyan text-xs tracking-[6px] uppercase font-semibold mb-3">
            // 04. Experience
          </p>
          <h2
            className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          >
            Work History
          </h2>
          <div className="neon-line w-20" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-0 top-0 bottom-0 w-[1px] hidden md:block"
            style={{ background: "linear-gradient(to bottom, #00f5ff, rgba(0,245,255,0.1))" }}
          />

          <div className="space-y-12 md:pl-12">
            {experience.map((exp, i) => (
              <div key={i} className="relative group">
                {/* Dot on timeline */}
                <div
                  className="absolute -left-[52px] top-6 w-4 h-4 rounded-full border-2 border-neon-cyan hidden md:block"
                  style={{
                    background: "#030810",
                    boxShadow: "0 0 12px #00f5ff",
                  }}
                />

                <div
                  className="border rounded-sm p-8 transition-all duration-300 group-hover:border-neon-cyan/40"
                  style={{
                    background: "rgba(6,15,30,0.7)",
                    borderColor: "rgba(0,245,255,0.12)",
                    boxShadow: "0 0 0 transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 40px rgba(0,0,0,0.5), 0 0 20px rgba(0,245,255,0.05)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 transparent";
                  }}
                >
                  {/* Top section */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="p-3 rounded-sm mt-1"
                        style={{ background: "rgba(0,245,255,0.08)", border: "1px solid rgba(0,245,255,0.2)" }}
                      >
                        <Briefcase size={20} style={{ color: "#00f5ff" }} />
                      </div>
                      <div>
                        <h3 className="font-orbitron font-bold text-lg text-white mb-1">
                          {exp.title}
                        </h3>
                        <p
                          className="text-base font-semibold"
                          style={{ color: "#00f5ff" }}
                        >
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-start sm:items-end gap-2">
                      <span
                        className="px-3 py-1 text-xs font-bold tracking-widest uppercase"
                        style={{
                          color: "#39ff14",
                          background: "rgba(57,255,20,0.08)",
                          border: "1px solid rgba(57,255,20,0.25)",
                        }}
                      >
                        {exp.type}
                      </span>
                      <span className="text-xs tracking-widest text-slate-400 uppercase">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-base leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="grid sm:grid-cols-2 gap-3 mb-6">
                    {exp.achievements.map((ach) => (
                      <div key={ach} className="flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 flex-shrink-0"
                          style={{ color: "#00f5ff" }}
                        />
                        <span className="text-sm text-slate-300">{ach}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold tracking-widest uppercase px-3 py-1"
                        style={{
                          color: "rgba(0,245,255,0.7)",
                          background: "rgba(0,245,255,0.06)",
                          border: "1px solid rgba(0,245,255,0.15)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
