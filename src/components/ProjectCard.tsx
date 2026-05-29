"use client";

import React, { useState, useEffect, useRef } from "react";
import { Project } from "../app/types";
import { projectsData } from "../app/data";

export default function ProjectHub() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const filters = ["All", "Next.js", "React", "TailwindCSS", "Framer Motion"];

  const filteredProjects = activeFilter === "All"
    ? projectsData
    : projectsData.filter((proj) => proj.tech.includes(activeFilter));

  // Hook for fade in scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      { threshold: 0.05 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <section id="projects" className="projects-section">
      <div className="section-header text-center">
        <h2 className="section-title">Featured Engineering</h2>
        <div className="section-subtitle-line"></div>
        <p className="section-desc">A gallery of client systems, platforms, and interactive interfaces built to solve production challenges.</p>
      </div>

      {/* Filter Tabs */}
      <div className="filter-tabs">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="projects-grid">
        {filteredProjects.map((proj, idx) => (
          <div
            key={proj.name}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            className="project-card-wrapper reveal-scroll"
            onClick={() => setSelectedProject(proj)}
          >
            <div className="project-card glass-card">
              <div className="project-card-header">
                <span className="project-index text-accent">0{idx + 1}.</span>
                <span className="project-tech-summary">{proj.tech[0]}</span>
              </div>
              <h3 className="project-card-title text-highlight font-semibold">{proj.name}</h3>
              <p className="project-card-desc text-muted text-sm">{proj.summary}</p>
              
              <div className="project-card-footer">
                <div className="project-card-tags">
                  {proj.tech.slice(0, 3).map((t) => (
                    <span key={t} className="tag-pill text-xs">{t}</span>
                  ))}
                </div>
                <div className="project-card-arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="modal-content glass-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setSelectedProject(null)} aria-label="Close modal">
              &times;
            </button>
            
            <div className="modal-body">
              <span className="modal-category text-accent text-xs font-semibold tracking-widest uppercase">
                {selectedProject.tech.join(" • ")}
              </span>
              <h3 className="modal-title text-highlight font-bold mt-2">{selectedProject.name}</h3>
              
              <div className="modal-divider my-4"></div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-highlight text-sm font-semibold mb-1">Description</h4>
                  <p className="text-muted text-sm leading-relaxed">{selectedProject.description}</p>
                </div>

                <div>
                  <h4 className="text-highlight text-sm font-semibold mb-1">Key Highlight</h4>
                  <p className="text-accent text-sm italic font-medium">{selectedProject.highlight}</p>
                </div>

                <div className="modal-actions pt-4">
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary flex items-center justify-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Visit Live Website
                    </a>
                  )}
                  <button className="btn-secondary" onClick={() => setSelectedProject(null)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
