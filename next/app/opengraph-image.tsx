import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Ali Lenjani — Senior ML";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: "#020617",
          color: "#f8fafc",
          fontFamily: "Newsreader, serif",
        }}
      >
        <div
          style={{
            fontSize: 22,
            fontFamily: "JetBrains Mono, monospace",
            letterSpacing: 4,
            color: "#fbbf24",
            textTransform: "uppercase",
          }}
        >
          Senior ML · San Francisco Bay Area
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 132, fontWeight: 600, letterSpacing: -4, lineHeight: 1 }}>
            Ali Lenjani
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 32,
              lineHeight: 1.35,
              color: "#cbd5e1",
              fontFamily: "Inter, sans-serif",
              maxWidth: 980,
            }}
          >
            Production ML for ranking, detection, and decisions under real-world constraints.
          </div>
        </div>
        <div
          style={{
            fontSize: 22,
            fontFamily: "JetBrains Mono, monospace",
            letterSpacing: 2,
            color: "#94a3b8",
            display: "flex",
            gap: 32,
          }}
        >
          <span>Stanford</span>
          <span>·</span>
          <span>NASA</span>
          <span>·</span>
          <span>Purdue · RETHi</span>
        </div>
      </div>
    ),
    size,
  );
}
