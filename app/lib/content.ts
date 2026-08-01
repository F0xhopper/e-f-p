export const profile = {
  name: "eden fox phillips",
  handle: "e-f-p",
  role: "builder",
  links: [
    {
      label: "email",
      href: "mailto:edenfoxphillips@proton.me",
      text: "edenfoxphillips@proton.me",
    },
    { label: "github", href: "https://github.com/F0xhopper", text: "F0xhopper" },
    {
      label: "linkedin",
      href: "https://www.linkedin.com/in/eden-phillips-8a588b298/",
      text: "eden-phillips-8a588b298",
    },
  ],
};

export const about = [
  "i build useful tools, systems, and applications end to end -- design through deployment.",
  "recent work: ai-assisted study software, multi-tenant saas, and e-commerce automation.",
  "when something doesn't need a ui, i build it for the terminal instead.",
];

export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  title: string;
  year?: string;
  stack: string[];
  description: string[];
  outcome?: string;
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    id: "01",
    title: "lumen",
    year: "2026",
    stack: ["typescript", "next.js", "postgres", "pgvector", "claude api"],
    outcome: "live -- the full summa, searchable end to end",
    links: [
      { label: "site", href: "https://lumen-five-tau.vercel.app/" },
      { label: "source", href: "https://github.com/F0xhopper/Lumen" },
    ],
    description: [
      "a study companion for the summa theologica: full text, semantic search,",
      "notes, and an agent that reasons over the corpus alongside you.",
    ],
  },
  {
    id: "02",
    title: "studio apply",
    year: "2025",
    stack: ["typescript", "next.js", "supabase", "tailwind", "vercel"],
    outcome: "in production at studioapply.com",
    links: [{ label: "site", href: "https://studioapply.com" }],
    description: [
      "full-stack studio and client portal for creative agencies, with",
      "multi-tenant subdomains and per-studio branding.",
    ],
  },
  {
    id: "03",
    title: "aiserve247",
    year: "2024",
    stack: ["c#", "next.js", "mongodb", "azure", "openai"],
    outcome: "support that answers at 3am",
    links: [{ label: "site", href: "https://aiserve247.com" }],
    description: [
      "customer support chatbot with an integrated crm: automated responses",
      "to routine enquiries, with customer records and conversation history",
      "in one place.",
    ],
  },
  {
    id: "04",
    title: "importo",
    year: "2025",
    stack: ["typescript", "shopify api", "docker"],
    outcome: "catalog in, storefront out",
    links: [{ label: "site", href: "https://apps.shopify.com/importo" }],
    description: [
      "drag-and-drop shopify importer -- turns pdf catalogs, spreadsheets,",
      "and images into ready-to-sell products with titles, prices, variants,",
      "and inventory extracted automatically.",
    ],
  },
  {
    id: "05",
    title: "cognita",
    year: "2026",
    stack: ["python", "mcp", "postgres", "pgvector", "docker"],
    outcome: "every answer traced back to the page",
    links: [
      { label: "source", href: "https://github.com/F0xhopper/Cognita-MCP" },
    ],
    description: [
      "an mcp server that lets your ai agent search your personal library --",
      "ingest pdfs and epubs, then get answers with citations down to the",
      "page.",
    ],
  },
  {
    id: "06",
    title: "atlas temporum",
    year: "2026",
    stack: ["typescript", "next.js", "maplibre", "go", "postgis"],
    outcome: "five centuries on one slider",
    links: [
      { label: "source", href: "https://github.com/F0xhopper/Atlas-Temporum" },
    ],
    description: [
      "interactive map of medieval britain, 1000--1500. one control drives",
      "everything -- slide the timeline year and watch the map change.",
    ],
  },
  {
    id: "07",
    title: "peritus",
    year: "2026",
    stack: ["python", "networkx", "claude api"],
    outcome: "one command from topic to expert",
    links: [{ label: "source", href: "https://github.com/F0xhopper/Peritus" }],
    description: [
      "cli tool that fetches, validates, and graphs multi-source research on a",
      "topic, then lets you chat with a generated expert persona grounded in",
      "that corpus.",
    ],
  },
  {
    id: "08",
    title: "altum",
    year: "2026",
    stack: ["go", "bubbletea", "sqlite"],
    outcome: "a timer, a log, and nothing else",
    links: [{ label: "source", href: "https://github.com/F0xhopper/Altum" }],
    description: [
      "a minimalist cli deep work companion for the terminal. no noise --",
      "just you, a timer, and the work.",
    ],
  },
];
