import type { SubSection, List } from "@/types";

export const skillSubSections: SubSection[] = [
  {
    subSectionId: "skill",
    subId: "lang",
    subSectionContent: "Languages & Syntax",
  },
  {
    subSectionId: "skill",
    subId: "frameworks",
    subSectionContent: "UI & Front-End Frameworks",
  },
  {
    subSectionId: "skill",
    subId: "data",
    subSectionContent: "State & Data Management",
  },
  {
    subSectionId: "skill",
    subId: "backEnd",
    subSectionContent: "Back-End & API Tools",
  },
  { subSectionId: "skill", subId: "testing", subSectionContent: "Testing" },
  {
    subSectionId: "skill",
    subId: "devTools",
    subSectionContent: "Development Tools",
  },
  {
    subSectionId: "skill",
    subId: "workflow",
    subSectionContent: "Project & Workflow Tools",
  },
  {
    subSectionId: "skill",
    subId: "deploy",
    subSectionContent: "Deployment & Hosting",
  },
];

export const skillList: List[] = [
  { listId: "lang", listContent: "HTML" },
  { listId: "lang", listContent: "CSS" },
  { listId: "lang", listContent: "JavaScript" },
  { listId: "lang", listContent: "TypeScript" },

  { listId: "frameworks", listContent: "React" },
  { listId: "frameworks", listContent: "Next.js" },
  { listId: "frameworks", listContent: "Tailwind CSS" },
  { listId: "frameworks", listContent: "Shadcn-ui" },
  { listId: "frameworks", listContent: "DaisyUI" },
  { listId: "frameworks", listContent: "Recharts" },

  { listId: "data", listContent: "Redux Toolkit" },
  { listId: "data", listContent: "React Query (TanStack Query)" },
  { listId: "data", listContent: "Axios" },
  { listId: "data", listContent: "Zod" },

  { listId: "backEnd", listContent: "Supabase" },
  { listId: "backEnd", listContent: "Prisma" },
  { listId: "backEnd", listContent: "GraphQL" },
  { listId: "backEnd", listContent: "Clerk" },
  { listId: "backEnd", listContent: "Contentful" },
  { listId: "backEnd", listContent: "Unsplash" },

  { listId: "testing", listContent: "Vitest" },
  { listId: "testing", listContent: "Testing Library" },

  { listId: "devTools", listContent: "Vite" },
  { listId: "devTools", listContent: "VSCode" },
  { listId: "devTools", listContent: "GitHub" },

  { listId: "workflow", listContent: "Jira" },
  { listId: "workflow", listContent: "Confluence" },

  { listId: "deploy", listContent: "Vercel" },
  { listId: "deploy", listContent: "Netlify" },
];

export const experienceSubSections: SubSection[] = [
  {
    subSectionId: "exp",
    subId: "web",
    subSectionContent: "Front-end Developer (Oct 2024 – Present)",
  },
];

export const experienceList: List[] = [
  {
    listId: "web",
    listContent:
      "Developed web applications using React, Next.js, and TypeScript; projects include dashboards, e‑commerce stores, content driven apps using Contentful and Unsplash, and interactive UI components (sliders, modals, tabs)",
  },
  {
    listId: "web",
    listContent:
      "Developed responsive UIs using Tailwind CSS, Shadcn-ui, and component-based architecture, with an emphasis on accessibility and reusability",
  },
  {
    listId: "web",
    listContent:
      "Implemented authentication flows, backend integrations (Supabase, Clerk, Stripe), and content platforms (Contentful, Unsplash)",
  },
  {
    listId: "web",
    listContent:
      "Enhanced performance, code quality, and maintainability via:Modular architecture and reusable component design, Routing with React Router, Version control (Git) and deployment workflows (Vercel / Netlify)",
  },
  {
    listId: "web",
    listContent:
      "Worked hands-on with tools like Redux Toolkit, React Query, Zod, and Prisma to manage complex state, validate data, and handle async workflows in a full-stack context",
  },
  {
    listId: "web",
    listContent:
      "Used Vitest and React Testing Library to test component logic and interactions, helping ensure code reliability and consistent user experience",
  },
  {
    listId: "web",
    listContent:
      "Built a 2D puzzle game in Godot using GDScript, leading gameplay design, feature planning, and testing.",
  },
];

export const certificationsSubSections: SubSection[] = [
  {
    subSectionId: "certif",
    subId: "fcc",
    subSectionContent: "freeCodeCamp",
  },
  {
    subSectionId: "certif",
    subId: "udemy",
    subSectionContent: "Udemy – Janis Smilga",
  },
];

export const certificationsList: List[] = [
  {
    listId: "fcc",
    listContent: "Responsive Web Design",
  },
  {
    listId: "fcc",
    listContent: "JavaScript Algorithms and Data Structures",
  },
  {
    listId: "udemy",
    listContent: "React, Next.js & TypeScript Projects",
  },
];
