"use client";

import BottomNav from "@/components/BottonNav";

export default function OpeningPage() {
  return (
    <>
      <main className="relative h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden bg-[#0c3c78]">

        {/* ===== DAISY STRIP KIRI ===== */}
        <img
          src="/daisy1.png"
          className="pointer-events-none absolute top-0 left-0 h-full w-auto z-10 opacity-80 sm:opacity-100"
          style={{ transform: "translateX(-30%) scale(1.1) scaleX(-1)" }}
        />

        {/* ===== DAISY STRIP KANAN ===== */}
        <img
          src="/daisy1.png"
          className="pointer-events-none absolute top-0 right-0 h-full w-auto z-10 opacity-80 sm:opacity-100"
          style={{ transform: "translateX(30%) scale(1.1)" }}
        />

        {/* ===== LUMI BACKGROUND GLOW ===== */}
        <img
          src="/lumi1.png"
          className="pointer-events-none absolute inset-0 m-auto w-[220px] sm:w-[300px] md:w-[400px] lg:w-[450px] opacity-40 blur-sm z-0"
        />

        {/* ===== OVERLAY GRADIENTS ===== */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0c3c78]/95 via-transparent to-[#0c3c78]/95 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c3c78]/70 via-transparent to-[#0c3c78]/80 pointer-events-none z-10" />

        {/* ===== CONTENT ===== */}
        <div className="relative w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl z-20 px-2 flex flex-col items-center pb-20 sm:pb-24">

          {/* ===== LOGO TELKOM ===== */}
          <img
            src="/telkom.png"
            className="mx-auto mb-4 sm:mb-6 w-20 sm:w-28 md:w-36 drop-shadow-xl"
          />

          <p className="tracking-[0.3em] sm:tracking-[0.5em] text-white/70 text-[10px] sm:text-xs md:text-sm mb-3 sm:mb-5">
            UNDANGAN WISUDA
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.1] mb-3 sm:mb-5 drop-shadow-lg">
            Selamat Datang
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-[260px] sm:max-w-lg mx-auto">
            Kami dengan bangga mengundang Anda untuk menghadiri acara
          </p>

          <p className="mt-2 sm:mt-3 text-base sm:text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-300 tracking-wide leading-snug">
            Wisuda SMK Telkom Malang Angkatan 32
          </p>

          <div className="w-14 sm:w-20 h-[2px] bg-yellow-300 mx-auto my-4 sm:my-6" />

          <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed max-w-[260px] sm:max-w-xl mx-auto">
            Bersama kita rayakan perjalanan dan pencapaian generasi
          </p>

          <h1 className="mt-3 sm:mt-5 text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-yellow-300 tracking-widest drop-shadow-lg">
            LUMINEX
          </h1>

        </div>

      </main>

      <BottomNav />
    </>
  );
}