import { notFound } from "next/navigation";
import PortfolioPage from "../../components/PortfolioPage";
import { projects } from "../../lib/content";
import { findProjectBySlug, projectFileName, projectSlug } from "../../lib/files";
import { pageMetadata } from "../../lib/metadata";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: projectSlug(p) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProjectBySlug(slug);
  if (!project) return {};
  return pageMetadata(project.title, project.description.join(" "));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = findProjectBySlug(slug);
  if (!project) notFound();
  return <PortfolioPage initialPath={`projects/${projectFileName(project)}`} />;
}
