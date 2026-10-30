"use client";

import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, Layers, CheckCircle } from "lucide-react";

export default function ProjectCard({ project }) {
  const isPlaceholder = project.isPlaceholder;

  return (
    <div
      className={`rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 group ${
        isPlaceholder
          ? "bg-[#0d1118] border border-dashed border-white/20 hover:border-[#ccff00]/50"
          : "bg-[#111622] border border-white/10 hover:border-[#ccff00]/40 hover:shadow-lime-sm"
      }`}
    >
      <div>
        {/* Card Header & Preview Image Placeholder */}
        <div className="relative aspect-video w-full bg-[#151c2a] border-b border-white/10 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#ccff00]/10 rounded-full blur-xl group-hover:bg-[#ccff00]/20 transition-all" />

          {/* Icon / Project Category */}
          <div className="relative z-10 w-12 h-12 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center text-[#ccff00] mb-3 group-hover:scale-110 transition-transform">
            <Layers className="w-6 h-6" />
          </div>

          <div className="relative z-10">
            <h4 className="text-lg font-bold text-white group-hover:text-[#ccff00] transition-colors">
              {project.title}
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              {project.category}
            </p>
          </div>

          {/* Replaceable screenshot note badge */}
          <div className="relative z-10 mt-3 px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[10px] text-slate-300">
            {isPlaceholder ? "⚠️ Editable 3rd Project Placeholder" : "🖼️ Replaceable Screenshot Slot"}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 space-y-4">
          {/* Tagline & Overview */}
          <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
            {project.tagline}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-300 group-hover:border-[#ccff00]/30 transition-colors"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 rounded-md text-xs font-mono bg-white/5 text-slate-400">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>

          {/* Key Feature Highlights */}
          <div className="pt-2 border-t border-white/5 space-y-1.5 text-xs text-slate-400">
            {project.features.slice(0, 2).map((feat, fIdx) => (
              <div key={fIdx} className="flex items-start gap-1.5 line-clamp-1">
                <CheckCircle className="w-3.5 h-3.5 text-[#ccff00] shrink-0 mt-0.5" />
                <span className="text-slate-300">{feat.split(":")[0]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Card Actions Footer */}
      <div className="p-6 pt-0 border-t border-white/5 mt-4 flex items-center justify-between gap-3">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#ccff00] hover:text-white transition-colors"
        >
          <span>View Full Case Study</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>

        <div className="flex items-center gap-2">
          {project.clientRepo && (
            <a
              href={project.clientRepo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`GitHub Repo for ${project.title}`}
              className="p-2 rounded-lg bg-white/5 border border-white/10 hover:border-white/20 text-slate-300 hover:text-white transition-colors"
              title="GitHub Profile / Repository"
            >
              <Github className="w-4 h-4" />
            </a>
          )}

          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#ccff00]/10 border border-[#ccff00]/30 text-[#ccff00] hover:bg-[#ccff00] hover:text-[#090b0f] transition-all"
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span
              className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/5"
              title="Deployment URL pending / draft"
            >
              Live URL (Draft)
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
