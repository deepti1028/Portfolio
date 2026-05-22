import React, { useState, useRef, useEffect } from "react";
import { Terminal as TerminalIcon, Send, Mail, Phone, MapPin, CheckCircle, Github, Linkedin, Code } from "lucide-react";
import { resumeData } from "../data";

export default function ContactTerminal() {
  const { personal, skills } = resumeData;

  // Form State
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;
    
    setFormStatus("sending");
    
    // Mock sending event
    setTimeout(() => {
      setFormStatus("success");
      setFormState({ name: "", email: "", message: "" });
      // Add success log to terminal
      setTerminalHistory((prev) => [
        ...prev,
        { text: `Incoming connection from ${formState.name} (${formState.email})...`, color: "text-yellow-400" },
        { text: "✔ [SUCCESS] Message successfully queued for transmission!", color: "text-emerald-400" }
      ]);
    }, 1500);
  };

  // Terminal CLI State
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState([
    { text: "DeeptiOS v1.0.0 - Secure System Active", color: "text-cyan-400 font-bold" },
    { text: "Type 'help' to audit available commands.", color: "text-gray-500" },
    { text: "$ ", color: "text-gray-400" }
  ]);

  const terminalEndRef = useRef(null);

  useEffect(() => {
    // Scroll terminal to bottom on updates
    if (terminalEndRef.current) {
      terminalEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [terminalHistory]);

  const handleTerminalSubmit = (e) => {
    e.preventDefault();
    const command = terminalInput.trim().toLowerCase();
    if (!command) return;

    // Append executed command to history
    const commandLog = { text: `$ ${terminalInput}`, color: "text-white" };
    let responseLogs = [];

    switch (command) {
      case "help":
        responseLogs = [
          { text: "Available System Commands:", color: "text-cyan-300 font-bold" },
          { text: "  email    - View primary correspondence mail", color: "text-gray-400" },
          { text: "  github   - Retrieve engineering repository link", color: "text-gray-400" },
          { text: "  linkedin - Fetch professional network link", color: "text-gray-400" },
          { text: "  leetcode - Show coding rating profiles", color: "text-gray-400" },
          { text: "  gfg      - Show GeeksforGeeks profiles", color: "text-gray-400" },
          { text: "  skills   - List all compiled technical libraries", color: "text-gray-400" },
          { text: "  resume   - Grab downloadable LaTeX document link", color: "text-gray-400" },
          { text: "  clear    - Clear the command-line display", color: "text-gray-400" }
        ];
        break;
      case "email":
        responseLogs = [
          { text: `📬 Direct Email: ${personal.email}`, color: "text-yellow-400" },
          { text: "Redirect link: mailto:" + personal.email, color: "text-gray-500" }
        ];
        break;
      case "github":
        responseLogs = [
          { text: `🐙 GitHub Repo: ${personal.github}`, color: "text-yellow-400" },
          { text: "Auditing active code contributions...", color: "text-gray-500" }
        ];
        break;
      case "linkedin":
        responseLogs = [
          { text: `💼 LinkedIn Network: ${personal.linkedin}`, color: "text-yellow-400" },
          { text: "Establishing network bridge...", color: "text-gray-500" }
        ];
        break;
      case "leetcode":
        responseLogs = [
          { text: `🔥 LeetCode: ${personal.leetcode}`, color: "text-yellow-400" },
          { text: "Rating: 1728 | 800+ Solved | 15 Badges", color: "text-cyan-400" }
        ];
        break;
      case "gfg":
        responseLogs = [
          { text: `🧠 GeeksforGeeks: ${personal.gfg}`, color: "text-yellow-400" },
          { text: "300+ Problems solved in DP, Trees, & Graphs", color: "text-cyan-400" }
        ];
        break;
      case "skills":
        responseLogs = [
          { text: "Compiled Core Languages:", color: "text-cyan-300" },
          { text: `  ${skills.languages.join(" • ")}`, color: "text-gray-300" },
          { text: "Compiled Frameworks & Testing Libraries:", color: "text-cyan-300" },
          { text: `  ${skills.frameworks.join(" • ")}`, color: "text-gray-300" },
          { text: "Databases & Cloud Modules:", color: "text-cyan-300" },
          { text: `  ${skills.databases.join(" • ")}`, color: "text-gray-300" }
        ];
        break;
      case "resume":
        responseLogs = [
          { text: `📄 Google Drive Resume Link: ${personal.resumeDrive}`, color: "text-yellow-400" },
          { text: "Initializing secure PDF extraction...", color: "text-gray-500" }
        ];
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        return;
      default:
        responseLogs = [
          { text: `DeeptiOS: command not found: '${command}'.`, color: "text-red-400" },
          { text: "Type 'help' to review cataloged commands.", color: "text-gray-500" }
        ];
    }

    setTerminalHistory((prev) => [...prev, commandLog, ...responseLogs, { text: "$ ", color: "text-gray-400" }]);
    setTerminalInput("");
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 relative">
      <div className="radial-overlay bottom-[5%] right-[15%] bg-violet-600" />
      
      <div className="max-w-7xl w-full mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[var(--size-h2)] font-extrabold text-white mb-2">
            Establish Connection
          </h2>
          <p className="text-sm font-mono text-[var(--color-secondary)] uppercase tracking-widest">
            Send a transmission payload or boot up the command terminal.
          </p>
        </div>

        {/* Splits Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Direct GUI Message Card */}
          <div className="lg:col-span-6 flex">
            <div className="glass-card p-6 md:p-8 w-full flex flex-col justify-between relative glow-violet">
              
              {/* Header Info */}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Transmission Form
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="p-2 rounded-lg bg-[rgba(139,92,246,0.1)] text-[var(--color-primary)]">
                      <Mail size={16} />
                    </div>
                    <span>{personal.email}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="p-2 rounded-lg bg-[rgba(6,182,212,0.1)] text-[var(--color-secondary)]">
                      <Phone size={16} />
                    </div>
                    <span>{personal.phone}</span>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-gray-300">
                    <div className="p-2 rounded-lg bg-[rgba(16,185,129,0.1)] text-[var(--color-success)]">
                      <MapPin size={16} />
                    </div>
                    <span>{personal.location}</span>
                  </div>
                </div>
              </div>

              {/* GUI Form */}
              {formStatus === "success" ? (
                <div className="flex-grow flex flex-col items-center justify-center text-center p-6 animate-fade-in">
                  <CheckCircle size={48} className="text-[var(--color-success)] mb-4 animate-bounce" />
                  <h4 className="text-lg font-bold text-white mb-2">Transmission Transmitted!</h4>
                  <p className="text-xs text-gray-400 max-w-xs">
                    Your message payload has successfully bypassed security gates and reached Deepti's queue.
                  </p>
                  <button 
                    onClick={() => setFormStatus("idle")} 
                    className="btn-cyber py-2 px-4 text-xs font-mono mt-6"
                  >
                    Send Another Transmission
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase mb-1.5">Agent Identifier (Name)</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter name"
                        className="w-full bg-[rgba(5,5,10,0.6)] border border-[var(--color-glass-border)] rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[var(--color-primary)] font-mono transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase mb-1.5">Return Coordinates (Email)</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter email coordinate"
                        className="w-full bg-[rgba(5,5,10,0.6)] border border-[var(--color-glass-border)] rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[var(--color-primary)] font-mono transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase mb-1.5">Payload Description (Message)</label>
                      <textarea 
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        required
                        rows="4"
                        placeholder="Enter message details..."
                        className="w-full bg-[rgba(5,5,10,0.6)] border border-[var(--color-glass-border)] rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[var(--color-primary)] font-mono transition-colors resize-none"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={formStatus === "sending"}
                    className="btn-cyber w-full flex items-center justify-center gap-2 mt-4 cursor-pointer"
                  >
                    <Send size={16} />
                    <span>{formStatus === "sending" ? "Transmitting..." : "Transmit Payload"}</span>
                  </button>
                </form>
              )}

            </div>
          </div>

          {/* Right Column: High-fidelity Functional CLI Shell */}
          <div className="lg:col-span-6 flex">
            <div className="terminal-box glow-cyan w-full flex flex-col justify-between">
              
              <div className="terminal-header">
                <div className="flex items-center">
                  <span className="terminal-dot red" />
                  <span className="terminal-dot yellow" />
                  <span className="terminal-dot green" />
                </div>
                <span className="text-xs font-mono text-gray-400 flex items-center gap-1.5">
                  <TerminalIcon size={12} className="text-cyan-400" />
                  deeptios-terminal-cli
                </span>
              </div>

              {/* Terminal Logs History Screen */}
              <div className="terminal-body h-72 overflow-y-auto flex-grow flex flex-col justify-start text-left font-mono text-xs">
                {terminalHistory.map((log, index) => {
                  if (log.text === "$ ") {
                    return (
                      <form key={index} onSubmit={handleTerminalSubmit} className="flex items-center gap-1 mt-1">
                        <span className={log.color}>$</span>
                        <input 
                          type="text" 
                          value={terminalInput}
                          onChange={(e) => setTerminalInput(e.target.value)}
                          placeholder="Type 'help'..."
                          className="flex-grow bg-transparent border-none outline-none text-white focus:ring-0 p-0 text-xs font-mono placeholder:text-gray-600"
                          autoFocus={false}
                        />
                      </form>
                    );
                  }
                  
                  return (
                    <div key={index} className={`mb-1.5 ${log.color} break-all`}>
                      {log.text}
                    </div>
                  );
                })}
                <div ref={terminalEndRef} />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
