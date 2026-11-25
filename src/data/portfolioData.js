import { restaurantImg, mathImg } from "./projectImages.js";

export const personalInfo = {
  name: "Omar Elsawaf",
  firstName: "Omar",
  role: "Full-Stack Developer",
  headline: "I build web apps end to end — React on the front, Node.js or ASP.NET Core on the back.",
  tagline: "React & TypeScript on the front, Node.js or ASP.NET Core on the back. Based in Cairo, open to junior full-stack roles and paid internships.",
  email: "alsawaf.3mor@gmail.com",
  phone: "+20-103-244-2468",
  location: "Cairo, Egypt",
  bio: "I'm a full-stack developer in Cairo. Day to day that means React and TypeScript on the front and Node.js or ASP.NET Core on the back, with MongoDB, PostgreSQL or SQL Server underneath. Most recently I spent four months at ECM customizing SAP modules; before that, ten months at El-Mesery Group supporting internal systems and writing software for the production floor.",
  bioExtended: "I graduated in Computer Science from Modern Academy University in 2021, then trained at ITI (full-stack .NET) and Digilians (professional React). I care about the parts that never make the screenshot: schema design, authentication, and a test suite that actually passes.",
  resumeUrl: "/cv/Omar-Elsawaf-CV.pdf",
  socials: {
    github: "https://github.com/OmarELswaf",
    linkedin: "https://www.linkedin.com/in/omarelswaf/",
    fiverr: "https://www.fiverr.com/omarelswaf?public_mode=true",
    freelancer: "https://www.freelancer.com/u/alsawaf3mor",
    email: "mailto:alsawaf.3mor@gmail.com"
  }
};

export const stats = [
  { value: 1, suffix: "+", label: "Years Working" },
  { value: 17, suffix: "", label: "Featured Projects" },
  { value: 2, suffix: "", label: "Training Programs" },
  { value: 2, suffix: "", label: "Employers" }
];

export const skills = {
  frontend: [
    { name: "React.js", level: 90, icon: "SiReact" },
    { name: "Next.js", level: 75, icon: "SiNextdotjs" },
    { name: "TypeScript", level: 75, icon: "SiTypescript" },
    { name: "JavaScript", level: 90, icon: "SiJavascript" },
    { name: "Tailwind CSS", level: 85, icon: "SiTailwindcss" },
    { name: "Bootstrap", level: 80, icon: "SiBootstrap" },
    { name: "HTML5", level: 90, icon: "SiHtml5" },
    { name: "CSS3", level: 85, icon: "SiCss3" }
  ],
  backend: [
    { name: "Node.js", level: 85, icon: "SiNodedotjs" },
    { name: "Express.js", level: 85, icon: "SiExpress" },
    { name: "ASP.NET Core", level: 75, icon: "SiDotnet" },
    { name: "REST API", level: 88, icon: "SiPostman" },
    { name: "JWT Auth", level: 80, icon: "SiJsonwebtokens" },
    { name: "Mongoose", level: 80, icon: "SiMongodb" }
  ],
  database: [
    { name: "MongoDB", level: 82, icon: "SiMongodb" },
    { name: "SQL Server", level: 72, icon: "SiMicrosoftsqlserver" },
    { name: "PostgreSQL", level: 70, icon: "SiPostgresql" }
  ],
  tools: [
    { name: "Git/GitHub", level: 85, icon: "SiGit" },
    { name: "Docker", level: 70, icon: "SiDocker" },
    { name: "VS Code", level: 90, icon: "SiVscodium" },
    { name: "Vercel", level: 80, icon: "SiVercel" },
    { name: "Postman", level: 82, icon: "SiPostman" }
  ]
};

export const experience = [
  {
    id: 1,
    role: "SAP Developer (Junior / Trainee)",
    company: "ECM",
    period: "Mar 2025 - Jun 2025",
    description: [
      "Developed and customized SAP modules based on business requirements",
      "Supported implementation and maintenance of SAP solutions in enterprise systems",
      "Debugged and resolved issues in SAP workflows and processes",
      "Worked with IT and business teams to improve system efficiency and data flow"
    ],
    tech: ["SAP", "Enterprise Systems", "Debugging", "Business Workflows"]
  },
  {
    id: 2,
    role: "IT Support / Junior Software Developer",
    company: "El-Mesery Group for Textile & Weaving",
    period: "Apr 2024 - Jan 2025",
    description: [
      "Provided technical support for internal systems and employees",
      "Maintained and troubleshot IT infrastructure and network issues",
      "Supported software tools used in production and administrative departments",
      "Contributed to development and system-improvement tasks under supervision"
    ],
    tech: ["IT Support", "Troubleshooting", "Internal Tools", "Networks"]
  },
  {
    id: 3,
    role: "Professional React Web Development (Trainee)",
    company: "Digilians - Military Academy",
    period: "Jan 2026 - Jul 2026",
    description: [
      "Intensive professional React development program",
      "Built applications with modern React patterns, hooks and state management",
      "Worked on performance, testing and deployment practices",
      "Shipped the Al-Qabbani company profile site as applied project work"
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"]
  },
  {
    id: 4,
    role: "Full Stack .NET Track (Trainee)",
    company: "Information Technology Institute (ITI)",
    period: "Nov 2023 - Mar 2024",
    description: [
      "Four-month intensive full-stack .NET program",
      "Built CRUD applications with ASP.NET Core MVC and Entity Framework Core",
      "Implemented authentication and role-based access control",
      "Graduation project: Shipping Management System"
    ],
    tech: ["ASP.NET Core", "Entity Framework", "C#", "SQL Server", "Bootstrap"]
  }
];

export const projects = [
  {
    id: 17,
    title: "FairSlot - Waitlist Booking App",
    description: "Booking app where a cancelled slot is offered to the next person on the waitlist with a time-limited claim, and simultaneous bookings of the same slot let only one succeed. React front end, ASP.NET Core Web API and SQL Server. SMS notifications are simulated. A personal learning project on free hosting with synthetic data; the demo may take a moment to wake.",
    image: "/fairslot.jpg",
    category: "fullstack",
    tech: ["React", "ASP.NET Core", "C#", "SQL Server", "Concurrency"],
    liveUrl: "https://fairslot-demo.runasp.net/",
    githubUrl: null,
    featured: true
  },
  {
    id: 18,
    title: "FixFlow - Multi-tenant Repair Shop SaaS",
    description: "Arabic-first (RTL, English supported) app for phone and laptop repair shops: repair orders with a status workflow, parts inventory, reports and a public page per shop. Tenants are isolated with PostgreSQL row-level security. React, TypeScript, NestJS, Prisma, installable PWA. A development demo with fake data and no billing; the free host sleeps when idle, so the first load can take about a minute. Built with AI assistance.",
    image: "/fixflow.jpg",
    category: "fullstack",
    tech: ["React", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "PWA", "Arabic RTL"],
    liveUrl: "https://fixflow-demo-y125.onrender.com/s/demo-repair-shop",
    githubUrl: null,
    featured: true
  },
  {
    id: 16,
    title: "Alsawaf Math Platform - Teacher Landing Page & Learning Platform",
    description: "Arabic RTL landing page and learning platform I am building for my father, a math teacher: student, parent, teacher and admin roles, teacher-made exams with auto-grading, parent follow-up of results, and a question bank by grade. Installable PWA on free hosting. Early-stage and not yet used with real students; built with AI assistance.",
    image: mathImg,
    category: "fullstack",
    tech: ["HTML", "CSS", "JavaScript", "Supabase", "PostgreSQL", "PWA", "Arabic RTL"],
    liveUrl: "https://alsawaf-math.pages.dev/",
    githubUrl: null,
    featured: true
  },
  {
    id: 15,
    title: "Restaurant Ordering SaaS (Egypt)",
    description: "Ordering platform for Egyptian restaurants, Arabic throughout: a customer website with cart and checkout, a simulated WhatsApp-style ordering bot in Egyptian Arabic, live order tracking, a PIN-protected owner dashboard with reports and analytics, a platform admin with plans, InstaPay/Vodafone Cash payment-proof review, and self-serve restaurant onboarding. Demo on free Cloudflare hosting with fictional restaurants; the chat is a browser simulation, not a real WhatsApp integration. Built with AI assistance.",
    image: restaurantImg,
    category: "fullstack",
    tech: ["Cloudflare Workers", "D1", "JavaScript", "REST API", "Arabic RTL", "PWA"],
    liveUrl: "https://restaurant-saas-demo.alsawaf-3mor.workers.dev",
    githubUrl: null,
    featured: true
  },
  {
    id: 13,
    title: "GymPilot - Gym Management Platform",
    description: "Multi-tenant gym management platform, live in beta: members and subscription plans with balances, QR-code check-in, class scheduling and booking, a member self-service app, billing and reports, in a bilingual Arabic-English UI. Paymob online payments are wired in sandbox mode. Personal project built with AI assistance; no production customers.",
    image: "/gympilot.png",
    category: "fullstack",
    tech: ["React", "TypeScript", "NestJS", "Prisma", "PostgreSQL", "Paymob (sandbox)"],
    liveUrl: "https://gympilot-beta.vercel.app/",
    githubUrl: null,
    featured: true
  },
  {
    id: 6,
    title: "Souq - MERN E-Commerce Store",
    description: "Full-stack e-commerce: Express + MongoDB API (JWT auth, bcrypt, server-side pricing and stock handling) behind a React + Vite storefront with search, filters, cart and cash-on-delivery checkout. API test suite included. Live demo runs on clearly labeled demo data.",
    image: "/souq-home.png",
    category: "fullstack",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Vite"],
    liveUrl: "https://souq-store-roan.vercel.app/",
    githubUrl: "https://github.com/OmarELswaf/souq-store",
    featured: true
  },
  {
    id: 7,
    title: "Tabboush - QR Menu & WhatsApp Ordering",
    description: "White-label multi-tenant QR-menu platform for restaurants, Arabic RTL throughout: customer accounts with order history, cart and wa.me WhatsApp ordering, plus an admin panel for menu, branding and order statuses. Serverless Node API with JWT auth and MongoDB models; the live demo runs on clearly labeled demo data in static-fallback mode, no database needed.",
    image: "/tabboush-menu.jpg",
    category: "fullstack",
    tech: ["React", "Vite", "Node.js", "MongoDB", "JWT", "Vercel"],
    liveUrl: "https://tabboush-menu.vercel.app/r/tabboush",
    githubUrl: "https://github.com/OmarELswaf/tabboush-menu",
    featured: true
  },
  {
    id: 8,
    title: "Nexus Admin - Dashboard & JWT Auth API",
    description: "Full-stack admin dashboard for a store: Express API with short-lived JWT access tokens, rotating httpOnly refresh cookies, bcrypt hashing, role-based access (viewer/manager/admin), rate limiting and zod validation, behind a React + Tailwind + Recharts UI with revenue analytics, order management and user administration. 7 integration tests cover the auth flow and RBAC. Live demo runs on clearly labeled seeded demo data.",
    image: "/nexus-admin.jpg",
    category: "fullstack",
    tech: ["Node.js", "Express", "React", "Tailwind", "JWT", "Recharts"],
    liveUrl: "https://nexus-admin-two-alpha.vercel.app",
    githubUrl: "https://github.com/OmarELswaf/nexus-admin",
    featured: true
  },
  {
    id: 9,
    title: "Qisr - URL Shortener & Click Analytics",
    description: "Full-stack URL shortener: Express API with zod validation, rate limiting, helmet and QR codes, plus a React dashboard with Recharts click analytics (daily clicks, referrers, devices). 9 integration tests cover create, redirect, tracking and stats. Live demo runs on clearly labeled seeded demo data.",
    image: "/qisr-dashboard.png",
    category: "fullstack",
    tech: ["Node.js", "Express", "React", "Tailwind", "Recharts", "zod"],
    liveUrl: "https://qisr-iota.vercel.app",
    githubUrl: "https://github.com/OmarELswaf/qisr",
    featured: true
  },
  {
    id: 10,
    title: "Majlis - Realtime Chat Rooms",
    description: "Realtime chat rooms with Socket.io: live messaging, presence and typing indicators, MongoDB persistence via Mongoose behind a swappable store interface, React + Tailwind client. 11 tests cover the REST API and the realtime socket flow with two live clients. Hosted demo is honestly labeled as simulated (WebSockets need a long-lived server); the full backend runs locally in one command.",
    image: "/majlis-chat.png",
    category: "fullstack",
    tech: ["Node.js", "Socket.io", "MongoDB", "Express", "React", "Tailwind"],
    liveUrl: "https://majlis-chat-delta.vercel.app",
    githubUrl: "https://github.com/OmarELswaf/majlis-chat",
    featured: true
  },
  {
    id: 12,
    title: "Makhzan - GitHub Explorer",
    description: "GitHub explorer on the live public REST API (no key): debounced search across 400M+ repositories and 100M+ developers, client-side sorting by stars, forks or recency, profile drill-down with a language-distribution bar and top repos, and recent searches persisted locally. Pure mapping layer covered by 9 unit tests. All data is live, no demo data.",
    image: "/makhzan.png",
    category: "frontend",
    tech: ["React", "Vite", "Tailwind", "GitHub API"],
    liveUrl: "https://makhzan-phi.vercel.app",
    githubUrl: "https://github.com/OmarELswaf/makhzan",
    featured: true
  },
  {
    id: 11,
    title: "Sahab - Weather Dashboard",
    description: "Weather dashboard on the free Open-Meteo API (no key): city search with autocomplete, geolocation, current conditions, a 24-hour temperature chart and a 7-day forecast with week-scaled range bars. °C/°F toggle and last city persisted. Pure mapping module covered by 7 unit tests. All data is live, no demo data.",
    image: "/sahab-weather.png",
    category: "frontend",
    tech: ["React", "Vite", "Tailwind", "Recharts", "Open-Meteo API"],
    liveUrl: "https://sahab-weather-six.vercel.app",
    githubUrl: "https://github.com/OmarELswaf/sahab-weather",
    featured: true
  },
  {
    id: 1,
    title: "Sanda - Workforce Management Platform",
    description: "MERN platform connecting companies with workers: REST APIs for jobs, attendance and payments, JWT auth with role-based access, QR-code check-in, PWA for mobile. Team project; public frontend repo.",
    image: null,
    category: "fullstack",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "PWA"],
    liveUrl: null,
    githubUrl: "https://github.com/Hossam-hassan-h/sanda-front",
    featured: true
  },
  {
    id: 2,
    title: "Task Management App",
    description: "React 18 + TypeScript on a fully local Supabase stack (PostgreSQL 17, GoTrue, PostgREST, Kong gateway) via Docker Compose. Row-level security isolates each user's data; 44 Vitest tests cover auth, CRUD and filtering.",
    image: null,
    category: "fullstack",
    tech: ["React 18", "TypeScript", "PostgreSQL", "Supabase", "Docker Compose", "Vitest"],
    liveUrl: null,
    githubUrl: "https://github.com/OmarELswaf/task-management",
    featured: true
  },
  {
    id: 3,
    title: "Shipping Management System",
    description: "ASP.NET Core MVC application with Entity Framework Core: CRUD for shipments and users, authentication with role-based authorization, responsive Bootstrap UI. ITI graduation project.",
    image: null,
    category: "fullstack",
    tech: ["ASP.NET Core MVC", "EF Core", "SQL Server", "Bootstrap"],
    liveUrl: null,
    githubUrl: "https://github.com/OmarELswaf/Shipping-System",
    featured: true
  },
  {
    id: 4,
    title: "Al-Qabbani Company Profile",
    description: "Arabic (RTL) company profile website for 2026, built with React, Vite and Framer Motion: animated sections and full right-to-left layout with Arabic typography.",
    image: null,
    category: "frontend",
    tech: ["React", "Vite", "Framer Motion", "Arabic RTL"],
    liveUrl: null,
    githubUrl: "https://github.com/OmarELswaf/elkbany",
    featured: false
  },
  {
    id: 5,
    title: "Salary Manager",
    description: "Arabic payroll manager (مدير الرواتب): employee and salary administration with dashboard statistics, built as a fully RTL single-page app.",
    image: null,
    category: "frontend",
    tech: ["JavaScript", "CSS", "Arabic RTL", "Dashboard"],
    liveUrl: null,
    githubUrl: "https://github.com/OmarELswaf/-salary-app",
    featured: false
  }
];

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" }
];
