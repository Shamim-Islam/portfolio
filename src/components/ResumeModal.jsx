"use client";

import { useEffect, useState } from "react";
import { X, FileText, Mail, ExternalLink, Check, AlertCircle } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export default function ResumeModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#11151e] border border-white/10 p-6 sm:p-8 shadow-2xl text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
          aria-label="Close resume status dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Icon */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-xl bg-[#ccff00]/10 border border-[#ccff00]/30 flex items-center justify-center text-[#ccff00]">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-500/10 border border-amber-500/30 text-amber-300">
              <AlertCircle className="w-3 h-3" />
              Notice: Under Revision
            </div>
            <h3 id="modal-title" className="text-xl font-bold text-white mt-1">
              Resume In Preparation
            </h3>
          </div>
        </div>

        {/* Content */}
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
          Thank you for your interest! <span className="font-semibold text-white">Aminul Islam&apos;s</span> formal CV is currently being updated with recent development project metrics (Fit-Log, BazarDor) and web application security coursework.
        </p>

        <div className="bg-[#0b0e14] rounded-xl p-4 border border-white/5 mb-6 space-y-2 text-xs sm:text-sm text-slate-300">
          <div className="flex justify-between items-center py-1 border-b border-white/5">
            <span className="text-slate-400">Candidate Name:</span>
            <span className="text-white font-medium">Aminul Islam</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-white/5">
            <span className="text-slate-400">Current Focus:</span>
            <span className="text-[#ccff00] font-medium">Web Developer | Web Security Learner</span>
          </div>
          <div className="flex justify-between items-center py-1 border-b border-white/5">
            <span className="text-slate-400">Verified GitHub:</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#ccff00] hover:underline flex items-center gap-1"
            >
              github.com/Shamim-Islam <ExternalLink className="w-3 h-3" />
            </a>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-slate-400">Status:</span>
            <span className="text-emerald-400 font-medium">Available for Opportunities</span>
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="space-y-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <a
              href={`mailto:${personalInfo.email}?subject=Inquiry regarding Web Developer opportunity`}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#ccff00] text-[#090b0f] font-semibold hover:bg-[#b3e600] transition-colors text-sm text-center"
            >
              <Mail className="w-4 h-4" />
              Email Aminul
            </a>

            <button
              onClick={copyEmail}
              className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-slate-200 text-sm font-medium"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-[#ccff00]" />
                  <span>Email Copied!</span>
                </>
              ) : (
                <>
                  <span>Copy Email</span>
                </>
              )}
            </button>
          </div>

          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-xl bg-transparent border border-white/10 hover:border-[#ccff00]/50 hover:text-[#ccff00] transition-colors text-slate-300 text-xs text-center"
          >
            <span>Review Live Code on GitHub (@Shamim-Islam)</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}
