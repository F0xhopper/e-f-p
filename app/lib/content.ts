/* ================================================================== *
 *  EDIT THIS FILE TO MAKE THE SITE YOURS.
 *  Everything the portfolio renders comes from the data below.
 * ================================================================== */

export const profile = {
  name: "eden fox phillips",
  handle: "e-f-p",
  role: "designer / developer / maker",
  links: [
    { label: "email", href: "mailto:foxhopper16@gmail.com", text: "foxhopper16@gmail.com" },
    { label: "github", href: "https://github.com/e-f-p", text: "e-f-p" },
    { label: "linkedin", href: "https://linkedin.com/in/eden-fox-phillips", text: "eden-fox-phillips" },
  ],
};

export const about = [
  "I design and ship tools, interfaces, and the occasional ridiculous experiment.",
  "I like systems that feel like instruments -- fast, legible, a little bit retro.",
];

export type Project = {
  id: string; // 2-digit catalogue id, e.g. "01"
  title: string;
  stack: string[];
  description: string[];
  links?: { label: string; href: string }[];
  /* 1-bit dithered screenshot. Drop the original in assets/screenshots/
     and run `npm run dither`; it lands in public/projects/ at the
     width/height the script prints. */
  image?: { src: string; alt: string; width: number; height: number };
};

export const projects: Project[] = [
  {
    id: "01",
    title: "lumen",
    stack: ["typescript", "next.js", "postgres", "pgvector", "claude api"],
    links: [{ label: "code", href: "https://github.com/e-f-p/lumen" }],
    description: [
      "A study companion for the Summa Theologica: full text, semantic search,",
      "notes, and an agent that reasons over the corpus alongside you.",
    ],
    image: {
      src: "/projects/github-profile.png",
      alt: "dithered screenshot of a github profile page",
      width: 320,
      height: 198,
    },
  },
  {
    id: "02",
    title: "altum",
    stack: ["go", "bubbletea", "sqlite"],
    links: [{ label: "code", href: "https://github.com/e-f-p/altum" }],
    description: [
      "A minimalist CLI deep work companion for the terminal. No noise --",
      "just you, a timer, and the work.",
    ],
    image: {
      src: "/projects/st-paul-hermit.png",
      alt: "dithered painting of st paul the hermit at his desk",
      width: 320,
      height: 388,
    },
  },
  {
    id: "03",
    title: "peritus",
    stack: ["python", "networkx", "claude api"],
    links: [{ label: "code", href: "https://github.com/e-f-p/peritus" }],
    description: [
      "CLI tool that fetches, validates, and graphs multi-source research on a",
      "topic, then lets you chat with a generated expert persona grounded in",
      "that corpus.",
    ],
    image: {
      src: "/projects/youtube.png",
      alt: "dithered screenshot of a youtube watch page",
      width: 320,
      height: 208,
    },
  },
  {
    id: "04",
    title: "studio apply",
    stack: ["typescript", "next.js", "supabase", "tailwind", "vercel"],
    links: [{ label: "site", href: "https://studioapply.com" }],
    description: [
      "Full-stack studio and client portal for creative agencies, with",
      "multi-tenant subdomains and per-studio branding.",
    ],
    image: {
      src: "/projects/servants-of-mary.png",
      alt: "dithered screenshot of the servants of mary site hero",
      width: 320,
      height: 233,
    },
  },
  {
    id: "05",
    title: "atlas temporum",
    stack: ["typescript", "next.js", "maplibre", "go", "postgis"],
    links: [{ label: "code", href: "https://github.com/F0xhopper/Atlas-Temporum" }],
    description: [
      "Interactive map of medieval Britain, 1000--1500. One control drives",
      "everything -- slide the timeline year and watch the map change.",
    ],
  },
  {
    id: "06",
    title: "importo",
    stack: ["typescript", "shopify api", "docker"],
    links: [{ label: "code", href: "https://github.com/F0xhopper/Importo" }],
    description: [
      "Drag-and-drop Shopify importer -- turns PDF catalogs, spreadsheets,",
      "and images into ready-to-sell products with titles, prices, variants,",
      "and inventory extracted automatically.",
    ],
  },
];
