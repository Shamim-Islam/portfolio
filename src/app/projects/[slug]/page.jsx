import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
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

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project Not Found | Aminul Islam",
    };
  }
  return {
    title: `${project.title} | Case Study - Aminul Islam`,
    description: project.tagline,
  };
}

export default function ProjectDetailsPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

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
              {project.isPlaceholder ? (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-amber-500/10 border border-amber-500/30 text-amber-300">
                  Editable 3rd Project Placeholder
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-300">
                  Verified Portfolio Build
                </span>
              )}
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
                  <span>Live URL: Draft (Add URL when deployed to Vercel)</span>
                </div>
              )}
            </div>
          </div>

          {/* Screenshot / Replaceable Visual Container */}
          <div className="relative rounded-2xl bg-[#111622] border border-white/10 overflow-hidden p-6 sm:p-12 text-center flex flex-col items-center justify-center min-h-[300px] sm:min-h-[400px]">
            <div className="absolute inset-0 bg-grid-pattern opacity-25" />
            <div className="absolute -top-20 -left-20 w-60 h-60 bg-[#ccff00]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 w-16 h-16 rounded-2xl bg-black/60 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00] mb-4 shadow-lime-sm">
              <Code2 className="w-8 h-8" />
            </div>

            <h3 className="relative z-10 text-xl font-bold text-white mb-2">
              {project.title} Interface Preview
            </h3>

            <p className="relative z-10 text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
              {project.imagePlaceholderText}
            </p>

            <div className="relative z-10 px-4 py-2 rounded-xl bg-black/70 border border-white/15 text-xs text-slate-300 font-mono">
              💡 Tip: Place your screenshot in <code className="text-[#ccff00]">/public/projects/{project.slug}.png</code>
            </div>
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

              {/* Engineering Challenges & Future Improvements */}
              <section className="space-y-3">
                <h2 className="text-xl font-bold text-white flex items-center gap-2">
                  <Compass className="w-5 h-5 text-[#ccff00]" />
                  Engineering Challenges &amp; Future Improvements
                </h2>
                <div className="p-6 rounded-2xl bg-[#10141e] border border-white/5 space-y-4 text-sm sm:text-base text-slate-300">
                  {project.challenges.map((ch, cIdx) => (
                    <div key={cIdx} className="p-4 rounded-xl bg-[#151c2a] border border-white/5 leading-relaxed">
                      {ch}
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
              </div>

              {/* Verification & Transparency Badge */}
              <div className="p-6 rounded-2xl bg-[#10141e] border border-white/10 space-y-3 text-xs text-slate-400">
                <div className="font-semibold text-white flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-[#ccff00]" />
                  Strict Integrity Standard
                </div>
                <p className="leading-relaxed">
                  All details here represent genuine implementation specifications. If any links are draft, they are highlighted clearly rather than fabricating live addresses.
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
          <div className="pt-8 border-t border-white/10 flex justify-between items-center">
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
