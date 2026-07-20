import type { Metadata, Viewport } from "next";
import "./globals.css";
import { profile } from "./lib/content";

/* Tab title reads as a shell prompt; shares/search keep the plain name. */
const tabTitle = `eden@${profile.handle}:~`;
const title = profile.name;
const description = `${profile.role} — terminal portfolio of ${profile.name}.`;

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL in prod so OG/Twitter image URLs are absolute.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: { default: tabTitle, template: `%s — eden@${profile.handle}:~` },
  description,
  openGraph: {
    title,
    description,
    siteName: profile.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-bg text-fg antialiased">
        {children}
      </body>
    </html>
  );
}
