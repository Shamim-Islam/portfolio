import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  Github,
  ExternalLink,
  Layers,
  CheckCircle,
  AlertCircle,
  Cpu,
  Compass,
  Code2,
} from "lucide-react";
import { projects, personalInfo } from "../../../data/portfolioData";

// Enable static generation for verified slugs
export function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }
  return {
    title: `${project.title} Case Study`,
    description: project.tagline,
  };
}

export default async function ProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#090b0f] text-slate-100 flex flex-col">
      {/* Top Header / Navbar */}
      <header className="sticky top-0 z-40 bg-[#090b0f]/90 backdrop-blur-md border-b border-white/10 py-4">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-[#ccff00] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Projects</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400 hidden sm:inline">
              Aminul Islam Portfolio
            </span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          
          {/* Project Title & Meta Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#ccff00]/10 border border-[#ccff00]/25 text-[#ccff00]">
                {project.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                Verified Portfolio Build
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              {project.title}
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-3xl">
              {project.tagline}
            </p>

            {/* Action Bar (Links) */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              {project.clientRepo && (
                <a
                  href={project.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#ccff00]/40 text-slate-200 hover:text-white font-medium text-sm transition-all"
                >
                  <Github className="w-4 h-4 text-[#ccff00]" />
                  <span>Client Repository ({project.clientRepoLabel})</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              )}

              {project.serverRepo && (
                <a
                  href={project.serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-slate-200 transition-all hover:border-[#ccff00]/40 hover:bg-white/10 hover:text-white"
                >
                  <Github className="h-4 w-4 text-slate-300" />
                  <span>Backend Repository ({project.serverRepoLabel})</span>
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                </a>
              )}

              {project.liveUrl ? (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#ccff00] text-[#090b0f] font-bold text-sm hover:bg-[#b3e600] transition-all shadow-lime-sm"
                >
                  <span>Launch Live Site</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <div className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-dashed border-white/20 text-slate-400 text-xs sm:text-sm font-mono">
                  <AlertCircle className="w-4 h-4 text-amber-400" />
                  <span>No publicly verified live demo is available.</span>
                </div>
              )}
            </div>
          </div>

          {/* Screenshot / Replaceable Visual Container */}
          <div className="relative rounded-2xl bg-[#111622] border border-white/10 overflow-hidden min-h-[300px] sm:min-h-[400px]">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.title} project screenshot`}
                fill
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="object-contain"
              />
            ) : (
              <div className="p-6 sm:p-12 text-center flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px]">
                <div className="absolute inset-0 bg-grid-pattern opacity-25" />
                <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#ccff00]/10 rounded-full blur-3xl pointer-events-none" />
                <div className="relative z-10 w-16 h-16 rounded-2xl bg-black/60 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00] mb-4 shadow-lime-sm">
                  <Code2 className="w-8 h-8" />
                </div>
                <h3 className="relative z-10 text-xl font-bold text-white mb-2">
                  Screenshot pending
                </h3>
                <p className="relative z-10 text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
                  {project.imagePlaceholderText}
                </p>
                <div className="relative z-10 px-4 py-2 rounded-xl bg-black/70 border border-white/15 text-xs text-slate-300 font-mono">
                  Add a verified image at <code className="text-[#ccff00]">/public/projects/{project.slug}.png</code>
                </div>
              </div>
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Left 8 Cols: Overview, Features, Challenges */}
            <div className="md:col-span-8 space-y-8">
              
              {/* Overview */}
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#ccff00]" />
                  Project Overview
                </h2>
                <div className="p-6 rounded-2xl bg-[#10141e] border border-white/5 text-slate-300 leading-relaxed text-base">
                  {project.overview}
                </div>
              </section>

              {/* Key Features */}
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-[#ccff00]" />
                  Key Features
                </h2>
                <div className="p-6 rounded-2xl bg-[#10141e] border border-white/5 space-y-3">
                  {project.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-md bg-[#ccff00]/10 text-[#ccff00] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-sm sm:text-base text-slate-300 leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Purpose */}
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#ccff00]" />
                  Project Purpose
                </h2>
                <div className="p-6 rounded-2xl bg-[#10141e] border border-white/5 text-slate-300 leading-relaxed text-base">
                  {project.purpose}
                </div>
              </section>

              {/* Implementation Details */}
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-[#ccff00]" />
                  Implementation Details
                </h2>
                <div className="p-6 rounded-2xl bg-[#10141e] border border-white/5 space-y-3">
                  {project.implementationDetails.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                      <CheckCircle className="w-4 h-4 text-[#ccff00] shrink-0 mt-1" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Engineering Challenges */}
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#ccff00]" />
                  Development Challenges
                </h2>
                <div className="p-6 rounded-2xl bg-[#10141e] border border-white/5 space-y-4 text-sm sm:text-base text-slate-300">
                  {project.challenges.length > 0 ? (
                    project.challenges.map((challenge, index) => (
                      <div
                        key={index}
                        className="rounded-xl border border-white/5 bg-[#151c2a] p-4 leading-relaxed"
                      >
                        {challenge}
                      </div>
                    ))
                  ) : (
                    <p className="leading-relaxed text-slate-400">
                      No specific development challenges have been documented
                      yet. Add verified project notes here when available.
                    </p>
                  )}
                </div>
              </section>

              {/* Future Improvements */}
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <ArrowRight className="w-5 h-5 text-[#ccff00]" />
                  Possible Future Improvements
                </h2>
                <div className="p-6 rounded-2xl bg-[#10141e] border border-white/5 space-y-3">
                  {project.futureImprovements.map((improvement, iIdx) => (
                    <div key={iIdx} className="flex items-start gap-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                      <ArrowRight className="w-4 h-4 text-[#ccff00] shrink-0 mt-1" />
                      <span>{improvement}</span>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            {/* Right 4 Cols: Technologies & Sidebar Meta */}
            <div className="md:col-span-4 space-y-6">
              
              {/* Technologies Card */}
              <div className="p-6 rounded-2xl bg-[#10141e] border border-white/10 space-y-4">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-[#ccff00]" />
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.backendTechnologies?.length > 0 && (
                  <div className="border-t border-white/5 pt-4">
                    <h4 className="mb-3 text-sm font-semibold text-slate-200">
                      Backend Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.backendTechnologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-mono text-slate-200"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Verification & Transparency Badge */}
              <div className="p-6 rounded-2xl bg-[#10141e] border border-white/10 space-y-3 text-xs text-slate-400">
                <div className="font-semibold text-white flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#ccff00]" />
                  Repository-verified notes
                </div>
                <p className="leading-relaxed">
                  Project details and technology lists are based on the linked
                  repositories. Missing screenshots, undocumented challenges,
                  and unavailable demos are called out instead of guessed.
                </p>
                <div className="pt-2 border-t border-white/5 font-mono text-[#ccff00]">
                  Author: Aminul Islam (@Shamim-Islam)
                </div>
              </div>

              {/* Navigation CTA */}
              <div className="p-6 rounded-2xl bg-[#141b28] border border-white/10 space-y-3">
                <div className="text-sm font-bold text-white">
                  Interested in this project?
                </div>
                <p className="text-xs text-slate-400">
                  Contact Aminul Islam directly for code walkthroughs or employment queries.
                </p>
                <a
                  href={`mailto:${personalInfo.email}?subject=Inquiry about ${project.title}`}
                  className="block text-center py-2.5 px-4 rounded-xl bg-[#ccff00] text-[#090b0f] font-bold text-xs hover:bg-[#b3e600] transition-colors"
                >
                  Email Aminul About This
                </a>
              </div>

            </div>

          </div>

          {/* Bottom Back Button */}
          <div className="pt-8 border-t border-white/10 flex flex-col items-start gap-4 sm:flex-row sm:justify-between sm:items-center">
            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 hover:text-white font-medium text-sm transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to All Projects</span>
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#ccff00] hover:underline"
            >
              <span>Get in Touch &rarr;</span>
            </Link>
          </div>

        </div>
      </main>

      {/* Footer Minimal */}
      <footer className="bg-[#07090d] border-t border-white/10 py-6 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Aminul Islam (GitHub: @Shamim-Islam). Durbar Portfolio Project.
      </footer>
    </div>
  );
}
