import { ImageResponse } from "next/og";
import fs from "node:fs/promises";
import path from "node:path";

export const dynamic = "force-static";
export const alt = "Visual inspection in the wild — Ali Lenjani";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  const imgPath = path.join(process.cwd(), "public/figures/fusion-pipeline.jpg");
  const buf = await fs.readFile(imgPath);
  const dataUrl = `data:image/jpeg;base64,${buf.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "#020617",
          fontFamily: "Newsreader, serif",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={dataUrl}
          alt=""
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.42,
            filter: "saturate(0.9)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(2,6,23,0.85) 0%, rgba(2,6,23,0.6) 50%, rgba(2,6,23,0.9) 100%)",
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
            <span style={{ display: "flex" }}>Pillar I</span>
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
              Visual inspection in the wild
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
              Deep-learning systems that inspect, classify, and detect change in real-world imagery.
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
