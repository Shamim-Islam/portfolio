// Portfolio Data for Aminul Islam
// Portfolio Name: Aminul Islam | GitHub: Shamim-Islam

export const personalInfo = {
  name: "Aminul Islam",
  role: "Web Developer | Web Security Learner",
  headline:
    "Building Modern, Responsive Web Experiences with a Security-First Mindset",
  github: "https://github.com/Shamim-Islam",
  githubUsername: "Shamim-Islam",
  email: "shamimislam844gm@gmail.com",
  phone: "01992089543",
  phoneLink: "tel:01992089543",
  location: "Bangladesh",
  status: "Available for Web Development & Junior Opportunities",
};

export const socialProfiles = [
  {
    id: "github",
    name: "GitHub",
    url: personalInfo.github,
    label: `@${personalInfo.githubUsername}`,
    shortLabel: "GH",
  },
  {
    id: "facebook",
    name: "Facebook",
    url: "https://www.facebook.com/shamim.islam.834465/",
    label: "Personal profile",
    shortLabel: "f",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/shamim-islam-cyb3r1d10t5/",
    label: "shamim-islam-cyb3r1d10t5",
    shortLabel: "in",
  },
  {
    id: "tryhackme",
    name: "TryHackMe",
    url: "https://tryhackme.com/p/Cyb3r1d10t5",
    label: "Cyb3r1d10t5",
    shortLabel: "THM",
  },
  {
    id: "hackthebox",
    name: "Hack The Box",
    url: null,
    label: "Profile URL pending",
    shortLabel: "HTB",
  },
  {
    id: "portswigger",
    name: "PortSwigger",
    url: null,
    label: "Profile URL pending",
    shortLabel: "PS",
  },
];

export const aboutMe = {
  title: "About Me",
  subtitle:
    "Focused on clean code, responsive design, and security fundamentals",
  bio: [
    "I am Aminul Islam, a Web Developer and Web Security Learner. I build responsive user interfaces with JavaScript, React, and Next.js, and continue to develop my understanding of accessible, maintainable, and secure web applications.",
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
      {
        name: "JavaScript (ES6+)",
        level: "Core",
        desc: "DOM, async/await, closures, modern syntax",
      },
      {
        name: "React.js",
        level: "Proficient",
        desc: "Hooks, component lifecycle, state management",
      },
      {
        name: "Next.js (App Router)",
        level: "Proficient",
        desc: "Server/client components, routing, layouts",
      },
      {
        name: "Tailwind CSS",
        level: "Proficient",
        desc: "Utility-first responsive layouts, dark themes",
      },
      {
        name: "HTML5 & Semantic Markup",
        level: "Core",
        desc: "Accessibility, structured tags, SEO basics",
      },
      {
        name: "CSS3 / Modern CSS",
        level: "Proficient",
        desc: "Flexbox, Grid, animations, variables",
      },
    ],
  },
  {
    category: "Backend & Data Basics",
    skills: [
      {
        name: "Node.js (Basics)",
        level: "Familiar",
        desc: "Runtime, module system, npm scripts",
      },
      {
        name: "Express.js",
        level: "Familiar",
        desc: "RESTful endpoints, routing, middleware",
      },
      {
        name: "REST APIs",
        level: "Working Knowledge",
        desc: "CRUD operations, HTTP verbs, JSON data",
      },
      {
        name: "MongoDB / Mongoose",
        level: "Learner",
        desc: "Collections, schemas, basic queries",
      },
    ],
  },
  {
    category: "Developer Tools & Workflow",
    skills: [
      {
        name: "Git & GitHub",
        level: "Daily Use",
        desc: "Branching, commits, pull requests, repository management",
      },
      {
        name: "VS Code",
        level: "Primary Editor",
        desc: "Extensions, debugging, modern toolchain",
      },
      {
        name: "Postman",
        level: "Working Knowledge",
        desc: "API testing, headers, request debugging",
      },
      {
        name: "Vercel / Netlify",
        level: "Deployment",
        desc: "Continuous deployment and hosting",
      },
    ],
  },
];

export const webSecuritySkills = {
  disclaimer:
    "Represented honestly as a Web Security Learner. Focus is on fundamental concepts, secure coding, and authorized testing labs only (no unverified pen-testing or certifications claimed).",
  categories: [
    {
      title: "Web Fundamentals",
      badge: "Learning Foundations",
      icon: "Globe",
      topics: [
        { name: "HTTP and HTTPS", level: "Studying" },
        { name: "Request and response flow", level: "Studying" },
        { name: "Cookies and sessions", level: "Building foundations" },
        { name: "Authentication and authorization", level: "Building foundations" },
      ],
    },
    {
      title: "Web Application Security",
      badge: "Awareness & Practice",
      icon: "ShieldAlert",
      topics: [
        { name: "OWASP Top 10 awareness", level: "Concept study" },
        { name: "Cross-Site Scripting (XSS)", level: "Learning fundamentals" },
        { name: "SQL Injection fundamentals", level: "Learning fundamentals" },
        { name: "CSRF and broken access control", level: "Concept study" },
        { name: "Security misconfiguration", level: "Concept study" },
      ],
    },
    {
      title: "Security Tools & Practice",
      badge: "Hands-on Learning",
      icon: "Wrench",
      topics: [
        { name: "Burp Suite", level: "Learning in labs" },
        { name: "Browser Developer Tools", level: "Practical use" },
        { name: "Linux and Kali Linux", level: "Building foundations" },
        { name: "Basic reconnaissance concepts", level: "Concept study" },
        { name: "Authorized web security testing", level: "Lab-only practice" },
      ],
    },
    {
      title: "Secure Coding",
      badge: "Developer Perspective",
      icon: "LockKeyhole",
      topics: [
        { name: "Input validation and output encoding", level: "Applying in projects" },
        { name: "Secure authentication concepts", level: "Building foundations" },
        { name: "Safer session and cookie handling", level: "Learning fundamentals" },
        { name: "Defense-in-depth thinking", level: "Ongoing practice" },
      ],
    },
  ],
  areas: [
    {
      title: "Authorized Practice",
      desc: "Hands-on learning is limited to intentionally vulnerable labs, training platforms, and applications where testing permission is explicit.",
      badge: "Ethical Boundary",
    },
    {
      title: "Learning in Progress",
      desc: "Topics and tools are presented as active study areas rather than claims of mastery, professional testing, or certification.",
      badge: "Current Status",
    },
  ],
  journey: [
    {
      step: "01",
      title: "Understand how applications work",
      description:
        "Learn web technologies, application architecture, HTTP behavior, and the data flows behind everyday features.",
    },
    {
      step: "02",
      title: "Study common vulnerabilities",
      description:
        "Build conceptual awareness of OWASP risks such as XSS, SQL injection, CSRF, and broken access control.",
    },
    {
      step: "03",
      title: "Practice in authorized labs",
      description:
        "Use training environments such as PortSwigger Web Security Academy and other explicitly authorized labs.",
    },
    {
      step: "04",
      title: "Improve secure coding",
      description:
        "Apply validation, safer authentication patterns, careful session handling, and responsible reporting habits.",
    },
  ],
  resources: [
    {
      name: "OWASP",
      description: "Application security guidance and the OWASP Top 10.",
      url: "https://owasp.org/",
    },
    {
      name: "PortSwigger Web Security Academy",
      description: "Free, authorized interactive web security labs.",
      url: "https://portswigger.net/web-security",
    },
    {
      name: "MDN Web Docs",
      description: "Trusted references for web platform behavior and APIs.",
      url: "https://developer.mozilla.org/",
    },
  ],
};

export const securityLearningProjects = [
  {
    slug: "future-lab-writeup",
    title: "Future Lab Write-up",
    status: "Coming Soon",
    summary:
      "Reserved for a documented learning lab or security study completed in an authorized training environment.",
    objective: "Add the specific learning objective after completing and documenting a future lab.",
    environment: "Authorized training environment (to be specified)",
    tools: ["Tool details to be added"],
    concepts: ["Concepts studied to be added"],
    learned: "Learning notes and responsible-reporting takeaways will be added here.",
    evidence: null,
    references: [],
    isPlaceholder: true,
  },
];

export const education = {
  degree: "Bachelor of Social Sciences (BSS)",
  status: "Completed",
  details:
    "Completed undergraduate degree. Institution and passing session can be customized as needed.",
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
        "Building responsive user interfaces through personal web projects.",
        "Studying validation, authentication, and session-handling concepts alongside application development.",
        "Practicing web security concepts in authorized labs and training environments.",
      ],
    },
  ],
};

export const projects = [
  {
    slug: "fit-log",
    title: "Fit-Log",
    category: "Fitness Tracking Web App",
    tagline:
      "A dark-themed fitness companion for browsing workouts, building a daily plan, and tracking progress.",
    overview:
      "Fit-Log is a Next.js fitness tracking application that helps users browse a workout library, add exercises to today's plan, save routines, and review workout metrics in a focused dark interface.",
    purpose:
      "The project is designed to make workout planning and routine tracking quick enough to use before, during, and after a training session.",
    featured: true,
    accentColor: "#ccff00",
    technologies: [
      "Next.js 16 (App Router)",
      "React 19",
      "Tailwind CSS 4",
      "Lucide React",
      "React Toastify",
      "React Context API",
    ],
    features: [
      "Workout library with exercise cards covering major muscle groups.",
      "Daily plan where workouts can be added, completed, or removed.",
      "Saved workouts library for keeping routines available for later.",
      "Metrics for exercises, duration, and calories based on the active or saved workouts.",
      "Sorting by duration, rating, or calories with responsive dark UI.",
    ],
    implementationDetails: [
      "Workout data is fetched from the project's FitLog API endpoint with no-store caching.",
      "React Context API coordinates today's plan and saved workouts across the application.",
      "Plan and saved-workout state persist in browser localStorage.",
      "Next.js App Router provides the home, workout detail, and plan routes.",
    ],
    challenges: [],
    futureImprovements: [
      "Add authenticated accounts and server-side workout history.",
      "Add visual progress charts and richer workout completion history.",
      "Replace the current external workout data source with a documented project API.",
    ],
    clientRepo: "https://github.com/Shamim-Islam/Fit-Log",
    clientRepoLabel: "Shamim-Islam/Fit-Log",
    liveUrl: "https://fit-log-dev-30ab.vercel.app/",
    image: "/projects/fitlog.png",
    isPlaceholder: false,
    imagePlaceholderText:
      "No screenshot capture is currently stored in the repository. Add a verified Fit-Log UI screenshot when one is available.",
  },
  {
    slug: "bazardor",
    title: "BazarDor",
    category: "Market Price Tracking Web App",
    tagline:
      "A web application for exploring everyday product prices, category changes, and market movement.",
    overview:
      "BazarDor is a Next.js market price tracking application that organizes everyday products by category and highlights price increases and decreases. Its goal is to make current market information easier to explore when planning purchases.",
    purpose:
      "The project aims to help shoppers compare available product prices and understand market changes through a simple, responsive interface.",
    featured: true,
    accentColor: "#ccff00",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "MongoDB Atlas",
      "Better Auth",
      "Lucide React",
    ],
    features: [
      "Product price tracking for currently listed everyday products.",
      "Separate views for products with increasing and decreasing prices.",
      "Category browsing and individual product detail pages.",
      "Email/password, Google, and GitHub sign-in through Better Auth.",
      "Responsive layout for desktop, tablet, and mobile screens.",
    ],
    implementationDetails: [
      "Next.js App Router organizes home, category, product detail, profile, sign-in, and sign-up routes.",
      "MongoDB Atlas stores application data through the MongoDB adapter.",
      "Better Auth handles authentication and session management.",
      "Reusable product cards and home sections present all products and price movement views.",
    ],
    challenges: [],
    futureImprovements: [
      "Add richer historical price charts and time-based comparisons.",
      "Add community price submissions with moderation and verification.",
      "Add clearer regional market coverage and product-unit comparison tools.",
    ],
    clientRepo: "https://github.com/Shamim-Islam/Bazar-Dor",
    clientRepoLabel: "Shamim-Islam/Bazar-Dor",
    liveUrl: "https://bazar-dor-a7-lovat.vercel.app/",
    image: "/projects/bazardor.png",
    isPlaceholder: false,
    imagePlaceholderText:
      "No screenshot capture is currently stored in the repository. Add a verified BazarDor UI screenshot when one is available.",
  },
  {
    slug: "pawmart",
    title: "PawMart",
    category: "Pet Listings Marketplace",
    tagline:
      "A React marketplace interface for browsing pet-supply listings and managing user listings and orders.",
    overview:
      "PawMart is a React and Vite application connected to a separate Express API. The frontend provides public listing discovery and account-based listing and order workflows.",
    purpose:
      "The application brings listing discovery, seller listing management, and order views together in a pet marketplace interface.",
    featured: true,
    accentColor: "#ccff00",
    technologies: [
      "React 18",
      "Vite 5",
      "Tailwind CSS 3",
      "React Router 6",
      "Firebase Authentication",
      "Axios",
      "React Hot Toast",
    ],
    backendTechnologies: [
      "Node.js",
      "Express 5",
      "MongoDB / Mongoose",
      "JWT",
      "Firebase Admin",
      "Cloudinary",
      "Stripe",
    ],
    features: [
      "Browse listings and filter products by pet-supply categories.",
      "Create and manage listings through authenticated routes.",
      "Review personal listings and order information.",
      "Account registration and sign-in backed by Firebase client authentication.",
      "Listing, order, user, and favorites API operations.",
    ],
    implementationDetails: [
      "React Router defines home, category, listing, sign-in, registration, listing-management, and order routes.",
      "An authentication context and private-route component gate account-specific pages.",
      "Axios API modules call the separate Express service; its base URL is configurable with VITE_API_URL and otherwise defaults to localhost.",
      "The backend repository contains separate route/controller modules for authentication, listings, orders, and users.",
    ],
    challenges: [],
    futureImprovements: [
      "Add and document a publicly reachable API endpoint for the hosted frontend.",
      "Add verified screenshots and a project-specific README.",
      "Document marketplace flows and deployment configuration in the repositories.",
    ],
    clientRepo: "https://github.com/Shamim-Islam/PawMart-Frontend",
    clientRepoLabel: "Shamim-Islam/PawMart-Frontend",
    serverRepo: "https://github.com/Shamim-Islam/pawmart-backend",
    serverRepoLabel: "Shamim-Islam/pawmart-backend",
    liveUrl: "https://pawmart-project.netlify.app/",
    image: "/projects/pawmart.png",
    isPlaceholder: false,
    imagePlaceholderText:
      "The frontend repository contains a paw icon but no verified application screenshot. Add a captured PawMart page here when one is available.",
  },
  {
    slug: "hero-io",
    title: "Hero-IO",
    category: "App Discovery & Installation UI",
    tagline:
      "A responsive app-store-style interface with search, sorting, app details, and saved installations.",
    overview:
      "Hero-IO is a React application built with Vite that presents a catalog of sample apps and lets visitors search, sort, inspect details, and manage a locally saved installation list.",
    purpose:
      "The project provides an interactive app-catalog experience and a practical way to explore React routing, client-side state, and chart-based app details.",
    featured: true,
    accentColor: "#ccff00",
    technologies: [
      "React 19",
      "Vite 7",
      "Tailwind CSS 4",
      "React Router 7",
      "Recharts",
      "React Toastify",
      "React Icons",
      "localStorage",
    ],
    features: [
      "Browse a catalog of 20 sample apps with search and download-based sorting.",
      "View app details and review metrics in a chart.",
      "Install and uninstall apps with the selection stored in localStorage.",
      "Dedicated home, all-apps, details, and installation routes.",
      "Loading and error-page handling in the app routes.",
    ],
    implementationDetails: [
      "Vite serves the React application and builds the client bundle.",
      "React Router data loaders fetch the app catalog from public/apps.json.",
      "The installation workflow uses browser localStorage, and Recharts renders review information.",
    ],
    challenges: [],
    futureImprovements: [
      "Document the main user flows and the data model in the repository README.",
      "Add verified screenshots of the catalog, details, and installation views.",
      "Review the route loader and hydration fallback warning reported by the live page.",
    ],
    clientRepo: "https://github.com/Shamim-Islam/Hero-Io",
    clientRepoLabel: "Shamim-Islam/Hero-Io",
    liveUrl: "https://hero-io-appstore.netlify.app/",
    image: "/projects/heroio.png",
    isPlaceholder: false,
    imagePlaceholderText:
      "The repository has app illustrations and sample app images, but no verified full-page portfolio screenshot. Add a captured Hero-IO screen here when available.",
  },
  {
    slug: "devstack",
    title: "DevStack",
    category: "Technology Stack Builder",
    tagline:
      "Explore technologies and build a personal stack by selecting one technology from each category.",
    overview:
      "DevStack is a React and TypeScript application for exploring technology cards and assembling a personal stack. The selected technologies can be replaced by category or removed.",
    purpose:
      "The project makes technology discovery interactive while practicing component composition, client state, data loading, and conditional rendering.",
    featured: true,
    accentColor: "#ccff00",
    technologies: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "React Toastify",
      "JSON",
    ],
    features: [
      "Explore technology cards with category, difficulty, rating, description, and logo information.",
      "Select a technology per category and replace or remove selections.",
      "Load technology data from public/data.json.",
      "Show toast feedback for add, replace, and remove actions.",
      "Responsive layouts for desktop, tablet, and mobile.",
    ],
    implementationDetails: [
      "React components divide the technology browser, technology cards, and selected-stack panel.",
      "The technology catalog loads from public/data.json and loading or error states are shown.",
      "React state tracks the selected technologies and enforces one selection per category.",
    ],
    challenges: [],
    futureImprovements: [
      "Persist selected technologies between browser sessions.",
      "Add filters for technology category and difficulty.",
      "Add verified mobile screenshots alongside the existing desktop capture.",
    ],
    clientRepo: "https://github.com/Shamim-Islam/DevStack",
    clientRepoLabel: "Shamim-Islam/DevStack",
    liveUrl: "https://fabulous-sunburst-07bc59.netlify.app/",
    image: "/projects/devstack.png",
    isPlaceholder: false,
    imagePlaceholderText:
      "A verified desktop screenshot is available. Add mobile or tablet captures here when available.",
  },
  {
    slug: "samzone",
    title: "Samzone",
    category: "Personal Portfolio Website",
    tagline:
      "A personal portfolio site with sections for an introduction, services, skills, work, blogs, and contact.",
    overview:
      "Samzone is a static personal portfolio website built with HTML, CSS, and JavaScript. It presents profile information and organizes content into familiar portfolio sections.",
    purpose:
      "The site provides a personal web presence for introducing its owner, highlighting design and development interests, showing work and blog content, and offering contact information.",
    featured: true,
    accentColor: "#ccff00",
    technologies: ["HTML", "CSS", "JavaScript"],
    features: [
      "Single-page navigation for Home, About, Services, Skills, Work, Blogs, and Contact sections.",
      "Personal introduction and profile content.",
      "Portfolio work and blog sections.",
      "Contact section with profile information.",
    ],
    implementationDetails: [
      "The repository contains a static index.html page, CSS stylesheets, and JavaScript files.",
      "Images and other visual assets are organized in the img directory.",
      "The site is published with GitHub Pages at the provided project URL.",
    ],
    challenges: [],
    futureImprovements: [
      "Review and refresh the portfolio content and technologies for the current learning journey.",
      "Add accessibility and responsive-layout checks for current screen sizes.",
      "Keep project, profile, and contact information up to date.",
    ],
    clientRepo: "https://github.com/Shamim-Islam/Samzone",
    clientRepoLabel: "Shamim-Islam/Samzone",
    liveUrl: "https://shamim-islam.github.io/Samzone/",
    image: "/projects/samzone.png",
    isPlaceholder: false,
    imagePlaceholderText:
      "A Samzone screenshot is available in the portfolio project assets.",
  },
];
