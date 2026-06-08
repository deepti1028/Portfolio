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
    resumeDrive: "https://drive.google.com/file/d/1SPF93JFGhtD5J9q0h5wRrSRlqkD-vW-c/view?usp=sharing",
    location: "Gurgaon, India",
    summary: "Software engineer building across iOS, AI backends, full-stack web, and test automation, who finds the fun somewhere in the hard parts. Writes tests too, because once you've spent enough time hunting bugs, preventing them starts feeling like a sport. Always running on matcha; espresso is reserved for the dark all-nighters that somehow flip into breakthrough moments right when you finally find the thing. Genuinely loves hanging out with AI agents (who walks away from coworkers that quietly take tasks off your plate?). Night owl or early bird depending on what's on fire. Always up for a new café and a harder problem."
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
      metrics: { testCases: "500+", feedbackLoop: "40 mins", crossBrowser: "3 Browsers" },
      bulletPoints: [
        "Architected a robust end-to-end testing framework from the ground up using Playwright and TypeScript to migrate the business-critical IPD (In-Patient Department) module from slow manual verification to continuous automation, writing 500+ stable UI test cases that secure complex healthcare user journeys.",
        "Embedded the test suite directly into Jenkins CI/CD pipelines across DEV and QA environments. Optimized parallel execution to slice validation feedback down to a tight 40-minute window, enabling developers to catch regressions and debug issues before code ever gets merged.",
        "Engineered a parallel cross-browser execution model in Playwright. Solved complex test-data isolation and timing flakiness to lock down 100% feature coverage across 4 core IPD modules, and stabilized critical user paths on a highly dynamic 5th module."
      ],
      techStack: ["Playwright", "TypeScript", "Jenkins", "CI/CD", "Cross-Browser Testing", "Git"]
    },
    {
      id: "zscaler",
      company: "Zscaler",
      role: "Software Developer Intern",
      duration: "Feb 2025 - Aug 2025",
      location: "Bangalore, India",
      metrics: { opsOverhead: "-10 hrs/wk", storageSaved: "75% Drop", dashboardSync: "3x Faster" },
      bulletPoints: [
        "Designed and built a secure, role-based internal application using React and FastAPI that allowed team members to safely run server operations via a clean UI, reducing team operational overhead by 10 hours/week.",
        "Architected a custom checksum-based differential backup system in Python. By storing configuration diffs instead of redundant full backups, I reduced daily proxy configuration storage by 75% and optimized sync runtimes.",
        "Hardened the Filetype Control module, a core cybersecurity gateway feature, by building an automated verification pipeline that checked edge cases and bypass exploits, boosting system reliability and securing the code path by 30%.",
        "Orchestrated Zscaler platform APIs to automate node status monitoring, cutting down manual monitoring overhead by 50% and redesigning the ingestion pipeline to sync system health data 3x faster."
      ],
      techStack: ["React", "FastAPI", "Python", "Pytest", "REST APIs", "System Integration"]
    },
    {
      id: "optica",
      company: "Optica Student Chapter",
      role: "Technical Member",
      duration: "Aug 2022 - Aug 2023",
      location: "JIIT, Noida",
      metrics: { hackathonRank: "1st Place", dsaSessions: "DSA Classes", symposium: "JSCOP" },
      bulletPoints: [
        "Won 1st Place at the Optica Internal Hackathon by engineering <a href='#concadmic' class='text-[var(--color-primary)] hover:underline font-semibold'>Concadmic</a>, a student networking and blogging platform, using React and Firebase, designed to bridge communications gaps on campus.",
        "Conducted a series of technical workshops on Data Structures & Algorithms (DSA) for junior students, teaching core concepts in dynamic programming, recursion, and search algorithms to help them build strong problem-solving skills.",
        "Co-organized and managed events for JSCOP (Optica's flagship annual symposium), coordinating operations and event flows to ensure a seamless experience for participating teams."
      ],
      techStack: ["React", "Firebase", "C++", "Data Structures", "Event Management", "Git"]
    },
    {
      id: "jiit",
      company: "Jaypee Institute of Info. Tech.",
      role: "B.Tech in Computer Science",
      duration: "2021 - 2025",
      location: "Noida, India",
      metrics: { cgpa: "7.4 / 10", dsaProblems: "1100+", certifications: "2+" },
      bulletPoints: [
        "Built strong theoretical and practical foundations in Computer Science, focusing on Data Structures & Algorithms (DSA), Object-Oriented Programming (OOP), Database Management Systems (DBMS), and System Design.",
        "Engineered <a href='#concadmic' class='text-[var(--color-primary)] hover:underline font-semibold'>Concadmic</a>, a campus networking and blogging application, securing 1st Place at the Optica Internal Hackathon.",
        "Completed certified specializations in <a href='https://www.udemy.com/certificate/UC-f37b8b03-1013-410e-ae22-b9d6fa206d93/' target='_blank' rel='noopener noreferrer' class='text-[var(--color-primary)] hover:underline font-semibold'>Advanced Data Structures & Algorithms</a> and <a href='https://www.udemy.com/certificate/UC-36252ddd-e012-41d0-96f2-5edf0e292eb4/' target='_blank' rel='noopener noreferrer' class='text-[var(--color-primary)] hover:underline font-semibold'>Full-Stack Web Development</a>."
      ],
      techStack: ["C/C++", "Java", "Python", "SQL", "Data Structures", "Computer Networks", "Database Management", "OOPS"]
    }
  ],

  projects: [
    {
      title: "ReelMind",
      subtitle: "AI-Powered Reel Library with RAG Chat",
      technologies: "Swift, SwiftUI, FastAPI, Celery, Redis, Supabase, Groq, Gemini API",
      demoLink: "https://youtube.com/shorts/heTbBjLPAQ4?si=1wNrkAvJHKJ7ySL1",
      githubLink: "https://github.com/deepti1028/ReelMind",
      badge: { label: "iOS + RAG Pipeline", color: "violet" },
      demoType: "youtube",
      description: "Have you ever saved an Instagram Reel (a travel guide, a recipe, a workout) and weeks later, when you actually needed it, couldn't find it buried under 100 others? ReelMind fixes that. It automatically organizes everything you save, so you can find it later just by describing what you remember.",
      details: [
        "Built a 7-stage async ingestion pipeline on FastAPI + Celery + Redis with fault-tolerant retries at each stage, so a failed classification or a flaky API call doesn't silently drop a reel from your library.",
        "Search runs on a RAG pipeline: reel content gets embedded as 768-dim vectors via Gemini Embedding API, stored in Supabase pgvector, and queried with semantic similarity at runtime; Gemini 2.5 Flash then generates a grounded answer with the retrieved context.",
        "Once a reel finishes processing, the backend triggers Firebase Cloud Messaging to deliver a push notification with dynamic action buttons to the iOS client, closing the loop between background ingestion and what the user actually sees."
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
      description: "By the time financial news reaches you (through Twitter, a forward, or some app), the stock has already moved. That's the window you missed. Trade Alert monitors the financial sources that actually set market sentiment, filters only for the stocks you're watching, and gets it to you before it's priced in.",
      details: [
        "Scraped 8+ financial news portals with Puppeteer; most of these portals render content client-side, so a raw HTTP fetch returns empty HTML. Per-user company and priority filters are applied at ingestion time to skip processing irrelevant articles entirely.",
        "Ran articles through a two-stage LangChain + Groq (Llama 3.1 70B) pipeline: first pass condenses raw scraped text into a market-relevant summary, second pass extracts which user-tracked companies are mentioned. Splitting the stages kept each prompt narrowly focused; combined prompts produced noisier company detection.",
        "Used Pinecone to match news against the company index semantically rather than by string, catching references like 'AAPL', 'Cupertino giant', or a CEO mention all resolving to the same watchlist entry.",
        "Final step fires a Firebase FCM push notification to the user's device. End-to-end flow (scrape → summarize → match → notify) runs in seconds."
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
      description: "The COVID batch joined college without setting foot on campus. All the knowledge that normally travels through mess queues, hostel corridors, and cafe runs (which elective is worth it, which professor actually teaches, what clubs are real) had no channel to travel through. Concademic was that channel: a campus-only platform where seniors could reach the juniors who needed them.",
      details: [
        "Built a full direct messaging system (user search, conversation threads, real-time message delivery) where messages appear on both sides the moment they're sent, no polling. Scoped chat state to a dedicated React Context so incoming message callbacks don't trigger re-renders across the blog feed or events page.",
        "Built category and tag filtering as two independent discovery paths, each with its own route, so a post tagged 'internship' under 'placements' shows up in both browse flows the moment it goes live, no extra step, no duplication.",
        "Built the full post authoring flow (create, edit, delete) with tags and category assigned at write time, so content is structured and queryable from the moment it's published rather than needing retroactive organization."
      ]
    }
  ],

  skills: {
    languages: ["C/C++", "Python", "Java", "JavaScript", "TypeScript", "Swift", "SQL", "HTML", "CSS"],
    frameworks: ["React", "Node.js", "Express", "FastAPI", "SwiftUI", "Playwright", "Pytest", "Bootstrap", "LangChain"],
    aiml: ["Groq API", "Gemini API", "RAG", "Pinecone", "pgvector"],
    cloudAndDb: ["PostgreSQL", "MongoDB", "MySQL", "Firebase", "Supabase", "Redis", "Docker", "Jenkins", "Celery", "CI/CD"],
    tools: ["Git", "GitHub", "Puppeteer"]
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
