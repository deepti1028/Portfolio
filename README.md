# 🌐 Deepti Jain's Developer & Test Automation Portfolio

A highly premium, futuristic, and interactive **React + Vite developer portfolio website** designed for **Deepti Jain** (Software Engineer & Test Automation Specialist). The site captures the essence of a software test and automation engineer using a high-fidelity **dark synthwave-cybernetic terminal dashboard** aesthetic.

---

## 🚀 Key Features

*   **⚡ Premium Canvas Glitter Cursor Trail:** An ultra-premium, high-performance canvas sparkle particle engine (✨ using quadratic curve canvas paths) that drift under gravity and rotate randomly, color-matching the portfolio's neon theme (Vibrant Violet, Cyan, and Emerald Green). Responsive and auto-bypasses on mobile/touch interfaces to ensure zero lag.
*   **⛓️ DevOps Professional Pipeline Timeline:** A high-tech interactive pipeline timeline tracking professional experience stages. Features horizontal scroll-snapping, auto-aligning Stage Nodes, and vertically centered connection tracks designed to scale fluidly from massive 4K desktop screens down to narrow mobile viewports.
*   **📊 Live Stats Dashboard:** Visualizes engineering stats (LeetCode Max Rating, 800+ Problems Solved, GeeksforGeeks metrics, Hackathons won, and hours saved through test automation scripts).
*   **💻 Interactive Contact Terminal CLI:** A fully-featured command-line terminal interface where users can type standard commands (`help`, `skills`, `resume`, `leetcode`, `github`, `clear`) to audit profiles or extract document links directly.
*   **🎨 High-Tech Glow Matrix & CSS Scanlines:** Centralized design tokens leveraging Tailwind CSS v4's build-time engine, featuring hardware-accelerated neon hover glows, blur backdrops, radial accent gradients, and custom retro-cyberpunk monitor scanline overlays.

---

## 🛠️ Technology Stack & Architecture

*   **Framework:** [React 19](https://react.dev) (Single Page Application architecture)
*   **Bundler:** [Vite 6](https://vite.dev) (Ultra-fast Hot Module Replacement and Rollup bundling)
*   **Styling:** [Tailwind CSS v4](https://tailwindcss.com) (via Vite `@tailwindcss/vite` integration)
*   **Icons:** [Lucide React](https://lucide.dev)
*   **Graphics & Particles:** HTML5 Canvas API (custom vector sparkle rendering loop)
*   **Code Design:** Fully decoupled data model ([src/data.js](file:///Users/deepti1028/Projects/Portfolio/src/data.js)) isolating profile metrics, experiences, and project lists from UI styling components to facilitate instant content modifications.

---

## 📂 Project Structure

```text
├── src/
│   ├── components/
│   │   ├── ContactTerminal.jsx     # Interactive contact form & CLI shell
│   │   ├── CustomCursor.jsx        # Premium canvas cursor sparkle engine
│   │   ├── ExperiencePipeline.jsx  # DevOps timelines & scroll stage audit logs
│   │   ├── Hero.jsx                # Landing hero banner with cyber accents
│   │   ├── Navbar.jsx              # Centered floating glassmorphic navigation
│   │   ├── Projects.jsx            # Multi-card interactive projects grid
│   │   ├── SkillsGrid.jsx          # Skills categories glow-on-hover matrix
│   │   └── StatsDashboard.jsx      # Metrics visualization cards
│   ├── assets/                     # Local icons, vectors, and resources
│   ├── data.js                     # Centralized resume data configuration
│   ├── App.jsx                     # Application viewport assembler
│   ├── main.jsx                    # Vite compilation entrypoint
│   └── index.css                   # Custom neon CSS variables & Tailwind imports
```

---

## 💻 Local Setup & Installation

To run Deepti's portfolio locally on your machine, follow these standard commands:

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org) (v18.0.0 or higher recommended) installed.

### 2. Clone and Install Dependencies
Navigate into the repository directory and install the necessary npm packages:
```bash
npm install
```

### 3. Start Development Server
Launch Vite's hot-reloading development server:
```bash
npm run dev
```
Open **[http://localhost:5173](http://localhost:5173)** in your browser to view the live interface.

### 4. Production Compile & Preview
Build the production bundle and preview it locally to audit network delivery:
```bash
npm run build
npm run preview
```

---

## 🔒 Verification & Quality Controls

*   **ESLint Conformance:** The codebase is fully verified with strict ESLint checks (`npm run lint`).
*   **Vite Build Optimization:** Passed clean production bundling checks with zero compilation warnings or errors.
