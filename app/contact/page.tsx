import PortfolioPage from "../components/PortfolioPage";
import { profile } from "../lib/content";
import { pageMetadata } from "../lib/metadata";

export const metadata = pageMetadata(
  "contact",
  `reach ${profile.name} — ${profile.links.map((l) => l.label).join(", ")}.`
);

export default function ContactPage() {
  return <PortfolioPage initialPath="contact" />;
}
