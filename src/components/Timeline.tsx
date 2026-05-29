"use client";

import React, { useEffect, useRef } from "react";
import { timelineData } from "../app/data";

export default function Timeline() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="timeline-section">
      <div className="section-header text-center">
        <h2 className="section-title">Timeline & Growth</h2>
        <div className="section-subtitle-line"></div>
        <p className="section-desc">My self-taught journey, failures that built resilience, and professional progression.</p>
      </div>

      <div className="timeline-container">
        <div className="timeline-line"></div>

        {timelineData.map((item, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={idx}
              ref={(el) => {
                itemRefs.current[idx] = el;
              }}
              className={`timeline-item ${isLeft ? "left" : "right"} reveal-scroll`}
            >
              <div className="timeline-dot"></div>
              
              <div className="timeline-content-card glass-card">
                <span className="timeline-year text-accent font-bold">{item.year}</span>
                <h3 className="timeline-item-title text-highlight font-semibold">{item.title}</h3>
                <h4 className="timeline-item-subtitle text-muted text-sm">{item.subtitle}</h4>
                
                <ul className="timeline-details-list">
                  {item.details.map((detail, index) => (
                    <li key={index} className="timeline-detail-item">
                      <span className="timeline-detail-arrow">&gt;</span>
                      <p>{detail}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
