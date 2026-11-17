"use client";

import { Layers, ArrowRight } from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects, personalInfo } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-[#090b0f] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#ccff00]/10 border border-[#ccff00]/25 text-[#ccff00] mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>04 // Portfolio Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="text-slate-400 mt-2 text-base sm:text-lg max-w-2xl">
              Genuine web projects demonstrating responsive UI engineering, thoughtful structure, and practical problem solving.
            </p>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-[#ccff00] transition-colors"
          >
            <span>Browse All on GitHub (@Shamim-Islam)</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}
