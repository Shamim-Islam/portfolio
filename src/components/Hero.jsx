"use client";

import Image from "next/image";
import { ArrowRight, Github, Mail, FileText, Shield, Terminal } from "lucide-react";
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
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131822] border border-white/10 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
              <span className="font-medium text-slate-200">
                Open to Opportunities
              </span>
              <span className="text-slate-500">•</span>
              <span className="text-[#ccff00]">
                Web Dev &amp; Security Learner
              </span>
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
                Web Developer{" "}
                <span className="text-white/40 font-light">|</span>{" "}
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
              <span className="text-white font-medium">Next.js</span> with
              Tailwind CSS. Driven by curiosity for system internals, I actively
              explore{" "}
              <span className="text-[#ccff00] font-medium">Web Security</span>{" "}
              and OWASP principles through authorized hands-on training labs.
            </p>

            {/* Verification Note for Clarity */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-white/[0.03] p-2.5 rounded-lg border border-white/5 max-w-xl">
              <Terminal className="w-4 h-4 text-[#ccff00] shrink-0" />
              <span>
                Portfolio Identity:{" "}
                <strong className="text-white">Aminul Islam</strong> • GitHub:{" "}
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
                title="Open resume information"
              >
                <FileText className="w-4 h-4 text-[#ccff00]" />
                <span>Resume</span>
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

          </div>

          {/* Right Column: Portrait and Focus Areas */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-4 rounded-[2.25rem] border border-[#ccff00]/10 rotate-2" />
              <div className="absolute -inset-4 rounded-[2.25rem] border border-white/5 -rotate-2" />

              <div className="relative rounded-[2rem] bg-gradient-to-br from-[#ccff00]/30 via-white/10 to-emerald-400/20 p-px shadow-2xl shadow-black/40">
                <div className="rounded-[calc(2rem-1px)] bg-[#0c1017] p-3 sm:p-4">
                  <div className="group relative aspect-[4/4.5] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#131826]">
                    <Image
                      src="/portrait.jpg"
                      alt="Portrait of Aminul Islam"
                      fill
                      priority
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 400px"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#090b0f] via-[#090b0f]/10 to-black/10" />

                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#090b0f]/65 px-3 py-1.5 text-[10px] font-medium tracking-wide text-slate-200 backdrop-blur-md sm:left-5 sm:top-5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#ccff00]" />
                      WEB DEVELOPMENT &amp; SECURITY
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-5 text-left sm:p-6">
                      <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        Aminul Islam
                      </p>
                      <p className="mt-1 font-mono text-sm text-[#ccff00]">
                        @Shamim-Islam
                      </p>
                      <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-300">
                        Building for the web. Learning to make it safer.
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3.5 sm:p-4">
                      <div className="flex items-center gap-2.5">
                        <span className="rounded-xl bg-[#ccff00]/10 p-2 text-[#ccff00]">
                          <Terminal className="h-4 w-4" />
                        </span>
                        <span className="text-xs font-semibold text-white sm:text-sm">
                          Web Development
                        </span>
                      </div>
                      <p className="mt-3 text-[11px] leading-relaxed text-slate-400 sm:text-xs">
                        JavaScript · React · Next.js
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/[0.07] bg-white/[0.035] p-3.5 sm:p-4">
                      <div className="flex items-center gap-2.5">
                        <span className="rounded-xl bg-emerald-400/10 p-2 text-emerald-300">
                          <Shield className="h-4 w-4" />
                        </span>
                        <span className="text-xs font-semibold text-white sm:text-sm">
                          Web Security
                        </span>
                      </div>
                      <p className="mt-3 text-[11px] leading-relaxed text-slate-400 sm:text-xs">
                        Learning · Authorized labs
                      </p>
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
