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
  resume: "/resume.pdf",
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
    title: "ShopEase — E-Commerce Platform",
    description: "Full-featured e-commerce web app with product management, cart, Stripe payments, admin dashboard, order tracking, and real-time inventory updates.",
    type: "web",
    tags: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Tailwind"],
    color: "cyan",
    github: "https://github.com/zeeshandev/shopease",
    live: "https://shopease-demo.vercel.app",
    featured: true,
    icon: "🛒",
  },
  {
    id: 2,
    title: "ChatSpace — Real-Time Chat App",
    description: "WhatsApp-style real-time messaging app with Socket.io, group chats, media sharing, message encryption, and online/offline status.",
    type: "web",
    tags: ["React", "Socket.io", "Node.js", "MongoDB", "JWT"],
    color: "pink",
    github: "https://github.com/zeeshandev/chatspace",
    live: "https://chatspace-demo.vercel.app",
    featured: true,
    icon: "💬",
  },
  {
    id: 3,
    title: "TaskFlow — Project Management",
    description: "Trello-inspired project management tool with drag-and-drop boards, task assignments, deadline tracking, team collaboration, and analytics.",
    type: "web",
    tags: ["Next.js", "TypeScript", "MongoDB", "Prisma", "Tailwind"],
    color: "purple",
    github: "https://github.com/zeeshandev/taskflow",
    live: "https://taskflow-demo.vercel.app",
    featured: true,
    icon: "📋",
  },
  {
    id: 4,
    title: "FoodZap — Food Delivery App",
    description: "React Native food delivery app for iOS & Android with real-time GPS tracking, restaurant listings, cart management, payments, and push notifications.",
    type: "mobile",
    tags: ["React Native", "Expo", "Firebase", "Maps API", "Stripe"],
    color: "green",
    github: "https://github.com/zeeshandev/foodzap",
    live: "https://play.google.com/store",
    featured: true,
    icon: "🍔",
  },
  {
    id: 5,
    title: "AuthGuard — Auth Microservice",
    description: "Production-ready authentication microservice with JWT, OAuth2 (Google/GitHub), 2FA, refresh tokens, rate limiting, and email verification.",
    type: "web",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Nodemailer"],
    color: "cyan",
    github: "https://github.com/zeeshandev/authguard",
    live: null,
    featured: false,
    icon: "🔐",
  },
  {
    id: 6,
    title: "FitTrack — Fitness Tracker App",
    description: "Cross-platform mobile fitness app with workout logging, calorie counter, progress charts, custom exercise builder, and Apple Health integration.",
    type: "mobile",
    tags: ["React Native", "Expo", "Firebase", "Redux", "Charts"],
    color: "green",
    github: "https://github.com/zeeshandev/fittrack",
    live: "https://apps.apple.com",
    featured: false,
    icon: "💪",
  },
  {
    id: 7,
    title: "BlogCraft — CMS Platform",
    description: "Full-stack blog CMS with rich text editor (Quill.js), SEO optimization, category management, comments system, newsletter subscription, and analytics.",
    type: "web",
    tags: ["Next.js", "Node.js", "MongoDB", "AWS S3", "Cloudinary"],
    color: "pink",
    github: "https://github.com/zeeshandev/blogcraft",
    live: "https://blogcraft-demo.vercel.app",
    featured: false,
    icon: "✍️",
  },
  {
    id: 8,
    title: "ExpenseApp — Finance Tracker",
    description: "Personal finance mobile app with expense tracking, budget planning, bill reminders, spending analytics with charts, and multi-currency support.",
    type: "mobile",
    tags: ["React Native", "Expo", "SQLite", "Redux Toolkit", "Victory Native"],
    color: "purple",
    github: "https://github.com/zeeshandev/expenseapp",
    live: "https://play.google.com/store",
    featured: false,
    icon: "💰",
  },
  {
    id: 9,
    title: "DevHire — Job Board Platform",
    description: "Developer-focused job board with company profiles, job listings, resume builder, application tracking, skill-based matching, and recruiter dashboard.",
    type: "web",
    tags: ["React", "Node.js", "MongoDB", "Redis", "Elasticsearch"],
    color: "cyan",
    github: "https://github.com/zeeshandev/devhire",
    live: "https://devhire-demo.vercel.app",
    featured: false,
    icon: "💼",
  },
  {
    id: 10,
    title: "MediCare — Appointment Booking",
    description: "Doctor appointment booking web app with real-time scheduling, patient records, video consultations (WebRTC), prescription management, and SMS reminders.",
    type: "web",
    tags: ["Next.js", "Node.js", "MongoDB", "WebRTC", "Twilio"],
    color: "green",
    github: "https://github.com/zeeshandev/medicare",
    live: "https://medicare-demo.vercel.app",
    featured: false,
    icon: "🏥",
  },
  {
    id: 11,
    title: "Newsly — News Aggregator App",
    description: "React Native news app aggregating from 50+ sources with category filtering, offline reading, bookmark sync, personalized feed, and dark mode.",
    type: "mobile",
    tags: ["React Native", "Expo", "News API", "AsyncStorage", "Reanimated"],
    color: "pink",
    github: "https://github.com/zeeshandev/newsly",
    live: "https://play.google.com/store",
    featured: false,
    icon: "📰",
  },
  {
    id: 12,
    title: "StoreAPI — REST API Boilerplate",
    description: "Production-ready Node.js REST API boilerplate with auth, CRUD operations, file uploads, rate limiting, caching, pagination, and full documentation.",
    type: "web",
    tags: ["Node.js", "Express", "MongoDB", "Redis", "Swagger", "Jest"],
    color: "purple",
    github: "https://github.com/zeeshandev/storeapi",
    live: null,
    featured: false,
    icon: "⚡",
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
