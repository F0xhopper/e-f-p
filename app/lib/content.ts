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
    { label: "GITHUB", href: "https://github.com/e-f-p", text: "github.com/e-f-p" },
    { label: "LINKEDIN", href: "https://linkedin.com/in/eden-fox-phillips", text: "linkedin.com/in/eden-fox-phillips" },
  ],
};

export const about = [
  "I'm a builder.",
  "I design and ship tools, interfaces, and the occasional ridiculous experiment.",
  "I like systems that feel like instruments -- fast, legible, a little bit retro.",
  "This page is a terminal. Scroll the transmission -- everything below is real work.",
];

export type Project = {
  id: string; // 2-digit catalogue id, e.g. "01"
  title: string;
  role: string;
  stack: string[];
  description: string[];
  visibility?: "public" | "private"; // renders a [public]/[private] tag
  outcome?: string; // one terse impact line, e.g. "shipped to the App Store"
  image?: string; // screenshot path, e.g. "/projects/lumen.png"
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "01",
    title: "LUMEN",
    role: "Solo build",
    stack: ["TypeScript"],
    visibility: "public",
    // outcome: "", // add a real metric, e.g. "1k+ passages indexed"
    // image: "/projects/lumen.png",
    links: [{ label: "code", href: "https://github.com/e-f-p/lumen" }],
    description: [
      "A study companion for the Summa Theologica: full text, semantic search,",
      "notes, and an agent that reasons over the corpus alongside you.",
    ],
  },
  {
    id: "02",
    title: "ALTUM",
    role: "Solo build",
    stack: ["Go"],
    visibility: "public",
    // outcome: "",
    // image: "/projects/altum.png",
    links: [{ label: "code", href: "https://github.com/e-f-p/altum" }],
    description: [
      "A minimalist CLI deep work companion for the terminal. No noise --",
      "just you, a timer, and the work.",
    ],
  },
  {
    id: "03",
    title: "PERITUS",
    role: "Solo build",
    stack: ["Python"],
    visibility: "public",
    // outcome: "",
    // image: "/projects/peritus.png",
    links: [{ label: "code", href: "https://github.com/e-f-p/peritus" }],
    description: [
      "CLI tool that fetches, validates, and graphs multi-source research on a",
      "topic, then lets you chat with a generated expert persona grounded in",
      "that corpus.",
    ],
  },
  {
    id: "04",
    title: "STUDIO APPLY",
    role: "Design + Engineering",
    // outcome: "", // e.g. "live on the Shopify App Store"
    // image: "/projects/studio-apply.png",
    links: [{ label: "site", href: "https://studioapply.com" }],
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
