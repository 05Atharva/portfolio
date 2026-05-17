// ═══════════════════════════════════════
// Portfolio Data — All content lives here
// ═══════════════════════════════════════

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

export const typewriterRoles = [
  'Software Engineer',
  'Agentic AI Builder',
  'Full-Stack Developer',
  'Mobile App Developer',
  'Drone Racing Champion',
];

export const experience = [
  {
    company: 'Applied AI Consulting (AAIC)',
    role: 'Software Engineer – Trainee',
    type: 'Internship',
    period: 'Jan 2026 – Present · 5 mos',
    location: 'Pune, Maharashtra · On-site',
    description: 'Worked on AI-driven production systems and backend workflows as part of a 6-month industry internship.',
    achievements: [
      'Contributed to multi-agent AI system workflows and orchestration',
      'Improved test coverage to ~70% across multiple modules',
      'Validated SQL to PostgreSQL migration including tables, indexes, constraints, and procedures',
      'Investigated live production issues using AWS CloudWatch and RDS logs',
      'Worked with LangGraph, WebSockets, FastAPI, and AI models such as OpenAI Whisper and Gemini 2.5',
      'Contributed to React Native application development',
      'Gained hands-on exposure to webhook systems, queue workers, and log-based debugging',
    ],
    focus: 'Agentic AI systems, backend engineering, cloud debugging, and system reliability.',
    tech: ['LangGraph', 'FastAPI', 'WebSockets', 'OpenAI Whisper', 'Gemini 2.5', 'React Native', 'AWS CloudWatch', 'PostgreSQL', 'Python'],
    sideProject: {
      name: 'Cooking Application (During Internship)',
      description: 'LLM and database heavy cooking application developed alongside the internship.',
      tech: ['React Native', 'Node.js', 'Express.js', 'Firebase', 'PostgreSQL', 'Redux Toolkit', 'AWS'],
      highlights: [
        'Full-stack mobile app with LLM-powered recipe intelligence',
        'Firebase for authentication and App Check',
        'Global state management via Redux Toolkit',
        'Hosted on AWS, developed for both iOS and Android',
      ],
    },
  },
  {
    company: 'Encrypta Inc.',
    role: 'R&D Intern',
    type: 'Internship',
    period: 'Dec 2024 – Mar 2025',
    location: '',
    description: '',
    achievements: [
      'Engineered secure desktop authenticator using Python, Node.js, and Electron.js',
      'Implemented HTTPS and WebSocket encryption achieving zero data leaks in testing',
      'Deployed multi-factor authentication reducing attack vectors by 70%',
      'Applied secure coding practices throughout the development lifecycle',
    ],
    focus: '',
    tech: ['Python', 'Node.js', 'Electron.js', 'HTTPS', 'WebSocket', 'MFA', 'Secure Coding'],
  },
  {
    company: 'Team Vajra, MMCOE',
    role: 'AI-ML Head – UAV & Drone Projects',
    type: 'Leadership',
    period: '2023 – Present',
    location: '',
    description: '',
    achievements: [
      'Managed end-to-end UAV development using Pixhawk, APM, and SpeedyBee flight controllers',
      'Supervised flight tuning, testing, and integration of embedded and automation systems',
      'Developed a compact 3-inch FPV racing drone optimized for confined-space flying',
      'Designed and tuned a high-performance 5-inch FPV racing drone for competitive racing',
      'Led AI/Autonomous navigation research for UAV applications',
    ],
    focus: '',
    tech: ['Pixhawk', 'APM', 'SpeedyBee', 'Autonomous Navigation', 'PID Tuning', 'Embedded Systems', 'UAV Dynamics'],
  },
];

export const projects = [
  {
    title: 'Cooking Application',
    subtitle: 'LLM-Powered Recipe Intelligence Platform (Built during AAIC Internship)',
    description: 'Full-stack mobile cooking application leveraging LLM intelligence for recipe discovery, built as a side project during my internship at AAIC.',
    tags: ['Mobile', 'Full Stack', 'AI/ML'],
    tech: ['React Native', 'Node.js', 'Express.js', 'Firebase', 'PostgreSQL', 'Redux Toolkit', 'AWS'],
    highlights: [
      'LLM-powered recipe search and recommendation engine',
      'Firebase Auth + App Check for secure authentication',
      'Redux Toolkit for global state management',
      'Hosted on AWS, developed for both iOS and Android',
    ],
    github: '',
    featured: true,
  },
  {
    title: 'PRECURSOR',
    subtitle: 'End-to-End Supply Chain Management for Precursor Chemicals',
    description: 'Mobile app for precursor chemical supply chain management with ML anomaly detection, IoT sensor integration, and blockchain traceability.',
    tags: ['Mobile', 'AI/ML', 'IoT', 'Full Stack'],
    tech: ['React Native', 'FastAPI', 'Python', 'LSTM', 'Isolation Forest', 'ThingSpeak', 'Blockchain'],
    highlights: [
      'End-to-end supply chain tracking mobile application',
      'LSTM and Isolation Forest ML models for anomaly detection',
      'IoT sensors connected via ThingSpeak for real-time monitoring',
      'Blockchain scripts in Python for traceability',
    ],
    github: 'https://github.com/05Atharva/Precursor_Main',
    featured: true,
  },
  {
    title: 'RagaStream 🎵',
    subtitle: 'Personal Ad-Free Indian Music Streaming App',
    description: 'Ad-free Indian music streaming app for Android. Streams audio from YouTube via yt-dlp with zero cloud storage and zero infra cost.',
    tags: ['Mobile', 'Full Stack'],
    tech: ['React Native', 'Expo SDK 54', 'TypeScript', 'FastAPI', 'Supabase', 'yt-dlp', 'Zustand', 'React Query'],
    highlights: [
      'Streams audio from YouTube via yt-dlp — no cloud storage needed',
      'Supabase Auth (JWT) and PostgreSQL database',
      'Zustand + React Query for state management',
      'react-native-track-player v4 for audio playback',
    ],
    github: 'https://github.com/05Atharva/RagaStream',
    featured: true,
  },
  {
    title: 'PinNest',
    subtitle: 'Priority Task Pinning with Home Screen Widgets',
    description: 'Mobile task management app where users create priority-based tasks, pin them to the home screen, and track efficiency via a dashboard.',
    tags: ['Mobile'],
    tech: ['React Native', 'Supabase', 'PostgreSQL'],
    highlights: [
      'Priority-based task creation and management',
      'Pin tasks directly to device home screen',
      'Efficiency tracking dashboard',
      'Supabase for auth and database backend',
    ],
    github: 'https://github.com/05Atharva/PinNest',
  },
  {
    title: 'EdgeVision',
    subtitle: 'Electronic Component Classifier — TinyML Ready',
    description: 'Lightweight computer vision project for classifying Capacitors and Inductors using MobileNetV2 transfer learning, designed for future edge deployment.',
    tags: ['AI/ML'],
    tech: ['Python', 'TensorFlow', 'Keras', 'MobileNetV2', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    highlights: [
      'MobileNetV2 transfer learning — 99-100% validation accuracy',
      'Binary classification: Capacitor vs Inductor',
      'Designed to be lightweight for future ESP32-CAM deployment',
      'TFLite conversion planned for edge inference',
    ],
    github: 'https://github.com/05Atharva/EdgeVision-Component-Classifier',
  },
  {
    title: 'MatchSense 🏏',
    subtitle: 'Pre-Match IPL Prediction with Confidence-Aware ML',
    description: 'Data-driven study of IPL match predictability using only pre-match information. Features a confidence-aware CatBoost model that knows when to abstain.',
    tags: ['AI/ML'],
    tech: ['Python', 'CatBoost', 'Pandas', 'Scikit-learn', 'Jupyter'],
    highlights: [
      'Confidence-aware model that abstains on low-signal matches',
      '66.7% accuracy on high-confidence predictions (IPL 2024)',
      'Symmetric team labelling to remove positional bias',
      'Final deployment model trained on 2019-2025 data for IPL 2026',
    ],
    github: 'https://github.com/05Atharva/MatchSense',
  },
  {
    title: 'ARTEMIS',
    subtitle: 'Advanced Reactive Threat Elimination & Monitoring System',
    description: 'Full-spectrum security platform combining ML-powered phishing detection with hardware-based wireless defense and cloud honeypot infrastructure.',
    tags: ['Security', 'AI/ML'],
    tech: ['Python', 'Scikit-learn', 'Flask', 'AWS EC2', 'ESP32'],
    highlights: [
      'Naive Bayes classifier achieving 90%+ phishing detection accuracy',
      'ESP8266/ESP32 system blocking 85%+ deauth attacks',
      'AWS EC2 honeypots for threat intelligence gathering',
      'Lightweight WAF with SQLi/XSS protection and rate limiting',
    ],
    github: 'https://github.com/05Atharva/ARTEMIS',
    featured: true,
  },
  {
    title: 'Harvest-Health',
    subtitle: 'AI-Powered Crop Monitoring Rover',
    description: 'IoT-enabled agricultural rover using CNN-based plant disease detection with cloud updates and automated farmer alerts.',
    tags: ['AI/ML', 'IoT'],
    tech: ['TensorFlow', 'Keras', 'OpenCV', 'ThingSpeak', 'Twilio'],
    highlights: [
      'CNN model with 90%+ accuracy for potato leaf disease detection',
      'Custom rover with sensors for autonomous field monitoring',
      'Real-time cloud data transmission via ThingSpeak',
      'SMS alert system using Twilio API integration',
    ],
    github: 'https://github.com/05Atharva/Harvest-Health',
  },
  {
    title: 'ResponseForge',
    subtitle: 'NIST-Based Incident Response Automation Platform',
    description: 'Enterprise-grade React application that automates NIST SP 800-61 compliant incident response plans.',
    tags: ['Security', 'Full Stack'],
    tech: ['React.js', 'JavaScript', 'HTML/CSS'],
    highlights: [
      'NIST SP 800-61 compliant plan generation',
      '90% reduction in manual IR planning time',
      'PDF export in under 2 minutes',
      'Validated by 92% of enterprise test users',
    ],
    github: 'https://github.com/05Atharva/ResponseForge',
  },
  {
    title: 'Automotive Part QC Classifier',
    subtitle: 'Industrial AI Quality Control System',
    description: 'Production-ready computer vision system for automated part inspection using transfer learning.',
    tags: ['AI/ML'],
    tech: ['TensorFlow', 'MobileNetV2', 'OpenCV', 'PyInstaller'],
    highlights: [
      'Transfer learning with MobileNetV2 for part classification',
      'Reliable detection across multiple part variants',
      'Packaged as .exe for factory floor deployment',
      'Real-time defect detection pipeline',
    ],
  },
  {
    title: 'Autonomous Quadcopter',
    subtitle: 'Waypoint-Driven UAV with Real-Time Telemetry',
    description: 'Autonomous quadcopter for short-range payload delivery using CrossFlight FC and custom low-cost telemetry module.',
    tags: ['Robotics', 'IoT'],
    tech: ['CrossFlight FC', 'Waypoint Navigation', 'Telemetry Module', 'Embedded Systems'],
    highlights: [
      'Fully autonomous waypoint-driven flight system',
      'Custom low-cost telemetry module with stable real-time link',
      'CrossFlight FC integration for precision navigation',
      'Designed for short-range delivery missions',
    ],
    github: 'https://github.com/05Atharva/Autonomous-GPS-Drone-Platform',
  },
  {
    title: '3-Inch FPV Racing Drone',
    subtitle: 'Compact FPV System for Indoor & Tight-Spaces',
    description: 'Lightweight 3-inch FPV drone built using SpeedyBee Mini FC, optimized for confined-space flying with refined PID loops.',
    tags: ['Robotics'],
    tech: ['SpeedyBee Mini FC', 'FPV System', 'PID Tuning', 'Lightweight Frame'],
    highlights: [
      'Compact 3-inch FPV platform for tight-space flying',
      'Custom PID tuning for responsiveness and stability',
      'Optimized for power efficiency',
      'Lightweight frame for agile and precise flight',
    ],
    github: 'https://github.com/05Atharva/3inch-fpv-racing-drone',
  },
  {
    title: '5-Inch FPV Racing Drone',
    subtitle: 'High-Performance FPV Racing Platform',
    description: 'High-speed 5-inch FPV racing drone developed using SpeedyBee F405 V3 FC, optimized for competitive racing.',
    tags: ['Robotics'],
    tech: ['SpeedyBee F405 V3', 'Racing Frame', 'FPV System', 'PID Optimization'],
    highlights: [
      'High-performance racing drone for competitive events',
      'Precision-tuned for speed and sharp cornering',
      'SpeedyBee F405 V3 for reliable control',
      'Optimized flight stack for aggressive maneuvers',
    ],
    github: 'https://github.com/05Atharva/FPV-Racing-Drone-5Inch',
  },
];

export const skills = {
  'Agentic AI & LLMs': [
    { name: 'Multi-Agent Systems', level: 'ADVANCED', tools: ['LangGraph', 'Orchestration', 'Workflow Design'] },
    { name: 'LLM Integration', level: 'ADVANCED', tools: ['OpenAI Whisper', 'Gemini 2.5', 'Prompt Engineering'] },
    { name: 'AI Backend Systems', level: 'STRONG', tools: ['FastAPI', 'WebSockets', 'Queue Workers'] },
  ],
  'Mobile Development': [
    { name: 'React Native', level: 'ADVANCED', tools: ['Expo', 'TypeScript', 'Navigation'] },
    { name: 'State Management', level: 'STRONG', tools: ['Redux Toolkit', 'Zustand', 'React Query'] },
    { name: 'Mobile Backend', level: 'STRONG', tools: ['Firebase', 'Supabase', 'App Check'] },
  ],
  'Machine Learning': [
    { name: 'Deep Learning', level: 'ADVANCED', tools: ['TensorFlow', 'Keras', 'CNNs'] },
    { name: 'Classical ML', level: 'ADVANCED', tools: ['Scikit-learn', 'CatBoost', 'XGBoost'] },
    { name: 'Computer Vision', level: 'STRONG', tools: ['OpenCV', 'MobileNetV2', 'YOLO'] },
    { name: 'Model Deployment', level: 'STRONG', tools: ['Flask APIs', 'AWS EC2', 'Docker'] },
  ],
  'Security': [
    { name: 'Penetration Testing', level: 'ADVANCED', tools: ['Nmap', 'Burp Suite', 'Web Apps'] },
    { name: 'Network Security', level: 'ADVANCED', tools: ['CCNA Certified', 'Firewalls & WAF', 'Honeypots'] },
    { name: 'Threat Detection', level: 'STRONG', tools: ['SIEM', 'Log Analysis', 'Alert Tuning'] },
    { name: 'Secure Development', level: 'STRONG', tools: ['OWASP', 'MFA', 'Threat Modeling'] },
  ],
  'Engineering': [
    { name: 'Backend Development', level: 'ADVANCED', tools: ['Python', 'FastAPI', 'Node.js', 'Express.js'] },
    { name: 'Frontend Development', level: 'STRONG', tools: ['React', 'Next.js', 'TypeScript'] },
    { name: 'Cloud & DevOps', level: 'STRONG', tools: ['AWS', 'CloudWatch', 'RDS', 'Docker'] },
    { name: 'Database Systems', level: 'STRONG', tools: ['PostgreSQL', 'Firebase', 'Supabase', 'SQL Migration'] },
  ],
  'Robotics': [
    { name: 'Flight Controllers', level: 'ADVANCED', tools: ['Pixhawk', 'APM', 'SpeedyBee'] },
    { name: 'Autonomous Navigation', level: 'STRONG', tools: ['Waypoint Nav', 'Mission Planning'] },
    { name: 'FPV Tuning', level: 'ADVANCED', tools: ['PID Tuning', 'FPV Systems', 'Flight Dynamics'] },
    { name: 'Drone Systems', level: 'EXPERT', tools: ['UAV Design', 'Power Systems', 'Embedded'] },
  ],
};

export const additionalTech = [
  'Python', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Node.js',
  'Express.js', 'FastAPI', 'Flask', 'Docker', 'AWS', 'Linux', 'Git',
  'PostgreSQL', 'Firebase', 'Supabase', 'Redux Toolkit', 'WebSockets',
  'REST APIs', 'Bash', 'C++', 'Java', 'NumPy', 'Pandas',
];

export const certifications = [
  { name: 'Cisco Certified Network Associate (CCNA)', issuer: 'Cisco', date: 'May 2025' },
  { name: 'Google Cybersecurity Professional Certificate', issuer: 'Google & Coursera', date: 'Jul 2024' },
  { name: 'Network Essentials', issuer: 'Cisco', date: 'Jun 2024' },
];

export const achievements = [
  { title: "ARTEMIS Published in IEEE Xplore", description: "Presented at 3rd IEEE International Conference on Emerging Trends and Innovation in ICT (ICEI 2026), PICT Pune", link: 'https://ieeexplore.ieee.org/document/11447964' },
  { title: "World Rank 3 & AIR 2 – Technoxian Drone Racing 2025", description: "Ranked among 32 international teams in global FPV drone racing competition" },
  { title: "CTF Winner - NigVanta'25", description: "Capture The Flag Competition Champion" },
  { title: "Innovators Challenge 2k24", description: "24-Hour Hackathon Winners" },
];

export const blogs = [
  {
    title: 'DefendTheCloud',
    subtitle: 'Cybersecurity × AI/ML',
    description: 'Deep dives into cloud security, adversarial ML defenses, threat modeling, and secure AI engineering.',
    url: 'https://defendthecloud.blogspot.com/',
    color: 'text-arc-blue-light',
  },
  {
    title: 'CTF Chronicles',
    subtitle: 'CTF Walkthroughs & Writeups',
    description: 'Step-by-step walkthroughs of CTF challenges across web exploitation, crypto, forensics, and OSINT.',
    url: 'https://ctfchronicles.blogspot.com/',
    color: 'text-arc-gold-light',
  },
];

export const resumes = [
  {
    label: 'AI & ML Resume',
    subtitle: 'Machine Learning focused',
    href: '/ATHARVA KANAWADE_ML.pdf',
    downloadName: 'Atharva_Kanawade_ML_Resume.pdf',
    accentClass: 'bg-arc-blue/20 text-arc-blue-light',
  },
  {
    label: 'Cybersecurity Resume',
    subtitle: 'Security focused',
    href: '/ATHARVA KANAWADE Resume.pdf',
    downloadName: 'Atharva_Kanawade_Cybersecurity_Resume.pdf',
    accentClass: 'bg-arc-gold/20 text-arc-gold-light',
  },
];

export const filterTags = ['All', 'AI/ML', 'Mobile', 'Full Stack', 'Security', 'IoT', 'Robotics'];
