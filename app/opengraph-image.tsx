import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Kidus Yared – Mobile Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0f0e0d",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(232,197,71,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(232,197,71,0.12) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            opacity: 0.4,
          }}
        />
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "350px",
            background: "radial-gradient(ellipse, rgba(232,197,71,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "14px", zIndex: 10 }}>
          <div style={{ fontSize: "16px", color: "#e8c547", fontWeight: 600, letterSpacing: "5px", textTransform: "uppercase" }}>
            Mobile Software Engineer
          </div>
          <div style={{ fontSize: "82px", fontWeight: 900, color: "#f2ede8", letterSpacing: "-3px", lineHeight: 1 }}>
            Kidus Yared
          </div>
          <div style={{ fontSize: "20px", color: "#8a8070", marginTop: "6px", textAlign: "center", maxWidth: "680px" }}>
            React Native · Node.js · FinTech · Full-Stack
          </div>
          <div style={{ display: "flex", gap: "12px", marginTop: "28px" }}>
            {["CBE SuperApp", "Dashen Bank", "EtSwitch Portal"].map((b) => (
              <div
                key={b}
                style={{
                  padding: "8px 20px",
                  borderRadius: "999px",
                  background: "rgba(232,197,71,0.1)",
                  border: "1px solid rgba(232,197,71,0.3)",
                  color: "#e8c547",
                  fontSize: "15px",
                  fontWeight: 600,
                }}
              >
                {b}
              </div>
            ))}
          </div>
          <div style={{ fontSize: "15px", color: "#e8c547", marginTop: "22px", opacity: 0.7 }}>
            dev-kidus.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
