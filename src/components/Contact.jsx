"use client";

import { useState } from "react";
import { Mail, Phone, Send, Check, Copy, MessageSquare } from "lucide-react";
import { personalInfo } from "../data/portfolioData";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      setStatus({ type: "error", message: "Unable to copy the email. Please select it manually." });
    }
  };

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    } catch {
      setStatus({ type: "error", message: "Unable to copy the phone number. Please select it manually." });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill out all required fields." });
      return;
    }

    // Direct mailto generation for reliability
    const mailtoLink = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
    setStatus({
      type: "success",
      message: "Opening your email client to send your message directly to Aminul Islam!",
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#090b0f] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#ccff00]/10 border border-[#ccff00]/25 text-[#ccff00] mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>06 // Connect</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 mt-2 text-base sm:text-lg max-w-2xl">
            Whether you have an opportunity, a project to collaborate on, or wish to connect, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Direct Contact Methods */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-5 rounded-2xl bg-[#10141f] border border-white/10 hover:border-[#ccff00]/40 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#ccff00]/10 text-[#ccff00]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Email Address</div>
                    <div className="text-sm sm:text-base font-bold text-white break-all">
                      {personalInfo.email}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex-1 py-2 px-3 rounded-lg bg-[#ccff00] text-[#090b0f] font-semibold text-xs text-center hover:bg-[#b3e600] transition-colors"
                >
                  Send Direct Email
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#ccff00]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-2xl bg-[#10141f] border border-white/10 hover:border-[#ccff00]/40 transition-colors">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-[#ccff00]/10 text-[#ccff00]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Direct Phone / WhatsApp</div>
                    <div className="text-base font-bold text-white font-mono">
                      {personalInfo.phone}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/5">
                <a
                  href={personalInfo.phoneLink}
                  className="flex-1 py-2 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold text-xs text-center transition-colors"
                >
                  Call {personalInfo.phone}
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 transition-colors"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#ccff00]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-bold text-white">Social Profiles</h3>
                <p className="mt-1 text-xs text-slate-400">
                  Links open in a new tab. Missing profile URLs are marked as pending.
                </p>
              </div>
              <SocialLinks
                networks={[
                  "github",
                  "facebook",
                  "linkedin",
                  "tryhackme",
                ]}
              />
            </div>

          </div>

          {/* Interactive Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-8 rounded-2xl bg-[#10141f] border border-white/10 space-y-4"
            >
              <h3 className="text-lg font-bold text-white">
                Send a Message
              </h3>
              <p className="text-xs text-slate-400">
                Responses are routed directly to <span className="text-white font-medium">{personalInfo.email}</span>.
              </p>

              {status && (
                <div
                  className={`p-3 rounded-xl text-xs ${
                    status.type === "success"
                      ? "bg-emerald-500/10 border border-emerald-500/30 text-emerald-300"
                      : "bg-rose-500/10 border border-rose-500/30 text-rose-300"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Connor"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b0f] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-slate-300 mb-1">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="you@domain.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b0f] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-medium text-slate-300 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Inquiry about Web Developer position"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b0f] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-medium text-slate-300 mb-1">
                  Message *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Write your note or project description here..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#090b0f] border border-white/10 text-white placeholder-slate-500 text-sm focus:border-[#ccff00] focus:ring-1 focus:ring-[#ccff00] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-[#ccff00] text-[#090b0f] font-bold text-sm hover:bg-[#b3e600] transition-colors shadow-md hover:shadow-lime-sm"
              >
                <Send className="w-4 h-4" />
                <span>Send Message via Email</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
