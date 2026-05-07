"use client";

import Image from "next/image";

import {
  Check,
} from "lucide-react";

import BottomNav from "@/components/BottonNav";

export default function ThanksPage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#041d4a] via-[#062b67] to-[#08357c] text-white pb-32 flex flex-col items-center">

        {/* ================================================= */}
        {/* BACKGROUND */}
        {/* ================================================= */}

        {/* GLOW */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-yellow-300/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl" />

        {/* TOP WAVE */}
        <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none">

          {/* LEFT */}
          <div className="absolute top-0 left-0">

            <div className="w-[320px] h-[140px] border-t-2 border-yellow-300/30 rounded-br-[300px]" />

            <div className="absolute top-6 left-6 w-[280px] h-[120px] border-t border-yellow-300/20 rounded-br-[300px]" />

          </div>

          {/* RIGHT */}
          <div className="absolute top-0 right-0">

            <div className="w-[320px] h-[140px] border-t-2 border-yellow-300/30 rounded-bl-[300px]" />

            <div className="absolute top-6 right-6 w-[280px] h-[120px] border-t border-yellow-300/20 rounded-bl-[300px]" />

          </div>

        </div>

        {/* SPARKLES */}
        <div className="absolute top-20 left-8 w-2 h-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

        <div className="absolute top-32 right-10 w-2 h-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

        <div className="absolute bottom-52 right-16 w-2 h-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

        {/* ================================================= */}
        {/* CONTENT */}
        {/* ================================================= */}

        <div className="relative z-10 w-full max-w-lg mx-auto px-4 flex flex-col items-center text-center pt-20">

          {/* HEADER */}
          <div className="relative">

            {/* HEADER GLOW */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-72 h-72 rounded-full bg-yellow-300/10 blur-3xl" />

            <p className="tracking-[0.4em] text-yellow-300/70 text-[10px]">
              LUMINEX · ANGKATAN 32
            </p>

            <h1 className="mt-5 text-4xl font-serif text-white">
              Thank You
            </h1>

            {/* ORNAMENT */}
            <div className="flex items-center justify-center gap-3 mt-5">

              <div className="w-12 h-[1px] bg-yellow-300/40" />

              <div className="w-3 h-3 rotate-45 bg-yellow-300 shadow-[0_0_15px_gold]" />

              <div className="w-12 h-[1px] bg-yellow-300/40" />

            </div>

            <p className="mt-5 text-white/70 text-lg leading-relaxed">
              Hormat Kami
              <br />
              Yang Mengundang
            </p>

          </div>

          

          <div className="relative mt-10 overflow-hidden rounded-[32px] border border-yellow-300/20 bg-white/5 backdrop-blur-xl px-6 py-10 shadow-[0_0_40px_rgba(255,215,0,0.06)] w-full max-w-sm">

            {/* GLOW */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-yellow-300/5 blur-3xl" />


            {/* LOGO */}
            <div className="mt-7">

              <Image
                src="/telkom.png"
                alt="SMK Telkom"
                width={110}
                height={110}
                className="mx-auto object-contain"
              />

            </div>

            {/* TITLE */}
            <h1 className="mt-6 text-[28px] leading-tight font-serif text-white">
              SMK Telkom
              <br />
              Malang
            </h1>

            {/* SUBTITLE */}
            <p className="mt-4 text-white/60 leading-7 text-base">
              Wisuda Angkatan XXXII
              <br />
              LUMINEX 2026
            </p>

          </div>

          

          {/* BOTTOM ORNAMENT */}
          <div className="flex items-center justify-center gap-4 mt-12">

            <div className="w-20 h-[1px] bg-yellow-300/40" />

            <div className="w-3 h-3 rotate-45 bg-yellow-300 shadow-[0_0_15px_gold]" />

            <div className="w-20 h-[1px] bg-yellow-300/40" />

          </div>

        </div>

      </main>

      <BottomNav />
    </>
  );
}