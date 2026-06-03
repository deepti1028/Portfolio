import { useState } from "react";
import { resumeData } from "../data";
import { Brain, Bot, Cpu, Database, Network, Wrench, Code2, Link, Workflow } from "lucide-react";

// Uses Devicon for properly colored tech logos and Lucide for custom AI/ML concepts.
// Added a continuous slow floating animation and hover effects to meet the "proper animated logo" request.
const TechIcon = ({ name }) => {
  const norm = name.toLowerCase();
  let iconClass = "";
  
  // Devicon Mapping
  if (norm.includes("c/c++")) iconClass = "devicon-cplusplus-plain";
  else if (norm.includes("python")) iconClass = "devicon-python-plain";
  else if (norm.includes("java") && !norm.includes("javascript")) iconClass = "devicon-java-plain";
  else if (norm.includes("javascript")) iconClass = "devicon-javascript-plain";
  else if (norm.includes("typescript")) iconClass = "devicon-typescript-plain";
  else if (norm.includes("swiftui")) iconClass = "devicon-swift-plain";
  else if (norm.includes("swift")) iconClass = "devicon-swift-plain";
  else if (norm.includes("html")) iconClass = "devicon-html5-plain";
  else if (norm.includes("css")) iconClass = "devicon-css3-plain";
  else if (norm.includes("react")) iconClass = "devicon-react-original";
  else if (norm.includes("node")) iconClass = "devicon-nodejs-plain";
  else if (norm.includes("express")) iconClass = "devicon-express-original";
  else if (norm.includes("fastapi")) iconClass = "devicon-fastapi-plain";
  else if (norm.includes("playwright")) iconClass = "devicon-playwright-plain";
  else if (norm.includes("pytest")) iconClass = "devicon-pytest-plain";
  else if (norm.includes("bootstrap")) iconClass = "devicon-bootstrap-plain";
  else if (norm.includes("postgresql")) iconClass = "devicon-postgresql-plain";
  else if (norm.includes("mongodb")) iconClass = "devicon-mongodb-plain";
  else if (norm.includes("mysql")) iconClass = "devicon-mysql-plain";
  else if (norm.includes("firebase")) iconClass = "devicon-firebase-plain";
  else if (norm.includes("supabase")) iconClass = "devicon-supabase-plain";
  else if (norm.includes("redis")) iconClass = "devicon-redis-plain";
  else if (norm.includes("docker")) iconClass = "devicon-docker-plain";
  else if (norm.includes("jenkins")) iconClass = "devicon-jenkins-plain";
  else if (norm.includes("github")) iconClass = "devicon-github-original";
  else if (norm.includes("git")) iconClass = "devicon-git-plain";
  else if (norm.includes("puppeteer")) iconClass = "devicon-puppeteer-plain";
  else if (norm.includes("vscode")) iconClass = "devicon-vscode-plain";
  
  // Base animation class for the logos
  const animClass = "transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-3 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]";

  if (iconClass) {
    const isDarkIcon = norm.includes("github");
    return (
      <div className={`relative ${animClass}`}>
        <i className={`${iconClass} colored text-[44px] ${isDarkIcon ? 'bg-white rounded-full p-1' : ''}`}></i>
      </div>
    );
  }

  // Fallbacks for AI/ML and specific tools using Lucide React with continuous pulse/spin animations
  let IconComponent = Code2;
  let colorClass = "text-gray-400";
  let specificAnim = "group-hover:animate-pulse";

  if (norm.includes("groq")) { IconComponent = Cpu; colorClass = "text-orange-500"; specificAnim = "group-hover:animate-spin"; }
  else if (norm.includes("gemini")) { IconComponent = Bot; colorClass = "text-blue-400"; specificAnim = "group-hover:animate-bounce"; }
  else if (norm.includes("rag")) { IconComponent = Brain; colorClass = "text-pink-400"; specificAnim = "group-hover:animate-pulse"; }
  else if (norm.includes("pgvector")) { IconComponent = Database; colorClass = "text-indigo-400"; }
  else if (norm.includes("pinecone")) { IconComponent = Network; colorClass = "text-emerald-400"; specificAnim = "group-hover:animate-spin"; }
  else if (norm.includes("langchain")) { IconComponent = Link; colorClass = "text-green-500"; }
  else if (norm.includes("celery")) { IconComponent = Wrench; colorClass = "text-yellow-500"; specificAnim = "group-hover:animate-bounce"; }
  else if (norm.includes("sql") && !norm.includes("mysql") && !norm.includes("postgresql")) { IconComponent = Database; colorClass = "text-blue-400"; }
  else if (norm.includes("ci/cd")) { IconComponent = Workflow; colorClass = "text-sky-500"; specificAnim = "group-hover:animate-pulse"; }
  
  return (
    <div className={`relative ${animClass}`}>
      <IconComponent className={`w-11 h-11 ${colorClass} ${specificAnim} filter drop-shadow-[0_0_8px_currentColor]`} />
    </div>
  );
};

export default function SkillsGrid() {
  const { languages, frameworks, aiml, cloudAndDb, tools } = resumeData.skills;
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", name: "All Modules" },
    { id: "languages", name: "Languages" },
    { id: "frameworks", name: "Frameworks & Libraries" },
    { id: "aiml", name: "AI & ML" },
    { id: "cloudAndDb", name: "Cloud & Databases" },
    { id: "tools", name: "Developer Tools" }
  ];

  // Compile list of skills with categories
  const allSkills = [
    ...(languages || []).map(s => ({ name: s, category: "languages" })),
    ...(frameworks || []).map(s => ({ name: s, category: "frameworks" })),
    ...(aiml || []).map(s => ({ name: s, category: "aiml" })),
    ...(cloudAndDb || []).map(s => ({ name: s, category: "cloudAndDb" })),
    ...(tools || []).map(s => ({ name: s, category: "tools" }))
  ];

  const filteredSkills = activeFilter === "all" 
    ? allSkills 
    : allSkills.filter(s => s.category === activeFilter);

  return (
    <section id="skills" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative reveal-on-scroll">
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
          {filteredSkills.map((skill) => {
            const glowClass = 
              skill.category === "languages" ? "hover:border-[var(--color-primary)] hover:shadow-[0_0_20px_rgba(139,92,246,0.25)]" :
              skill.category === "frameworks" ? "hover:border-[var(--color-secondary)] hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]" :
              skill.category === "aiml" ? "hover:border-pink-500 hover:shadow-[0_0_20px_rgba(236,72,153,0.25)]" :
              skill.category === "cloudAndDb" ? "hover:border-[var(--color-success)] hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]" :
              "hover:border-amber-500 hover:shadow-[0_0_20px_rgba(245,158,11,0.25)]";

            return (
              <div
                key={skill.name}
                className={`glass-card p-5 flex flex-col items-center justify-center text-center group interactive-card border-[rgba(255,255,255,0.04)] transition-all duration-300 ${glowClass}`}
              >
                {/* Logo / Tech Vector */}
                <div className="mb-4">
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
            );
          })}
        </div>

      </div>
    </section>
  );
}
