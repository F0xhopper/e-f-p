const EMAIL = "edenfoxphillips@proton.me";

export const profile = {
  name: "eden fox phillips",
  displayName: "Eden Fox Phillips",
  handle: "e-f-p",
  role: "full-stack & ai engineer",
  jobTitle: "Full-Stack & AI Engineer",
  links: [
    {
      label: "email",
      href: `mailto:${EMAIL}`,
      text: EMAIL,
    },
    {
      label: "github",
      href: "https://github.com/F0xhopper",
      text: "F0xhopper",
    },
    {
      label: "linkedin",
      href: "https://www.linkedin.com/in/eden-phillips-8a588b298/",
      text: "eden-phillips-8a588b298",
    },
  ],
};

export const hire = {
  label: "start a project",
  href: `mailto:${EMAIL}?subject=Project%20enquiry`,
  prompt: [
    "have something that needs building? send a few lines about it:",
    "what it is, where it's at, and when you need it.",
  ],
};

export const about = [
  "i build production software and ai systems, mostly in typescript and python.",
  "recent work includes a saas platform for creative studios, a shopify app, and research tools built on retrieval and agents.",
  "first builds were in minecraft.",
];

export type ProjectLink = { label: string; href: string };

export type Shot = { src: string; alt: string; width: number; height: number };

export type Project = {
  id: string;
  title: string;
  year?: string;
  stack: string[];
  description: string[];
  outcome?: string;
  links?: ProjectLink[];
  shot?: Shot;
};

export const projects: Project[] = [
  {
    id: "01",
    title: "studio apply",
    year: "2025",
    stack: ["typescript", "next.js", "nestjs", "supabase", "bullmq"],
    outcome: "in production at studioapply.com",
    links: [{ label: "site", href: "https://studioapply.com" }],
    shot: {
      src: "/shots/studio-apply.webp",
      alt: "studio apply home page",
      width: 1600,
      height: 1000,
    },
    description: [
      "full-stack studio and client portal for creative agencies. each studio",
      "gets its own subdomain, branding, and data, with pdf invoicing and",
      "transactional and campaign email built in.",
    ],
  },
  {
    id: "02",
    title: "importo",
    year: "2025",
    stack: [
      "typescript",
      "remix",
      "shopify api",
      "openai",
      "mistral ocr",
      "bullmq",
    ],
    outcome: "live on the shopify app store, free and paid plans",
    links: [{ label: "site", href: "https://apps.shopify.com/importo" }],
    shot: {
      src: "/shots/importo.webp",
      alt: "importo embedded in the shopify admin: import products to your store",
      width: 1288,
      height: 805,
    },
    description: [
      "drag-and-drop shopify importer that turns pdf catalogs, spreadsheets,",
      "and images into ready-to-sell products, with titles, prices, variants,",
      "and inventory extracted automatically.",
    ],
  },
  {
    id: "03",
    title: "aiserve247",
    year: "2024",
    stack: ["c#", "next.js", "mongodb", "azure", "openai"],
    outcome: "support that answers at 3am, live at aiserve247.com",
    links: [{ label: "site", href: "https://aiserve247.com" }],
    shot: {
      src: "/shots/aiserve247.webp",
      alt: "aiserve247 home page",
      width: 1600,
      height: 1000,
    },
    description: [
      "customer support chatbot with an integrated crm: automated responses",
      "to routine enquiries, with customer records and conversation history",
      "in one place.",
    ],
  },
  {
    id: "04",
    title: "lumen",
    year: "2026",
    stack: ["typescript", "next.js", "python", "fastapi", "pinecone", "openai"],
    outcome: "live: all 2,669 articles of the summa, searchable end to end",
    links: [
      { label: "site", href: "https://lumen-five-tau.vercel.app/" },
      { label: "source", href: "https://github.com/F0xhopper/Lumen" },
    ],
    shot: {
      src: "/shots/lumen.webp",
      alt: "lumen reader: an article in english and latin beside the ask-anything panel",
      width: 1600,
      height: 1000,
    },
    description: [
      "a study companion for the summa theologica: full text in english and",
      "latin, semantic search, notes, and an agent that reasons over the",
      "corpus alongside you and cites what it read.",
    ],
  },
  {
    id: "05",
    title: "peritus",
    year: "2026",
    stack: ["python", "fastapi", "postgres", "pgvector", "rust", "claude api"],
    outcome: "every source kept or dropped, on the record",
    links: [{ label: "source", href: "https://github.com/F0xhopper/Peritus" }],
    shot: {
      src: "/shots/peritus.webp",
      alt: "peritus knowledge map: sources and concepts for an expert on the anglo-saxon settlement of britain",
      width: 1600,
      height: 1000,
    },
    description: [
      "research agent that turns any topic into a vetted library: it searches",
      "eleven kinds of source, keeps only what holds up, and answers your",
      "questions with a checked citation behind every claim.",
    ],
  },
  {
    id: "06",
    title: "cognita",
    year: "2026",
    stack: ["python", "mcp", "postgres", "pgvector", "claude api"],
    outcome: "every answer traced back to the page",
    links: [
      { label: "source", href: "https://github.com/F0xhopper/Cognita-MCP" },
    ],
    shot: {
      src: "/shots/cognita.webp",
      alt: "the fifteen tools cognita exposes over mcp",
      width: 1600,
      height: 1000,
    },
    description: [
      "an mcp server that lets your ai agent search your personal library.",
      "ingest pdfs and epubs, then get answers with citations down to the",
      "page.",
    ],
  },
  {
    id: "07",
    title: "logica",
    year: "2026",
    stack: ["typescript", "react", "react flow", "hono", "claude api"],
    outcome: "every node anchored to a quote",
    links: [{ label: "source", href: "https://github.com/F0xhopper/logica" }],
    shot: {
      src: "/shots/logica.webp",
      alt: "logica argument map: a conclusion with its premises and implied assumptions",
      width: 1600,
      height: 1000,
    },
    description: [
      "argument mapping tool. paste an essay, article, or debate and watch it",
      "stream into an interactive map of claims, premises, evidence, and",
      "objections. quotes the model can't locate in the source get flagged.",
    ],
  },
  {
    id: "08",
    title: "altum",
    year: "2026",
    stack: ["go", "bubbletea", "sqlite"],
    outcome: "a timer, a log, and nothing else",
    links: [{ label: "source", href: "https://github.com/F0xhopper/Altum" }],
    shot: {
      src: "/shots/altum.webp",
      alt: "altum report in the terminal: sessions, hours, ratings, best days",
      width: 1536,
      height: 960,
    },
    description: [
      "a minimalist cli deep work companion for the terminal. no noise, just",
      "you, a timer, and the work.",
    ],
  },
];
