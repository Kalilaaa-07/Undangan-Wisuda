"use client";

import Link from "next/link";
import Image from "next/image";

import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#071f3d] px-6">

      {/* ===== BACKGROUND ===== */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, #1450a8 0%, #0c3c78 45%, #071f3d 100%)",
        }}
      />

      {/* ===== GLOW ===== */}
      <div
        className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,215,0,0.12) 0%, transparent 70%)",
        }}
      />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 flex w-full max-w-md flex-col items-center text-center">

        {/* LABEL */}
        <p
          className="text-[10px] text-yellow-300/70"
          style={{
            letterSpacing: "0.45em",
            fontFamily: "serif",
          }}
        >
          ✦ UNDANGAN ✦
        </p>

        {/* TITLE */}
        <h1
          className="mt-5 text-white"
          style={{
            fontFamily:
              "'Playfair Display', serif",
            fontSize:
              "clamp(64px, 11vw, 100px)",
            fontWeight: 900,
            lineHeight: 0.9,
            textShadow:
              "0 0 35px rgba(255,255,255,0.15)",
          }}
        >
          Wisuda
        </h1>

        {/* SUBTITLE */}
        <h2 className="mt-5 text-[28px] font-semibold text-white">
          SMK TELKOM MALANG
        </h2>

        <p className="mt-2 text-white/60">
          Angkatan 32
        </p>

        {/* BADGE */}
        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-yellow-300/30 bg-yellow-300/10 px-6 py-3 text-xs tracking-[0.35em] text-yellow-300">

          ✦ LUMINEX ✦

        </div>

        {/* MASKOT */}
        <div className="relative mt-10 flex justify-center">

          {/* GLOW */}
          <div
            className="absolute h-36 w-36 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(255,215,0,0.28) 0%, transparent 70%)",
            }}
          />

          <Image
            src="/lumi1.png"
            alt="Lumi"
            width={160}
            height={160}
            className="relative animate-float object-contain drop-shadow-[0_0_25px_rgba(255,215,0,0.35)]"
          />

        </div>

        {/* TEXT */}
        <p className="mt-10 max-w-sm text-sm leading-8 text-white/65">
          Dengan hormat, kami mengundang
          Anda untuk menghadiri acara
          wisuda sebagai bentuk perayaan
          atas pencapaian generasi terbaik
          kami.
        </p>

        {/* BUTTON */}
        <Link
          href="/Undangan/opening"
          className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-full bg-yellow-300 px-6 py-4 text-sm font-bold text-[#071f3d] shadow-[0_0_30px_rgba(255,215,0,0.25)] transition active:scale-95"
        >

          <Sparkles size={18} />

          Buka Undangan

        </Link>

        {/* ORNAMENT */}
        <div className="mt-10 flex justify-center gap-5">

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

        {/* FOOTER */}
        <p
          className="mt-8 text-[10px] text-yellow-300/55"
          style={{
            letterSpacing: "0.4em",
          }}
        >
          LUMINEX · ANGKATAN 32
        </p>

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
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}