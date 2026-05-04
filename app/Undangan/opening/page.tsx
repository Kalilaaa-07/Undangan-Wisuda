"use client";

import BottomNav from "@/components/BottonNav";

export default function OpeningPage() {
  return (
    <>
      <main
        className="min-h-screen flex flex-col items-center justify-center text-center px-6 pb-24"
        style={{
          background:
            "linear-gradient(180deg, #3a0c10 0%, #6e1a22 50%, #9f2f2f 100%)",
        }}
      >
        <div className="w-full max-w-4xl">

          {/* LABEL */}
          <p className="tracking-[0.4em] text-white/60 text-sm mb-6">
            UNDANGAN WISUDA
          </p>

          {/* TITLE SUPER BESAR */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] mb-6">
            Selamat Datang<br /> 
          </h1>

          {/* SUB */}
          <p className="text-xl md:text-2xl text-white/80 leading-relaxed max-w-2xl mx-auto">
            Kami dengan bangga mengundang Anda untuk menghadiri acara
          </p>

          {/* HIGHLIGHT */}
          <p className="mt-4 text-2xl md:text-3xl font-semibold text-white">
            Wisuda SMK Telkom Malang Angkatan 32
          </p>

          {/* LINE */}
          <div className="w-32 h-[2px] bg-white/40 mx-auto my-8" />

          {/* DESC */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-xl mx-auto">
            Bersama kita rayakan perjalanan dan pencapaian
            generasi
          </p>

          {/* TITLE SUPER BESAR */}
          <h1 className="text-4xl md:text-4xl lg:text-8xl font-serif text-white leading-[1.1] mb-6">
            LUMINEX<br /> 
          </h1>

        </div>
      </main>

      <BottomNav />
    </>
  );
}