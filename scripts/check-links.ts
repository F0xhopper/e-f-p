import { profile, projects } from "../app/lib/content.ts";

type Row = { where: string; href: string; status: string; ok: boolean };

const TIMEOUT_MS = 15_000;

async function probe(href: string): Promise<{ status: string; ok: boolean }> {
  if (href.startsWith("mailto:")) {
    const ok = /^mailto:[^@\s]+@[^@\s.]+\.[^@\s]+$/.test(href);
    return { status: ok ? "mailto" : "malformed", ok };
  }
  try {
    const res = await fetch(href, {
      redirect: "follow",
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: {
        "user-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36",
      },
    });
    const ok =
      (res.status >= 200 && res.status < 400) ||
      (res.status === 999 && new URL(href).hostname.endsWith("linkedin.com"));
    return { status: String(res.status), ok };
  } catch (err) {
    return { status: err instanceof Error ? err.name : "error", ok: false };
  }
}

const targets: { where: string; href: string }[] = [
  ...profile.links.map((l) => ({ where: `profile/${l.label}`, href: l.href })),
  ...projects.flatMap((p) =>
    (p.links ?? []).map((l) => ({ where: `${p.title}/${l.label}`, href: l.href }))
  ),
];

const rows: Row[] = await Promise.all(
  targets.map(async (t) => ({ ...t, ...(await probe(t.href)) }))
);

const unlinked = projects.filter((p) => !p.links || p.links.length === 0);

const wWhere = Math.max(...rows.map((r) => r.where.length));
for (const r of rows) {
  const mark = r.ok ? "ok  " : "FAIL";
  console.log(
    `${mark} ${r.status.padEnd(9)} ${r.where.padEnd(wWhere)}  ${r.href}`
  );
}

const broken = rows.filter((r) => !r.ok);

if (unlinked.length > 0) {
  console.log("");
  for (const p of unlinked) {
    console.log(`FAIL no-link   ${p.title}  (no live site and no repo)`);
  }
}

console.log(
  `\n${rows.length - broken.length}/${rows.length} links ok` +
    (unlinked.length > 0 ? `, ${unlinked.length} project(s) with no link` : "")
);

if (broken.length > 0 || unlinked.length > 0) process.exit(1);
