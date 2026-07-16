export interface Skill {
  name: string;
  level: number; // 0 to 100
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  details: string[];
  tech: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
  category: 'web' | 'ai' | 'other';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  verifyUrl?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  field: string;
  institution: string;
  duration: string;
  grade?: string;
}

export interface CodingProfile {
  name: string;
  username: string;
  stats: string;
  url: string;
  icon: string;
}

export interface Achievement {
  label: string;
  value: number;
  suffix: string;
}

export const personalInfo = {
  name: "Udayagiri Rupesh",
  titles: [
    "Python Developer",
    "Full Stack Developer",
    "AI Enthusiast",
    "Problem Solver",
    "Open to Internships"
  ],
  bio: "I am a passionate Computer Science Engineering student who enjoys building scalable web applications, AI-powered solutions, and solving real-world problems through software development. I continuously improve my programming, problem-solving, and development skills to become an industry-ready Software Engineer.",
  aboutPoints: [
    "Final Year B.Tech CSE Student",
    "Passionate about Software Development",
    "Interested in Artificial Intelligence",
    "Learning Full Stack Development",
    "Strong interest in Problem Solving and DSA",
    "Quick Learner & Team Player",
    "Always willing to learn new technologies"
  ],
  email: "udayagirirupesh7990@gmail.com",
  phone: "+91 99513 17195",
  address: "Naidupeta,Pothuru(Post),Guntur-522005, Andhra Pradesh",
  resumeUrl: "/assets/resume.pdf",
  resumeMeta: {
    version: "v2.4",
    size: "184 KB",
    atsScore: "92/100",
    lastUpdated: "July 2026"
  }
};

export const achievements: Achievement[] = [
  { label: "Projects Completed", value: 5, suffix: "+" },
  { label: "Coding Problems Solved", value: 100, suffix: "+" },
  { label: "Certificates Earned", value: 10, suffix: "+" },
  { label: "GitHub Repositories", value: 5, suffix: "+" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 80 },
      { name: "JavaScript", level: 85 },
      { name: "C", level: 75 },
      { name: "SQL", level: 80 }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "React", level: 85 },
      { name: "Next.js", level: 80 }
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 78 },
      { name: "Express.js", level: 80 }
    ]
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 80 },
      { name: "PostgreSQL", level: 75 }
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "ai-resume-analyzer",
    title: "AI Resume Analyzer",
    description: "An automated intelligence resume scanning application analyzing resumes against custom job descriptions using advanced LLM capabilities.",
    details: [
      "Upload Resumes in PDF format",
      "Calculates matching ATS Score",
      "Conducts full resume and text structure analysis",
      "Suggests missing industry-specific skills",
      "Provides AI-driven improvement feedback"
    ],
    tech: ["Next.js", "TypeScript", "OpenAI APIs", "MongoDB", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=60",
    githubUrl: "https://github.com/rupesh-udayagiri-7/Ai-Resume-Analyzer",
    liveUrl: "https://ai-resume-analyzer-demo.vercel.app",
    category: "ai"
  },
  {
    id: "smart-voting",
    title: "Smart Voting System",
    description: "A secure web-based voting portal utilizing multiple biometric authentication mechanisms to prevent election fraud.",
    details: [
      "Integrated Aadhaar API verification simulation",
      "Face Recognition using convolutional neural networks",
      "Fingerprint verification interface mock",
      "End-to-end secure online voting ledger"
    ],
    tech: ["Python", "OpenCV", "Flask", "MySQL", "Machine Learning"],
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&auto=format&fit=crop&q=60",
    githubUrl: "https://github.com/rupesh-udayagiri-7/Smart-voting-System",
    category: "other"
  },
  {
    id: "portfolio-website",
    title: "Modern 3D Portfolio Website",
    description: "A premium glassmorphic portfolio highlighting projects, coding performance, and educational background with interactive features.",
    details: [
      "Light/dark mode system state persistence",
      "Framer Motion animations and transitions",
      "Fully responsive mobile-friendly menu layout",
      "Automated ATS resume download counter integration"
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    githubUrl: "https://github.com/rupesh-udayagiri-7/Portfolio",
    liveUrl: "https://my-portfolio-one-red-16.vercel.app",
    category: "web"
  }
];

export const certifications: Certification[] = [
  {
    id: "oci-ai-foundations",
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "August 20, 2025",
    image: "/assets/oracle_cert.png",
    verifyUrl: "https://education.oracle.com"
  },
  {
    id: "python-automation",
    title: "Python Programming & Automation Internship",
    issuer: "Blackbuck Engineers",
    date: "July 26, 2025",
    image: "/assets/python_cert.png",
    verifyUrl: "https://blackbuckengineers.com"
  },
  {
    id: "codegnan-portfolio-workshop",
    title: "Building a Portfolio Workshop",
    issuer: "Codegnan IT Solutions",
    date: "November 2, 2025",
    image: "/assets/codegnan_cert.png",
    verifyUrl: "https://codegnan.com"
  }
];

export const educationHistory: EducationItem[] = [
  {
    id: "btech-cse",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science and Engineering",
    institution: "KITS AKSHAR INSTITUTE OF TECHNOLOGY",
    duration: "2023 - 2027 (Expected)",
    grade: "Pursuing (4th Year)"
  },
  {
    id: "intermediate",
    degree: "Board of Intermediate Education (12th Grade)",
    field: "MPC (Mathematics, Physics, Chemistry)",
    institution: "Narayana Junior College",
    duration: "2021 - 2023",
    grade: "6.1 Grade"
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (10th Grade)",
    field: "General Education",
    institution: "ZP HIGH SCHOOL, YANAMADALA",
    duration: "2020 - 2021",
    grade: "7.5 Grade"
  }
];

export const codingProfiles: CodingProfile[] = [
  {
    name: "GitHub",
    username: "rupesh-udayagiri-7",
    stats: "24 Repositories | 400+ Contributions",
    url: "https://github.com/rupesh-udayagiri-7",
    icon: "github"
  },
  {
    name: "LinkedIn",
    username: "udayagiri-rupesh-r7990",
    stats: "500+ Connections",
    url: "https://www.linkedin.com/in/udayagiri-rupesh-r7990",
    icon: "linkedin"
  },
  {
    name: "LeetCode",
    username: "rupesh_udayagiri_1",
    stats: "350+ Solved | Knight Rank (Placeholder)",
    url: "https://leetcode.com/u/rupesh_udayagiri_1/",
    icon: "leetcode"
  },
  {
    name: "CodeChef",
    username: "rupesh2525",
    stats: "3-Star Coder | Max Rating: 1650",
    url: "https://www.codechef.com/users/rupesh2525",
    icon: "codechef"
  },
  {
    name: "HackerRank",
    username: "udayagirirupesh1",
    stats: "5 Stars in Python & Problem Solving",
    url: "https://www.hackerrank.com/profile/udayagirirupesh1",
    icon: "hackerrank"
  }
];

export const socialLinks = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/udayagiri-rupesh-r7990", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/rupesh-udayagiri-7", icon: "github" },
  { name: "LeetCode", url: "https://leetcode.com/u/rupesh_udayagiri_1/", icon: "leetcode" },
  { name: "CodeChef", url: "https://www.codechef.com/users/rupesh2525", icon: "codechef" },
  { name: "Email", url: "mailto:udayagirirupesh7990@gmail.com", icon: "email" }
];
