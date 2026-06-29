import Banner from "./components/Banner";
import ProjectEntry from "./components/ProjectEntry";
import { about, profile, projects } from "./lib/content";

const WIDTH = 44;

/* An ASCII section rule: ==[ LABEL ]==================== */
function Section({ label }: { label: string }) {
  const head = `==[ ${label} ]`;
  const rule = head + "=".repeat(Math.max(0, WIDTH - head.length));
  return <pre className="mt-8 mb-3 text-fg">{rule}</pre>;
}

/* A blank line, like pressing enter in a terminal. */
function Gap() {
  return <p>&nbsp;</p>;
}

export default function Home() {
  return (
    <main className="term mx-auto max-w-2xl px-4 py-8">
      <Banner />
      <pre className="mt-3 text-fg">{"=".repeat(WIDTH)}</pre>

      <p className="mt-3">{profile.name}</p>
      <p>{profile.role}</p>
      <p>
        {profile.handle} | {profile.location}
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
            <span className="shrink-0 select-none whitespace-pre">
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
      <p>(c) {new Date().getFullYear()} {profile.name}</p>
    </main>
  );
}
