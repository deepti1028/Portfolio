import React, { useState, useEffect } from "react";
import { Terminal as TerminalIcon, ShieldAlert, Cpu, Award, ArrowRight } from "lucide-react";
import { resumeData } from "../data";

export default function Hero() {
  const [typedTitle, setTypedTitle] = useState("");
  const titles = ["Software Engineer", "Test Automation Specialist", "Full-Stack Developer"];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing effect variables
  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === currentTitle.length) {
      // Pause at full text
      typingSpeed = 2000;
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
      typingSpeed = 300;
    }

    const timer = setTimeout(() => {
      setTypedTitle(
        currentTitle.substring(0, isDeleting ? charIndex - 1 : charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  // Terminal Simulated Playwright Script logs
  const [terminalLogs, setTerminalLogs] = useState([]);
  const logsList = [
    { text: "$ npx playwright test --project=chromium", color: "text-gray-400" },
    { text: "ℹ Loading Playwright configurations...", color: "text-cyan-400" },
    { text: "▶ Running E2E test suite in parallel (4 workers)...", color: "text-purple-400" },
    { text: "✔ [PASS] PB-Health: Secure login auth validation (0.45s)", color: "text-emerald-400" },
    { text: "✔ [PASS] PB-Health: CI pipeline trigger integrity check (0.82s)", color: "text-emerald-400" },
    { text: "✔ [PASS] Zscaler: FastAPI endpoint command executions (0.61s)", color: "text-emerald-400" },
    { text: "✔ [PASS] Zscaler: Checksum backup script generation (0.33s)", color: "text-emerald-400" },
    { text: "✔ [PASS] Trade-Alert: Groq LLM news sentiment API (1.20s)", color: "text-emerald-400" },
    { text: "✔ [PASS] Concadmic: Firebase auth state persistent check (0.50s)", color: "text-emerald-400" },
    { text: "ℹ E2E Run completed. 6 tests passed, 0 failed.", color: "text-green-300 font-bold" },
    { text: "📊 Automation efficiency: +10 Hours saved/week!", color: "text-yellow-400" },
    { text: "🚀 Status: READY FOR STABLE DEPLOYMENT", color: "text-cyan-300" },
    { text: "$ _", color: "text-gray-400 typing-cursor" }
  ];

  useEffect(() => {
    let currentLogIndex = 0;
    setTerminalLogs([logsList[0]]);

    const interval = setInterval(() => {
      currentLogIndex++;
      if (currentLogIndex < logsList.length) {
        setTerminalLogs((prev) => {
          // Remove cursor from previous line
          const cleaned = prev.map(log => {
            if (log.text.includes("typing-cursor")) {
              return { ...log, text: log.text.replace(" typing-cursor", "").replace("_", "") };
            }
            return log;
          });
          return [...cleaned, logsList[currentLogIndex]];
        });
      } else {
        // Reset terminal loop
        currentLogIndex = 0;
        setTerminalLogs([logsList[0]]);
      }
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 md:pt-32 pb-12 px-4 md:px-8 overflow-hidden"
    >
      {/* Background Accent Mesh Glows */}
      <div className="radial-overlay top-[20%] left-[10%] bg-violet-600" />
      <div className="radial-overlay bottom-[20%] right-[10%] bg-cyan-600" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-12 items-center relative z-10">
        
        {/* Left Column: Heading, Typed Title, Call to Action */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Cyberpunk Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 mb-6">
            <Cpu size={14} className="text-[var(--color-primary)] animate-pulse" />
            <span className="text-xs font-mono text-violet-300 tracking-wider uppercase">Systems & Test Automation</span>
          </div>

          {/* Headline */}
          <h1 className="text-[var(--size-h1)] font-extrabold leading-none tracking-tight mb-2 text-white">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-violet-400 to-[var(--color-secondary)] drop-shadow-[0_0_20px_rgba(139,92,246,0.2)]">{resumeData.personal.name}</span>
          </h1>

          {/* Subheading: Dynamic Typing */}
          <div className="h-10 md:h-12 flex items-center mb-6">
            <h2 className="text-[var(--size-h3)] font-mono text-[var(--color-secondary)] font-semibold flex items-center">
              <span>{typedTitle}</span>
              <span className="inline-block w-[3px] h-[1.5em] bg-[var(--color-secondary)] ml-1 animate-pulse" />
            </h2>
          </div>

          {/* Summary paragraph */}
          <p className="text-base md:text-lg text-gray-400 max-w-xl mb-8 leading-relaxed">
            {resumeData.personal.summary}
          </p>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center w-full sm:w-auto">
            <a href="#contact" className="btn-cyber flex items-center justify-center gap-2">
              <span>Initialize Connection</span>
              <ArrowRight size={16} />
            </a>
            
            <a 
              href={resumeData.personal.resumeDrive} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 rounded-lg border border-[var(--color-glass-border)] bg-[rgba(255,255,255,0.02)] text-sm font-mono text-gray-300 hover:text-white hover:border-[var(--color-secondary)] hover:bg-[rgba(6,182,212,0.03)] transition-all duration-300 text-center flex items-center justify-center"
            >
              <span>Download credentials.pdf</span>
            </a>
          </div>
        </div>

        {/* Right Column: High-fidelity Live Terminal Runner */}
        <div className="lg:col-span-5 w-full">
          <div className="terminal-box glow-violet">
            <div className="terminal-header">
              <div className="flex items-center">
                <span className="terminal-dot red" />
                <span className="terminal-dot yellow" />
                <span className="terminal-dot green" />
              </div>
              <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                <TerminalIcon size={12} className="text-emerald-400" />
                playwright-runner.js
              </span>
            </div>
            
            <div className="terminal-body h-80 min-h-80 flex flex-col justify-start text-left font-mono">
              {terminalLogs.map((log, index) => (
                <div key={index} className={`mb-1.5 ${log.color}`}>
                  {log.text}
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
