
export const personalInfo = {
  name: "Omar Elsawaf",
  firstName: "Omar",
  role: "MERN Stack Developer",
  tagline: "Building performant web applications with React & Node.js",
  email: "alsawaf.3mor@gmail.com",
  phone: "+20-103-244-2468",
  location: "Cairo, Egypt",
  bio: "Motivated Full Stack Developer (MERN) with strong foundations in React.js, Next.js, Node.js, and NestJS. I build scalable web applications with focus on RESTful APIs, database design, and modern software architecture. I'm passionate about creating clean, maintainable code and delivering high-performance solutions that meet user expectations.",
  bioExtended: "Bachelor of Computer Science from Modern Academy University (2021). Completed professional training in Full Stack .NET and React Web Development. I believe in continuous learning, problem-solving, and applying SOLID principles and design patterns to every project.",
  resumeUrl: "https://drive.google.com/file/d/1odoqtUbu9vCplECuH8lrRUHzgoWh9lOl/view?usp=drive_link",
  socials: {
    github: "https://github.com/OmarELswaf",
    linkedin: "https://www.linkedin.com/in/omarelswaf/",
    twitter: "https://twitter.com/omarelswaf",
    email: "mailto:alsawaf.3mor@gmail.com"
  }
};

export const stats = [
  { value: 1, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: "+", label: "Major Projects" },
  { value: 2, suffix: "+", label: "Professional Trainings" },
  { value: 8, suffix: "+", label: "Tech Stack Skills" }
];

export const skills = {
  frontend: [
    { name: "React.js", level: 95, icon: "SiReact" },
    { name: "Redux", level: 85, icon: "SiRedux" },
    { name: "Next.js", level: 80, icon: "SiNextdotjs" },
    { name: "Tailwind CSS", level: 90, icon: "SiTailwindcss" },
    { name: "JavaScript", level: 95, icon: "SiJavascript" },
    { name: "HTML5", level: 95, icon: "SiHtml5" },
    { name: "CSS3", level: 90, icon: "SiCss3" },
    { name: "TypeScript", level: 75, icon: "SiTypescript" }
  ],
  backend: [
    { name: "Node.js", level: 90, icon: "SiNodedotjs" },
    { name: "Express.js", level: 90, icon: "SiExpress" },
    { name: "NestJS", level: 75, icon: "SiNestjs" },
    { name: "REST API", level: 92, icon: "SiPostman" },
    { name: "Mongoose", level: 85, icon: "SiMongodb" },
    { name: "JWT", level: 85, icon: "SiJsonwebtokens" }
  ],
  database: [
    { name: "MongoDB", level: 88, icon: "SiMongodb" },
    { name: "SQL Server", level: 75, icon: "SiMicrosoftsqlserver" },
    { name: "MySQL", level: 70, icon: "SiMysql" },
    { name: "Postman", level: 85, icon: "SiPostman" }
  ],
  tools: [
    { name: "Git/GitHub", level: 90, icon: "SiGit" },
    { name: "VS Code", level: 95, icon: "SiVscodium" },
    { name: "Docker", level: 70, icon: "SiDocker" },
    { name: "Vercel", level: 85, icon: "SiVercel" },
    { name: "Render", level: 75, icon: "SiRender" },
    { name: "Netlify", level: 80, icon: "SiNetlify" }
  ]
};

export const experience = [
  {
    id: 1,
    role: "Full Stack .NET Developer",
    company: "Information Technology Institute (ITI)",
    period: "Nov 2023 - Mar 2024",
    description: [
      "Completed comprehensive Full Stack .NET training program",
      "Built full CRUD applications with ASP.NET Core MVC and Entity Framework",
      "Implemented authentication, role-based access control, and server-side validation",
      "Developed Shipping Management System with file uploads and third-party integrations"
    ],
    tech: ["ASP.NET Core", "Entity Framework", "C#", "SQL Server", "Bootstrap"]
  },
  {
    id: 2,
    role: "Professional React Web Developer",
    company: "Digilians",
    period: "Jan 2026 - Jul 2026",
    description: [
      "Advanced React.js development training and best practices",
      "Built production-ready applications with modern React patterns",
      "Implemented complex state management and optimization techniques",
      "Focused on performance, testing, and deployment strategies"
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vercel"]
  },
  {
    id: 3,
    role: "Full Stack MERN Developer",
    company: "Personal Projects",
    period: "2026 - Present",
    description: [
      "Developed full-stack MERN applications with RESTful APIs",
      "Implemented JWT authentication and protected routes",
      "Built responsive UIs with Tailwind CSS and modern design patterns",
      "Deployed applications on Vercel, Render, and Netlify"
    ],
tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"]
  },

{
    id: 4,
    role: "Wazuf Job Finder App",
    company: "Graduation Project",
    period: "2026",
    title: "Wazuf Job Finder App",
    description: [
      "Modern job search platform inspired by Wuzzuf with authentication, job listings, advanced filtering, and responsive UI."
    ],
    image: "/projects/wazuf-app.png",
    category: "fullstack",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 5,
    role: "News Application",
    company: "News Application API Project",
    period: "2026", 
    title: "News Application",
    description: [
      "Responsive news platform consuming external APIs with category filtering, search functionality, and dynamic article rendering."
    ],
    image: "/projects/news-app.png",
    category: "frontend",
    tech: ["React.js", "REST API", "JavaScript", "CSS3"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
{
    id: 6,
    role: "E-Commerce Platform",
    company: "Personal Project",
    period: "2026",
    title: "Advanced E-Commerce Platform",
    description: [
      "Full-stack e-commerce application with authentication, product management, shopping cart, checkout flow, and admin dashboard."
    ],
    image: "/projects/ecommerce-app.png",
    category: "fullstack",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  }
];

export const projects = [
  {
    id: 1,
    title: "Shipping Management System",
    description: [
      "Full-stack application for managing shipments, users, and delivery statuses with file uploads and vendor integrations"
    ],
    image: null,
    category: "fullstack",
    tech: ["ASP.NET Core", "Entity Framework", "SQL Server", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Web Application",
    description: [
      "Scalable MERN stack application featuring product listing, shopping cart, user authentication, and responsive design"
    ],
    image: null,
    category: "fullstack",
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 3,
    title: "Task Management System",
    description: [
      "Full CRUD application with JWT authentication, protected routes, and RESTful API integration"
    ],
    image: null,
    category: "fullstack",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true
  },
  {
    id: 4,
    title: "CRUD Operations System",
    description: [
      "Full-stack application with RESTful APIs and structured data management using MongoDB and Express.js"
    ],
    image: null,
    category: "fullstack",
    tech: ["Node.js", "Express.js", "MongoDB", "REST API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  },
  {
    id: 5,
    title: "Tic Tac Toe Game",
    description: [
      "Interactive web application built with React.js featuring state management and responsive UI styling"
    ],
    image: null,
    category: "frontend",
    tech: ["React.js", "JavaScript", "CSS3"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false
  }
];

export const testimonials = [
  {
    id: 1,
    name: "ITI Mentor",
    role: "Full Stack .NET Training",
    text: "Demonstrated strong grasp of enterprise application development with ASP.NET Core. Excellent problem-solving and quick learning ability.",
    rating: 5,
    avatar: null
  },
  {
    id: 2,
    name: "Digilians Instructor",
    role: "Professional React Web Developer",
    text: "Omar shows exceptional understanding of React best practices and modern development patterns. Ready for professional-level projects.",
    rating: 5,
    avatar: null
  },
  {
    id: 3,
    name: "Modern Academy",
    role: "Bachelor of Computer Science",
    text: "Strong academic foundation with practical application of computer science principles. Well-prepared for professional development roles.",
    rating: 5,
    avatar: null
  }
];

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" }
];
