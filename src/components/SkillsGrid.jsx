import { Brain, Bot, Cpu, Database, Network, Wrench, Code2, Link, Workflow } from "lucide-react";

const TechIcon = ({ name }) => {
  const norm = name.toLowerCase();
  let iconClass = "";

  if (norm.includes("c/c++")) iconClass = "devicon-cplusplus-plain";
  else if (norm.includes("python")) iconClass = "devicon-python-plain";
  else if (norm.includes("java") && !norm.includes("javascript")) iconClass = "devicon-java-plain";
  else if (norm.includes("javascript")) iconClass = "devicon-javascript-plain";
  else if (norm.includes("typescript")) iconClass = "devicon-typescript-plain";
  else if (norm.includes("swiftui") || norm.includes("swift")) iconClass = "devicon-swift-plain";
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
  else if (norm.includes("git") && !norm.includes("github")) iconClass = "devicon-git-plain";
  else if (norm.includes("puppeteer")) iconClass = "devicon-puppeteer-plain";

  if (iconClass) {
    const needsInvert = norm.includes("github") || norm.includes("express");
    return (
      <i
        className={`${iconClass} colored`}
        style={{ fontSize: "inherit", filter: needsInvert ? "invert(1) brightness(1.8)" : undefined }}
      />
    );
  }

  let IconComponent = Code2;
  let colorClass = "text-gray-400";

  if (norm.includes("groq")) { IconComponent = Cpu; colorClass = "text-orange-400"; }
  else if (norm.includes("gemini")) { IconComponent = Bot; colorClass = "text-blue-400"; }
  else if (norm.includes("rag")) { IconComponent = Brain; colorClass = "text-pink-400"; }
  else if (norm.includes("pgvector")) { IconComponent = Database; colorClass = "text-indigo-400"; }
  else if (norm.includes("pinecone")) { IconComponent = Network; colorClass = "text-emerald-400"; }
  else if (norm.includes("langchain")) { IconComponent = Link; colorClass = "text-green-400"; }
  else if (norm.includes("celery")) { IconComponent = Wrench; colorClass = "text-yellow-400"; }
  else if (norm.includes("sql") && !norm.includes("mysql") && !norm.includes("postgresql")) { IconComponent = Database; colorClass = "text-blue-400"; }
  else if (norm.includes("ci/cd")) { IconComponent = Workflow; colorClass = "text-sky-400"; }

  return <IconComponent style={{ width: "1em", height: "1em" }} className={colorClass} />;
};

// Diamond shape: 4 → 6 → 8 → 8 → 6 → 4
const skillRows = [
  ["Python", "JavaScript", "TypeScript", "Java"],
  ["C/C++", "Swift", "HTML", "CSS", "SQL", "React"],
  ["Node.js", "Express", "FastAPI", "SwiftUI", "LangChain", "Playwright", "Pytest", "Bootstrap"],
  ["Groq API", "Gemini API", "RAG", "Pinecone", "pgvector", "PostgreSQL", "MongoDB", "MySQL"],
  ["Firebase", "Supabase", "Redis", "Docker", "Jenkins", "CI/CD"],
  ["Celery", "Git", "GitHub", "Puppeteer"],
];

export default function SkillsGrid() {
  return (
    <section
      id="skills"
      className="py-14 md:py-24 px-4 sm:px-6 lg:px-8 relative reveal-on-scroll overflow-hidden"
    >
      {/* Ambient orb — sits behind the diamond centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 65% 55% at 50% 58%, rgba(139,92,246,0.22) 0%, rgba(99,45,250,0.10) 40%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl w-full mx-auto relative z-10">

        {/* ── Section title ── */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-[var(--size-h2)] font-bold text-white mb-2">
            Tech Stack
          </h2>
          <p className="text-sm font-mono text-[var(--color-secondary)] uppercase tracking-widest">
            Tools, languages &amp; frameworks in active use.
          </p>
        </div>

        {/* ── Diamond grid ── */}
        <div className="flex flex-col items-center gap-[2px] sm:gap-[4px] lg:gap-[6px]">
          {skillRows.map((row, rowIdx) => (
            <div
              key={rowIdx}
              className="flex gap-[2px] sm:gap-[4px] lg:gap-[6px]"
            >
              {row.map((skill) => (
                <div
                  key={skill}
                  className="
                    shrink-0 glass-card flex flex-col items-center justify-center
                    group cursor-default
                    transition-all duration-300 ease-out
                    hover:border-[var(--color-primary)]
                    hover:-translate-y-1 hover:scale-[1.08]
                    hover:shadow-[0_0_28px_rgba(139,92,246,0.45)]

                    w-9 h-9 rounded-lg gap-[2px]
                    sm:w-[58px] sm:h-[58px] sm:rounded-xl sm:gap-[3px]
                    lg:w-[72px] lg:h-[72px] lg:gap-1
                  "
                >
                  {/* Icon — font-size controls devicon scale */}
                  <div className="text-[16px] sm:text-[26px] lg:text-[32px] leading-none group-hover:scale-110 transition-transform duration-300">
                    <TechIcon name={skill} />
                  </div>

                  {/* Label — hidden on mobile, visible sm+ */}
                  <span className="hidden sm:block text-[6px] lg:text-[8px] font-mono text-gray-500 group-hover:text-gray-200 transition-colors text-center leading-tight max-w-full px-0.5 truncate">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
