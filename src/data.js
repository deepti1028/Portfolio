// Centralized database for Deepti Jain's Portfolio

export const resumeData = {
  personal: {
    name: "Deepti Jain",
    title: "Software Engineer & Test Automation Specialist",
    email: "deepti.jain2810@gmail.com",
    github: "https://github.com/deepti1028",
    linkedin: "https://www.linkedin.com/in/deepti1028/",
    leetcode: "https://leetcode.com/u/dipti_jain/",
    gfg: "https://www.geeksforgeeks.org/user/deeptihnd000/",
    resumeDrive: "https://drive.google.com/file/d/1X5X8_eT50Q94G-1J-yB8x3eUv6qE8OAp/view?usp=sharing", // Customizable Drive URL placeholder
    location: "Gurgaon, India",
    summary: "Software Engineer with experience in building scalable applications and automation systems using MERN, FastAPI, Python, and TypeScript. Currently a Software Test Engineer at PB Health, leading end-to-end automation with Playwright. Strong foundation in DSA, System Design, and core CS fundamentals, with prior industry experience at Zscaler. Passionate about building reliable, high-performance systems."
  },
  
  statistics: {
    leetcodeRating: 1728,
    leetcodeSolved: 800,
    leetcodeBadges: 15,
    gfgSolved: 300,
    hackathonsWon: 1,
    hoursSavedAutomation: 10
  },

  experiences: [
    {
      id: "pb-healthcare",
      company: "PB Healthcare",
      role: "Software Test Engineer",
      duration: "Oct 2025 - Present",
      location: "Gurgaon, India",
      metrics: { coverage: "95%", regressionTime: "-60%", bugsCaughtDev: "45+" },
      bulletPoints: [
        "Transitioned testing from fully manual execution to automated CI-integrated pipelines, enabling continuous validation and improving release reliability.",
        "Solely own the end-to-end testing strategy for a platform, ensuring reliability across critical business workflows.",
        "Designed and implemented scalable automation using Playwright + TypeScript, enabling cross-browser E2E testing with parallel execution and optimized runtime.",
        "Built comprehensive regression suites to ensure production-grade stability before releases."
      ],
      techStack: ["Playwright", "TypeScript", "CI/CD", "Regression Testing", "Node.js", "Git"]
    },
    {
      id: "zscaler",
      company: "Zscaler",
      role: "Software Developer Intern",
      duration: "Feb 2025 - Aug 2025",
      location: "Bangalore, India",
      metrics: { manualEffortSaved: "10 hrs/wk", testCoverage: "+30%", dashboardSpeed: "3x" },
      bulletPoints: [
        "Designed and built a secure full-stack web app (React & FastAPI) to execute predefined server commands via UI, reducing manual effort by 10 hours per week.",
        "Developed checksum-based daily backup scripts in Python and a configuration backup model, reducing storage overhead and backend maintenance effort.",
        "Conducted manual and automated testing using pytest for the Filetype Control module, a key cybersecurity feature, boosting test coverage by 30%.",
        "Integrated Zscaler APIs to automate node access/status, cutting manual monitoring tasks by 50% and improving dashboard update speed by 3x."
      ],
      techStack: ["React", "FastAPI", "Python", "Pytest", "REST APIs", "Automation"]
    },
    {
      id: "optica",
      company: "Optica Student Chapter",
      role: "Technical Member",
      duration: "Aug 2022 - Aug 2023",
      location: "JIIT, Noida",
      metrics: { usersReached: "2k+", eventUptime: "99.9%", hackathonRank: "1st" },
      bulletPoints: [
        "Enhanced and maintained the JIIT OPTICA official website by adding new features and ensuring seamless performance.",
        "Provided innovative technical solutions for campus hackathons and technological events with consistent, high-quality work.",
        "Co-organized Optica Internal Hackathon, leading engineering solutions and mentoring junior participants."
      ],
      techStack: ["React", "HTML5", "CSS3", "JavaScript", "Bootstrap", "Git"]
    },
    {
      id: "jiit",
      company: "Jaypee Institute of Info. Tech.",
      role: "B.Tech in Computer Science",
      duration: "2021 - 2025",
      location: "Noida, India",
      metrics: { cgpa: "7.4 / 10", dsaProblems: "1100+", certsEarned: "4+" },
      bulletPoints: [
        "Acquired deep foundations in Data Structures & Algorithms, Object-Oriented Programming, Operating Systems, Database Management Systems, and System Design.",
        "Awarded 1st prize at the Optica Internal Hackathon for building an innovative networking and blogging application.",
        "Completed certified specialization in Advanced Data Structures & Web Architectures."
      ],
      techStack: ["C/C++", "Java", "Python", "SQL", "Data Structures & Algorithms", "System Design"]
    }
  ],

  projects: [
    {
      title: "Trade Alert",
      subtitle: "Real-Time Stock News Notifier",
      technologies: "MERN, LangChain, Puppeteer, Firebase FCM",
      demoLink: "https://www.youtube.com/watch?v=BYqgeYKpoJs",
      githubLink: "https://github.com/XoXoHarsh/Trade-Alert",
      description: "A secure automated alert system analyzing financial reports.",
      details: [
        "Designed and implemented a real-time alert system that analyzes financial news using LLMs via Groq API to predict stock sentiment and send actionable insights.",
        "Developed a multi-source scraping engine with Puppeteer to extract news from 8+ financial websites, using user-specific filters for companies and priority levels.",
        "Integrated Firebase Cloud Messaging (FCM) and email notifications to deliver critical stock updates in real time."
      ]
    },
    {
      title: "Concadmic",
      subtitle: "Student Networking & Blogging Platform",
      technologies: "React, Firebase, Bootstrap",
      demoLink: "https://concadmic.web.app/",
      githubLink: "https://github.com/deepti1028/Concadmic",
      description: "Campus-focused blogging & blogging platform for college communities.",
      details: [
        "Campus-focused blog and networking site for students to share college-specific updates, resources, & opportunities.",
        "Utilized Firebase Auth and Firestore for secure user access, real-time chat, and blog CRUD operations.",
        "Awarded 1st prize at the Optica Internal Hackathon for innovative solutions and user-centric design."
      ]
    },
    {
      title: "AutoTest Dashboard",
      subtitle: "Real-Time Test Orchestration Cockpit",
      technologies: "React, Node.js, Socket.io, Tailwind CSS, SQLite",
      demoLink: "#",
      githubLink: "https://github.com/deepti1028/autotest-dashboard",
      description: "A centralized dashboard visualizing E2E test runs, failure metrics, and performance heatmaps.",
      details: [
        "Ingests live Playwright regression suites payload telemetry to visual dashboard charts in real-time.",
        "Organizes execution video streams to identify layout shifts and trace bottlenecks dynamically.",
        "Reduces debugging triaging cycle times by 40% using automated pattern-matching log categorizations."
      ]
    },
    {
      title: "Sentinel Deploy",
      subtitle: "DevSecOps Integrity Verification Agent",
      technologies: "FastAPI, Python, Docker, GitHub Actions, Pytest",
      demoLink: "#",
      githubLink: "https://github.com/deepti1028/sentinel-deploy",
      description: "An automated pre-deployment validator checking API schema rules and system integrity.",
      details: [
        "Executes dynamic security scans and schema validations using automated pytest execution flows.",
        "Orchestrates pre-deployment staging health checks, preventing code regressions in build rollouts.",
        "Cleans and rolls back test databases dynamically, maintaining highly isolated validation sandboxes."
      ]
    }
  ],

  skills: {
    languages: ["C/C++", "Python", "Java", "JavaScript", "TypeScript", "HTML", "CSS", "SQL"],
    frameworks: ["React", "FastAPI", "Node.js", "Express", "Playwright", "Pytest", "Bootstrap"],
    tools: ["Git", "GitHub", "VS Code", "Sublime Text", "Postman", "CI/CD Pipelines"],
    databases: ["MySQL", "MongoDB", "Firebase (Firestore, Auth)", "PostgreSQL"]
  },

  achievements: [
    {
      title: "LeetCode Specialist",
      desc: "Max Rating: 1728 | 800+ Problems Solved | 15 Badges Earned",
      link: "https://leetcode.com/u/dipti_jain/"
    },
    {
      title: "GeeksforGeeks Contributor",
      desc: "300+ Problems Solved across diverse topics (Trees, Graphs, DP)",
      link: "https://www.geeksforgeeks.org/user/deeptihnd000/"
    },
    {
      title: "Mastering Data Structures and Algorithms",
      desc: "Comprehensive certification in advanced algorithms, structures, and optimization",
      link: "https://www.udemy.com/certificate/UC-f37b8b03-1013-410e-ae22-b9d6fa206d93/"
    },
    {
      title: "Full-Stack Development Specialist",
      desc: "Completed The Complete 2024 Web Development Bootcamp covering MERN stack",
      link: "https://www.udemy.com/certificate/UC-36252ddd-e012-41d0-96f2-5edf0e292eb4/"
    }
  ]
};
