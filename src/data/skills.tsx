import {
  Server,
  Database,
  Code2,
  ShieldCheck,
  Cloud,
  GitBranch,
} from "lucide-react";
import type { Skill } from "../types";

export const skills: Skill[] = [
  {
    id: 1,
    title: "Backend Development",
    subtitle: "REST APIs, Business Logic, Authentication",
    icon: <Server size={26} />,
  },
  {
    id: 2,
    title: "Frontend Engineering",
    subtitle: "React, TypeScript, Component Architecture",
    icon: <Code2 size={26} />,
  },
  {
    id: 3,
    title: "Databases & Data Modeling",
    subtitle: "MySQL, Indexing, Query Optimization",
    icon: <Database size={26} />,
  },
  {
    id: 4,
    title: "System Design Fundamentals",
    subtitle: "Scalability, Caching, API Design",
    icon: <Cloud size={26} />,
  },
  {
    id: 5,
    title: "Security & Authentication",
    subtitle: "JWT, OAuth, Role-Based Access Control",
    icon: <ShieldCheck size={26} />,
  },
  {
    id: 6,
    title: "Version Control & Collaboration",
    subtitle: "Git, GitHub, Team Workflows",
    icon: <GitBranch size={26} />,
  },
];
