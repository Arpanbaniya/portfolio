import { ImageResponse } from "next/og";
export const alt =
  "Arpan Baniya — Learning by building. Computer Engineering, Nepal.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#191b19",
        color: "#ecece2",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: "60px 75px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 20,
          color: "#b4b9aa",
        }}
      >
        <span>ARPAN BANIYA</span>
        <span>COMPUTER ENGINEERING / NEPAL</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 75,
          fontSize: 100,
          lineHeight: 1.02,
          letterSpacing: -6,
        }}
      >
        <span>I make things work.</span>
        <span style={{ color: "#d3dfaa" }}>Then make them better.</span>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "auto",
          paddingTop: 25,
          borderTop: "1px solid #444a3c",
          fontSize: 22,
          color: "#b4b9aa",
        }}
      >
        Software, systems & things in progress.
      </div>
    </div>,
    size,
  );
}
