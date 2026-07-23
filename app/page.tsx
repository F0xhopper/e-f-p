import Banner from "./components/Banner";
import { about, profile, projects, type Project } from "./lib/content";

/* ------------------------------------------------------------------ *
 *  cheat.sh cosplay, drawn for real: the project frames are literal
 *  ASCII characters -- "+" corners, "-" top/bottom, "|" sides -- not
 *  CSS borders. The title rides in the top edge; the vertical sides are
 *  a column of stacked "|" clipped to the content height. Projects are
 *  text only; frame style is set once via BOX_FRAME below.
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

/* Frame style for every project block. "none" = just a text title with
   no lines; "rule" = a titled top rule ("+-- 01 · lumen --+"); "box" =
   the full "+---+ | | +---+" frame. */
type BoxFrame = "box" | "rule" | "none";
const BOX_FRAME: BoxFrame = "none";

function Box({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  const caption = `${id} ${title}`;

  if (BOX_FRAME === "none") {
    return (
      <div>
        {/* dim id, bright name -- the title anchors each project now
            that there are no lines separating them. */}
        <div>
          <span className="text-fg-dim">{id}</span> {title}
        </div>
        <div className="pt-3">{children}</div>
      </div>
    );
  }

  if (BOX_FRAME === "rule") {
    return (
      <div className="w-[38ch] shrink-0">
        <div className="whitespace-pre leading-none text-fg-dim">
          {topEdge(caption)}
        </div>
        <div className="w-[38ch] pt-2">{children}</div>
      </div>
    );
  }

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
    <Box id={p.id} title={p.title}>
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
      <p className="mt-1 text-fg-dim [overflow-wrap:anywhere]">
        {p.stack.join(" · ")}
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

      {/* project list -- fluid responsive grid: 1 col on mobile, 2 on
          small screens, 3 on large */}
      <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectBox key={p.id} p={p} />
        ))}
      </div>

      {/* footer of contact links */}
      <div className="mt-12 flex flex-wrap gap-x-6 gap-y-2 text-fg-dim">
        {profile.links.map((l) => (
          <span key={l.href} className="whitespace-nowrap">
            <span className="text-fg-dim">{l.label} </span>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="underline [overflow-wrap:anywhere]"
            >
              {l.text.replace(/^mailto:/, "")}
            </a>
          </span>
        ))}
      </div>
    </main>
  );
}
