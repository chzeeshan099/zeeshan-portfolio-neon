"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/app/data";
import { Github, Linkedin, Twitter, Mail, Download, ArrowRight } from "lucide-react";

const roles = personalInfo.roles;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  // Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface Particle {
      x: number; y: number; vx: number; vy: number;
      size: number; color: string; alpha: number;
    }

    const particles: Particle[] = [];
    const colors = ["#00f5ff", "#bf00ff", "#ff00ff"];

    for (let i = 0; i < 100; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.3,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.1,
      });
    }

    let mouseX = -999, mouseY = -999;
    const onMouseMove = (e: MouseEvent) => { mouseX = e.clientX; mouseY = e.clientY; };
    document.addEventListener("mousemove", onMouseMove);

    let rafId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        const dx = mouseX - p.x, dy = mouseY - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          p.vx += (dx / dist) * 0.008;
          p.vy += (dy / dist) * 0.008;
        }
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > 1) { p.vx /= speed; p.vy /= speed; }
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = p.color;
        ctx.shadowBlur = 6; ctx.shadowColor = p.color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 80) {
            ctx.save();
            ctx.globalAlpha = (1 - dist / 80) * 0.07;
            ctx.strokeStyle = "#00f5ff";
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
            ctx.restore();
          }
        }
      }
      rafId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      document.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />

      {/* Grid bg */}
      <div className="absolute inset-0 bg-grid opacity-100 pointer-events-none z-0" />

      {/* Orbs */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-neon-cyan/5 blur-[80px] animate-float pointer-events-none z-0" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] rounded-full bg-neon-pink/5 blur-[80px] animate-float pointer-events-none z-0" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-purple/4 blur-[100px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        {/* <div className="inline-flex items-center gap-2 mb-8 px-5 py-2 border border-neon-cyan/30 text-neon-cyan text-xs tracking-[4px] uppercase font-semibold relative overflow-hidden">
          <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
          Available for Projects
          <span
            className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-neon-cyan/10 to-transparent animate-shimmer"
          />
        </div> */}

        {/* Name */}
        <h1 className="font-orbitron font-black mb-4 leading-tight">
          <span
            className="block text-5xl md:text-7xl lg:text-8xl text-white"
            style={{ textShadow: "0 0 40px rgba(255,255,255,0.15)" }}
          >
            ZEESHAN
          </span>
          <span
            className="block text-4xl md:text-6xl lg:text-7xl gradient-text animate-gradient-shift"
          >
            AKRAM
          </span>
        </h1>

        {/* Typewriter */}
        <div className="flex items-center justify-center gap-2 my-6 h-12">
          <span
            className="text-xl md:text-2xl font-semibold tracking-widest uppercase font-orbitron"
            style={{ color: "#00f5ff", textShadow: "0 0 10px #00f5ff" }}
          >
            {displayed}
          </span>
          <span className="typing-cursor" />
        </div>

        {/* Tagline */}
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          {personalInfo?.tagline}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={() => scrollTo("#projects")}
            className="flex items-center gap-2 px-8 py-3 font-orbitron font-bold text-sm tracking-widest uppercase text-dark bg-gradient-to-r from-neon-cyan to-neon-purple clip-skew transition-all duration-300 hover:scale-105"
            style={{ boxShadow: "0 0 25px rgba(0,245,255,0.4), 0 0 50px rgba(0,245,255,0.15)" }}
          >
            View Work <ArrowRight size={16} />
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-2 px-8 py-3 font-orbitron font-bold text-sm tracking-widest uppercase text-neon-pink border border-neon-pink/40 clip-skew transition-all duration-300 hover:bg-neon-pink/10"
            style={{ boxShadow: "0 0 15px rgba(255,0,255,0.15), inset 0 0 15px rgba(255,0,255,0.05)" }}
          >
            Hire Me
          </button>
          <a
            href="/resume.pdf"
            download
            className="flex items-center gap-2 px-8 py-3 font-orbitron font-bold text-sm tracking-widest uppercase text-slate-300 border border-white/10 clip-skew transition-all duration-300 hover:bg-white/5"
          >
            <Download size={16} /> Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6">
          {[
            { icon: <Github size={20} />, href: personalInfo.github, label: "GitHub" },
            { icon: <Linkedin size={20} />, href: personalInfo.linkedin, label: "LinkedIn" },
            { icon: <Mail size={20} />, href: `mailto:${personalInfo.email}`, label: "Email" },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 border border-white/10 text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all duration-300 hover:scale-110 rounded-sm"
              style={{}}
            >
              {social?.icon}
            </a>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <div
          className="w-[1px] h-16 bg-gradient-to-b from-neon-cyan to-transparent animate-pulse-neon"
          style={{ boxShadow: "0 0 8px #00f5ff" }}
        />
        {/* <span className="text-xs tracking-[4px] text-slate-500 uppercase">Scroll</span> */}
      </div>
    </section>
  );
}
