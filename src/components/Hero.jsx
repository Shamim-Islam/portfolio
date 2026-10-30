"use client";

import { ArrowRight, Github, Mail, FileText, Shield, Terminal, Code2, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Hero({ onOpenResume }) {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
      {/* Subtle decorative glow elements (tasteful, non-excessive) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#ccff00]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute -top-10 right-0 w-72 h-72 bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131822] border border-white/10 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
              <span className="font-medium text-slate-200">Open to Opportunities</span>
              <span className="text-slate-500">•</span>
              <span className="text-[#ccff00]">Web Dev &amp; Security Learner</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono uppercase tracking-wider text-[#ccff00]">
                Hello World, I am
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Aminul Islam
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300">
                Web Developer <span className="text-white/40 font-light">|</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-emerald-400">
                  Web Security Learner
                </span>
              </h2>
            </div>

            {/* Brief Introduction */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
              I build responsive, high-performance web applications using modern{" "}
              <span className="text-white font-medium">JavaScript</span>,{" "}
              <span className="text-white font-medium">React</span>, and{" "}
              <span className="text-white font-medium">Next.js</span> with Tailwind CSS. Driven by curiosity for system internals, I actively explore{" "}
              <span className="text-[#ccff00] font-medium">Web Security</span> and OWASP principles through authorized hands-on training labs.
            </p>

            {/* Verification Note for Clarity */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/[0.03] p-2.5 rounded-lg border border-white/5 max-w-xl">
              <Terminal className="w-4 h-4 text-[#ccff00] shrink-0" />
              <span>
                Portfolio Identity: <strong className="text-white">Aminul Islam</strong> • GitHub:{" "}
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ccff00] hover:underline"
                >
                  @Shamim-Islam
                </a>
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#ccff00] text-[#090b0f] font-bold text-sm sm:text-base hover:bg-[#b3e600] transition-all shadow-md hover:shadow-lime-sm"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#131822] border border-white/10 hover:border-white/20 text-slate-200 font-semibold text-sm sm:text-base hover:bg-white/5 transition-all"
              >
                <Mail className="w-4 h-4 text-[#ccff00]" />
                <span>Email Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-white/[0.04] border border-dashed border-white/20 hover:border-[#ccff00]/60 text-slate-300 hover:text-[#ccff00] font-medium text-sm sm:text-base transition-all"
                title="View Resume Status"
              >
                <FileText className="w-4 h-4 text-[#ccff00]" />
                <span>Resume</span>
                <span className="px-1.5 py-0.5 rounded text-[10px] bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/20">
                  In Progress
                </span>
              </button>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 p-3 rounded-xl bg-[#131822] border border-white/10 hover:border-white/20 text-slate-300 hover:text-white hover:bg-white/5 transition-all"
                aria-label="GitHub Profile (@Shamim-Islam)"
                title="GitHub Profile (@Shamim-Islam)"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>

            {/* Highlights Bar */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 max-w-xl">
              <div className="bg-[#10141d] p-3 rounded-xl border border-white/5">
                <div className="text-xl font-bold text-[#ccff00]">BSS</div>
                <div className="text-xs text-slate-400">Completed Degree</div>
              </div>
              <div className="bg-[#10141d] p-3 rounded-xl border border-white/5">
                <div className="text-xl font-bold text-white">Fit-Log &amp; BazarDor</div>
                <div className="text-xs text-slate-400">Featured Builds</div>
              </div>
              <div className="bg-[#10141d] p-3 rounded-xl border border-white/5">
                <div className="text-xl font-bold text-[#ccff00]">Labs &amp; OWASP</div>
                <div className="text-xs text-slate-400">Security Learner</div>
              </div>
            </div>
          </div>

          {/* Right Column: Professional Portrait Placeholder Card */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Outer Decorative Glow Border Card */}
              <div className="relative rounded-3xl bg-gradient-to-b from-white/10 to-white/5 p-1">
                <div className="rounded-[22px] bg-[#0f131c] border border-white/10 p-6 sm:p-7 relative overflow-hidden">
                  
                  {/* Portrait Placeholder Container */}
                  <div className="relative aspect-square rounded-2xl bg-[#131826] border border-white/10 flex flex-col items-center justify-center p-6 text-center group overflow-hidden">
                    {/* Background subtle mesh */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#ccff00]/10 rounded-full blur-2xl" />

                    {/* Attractive Avatar Silhouette & Placeholder Icon */}
                    <div className="relative z-10 w-24 h-24 rounded-2xl bg-gradient-to-br from-[#ccff00]/20 to-[#10141d] border border-[#ccff00]/40 flex items-center justify-center text-[#ccff00] mb-4 shadow-lime-sm">
                      <Code2 className="w-12 h-12 text-[#ccff00]" />
                    </div>

                    <div className="relative z-10 space-y-1">
                      <div className="font-bold text-lg text-white">Aminul Islam</div>
                      <div className="text-xs font-mono text-[#ccff00]">@Shamim-Islam</div>
                    </div>

                    {/* Replaceable Portrait Badge */}
                    <div className="relative z-10 mt-4 px-3 py-1.5 rounded-lg bg-black/60 border border-dashed border-white/20 text-[11px] text-slate-300">
                      <span>📸 Replaceable Photo Placeholder</span>
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        Add photo to <code className="text-[#ccff00]">/public/portrait.jpg</code>
                      </p>
                    </div>
                  </div>

                  {/* Floating Badges */}
                  <div className="mt-5 space-y-2.5">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#161c28] border border-white/5">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-[#ccff00]/10 text-[#ccff00]">
                          <Terminal className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Frontend Architecture</div>
                          <div className="text-[11px] text-slate-400">React.js, Next.js, Tailwind CSS</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-[#ccff00] border border-white/5">
                        Active
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-[#161c28] border border-white/5">
                      <div className="flex items-center gap-2.5">
                        <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
                          <Shield className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-white">Web Security Foundations</div>
                          <div className="text-[11px] text-slate-400">HTTP, OWASP Awareness, Safe Labs</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Learner
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
