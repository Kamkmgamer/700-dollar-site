import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1a0f0a 0%, #4a2c17 50%, #8B4513 100%)",
          borderRadius: "50%",
          boxShadow: "0 4px 15px rgba(139,69,19,0.5)",
          border: "3px solid #DAA520",
          position: "relative",
        }}
      >
        <div style={{
          position: "absolute",
          width: "90%",
          height: "90%",
          borderRadius: "50%",
          border: "1px solid rgba(218,165,32,0.3)",
        }} />
        <span style={{ fontSize: 18, filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.5))" }}>🍕</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
