"use client";

import Image from "next/image";

import {
  Check,
  Sparkles,
} from "lucide-react";

import BottomNav from "@/components/BottonNav";

export default function ThanksPage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#071f3d] pb-36 text-white">

        {/* ===== BACKGROUND ===== */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, #1450a8 0%, #0c3c78 45%, #071f3d 100%)",
          }}
        />

        {/* ===== MAIN GLOW ===== */}
        <div
          className="absolute left-1/2 top-20 z-[1] h-72 w-72 -translate-x-1/2 rounded-full blur-3xl md:h-96 md:w-96"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,0,0.16) 0%, transparent 70%)",
          }}
        />

        {/* ===== FLOATING LIGHTS ===== */}
        <div className="absolute left-6 top-20 h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

        <div className="absolute right-6 top-40 h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

        <div className="absolute bottom-52 left-10 h-1.5 w-1.5 rounded-full bg-yellow-300 shadow-[0_0_15px_gold]" />

        <div className="absolute bottom-40 right-10 h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

        {/* ===== LEFT ORNAMENT ===== */}
        <div className="absolute left-2 top-[320px] z-[1] hidden rotate-[-12deg] opacity-70 lg:block">

          <div className="rounded-[28px] border border-yellow-300/20 bg-white/5 px-5 py-4 backdrop-blur-md">

            <p className="text-[10px] tracking-[0.35em] text-yellow-300/70">
              LUMINEX
            </p>

            <div className="mt-3 h-px w-16 bg-yellow-300/40" />

            <p className="mt-3 text-xs leading-5 text-white/60">
              Graduation
              <br />
              Ceremony
            </p>

          </div>

        </div>

        {/* ===== RIGHT ORNAMENT ===== */}
        <div className="absolute right-4 top-[520px] z-[1] hidden rotate-[10deg] opacity-80 lg:block">

          <div className="rounded-full border border-yellow-300/25 bg-yellow-300/10 p-5 backdrop-blur-md shadow-[0_0_30px_rgba(255,215,0,0.15)]">

            <Sparkles
              size={28}
              className="text-yellow-300"
            />

          </div>

        </div>

        {/* ===== EXTRA GLOW ===== */}
        <div className="absolute bottom-32 right-10 hidden h-32 w-32 rounded-full bg-yellow-300/10 blur-3xl md:block" />

        <div className="absolute left-0 top-[65%] hidden h-40 w-40 rounded-full bg-blue-400/10 blur-3xl md:block" />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 mx-auto flex max-w-lg flex-col items-center px-5 pt-14 text-center">

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
                  "clamp(52px, 13vw, 88px)",
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
            className="relative mt-8 w-full max-w-sm overflow-hidden rounded-[32px] border border-yellow-300/20 p-7 backdrop-blur-xl md:p-8"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
              boxShadow:
                "0 0 40px rgba(0,0,0,0.2)",
            }}
          >

            {/* ===== CARD GLOW ===== */}
            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-yellow-300/5 blur-3xl" />

            {/* ===== CHECK ICON ===== */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-yellow-300/30 bg-yellow-300/10">

              <Check
                size={30}
                className="text-yellow-300"
              />

            </div>

            {/* ===== LOGO ===== */}
            <div className="mt-8">

              <Image
                src="/telkom.png"
                alt="SMK Telkom"
                width={110}
                height={110}
                className="mx-auto object-contain"
              />

            </div>

            {/* ===== TITLE ===== */}
            <h2
              className="mt-7 text-white"
              style={{
                fontFamily:
                  "'Playfair Display', serif",
                fontSize:
                  "clamp(34px, 8vw, 52px)",
                lineHeight: 1.1,
              }}
            >
              SMK Telkom
              <br />
              Malang
            </h2>

            {/* ===== SUBTITLE ===== */}
            <p className="mt-5 text-sm leading-7 text-white/65">
              Wisuda Angkatan XXXII
              <br />
              LUMINEX 2026
            </p>

            {/* ===== BUTTON ===== */}
            <button className="mt-8 inline-flex items-center gap-3 rounded-full border border-yellow-300/30 bg-yellow-300 px-6 py-3 text-sm font-bold text-[#071f3d] shadow-2xl transition active:scale-95">

              <Sparkles size={18} />

              Sampai Jumpa

            </button>

          </div>

          {/* ===== BOTTOM ORNAMENTS ===== */}
          <div className="relative mt-14 w-full max-w-5xl">

            {/* LEFT */}
            <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 items-center gap-3 opacity-70 md:flex">

              <div className="h-px w-24 bg-gradient-to-r from-transparent to-yellow-300/70" />

              <div className="h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_15px_gold]" />

            </div>

            {/* RIGHT */}
            <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 items-center gap-3 opacity-70 md:flex">

              <div className="h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_15px_gold]" />

              <div className="h-px w-24 bg-gradient-to-l from-transparent to-yellow-300/70" />

            </div>

            {/* CENTER BADGE */}
            <div className="mx-auto w-fit rounded-full border border-yellow-300/20 bg-white/5 px-6 py-2 backdrop-blur-md">

              <p className="text-[10px] tracking-[0.35em] text-yellow-300/70">
                SEE YOU SOON
              </p>

            </div>

          </div>

          {/* ===== MODERN BOTTOM DECOR ===== */}

          {/* LEFT GLOW LINE */}
          <div className="pointer-events-none absolute bottom-28 left-0 hidden w-[340px] lg:block">

            <div className="relative h-[160px]">

              <div className="absolute bottom-0 left-[-60px] h-[2px] w-[340px] rotate-[12deg] rounded-full bg-gradient-to-r from-transparent via-yellow-300/60 to-transparent blur-[1px]" />

              <div className="absolute bottom-8 left-[-20px] h-[1px] w-[280px] rotate-[18deg] rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent" />

              <div className="absolute bottom-16 left-10 h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

            </div>

          </div>

          {/* RIGHT GLOW LINE */}
          <div className="pointer-events-none absolute bottom-28 right-0 hidden w-[340px] lg:block">

            <div className="relative h-[160px]">

              <div className="absolute bottom-0 right-[-60px] h-[2px] w-[340px] rotate-[-12deg] rounded-full bg-gradient-to-l from-transparent via-yellow-300/60 to-transparent blur-[1px]" />

              <div className="absolute bottom-8 right-[-20px] h-[1px] w-[280px] rotate-[-18deg] rounded-full bg-gradient-to-l from-transparent via-white/40 to-transparent" />

              <div className="absolute bottom-16 right-10 h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

            </div>

          </div>

          {/* ===== QUOTE ===== */}
          <div className="mt-10 text-center">

            <p className="text-sm italic leading-7 text-white/55">
              “Terima kasih atas kehadiran
              <br />
              dan dukungannya.”
            </p>

          </div>

          {/* ===== SPARKLES ===== */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">

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
    <div className="my-7 flex items-center justify-center gap-3">

      <div
        className="h-px w-16 md:w-20"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,215,0,0.7))",
        }}
      />

      <span className="text-xs text-yellow-400">
        ◆
      </span>

      <div
        className="h-px w-16 md:w-20"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(255,215,0,0.7))",
        }}
      />

    </div>
  );
}