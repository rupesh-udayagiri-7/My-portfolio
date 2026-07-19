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
  bio: "Final-year Computer Science and Engineering student and OCI AI Foundations Associate with hands-on experience building full-stack web apps, NLP-driven tools, and computer-vision systems. Skilled in Python, React, Django REST Framework, Flask, Data Structures and Algorithms, OOP, and DBMS. Proven ability to design, build, and deploy full-stack, ML-integrated platforms that measurably reduce manual effort. Seeking a Software Developer, Python Developer, or Software Engineering Internship role.",
  aboutPoints: [
    "Final Year B.Tech CSE Student at KITS Akshar Institute of Technology",
    "OCI AI Foundations Associate certified",
    "Hands-on experience in NLP & Computer Vision (DeepFace, OpenCV, spaCy)",
    "Full-stack development experience with Django REST Framework, Flask & React",
    "Strong foundation in Data Structures, Algorithms, OOP, and DBMS",
    "Quick learner, team collaborator, and problem-solver"
  ],
  email: "udayagirirupesh7990@gmail.com",
  phone: "+91 99513 17195",
  address: "Guntur, Andhra Pradesh, India",
  resumeUrl: "/assets/resume.pdf",
  resumeMeta: {
    version: "v2.5",
    size: "85 KB",
    atsScore: "95/100",
    lastUpdated: "July 2026"
  }
};

export const achievements: Achievement[] = [
  { label: "Projects Completed", value: 5, suffix: "+" },
  { label: "Coding Problems Solved", value: 350, suffix: "+" },
  { label: "Certificates Earned", value: 10, suffix: "+" },
  { label: "GitHub Repositories", value: 24, suffix: "+" }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "SQL", level: 80 }
    ]
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Vite", level: 85 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 }
    ]
  },
  {
    title: "Backend & Frameworks",
    skills: [
      { name: "Django", level: 85 },
      { name: "Django REST Framework", level: 85 },
      { name: "Flask", level: 80 },
      { name: "RESTful APIs", level: 85 }
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "SQLite", level: 85 },
      { name: "MySQL", level: 80 }
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "GitHub Pages", level: 80 }
    ]
  },
  {
    title: "Cloud Computing",
    skills: [
      { name: "Oracle Cloud Infrastructure (OCI)", level: 80 },
      { name: "OCI AI Services", level: 80 },
      { name: "Core Cloud Concepts", level: 85 }
    ]
  }
];

export const projects: Project[] = [
  {
    id: "ai-resume-analyzer",
    title: "AI-Powered Resume Analyzer & ATS Scoring Platform",
    description: "A full-stack resume analysis platform parsing PDF/DOCX resumes and benchmarking them against job descriptions.",
    details: [
      "Built a full-stack resume analysis platform (React/Vite frontend, Django REST Framework backend) that parses PDF/DOCX resumes and benchmarks them against job descriptions using TF-IDF vectorization and cosine similarity.",
      "Engineered an NLP-driven skill-matching engine with spaCy to extract technical skills, surface matched vs. missing keywords, and calculate a rule-based ATS compatibility score, exposed via 4 REST API endpoints.",
      "Extended the platform with a resume-builder wizard, a job-role recommendation engine, and a 60-question placement-prep module, totaling 5,000+ lines of code."
    ],
    tech: ["React", "Vite", "Django REST Framework", "SQLite", "spaCy", "scikit-learn", "Axios"],
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&auto=format&fit=crop&q=60",
    githubUrl: "https://github.com/rupesh-udayagiri-7/Ai-Resume-Analyzer",
    category: "ai"
  },
  {
    id: "smart-voting",
    title: "Smart Voting System with Facial Recognition",
    description: "A secure online voting platform utilizing facial recognition verification to enforce single vote policies.",
    details: [
      "Developed a secure online voting platform (Flask + MongoDB) that uses DeepFace facial recognition to verify voter identity and enforce one-vote-per-person before ballot casting.",
      "Built an admin panel for voter/contestant management, with real-time vote tallying visualized through interactive charts.",
      "Implemented face verification using VGG-Face embeddings with configurable distance-threshold matching to prevent duplicate or fraudulent votes."
    ],
    tech: ["Python", "Flask", "MongoDB", "DeepFace", "OpenCV"],
    image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?w=800&auto=format&fit=crop&q=60",
    githubUrl: "https://github.com/rupesh-udayagiri-7/Smart-voting-System",
    category: "other"
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "A professional responsive Next.js portfolio website showcasing projects, skills, coding profiles, and resume.",
    details: [
      "Rebuilt personal portfolio as a full Next.js/React application with TypeScript and Tailwind CSS, replacing the earlier static HTML/CSS version.",
      "Structured the UI with reusable components and custom React hooks, adding Framer Motion animations and an EmailJS-powered contact form.",
      "Deployed the site on Vercel for fast, publicly accessible hosting."
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "EmailJS"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    githubUrl: "https://github.com/rupesh-udayagiri-7/My-portfolio",
    liveUrl: "https://my-portfolio-one-red-16.vercel.app",
    category: "web"
  }
];

export const certifications: Certification[] = [
  {
    id: "oci-ai-foundations",
    title: "Oracle Cloud Infrastructure (OCI) 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    date: "2025",
    image: "/assets/oracle_cert.png",
    verifyUrl: "https://education.oracle.com"
  },
  {
    id: "python-automation",
    title: "Python Automation Certification",
    issuer: "Blackbucks Team",
    date: "2025",
    image: "/assets/python_cert.png",
    verifyUrl: "https://blackbuckengineers.com"
  },
  {
    id: "eda-certification",
    title: "Exploratory Data Analysis Certification",
    issuer: "FutureSkills Prime (NASSCOM IT-ITeS SSC)",
    date: "2025",
    image: "/assets/codegnan_cert.png",
    verifyUrl: "https://futureskillsprime.in"
  }
];

export const educationHistory: EducationItem[] = [
  {
    id: "btech-cse",
    degree: "Bachelor of Technology (B.Tech)",
    field: "Computer Science & Engineering",
    institution: "KITS Akshar Institute of Technology",
    duration: "Expected Graduation: 2027"
  },
  {
    id: "intermediate",
    degree: "Intermediate (MPC)",
    field: "Mathematics, Physics, Chemistry",
    institution: "Narayana Junior College, Guntur",
    duration: "2021 - 2023"
  },
  {
    id: "ssc",
    degree: "Secondary Board Education (SSC)",
    field: "General Education",
    institution: "Z P High School, Yanamadala",
    duration: "2020 - 2021"
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
