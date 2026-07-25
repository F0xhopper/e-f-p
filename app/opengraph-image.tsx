import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { BANNER } from "./lib/banner";
import { profile } from "./lib/content";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#000000";
const FG = "#e6e6e6";
const DIM = "#8a8a8a";

export default async function Image() {
  const mono = await readFile(
    join(process.cwd(), "assets/fonts/JetBrainsMono-Regular.ttf")
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: BG,
          color: FG,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px 80px",
        }}
      >
        <div style={{ fontSize: 28, lineHeight: 1.2, whiteSpace: "pre" }}>
          {BANNER}
        </div>
        <div style={{ marginTop: 36, fontSize: 28, color: DIM }}>
          {profile.role}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "JetBrains Mono", data: mono, style: "normal", weight: 400 },
      ],
    }
  );
}
