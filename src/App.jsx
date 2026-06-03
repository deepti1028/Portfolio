import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperiencePipeline from "./components/ExperiencePipeline";
import SkillsGrid from "./components/SkillsGrid";
import Projects from "./components/Projects";
import ContactTerminal from "./components/ContactTerminal";
import CustomCursor from "./components/CustomCursor";
import { Github, Linkedin, Code, Award, Copyright, Heart } from "lucide-react";
import { resumeData } from "./data";

export default function App() {
  const [cursorEnabled, setCursorEnabled] = useState(true);

  // Disable browser scroll memory restoration and force scroll to top on load/refresh
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, []);

  // Scroll reveals trigger
  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Trigger once
        }
      });
    };

    const observerOptions = {
      root: null,
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const scrollTargets = document.querySelectorAll(".reveal-on-scroll");
    
    scrollTargets.forEach(target => observer.observe(target));

    return () => {
      scrollTargets.forEach(target => observer.unobserve(target));
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[var(--color-bg)] selection:bg-[rgba(139,92,246,0.25)] selection:text-white">
      
      {/* Global Neon Custom Trailing Cursor */}
      <CustomCursor enabled={cursorEnabled} />

      {/* Floating Centered Glassmorphic Navbar */}
      <Navbar cursorEnabled={cursorEnabled} setCursorEnabled={setCursorEnabled} />

      {/* Single Page Sections */}
      <main className="relative">
        <Hero />
        <ExperiencePipeline />
        <SkillsGrid />
        <Projects />
        <ContactTerminal />
      </main>

      {/* High-fidelity Footer */}
      <footer className="border-t border-[var(--color-glass-border)] bg-[rgba(5,5,10,0.95)] py-12 px-4 md:px-8 relative overflow-hidden">
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          
          {/* Logo & copyright */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#home" className="flex items-center gap-2 text-md font-bold font-mono tracking-wider text-white mb-2">
              <span className="text-[var(--color-primary)] font-black">&lt;</span>
              <span>{resumeData.personal.name}</span>
              <span className="text-[var(--color-primary)] font-black">/&gt;</span>
            </a>
            <p className="text-xs font-mono text-gray-500 flex items-center gap-1.5 justify-center md:justify-start">
              <Copyright size={12} />
              <span>2026 Deepti Jain. Transmitted with integrity.</span>
            </p>
          </div>

          {/* Core statement */}
          <p className="text-xs font-mono text-gray-500 flex flex-wrap items-center justify-center text-center md:text-left gap-1.5">
            <span>Connecting the dots from raw data to scalable, full-stack platforms with</span>
            <Heart size={10} className="text-red-500 fill-current animate-pulse inline-block" />
            <span>and a lot of matcha. 🍵</span>
          </p>

          {/* Social Profiles */}
          <div className="flex items-center gap-4">
            <a 
              href={resumeData.personal.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full border border-[var(--color-glass-border)] bg-[rgba(255,255,255,0.01)] flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--color-primary)] hover:scale-105 transition-all duration-300"
              title="GitHub Profile"
            >
              <Github size={16} />
            </a>

            <a 
              href={resumeData.personal.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full border border-[var(--color-glass-border)] bg-[rgba(255,255,255,0.01)] flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--color-secondary)] hover:scale-105 transition-all duration-300"
              title="LinkedIn Profile"
            >
              <Linkedin size={16} />
            </a>

            <a 
              href={resumeData.personal.leetcode} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full border border-[var(--color-glass-border)] bg-[rgba(255,255,255,0.01)] flex items-center justify-center text-gray-400 hover:text-white hover:border-yellow-500 hover:scale-105 transition-all duration-300"
              title="LeetCode Profile"
            >
              <Code size={16} />
            </a>

            <a 
              href={resumeData.personal.gfg} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full border border-[var(--color-glass-border)] bg-[rgba(255,255,255,0.01)] flex items-center justify-center text-gray-400 hover:text-white hover:border-[var(--color-success)] hover:scale-105 transition-all duration-300"
              title="GeeksforGeeks Profile"
            >
              <Award size={16} />
            </a>
          </div>

        </div>
      </footer>

    </div>
  );
}
