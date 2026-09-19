export const profile = {
  name: 'Aditya Kumar Srivastava',
  initials: 'AS',
  headline: 'DATA ENGINEER',
  secondaryRole: 'FULL-STACK DEVELOPER',
  tagline: 'Building scalable data systems, powerful backend architectures and modern digital experiences.',
  freelanceStatus: 'Available for Freelance Projects',
  email: 'adityasatyam.30@gmail.com // Professional placeholder / contact email
  phone: '+91 91709 99094',
  linkedin: 'https://www.linkedin.com/in/aditya-kumar-srivastava-1965a7247/', 
  github: 'https://github.com/tanmay019ai/aditya-kumar-portfolio', 
  location: 'New Delhi, India',
};

export const experience = [
  {
    id: 1,
    role: 'Data Engineer',
    company: 'Silver Touch Technologies Ltd.',
    type: 'Full-time' as const,
    period: 'Jul 2026 – Present',
    location: 'New Delhi, Delhi, India',
    mode: 'On-site' as const,
    current: true,
    description:
      'Working as a Data Engineer building scalable data pipelines, optimizing SQL queries, and designing data architectures for enterprise-level systems.',
    skills: ['SQL', 'Data Engineering', 'Data Pipelines', 'Databases', 'Data Processing'],
  },
  {
    id: 2,
    role: 'Intern',
    company: 'National Informatics Centre, MeitY',
    type: 'Full-time' as const,
    period: 'Sep 2025 – Nov 2025',
    location: 'New Delhi, Delhi, India',
    mode: 'On-site' as const,
    current: false,
    description:
      'Contributed to government technology projects at National Informatics Centre under the Ministry of Electronics and Information Technology.',
    skills: ['Data Processing', 'Backend Development', 'Database Systems'],
  },
  {
    id: 3,
    role: 'Full-Stack Developer / Freelancer',
    company: 'Independent',
    type: 'Freelance' as const,
    period: 'Ongoing',
    location: 'Remote',
    mode: 'Remote' as const,
    current: true,
    description:
      'Building full-stack web applications, responsive websites, backend APIs, database integrations, data dashboards, and handling deployment and performance optimization for independent projects and clients.',
    skills: [
      'Full-stack Web Applications',
      'Responsive Websites',
      'Backend APIs',
      'Database Integration',
      'Data Dashboards',
      'Deployment',
      'Performance Optimization',
    ],
  },
];

export const education = {
  university: 'Galgotias University',
  degree: 'Bachelor of Technology – BTech',
  field: 'Computer Science',
  period: '2022 – 2026',
};

export const skills = {
  dataEngineering: {
    label: 'DATA ENGINEERING',
    items: ['SQL', 'Data Engineering', 'Data Processing', 'Databases', 'Data Pipelines'],
  },
  backend: {
    label: 'BACKEND',
    items: ['Java', 'Spring Boot', 'Node.js', 'REST APIs'],
  },
  frontend: {
    label: 'FRONTEND',
    items: ['JavaScript', 'React', 'Next.js', 'TypeScript', 'HTML', 'CSS', 'Tailwind CSS'],
  },
  tools: {
    label: 'TOOLS',
    items: ['Git', 'GitHub', 'Docker', 'Vercel'],
  },
};

export const projects = [
  {
    id: 'dataflow',
    number: '01',
    name: 'DATAFLOW',
    subtitle: 'Intelligent Data Pipeline Platform',
    description:
      'A system that visualizes the complete journey of data from ingestion to analytics with real-time pipeline monitoring.',
    problem:
      'Modern data systems are complex and opaque. Teams struggle to visualize data flow, identify bottlenecks, and monitor pipeline health across distributed architectures.',
    solution:
      'DataFlow provides an interactive visualization platform that maps the entire data journey — from ingestion through transformation to analytics — with real-time monitoring and quality indicators.',
    features: [
      'Data ingestion',
      'Pipeline visualization',
      'Transformation stages',
      'SQL interface',
      'Dataset explorer',
      'Processing status',
      'Pipeline monitoring',
      'Analytics dashboard',
      'Data quality indicators',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'SQL', 'D3.js', 'WebSocket'],
    architecture: ['Data Source', 'Ingestion', 'Transformation', 'Processing', 'Database', 'Analytics'],
    accentColor: '#00d4ff',
    github: 'https://github.com/tanmay019ai/aditya-kumar-portfolio',
    demo: '#',
    featured: true,
  },
  {
    id: 'nexus',
    number: '02',
    name: 'NEXUS',
    subtitle: 'Full-Stack Operations Platform',
    description:
      'A sophisticated SaaS-style full-stack application with authentication, dashboard analytics, and database-driven workflows.',
    problem:
      'Businesses need robust internal platforms that consolidate user management, data operations, and analytics into a unified interface without piecing together multiple third-party tools.',
    solution:
      'Nexus is an enterprise-grade operations platform with built-in authentication, real-time dashboards, comprehensive data management, and API-driven architecture.',
    features: [
      'Authentication',
      'Dashboard',
      'User management',
      'Data management',
      'Search & Filtering',
      'Analytics',
      'API integration',
      'Database-driven workflows',
      'Responsive interface',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Spring Boot', 'REST APIs', 'SQL'],
    architecture: ['Frontend', 'API', 'Backend', 'Database'],
    accentColor: '#7c3aed',
    github: 'https://github.com/tanmay019ai/aditya-kumar-portfolio',
    demo: '#',
    featured: true,
  },
  {
    id: 'pulse',
    number: '03',
    name: 'PULSE',
    subtitle: 'Real-Time Data Intelligence',
    description:
      'A futuristic analytics platform with KPI dashboards, interactive charts, and real-time data visualization for data-driven decision making.',
    problem:
      'Data teams need powerful visualization tools that surface insights in real-time without requiring complex BI tool configurations or data engineering overhead.',
    solution:
      'Pulse delivers a real-time data intelligence platform with interactive charts, KPI tracking, geographic visualization, and live activity streams — all in a responsive, modern interface.',
    features: [
      'KPI dashboard',
      'Interactive charts',
      'Data visualization',
      'Activity stream',
      'Filters',
      'Performance metrics',
      'Geographic visualization',
      'Real-time updates',
      'Responsive analytics interface',
    ],
    tech: ['React', 'Next.js', 'TypeScript', 'D3.js', 'WebSocket', 'Node.js', 'SQL'],
    architecture: ['Data Sources', 'Processing Engine', 'API Layer', 'Visualization Layer'],
    accentColor: '#06b6d4',
    github: 'https://github.com/tanmay019ai/aditya-kumar-portfolio',
    demo: '#',
    featured: true,
  },
];

export const freelanceServices = [
  {
    id: 'fullstack',
    title: 'Full-Stack Development',
    icon: 'Layers',
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    icon: 'Monitor',
  },
  {
    id: 'backend',
    title: 'Backend & API Development',
    icon: 'Server',
  },
  {
    id: 'dashboards',
    title: 'Data Dashboards',
    icon: 'BarChart3',
  },
  {
    id: 'database',
    title: 'Database Integration',
    icon: 'Database',
  },
  {
    id: 'deployment',
    title: 'Deployment & Optimization',
    icon: 'Rocket',
  },
];
