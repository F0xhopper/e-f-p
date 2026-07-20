import Image from "next/image";
import Banner from "./components/Banner";
import { about, profile, projects } from "./lib/content";

/* A section: just breathing room, no header -- the row labels inside
   (project titles / contact labels) already say what it is. */
function Box({ children }: { children: React.ReactNode }) {
  return <div className="mt-8">{children}</div>;
}

/* A help-menu row: fixed-width label on the left, content flowing and
   wrapping on the right -- aligned to the same column across the page. */
function Row({
  label,
  width,
  children,
}: {
  label: React.ReactNode;
  width: number;
  children: React.ReactNode;
}) {
  return (
    <div className="flex gap-6">
      <p className="shrink-0" style={{ width: `${width}ch` }}>
        {label}
      </p>
      <div className="min-w-0">{children}</div>
    </div>
  );
}

export default function Home() {
  // +3 reserves room for the "01 " catalogue-id prefix on every project row.
  const projectLabelWidth = Math.max(...projects.map((p) => p.title.length + 3));
  const linkLabelWidth = Math.max(...profile.links.map((l) => l.label.length));

  return (
    <main className="term mx-auto max-w-[72ch] px-4 py-12 text-fg">
      <Banner />

      <Box>
        <p>{about.join(" ")}</p>
      </Box>

      <Box>
        {projects.map((p, i) => {
          const link = p.links?.[0];
          const title = (
            <>
              <span className="text-fg-dim">{p.id}</span>{" "}
              {link ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  {p.title}
                </a>
              ) : (
                p.title
              )}
            </>
          );
          return (
            <div key={p.id} className={i > 0 ? "mt-6" : undefined}>
              <Row label={title} width={projectLabelWidth}>
                <p>{p.description.join(" ")}</p>
                {p.image && (
                  <Image
                    src={p.image.src}
                    alt={p.image.alt}
                    width={p.image.width}
                    height={p.image.height}
                    className="mt-3"
                  />
                )}
                {/* stack rendered as a shell comment: dim aside, not content */}
                <p className="mt-1 text-fg-dim"># {p.stack.join(" · ")}</p>
              </Row>
            </div>
          );
        })}
      </Box>

      <Box>
        {profile.links.map((l) => (
          <Row key={l.href} label={l.label} width={linkLabelWidth}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline [overflow-wrap:anywhere]"
            >
              {l.text}
            </a>
          </Row>
        ))}
      </Box>
    </main>
  );
}
