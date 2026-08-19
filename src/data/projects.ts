export interface Project {
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  status: 'Completed' | 'Ongoing';
  description: string;
  features: string[];
  technologies: string[];
  caseStudy: {
    overview: string;
    features: string[];
    technologies: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "mindbridge",
    number: "01",
    title: "MindBridge",
    subtitle: "AI-powered mental health web application with chatbot support, mood tracking, and peer forums",
    category: "AI-Powered Mental Health Web App",
    status: "Ongoing",
    description:
      "AI-powered platform with chatbot support, mood tracking, appointments, and peer forums.",
    features: [
      "Student dashboard",
      "Counselor dashboard",
      "Admin dashboard",
      "Role-based access",
      "AI chatbot",
      "Mood tracking",
      "Appointments",
      "Peer forums",
    ],
    technologies: ["DeepSeek AI", "Supabase"],
    caseStudy: {
      overview:
        "MindBridge is an AI-powered mental health web application designed to provide accessible mental health support through technology. The platform combines AI chatbot capabilities with structured counseling workflows and community features.",
      features: [
        "Student dashboard for tracking mental health progress",
        "Counselor dashboard for managing appointments and patient interactions",
        "Admin dashboard for platform oversight",
        "Role-based access control for different user types",
        "AI chatbot powered by DeepSeek AI for initial mental health support",
        "Mood tracking to monitor emotional well-being over time",
        "Appointment scheduling between students and counselors",
        "Peer forums for community support and discussion",
      ],
      technologies: [
        "DeepSeek AI — Powers the intelligent chatbot for mental health support",
        "Supabase — Handles authentication, database, and real-time features",
      ],
    },
  },
  {
    slug: "firewall-network-security",
    number: "02",
    title: "Firewall Configuration and Network Security",
    subtitle: "Linux-based firewall design and testing using iptables",
    category: "Linux Security Project",
    status: "Completed",
    description:
      "Designed and tested a Linux-based firewall using iptables.",
    features: [
      "Configured firewall rules",
      "Regulated network traffic",
      "Implemented traffic control",
      "Prevented unauthorized access",
    ],
    technologies: ["Linux", "iptables"],
    caseStudy: {
      overview:
        "This project involved designing and testing a Linux-based firewall using iptables to secure network infrastructure. The focus was on configuring firewall rules, regulating network traffic, and preventing unauthorized access.",
      features: [
        "Configured iptables firewall rules for inbound and outbound traffic",
        "Regulated network traffic to enforce security policies",
        "Implemented traffic control for different network zones",
        "Prevented unauthorized access through rule-based filtering",
      ],
      technologies: [
        "Linux — Operating system platform for firewall deployment",
        "iptables — Firewall utility for configuring packet filtering rules",
      ],
    },
  },
  {
    slug: "glof-risk-assessment",
    number: "03",
    title: "GLOF Risk Assessment System",
    subtitle: "Mobile platform for GLOF risk assessment combining weather and climate data",
    category: "React Native & Machine Learning",
    status: "Completed",
    description:
      "Mobile platform for GLOF risk assessment combining weather and climate data.",
    features: [
      "GLOF risk assessment",
      "Weather and climate data integration",
      "Mobile-accessible interface",
    ],
    technologies: ["React Native", "Machine Learning"],
    caseStudy: {
      overview:
        "The GLOF Risk Assessment System is a mobile platform that combines weather and climate data to assess Glacial Lake Outburst Flood (GLOF) risks. Built with React Native and Machine Learning, it provides accessible risk information through a mobile interface.",
      features: [
        "GLOF risk assessment using weather and climate data",
        "Mobile-accessible interface for field use",
        "Data-driven risk evaluation",
      ],
      technologies: [
        "React Native — Cross-platform mobile application framework",
        "Machine Learning — Risk assessment and prediction models",
      ],
    },
  },
  {
    slug: "food-ordering-system",
    number: "04",
    title: "Food Ordering System Website",
    subtitle: "Django-based food ordering platform with authentication and order management",
    category: "Django Web App",
    status: "Completed",
    description:
      "Developed a food ordering platform with user authentication and order management.",
    features: [
      "User authentication",
      "Order management",
      "REST-based backend services",
      "Structured database models",
      "Backend designed for frontend integration",
    ],
    technologies: ["Django"],
    caseStudy: {
      overview:
        "A food ordering platform built with Django that provides user authentication, order management, and REST-based backend services. The system features structured database models and is designed for frontend integration.",
      features: [
        "User authentication for secure access",
        "Order management system for placing and tracking orders",
        "REST-based backend services for API-driven architecture",
        "Structured database models for reliable data management",
        "Backend designed for seamless frontend integration",
      ],
      technologies: [
        "Django — Python web framework for backend development",
      ],
    },
  },
];
