import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { profile } from "./lib/content";

const monocraft = localFont({
  src: "./fonts/Monocraft.ttf",
  variable: "--font-monocraft",
  display: "swap",
});

const title = profile.name;
const description = `${profile.role} — terminal portfolio of ${profile.name}.`;

export const metadata: Metadata = {
  // Set NEXT_PUBLIC_SITE_URL in prod so OG/Twitter image URLs are absolute.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title,
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
    <html lang="en" className={`${monocraft.variable} h-full`}>
      <body className="min-h-full bg-bg text-fg antialiased">
        {children}
      </body>
    </html>
  );
}
