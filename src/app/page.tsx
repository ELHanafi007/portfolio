"use client";

import React, { useState } from "react";
import Image from "next/image";
import Navbar from "../components/Navbar";
import ProjectHub from "../components/ProjectCard";
import Timeline from "../components/Timeline";
import Terminal from "../components/Terminal";
import { profileInfo, skillsData } from "./data";

export default function Home() {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  const toggleTerminal = () => {
    setIsTerminalOpen((prev) => !prev);
  };

  return (
    <main className="relative min-h-screen">
      {/* Dynamic Background Blur Orbs */}
      <div className="bg-orbs-container" aria-hidden="true">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      {/* Navigation Header */}
      <Navbar onToggleTerminal={toggleTerminal} />

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-20 px-8 max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
            SYSTEMS & WEB DEPLOYED
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-highlight">
            {profileInfo.name}
          </h1>
          
          <p className="text-lg md:text-xl font-mono text-accent font-semibold">
            {profileInfo.title}
          </p>

          <p className="text-muted leading-relaxed max-w-xl text-sm md:text-base">
            {profileInfo.bio}
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <button 
              onClick={toggleTerminal} 
              className="btn-primary flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="4 17 10 11 4 5"></polyline>
                <line x1="12" y1="19" x2="20" y2="19"></line>
              </svg>
              Initialize Shell
            </button>
            <a 
              href={`mailto:${profileInfo.email}`} 
              className="btn-secondary"
            >
              Email Contact
            </a>
          </div>
        </div>

        {/* Profile Picture with cyber glass frame */}
        <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent to-pink-500 rounded-2xl blur-xl opacity-35 animate-pulse"></div>
          <div className="w-full h-full rounded-2xl overflow-hidden border border-glass-border relative z-10 bg-glass-bg">
            <Image
              src={profileInfo.image}
              alt={profileInfo.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative Corner accents */}
          <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-accent z-20"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-accent z-20"></div>
        </div>
      </section>

      {/* Technical Skill Grid Section */}
      <section id="skills" className="py-20 px-8 max-w-5xl mx-auto">
        <div className="section-header text-center">
          <h2 className="section-title">Technical Competencies</h2>
          <div className="section-subtitle-line"></div>
          <p className="section-desc">Tools, languages, and security systems I work with daily.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((cat) => (
            <div key={cat.category} className="glass-card p-6 flex flex-col">
              <h3 className="text-highlight font-semibold text-lg border-b border-glass-border pb-3 mb-4 flex items-center justify-between">
                <span>{cat.category}</span>
                <span className="text-accent text-xs font-mono">//</span>
              </h3>
              <div className="flex flex-wrap gap-2 flex-grow">
                {cat.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 text-xs rounded bg-white/5 border border-glass-border text-muted font-medium hover:border-accent/40 hover:text-accent transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Project Hub Section */}
      <ProjectHub />

      {/* Timeline Section */}
      <Timeline />

      {/* Footer */}
      <footer className="border-t border-glass-border py-8 px-8 bg-black/40">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div>
            <p className="font-mono text-sm text-highlight">
              &lt;{profileInfo.name.split(" ")[0]} /&gt;
            </p>
            <p className="text-xs text-muted mt-1">
              Built with Next.js & Custom Vanilla Glassmorphic CSS.
            </p>
          </div>
          <div className="flex gap-6">
            <a 
              href={profileInfo.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs text-muted hover:text-accent"
            >
              GitHub
            </a>
            <a 
              href={`mailto:${profileInfo.email}`} 
              className="text-xs text-muted hover:text-accent"
            >
              Email
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Interactive Terminal Trigger */}
      <button 
        onClick={toggleTerminal} 
        className="btn-terminal-float"
        aria-label="Open Terminal Shell"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      </button>

      {/* Interactive terminal overlay */}
      <Terminal isOpen={isTerminalOpen} onClose={toggleTerminal} />
    </main>
  );
}
