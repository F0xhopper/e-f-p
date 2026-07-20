import PortfolioPage from "../components/PortfolioPage";
import { profile, projects } from "../lib/content";
import { pageMetadata } from "../lib/metadata";

export const metadata = pageMetadata(
  "projects",
  `${projects.length} things ${profile.name} has built.`
);

export default function ProjectsPage() {
  return <PortfolioPage initialPath="projects" />;
}
