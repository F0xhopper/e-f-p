/* ================================================================== *
 *  EDIT THIS FILE TO MAKE THE SITE YOURS.
 *  Everything the portfolio renders comes from the data below.
 *  Drop project images into /public/projects/ and reference them
 *  by path, e.g. "/projects/my-thing.png".
 * ================================================================== */

export const profile = {
  name: "EDEN FOX PHILLIPS",
  handle: "e-f-p",
  role: "Designer / Developer / Maker",
  location: "EARTH // GMT",
  links: [
    { label: "EMAIL", href: "mailto:foxhopper16@gmail.com", text: "foxhopper16@gmail.com" },
    { label: "GITHUB", href: "https://github.com/", text: "github.com/e-f-p" },
    { label: "TWITTER/X", href: "https://x.com/", text: "@e_f_p" },
  ],
};

export const about = [
  "I design and build interfaces, tools, and the occasional ridiculous experiment.",
  "I like systems that feel like instruments -- fast, legible, a little bit retro.",
  "This page is a terminal. Scroll through the transmission. Everything below is real work (swap in your own).",
];

export type Project = {
  id: string; // 2-digit catalogue id, e.g. "01"
  title: string;
  year: string;
  role: string;
  stack: string[];
  description: string[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "01",
    title: "LUMEN",
    year: "2026",
    role: "Solo build // Public",
    stack: ["TypeScript"],
    description: [
      "A study companion for the Summa Theologica: full text, semantic search,",
      "notes, and an agent that reasons over the corpus alongside you.",
    ],
  },
  {
    id: "02",
    title: "ALTUM",
    year: "2026",
    role: "Solo build // Public",
    stack: ["Go"],
    description: [
      "A minimalist CLI deep work companion for the terminal. No noise --",
      "just you, a timer, and the work.",
    ],
  },
  {
    id: "03",
    title: "PERITUS",
    year: "2026",
    role: "Solo build // Public",
    stack: ["Python"],
    description: [
      "CLI tool that fetches, validates, and graphs multi-source research on a",
      "topic, then lets you chat with a generated expert persona grounded in",
      "that corpus.",
    ],
  },
  {
    id: "04",
    title: "STUDIO APPLY",
    year: "2026",
    role: "Design + Engineering",
    stack: [
      "Node.js",
      "TypeScript",
      "Next.js",
      "NestJS",
      "Supabase",
      "Turborepo",
      "Tailwind CSS",
      "Fly.io",
    ],
    description: [
      "Full-stack studio and client portal for creative agencies -- projects,",
      "tasks, leads, forms, email campaigns, and invoices in one place, with",
      "optional multi-tenant subdomains and branding per studio.",
    ],
  },
];
