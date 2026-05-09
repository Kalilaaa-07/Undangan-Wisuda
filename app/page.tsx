"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#071f3d] text-white">

      {/* ===== BACKGROUND ===== */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at top, #1450a8 0%, #0c3c78 45%, #071f3d 100%)",
        }}
      />

      {/* ===== GLOW ===== */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-yellow-300/10 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-yellow-300/10 blur-3xl" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-5 py-10">

        {/* ===== TOP TEXT ===== */}
        <div className="mb-10 flex flex-col items-center">

          {/* TELKOM LOGO */}
          <Image
            src="/Telkom.png"
            alt="Telkom"
            width={90}
            height={90}
            className="h-auto w-[90px] object-contain drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            priority
          />

          {/* AESTHETIC LABEL */}
          <div className="mt-5 rounded-full border border-yellow-300/20 bg-yellow-300/10 px-6 py-2 backdrop-blur-md">

            <p className="text-[10px] tracking-[0.45em] text-yellow-300/80 md:text-xs">
              ✦ CELEBRATION OF MEMORIES ✦
            </p>

          </div>

        </div>

        {/* ===== HERO ===== */}
        <div className="grid w-full items-center gap-14 lg:grid-cols-2">

          {/* ===== FOTO ===== */}
          <div className="relative flex justify-center">

            {/* LUMI FLOATING */}
            <div className="absolute -right-8 -top-8 z-20 hidden lg:block">

              <div className="rounded-full border border-yellow-300/20 bg-[#0f2c57]/90 p-5 shadow-[0_0_40px_rgba(255,215,0,0.2)] backdrop-blur-xl">

                <Image
                  src="/lumi1.png"
                  alt="Lumi"
                  width={90}
                  height={90}
                  className="animate-float object-contain"
                  priority
                />

              </div>

            </div>

            {/* FOTO CARD */}
            <div className="relative w-full max-w-[520px] overflow-hidden rounded-[38px] border border-white/10 bg-white/5 p-3 backdrop-blur-xl">

              {/* FOTO */}
              <div className="relative overflow-hidden rounded-[30px]">

                <Image
                  src="/angkatan.png"
                  alt="Angkatan"
                  width={900}
                  height={1200}
                  priority
                  className="h-[580px] w-full object-cover"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071f3d]/80 via-transparent to-transparent" />

              </div>

            </div>

          </div>

          {/* ===== RIGHT SIDE ===== */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

            {/* TITLE */}
            <h1
              className="text-white"
              style={{
                fontFamily:
                  "'Playfair Display', serif",
                fontSize:
                  "clamp(68px, 12vw, 120px)",
                fontWeight: 900,
                lineHeight: 0.9,
                textShadow:
                  "0 0 35px rgba(255,255,255,0.15)",
              }}
            >
              Wisuda
            </h1>

            {/* SUBTITLE */}
            <h2 className="mt-5 text-[30px] font-semibold text-white md:text-[42px]">
              SMK TELKOM MALANG
            </h2>

            {/* ANGKATAN */}
            <div className="mt-5 rounded-full border border-yellow-300/20 bg-yellow-300/10 px-5 py-2 backdrop-blur-md">

              <p className="text-sm tracking-[0.3em] text-yellow-300/85">
                ANGKATAN XXXII
              </p>

            </div>

            {/* DIVIDER */}
            <div className="my-8 flex items-center gap-3">

              <div className="h-px w-16 bg-gradient-to-r from-transparent to-yellow-300/70" />

              <span className="text-yellow-300">
                ◆
              </span>

              <div className="h-px w-16 bg-gradient-to-l from-transparent to-yellow-300/70" />

            </div>

            {/* TEXT */}
            <p className="max-w-xl text-sm leading-8 text-white/70 md:text-base">
              Dengan hormat, kami mengundang
              Anda untuk menghadiri acara
              wisuda sebagai bentuk perayaan
              atas pencapaian generasi terbaik
              kami.
            </p>

            {/* QUOTE CARD */}
            <div className="mt-8 w-full max-w-xl rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

              <p className="text-sm italic leading-8 text-white/70">
                “Every ending is the beginning
                of a new journey.”
              </p>

            </div>

            {/* BUTTON */}
            <Link
              href="/Undangan/opening"
              className="mt-10 inline-flex items-center justify-center gap-3 rounded-full bg-yellow-300 px-8 py-5 text-sm font-bold text-[#071f3d] shadow-[0_0_35px_rgba(255,215,0,0.25)] transition duration-300 hover:scale-[1.03] active:scale-95"
            >

              <Sparkles size={18} />

              Buka Undangan

            </Link>

            {/* ORNAMENT */}
            <div className="mt-10 flex gap-5">

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

        {/* FOOTER */}
        <p className="mt-24 text-xs tracking-[0.4em] text-yellow-300/60">
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