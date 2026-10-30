"use client";

import { Layout, Server, Wrench, CheckCircle2 } from "lucide-react";
import { webDevSkills } from "../data/portfolioData";

export default function WebDevSkills() {
  const categoryIcons = {
    "Frontend Development": <Layout className="w-5 h-5 text-[#ccff00]" />,
    "Backend & Data Basics": <Server className="w-5 h-5 text-[#ccff00]" />,
    "Developer Tools & Workflow": <Wrench className="w-5 h-5 text-[#ccff00]" />,
  };

  return (
    <section id="skills" className="py-20 bg-[#090b0f] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#ccff00]/10 border border-[#ccff00]/25 text-[#ccff00] mb-3">
            <span>02 // Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Web Development Skills
          </h2>
          <p className="text-slate-400 mt-2 text-base sm:text-lg max-w-2xl">
            Modern tools and technologies I use to design, develop, and deploy responsive web solutions.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {webDevSkills.map((category, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#10151f] border border-white/10 p-6 flex flex-col justify-between hover:border-[#ccff00]/30 transition-all duration-200 group"
            >
              <div>
                {/* Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-white/10">
                  <div className="p-2.5 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/20">
                    {categoryIcons[category.category] || <Layout className="w-5 h-5 text-[#ccff00]" />}
                  </div>
                  <h3 className="font-bold text-lg text-white group-hover:text-[#ccff00] transition-colors">
                    {category.category}
                  </h3>
                </div>

                {/* Skill List */}
                <ul className="space-y-3.5">
                  {category.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="p-3 rounded-xl bg-[#141a27] border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-white text-sm flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00]" />
                          {skill.name}
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#ccff00] border border-white/5">
                          {skill.level}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 pl-5">
                        {skill.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
