/* ================================================================== *
 *  EDIT THIS FILE TO MAKE THE SITE YOURS.
 *  Everything the portfolio renders comes from the data below.
 * ================================================================== */

export const profile = {
  name: "eden fox phillips",
  handle: "e-f-p",
  role: "designer / engineer / maker",
  links: [
    { label: "email", href: "mailto:foxhopper16@gmail.com", text: "foxhopper16@gmail.com" },
    { label: "github", href: "https://github.com/e-f-p", text: "e-f-p" },
    { label: "linkedin", href: "https://linkedin.com/in/eden-fox-phillips", text: "eden-fox-phillips" },
  ],
};

export const about = [
  "i design and ship tools, interfaces, and the occasional ridiculous experiment.",
  "i like systems that feel like instruments -- fast, legible, a little bit retro.",
];

export type Project = {
  id: string; // 2-digit catalogue id, e.g. "01"
  title: string;
  stack: string[];
  description: string[];
  links?: { label: string; href: string }[];
  image?: { src: string; alt: string; width: number; height: number };
};

export const projects: Project[] = [
  {
    id: "01",
    title: "lumen",
    stack: ["typescript", "next.js", "postgres", "pgvector", "claude api"],
    links: [{ label: "site", href: "https://lumen-five-tau.vercel.app/" }],
    description: [
      "a study companion for the summa theologica: full text, semantic search,",
      "notes, and an agent that reasons over the corpus alongside you.",
    ],
    image: {
      src: "/projects/lumen-main.png",
      alt: "screenshot of the lumen sidebar, showing the summa theologica table of contents",
      width: 220,
      height: 400,
    },
  },
  {
    id: "02",
    title: "altum",
    stack: ["go", "bubbletea", "sqlite"],
    description: [
      "a minimalist cli deep work companion for the terminal. no noise --",
      "just you, a timer, and the work.",
    ],
    image: {
      src: "/projects/st-paul-hermit.png",
      alt: "painting of st paul the hermit at his desk",
      width: 527,
      height: 640,
    },
  },
  {
    id: "03",
    title: "peritus",
    stack: ["python", "networkx", "claude api"],
    description: [
      "cli tool that fetches, validates, and graphs multi-source research on a",
      "topic, then lets you chat with a generated expert persona grounded in",
      "that corpus.",
    ],
    image: {
      src: "/projects/youtube.png",
      alt: "screenshot of a youtube watch page",
      width: 640,
      height: 415,
    },
  },
  {
    id: "04",
    title: "studio apply",
    stack: ["typescript", "next.js", "supabase", "tailwind", "vercel"],
    links: [{ label: "site", href: "https://studioapply.com" }],
    description: [
      "full-stack studio and client portal for creative agencies, with",
      "multi-tenant subdomains and per-studio branding.",
    ],
    image: {
      src: "/projects/servants-of-mary.png",
      alt: "screenshot of the servants of mary site hero",
      width: 640,
      height: 466,
    },
  },
  {
    id: "05",
    title: "atlas temporum",
    stack: ["typescript", "next.js", "maplibre", "go", "postgis"],
    description: [
      "interactive map of medieval britain, 1000--1500. one control drives",
      "everything -- slide the timeline year and watch the map change.",
    ],
  },
  {
    id: "06",
    title: "importo",
    stack: ["typescript", "shopify api", "docker"],
    description: [
      "drag-and-drop shopify importer -- turns pdf catalogs, spreadsheets,",
      "and images into ready-to-sell products with titles, prices, variants,",
      "and inventory extracted automatically.",
    ],
  },
  {
    id: "07",
    title: "aiserve247",
    stack: ["c#", "next.js", "mongodb", "azure", "openai"],
    description: [
      "an ai-powered chatbot that automates repetitive customer support,",
      "helping businesses save time and boost efficiency. alongside its",
      "conversational ai, a polished crm centralises customer data and",
      "tracks interactions.",
    ],
  },
];
