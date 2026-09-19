import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { profile } from "./lib/content";
import { SITE_URL } from "./lib/site";

const jetbrains = localFont({
  src: [
    {
      path: "./fonts/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/JetBrainsMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-jetbrains",
});

const title = `${profile.displayName} — ${profile.jobTitle}`;
const description = `${profile.jobTitle}. ${profile.displayName} builds full-stack products and AI features end to end — Studio Apply, Importo, AIServe247, Lumen.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: title, template: `%s — ${profile.displayName}` },
  description,
  applicationName: profile.displayName,
  authors: [{ name: profile.displayName, url: SITE_URL }],
  creator: profile.displayName,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    siteName: profile.displayName,
    url: SITE_URL,
    locale: "en_GB",
    type: "website",
  },
  twitter: { card: "summary_large_image", title, description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.displayName,
  url: SITE_URL,
  jobTitle: profile.jobTitle,
  description,
  knowsAbout: [
    "Full-stack web development",
    "TypeScript",
    "Next.js",
    "Python",
    "Go",
    "PostgreSQL",
    "Retrieval-augmented generation",
    "AI agents",
    "Shopify app development",
  ],
  sameAs: profile.links
    .filter((l) => !l.href.startsWith("mailto:"))
    .map((l) => l.href),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrains.variable} h-full`}>
      <body className="min-h-full bg-bg text-fg antialiased">
        {children}
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </body>
    </html>
  );
}
