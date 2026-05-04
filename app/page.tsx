"use client";

import { useState } from "react";
import BottomNav from "@/components/BottonNav"; 

export default function Home() {
  const [open, setOpen] = useState(false);

  
  if (!open) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 bg-[#800020]">

        <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center relative overflow-hidden">

          {/* TOP DECOR */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#800020]/20 to-transparent" />

          {/* TITLE */}
          <h2 className="text-sm tracking-[0.3em] text-[#800020] mb-2">
            UNDANGAN
          </h2>

          <h1 className="text-4xl font-serif text-[#800020] mb-6">
            Wisuda
          </h1>

          {/* CONTENT */}
          <h3 className="text-lg font-semibold text-gray-800">
            SMK TELKOM MALANG
          </h3>

          <p className="text-gray-600 mt-1">
            Angkatan 32
          </p>

          <p className="text-[#800020] font-bold mt-3 tracking-widest">
            LUMINEX
          </p>

          {/* DIVIDER */}
          <div className="w-16 h-[2px] bg-[#800020] mx-auto my-6" />

          {/* TEXT */}
          <p className="text-gray-600 text-sm leading-relaxed">
            Dengan hormat, kami mengundang Anda untuk menghadiri acara wisuda
            sebagai bentuk perayaan atas pencapaian generasi terbaik kami.
          </p>

          {/* BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="mt-8 px-8 py-3 rounded-full font-semibold shadow-lg transition hover:scale-105 bg-[#800020] text-white"
          >
            Buka Undangan
          </button>

          {/* BOTTOM DECOR */}
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#800020]/20 to-transparent" />

        </div>
      </main>
    );
  }

  // =========================
  // 🟢 SETELAH DIBUKA
  // =========================
  return (
    <>
      <main className="min-h-screen flex flex-col items-center justify-center text-center px-6 pb-24 bg-gradient-to-b from-[#800020] to-[#a52a2a]">

        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-xl w-full">

          <h1 className="text-3xl md:text-4xl font-serif mb-4 text-[#800020]">
            Selamat Datang 🎓
          </h1>

          <p className="text-gray-700 leading-relaxed">
            Kami dengan bangga mengundang Anda untuk menghadiri acara
            <b> Wisuda SMK Telkom Malang Angkatan 32</b>.
            <br /><br />
            Mari bersama kita rayakan perjalanan dan pencapaian
            generasi <b>Luminex</b> dalam momen istimewa ini.
          </p>

        </div>

      </main>

      {/* NAVBAR */}
      <BottomNav />
    </>
  );
}