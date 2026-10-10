import { ImageResponse } from "next/og";

export const alt = "Gangwar Medical Store — Genuine medicines and healthcare essentials";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 52%, #e0f2fe 100%)", color: "#0f172a", display: "flex", flexDirection: "column", height: "100%", justifyContent: "center", padding: "72px", width: "100%" }}>
        <div style={{ color: "#0f9d58", display: "flex", fontSize: 28, fontWeight: 700, letterSpacing: 3 }}>YOUR LOCAL PHARMACY</div>
        <div style={{ display: "flex", fontSize: 72, fontWeight: 800, letterSpacing: -3, marginTop: 22 }}>Gangwar Medical Store</div>
        <div style={{ color: "#475569", display: "flex", fontSize: 34, marginTop: 26 }}>Genuine medicines and healthcare essentials</div>
        <div style={{ color: "#0f9d58", display: "flex", fontSize: 27, fontWeight: 600, marginTop: 52 }}>Rajghat, Aurangabad, Uttar Pradesh</div>
      </div>
    ),
    size,
  );
}
