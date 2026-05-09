"use client";

import Image from "next/image";
import { Check, Sparkles } from "lucide-react";

export default function ThanksPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071f3d] text-white">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, #1450a8 0%, #0c3c78 40%, #071f3d 100%)",
        }}
      />

      {/* GLOW */}
      <div className="absolute left-1/2 top-0 h-[350px] w-[350px] -translate-x-1/2 rounded-full bg-yellow-300/10 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl" />

      {/* FLOATING LIGHTS */}
      <div className="absolute left-8 top-24 h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

      <div className="absolute right-10 top-40 h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

      <div className="absolute bottom-32 left-10 h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-5 py-12 text-center">

        {/* TOP BADGE */}
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300/20 bg-yellow-300/10 px-5 py-2 backdrop-blur-md">

          <Sparkles
            size={14}
            className="text-yellow-300"
          />

          <p className="text-[10px] tracking-[0.35em] text-yellow-300/80 md:text-xs">
            LUMINEX · ANGKATAN 32
          </p>

        </div>

        {/* TITLE */}
        <h1
          className="text-white"
          style={{
            fontFamily:
              "'Playfair Display', serif",
            fontSize:
              "clamp(56px, 11vw, 100px)",
            fontWeight: 900,
            lineHeight: 0.95,
            textShadow:
              "0 0 35px rgba(255,255,255,0.15)",
          }}
        >
          Thank
          <br />
          You
        </h1>

        {/* SUBTITLE */}
        <p className="mt-5 max-w-md text-sm leading-7 text-white/70 md:text-base">
          Terima kasih atas kehadiran,
          doa, dan dukungannya dalam
          perjalanan kami.
        </p>

        {/* DIVIDER */}
        <div className="my-8 flex items-center gap-3">

          <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-300/70" />

          <span className="text-yellow-300">
            ◆
          </span>

          <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-300/70" />

        </div>

        {/* MAIN CARD */}
        <div
          className="relative w-full max-w-5xl overflow-hidden rounded-[36px] border border-yellow-300/20 backdrop-blur-xl"
          style={{
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
            boxShadow:
              "0 0 50px rgba(0,0,0,0.25)",
          }}
        >

          {/* CARD GLOW */}
          <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-yellow-300/10 blur-3xl" />

          <div className="grid lg:grid-cols-2">

            {/* FOTO */}
            <div className="relative min-h-[420px] overflow-hidden">

              <Image
                src="/angkatan.png"
                alt="Foto Angkatan"
                fill
                priority
                className="object-cover"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#071f3d]/90 via-[#071f3d]/20 to-transparent" />

              {/* BADGE */}
              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/20 px-4 py-2 backdrop-blur-md">

                <p className="text-[10px] tracking-[0.35em] text-white/90">
                  SMK TELKOM MALANG
                </p>

              </div>

              {/* BOTTOM TAG */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur-md">

                <p className="text-sm text-white/90">
                  LUMINEX 2026
                </p>

              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-col justify-center px-6 py-10 text-center lg:px-10 lg:text-left">

              {/* CHECK ICON */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-yellow-300/30 bg-yellow-300/10 lg:mx-0">

                <Check
                  size={30}
                  className="text-yellow-300"
                />

              </div>

              {/* TITLE */}
              <h2
                className="mt-8 text-white"
                style={{
                  fontFamily:
                    "'Playfair Display', serif",
                  fontSize:
                    "clamp(38px, 8vw, 64px)",
                  lineHeight: 1,
                }}
              >
                Graduation
                <br />
                Ceremony
              </h2>

              {/* TEXT */}
              <p className="mt-6 text-sm leading-8 text-white/70 md:text-base">
                Wisuda Angkatan XXXII
                <br />
                LUMINEX 2026
                <br />
                SMK Telkom Malang
              </p>

              {/* QUOTE */}
              <div className="mt-8 rounded-[24px] border border-white/10 bg-white/5 p-5 backdrop-blur-md">

                <p className="text-sm italic leading-7 text-white/70">
                  “Every ending is the beginning
                  of a new journey.”
                </p>

              </div>

              {/* BUTTONS */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <button className="inline-flex items-center justify-center gap-3 rounded-full bg-yellow-300 px-7 py-4 text-sm font-bold text-[#071f3d] shadow-[0_0_30px_rgba(255,215,0,0.25)] transition duration-300 hover:scale-[1.02] active:scale-95">

                  <Sparkles size={18} />

                  Sampai Jumpa

                </button>

                <button className="rounded-full border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white/80 backdrop-blur-md transition hover:bg-white/10">
                  Angkatan 32
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* ORNAMENT */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">

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
        <p className="mt-10 text-xs tracking-[0.35em] text-yellow-300/60">
          LUMINEX · SEE YOU SOON
        </p>

      </div>

      {/* STYLE */}
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
  );
}