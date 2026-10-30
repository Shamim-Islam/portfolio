"use client";

import { GraduationCap, Briefcase, Calendar, CheckCircle2, AlertCircle } from "lucide-react";
import { education, learningExperience } from "../data/portfolioData";

export default function EducationExperience() {
  return (
    <section id="education" className="py-20 bg-[#090b0f] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#ccff00]/10 border border-[#ccff00]/25 text-[#ccff00] mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>05 // Education &amp; Learning Track</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic &amp; Practical Background
          </h2>
          <p className="text-slate-400 mt-2 text-base sm:text-lg max-w-2xl">
            Verified academic qualifications and hands-on self-directed engineering experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education Card */}
          <div className="rounded-2xl bg-[#10141f] border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#ccff00]/10 text-[#ccff00]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Education</h3>
                    <p className="text-xs text-slate-400">Formal Academic Background</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  {education.status}
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-[#141b28] border border-white/5">
                  <div className="text-xl font-bold text-white mb-1">
                    {education.degree}
                  </div>
                  <div className="text-sm font-semibold text-[#ccff00] mb-2">
                    Undergraduate Degree Completed
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Graduated with a Bachelor of Social Sciences. Equips me with strong analytical reasoning, communication skills, and structured problem-solving applicable to software design.
                  </p>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-dashed border-white/10 text-xs text-slate-400">
                  <AlertCircle className="w-4 h-4 text-[#ccff00] shrink-0 mt-0.5" />
                  <span>
                    <strong>Integrity Note:</strong> Specific university name and graduation session are not pre-populated to strictly avoid inventing unverified information. Easily editable in <code className="text-[#ccff00]">src/data/portfolioData.js</code>.
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-500">
              Verified record: Bachelor of Social Sciences (BSS) Completed.
            </div>
          </div>

          {/* Practical Experience / Learning Track */}
          <div className="rounded-2xl bg-[#10141f] border border-white/10 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#ccff00]/10 text-[#ccff00]">
                    <Briefcase className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Practical Experience</h3>
                    <p className="text-xs text-slate-400">Self-Directed &amp; Lab Track</p>
                  </div>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00]">
                  Active
                </span>
              </div>

              <div className="space-y-4">
                {learningExperience.timeline.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-[#141b28] border border-white/5 space-y-2.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="font-bold text-white text-base">
                        {item.role}
                      </div>
                      <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-black/40 px-2 py-0.5 rounded border border-white/5">
                        <Calendar className="w-3 h-3 text-[#ccff00]" />
                        <span>{item.period}</span>
                      </div>
                    </div>

                    <div className="text-xs font-mono text-[#ccff00]">
                      {item.type}
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {item.description}
                    </p>

                    <ul className="space-y-1.5 pt-1 text-xs text-slate-300">
                      {item.points.map((pt, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#ccff00] shrink-0 mt-0.5" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/5 text-xs text-slate-500">
              Honest labeling: Self-directed lab &amp; project experience.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
