import Banner from "./components/Banner";
import { about, profile, projects } from "./lib/content";

const WIDTH = 44;

/* A section: just breathing room, no header -- the row labels inside
   (about / project titles / contact labels) already say what it is. */
function Box({ children }: { children: React.ReactNode }) {
  return <div className="mt-8 pl-2">{children}</div>;
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
  const labelWidth = Math.max(
    "about".length,
    ...projects.map((p) => p.title.length),
    ...profile.links.map((l) => l.label.length)
  );

  return (
    <main className="term mx-auto max-w-2xl px-4 py-8 text-fg">
      <pre>{"-".repeat(WIDTH)}</pre>

      <div className="mt-4">
        <Banner />
      </div>

      <Box>
        <Row label="about" width={labelWidth}>
          <p>{about.join(" ")}</p>
        </Row>
      </Box>

      <Box>
        {projects.map((p, i) => {
          const link = p.links?.[0];
          const title = link ? (
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
          );
          return (
            <div key={p.id} className={i > 0 ? "mt-6" : undefined}>
              <Row label={title} width={labelWidth}>
                <p>
                  {p.description.join(" ")}
                  {p.visibility && ` [${p.visibility}]`}
                </p>
                <p className="mt-1">stack: {p.stack.join(" / ")}</p>
              </Row>
            </div>
          );
        })}
      </Box>

      <Box>
        {profile.links.map((l) => (
          <Row key={l.href} label={l.label} width={labelWidth}>
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
