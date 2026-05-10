import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Personalization & recommender systems — Ali Lenjani";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background:
            "linear-gradient(135deg, #020617 0%, #0f172a 40%, #1e293b 100%)",
          fontFamily: "Newsreader, serif",
        }}
      >
        {/* Inline two-tower-style diagram on the right */}
        <svg
          width="600"
          height="630"
          viewBox="0 0 600 630"
          style={{ position: "absolute", right: 0, top: 0, opacity: 0.32 }}
        >
          <g stroke="#fbbf24" strokeWidth="1.5" fill="none" strokeLinecap="round">
            <rect x="80" y="180" width="160" height="60" rx="8" />
            <rect x="80" y="360" width="160" height="60" rx="8" />
            <rect x="380" y="270" width="170" height="60" rx="8" fill="#fbbf24" fillOpacity="0.45" stroke="none" />
            <line x1="240" y1="210" x2="380" y2="290" strokeDasharray="4 4" />
            <line x1="240" y1="390" x2="380" y2="310" strokeDasharray="4 4" />
          </g>
        </svg>

        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: 80,
            color: "#f8fafc",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 22,
              letterSpacing: 4,
              color: "#fbbf24",
              textTransform: "uppercase",
            }}
          >
            <span style={{ display: "flex" }}>Pillar III</span>
            <span style={{ display: "flex", opacity: 0.5 }}>·</span>
            <span style={{ display: "flex" }}>Ali Lenjani</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontSize: 96,
                fontWeight: 600,
                letterSpacing: -3,
                lineHeight: 1.02,
                maxWidth: 1040,
              }}
            >
              Personalization &amp; recommender systems
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 24,
                fontSize: 26,
                lineHeight: 1.4,
                color: "#cbd5e1",
                fontFamily: "Inter, sans-serif",
                maxWidth: 980,
              }}
            >
              Production ranking and retrieval, plus the evaluation discipline that comes with it.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
