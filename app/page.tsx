"use client";

import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden bg-[#0c3c78]">

      {/* ===== AUDIO ===== */}
      <audio
        ref={audioRef}
        src="/Lomba Sihir - Ribuan Memori (Official Lyric Video) (1).mp3"
        loop
      />

      {/* ===== BUTTON MUSIC ===== */}
      <button
        onClick={() => audioRef.current?.play()}
        className="fixed top-5 right-5 z-50
        bg-white/10 backdrop-blur-md
        border border-white/20
        text-white px-4 py-2 rounded-full
        hover:bg-white/20 transition-all"
      >
        🎵 Music
      </button>

      {/* ===== LUMI BACKGROUND GLOW ===== */}
      <img
        src="/lumi1.png"
        alt="Lumi"
        className="pointer-events-none absolute inset-0 m-auto w-[220px] sm:w-[320px] md:w-[420px] opacity-40 blur-sm z-0 animate-float"
      />

      {/* ===== OVERLAY ===== */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0c3c78]/95 via-transparent to-[#0c3c78]/95 z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c3c78]/70 via-transparent to-[#0c3c78]/80 z-10" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-20 flex flex-col items-center max-w-xl">

        <p className="tracking-[0.4em] text-yellow-300/70 text-[10px] mb-4">
          UNDANGAN
        </p>

        <h1 className="text-5xl sm:text-6xl font-serif text-white drop-shadow-lg">
          Wisuda
        </h1>

        <div className="w-14 h-[2px] bg-yellow-300 mt-5 mb-7" />

        <h2 className="text-2xl sm:text-3xl font-semibold text-white">
          SMK TELKOM MALANG
        </h2>

        <p className="text-white/70 text-sm sm:text-base mt-2">
          Angkatan 32
        </p>

        <div className="mt-5 inline-block px-5 py-2 rounded-full border border-yellow-300/40 text-yellow-300 text-sm tracking-[0.3em]">
          LUMINEX
        </div>

        <p className="text-white/75 text-sm sm:text-base leading-relaxed mt-8 max-w-md">
          Dengan hormat, kami mengundang Anda untuk menghadiri acara wisuda
          sebagai bentuk perayaan atas pencapaian generasi terbaik kami.
        </p>

        <Link
          href="/Undangan/opening"
          className="mt-10 inline-flex items-center justify-center gap-2 bg-yellow-300 text-[#0c3c78] font-semibold px-8 py-4 rounded-full shadow-xl hover:bg-yellow-200 active:scale-95 transition-all text-sm tracking-wide"
        >
          ✨ Buka Undangan
        </Link>

        <p className="text-yellow-300/60 text-[10px] tracking-[0.3em] mt-10">
          LUMINEX · ANGKATAN 32
        </p>

      </div>

      {/* ===== STYLE ===== */}
      <style>{`
        @keyframes float {
          0%,100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}