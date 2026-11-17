"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink, Layers, CheckCircle } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <div
      className="rounded-2xl flex flex-col justify-between overflow-hidden transition-all duration-300 group bg-[#111622] border border-white/10 hover:border-[#ccff00]/40 hover:shadow-lime-sm"
    >
      <div>
        <div className="relative aspect-video w-full overflow-hidden border-b border-white/10 bg-[#151c2a]">
          {project.image ? (
            <Image
              src={project.image}
              alt={`${project.title} project screenshot`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <div className="absolute inset-0 bg-grid-pattern opacity-20" />
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#ccff00]/10 blur-xl transition-all group-hover:bg-[#ccff00]/20" />
              <div className="relative z-10 mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-black/40 text-[#ccff00] transition-transform group-hover:scale-110">
                <Layers className="h-6 w-6" />
              </div>
              <span className="relative z-10 text-sm font-bold text-white">
                {project.title}
              </span>
              <span className="relative z-10 mt-1 text-xs text-slate-400">
                {project.category}
              </span>
            </div>
          )}
          <span className="absolute bottom-3 left-3 rounded border border-white/10 bg-[#090b0f]/85 px-2.5 py-1 text-[10px] text-slate-200 backdrop-blur">
            {project.image ? "Project screenshot" : "Replaceable screenshot placeholder"}
          </span>
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
          <span>View Details</span>
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
              title={`Client repository for ${project.title}`}
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
              aria-label={`Live demo for ${project.title}`}
              title="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          ) : (
            <span
              className="text-[10px] font-mono px-2 py-1 rounded bg-white/5 text-slate-400 border border-white/5"
              title="No live demo URL provided"
            >
              Demo unavailable
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
