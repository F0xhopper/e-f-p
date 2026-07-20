import PortfolioPage from "../components/PortfolioPage";
import { about } from "../lib/content";
import { pageMetadata } from "../lib/metadata";

export const metadata = pageMetadata("about", about.join(" "));

export default function AboutPage() {
  return <PortfolioPage initialPath="about" />;
}
