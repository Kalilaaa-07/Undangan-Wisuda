"use client";

import Image from "next/image";

import {
  Check,
  Sparkles,
} from "lucide-react";

import BottomNav from "@/components/BottonNav"

export default function ThanksPage() {
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
          className="absolute left-1/2 top-20 z-[1] h-80 w-80 -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,0,0.18) 0%, transparent 70%)",
          }}
        />

        {/* ===== SPARKLES ===== */}
        <div className="absolute left-10 top-24 h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

        <div className="absolute right-10 top-40 h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

        <div className="absolute bottom-40 left-16 h-1 w-1 rounded-full bg-yellow-300 shadow-[0_0_15px_gold]" />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center px-4 pt-14 text-center">

          {/* ===== HEADER ===== */}
          <div>

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
              className="mt-5 text-white"
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
              Thank
              <br />
              You
            </h1>

            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Hormat Kami
              <br />
              Yang Mengundang
            </p>

            <Divider />
          </div>

          {/* ===== CARD ===== */}
          <div
            className="relative mt-8 w-full max-w-sm overflow-hidden rounded-[32px] border border-yellow-300/20 p-8 backdrop-blur-xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
              boxShadow:
                "0 0 40px rgba(0,0,0,0.2)",
            }}
          >

            {/* GLOW */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-yellow-300/5 blur-3xl" />

            {/* CHECK ICON */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-yellow-300/30 bg-yellow-300/10">

              <Check
                size={30}
                className="text-yellow-300"
              />

            </div>

            {/* LOGO */}
            <div className="mt-8">

              <Image
                src="/telkom.png"
                alt="SMK Telkom"
                width={110}
                height={110}
                className="mx-auto object-contain"
              />

            </div>

            {/* TITLE */}
            <h2
              className="mt-7 text-white"
              style={{
                fontFamily:
                  "'Playfair Display', serif",
                fontSize:
                  "clamp(34px, 7vw, 52px)",
                lineHeight: 1.1,
              }}
            >
              SMK Telkom
              <br />
              Malang
            </h2>

            {/* SUBTITLE */}
            <p className="mt-5 text-sm leading-7 text-white/65">
              Wisuda Angkatan XXXII
              <br />
              LUMINEX 2026
            </p>

            {/* BUTTON */}
            <button className="mt-8 inline-flex items-center gap-3 rounded-full border border-yellow-300/30 bg-yellow-300 px-6 py-3 text-sm font-bold text-[#071f3d] shadow-2xl transition active:scale-95">

              <Sparkles size={18} />

              Sampai Jumpa

            </button>

          </div>

          {/* ===== SPARKLES ===== */}
          <div className="mt-12 flex justify-center gap-4">

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

/* ===== DIVIDER ===== */
function Divider() {
  return (
    <div className="my-7 flex items-center justify-center gap-3">

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