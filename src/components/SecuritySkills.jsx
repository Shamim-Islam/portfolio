"use client";

import {
  ArrowUpRight,
  BookOpen,
  Globe,
  Info,
  LockKeyhole,
  Shield,
  ShieldAlert,
  Wrench,
} from "lucide-react";
import Link from "next/link";
import SocialLinks from "./SocialLinks";
import {
  securityLearningProjects,
  webSecuritySkills,
} from "../data/portfolioData";

const categoryIcons = {
  Globe,
  ShieldAlert,
  Wrench,
  LockKeyhole,
};

export default function SecuritySkills() {
  return (
    <section
      id="security"
      className="relative border-t border-white/5 bg-[#090b0f] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-300">
            <Shield className="h-3.5 w-3.5 text-emerald-400" />
            <span>03 // Web Security Learning Track</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Web Security Foundations
          </h2>
          <p className="mt-2 text-base leading-relaxed text-slate-400 sm:text-lg">
            A transparent view of the topics I am studying alongside web
            development, with practice limited to authorized labs and
            training environments.
          </p>
        </div>

        <div className="mb-12 flex items-start gap-4 rounded-2xl border border-emerald-500/20 bg-[#0f141f] p-5">
          <div className="shrink-0 rounded-xl bg-emerald-500/10 p-3 text-emerald-400">
            <Info className="h-5 w-5" />
          </div>
          <div>
            <div className="mb-1 flex flex-wrap items-center gap-2">
              <span className="font-bold text-white">Current learning level</span>
              <span className="rounded border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono text-emerald-300">
                Learner Track
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-300">
              {webSecuritySkills.disclaimer}
            </p>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {webSecuritySkills.categories.map((category) => {
            const Icon = categoryIcons[category.icon];
            return (
              <article
                key={category.title}
                className="group min-w-0 rounded-2xl border border-white/10 bg-[#101520] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/40"
              >
                  <div className="mb-5 flex flex-wrap items-center gap-3">
                    <div className="flex min-w-0 flex-1 items-center gap-3">
                    <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 p-2.5 text-emerald-400 transition-transform group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>
                      <h3 className="min-w-0 break-words font-bold text-white">
                        {category.title}
                      </h3>
                    </div>
                    <span className="ml-auto shrink-0 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[10px] font-mono text-[#ccff00]">
                      {category.badge}
                    </span>
                </div>
                <div className="space-y-2.5">
                  {category.topics.map((topic) => (
                    <div
                      key={topic.name}
                      className="flex items-center justify-between gap-3 border-b border-white/5 pb-2.5 text-sm last:border-0 last:pb-0"
                    >
                      <span className="text-slate-200">{topic.name}</span>
                      <span className="shrink-0 text-right text-xs text-slate-500">
                        {topic.level}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-16">
          <div className="mb-7">
            <p className="mb-2 text-xs font-mono uppercase tracking-[0.2em] text-[#ccff00]">
              Learning approach
            </p>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Learning by understanding, practicing, and reflecting
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {webSecuritySkills.journey.map((item) => (
              <article
                key={item.step}
                className="rounded-2xl border border-white/10 bg-[#10141e] p-5 transition-colors hover:border-[#ccff00]/30"
              >
                <span className="font-mono text-sm text-[#ccff00]">{item.step}</span>
                <h4 className="mt-4 font-bold text-white">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-7">
            <p className="mb-2 text-xs font-mono uppercase tracking-[0.2em] text-[#ccff00]">
              Security community
            </p>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Connect With Me on Security Platforms
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-400">
              Profile links are shared with the Contact section. Missing profile
              URLs are left pending until provided.
            </p>
          </div>
          <SocialLinks
            networks={["linkedin", "tryhackme", "hackthebox", "portswigger"]}
            className="w-full lg:grid-cols-4"
          />
        </div>

        <div id="security-projects" className="mt-16 scroll-mt-24">
          <div className="mb-7 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-xs font-mono uppercase tracking-[0.2em] text-[#ccff00]">
                Security learning projects
              </p>
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Lab write-ups will live here
              </h3>
            </div>
            <span className="text-sm text-slate-500">
              No completed security projects claimed yet
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {securityLearningProjects.map((project) => (
              <article
                key={project.slug}
                className="rounded-2xl border border-dashed border-white/20 bg-[#0d1118] p-6 transition-all hover:border-[#ccff00]/40"
              >
                <div className="mb-5 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-[#ccff00]/20 bg-[#ccff00]/10 p-2.5 text-[#ccff00]">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <h4 className="font-bold text-white">{project.title}</h4>
                  </div>
                  <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 text-[10px] font-mono text-amber-300">
                    {project.status}
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  {project.summary}
                </p>
                <Link
                  href={`/security-projects/${project.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#ccff00] transition-colors hover:text-white"
                >
                  View editable structure
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-7">
            <p className="mb-2 text-xs font-mono uppercase tracking-[0.2em] text-[#ccff00]">
              Trusted references
            </p>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Resources I use to keep learning
            </h3>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {webSecuritySkills.resources.map((resource) => (
              <a
                key={resource.name}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl border border-white/10 bg-[#10141e] p-5 transition-all hover:-translate-y-1 hover:border-[#ccff00]/30"
              >
                <div className="flex items-center justify-between gap-3">
                  <h4 className="font-bold text-white group-hover:text-[#ccff00]">
                    {resource.name}
                  </h4>
                  <ArrowUpRight className="h-4 w-4 text-slate-500 group-hover:text-[#ccff00]" />
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {resource.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
