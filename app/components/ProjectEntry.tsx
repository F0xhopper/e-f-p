import type { Project } from "../lib/content";

/* A project record drawn with ASCII tree/box characters. The top and
   bottom rules are fixed-width pre lines (scaled to fit by the .term
   font sizing); the body rows keep a `|` gutter but let long prose wrap
   like a real terminal instead of overflowing. Hierarchy is monochrome:
   bright fg for content, mid `mute` for labels, faint `dim` for structure. */

function GutterRow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex text-fg">
      <span aria-hidden className="shrink-0 select-none whitespace-pre text-dim">
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
      <pre className="text-dim">
        +- [<span className="text-mute">{p.id}</span>]{" "}
        <span className="text-fg">{p.title}</span>
        {`  (${p.year})`}
        {p.visibility && (
          <span className={p.visibility === "public" ? "text-mute" : "text-dim"}>
            {`  [${p.visibility}]`}
          </span>
        )}
      </pre>

      <GutterRow>
        <span className="text-mute">role&nbsp;&nbsp;: </span>
        {p.role}
      </GutterRow>
      <GutterRow>
        <span className="text-mute">stack : </span>
        {p.stack.join(" / ")}
      </GutterRow>

      {p.outcome && (
        <GutterRow>
          <span className="text-fg">! {p.outcome}</span>
        </GutterRow>
      )}

      <GutterRow>{" "}</GutterRow>
      {p.description.map((line, i) => (
        <GutterRow key={i}>
          <span className="text-dim">&gt; </span>
          {line}
        </GutterRow>
      ))}

      {p.image && (
        <>
          <GutterRow>{" "}</GutterRow>
          <GutterRow>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={p.image}
              alt={`${p.title} screenshot`}
              className="max-w-full border border-dim"
            />
          </GutterRow>
        </>
      )}

      {p.links && p.links.length > 0 && <GutterRow>{" "}</GutterRow>}
      {p.links?.map((l) => (
        <GutterRow key={l.href}>
          <span className="whitespace-pre text-mute">
            {l.label.padEnd(7)}:{" "}
          </span>
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
      <pre className="text-dim">{`+${"-".repeat(Math.max(0, width - 1))}`}</pre>
    </div>
  );
}
