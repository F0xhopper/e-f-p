import Banner from "./components/Banner";
import Screenshot from "./components/Screenshot";
import { about, profile, projects, type Project } from "./lib/content";

/* ------------------------------------------------------------------ *
 *  cheat.sh cosplay, drawn for real: the project frames are literal
 *  ASCII characters -- "+" corners, "-" top/bottom, "|" sides -- not
 *  CSS borders. The title rides in the top edge; the vertical sides are
 *  a column of stacked "|" clipped to the content height. Boxes are
 *  text only; a "[ screenshot ]" link opens the image in a retro viewer.
 * ------------------------------------------------------------------ */

const BOX_COLS = 38; // full width of each frame, in monospace columns

// A tall ribbon of "|" that the box clips to its own height, so the
// side borders read as one continuous typed line at any content length.
const SIDE_BAR = Array(80).fill("|").join("\n");

// Top edge carries the title, cheat.sh-style: "+-- 01 · lumen --…--+".
function topEdge(caption: string) {
  const head = `+-- ${caption} `;
  const dashes = Math.max(0, BOX_COLS - head.length - 1); // -1 for closing "+"
  return head + "-".repeat(dashes) + "+";
}

function bottomEdge() {
  return "+" + "-".repeat(BOX_COLS - 2) + "+";
}

function Box({
  caption,
  children,
}: {
  caption: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-[38ch] shrink-0">
      <div className="whitespace-pre leading-none text-fg-dim">
        {topEdge(caption)}
      </div>
      <div className="relative">
        <pre
          aria-hidden
          className="absolute left-0 top-0 bottom-0 w-[1ch] overflow-hidden leading-none text-fg-dim"
        >
          {SIDE_BAR}
        </pre>
        <pre
          aria-hidden
          className="absolute right-0 top-0 bottom-0 w-[1ch] overflow-hidden leading-none text-fg-dim"
        >
          {SIDE_BAR}
        </pre>
        <div className="mx-[1ch] w-[36ch] px-[1ch] py-2">{children}</div>
      </div>
      <div className="whitespace-pre leading-none text-fg-dim">
        {bottomEdge()}
      </div>
    </div>
  );
}

function ProjectBox({ p }: { p: Project }) {
  const link = p.links?.[0];
  return (
    <Box caption={`${p.id} · ${p.title}`}>
      <p className="[overflow-wrap:anywhere]">{p.description.join(" ")}</p>
      {link && (
        <p className="mt-1 [overflow-wrap:anywhere]">
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {link.href.replace(/^https?:\/\//, "")}
          </a>
        </p>
      )}
      {p.image && (
        <p className="mt-1">
          <Screenshot
            src={p.image.src}
            alt={p.image.alt}
            width={p.image.width}
            height={p.image.height}
            name={p.title}
          />
        </p>
      )}
      <p className="mt-1 text-fg-dim [overflow-wrap:anywhere]">
        # {p.stack.join(" · ")}
      </p>
    </Box>
  );
}

export default function Home() {
  return (
    <main className="term mx-auto max-w-[124ch] px-4 py-12 text-fg">
      {/* banner + tagline, side by side like cheat.sh's header block */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
        <Banner />
        <div className="text-fg-dim">
          <p className="text-fg">{profile.role}</p>
          <p className="mt-3">{about[0]}</p>
          <p>{about[1]}</p>
        </div>
      </div>

      {/* project frames */}
      <div className="mt-12 overflow-x-auto pb-2">
        <div className="flex flex-wrap gap-x-6 gap-y-8">
          {projects.map((p) => (
            <ProjectBox key={p.id} p={p} />
          ))}
        </div>
      </div>

      {/* bracketed footer of contact links */}
      <div className="mt-12 flex flex-wrap gap-x-3 gap-y-2 text-fg-dim">
        {profile.links.map((l) => (
          <span key={l.href} className="whitespace-nowrap">
            [<span className="text-fg-dim">{l.label}: </span>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline [overflow-wrap:anywhere]"
            >
              {l.text.replace(/^mailto:/, "")}
            </a>
            ]
          </span>
        ))}
      </div>
    </main>
  );
}
