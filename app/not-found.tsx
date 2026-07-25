import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="term mx-auto max-w-[100ch] px-4 py-12 text-fg">
      <h1 className="font-bold">not found</h1>
      <p className="mt-3">
        that page doesn&apos;t exist. everything lives at{" "}
        <Link href="/">the index</Link>.
      </p>
    </main>
  );
}
