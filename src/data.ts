import type {
  SubSection,
  List,
  Headings,
  Locations,
  Responsibilities,
} from "./types";

// TODO -  imagine someone visiting this file, is it easy for them to find what they want? does it need comments or separation into multiple files?

export const programmingSkillsPreview: string[] = [
  "React",
  "TypeScript",
  "Next.js",
  "React Query (TanStack Query)",
  "Tailwind CSS",
  "Prisma",
  "Vercel",
  "...",
];

export const softSkills: string[] = [
  "Project management",
  "Teamwork",
  "Problem-solving",
  "Communication",
  "Adaptability",
  "Organisation", //TODO - If you are sure of a word's spelling, you can add it to the dictionary
  "Sprint-based workflows",
  "Rapid learning of new tools",
];

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

// TODO: location id, heading id, responsibilities id could be an enums type. It would prevent typos and assigning something to an id which doesn't exist

export const dropdownHeadings: Headings[] = [
  {
    headingId: "eufarms",
    content: "Co-founder and secretary of EUfarms NGO",
  },
  {
    headingId: "waterProtection",
    content: "Project Manager – Water Resource & Agroecology Initiatives",
  },
  {
    headingId: "teaching",
    content: "Coordinator of student agricultural visits",
  },
  {
    headingId: "agroecopole",
    content: "Project Manager for the AgroEcopôle du Domaine de Mirabeau",
  },
  {
    headingId: "sse",
    content:
      "Project Manager for Structuring and Developing the Organic and Social and Solidarity Economy Sector",
  },
];

export const dateAndLocations: Locations[] = [
  {
    locationId: "eufarms",
    content:
      "EUfarms : European Network of Certified Organic Farms in Agroecology, 2022 - Present",
  },
  {
    locationId: "waterProtection",
    content:
      "Montpellier Mediterranee Metropole and Syndicat Mixte Garrigues Campagne, May 2022 - Apr 2025",
  },
  {
    locationId: "teaching",
    content: "L'Institut Agro Montpellier, 2022 - 2024",
  },
  {
    locationId: "agroecopole",
    content: "Fabregues City Council, Apr 2021 - Apr 2022",
  },
  {
    locationId: "sse",
    content:
      "CIDIL - ARU - Croix Rouge Insertion MAIA et Charente - CsC du Barbezilien, Jan 2020 - Oct 2020",
  },
];

export const responsibilities: Responsibilities[] = [
  {
    responsibilitiesId: "eufarms",
    content:
      "Co-founded a pan-European network connecting agroecological organic farms and researchers",
  },
  {
    responsibilitiesId: "eufarms",
    content:
      "Develop a comprehensive training program to promote agroecological and organic farming practices",
  },
  {
    responsibilitiesId: "eufarms",
    content:
      "Implement tools to evaluate and improve agroecological farming practices",
  },
  {
    responsibilitiesId: "eufarms",
    content:
      "Promote resilient (organic and agroecological), and economically viable farming models addressing climate change, food security, and evolving challenges in the agricultural sector",
  },
  {
    responsibilitiesId: "waterProtection",
    content:
      "Coordinated the Agr’Eau-Ecological Landscape Plan, which is a collaborative approach aimed at restoring and preserving water and biodiversity while improving the working conditions of farmers",
  },
  {
    responsibilitiesId: "waterProtection",
    content:
      "Led multi-stakeholder projects with government agencies, councils, farmers, NGOs and regulators",
  },
  {
    responsibilitiesId: "waterProtection",
    content: "Monitored surface and groundwater quality",
  },
  {
    responsibilitiesId: "waterProtection",
    content:
      "Coordinated a circular economy project for composting green waste on farms",
  },
  {
    responsibilitiesId: "teaching",
    content:
      "Organised field visits for students studying Territorial Agronomy",
  },
  {
    responsibilitiesId: "agroecopole",
    content:
      "Coordinated the AgroEcoPôle project in collaboration with the Conservatory of Natural Areas (CEN) Occitanie",
  },
  {
    responsibilitiesId: "agroecopole",
    content: "Led technical facilitation",
  },
  {
    responsibilitiesId: "agroecopole",
    content:
      "Supported the structuring of the agricultural collective (individual businesses + Work Integration Social Entreprise)",
  },
  {
    responsibilitiesId: "agroecopole",
    content: "Managed administrative and financial monitoring",
  },
  {
    responsibilitiesId: "agroecopole",
    content: "Established and monitored partnership agreements",
  },
  {
    responsibilitiesId: "sse",
    content:
      "Coordinated cooperation among four Work Integration Social Entreprises in organic market gardening to develop the organic and local sector",
  },
  {
    responsibilitiesId: "sse",
    content:
      "Developed the project's logical framework (objectives, expected results, indicators, activities)",
  },
  {
    responsibilitiesId: "sse",
    content:
      "Organised experience-sharing sessions among technical supervisors",
  },
  {
    responsibilitiesId: "sse",
    content: "Organised complementary crop plans",
  },
  {
    responsibilitiesId: "sse",
    content: "Defined exchange modalities among cooperation members",
  },
];
