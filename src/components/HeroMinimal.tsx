"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import ThreePercent from "./ThreePercent";

export default function HeroMinimal() {
  return (
    <section style={{ background: "#FAFBFC", padding: "80px 40px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative" }}>
        {/* Top Badge */}
        <div
          style={{
            position: "absolute",
            top: -18,
            left: 20,
            background: "#fff",
            border: "1px solid #0066FF",
            color: "#0B2545",
            padding: "8px 14px",
            borderRadius: 999,
            display: "inline-flex",
            alignItems: "center",
            gap: 10,
            boxShadow: "0 6px 18px rgba(10,20,40,0.04)",
            fontSize: 13,
            fontWeight: 600,
          }}
        >
          <div
            aria-hidden
            style={{
              width: 18,
              height: 18,
              borderRadius: 4,
              background: "linear-gradient(135deg,#0066FF,#4C9FFF)",
              display: "inline-block",
            }}
          />
          <span>Learning Reimagined For The Future</span>
        </div>

        <div style={{ display: "flex", gap: 40, alignItems: "center" }}>
          {/* Left column */}
          <div style={{ flex: "0 0 55%", maxWidth: "55%" }}>
            <h1 style={{ fontFamily: "Inter, Poppins, system-ui, sans-serif", fontSize: 72, lineHeight: 1.02, margin: 0, color: "#07102A", fontWeight: 600 }}>
              <span style={{ display: "block" }}>Learning</span>
              <span style={{ display: "block" }}>
                Made <span style={{ background: "#0066FF", color: "white", padding: "6px 10px", borderRadius: 8 }}>Easy</span>
              </span>
            </h1>

            <p style={{ marginTop: 20, fontSize: 18, color: "#6B7280", lineHeight: 1.8, maxWidth: 560 }}>
              We make modern learning accessible — interactive programs, expert mentors, and measurable outcomes to help you grow skills faster and with confidence.
            </p>

            <button
              style={{
                marginTop: 28,
                background: "#0066FF",
                color: "#fff",
                border: "none",
                padding: "12px 20px",
                borderRadius: 12,
                fontSize: 16,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Explore Programs
            </button>
          </div>

          {/* Right column */}
          <div style={{ flex: "0 0 45%", maxWidth: "45%", height: 420 }}>
            <Canvas shadows camera={{ position: [0, 0, 15], fov: 45 }} style={{ width: "100%", height: "100%" }}>
              <Suspense fallback={null}>
                <ThreePercent size={0.9} />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
}
