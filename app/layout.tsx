import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { profile } from "./lib/content";

const monocraft = localFont({
  src: "./fonts/Monocraft.ttf",
  variable: "--font-monocraft",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} // ${profile.handle}`,
  description: `${profile.role} — terminal portfolio of ${profile.name}.`,
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
