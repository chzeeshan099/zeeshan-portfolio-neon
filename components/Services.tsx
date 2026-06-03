"use client";
import * as Icons from "lucide-react";
import { type LucideIcon } from "lucide-react";

import { services } from "@/app/data";

const colorMap:any = {
  cyan:   { text: "#00f5ff", border: "rgba(0,245,255,0.2)",   bg: "rgba(0,245,255,0.05)",   glow: "rgba(0,245,255,0.15)"   },
  pink:   { text: "#ff00ff", border: "rgba(255,0,255,0.2)",   bg: "rgba(255,0,255,0.05)",   glow: "rgba(255,0,255,0.15)"   },
  green:  { text: "#39ff14", border: "rgba(57,255,20,0.2)",   bg: "rgba(57,255,20,0.05)",   glow: "rgba(57,255,20,0.15)"   },
  purple: { text: "#bf00ff", border: "rgba(191,0,255,0.2)",   bg: "rgba(191,0,255,0.05)",   glow: "rgba(191,0,255,0.15)"   },
  indigo: { text: "#6366f1", border: "rgba(99,102,241,0.2)",  bg: "rgba(99,102,241,0.05)",  glow: "rgba(99,102,241,0.15)"  },
  teal:   { text: "#2dd4bf", border: "rgba(45,212,191,0.2)",  bg: "rgba(45,212,191,0.05)",  glow: "rgba(45,212,191,0.15)"  },
  orange: { text: "#fb923c", border: "rgba(251,146,60,0.2)",  bg: "rgba(251,146,60,0.05)",  glow: "rgba(251,146,60,0.15)"  },
  rose:   { text: "#fb7185", border: "rgba(251,113,133,0.2)", bg: "rgba(251,113,133,0.05)", glow: "rgba(251,113,133,0.15)" },
};

export default function Services() {
  return (
    <section id="services" className="relative z-10 py-28 px-6 bg-dark-2/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-neon-cyan text-xs tracking-[6px] uppercase font-semibold mb-3">
            // 06. Services
          </p>
          <h2
            className="font-orbitron font-bold text-4xl md:text-5xl text-white mb-4"
            style={{ textShadow: "0 0 20px rgba(255,255,255,0.1)" }}
          >
            What I Do
          </h2>
          <div className="neon-line w-20" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc) => {
            const c = colorMap[svc.color];

             // icon string → lucide component
            // const Icon = (Icons as unknown as Record<string, React.ElementType>)[svc.icon];
            const Icon = Icons[svc.icon as keyof typeof Icons] as LucideIcon;
            return (
              <div
                key={svc.title}
                className="border rounded-sm p-8 transition-all duration-300 group hover:-translate-y-3 cursor-default"
                style={{
                  background: c?.bg,
                  borderColor: c?.border,
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 40px rgba(0,0,0,0.5), 0 0 30px ${c?.glow}`;
                  (e.currentTarget as HTMLElement).style.borderColor = c?.text;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.borderColor = c?.border;
                }}
              >
                {/* <div
                  className="text-4xl mb-6 p-4 rounded-sm w-fit transition-transform duration-300 group-hover:scale-110"
                  style={{ background: c?.bg, border: `1px solid ${c?.border}` }}
                >
                  {svc.icon}
                </div> */}
                 <div
        className="mb-6 p-4 rounded-sm w-fit transition-transform duration-300 group-hover:scale-110"
        style={{ background: c?.bg, border: `1px solid ${c?.border}` }}
      >
        {Icon
          ? <Icon size={28} style={{ color: c?.text }} />
          : <span className="text-3xl">{svc.icon}</span>  // fallback
        }
      </div>
                <h3
                  className="font-orbitron font-bold text-sm text-white mb-4 leading-snug group-hover:transition-all"
                  style={{ letterSpacing: "1px" }}
                >
                  {svc.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {svc.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
