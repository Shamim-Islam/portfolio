import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowUpRight,
  BookOpen,
  CheckCircle,
  FlaskConical,
  Shield,
} from "lucide-react";
import { personalInfo, securityLearningProjects } from "../../../data/portfolioData";

export function generateStaticParams() {
  return securityLearningProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = securityLearningProjects.find((item) => item.slug === slug);

  return {
    title: project
      ? `${project.title} | Security Learning - ${personalInfo.name}`
      : "Security Learning Project | Portfolio",
    description: project?.summary || "Security learning project details.",
  };
}

export default async function SecurityProjectDetailsPage({ params }) {
  const { slug } = await params;
  const project = securityLearningProjects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#090b0f] text-slate-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#090b0f]/90 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/#security-projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition-colors hover:text-[#ccff00]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Security Learning
          </Link>
          <Shield className="h-5 w-5 text-emerald-400" />
        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-10 px-4 py-12 sm:px-6 sm:py-16">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-mono text-emerald-300">
              Security Learning Project
            </span>
            <span className="rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 text-xs font-mono text-amber-300">
              {project.status}
            </span>
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
            {project.summary}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <DetailCard icon={BookOpen} title="Learning Objective">
            {project.objective}
          </DetailCard>
          <DetailCard icon={FlaskConical} title="Lab Environment">
            {project.environment}
          </DetailCard>
        </div>

        <section className="grid gap-6 md:grid-cols-2">
          <ListCard title="Tools Used" items={project.tools} />
          <ListCard title="Concepts Studied" items={project.concepts} />
        </section>

        <section className="rounded-2xl border border-white/10 bg-[#10141e] p-6">
          <h2 className="mb-3 text-xl font-bold text-white">What I Learned</h2>
          <p className="leading-relaxed text-slate-300">{project.learned}</p>
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <DetailCard icon={FlaskConical} title="Screenshots or Evidence">
            {project.evidence || "Add screenshots or other non-sensitive evidence when available."}
          </DetailCard>
          <DetailCard icon={BookOpen} title="References">
            {project.references.length
              ? project.references.map((reference) => (
                  <a
                    key={reference.url}
                    href={reference.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#ccff00] hover:text-white"
                  >
                    {reference.title}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                ))
              : "Add official references used for the lab or study notes."}
          </DetailCard>
        </section>

        <div className="border-t border-white/10 pt-8">
          <p className="mb-4 text-xs leading-relaxed text-slate-500">
            This page is reserved for authorized learning work. It should never
            contain real targets, unauthorized testing claims, sensitive data,
            or fabricated vulnerability reports.
          </p>
          <Link
            href="/#security"
            className="inline-flex items-center gap-2 rounded-xl bg-[#ccff00] px-4 py-2.5 text-sm font-bold text-[#090b0f] transition-colors hover:bg-[#b3e600]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Web Security
          </Link>
        </div>
      </main>
    </div>
  );
}

function DetailCard({ icon: Icon, title, children }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#10141e] p-6">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-bold text-white">
        <Icon className="h-5 w-5 text-[#ccff00]" />
        {title}
      </h2>
      <div className="text-sm leading-relaxed text-slate-300">{children}</div>
    </section>
  );
}

function ListCard({ title, items }) {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#10141e] p-6">
      <h2 className="mb-4 text-lg font-bold text-white">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-slate-300">
            <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#ccff00]" />
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
