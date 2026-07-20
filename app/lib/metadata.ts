import type { Metadata } from "next";
import { profile } from "./content";

/* Per-page metadata for every route grown off the terminal shell.
   `title` feeds the tab-prompt template in layout.tsx; openGraph/twitter
   get the full readable name since link previews have no shell context. */
export function pageMetadata(title: string, description: string): Metadata {
  const shareTitle = `${title} — ${profile.name}`;
  return {
    title,
    description,
    openGraph: { title: shareTitle, description },
    twitter: { title: shareTitle, description },
  };
}
