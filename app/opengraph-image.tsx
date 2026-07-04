import { ImageResponse } from "next/og";
import { profile } from "./lib/content";

/* Generated social card: a black terminal window, monochrome to match
   the site. Shared links (X, Slack, iMessage) pull this instead of a
   blank rectangle. */

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const FG = "#ffffff";
const MUTE = "#b3b3b3";
const DIM = "#6e6e6e";
const FAINT = "#3a3a3a";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#000000",
          color: FG,
          fontFamily: "monospace",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
        }}
      >
        {/* terminal title bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 20,
              background: FAINT,
              display: "flex",
            }}
          />
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 20,
              background: DIM,
              display: "flex",
            }}
          />
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 20,
              background: MUTE,
              display: "flex",
            }}
          />
          <div style={{ marginLeft: 18, color: DIM, fontSize: 26 }}>
            {`~/${profile.handle} — zsh`}
          </div>
        </div>

        {/* name */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 116, lineHeight: 1.05, color: FG }}>
            EDEN FOX
          </div>
          <div style={{ fontSize: 116, lineHeight: 1.05, color: FG }}>
            PHILLIPS
          </div>
          <div style={{ marginTop: 28, fontSize: 34, color: MUTE }}>
            {`> ${profile.role}`}
          </div>
        </div>

        {/* prompt footer */}
        <div style={{ display: "flex", alignItems: "center", fontSize: 28 }}>
          <span style={{ color: FG }}>{profile.handle}</span>
          <span style={{ color: DIM, margin: "0 14px" }}>$</span>
          <span style={{ color: MUTE }}>whoami</span>
          <span
            style={{
              width: 18,
              height: 30,
              marginLeft: 14,
              background: FG,
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    size
  );
}
