import React, { useState, useEffect } from "react";
import { Menu, X, MousePointerClick, FileText, Github, Linkedin } from "lucide-react";
import { resumeData } from "../data";

export default function Navbar({ cursorEnabled, setCursorEnabled }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Nav Links
  const navLinks = [
    { name: "Terminal", href: "#home" },
    { name: "Stats", href: "#stats" },
    { name: "Pipeline", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Connect", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Toggle navbar border glow on scroll
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check current visible section to highlight active nav link
      const sections = ["home", "stats", "experience", "skills", "projects", "contact"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 px-4 md:px-8 py-4 pointer-events-none">
      <nav className="mx-auto max-w-7xl glass-card pointer-events-auto flex items-center justify-between px-6 py-3 transition-all duration-300" style={{ 
        borderRadius: "24px",
        borderColor: scrolled ? "rgba(139, 92, 246, 0.2)" : "rgba(255, 255, 255, 0.08)",
        backgroundColor: scrolled ? "rgba(10, 10, 20, 0.85)" : "rgba(10, 10, 20, 0.55)"
      }}>
        {/* Logo / Branding */}
        <a href="#home" className="flex items-center gap-2 text-lg font-bold font-mono tracking-wider group text-white">
          <span className="text-[var(--color-primary)] font-black group-hover:text-[var(--color-secondary)] transition-colors">&lt;</span>
          <span>{resumeData.personal.name}</span>
          <span className="text-[var(--color-primary)] font-black group-hover:text-[var(--color-secondary)] transition-colors">/&gt;</span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const id = link.href.substring(1);
            const isActive = activeSection === id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-mono text-sm tracking-wide transition-colors relative py-1 ${
                  isActive 
                    ? "text-[var(--color-primary)]" 
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded" />
                )}
              </a>
            );
          })}
        </div>

        {/* Controls (Cursor Toggle + Drive Resume) */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Cursor Toggle Button */}
          <button
            onClick={() => setCursorEnabled(!cursorEnabled)}
            className={`p-2 rounded-lg border transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-xs font-mono ${
              cursorEnabled
                ? "bg-[rgba(6,182,212,0.1)] border-[var(--color-secondary)] text-[var(--color-secondary)]"
                : "border-[var(--color-glass-border)] text-gray-400 hover:text-white"
            }`}
            title="Toggle custom glow cursor"
          >
            <MousePointerClick size={16} />
            <span>Cursor</span>
          </button>

          {/* Download/View Resume */}
          <a
            href={resumeData.personal.resumeDrive}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cyber py-2 px-4 text-xs font-mono"
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          {/* Mobile Cursor Toggle */}
          <button
            onClick={() => setCursorEnabled(!cursorEnabled)}
            className={`p-2 rounded-lg border transition-all text-gray-400 ${
              cursorEnabled ? "border-[var(--color-secondary)] text-[var(--color-secondary)]" : "border-transparent"
            }`}
          >
            <MousePointerClick size={18} />
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-gray-400 hover:text-white"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-7xl glass-card pointer-events-auto p-4 flex flex-col gap-4 animate-fade-in max-h-[85vh] overflow-y-auto" style={{ borderRadius: "16px" }}>
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const id = link.href.substring(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`font-mono text-sm tracking-wide py-2 px-3 rounded-lg ${
                    isActive 
                      ? "bg-[rgba(139,92,246,0.1)] text-[var(--color-primary)] font-bold" 
                      : "text-gray-400 hover:bg-[rgba(255,255,255,0.03)] hover:text-white"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          <div className="border-t border-[var(--color-glass-border)] pt-3 flex items-center justify-between gap-4">
            <div className="flex gap-4">
              <a href={resumeData.personal.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href={resumeData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>

            <a
              href={resumeData.personal.resumeDrive}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
              className="btn-cyber py-2 px-4 text-xs font-mono"
            >
              <FileText size={14} />
              <span>Resume</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
