"use client";

import React, { useState, useEffect, useRef } from "react";
import { profileInfo, projectsData, skillsData, timelineData } from "../app/data";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandLog {
  command: string;
  output: React.ReactNode;
}

export default function Terminal({ isOpen, onClose }: TerminalProps) {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([
    {
      command: "system_init",
      output: (
        <div className="terminal-welcome">
          <p className="text-accent font-bold">Welcome to EL Hanafi Abbaali's Interactive Cyber Shell.</p>
          <p className="text-muted text-sm">Type <span className="text-highlight">help</span> to view available commands. Press Esc to exit.</p>
        </div>
      )
    }
  ]);
  const [showMatrix, setShowMatrix] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Auto scroll to bottom
  useEffect(() => {
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [history]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Listen to Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Matrix digital rain effect
  useEffect(() => {
    if (!showMatrix || !canvasRef.current) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement?.clientWidth || window.innerWidth;
      canvas.height = canvas.parentElement?.clientHeight || window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const columns = Math.floor(canvas.width / 14);
    const rainDrops: number[] = Array(columns).fill(1);
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ☠⚡☣⚙⚒⚓";

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 12, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#00ffcc";
      ctx.font = "14px monospace";

      for (let i = 0; i < rainDrops.length; i++) {
        const text = chars.charAt(Math.floor(Math.random() * chars.length));
        ctx.fillText(text, i * 14, rainDrops[i] * 14);

        if (rainDrops[i] * 14 > canvas.height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
    };

    const interval = setInterval(draw, 30);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [showMatrix]);

  if (!isOpen) return null;

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = "";

    switch (cmd) {
      case "help":
        output = (
          <div className="space-y-1">
            <p className="text-highlight">Available Commands:</p>
            <p><span className="text-accent font-bold">about</span>       - Brief bio profile about El Hanafi</p>
            <p><span className="text-accent font-bold">skills</span>      - Technical competencies & cyber toolkit</p>
            <p><span className="text-accent font-bold">projects</span>    - List all featured fullstack & UI projects</p>
            <p><span className="text-accent font-bold">experience</span>  - View timeline milestones</p>
            <p><span className="text-accent font-bold">contact</span>     - Show contact links & secure messaging endpoints</p>
            <p><span className="text-accent font-bold">matrix</span>      - Trigger visual matrix digital rain background</p>
            <p><span className="text-accent font-bold">cat flag.txt</span> - Secret flag file (Cybersecurity check)</p>
            <p><span className="text-accent font-bold">clear</span>       - Clear shell console logs</p>
            <p><span className="text-accent font-bold">exit</span>        - Close terminal overlay</p>
          </div>
        );
        break;

      case "about":
        output = (
          <div className="space-y-2">
            <p className="text-highlight font-semibold">{profileInfo.name}</p>
            <p className="text-xs text-muted">{profileInfo.title} | {profileInfo.subtitle}</p>
            <p className="text-sm leading-relaxed">{profileInfo.bio}</p>
          </div>
        );
        break;

      case "skills":
        output = (
          <div className="space-y-3">
            {skillsData.map((cat, idx) => (
              <div key={idx}>
                <p className="text-highlight text-sm font-bold">&gt;&gt; {cat.category}</p>
                <p className="text-sm">{cat.items.join("  |  ")}</p>
              </div>
            ))}
          </div>
        );
        break;

      case "projects":
        output = (
          <div className="space-y-2">
            <p className="text-highlight font-semibold">Featured Projects:</p>
            {projectsData.map((proj, idx) => (
              <div key={idx} className="border-l-2 border-accent pl-3 my-1">
                <p className="font-bold">{proj.name}</p>
                <p className="text-xs text-muted">{proj.summary}</p>
                <p className="text-xs">Stack: <span className="text-accent">{proj.tech.join(", ")}</span></p>
              </div>
            ))}
          </div>
        );
        break;

      case "experience":
        output = (
          <div className="space-y-3">
            <p className="text-highlight font-semibold">Timeline Milestones:</p>
            {timelineData.map((item, idx) => (
              <div key={idx}>
                <p className="font-bold text-accent">{item.year} - {item.title}</p>
                <p className="text-xs italic text-muted">{item.subtitle}</p>
                <ul className="list-disc list-inside text-xs pl-2 space-y-1">
                  {item.details.map((d, i) => <li key={i}>{d}</li>)}
                </ul>
              </div>
            ))}
          </div>
        );
        break;

      case "contact":
        output = (
          <div className="space-y-1">
            <p>GitHub: <a href={profileInfo.github} target="_blank" rel="noopener noreferrer" className="text-accent underline hover:text-highlight">{profileInfo.github}</a></p>
            <p>Email: <a href={`mailto:${profileInfo.email}`} className="text-accent underline hover:text-highlight">{profileInfo.email}</a></p>
          </div>
        );
        break;

      case "matrix":
        setShowMatrix(!showMatrix);
        output = <p className="text-accent">Matrix Rain mode {!showMatrix ? "ENABLED" : "DISABLED"}</p>;
        break;

      case "cat flag.txt":
        output = (
          <div className="border border-red-500/30 bg-red-950/20 p-3 rounded">
            <p className="text-red-400 font-bold">FLAG_ACQUIRED: {"FLAG{1337_CYBER_WARRIOR_PISCINE_SUCCESS}"}</p>
            <p className="text-xs text-muted mt-1">Found secure flag in memory slot. Persistence, logic, and self-study conquer any piscine.</p>
          </div>
        );
        break;

      case "clear":
        setHistory([]);
        setInput("");
        return;

      case "exit":
        onClose();
        setInput("");
        return;

      default:
        output = <p className="text-red-400">Command not found: '{cmd}'. Type <span className="text-highlight">help</span> for commands.</p>;
        break;
    }

    setHistory((prev) => [...prev, { command: input, output }]);
    setInput("");
  };

  return (
    <div className="terminal-overlay" onClick={onClose}>
      <div className="terminal-window" onClick={(e) => e.stopPropagation()}>
        {/* Terminal Header */}
        <div className="terminal-header">
          <div className="terminal-dots">
            <span className="dot dot-close" onClick={onClose}></span>
            <span className="dot dot-minimize"></span>
            <span className="dot dot-maximize"></span>
          </div>
          <span className="terminal-title">cyber-shell // elhanafi@abbaali:~</span>
        </div>

        {/* Terminal Console Viewport */}
        <div className="terminal-body">
          {showMatrix && <canvas ref={canvasRef} className="terminal-matrix-canvas" />}
          
          <div className="terminal-content">
            {history.map((log, idx) => (
              <div key={idx} className="space-y-1">
                {log.command !== "system_init" && (
                  <div className="flex items-center text-sm font-semibold">
                    <span className="text-accent mr-2">➜</span>
                    <span className="text-muted mr-2">~</span>
                    <span>{log.command}</span>
                  </div>
                )}
                <div className="pl-6 text-sm text-foreground/90 whitespace-pre-wrap">{log.output}</div>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>
        </div>

        {/* Input prompt */}
        <form onSubmit={handleCommand} className="terminal-footer">
          <span className="text-accent font-semibold mr-2">➜</span>
          <span className="text-muted mr-2">~</span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type a command..."
            autoFocus
          />
        </form>
      </div>
    </div>
  );
}
