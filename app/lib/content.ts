/* ================================================================== *
 *  EDIT THIS FILE TO MAKE THE SITE YOURS.
 *  Everything the portfolio renders comes from the data below.
 * ================================================================== */

export const profile = {
  name: "eden fox phillips",
  handle: "e-f-p",
  role: "design engineer",
  links: [
    { label: "email", href: "mailto:edenfoxphillips@proton.me", text: "edenfoxphillips@proton.me" },
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
  // One concrete, TRUE result -- a number beats an adjective ("12 studios
  // onboarded", "cut import time from 2h to 4min"). Rendered as a "> " line
  // on the card. Leave unset until you have a real one; never invent it.
  outcome?: string;
  // EVERY project should carry at least one link -- live site or repo.
  // A card with no link is an unverifiable claim.
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "01",
    title: "lumen",
    stack: ["typescript", "next.js", "postgres", "pgvector", "claude api"],
    // TODO(outcome): e.g. "full 3,000+ article corpus, semantic search in <Xs"
    outcome: "live -- the full summa, searchable end to end",
    links: [{ label: "site", href: "https://lumen-five-tau.vercel.app/" }],
    description: [
      "a study companion for the summa theologica: full text, semantic search,",
      "notes, and an agent that reasons over the corpus alongside you.",
    ],
  },
  {
    id: "02",
    title: "altum",
    stack: ["go", "bubbletea", "sqlite"],
    // TODO(outcome): upgrade to a real number, e.g. "N hours of deep work logged"
    outcome: "a timer, a log, and nothing else",
    // TODO(link): EXAMPLE url -- replace with the real deployed site
    links: [{ label: "site", href: "https://altum.vercel.app" }],
    description: [
      "a minimalist cli deep work companion for the terminal. no noise --",
      "just you, a timer, and the work.",
    ],
  },
  {
    id: "03",
    title: "peritus",
    stack: ["python", "networkx", "claude api"],
    // TODO(outcome): upgrade to a real number, e.g. "N sources validated per topic"
    outcome: "one command from topic to expert",
    // TODO(link): EXAMPLE url -- replace with the real deployed site
    links: [{ label: "site", href: "https://peritus.vercel.app" }],
    description: [
      "cli tool that fetches, validates, and graphs multi-source research on a",
      "topic, then lets you chat with a generated expert persona grounded in",
      "that corpus.",
    ],
  },
  {
    id: "04",
    title: "studio apply",
    stack: ["typescript", "next.js", "supabase", "tailwind", "vercel"],
    // TODO(outcome): replace with a real number, e.g. "N studios onboarded"
    outcome: "in production at studioapply.com",
    links: [{ label: "site", href: "https://studioapply.com" }],
    description: [
      "full-stack studio and client portal for creative agencies, with",
      "multi-tenant subdomains and per-studio branding.",
    ],
  },
  {
    id: "05",
    title: "atlas temporum",
    stack: ["typescript", "next.js", "maplibre", "go", "postgis"],
    // TODO(outcome): upgrade to a real number, e.g. "N mapped places"
    outcome: "five centuries on one slider",
    // TODO(link): EXAMPLE url -- replace with the real deployed site
    links: [{ label: "site", href: "https://atlas-temporum.vercel.app" }],
    description: [
      "interactive map of medieval britain, 1000--1500. one control drives",
      "everything -- slide the timeline year and watch the map change.",
    ],
  },
  {
    id: "06",
    title: "importo",
    stack: ["typescript", "shopify api", "docker"],
    // TODO(outcome): upgrade to a real number, e.g. "N-page catalog -> store in N min"
    outcome: "catalog in, storefront out",
    // TODO(link): EXAMPLE url -- replace with the real deployed site
    links: [{ label: "site", href: "https://importo.vercel.app" }],
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
    // TODO(outcome): upgrade to a real number, e.g. "resolves N% of tickets unaided"
    outcome: "support that answers at 3am",
    // TODO(link): EXAMPLE url -- verify this is the live product before deploying
    links: [{ label: "site", href: "https://aiserve247.com" }],
    description: [
      "an ai-powered chatbot that automates repetitive customer support,",
      "helping businesses save time and boost efficiency. alongside its",
      "conversational ai, a polished crm centralises customer data and",
      "tracks interactions.",
    ],
  },
];
