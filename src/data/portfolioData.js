// Portfolio Data for Aminul Islam
// Portfolio Name: Aminul Islam | GitHub: Shamim-Islam

export const personalInfo = {
  name: "Aminul Islam",
  role: "Web Developer | Web Security Learner",
  headline: "Building Modern, Responsive Web Experiences with a Security-First Mindset",
  github: "https://github.com/Shamim-Islam",
  githubUsername: "Shamim-Islam",
  email: "shamimislam844gm@gmail.com",
  phone: "01992089543",
  phoneLink: "tel:01992089543",
  location: "Bangladesh",
  status: "Available for Web Development & Junior Opportunities",
  resumeStatus: "Resume under preparation / update",
};

export const aboutMe = {
  title: "About Me",
  subtitle: "Focused on clean code, responsive design, and security fundamentals",
  bio: [
    "I am Aminul Islam, a motivated Web Developer and passionate Web Security Learner. I specialize in crafting clean, accessible, and high-performance user interfaces using modern web technologies like JavaScript, React, and Next.js, styled with Tailwind CSS.",
    "Driven by curiosity about how the web works under the hood, I actively study web application security fundamentals—including HTTP protocols, authentication mechanisms, and OWASP Top 10 vulnerabilities—practicing exclusively in safe, authorized lab environments.",
    "My academic background is completed with a Bachelor of Social Sciences (BSS). I approach every project with discipline, analytical thinking, and a commitment to writing clean, maintainable, and secure code.",
  ],
  pillars: [
    {
      title: "Modern Frontend",
      desc: "Responsive, mobile-first design using React, Next.js, and modern CSS frameworks like Tailwind.",
      icon: "Code",
    },
    {
      title: "Security Awareness",
      desc: "Learner-level understanding of OWASP Top 10, secure authentication, and defense-in-depth principles.",
      icon: "ShieldAlert",
    },
    {
      title: "Hands-on Practice",
      desc: "Continuous practical learning through verified project builds, code refactoring, and lab exercises.",
      icon: "Cpu",
    },
    {
      title: "Disciplined Workflow",
      desc: "Version control with Git/GitHub, semantic HTML, accessible standards, and performance optimization.",
      icon: "GitBranch",
    },
  ],
};

export const webDevSkills = [
  {
    category: "Frontend Development",
    skills: [
      { name: "JavaScript (ES6+)", level: "Core", desc: "DOM, async/await, closures, modern syntax" },
      { name: "React.js", level: "Proficient", desc: "Hooks, component lifecycle, state management" },
      { name: "Next.js (App Router)", level: "Proficient", desc: "Server/client components, routing, layouts" },
      { name: "Tailwind CSS", level: "Proficient", desc: "Utility-first responsive layouts, dark themes" },
      { name: "HTML5 & Semantic Markup", level: "Core", desc: "Accessibility, structured tags, SEO basics" },
      { name: "CSS3 / Modern CSS", level: "Proficient", desc: "Flexbox, Grid, animations, variables" },
    ],
  },
  {
    category: "Backend & Data Basics",
    skills: [
      { name: "Node.js (Basics)", level: "Familiar", desc: "Runtime, module system, npm scripts" },
      { name: "Express.js", level: "Familiar", desc: "RESTful endpoints, routing, middleware" },
      { name: "REST APIs", level: "Working Knowledge", desc: "CRUD operations, HTTP verbs, JSON data" },
      { name: "MongoDB / Mongoose", level: "Learner", desc: "Collections, schemas, basic queries" },
    ],
  },
  {
    category: "Developer Tools & Workflow",
    skills: [
      { name: "Git & GitHub", level: "Daily Use", desc: "Branching, commits, pull requests, repository management" },
      { name: "VS Code", level: "Primary Editor", desc: "Extensions, debugging, modern toolchain" },
      { name: "Postman", level: "Working Knowledge", desc: "API testing, headers, request debugging" },
      { name: "Vercel / Netlify", level: "Deployment", desc: "Continuous deployment and hosting" },
    ],
  },
];

export const webSecuritySkills = {
  disclaimer:
    "Represented honestly as a Web Security Learner. Focus is on fundamental concepts, secure coding, and authorized testing labs only (no unverified pen-testing or certifications claimed).",
  areas: [
    {
      title: "HTTP & Web Architecture Fundamentals",
      desc: "Request/response lifecycles, HTTP methods, headers (HSTS, CSP, X-Frame-Options), cookies (HttpOnly, Secure, SameSite), and session management principles.",
      badge: "Core Knowledge",
    },
    {
      title: "OWASP Top 10 Awareness",
      desc: "Conceptual understanding and safe identification of common flaws: Injection (SQLi), Cross-Site Scripting (XSS), CSRF, and Broken Object Level Authorization.",
      badge: "Concept Study",
    },
    {
      title: "Secure Coding Principles",
      desc: "Strict client and server-side input validation, parameter sanitization, parameterized queries, and secure password hashing with bcrypt.",
      badge: "Application",
    },
    {
      title: "Hands-on Training & Labs",
      desc: "Active practice through authorized learning platforms such as PortSwigger Web Security Academy and TryHackMe foundation tracks.",
      badge: "Hands-on Practice",
    },
  ],
};

export const education = {
  degree: "Bachelor of Social Sciences (BSS)",
  status: "Completed",
  details: "Completed undergraduate degree. Institution and passing session can be customized as needed.",
  note: "Institution details withheld as per unverified record policy. Editable by developer.",
};

export const learningExperience = {
  title: "Practical Learning & Project Experience",
  timeline: [
    {
      period: "2024 - Present",
      role: "Web Developer & Security Learner",
      type: "Self-Directed Study & Practical Projects",
      description:
        "Building end-to-end web applications (Fit-Log, BazarDor) while deepening foundational knowledge of modern React, Next.js architecture, and web security best practices.",
      points: [
        "Architected responsive user interfaces with high-contrast themes and accessible layouts.",
        "Practiced secure input sanitization and token handling in development environments.",
        "Completed guided security vulnerability lab exercises under authorized test sandboxes.",
      ],
    },
  ],
};

export const projects = [
  {
    slug: "fit-log",
    title: "Fit-Log",
    category: "Health & Fitness Web App",
    tagline: "Modern, high-contrast dark theme workout logging dashboard designed for training consistency.",
    overview:
      "Fit-Log is a workout and exercise tracking application built with a premium, distraction-free aesthetic. Designed around a deep canvas (#090b0f) accented with vibrant lime (#ccff00), it empowers users to log workouts, track sets and repetitions, and monitor fitness progress effortlessly across mobile and desktop devices.",
    featured: true,
    accentColor: "#ccff00",
    technologies: [
      "JavaScript (ES6+)",
      "React.js",
      "Next.js App Router",
      "Tailwind CSS",
      "Lucide React",
      "LocalStorage Persistence",
    ],
    features: [
      "Ergonomic Dark UI: Tailored dark interface (#090b0f) with high-visibility lime accents, reducing eye strain during workouts.",
      "Quick-Log Routine: Frictionless interface to add exercises, track weights, sets, and reps with one-click adjustments.",
      "History & Progress View: Chronological overview of completed workout sessions.",
      "Responsive Layout: Mobile-first responsive grid optimized for both gym handheld use and desktop review.",
    ],
    challenges: [
      "Challenge: Designing an intuitive mobile workflow that requires minimal user interaction between sets.",
      "Solution: Streamlined the logging modal with quick-increment buttons and instant client-side state caching.",
      "Future Improvements: Plan to integrate backend database persistence with user authentication and visual volume progression charts.",
    ],
    clientRepo: "https://github.com/Shamim-Islam",
    clientRepoLabel: "github.com/Shamim-Islam",
    liveUrl: null, // Clearly marked unverified / draft
    liveUrlPlaceholder: "Live Deployment Link (Add your deployed URL)",
    isPlaceholder: false,
    imagePlaceholderText: "Fit-Log Dashboard Preview (Replaceable image: /public/projects/fit-log.png)",
  },
  {
    slug: "bazardor",
    title: "BazarDor",
    category: "Market & Grocery Price Tracker",
    tagline: "Localized web application for monitoring daily commodity prices and market variations in Bangladesh.",
    overview:
      "BazarDor is a localized web tool created to help households and daily shoppers track fluctuations in essential commodity prices across local markets. The platform organizes commodities into clear categories, providing search and comparison tools to promote transparency in daily shopping budgets.",
    featured: true,
    accentColor: "#ccff00",
    technologies: [
      "JavaScript (ES6+)",
      "React.js",
      "Tailwind CSS",
      "RESTful API Integration",
      "Responsive Layouts",
    ],
    features: [
      "Commodity Catalog: Organized listing of daily vegetables, meat, fish, spices, and groceries.",
      "Real-time Search & Filter: Instant filtering by category, item name, and price band.",
      "Price Trend Indicators: Visual tags indicating whether items have increased, decreased, or stabilized.",
      "Localized Mobile View: Clean, lightweight interface optimized for fast loading on 3G/4G mobile connections.",
    ],
    challenges: [
      "Challenge: Normalizing commodity unit pricing (kg, liter, piece) for fair comparison across categories.",
      "Solution: Built uniform formatting helpers that calculate standard per-unit pricing dynamically.",
      "Future Improvements: Implement crowdsourced price submission with community verification and historical graph views.",
    ],
    clientRepo: "https://github.com/Shamim-Islam",
    clientRepoLabel: "github.com/Shamim-Islam",
    liveUrl: null,
    liveUrlPlaceholder: "Live Deployment Link (Add your deployed URL)",
    isPlaceholder: false,
    imagePlaceholderText: "BazarDor Application Preview (Replaceable image: /public/projects/bazardor.png)",
  },
  {
    slug: "placeholder-project",
    title: "[Editable Placeholder] Web Security Lab Hub",
    category: "Learning Lab / Upcoming Project",
    tagline: "A clearly marked editable placeholder ready to be updated with your next verified project.",
    overview:
      "This card is a designated editable placeholder project as requested by the portfolio guidelines. You can easily update this entry with your third verified repository (such as an upcoming full-stack application, API project, or hands-on security sandbox) by editing `src/data/portfolioData.js`.",
    featured: false,
    accentColor: "#ccff00",
    technologies: [
      "JavaScript",
      "Node.js",
      "Security Best Practices",
      "Markdown Documentation",
      "[Editable Stack]",
    ],
    features: [
      "Structured Documentation: Documenting hands-on exercises from PortSwigger and TryHackMe.",
      "Defense-in-Depth Patterns: Code examples illustrating input validation, password hashing, and token handling.",
      "Easily Replaceable: Ready to be swapped with a live full-stack GitHub repository once deployed.",
    ],
    challenges: [
      "Placeholder Note: Specific production metrics and live URLs are omitted in strict compliance with the no-invented-information policy.",
      "Future Improvements: Connect to your live GitHub repository once published.",
    ],
    clientRepo: "https://github.com/Shamim-Islam",
    clientRepoLabel: "github.com/Shamim-Islam (Update with Repo Link)",
    liveUrl: null,
    liveUrlPlaceholder: "Live Link (Add when available)",
    isPlaceholder: true,
    imagePlaceholderText: "Editable Project Placeholder (Replace with your 3rd project screenshot)",
  },
];
