import Banner from "./components/Banner";
import ProjectEntry from "./components/ProjectEntry";
import { about, profile, projects } from "./lib/content";

const WIDTH = 44;

/* An ASCII section rule: ==[ LABEL ]==================== */
function Section({ label }: { label: string }) {
  const tail = "=".repeat(Math.max(0, WIDTH - `==[ ${label} ]`.length));
  return (
    <pre className="mt-8 mb-3 text-dim">
      ==[ <span className="text-fg">{label}</span> ]{tail}
    </pre>
  );
}

/* A blank line, like pressing enter in a terminal. */
function Gap() {
  return <p>&nbsp;</p>;
}

export default function Home() {
  return (
    <main className="term mx-auto max-w-2xl px-4 py-8">
      <Banner />
      <pre className="mt-3 text-dim">{"=".repeat(WIDTH)}</pre>

      <p className="mt-3 text-fg">{profile.name}</p>
      <p className="text-mute">{profile.role}</p>
      <p className="text-dim">
        <span className="text-fg">{profile.handle}</span> | {profile.location}
      </p>

      <Section label="ABOUT" />
      {about.map((line, i) => (
        <p key={i}>{line}</p>
      ))}

      <Section label="PROJECTS" />
      {projects.map((p) => (
        <ProjectEntry key={p.id} project={p} width={WIDTH} />
      ))}

      <Section label="CONTACT" />
      <div className="text-fg">
        {profile.links.map((l) => (
          <div key={l.href} className="flex">
            <span className="shrink-0 select-none whitespace-pre text-mute">
              {l.label.padEnd(9)}:{" "}
            </span>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-0 underline [overflow-wrap:anywhere]"
            >
              {l.text}
            </a>
          </div>
        ))}
      </div>

      <Gap />
      <p className="text-dim">
        (c) {new Date().getFullYear()} {profile.name}
      </p>
    </main>
  );
}
