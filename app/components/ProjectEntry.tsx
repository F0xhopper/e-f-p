import type { Project } from "../lib/content";

/* A project record drawn with ASCII tree/box characters. The top and
   bottom rules are fixed-width pre lines (scaled to fit by the .term
   font sizing); the body rows keep a `|` gutter but let long prose wrap
   like a real terminal instead of overflowing. */

function GutterRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex text-fg">
      <span aria-hidden className="shrink-0 select-none whitespace-pre">
        |{"  "}
      </span>
      <span className="min-w-0 [overflow-wrap:anywhere]">{children}</span>
    </div>
  );
}

export default function ProjectEntry({
  project,
  width,
}: {
  project: Project;
  width: number;
}) {
  const p = project;
  return (
    <div className="mt-4">
      <pre className="text-fg">{`+- [${p.id}] ${p.title}  (${p.year})`}</pre>
      <GutterRow>{`role  : ${p.role}`}</GutterRow>
      <GutterRow>{`stack : ${p.stack.join(" / ")}`}</GutterRow>
      <GutterRow>{" "}</GutterRow>
      {p.description.map((line, i) => (
        <GutterRow key={i}>{`> ${line}`}</GutterRow>
      ))}
      {p.links && p.links.length > 0 && <GutterRow>{" "}</GutterRow>}
      {p.links?.map((l) => (
        <GutterRow key={l.href}>
          <span className="whitespace-pre">{l.label.padEnd(7)}: </span>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline [overflow-wrap:anywhere]"
          >
            {l.href}
          </a>
        </GutterRow>
      ))}
      <pre className="text-fg">{`+${"-".repeat(Math.max(0, width - 1))}`}</pre>
    </div>
  );
}
