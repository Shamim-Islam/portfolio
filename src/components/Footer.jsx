"use client";

import Link from "next/link";
import Image from "next/image";
import { Github, Mail, Phone, ArrowUp, Shield } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function Footer({ onOpenResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#07090d] border-t border-white/10 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10">
          {/* Identity Column */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src="/portrait.jpg"
                alt="Portrait of Aminul Islam"
                width={32}
                height={32}
                className="h-8 w-8 rounded-full border border-[#ccff00]/40 object-cover"
              />
              <span className="font-bold text-white text-lg">
                {personalInfo.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              Aspiring Full-Stack Web Developer &amp; Web Security Learner. Dedicated to building responsive, accessible web solutions with verified skills.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Email Address"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href={personalInfo.phoneLink}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                aria-label="Direct Phone"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3">
              Section Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              <Link href="/#about" className="hover:text-[#ccff00] transition-colors">
                About Me
              </Link>
              <Link href="/#skills" className="hover:text-[#ccff00] transition-colors">
                Dev Skills
              </Link>
              <Link href="/#security" className="hover:text-[#ccff00] transition-colors">
                Security
              </Link>
              <Link href="/#projects" className="hover:text-[#ccff00] transition-colors">
                Projects
              </Link>
              <Link href="/#education" className="hover:text-[#ccff00] transition-colors">
                Education
              </Link>
              <Link href="/#contact" className="hover:text-[#ccff00] transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Transparency & Status */}
          <div className="md:col-span-3 space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider text-white font-semibold mb-3">
              Portfolio Integrity
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Showcasing owner-verified projects and an active web security learning journey. No unverified certifications or achievement claims.
            </p>
            <div className="pt-2">
              <button
                onClick={onOpenResume}
                className="text-xs font-mono text-[#ccff00] hover:underline flex items-center gap-1"
              >
                <span>Request a Resume</span> &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Aminul Islam (GitHub:{" "}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-[#ccff00] transition-colors"
            >
              @Shamim-Islam
            </a>
            ). All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-[#ccff00] transition-colors text-xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
