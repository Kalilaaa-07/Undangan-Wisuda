"use client";

import {
  MapPin,
  Navigation,
} from "lucide-react";

import BottomNav from "@/components/BottonNav";


export default function MapsPage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#071f3d] pb-32">

        {/* ===== BACKGROUND ===== */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, #1450a8 0%, #0c3c78 40%, #071f3d 100%)",
          }}
        />

        {/* ===== GLOW ===== */}
        <div
          className="absolute left-1/2 top-32 z-[1] h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,0,0.18) 0%, transparent 70%)",
          }}
        />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 flex justify-center px-4 pt-8">

          <div className="w-full max-w-md">

            {/* ===== HEADER ===== */}
            <div className="mb-8 text-center">

              <p
                className="mb-3 text-[10px] text-yellow-300/70"
                style={{
                  letterSpacing: "0.45em",
                  fontFamily: "serif",
                }}
              >
                ✦ LOKASI ACARA ✦
              </p>

              <h1
                className="text-white"
                style={{
                  fontFamily:
                    "'Playfair Display', serif",
                  fontSize:
                    "clamp(42px, 8vw, 72px)",
                  fontWeight: 900,
                  lineHeight: 1,
                  textShadow:
                    "0 0 25px rgba(255,255,255,0.18)",
                }}
              >
                Graha
                <br />
                Cakrawala
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Universitas Negeri Malang
              </p>

              <Divider />
            </div>

            {/* ===== CARD ===== */}
            <div
              className="overflow-hidden rounded-[28px] border border-yellow-300/20 p-5 backdrop-blur-xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                boxShadow:
                  "0 0 40px rgba(0,0,0,0.2)",
              }}
            >

              {/* ===== MAP ===== */}
              <div className="overflow-hidden rounded-2xl border border-yellow-300/20">

                <iframe
                  src="https://www.google.com/maps?q=Graha+Cakrawala+Universitas+Negeri+Malang&output=embed"
                  className="h-[280px] w-full"
                  loading="lazy"
                />

              </div>

              {/* ===== ADDRESS ===== */}
              <div className="mt-6 flex flex-col items-center text-center">

                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-yellow-300/30 bg-yellow-300/10">

                  <MapPin
                    size={22}
                    className="text-yellow-300"
                  />

                </div>

                <p className="text-sm leading-relaxed text-white/75">
                  Graha Cakrawala,
                  Universitas Negeri Malang
                  <br />
                  Jl. Semarang No.5,
                  Sumbersari, Lowokwaru
                  <br />
                  Kota Malang, Jawa Timur
                </p>

              </div>

              {/* ===== BUTTON ===== */}
              <a
                href="https://maps.app.goo.gl/rcJPhbsJDxRMGWS7A"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full border border-yellow-300/30 bg-yellow-300 px-6 py-3 text-sm font-bold text-[#071f3d] shadow-2xl transition active:scale-95"
              >

                <Navigation size={18} />

                Buka Google Maps

              </a>

            </div>

            {/* ===== SPARKLES ===== */}
            <div className="mt-10 flex justify-center gap-4">

              {["✦", "✧", "⋆", "✧", "✦"].map(
                (s, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: 18,
                      textShadow:
                        "0 0 10px rgba(255,215,0,0.8)",
                      animation: `float 2.5s ease-in-out ${
                        i * 0.2
                      }s infinite`,
                      color:
                        i % 2 === 1
                          ? "#ffffff"
                          : "#ffd700",
                    }}
                  >
                    {s}
                  </span>
                )
              )}

            </div>

          </div>
        </div>

        {/* ===== STYLE ===== */}
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap");

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-8px);
            }
          }
        `}</style>
      </main>

      <BottomNav />
    </>
  );
}

function Divider() {
  return (
    <div className="my-7 flex w-full items-center justify-center gap-3">

      <div
        className="h-px w-20"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,215,0,0.7))",
        }}
      />

      <span className="text-xs text-yellow-400">
        ◆
      </span>

      <div
        className="h-px w-20"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(255,215,0,0.7))",
        }}
      />

    </div>
  );
}