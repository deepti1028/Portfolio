import { useState, useEffect, Fragment } from "react";
import { Play, CheckCircle2, Terminal as TerminalIcon, Calendar, MapPin, BarChart3 } from "lucide-react";
import { resumeData } from "../data";

export default function ExperiencePipeline() {
  const experiences = resumeData.experiences;
  const [activeStage, setActiveStage] = useState(experiences[0]);
  const [isCompiling, setIsCompiling] = useState(false);
  const [consoleLogs, setConsoleLogs] = useState([]);

  // Mock terminal logging compiled when switching experience tabs
  useEffect(() => {
    let active = true;

    // Defer state updates to avoid React synchronous render warning
    const renderTimeout = setTimeout(() => {
      if (!active) return;
      setIsCompiling(true);
      setConsoleLogs([`$ fetch-experience --stage=${activeStage.id}`]);
    }, 0);

    let currentLogIndex = 0;
    const logs = [
      `$ fetch-experience --stage=${activeStage.id}`,
      `⚙ Loading repository data for ${activeStage.company}...`,
      `ℹ Role: ${activeStage.role} | Duration: ${activeStage.duration}`,
      `✔ Pipeline integrity: SUCCESS`,
      `📊 Career Metrics loaded successfully.`,
      `$ cat achievements.txt`
    ];

    const timer = setInterval(() => {
      if (!active) return;
      currentLogIndex++;
      if (currentLogIndex < logs.length) {
        setConsoleLogs((prev) => [...prev, logs[currentLogIndex]]);
      } else {
        clearInterval(timer);
        setIsCompiling(false);
      }
    }, 200);

    return () => {
      active = false;
      clearTimeout(renderTimeout);
      clearInterval(timer);
    };
  }, [activeStage]);

  return (
    <section id="experience" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative reveal-on-scroll">
      <div className="radial-overlay top-[30%] right-[5%] bg-emerald-600" />
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[var(--size-h2)] font-extrabold text-white mb-2">
            Professional Pipeline Timeline
          </h2>
          <p className="text-sm font-mono text-[var(--color-secondary)] uppercase tracking-widest">
            Select a stage node to audit the engineering accomplishments log.
          </p>
        </div>

        {/* DevOps Pipeline Diagram Row */}
        <div className="glass-card mb-12">
          <div className="p-4 md:p-8 flex flex-row items-start justify-start md:justify-between gap-4 md:gap-6 overflow-x-auto scrollbar-thin snap-x w-full">
            {experiences.map((exp, index) => {
              const isActive = activeStage.id === exp.id;
              
              return (
                <Fragment key={exp.id}>
                  {/* Stage Node */}
                  <button
                    onClick={() => setActiveStage(exp)}
                    className={`pipeline-node flex flex-col items-center min-w-[140px] md:min-w-[160px] p-3 md:p-4 rounded-xl border transition-all duration-300 pointer-events-auto flex-shrink-0 snap-center ${
                      isActive
                        ? "bg-[rgba(139,92,246,0.08)] border-[var(--color-primary)] text-white glow-violet"
                        : "border-[var(--color-glass-border)] text-gray-400 hover:text-gray-200 hover:border-gray-600 hover:bg-[rgba(255,255,255,0.01)]"
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mb-2 node-circle transition-all duration-300 ${
                      isActive 
                        ? "border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-primary-dim)]"
                        : "border-gray-600 text-gray-500"
                    }`}>
                      {isActive ? <Play size={12} className="fill-current" /> : <CheckCircle2 size={14} />}
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase mb-1">
                      Stage 0{experiences.length - index}
                    </span>
                    <h4 className="text-xs md:text-sm font-bold node-text truncate max-w-[120px]">
                      {exp.company}
                    </h4>
                  </button>

                  {/* Connection Line */}
                  {index < experiences.length - 1 && (
                    <div className={`flex-shrink-0 self-start mt-[27px] md:mt-[31px] h-[2px] min-w-[30px] md:min-w-[50px] flex-grow ${
                      experiences.indexOf(activeStage) <= index 
                        ? "bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]" 
                        : "bg-gray-800"
                    }`} />
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>

        {/* Detailed Experience Logs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Side: Mock Build Console Details */}
          <div className="lg:col-span-7 flex flex-col text-left">
            
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-extrabold text-white leading-tight">
                  <span>{activeStage.role}</span>{" "}
                  <span className="text-[var(--color-primary)]">@</span>{" "}
                  <span className="text-[var(--color-secondary)]">{activeStage.company}</span>
                </h3>
                
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 mt-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-[var(--color-primary)]" />
                    {activeStage.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-[var(--color-secondary)]" />
                    {activeStage.location}
                  </span>
                </div>
              </div>

              {/* Dynamic Job-Specific Performance KPI Badge */}
              <div className="flex flex-wrap items-center gap-2 lg:gap-3">
                {Object.entries(activeStage.metrics).map(([key, val]) => (
                  <div key={key} className="glass-card px-3 py-1.5 border border-emerald-500/20 bg-emerald-500/5 text-center flex items-center gap-1.5" style={{ borderRadius: "8px" }}>
                    <BarChart3 size={12} className="text-[var(--color-success)]" />
                    <span className="text-[10px] font-mono text-gray-400 uppercase">{key.replace(/([A-Z])/g, ' $1')}:</span>
                    <span className="text-xs font-mono font-bold text-[var(--color-success)]">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bullet achievements */}
            <ul className="space-y-4 mb-8">
              {activeStage.bulletPoints.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-[var(--color-primary)]" />
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                    {bullet}
                  </p>
                </li>
              ))}
            </ul>

            {/* Tech stack used in this role */}
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs font-mono text-gray-400 mr-2 uppercase tracking-wider">Pipeline Stack:</span>
              {activeStage.techStack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1 rounded-full text-xs font-mono border border-[var(--color-glass-border)] bg-[rgba(255,255,255,0.02)] text-gray-300 hover:border-[var(--color-primary)] hover:text-white transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          {/* Right Side: Interactive Console compilation logs */}
          <div className="lg:col-span-5 w-full">
            <div className="terminal-box glow-green">
              <div className="terminal-header">
                <div className="flex items-center">
                  <span className="terminal-dot red" />
                  <span className="terminal-dot yellow" />
                  <span className="terminal-dot green" />
                </div>
                <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                  <TerminalIcon size={12} className="text-[var(--color-success)]" />
                  stage-audit-console
                </span>
              </div>
              
              <div className="terminal-body h-72 min-h-72 flex flex-col justify-start text-left font-mono text-xs">
                {consoleLogs.map((log, index) => (
                  <div key={index} className="mb-2 text-emerald-400">
                    {log}
                  </div>
                ))}
                
                {!isCompiling && (
                  <div className="mt-4 border-t border-[var(--color-glass-border)] pt-4 text-cyan-400 space-y-1">
                    <div>COMPILER SUCCESS: Audited {activeStage.company} accomplishments without errors.</div>
                    <div className="text-gray-400">$ exit</div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
