import React, { useState } from "react";
import { resumeData } from "../data";

// Custom vector-based neon icons representing each technology
const TechIcon = ({ name }) => {
  const normName = name.toLowerCase();

  if (normName.includes("c/c++")) {
    return (
      <svg className="w-10 h-10 text-violet-400 filter drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,5 90,25 90,75 50,95 10,75 10,25" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
        <path d="M45,35 A15,15 0 1,0 45,65" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <path d="M60,50 H76 M68,42 V58 M78,50 H88 M83,45 V55" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }
  if (normName.includes("python")) {
    return (
      <svg className="w-10 h-10 text-cyan-400 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,10 C30,10 32,25 32,25 H42 V30 H28 C18,30 15,38 15,48 C15,58 22,62 32,62 H38 V58 C38,58 35,46 48,46 H60 C60,46 72,46 72,32 C72,18 62,10 50,10 Z" fill="currentColor" opacity="0.8" />
        <path d="M50,90 C70,90 68,75 68,75 H58 V70 H72 C82,70 85,62 85,52 C85,42 78,38 68,38 H62 V42 C62,42 65,54 52,54 H40 C40,54 28,54 28,68 C28,82 38,90 50,90 Z" fill="currentColor" />
        <circle cx="38" cy="18" r="3" fill="#000" />
        <circle cx="62" cy="82" r="3" fill="#000" />
      </svg>
    );
  }
  if (normName.includes("java")) {
    return (
      <svg className="w-10 h-10 text-amber-500 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35,65 C40,68 60,68 65,65 M30,75 C40,80 60,80 70,75 M25,83 C35,88 65,88 75,83" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        <path d="M48,15 C48,15 40,30 46,45 C50,55 60,52 52,62" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        <path d="M58,10 C58,10 52,22 56,35 C60,45 68,42 62,55" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  if (normName.includes("javascript")) {
    return (
      <svg className="w-10 h-10 text-yellow-400 filter drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="80" height="80" rx="8" stroke="currentColor" strokeWidth="6" />
        <path d="M40,75 C40,79 36,81 30,81 C24,81 22,78 22,75 M46,55 H54 M50,55 V81 C50,81 48,82 43,82" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
        <path d="M62,70 C65,72 68,73 72,73 C76,73 78,71 78,68 C78,65 74,64 70,62 C64,60 62,57 62,52 C62,46 68,43 75,43 C79,43 83,45 85,47" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      </svg>
    );
  }
  if (normName.includes("typescript")) {
    return (
      <svg className="w-10 h-10 text-sky-500 filter drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="80" height="80" rx="8" stroke="currentColor" strokeWidth="6" />
        <path d="M28,35 H44 M36,35 V75" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
        <path d="M52,65 C55,67 58,68 62,68 C66,68 68,66 68,63 C68,60 64,59 60,57 C54,55 52,52 52,47 C52,41 58,38 65,38 C69,38 73,40 75,42" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
      </svg>
    );
  }
  if (normName.includes("react")) {
    return (
      <svg className="w-10 h-10 text-cyan-300 filter drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(30 50 50)" stroke="currentColor" strokeWidth="5" />
        <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(90 50 50)" stroke="currentColor" strokeWidth="5" />
        <ellipse cx="50" cy="50" rx="8" ry="20" transform="rotate(150 50 50)" stroke="currentColor" strokeWidth="5" />
        <circle cx="50" cy="50" r="5" fill="currentColor" />
      </svg>
    );
  }
  if (normName.includes("fastapi")) {
    return (
      <svg className="w-10 h-10 text-emerald-400 filter drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" stroke="currentColor" strokeWidth="5" />
        <polygon points="55,20 25,50 48,50 42,80 75,45 52,45" fill="currentColor" stroke="currentColor" strokeWidth="3" />
      </svg>
    );
  }
  if (normName.includes("playwright")) {
    return (
      <svg className="w-10 h-10 text-violet-400 filter drop-shadow-[0_0_8px_rgba(139,92,246,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" />
        <path d="M35,38 L65,50 L35,62 Z" fill="currentColor" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
        <path d="M60,35 C68,42 68,58 60,65" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </svg>
    );
  }
  if (normName.includes("pytest")) {
    return (
      <svg className="w-10 h-10 text-green-400 filter drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="15" width="70" height="70" rx="10" stroke="currentColor" strokeWidth="6" />
        <path d="M30,50 L42,62 L70,34" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (normName.includes("mysql") || normName.includes("postgresql")) {
    return (
      <svg className="w-10 h-10 text-sky-400 filter drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20,25 C20,15 80,15 80,25 M20,50 C20,40 80,40 80,50 M20,75 C20,65 80,65 80,75" stroke="currentColor" strokeWidth="6" />
        <path d="M20,25 V75 C20,85 80,85 80,75 V25" stroke="currentColor" strokeWidth="6" />
      </svg>
    );
  }
  if (normName.includes("mongodb")) {
    return (
      <svg className="w-10 h-10 text-emerald-500 filter drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50,10 C50,10 75,35 75,55 C75,70 65,85 50,90 C35,85 25,70 25,55 C25,35 50,10 50,10 Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
        <path d="M50,10 V90" stroke="currentColor" strokeWidth="4" />
      </svg>
    );
  }
  if (normName.includes("firebase")) {
    return (
      <svg className="w-10 h-10 text-amber-500 filter drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15,80 L50,10 L85,80 Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
        <path d="M15,80 L52,42 L85,80" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
        <path d="M28,68 L50,10" stroke="currentColor" strokeWidth="5" />
      </svg>
    );
  }
  if (normName.includes("git")) {
    return (
      <svg className="w-10 h-10 text-rose-500 filter drop-shadow-[0_0_8px_rgba(244,63,94,0.5)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20,50 L50,20 L80,50 L50,80 Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
        <circle cx="50" cy="35" r="8" fill="currentColor" />
        <circle cx="50" cy="65" r="8" fill="currentColor" />
        <circle cx="65" cy="50" r="8" fill="currentColor" />
        <path d="M50,35 V65 M50,50 H65" stroke="currentColor" strokeWidth="5" />
      </svg>
    );
  }

  // Default fallback neon code icon
  return (
    <svg className="w-10 h-10 text-gray-400 filter drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M35,30 L15,50 L35,70 M65,30 L85,50 L65,70 M45,75 L55,25" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default function SkillsGrid() {
  const { languages, frameworks, tools, databases } = resumeData.skills;
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Modules" },
    { id: "languages", name: "Languages" },
    { id: "frameworks", name: "Frameworks & Libraries" },
    { id: "databases", name: "Databases & Cloud" },
    { id: "tools", name: "Developer Tools" }
  ];

  // Compile list of skills with categories
  const allSkills = [
    ...languages.map(s => ({ name: s, category: "languages" })),
    ...frameworks.map(s => ({ name: s, category: "frameworks" })),
    ...databases.map(s => ({ name: s, category: "databases" })),
    ...tools.map(s => ({ name: s, category: "tools" }))
  ];

  const filteredSkills = activeFilter === "all" 
    ? allSkills 
    : allSkills.filter(s => s.category === activeFilter);

  return (
    <section id="skills" className="py-20 px-4 md:px-8 relative">
      <div className="radial-overlay bottom-[10%] left-[5%] bg-cyan-600" />
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-[var(--size-h2)] font-extrabold text-white mb-2">
            Technical Capabilities Grid
          </h2>
          <p className="text-sm font-mono text-[var(--color-secondary)] uppercase tracking-widest">
            Auditing full system integrations &amp; program syntax.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-2 rounded-lg font-mono text-xs border transition-all duration-300 cursor-pointer ${
                activeFilter === cat.id
                  ? "bg-[rgba(139,92,246,0.1)] border-[var(--color-primary)] text-[var(--color-primary)] glow-violet"
                  : "border-[var(--color-glass-border)] text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.02)]"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Grid Panel */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card p-5 flex flex-col items-center justify-center text-center group interactive-card border-[rgba(255,255,255,0.04)]"
            >
              {/* Logo / Tech Vector */}
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                <TechIcon name={skill.name} />
              </div>
              
              {/* Skill Label */}
              <h4 className="text-sm font-bold text-white font-mono mb-1">
                {skill.name}
              </h4>
              
              {/* Category Subtitle */}
              <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                {skill.category}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
