import FileBrowser from "./FileBrowser";
import { profile } from "../lib/content";

export default function PortfolioPage({
  initialPath,
}: {
  initialPath?: string;
}) {
  return (
    <main className="term mx-auto max-w-[100ch] px-4 py-12 text-fg">
      <h1 className="sr-only">
        {profile.name} — {profile.role}
      </h1>
      <FileBrowser initialPath={initialPath} />
    </main>
  );
}
