"use client";

import { education } from "@/app/data";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="relative z-10 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <p className="text-neon-cyan text-xs tracking-[6px] uppercase font-semibold mb-3">
            // 05. Education
          </p>
          <h2
            className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          >
            Academic Background
          </h2>
          <div className="neon-line w-20" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {education.map((edu, i) => (
            <div
              key={i}
              className="border rounded-sm overflow-hidden transition-all duration-300 hover:border-neon-cyan/40 group"
              style={{
                background: "linear-gradient(135deg, rgba(0,245,255,0.03), rgba(6,15,30,0.9))",
                borderColor: "rgba(0,245,255,0.15)",
              }}
            >
              {/* Top gradient bar */}
              <div
                className="h-1"
                style={{ background: "linear-gradient(to right, #00f5ff, #bf00ff, #ff00ff)" }}
              />

              <div className="p-8">
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className="p-4 rounded-sm"
                    style={{ background: "rgba(0,245,255,0.08)", border: "1px solid rgba(0,245,255,0.2)" }}
                  >
                    <GraduationCap size={28} style={{ color: "#00f5ff" }} />
                  </div>
                  <div>
                    <h3 className="font-orbitron font-bold text-lg text-white mb-1 leading-tight">
                      {edu.degree}
                    </h3>
                    <p
                      className="font-semibold text-base mb-1"
                      style={{ color: "#00f5ff", textShadow: "0 0 8px rgba(0,245,255,0.4)" }}
                    >
                      {edu.institution}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 mt-2">
                      <span className="text-xs tracking-widest text-slate-400 uppercase">
                        {edu.period}
                      </span>
                      <span
                        className="text-xs font-bold tracking-widest uppercase px-2 py-0.5"
                        style={{
                          color: "#39ff14",
                          background: "rgba(57,255,20,0.08)",
                          border: "1px solid rgba(57,255,20,0.25)",
                        }}
                      >
                        {edu.status}
                      </span>
                      <span
                        className="text-xs font-bold tracking-widest uppercase px-2 py-0.5"
                        style={{
                          color: "#bf00ff",
                          background: "rgba(191,0,255,0.08)",
                          border: "1px solid rgba(191,0,255,0.25)",
                        }}
                      >
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Courses */}
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen size={16} style={{ color: "#00f5ff" }} />
                    <span className="text-xs font-bold tracking-widest uppercase text-slate-400">
                      Key Courses
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="text-[10px] font-semibold tracking-wider uppercase px-3 py-1"
                        style={{
                          color: "rgba(0,245,255,0.7)",
                          background: "rgba(0,245,255,0.05)",
                          border: "1px solid rgba(0,245,255,0.12)",
                        }}
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Side card - Quick Facts */}
          <div
            className="border rounded-sm p-8"
            style={{
              background: "rgba(6,15,30,0.7)",
              borderColor: "rgba(191,0,255,0.15)",
            }}
          >
            <div
              className="h-1 -mt-8 -mx-8 mb-8"
              style={{ background: "linear-gradient(to right, #bf00ff, #ff00ff, #00f5ff)" }}
            />

            <h3 className="font-orbitron font-bold text-lg text-white mb-6">
              Currently Learning
            </h3>

            {[
               { topic: "TypeScript Advanced",    level: 70, color: "#00f5ff" },
               { topic: "System Design",          level: 65, color: "#bf00ff" },
               { topic: "GraphQL & Apollo",       level: 60, color: "#ff00ff" },
               { topic: "Docker & Kubernetes",    level: 55, color: "#39ff14" },
               { topic: "AWS Cloud Services",     level: 50, color: "#00f5ff" },
               { topic: "CI/CD & GitHub Actions", level: 60, color: "#ff9900" },
               { topic: "React Server Components",level: 55, color: "#61dafb" },
            ].map((item) => (
              <div key={item.topic} className="mb-5">
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-300">{item.topic}</span>
                  <span className="text-xs font-bold" style={{ color: item.color }}>
                    {item.level}%
                  </span>
                </div>
                <div className="w-full bg-white/5 h-[2px] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${item.level}%`,
                      background: item.color,
                      boxShadow: `0 0 6px ${item.color}`,
                    }}
                  />
                </div>
              </div>
            ))}

            <div
              className="mt-8 p-4 border rounded-sm"
              style={{
                background: "rgba(0,245,255,0.04)",
                borderColor: "rgba(0,245,255,0.15)",
              }}
            >
              <p className="text-xs tracking-widest uppercase text-slate-500 mb-2">Goal</p>
              <p className="text-sm text-slate-300 leading-relaxed">
                My goal is to grow into a Senior Full Stack Engineer  architecting systems that are scalable, maintainable, and user-focused. With 2+ years of real industry experience and a BSCS degree in progress, I am not just preparing for the industry  I am already in it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
