"use client";

import { Code, ShieldCheck, Cpu, GitBranch, Edit3 } from "lucide-react";
import { aboutMe, personalInfo } from "../data/portfolioData";

export default function About() {
  const iconMap = {
    Code: <Code className="w-5 h-5 text-[#ccff00]" />,
    ShieldAlert: <ShieldCheck className="w-5 h-5 text-[#ccff00]" />,
    Cpu: <Cpu className="w-5 h-5 text-[#ccff00]" />,
    GitBranch: <GitBranch className="w-5 h-5 text-[#ccff00]" />,
  };

  return (
    <section id="about" className="py-20 bg-[#090b0f] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#ccff00]/10 border border-[#ccff00]/25 text-[#ccff00] mb-3">
            <span>01 // Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 mt-2 text-base sm:text-lg max-w-2xl">
            {aboutMe.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Bio Text */}
          <div className="lg:col-span-7 space-y-5 text-slate-300 leading-relaxed text-base sm:text-lg">
            {aboutMe.bio.map((paragraph, index) => (
              <p key={index} className="bg-[#10141e]/50 p-4 rounded-xl border border-white/5">
                {paragraph}
              </p>
            ))}

            {/* Editable note for the user */}
            <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white/[0.02] border border-dashed border-white/10 text-xs text-slate-400">
              <Edit3 className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-300">Developer Note: </span>
                This introductory text is kept strictly truthful to your verified background. You can fine-tune or extend this text anytime in <code className="text-[#ccff00] font-mono">src/data/portfolioData.js</code>.
              </div>
            </div>
          </div>

          {/* Core Pillars Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {aboutMe.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#111622] border border-white/5 hover:border-[#ccff00]/30 transition-all duration-200 group"
              >
                <div className="flex items-center gap-3.5 mb-2.5">
                  <div className="w-10 h-10 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {iconMap[pillar.icon] || <Code className="w-5 h-5 text-[#ccff00]" />}
                  </div>
                  <h3 className="font-bold text-white text-base group-hover:text-[#ccff00] transition-colors">
                    {pillar.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-normal pl-0 sm:pl-1">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
