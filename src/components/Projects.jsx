import { Youtube, Github, ExternalLink, ShieldCheck, Award, Cpu } from "lucide-react";
import { resumeData } from "../data";

function ProjectBadge({ badge }) {
  if (badge.color === "yellow") {
    return (
      <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-[rgba(234,179,8,0.1)] border border-[rgba(234,179,8,0.2)] text-[10px] font-mono text-yellow-400 uppercase font-semibold">
        <Award size={12} className="animate-bounce" /> {badge.label}
      </span>
    );
  }
  if (badge.label.includes("iOS")) {
    return (
      <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)] text-[10px] font-mono text-[var(--color-primary)] uppercase font-semibold">
        <Cpu size={12} /> {badge.label}
      </span>
    );
  }
  return (
    <span className="flex items-center gap-1 px-2.5 py-1 rounded bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)] text-[10px] font-mono text-[var(--color-primary)] uppercase font-semibold">
      <ShieldCheck size={12} /> {badge.label}
    </span>
  );
}

function DemoButton({ project }) {
  if (project.demoLink === "#") return null;

  if (project.demoType === "youtube") {
    return (
      <a
        href={project.demoLink}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-lg border border-[rgba(239,68,68,0.2)] bg-[rgba(239,68,68,0.05)] text-xs font-mono text-red-400 hover:text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
      >
        <Youtube size={14} />
        <span>Watch Demo</span>
      </a>
    );
  }
  return (
    <a
      href={project.demoLink}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 rounded-lg border border-[rgba(6,182,212,0.2)] bg-[rgba(6,182,212,0.05)] text-xs font-mono text-[var(--color-secondary)] hover:text-white hover:bg-[var(--color-secondary)] hover:border-[var(--color-secondary)] transition-all duration-300 flex items-center justify-center gap-2 w-full sm:w-auto"
    >
      <ExternalLink size={14} />
      <span>Visit Hosted</span>
    </a>
  );
}

export default function Projects() {
  const projects = resumeData.projects;

  return (
    <section id="projects" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative reveal-on-scroll">
      <div className="radial-overlay top-[20%] left-[50%] bg-violet-600" />

      <div className="max-w-7xl w-full mx-auto relative z-10">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[var(--size-h2)] font-extrabold text-white mb-2">
            Flagship Engineering Projects
          </h2>
          <p className="text-sm font-mono text-[var(--color-secondary)] uppercase tracking-widest">
            Compiling prototype architectures &amp; functional systems.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const glowClass = project.badge?.color === "yellow" ? "glow-cyan" : "glow-violet";
            const borderHoverClass = project.badge?.color === "yellow"
              ? "hover:border-[var(--color-secondary)]"
              : "hover:border-[var(--color-primary)]";

            return (
              <div
                key={project.title}
                id={project.title.toLowerCase()}
                className={`glass-card p-6 md:p-8 flex flex-col justify-between ${glowClass} ${borderHoverClass} transition-all duration-300`}
              >
                {/* Upper Section */}
                <div>

                  {/* Title & Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">
                      Build Package 0{index + 1}
                    </span>
                    <ProjectBadge badge={project.badge} />
                  </div>

                  {/* Project Name */}
                  <h3 className="text-2xl font-extrabold text-white mb-1">
                    {project.title}
                  </h3>

                  {/* Project Subheading */}
                  <p className="text-xs font-mono text-[var(--color-secondary)] mb-4 uppercase">
                    {project.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Bullet details */}
                  <div className="mb-6 space-y-3">
                    {project.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[var(--color-secondary)] flex-shrink-0" />
                        <span className="text-xs md:text-sm text-gray-300 leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>

                {/* Lower Section (Tech Stack & Actions) */}
                <div>

                  {/* Tech stack badge row */}
                  <div className="border-t border-[var(--color-glass-border)] pt-4 mb-6">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest block mb-2">Compiled Tech Stack:</span>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.split(", ").map(tech => (
                        <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono border border-[var(--color-glass-border)] bg-[rgba(255,255,255,0.01)] text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
                    {project.githubLink !== "#" && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-cyber py-2 px-4 text-xs font-mono w-full sm:w-auto justify-center"
                      >
                        <Github size={14} />
                        <span>Code Repository</span>
                      </a>
                    )}
                    <DemoButton project={project} />
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
