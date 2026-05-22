import { useEffect, useState } from "react";
import { Code2, Flame, Award, Zap } from "lucide-react";
import { resumeData } from "../data";

export default function StatsDashboard() {
  const { leetcodeRating, leetcodeSolved, gfgSolved, hoursSavedAutomation } = resumeData.statistics;
  const totalSolved = leetcodeSolved + gfgSolved;

  // Simple state counters for dynamic entrance
  const [solvedCount, setSolvedCount] = useState(0);
  const [ratingCount, setRatingCount] = useState(0);
  const [hoursCount, setHoursCount] = useState(0);

  useEffect(() => {
    // Animate counts slowly on mount
    const solvedInterval = setInterval(() => {
      setSolvedCount((prev) => {
        if (prev >= totalSolved) {
          clearInterval(solvedInterval);
          return totalSolved;
        }
        return prev + Math.ceil(totalSolved / 30);
      });
    }, 30);

    const ratingInterval = setInterval(() => {
      setRatingCount((prev) => {
        if (prev >= leetcodeRating) {
          clearInterval(ratingInterval);
          return leetcodeRating;
        }
        return prev + Math.ceil(leetcodeRating / 30);
      });
    }, 30);

    const hoursInterval = setInterval(() => {
      setHoursCount((prev) => {
        if (prev >= hoursSavedAutomation) {
          clearInterval(hoursInterval);
          return hoursSavedAutomation;
        }
        return prev + 1;
      });
    }, 100);

    return () => {
      clearInterval(solvedInterval);
      clearInterval(ratingInterval);
      clearInterval(hoursInterval);
    };
  }, [totalSolved, leetcodeRating, hoursSavedAutomation]);

  return (
    <section id="stats" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 relative reveal-on-scroll">
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-[var(--size-h2)] font-extrabold text-white mb-2">
            System Metrics &amp; Coding Achievements
          </h2>
          <p className="text-sm font-mono text-[var(--color-secondary)] uppercase tracking-widest">
            Compiling performance logs...
          </p>
        </div>

        {/* Highlight Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Solved Problems */}
          <div className="glass-card p-6 flex flex-col items-center text-center group interactive-card">
            <div className="w-12 h-12 rounded-lg bg-[rgba(6,182,212,0.1)] border border-[rgba(6,182,212,0.2)] flex items-center justify-center text-[var(--color-secondary)] mb-4 group-hover:scale-110 transition-transform duration-300">
              <Code2 size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1 font-mono">
              {solvedCount}+
            </h3>
            <p className="text-xs font-mono text-[var(--color-secondary)] mb-2 uppercase tracking-wide">
              DSA Challenges Solved
            </p>
            <p className="text-xs text-gray-400">
              800+ LeetCode &amp; 300+ GeeksforGeeks problems validated across data structures &amp; core paradigms.
            </p>
          </div>

          {/* LeetCode Max Rating */}
          <div className="glass-card p-6 flex flex-col items-center text-center group interactive-card">
            <div className="w-12 h-12 rounded-lg bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)] flex items-center justify-center text-[var(--color-primary)] mb-4 group-hover:scale-110 transition-transform duration-300">
              <Flame size={24} className="animate-pulse" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1 font-mono">
              {ratingCount}
            </h3>
            <p className="text-xs font-mono text-[var(--color-primary)] mb-2 uppercase tracking-wide">
              LeetCode Max Rating
            </p>
            <p className="text-xs text-gray-400">
              Ranked in top percentiles, earning 15 distinct specialty badges in competitive algorithm runs.
            </p>
          </div>

          {/* Hours Saved by Automation */}
          <div className="glass-card p-6 flex flex-col items-center text-center group interactive-card">
            <div className="w-12 h-12 rounded-lg bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)] flex items-center justify-center text-[var(--color-success)] mb-4 group-hover:scale-110 transition-transform duration-300">
              <Zap size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1 font-mono">
              {hoursCount} hrs/wk
            </h3>
            <p className="text-xs font-mono text-[var(--color-success)] mb-2 uppercase tracking-wide">
              Manual Effort Cut
            </p>
            <p className="text-xs text-gray-400">
              Achieved by designing full-stack command executors (React + FastAPI) and automated testing scripts.
            </p>
          </div>

          {/* Hackathon Winners */}
          <div className="glass-card p-6 flex flex-col items-center text-center group interactive-card">
            <div className="w-12 h-12 rounded-lg bg-[rgba(234,179,8,0.1)] border border-[rgba(234,179,8,0.2)] flex items-center justify-center text-yellow-500 mb-4 group-hover:scale-110 transition-transform duration-300">
              <Award size={24} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-1 font-mono">
              1st Prize
            </h3>
            <p className="text-xs font-mono text-yellow-400 mb-2 uppercase tracking-wide">
              Optica Hackathon
            </p>
            <p className="text-xs text-gray-400">
              Awarded first place at the Optica Internal Hackathon for implementing Concadmic networking engine.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
