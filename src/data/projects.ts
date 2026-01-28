import type { Project } from "../types";

export const projects: Project[] = [
  {
    id: 1,
    image: "Projects/resume-builder-app.png",
    title: "AI Resume Builder",
    link: "https://resume-forge-eight.vercel.app/",
    git: "https://github.com/VashistaRK/Resume_Builder",
    description:
      "A full-stack resume builder built with React, TypeScript, and Node.js. Features live preview, multiple templates, PDF export, and structured form-based editing. Designed with scalability and clean component architecture in mind.",
  },
  {
    id: 2,
    image: "Projects/document-analysis.png",
    title: "AI Document Analysis Platform",
    link: "",
    git: "",
    description:
      "Built a Streamlit-based AI application that parses PDFs, Word, PPT, CSV, and Excel files and enables intelligent querying using LLMs. Implemented fuzzy column detection, chart generation, and semantic search.",
  },
  {
  id: 3,
  image: "Projects/lms-app.png",
  title: "Learning Management System (LMS)",
  link: "https://fresherready.com/",
  git: "https://github.com/VashistaRK/LMS-Project",
  description:
    "Built a scalable Learning Management System featuring role-based authentication, course enrollment, content management, and progress tracking. Designed RESTful APIs, optimized database queries, and followed production-level backend architecture principles.",
},

  {
    id: 4,
    image: "Projects/banking-management-system.png",
    title: "Online Banking System (Java Web)",
    link: "",
    git: "",
    description:
      "A Java-based banking web application implementing authentication, account management, and transaction workflows using JSP, Servlets, and MySQL with clean MVC separation.",
  },
];
