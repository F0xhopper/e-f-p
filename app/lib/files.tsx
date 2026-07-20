import Image from "next/image";
import { BANNER } from "./banner";
import { about, profile, projects, type Project } from "./content";

/* ================================================================== *
 *  Virtual filesystem the file browser walks. Presentation-only --
 *  content.ts stays the single source of truth for real data.
 * ================================================================== */

export type FileEntry =
  | { type: "file"; name: string; path: string }
  | { type: "dir"; name: string; path: string; children: FileEntry[] };

function slugify(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}

export function projectFileName(p: Project) {
  return `${p.id}-${slugify(p.title)}`;
}

/* Clean, id-free slug for real URLs (/projects/lumen) -- the numeric
   prefix stays in the file tree for the ls -l cosplay but has no place
   in a shareable link. */
export function projectSlug(p: Project) {
  return slugify(p.title);
}

export function findProjectBySlug(slug: string) {
  return projects.find((p) => projectSlug(p) === slug);
}

const projectFiles: FileEntry[] = projects.map((p) => ({
  type: "file",
  name: projectFileName(p),
  path: `projects/${projectFileName(p)}`,
}));

export const fileTree: FileEntry[] = [
  { type: "file", name: "README", path: "README" },
  { type: "file", name: "about", path: "about" },
  { type: "file", name: "resume.pdf", path: "resume" },
  { type: "file", name: "contact", path: "contact" },
  { type: "dir", name: "projects/", path: "projects", children: projectFiles },
];

export const defaultPath = "README";

export function flattenTree(
  nodes: FileEntry[],
  expanded: Set<string>,
  depth = 0
): { entry: FileEntry; depth: number }[] {
  const out: { entry: FileEntry; depth: number }[] = [];
  for (const node of nodes) {
    out.push({ entry: node, depth });
    if (node.type === "dir" && expanded.has(node.path)) {
      out.push(...flattenTree(node.children, expanded, depth + 1));
    }
  }
  return out;
}

/* Fake but stable "file sizes" for the directory listing -- derived from
   how much a project actually says, not random, so it stays consistent. */
function projectByteSize(p: Project) {
  const text = [
    p.title,
    p.stack.join(""),
    p.description.join(""),
    p.links?.map((l) => l.href).join("") ?? "",
  ].join("");
  return text.length * 8; // approximate a real markdown file's byte weight
}

function formatSize(n: number) {
  return n < 1000 ? `${n}B` : `${(n / 1000).toFixed(1)}K`;
}

function frontmatterLines(
  fields: [string, React.ReactNode][]
): React.ReactNode[] {
  return [
    <span key="fm-open" className="text-fg-dim">---</span>,
    ...fields.map(([k, v]) => (
      <span key={k}>
        <span className="text-fg-dim">{k}:</span> {v}
      </span>
    )),
    <span key="fm-close" className="text-fg-dim">---</span>,
  ];
}

function readmeLines(): React.ReactNode[] {
  return [
    <pre key="banner" className="banner m-0 text-fg">{BANNER}</pre>,
    "",
    `${profile.name} — ${profile.role}`,
    "",
    "open a file in the tree to look around:",
    "",
    "  about        who this is",
    "  resume.pdf   the short version",
    "  contact      reach me",
    "  projects/    things I've built",
    "",
    <span key="hint">
      <span className="md:hidden">tap a file to open it</span>
      <span className="hidden md:inline">
        j/k or ↑/↓ move   ·   enter/l open   ·   h collapse
      </span>
    </span>,
  ];
}

function aboutLines(): React.ReactNode[] {
  return [
    ...frontmatterLines([
      ["name", profile.name],
      ["role", profile.role],
    ]),
    "",
    about[0],
    about[1],
  ];
}

function resumeLines(): React.ReactNode[] {
  return [
    ...frontmatterLines([
      ["name", profile.name],
      ["format", "pdf"],
    ]),
    "",
    <span key="dl">
      <span className="text-fg-dim">download  </span>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        /resume.pdf
      </a>
    </span>,
  ];
}

function contactLines(): React.ReactNode[] {
  const labelWidth = Math.max(...profile.links.map((l) => l.label.length));
  return [
    "# contact",
    "",
    ...profile.links.map((l) => (
      <span key={l.href}>
        <span className="text-fg-dim">{l.label.padEnd(labelWidth + 2)}</span>
        <a
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          className="underline [overflow-wrap:anywhere]"
        >
          {l.text}
        </a>
      </span>
    )),
  ];
}

function projectLines(p: Project): React.ReactNode[] {
  const link = p.links?.[0];
  const lines: React.ReactNode[] = [
    ...frontmatterLines([
      ["title", p.title],
      ["stack", `[${p.stack.join(", ")}]`],
      ...(link
        ? ([
            [
              link.label,
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="underline [overflow-wrap:anywhere]"
              >
                {link.href}
              </a>,
            ],
          ] as [string, React.ReactNode][])
        : []),
    ]),
    "",
    ...p.description,
  ];
  if (p.image) {
    lines.push("");
    lines.push(
      <Image
        src={p.image.src}
        alt={p.image.alt}
        width={p.image.width}
        height={p.image.height}
        className="h-auto max-h-[420px] w-auto"
      />
    );
  }
  return lines;
}

function projectsDirLines(): React.ReactNode[] {
  const nameWidth = Math.max(...projects.map((p) => projectFileName(p).length)) + 3;
  return [
    <span key="hdr" className="text-fg-dim">
      projects/ — {projects.length} items
    </span>,
    "",
    ...projects.map((p) => (
      <span key={p.id}>
        <span>{projectFileName(p).padEnd(nameWidth)}</span>
        <span className="text-fg-dim">{formatSize(projectByteSize(p)).padStart(6)}</span>
      </span>
    )),
  ];
}

export function getTitle(path: string): string {
  if (path === "projects") return "projects/";
  if (path === "resume") return "resume.pdf";
  return path;
}

export function getPreview(path: string): React.ReactNode[] {
  if (path === "README") return readmeLines();
  if (path === "about") return aboutLines();
  if (path === "resume") return resumeLines();
  if (path === "contact") return contactLines();
  if (path === "projects") return projectsDirLines();
  const project = projects.find((p) => `projects/${projectFileName(p)}` === path);
  if (project) return projectLines(project);
  return ["404: file not found"];
}
