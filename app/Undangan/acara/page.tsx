"use client";

import { useEffect, useState } from "react";

import {
  MapPin,
  Shirt,
  Sparkles,
} from "lucide-react";

import BottomNav from "@/components/BottonNav"

export default function AcaraPage() {
  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  useEffect(() => {
    const targetDate = new Date(
      "2026-06-11T08:00:00"
    ).getTime();

    const interval = setInterval(() => {
      const distance = targetDate - Date.now();

      if (distance < 0) {
        clearInterval(interval);

        setTimeLeft({
          hari: 0,
          jam: 0,
          menit: 0,
          detik: 0,
        });

        return;
      }

      setTimeLeft({
        hari: Math.floor(
          distance / (1000 * 60 * 60 * 24)
        ),

        jam: Math.floor(
          (distance / (1000 * 60 * 60)) % 24
        ),

        menit: Math.floor(
          (distance / (1000 * 60)) % 60
        ),

        detik: Math.floor(
          (distance / 1000) % 60
        ),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#071f3d] pb-32 text-white">

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
          className="absolute left-1/2 top-24 z-[1] h-80 w-80 -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,0,0.18) 0%, transparent 70%)",
          }}
        />

        {/* ===== SPARKLES ===== */}
        <div className="absolute left-10 top-28 h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

        <div className="absolute right-10 top-40 h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

        <div className="absolute bottom-52 left-16 h-1 w-1 rounded-full bg-yellow-300 shadow-[0_0_15px_gold]" />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 mx-auto max-w-lg px-4 pt-10">

          {/* ===== HEADER ===== */}
          <div className="text-center">

            <p
              className="text-[10px] text-yellow-300/70"
              style={{
                letterSpacing: "0.45em",
                fontFamily: "serif",
              }}
            >
              ✦ LUMINEX · ANGKATAN 32 ✦
            </p>

            <h1
              className="mt-4 text-white"
              style={{
                fontFamily:
                  "'Playfair Display', serif",
                fontSize:
                  "clamp(52px, 10vw, 88px)",
                fontWeight: 900,
                lineHeight: 0.95,
                textShadow:
                  "0 0 30px rgba(255,255,255,0.18)",
              }}
            >
              Info
              <br />
              Acara
            </h1>

            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Kamis, 11 Juni 2026
              <br />
              Pukul 08.00 WIB
            </p>

            <Divider />
          </div>

          {/* ===== COUNTDOWN ===== */}
          <div className="mt-10">

            <p
              className="mb-5 text-center text-[10px] text-yellow-300/80"
              style={{
                letterSpacing: "0.35em",
              }}
            >
              MENUJU HARI H
            </p>

            <div className="grid grid-cols-4 gap-3">

              {[
                {
                  label: "Hari",
                  value: timeLeft.hari,
                },
                {
                  label: "Jam",
                  value: timeLeft.jam,
                },
                {
                  label: "Menit",
                  value: timeLeft.menit,
                },
                {
                  label: "Detik",
                  value: timeLeft.detik,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-[24px] border border-yellow-300/20 bg-white/5 py-5 text-center backdrop-blur-xl"
                  style={{
                    boxShadow:
                      "0 0 25px rgba(255,215,0,0.06)",
                  }}
                >

                  <h2 className="text-3xl font-bold text-yellow-300">
                    {String(item.value).padStart(
                      2,
                      "0"
                    )}
                  </h2>

                  <p className="mt-2 text-xs text-white/70">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* ===== CARDS ===== */}
          <div className="mt-10 flex flex-col gap-6">

            {/* ===== LOCATION ===== */}
            <div
              className="overflow-hidden rounded-[30px] border border-yellow-300/20 p-6 backdrop-blur-xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                boxShadow:
                  "0 0 40px rgba(0,0,0,0.2)",
              }}
            >

              <div className="flex items-start gap-4">

                {/* ICON */}
                <div className="flex h-16 w-16 min-w-[64px] items-center justify-center rounded-full border border-yellow-300/20 bg-yellow-300/10">

                  <MapPin
                    size={28}
                    className="text-yellow-300"
                  />

                </div>

                {/* TEXT */}
                <div className="flex-1">

                  <p
                    className="text-[10px] text-yellow-300/80"
                    style={{
                      letterSpacing: "0.3em",
                    }}
                  >
                    LOKASI
                  </p>

                  <h2
                    className="mt-2 text-white"
                    style={{
                      fontFamily:
                        "'Playfair Display', serif",
                      fontSize:
                        "clamp(28px, 5vw, 40px)",
                      lineHeight: 1.1,
                    }}
                  >
                    Graha
                    <br />
                    Cakrawala UM
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-white/70">
                    Universitas Negeri
                    Malang,
                    <br />
                    Jl. Cakrawala,
                    Sumbersari,
                    Lowokwaru,
                    <br />
                    Kota Malang
                  </p>

                  <a
                    href="https://maps.app.goo.gl/6KkrjWt3PZj8j6dL8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-3 rounded-full border border-yellow-300/30 bg-yellow-300 px-5 py-3 text-sm font-bold text-[#071f3d] shadow-2xl transition active:scale-95"
                  >

                    <Sparkles size={16} />

                    Buka Google Maps

                  </a>

                </div>

              </div>

            </div>

            {/* ===== DRESSCODE ===== */}
            <div
              className="overflow-hidden rounded-[30px] border border-yellow-300/20 p-6 backdrop-blur-xl"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                boxShadow:
                  "0 0 40px rgba(0,0,0,0.2)",
              }}
            >

              <div className="flex items-start gap-4">

                {/* ICON */}
                <div className="flex h-16 w-16 min-w-[64px] items-center justify-center rounded-full border border-yellow-300/20 bg-yellow-300/10">

                  <Shirt
                    size={28}
                    className="text-yellow-300"
                  />

                </div>

                {/* TEXT */}
                <div className="flex-1">

                  <p
                    className="text-[10px] text-yellow-300/80"
                    style={{
                      letterSpacing: "0.3em",
                    }}
                  >
                    DRESSCODE
                  </p>

                  <h2
                    className="mt-2 text-white"
                    style={{
                      fontFamily:
                        "'Playfair Display', serif",
                      fontSize:
                        "clamp(28px, 5vw, 40px)",
                      lineHeight: 1.1,
                    }}
                  >
                    Bebas
                    <br />
                    Rapi
                  </h2>

                  <p className="mt-4 text-sm leading-7 text-white/70">
                    Harap berpakaian sopan,
                    rapi, dan nyaman selama
                    acara berlangsung.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* ===== BOTTOM ORNAMENT ===== */}
          <div className="mt-14 flex justify-center gap-4">

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