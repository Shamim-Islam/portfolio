"use client";

import { Shield, Lock, AlertTriangle, Terminal, Info, BookOpen } from "lucide-react";
import { webSecuritySkills } from "../data/portfolioData";

export default function SecuritySkills() {
  return (
    <section id="security" className="py-20 bg-[#090b0f] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 mb-3">
            <Shield className="w-3.5 h-3.5 text-emerald-400" />
            <span>03 // Security Focus (Learner Track)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Web Security Knowledge
          </h2>
          <p className="text-slate-400 mt-2 text-base sm:text-lg max-w-2xl">
            Studying web application defense, HTTP mechanics, and OWASP fundamentals in authorized training environments.
          </p>
        </div>

        {/* Honest Learner Disclaimer Banner */}
        <div className="mb-10 p-4 sm:p-5 rounded-2xl bg-[#0f141f] border border-emerald-500/20 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 shrink-0">
            <Info className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm sm:text-base">
                Ethical &amp; Transparent Practice Statement
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/20 text-emerald-300">
                Verified Learner
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {webSecuritySkills.disclaimer} All vulnerability study is strictly confined to authorized platforms (such as PortSwigger Web Security Academy and TryHackMe).
            </p>
          </div>
        </div>

        {/* Security Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {webSecuritySkills.areas.map((area, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#101520] border border-white/10 hover:border-emerald-500/40 transition-all duration-200 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-105 transition-transform">
                    {idx === 0 && <Terminal className="w-5 h-5" />}
                    {idx === 1 && <AlertTriangle className="w-5 h-5" />}
                    {idx === 2 && <Lock className="w-5 h-5" />}
                    {idx === 3 && <BookOpen className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-white/5 text-[#ccff00] border border-white/10">
                    {area.badge}
                  </span>
                </div>

                <h3 className="font-bold text-lg text-white group-hover:text-emerald-300 transition-colors mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {area.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center gap-2 text-xs text-slate-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Focus: Defensive Implementation &amp; Awareness</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
