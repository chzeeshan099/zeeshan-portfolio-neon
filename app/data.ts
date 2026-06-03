// ============================================================
// PORTFOLIO DATA - Zeeshan
// Update this file to change your portfolio content
// ============================================================

export const personalInfo = {
  name: "Zeeshan",
  fullName: "Zeeshan Akram",
  role: "MERN Stack Developer",
  roles: [
    "MERN Stack Developer",
    // "Full Stack Engineer",
    "Mobile App Developer",
  ],
  tagline: "Building scalable web & mobile experiences",
  bio: "Full Stack Developer with 2+ years of hands on experience building production grade web and cross platform mobile applications. I specialize in the MERN Stack and React Native, turning complex requirements into clean, scalable, and high performance digital products.",
  bio2: "Whether its architecting REST APIs, crafting real time systems, building e commerce platforms, or shipping mobile apps.  I deliver end to end solutions using modern technologies including Next.js, Vue.js, MongoDB, Firebase, Supabase, and Docker.",
  email: "zeeshanfsdev099@gmail.com",
  phone: "+92 3097335099",
  location: "Pakistan",
  github: "https://github.com/chzeeshan099",
  linkedin: "https://www.linkedin.com/in/muhammad-zeeshan-akram-a4026b381",
  resume: "/Zeeshan-CV.pdf",
  yearsExperience: 2,
  projectsCompleted: 10,
  happyClients: 10,
  techStacks: 12,
};

export const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    shortDegree: "BSCS",
    institution: "University of Okara",
    period: "2021 – 2025",
    status: "Comple",
     description:
      "Pursuing a rigorous CS degree with a strong foundation in " +
      "software engineering, algorithms, and system design. " +
      "Actively applying academic knowledge through real-world " +
      "freelance and professional development experience " +
      "alongside full-time studies.",
    grade: "3.2 CGPA",
    courses:
     [
      "Data Structures & Algorithms", 
      "Software Engineering",
      "Database Systems",
      "Web Development",
      "Mobile Application Development",
      "Computer Networks", 
      "Object-Oriented Programming",
      "Operating Systems",
      "Artificial Intelligence",
    ],
  },
];

export const experience = [
  {
    title: "Full Stack Developer",
    company: "INVEXTECH",
    period: "2023 – 2025",
    type: "Full-time",
    description:
      "Leading full stack development of scalable web applications and SaaS applications " +
      "using the MERN Stack. Responsible for architecting RESTful APIs, " +
      "implementing secure authentication systems (JWT/OAuth), building " +
      "responsive and performant UIs, and mentoring junior developers.",
     achievements: [
      "Engineered 10+ production-ready web applications serving real users",
      "Optimized API response time by 40% through query tuning & caching",
      "Designed and implemented CI/CD pipelines using GitHub Actions",
      "Mentored and led a team of 3 junior developers",
      "Integrated third-party services: Stripe, Cloudinary, SendGrid", 
    ],
    tech: ["MongoDB", "Express.js", "React", "TypeScript", "Next.js", "Vue", "Node.js", "Redux", "AWS" , "Docker",],
  },
  {
    title: "React Native Developer",
    company: "APTAGON ",
    period: "2022 – 2023",
    type: "Full-time",
      description:
      "Developed and shipped cross-platform mobile applications for " +
      "iOS and Android using React Native and Expo. Collaborated with " +
      "designers and backend teams to integrate third-party APIs, " +
      "implement real-time features, and ensure smooth app performance.",
    achievements: [
      "Successfully delivered 4 mobile apps to App Store & Google Play",
      "Maintained 4.5+ star user ratings across all published apps",
      "Implemented push notifications, real-time chat & live tracking",
      "Reduced app load time by 35% through lazy loading & optimization",
      "Integrated Firebase Auth, Firestore & Cloud Messaging",
    ],
    tech: ["React Native", "Expo", "TypeScript" , "Firebase", "Redux Toolkit", "REST APIs"],
  },
];

export const skills = [
  // Frontend
  { name: "React.js", level: 92, category: "Frontend", color: "cyan" },
  { name: "Next.js", level: 85, category: "Frontend", color: "cyan" },
  { name: "Vue.js",           level: 75, category: "Frontend", color: "cyan" },
  { name: "TypeScript", level: 78, category: "Frontend", color: "cyan" },
  { name: "Tailwind CSS", level: 90, category: "Frontend", color: "cyan" },
  { name: "Redux / Zustand", level: 82, category: "Frontend", color: "cyan" },
  { name: "Framer Motion",    level: 80, category: "Frontend", color: "cyan" },

  // Backend
  { name: "Node.js", level: 88, category: "Backend", color: "green" },
  { name: "Express.js", level: 90, category: "Backend", color: "green" },
  { name: "REST APIs", level: 92, category: "Backend", color: "green" },
  { name: "GraphQL", level: 65, category: "Backend", color: "green" },
  { name: "Socket.io", level: 75, category: "Backend", color: "green" },

  // Database
  { name: "MongoDB", level: 88, category: "Database", color: "purple" },
  { name: "Mongoose", level: 85, category: "Database", color: "purple" },
  { name: "Supabase",         level: 75, category: "Database", color: "purple" },
  { name: "PostgreSQL", level: 70, category: "Database", color: "purple" },
  { name: "Redis", level: 65, category: "Database", color: "purple" },

  // Mobile
  { name: "React Native", level: 87, category: "Mobile", color: "pink" },
  { name: "Expo", level: 82, category: "Mobile", color: "pink" },
  { name: "Firebase", level: 78, category: "Mobile", color: "pink" },

  // DevOps & Tools
  { name: "Git / GitHub", level: 90, category: "Tools", color: "cyan" },
  { name: "Docker", level: 68, category: "Tools", color: "cyan" },
  { name: "AWS (EC2/S3)", level: 60, category: "Tools", color: "cyan" },
  { name: "Postman", level: 92, category: "Tools", color: "cyan" },
  { name: "Vercel / Netlify", level: 85, category: "Tools",    color: "cyan" },

  // Design & CMS
  { name: "Figma",            level: 75, category: "Design",   color: "green" },
  { name: "Shopify",          level: 72, category: "Design",   color: "green" },
  { name: "WordPress",        level: 70, category: "Design",   color: "green" },
];



export const projects = [
  {
    id: 1,
    title: "A Freelance Job Marketplace",
    description: "Workless is a dynamic freelance marketplace platform designed with a role-based system, allowing users to sign in as either clients or contractors. Clients can create and manage project listings based on their needs, while contractors can browse available projects and express interest by sending messages or comments. Clients can evaluate responses and hire the most suitable contractor directly through the platform. The application features a responsive UI with light and dark mode support and is fully integrated with RESTful APIs to handle all operations, including project management, messaging, media uploads, and user interactions.",
    tags: ["Next.js","TypeScript", "Node.js", "MongoDB", "Stripe", "Redux", "Tailwind"],
    color: "cyan",
    // github: "https://github.com/zeeshandev/shopease",
    live: "https://app.workless.ai",
    featured: true,
    icon: "Briefcase",
  },
  {
    id: 2,
    title: "Crypto Wallet & Trading Platform",
    description: "MoneyMutt is a full-featured crypto platform designed to support the use and trading of MoneyMutt Coin. The application includes a modern landing page and role-based dashboards for users and admins, offering real-time views of wallet activity, transactions, and platform analytics. Users can connect their crypto wallets, buy MoneyMutt Coin, and execute trades seamlessly. The platform features over 10 responsive UI screens, modular components, smooth onboarding, and full light/dark mode support for an optimal user experience across devices.",
    tags: ["Next.js","TypeScript", "Socket.io", "Node.js", "MongoDB","Framer Motion", "JWT"],
    color: "pink",
    // github: "https://github.com/zeeshandev/chatspace",
    live: "https://money-mutt-frontend.vercel.app",
    featured: true,
    icon: "Wallet",
  },
  {
    id: 3,
    title: "Cooper Build - Construction Management",
    description:"Cooper Build is a comprehensive construction management product built for the New York construction industry. It streamlines the end-to-end management of labor, materials, and on-site resources, enabling efficient project planning and execution. The platform features robust dashboards, dynamic data tables, and model views for real-time oversight. Designed for scalability, Cooper Build has evolved over time, continually integrating new features and enhancements to meet the complex needs of modern construction operations.",
    tags: ["Next.js",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
      "Rest APIS",
      "Apollo Client",
      "Framer Motion",],
    color: "green",
    // github: "https://github.com/zeeshandev/foodzap",
    live: "https://app.cooperbuild.ai",
    featured: true,
    icon: "HardHat",
  },
  {
    id: 4,
    title: "NG1 City Cleaner",
    description:"NG1 City Cleaner is a smart waste management and city cleaning platform developed for Nottingham City. Built with Vue.js, it enables efficient management of municipal cleaning operations through real-time monitoring, task assignment, and performance tracking. The platform features interactive dashboards, live data visualization, and a responsive admin interface optimized for both desktop and mobile users.",
    tags: ["Vue.js",
      "Tailwind CSS",
      "Firebase",
      "REST APIs",
      "Chart.js",
      "Vite",],
    color: "cyan",
    // github: "https://github.com/zeeshandev/authguard",
    live: "https://ng1citycleaners.co.uk/",
    featured: true,
    icon: "Trash2",
  },
  {
    id: 5,
    title: "Cyber Online Shopping",
    description: "Cyber  A modern frontend e-commerce website with full shopping features, built in React and managed with Redux.",
    tags: ["React.js", "Bootstrap", "Redux"],
    color: "green",
    // github: "https://github.com/zeeshandev/fittrack",
    live: "https://ecomrence-bszk-git-main-muhammad-zeeshan-akrams-projects.vercel.app/",
    featured: true,
    icon: "ShoppingCart",
  },
  {
    id: 6,
    title: "InvexTech",
    description: "We developed the official website for Invextech Software House, showcasing all of their completed projects and the range of services they offer to clients. The site provides a professional and responsive UI to represent the company’s digital presence. The project was built using Next.js with TypeScript, and styled using Tailwind CSS andRizzUI.",
    tags: ["Next.js", "Tailwind css", "Rest Api", "RizzUI", "TypeScript"],
    color: "pink",
    // github: "https://github.com/zeeshandev/blogcraft",
    live: "https://invextech.com/",
    featured: true,
    icon: "Building2",
  },
  
];


export const services = [
  {
    icon: "Globe",
    title: "MERN Stack Development",
    description:
      "End-to-end web applications built with MongoDB, Express, " +
      "React, and Node.js — scalable architecture, secure backends, " +
      "and polished UIs ready for production.",
    color: "cyan",
  },
  {
    icon: "Smartphone",
    title: "React Native Mobile Apps",
    description:
      "Cross-platform iOS & Android applications with native-level " +
      "performance, smooth animations, and seamless third-party " +
      "integrations via Expo.",
    color: "pink",
  },
  {
    icon: "LayoutDashboard",
    title: "SaaS Product Development",        // ← NEW
    description:
      "Building multi-tenant SaaS platforms with subscription flows, " +
      "role-based access control, dashboards, and scalable " +
      "cloud infrastructure.",
    color: "indigo",
  },
  {
    icon: "Server",
    title: "REST API & Backend Design",
    description:
      "Clean, well-documented RESTful APIs with JWT/OAuth auth, " +
      "input validation, rate limiting, and Redis caching " +
      "for high-performance backends.",
    color: "green",
  },
  {
    icon: "ShoppingCart",
    title: "E-Commerce Solutions",             // ← NEW
    description:
      "Custom e-commerce platforms and Shopify integrations — " +
      "product management, payment gateways (Stripe), order " +
      "tracking, and admin dashboards.",
    color: "orange",
  },
  {
    icon: "Zap",
    title: "Performance Optimization",
    description:
      "Auditing and optimizing web & mobile apps for Core Web " +
      "Vitals, SEO, lazy loading, bundle size, and API " +
      "response times.",
    color: "purple",
  },
  {
    icon: "GitBranch",
    title: "DevOps & Deployment",              // ← NEW
    description:
      "Setting up CI/CD pipelines, Dockerized environments, " +
      "and deploying to AWS, Vercel, or Netlify with " +
      "zero-downtime workflows.",
    color: "teal",
  },
  {
    icon: "Figma",
    title: "UI/UX to Code",                   // ← NEW
    description:
      "Converting Figma designs into pixel-perfect, responsive " +
      "React interfaces with smooth Framer Motion animations " +
      "and Tailwind CSS.",
    color: "rose",
  },
];

// export const services = [
//   {
//     icon: "🌐",
//     title: "MERN Stack Development",
//     description: "Full-stack web apps from MongoDB to React UI — scalable, secure, and production-ready.",
//     color: "cyan",
//   },
//   {
//     icon: "📱",
//     title: "React Native Apps",
//     description: "Cross-platform iOS & Android apps with native performance and smooth UX.",
//     color: "pink",
//   },
//   {
//     icon: "🔗",
//     title: "REST API Design",
//     description: "Clean, well-documented RESTful APIs with authentication, validation, and caching.",
//     color: "green",
//   },
//   {
//     icon: "🚀",
//     title: "Performance Optimization",
//     description: "Optimizing web & mobile apps for speed, SEO, and an excellent user experience.",
//     color: "purple",
//   },
// ];
