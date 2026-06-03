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
    summary: "Software engineer building across iOS, AI backends, full-stack web, and test automation — the kind who reads the docs, traces the bug to root cause, and ships it clean. Writes tests too, because once you've spent enough time hunting bugs, preventing them starts feeling like a sport. Always running on matcha; espresso is reserved for the dark all-nighters that somehow flip into breakthrough moments right when you finally find the thing. Genuinely loves hanging out with AI agents — who walks away from coworkers that quietly take tasks off your plate? Night owl or early bird depending on what's on fire. Always up for a new café and a harder problem."
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
      title: "ReelMind",
      subtitle: "AI-Powered Reel Library with RAG Chat",
      technologies: "Swift, SwiftUI, FastAPI, Celery, Redis, Supabase, Groq, Gemini API",
      demoLink: "#",
      githubLink: "#",
      badge: { label: "iOS + RAG Pipeline", color: "violet" },
      demoType: "demo",
      description: "Have you ever saved an Instagram Reel — a travel guide, a recipe, a workout — and weeks later, when you actually needed it, couldn't find it buried under 100 others? ReelMind fixes that. It automatically organizes everything you save, so you can find it later just by describing what you remember.",
      details: [
        "Built a 7-stage async ingestion pipeline on FastAPI + Celery + Redis with fault-tolerant retries at each stage — so a failed classification or a flaky API call doesn't silently drop a reel from your library.",
        "Search runs on a RAG pipeline: reel content gets embedded as 768-dim vectors via Gemini Embedding API, stored in Supabase pgvector, and queried with semantic similarity at runtime — Gemini 2.5 Flash then generates a grounded answer with the retrieved context.",
        "Once a reel finishes processing, the backend triggers Firebase Cloud Messaging to deliver a push notification with dynamic action buttons to the iOS client — closing the loop between background ingestion and what the user actually sees."
      ]
    },
    {
      title: "Trade Alert",
      subtitle: "Real-Time Stock News Notifier",
      technologies: "MERN, LangChain, Puppeteer, Firebase FCM",
      demoLink: "https://www.youtube.com/watch?v=BYqgeYKpoJs",
      githubLink: "https://github.com/XoXoHarsh/Trade-Alert",
      badge: { label: "Real-Time Analytics", color: "violet" },
      demoType: "youtube",
      description: "A secure automated alert system analyzing financial news using LLMs to deliver personalized stock insights.",
      details: [
        "Developed a multi-source news scraping engine with Puppeteer across 8+ financial news portals, with user-configurable company and priority filters for personalized alert targeting.",
        "Built a two-stage LLM pipeline using LangChain + Groq (Llama 3.1 70B) to summarize raw scraped articles into concise stock market insights and identify which user-tracked companies are impacted.",
        "Integrated Pinecone vector search to semantically match news embeddings against a company index for relevant stock detection; containerized all services with Docker for scalable deployment."
      ]
    },
    {
      title: "Concadmic",
      subtitle: "Student Networking & Blogging Platform",
      technologies: "React, Firebase, Bootstrap",
      demoLink: "https://concadmic.web.app/",
      githubLink: "https://github.com/deepti1028/Concadmic",
      badge: { label: "1st Prize Hackathon", color: "yellow" },
      demoType: "external",
      description: "Campus-focused networking and blogging platform for students to share updates, resources, and opportunities.",
      details: [
        "Built a campus-focused blog and networking site for students to share college-specific updates, resources, and opportunities.",
        "Utilized Firebase Auth and Firestore for secure user access, real-time chat, and blog CRUD operations.",
        "Awarded 1st prize at the Optica Internal Hackathon for innovative solutions and user-centric design."
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
