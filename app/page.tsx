import Banner from "./components/Banner";
import { about, profile, projects, type Project } from "./lib/content";

function ContactLinks() {
  const pad = Math.max(...profile.links.map((l) => l.label.length)) + 2;
  return (
    <ul className="t-meta">
      {profile.links.map((l) => (
        <li key={l.href}>
          <span className="whitespace-pre text-fg-dim">
            {l.label.padEnd(pad)}
          </span>
          <a
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="[overflow-wrap:anywhere]"
          >
            {l.text}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Outcome({ text }: { text: string }) {
  return (
    <p className="mt-1 [overflow-wrap:anywhere]">
      <span className="text-fg-dim" aria-hidden="true">
        {"* "}
      </span>
      {text}
    </p>
  );
}

function primaryLink(p: Project) {
  return p.links?.find((l) => l.label === "site") ?? p.links?.[0];
}

function TitleRow({ p }: { p: Project }) {
  const link = primaryLink(p);
  return (
    <div className="flex items-baseline justify-between gap-4">
      <h3 className="font-bold">
        <span className="text-fg-dim" aria-hidden="true">
          {p.id}
        </span>{" "}
        {link ? (
          <a href={link.href} target="_blank" rel="noopener noreferrer">
            {p.title}
          </a>
        ) : (
          p.title
        )}
      </h3>
      {p.year && (
        <span className="t-meta shrink-0 text-fg-dim">{p.year}</span>
      )}
    </div>
  );
}

function Stack({ p }: { p: Project }) {
  return (
    <p className="t-meta mt-2 text-fg-dim [overflow-wrap:anywhere]">
      {p.stack.join(" · ")}
    </p>
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <li>
      <TitleRow p={p} />
      <div className="pt-2">
        <p className="[overflow-wrap:anywhere]">{p.description.join(" ")}</p>
        {p.outcome && <Outcome text={p.outcome} />}
        <Stack p={p} />
      </div>
    </li>
  );
}

export default function Home() {
  return (
    <main className="term mx-auto max-w-[124ch] px-4 py-12 text-fg">
      <header className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
        <Banner />
        <div className="text-fg-dim">
          <p className="font-bold text-fg">{profile.role}</p>
          <div className="mt-3">
            {about.map((line) => (
              <p key={line}>{line}</p>
            ))}
          </div>
          <div className="mt-4">
            <ContactLinks />
          </div>
        </div>
      </header>

      <ul
        aria-label="work"
        className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((p) => (
          <ProjectCard key={p.id} p={p} />
        ))}
      </ul>
    </main>
  );
}
