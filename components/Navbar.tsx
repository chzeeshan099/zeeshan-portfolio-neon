"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-xl border-b border-neon-cyan/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo("#hero")}
          className="font-orbitron font-black text-xl tracking-widest text-neon-cyan"
          style={{ textShadow: "0 0 20px #00f5ff" }}
        >
          ZEE
          <span style={{ color: "#ff00ff", textShadow: "0 0 20px #ff00ff" }}>
            SHAN
          </span>
          <span style={{ color: "rgba(200,224,255,0.3)" }}>.</span>
        </button>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => {
            const id = link.href.slice(1);
            return (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={`text-sm font-semibold tracking-widest uppercase transition-all duration-300 ${
                    active === id
                      ? "text-neon-cyan"
                      : "text-slate-400 hover:text-neon-cyan"
                  }`}
                  style={
                    active === id
                      ? { textShadow: "0 0 8px #00f5ff" }
                      : {}
                  }
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <a
          href="/resume.pdf"
          download
          className="hidden lg:flex items-center gap-2 px-5 py-2 text-sm font-orbitron font-bold tracking-wider uppercase bg-transparent border border-neon-cyan/40 text-neon-cyan clip-skew transition-all duration-300 hover:bg-neon-cyan/10 hover:border-neon-cyan/80"
          style={{ boxShadow: "0 0 12px rgba(0,245,255,0.15)" }}
        >
          Resume
        </a>

        {/* Mobile Menu Btn */}
        <button
          className="lg:hidden text-neon-cyan p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-dark-2/95 backdrop-blur-xl border-b border-neon-cyan/10">
          <ul className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="w-full text-left text-base font-semibold tracking-widest uppercase text-slate-300 hover:text-neon-cyan transition-colors duration-300"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                className="inline-block mt-2 px-6 py-2 text-sm font-orbitron font-bold tracking-wider uppercase border border-neon-cyan/40 text-neon-cyan clip-skew"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
