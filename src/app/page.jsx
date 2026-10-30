"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import WebDevSkills from "../components/WebDevSkills";
import SecuritySkills from "../components/SecuritySkills";
import Projects from "../components/Projects";
import EducationExperience from "../components/EducationExperience";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import ResumeModal from "../components/ResumeModal";

export default function Home() {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#090b0f] text-slate-100 flex flex-col">
      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        <Hero onOpenResume={() => setResumeModalOpen(true)} />
        <About />
        <WebDevSkills />
        <SecuritySkills />
        <Projects />
        <EducationExperience />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResume={() => setResumeModalOpen(true)} />

      {/* Temporary Resume Notification Modal */}
      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </div>
  );
}
