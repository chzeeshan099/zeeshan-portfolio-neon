"use client";

import { useState } from "react";
import { personalInfo } from "@/app/data";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSending(true);
    // Simulate send
    await new Promise((res) => setTimeout(res, 1500));
    setSending(false);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  const contactInfo = [
    { icon: <Mail size={18} />, label: "Email", value: personalInfo.email, href: `mailto:${personalInfo.email}` },
    { icon: <Phone size={18} />, label: "Phone", value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
    { icon: <MapPin size={18} />, label: "Location", value: personalInfo.location, href: null },
  ];

  const socials = [
    { icon: <Github size={20} />, href: personalInfo.github, label: "GitHub" },
    { icon: <Linkedin size={20} />, href: personalInfo.linkedin, label: "LinkedIn" },
  ];

  return (
    <section id="contact" className="relative z-10 py-28 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="text-neon-cyan text-xs tracking-[6px] uppercase font-semibold mb-3">
            // 07. Contact
          </p>
          <h2
            className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          >
             Let&apos;s Build Something Great
          </h2>
          <div className="neon-line w-20 mx-auto" />
          <p className="text-slate-400 text-lg mt-6 max-w-xl mx-auto">
            Have a project in mind or want to discuss an opportunity? 
            I am always open to new ideas, collaborations, and challenges — 
            feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div>
            <div className="space-y-5 mb-10">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-5 p-5 border rounded-sm transition-all duration-300 hover:border-neon-cyan/40 group"
                  style={{ background: "rgba(6,15,30,0.7)", borderColor: "rgba(0,245,255,0.12)" }}
                >
                  <div
                    className="p-3 rounded-sm"
                    style={{ background: "rgba(0,245,255,0.08)", color: "#00f5ff", border: "1px solid rgba(0,245,255,0.2)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs tracking-widest uppercase text-slate-500 mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-200 font-semibold hover:text-neon-cyan transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-slate-200 font-semibold">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Socials */}
            <div
              className="p-6 border rounded-sm"
              style={{ background: "rgba(6,15,30,0.5)", borderColor: "rgba(0,245,255,0.1)" }}
            >
              <p className="text-xs tracking-widest uppercase text-slate-500 mb-5">Follow Me</p>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-3 border border-white/10 text-slate-400 hover:text-neon-cyan hover:border-neon-cyan/40 transition-all duration-300 hover:scale-110 rounded-sm"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div
            className="border rounded-sm p-8"
            style={{ background: "rgba(6,15,30,0.7)", borderColor: "rgba(0,245,255,0.12)" }}
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              {[
                { name: "name", placeholder: "Your Name", col: 1 },
                { name: "email", placeholder: "Your Email", col: 1 },
              ].map((field) => (
                <input
                  key={field.name}
                  type={field.name === "email" ? "email" : "text"}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name as keyof typeof form]}
                  onChange={handleChange}
                  className="col-span-1 px-4 py-3 text-sm font-semibold text-slate-200 placeholder-slate-600 border border-white/8 rounded-sm outline-none transition-all duration-300 focus:border-neon-cyan/50"
                  style={{ background: "rgba(3,8,16,0.8)" }}
                  onFocus={(e) => { e.target.style.boxShadow = "0 0 15px rgba(0,245,255,0.1)"; }}
                  onBlur={(e) => { e.target.style.boxShadow = "none"; }}
                />
              ))}
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-3 text-sm font-semibold text-slate-200 placeholder-slate-600 border border-white/8 rounded-sm outline-none transition-all duration-300 focus:border-neon-cyan/50"
              style={{ background: "rgba(3,8,16,0.8)" }}
              onFocus={(e) => { e.target.style.boxShadow = "0 0 15px rgba(0,245,255,0.1)"; }}
              onBlur={(e) => { e.target.style.boxShadow = "none"; }}
            />

            <textarea
              name="message"
              placeholder="Your Message..."
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full mb-6 px-4 py-3 text-sm font-semibold text-slate-200 placeholder-slate-600 border border-white/8 rounded-sm outline-none transition-all duration-300 focus:border-neon-cyan/50 resize-none"
              style={{ background: "rgba(3,8,16,0.8)" }}
              onFocus={(e) => { e.target.style.boxShadow = "0 0 15px rgba(0,245,255,0.1)"; }}
              onBlur={(e) => { e.target.style.boxShadow = "none"; }}
            />

            <button
              onClick={handleSubmit}
              disabled={sending || sent}
              className="w-full flex items-center justify-center gap-3 py-4 font-orbitron font-bold text-sm tracking-widest uppercase text-dark clip-skew transition-all duration-300 hover:scale-[1.02] disabled:opacity-60"
              style={{
                background: sent
                  ? "linear-gradient(135deg, #39ff14, #00f5ff)"
                  : "linear-gradient(135deg, #00f5ff, #bf00ff)",
                boxShadow: "0 0 25px rgba(0,245,255,0.4)",
              }}
            >
              {sent ? (
                "✅ Message Sent!"
              ) : sending ? (
                "Sending..."
              ) : (
                <>
                  <Send size={16} /> Send Message
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
