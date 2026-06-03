import { useState, useEffect } from "react";
import { Terminal as TerminalIcon, Cpu, ArrowRight } from "lucide-react";
import { resumeData } from "../data";

const TITLES = ["iOS Developer", "AI Engineer", "Full-Stack Dev", "Test Automator"];

const LOGS_LIST = [
  { text: '$ git commit -m "fix: finally found the bug"', color: "text-gray-400" },
  { text: "[main a3f91c2] fix: finally found the bug", color: "text-gray-500" },
  { text: " It was a missing await. 45 minutes. A missing await.", color: "text-orange-400" },
  { text: "", color: "text-gray-400" },
  { text: "$ git push origin main", color: "text-gray-400" },
  { text: "Writing objects: 100% ✓", color: "text-gray-500" },
  { text: "", color: "text-gray-400" },
  { text: "$ gh run watch", color: "text-gray-400" },
  { text: "  ✓ lint         4s", color: "text-emerald-400" },
  { text: "  ✓ tests        11s   # 800+ LC problems. tests don't scare me.", color: "text-emerald-400" },
  { text: "  ✓ build        8s", color: "text-emerald-400" },
  { text: "  ✓ deploy       9s", color: "text-emerald-400" },
  { text: "", color: "text-gray-400" },
  { text: "All checks passed. 🍵 Matcha earned.", color: "text-green-300 font-bold" },
  { text: "$ _", color: "text-gray-400 typing-cursor" },
];

export default function Hero() {
  const [typedTitle, setTypedTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState(() => [LOGS_LIST[0]]);

  // Typing effect
  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    let typingSpeed = isDeleting ? 40 : 100;

    if (!isDeleting && charIndex === currentTitle.length) {
      typingSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      typingSpeed = 300;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex === currentTitle.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
      } else {
        setTypedTitle(
          currentTitle.substring(0, isDeleting ? charIndex - 1 : charIndex + 1)
        );
        setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, titleIndex]);

  // Terminal simulated log runner loop
  useEffect(() => {
    let currentLogIndex = 0;

    const interval = setInterval(() => {
      currentLogIndex++;
      if (currentLogIndex < LOGS_LIST.length) {
        setTerminalLogs((prev) => {
          const cleaned = prev.map(log => {
            if (log.text.includes("typing-cursor")) {
              return { ...log, text: log.text.replace(" typing-cursor", "").replace("_", "") };
            }
            return log;
          });
          return [...cleaned, LOGS_LIST[currentLogIndex]];
        });
      } else {
        currentLogIndex = 0;
        setTerminalLogs([LOGS_LIST[0]]);
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

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
        
        {/* Left Column: Heading, Typed Title, Call to Action */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* Cyberpunk Badge */}
          {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-500/20 bg-violet-500/5 mb-6">
            <Cpu size={14} className="text-[var(--color-primary)] animate-pulse" />
            <span className="text-xs font-mono text-violet-300 tracking-wider uppercase">Systems & Test Automation</span>
          </div> */}

          {/* Headline */}
          <h1 className="text-[var(--size-h1)] font-extrabold leading-[1.1] tracking-tight mb-2 text-white">
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
                git-push.sh
              </span>
            </div>
            
            <div className="terminal-body h-80 min-h-80 flex flex-col justify-start text-left font-mono text-xs whitespace-pre-wrap break-words overflow-y-auto">
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
