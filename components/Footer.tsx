"use client";

import { personalInfo } from "@/app/data";
import { Github, Linkedin, Twitter, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t py-12 px-6" style={{ borderColor: "rgba(0,245,255,0.08)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="font-orbitron font-black text-lg tracking-widest">
            <span style={{ color: "#00f5ff", textShadow: "0 0 15px #00f5ff" }}>ZEE</span>
            <span style={{ color: "#ff00ff", textShadow: "0 0 15px #ff00ff" }}>SHAN</span>
            <span style={{ color: "rgba(200,224,255,0.2)" }}>.</span>
          </div>

          {/* Copy */}
          <p className="flex items-center gap-2 text-xs tracking-widest uppercase text-slate-500">
            Built with <Heart size={12} style={{ color: "#ff00ff" }} /> by Zeeshan &nbsp;|&nbsp; 2024
          </p>

          {/* Socials */}
          <div className="flex gap-4">
            {[
              { icon: <Github size={16} />, href: personalInfo.github },
              { icon: <Linkedin size={16} />, href: personalInfo.linkedin },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-white/8 text-slate-500 hover:text-neon-cyan hover:border-neon-cyan/30 transition-all duration-300 rounded-sm"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
