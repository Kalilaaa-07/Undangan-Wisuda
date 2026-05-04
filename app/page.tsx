"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <main className="relative min-h-screen flex items-center justify-center bg-[#0c3c78] px-6 overflow-hidden">

        {/* BACKGROUND EFFECT (biar sama kayak RSVP subtle glow) */}
        <div className="absolute top-[-100px] left-[-100px] w-[250px] h-[250px] bg-yellow-300/10 blur-[120px]" />
        <div className="absolute bottom-[-120px] right-[-100px] w-[250px] h-[250px] bg-yellow-300/10 blur-[120px]" />

        {/* CARD */}
        <div
          className="w-full max-w-md rounded-2xl p-8 text-center relative"
          style={{
            background: "linear-gradient(145deg, #0a2f60, #0e4a96)",
            border: "1px solid rgba(255,215,0,0.2)",
            boxShadow: "0 4px 25px rgba(0,0,0,0.4)",
          }}
        >

          {/* HEADER */}
          <p className="tracking-[0.4em] text-yellow-300/70 text-[10px] mb-3">
            UNDANGAN
          </p>

          <h1 className="text-4xl font-serif text-white">
            Wisuda
          </h1>

          <div className="w-12 h-[2px] bg-yellow-300 mx-auto mt-4 mb-6" />

          {/* CONTENT */}
          <h2 className="text-lg font-semibold text-white">
            SMK TELKOM MALANG
          </h2>

          <p className="text-white/60 text-sm mt-1">
            Angkatan 32
          </p>

          {/* BADGE */}
          <div className="mt-3 inline-block px-4 py-1 rounded-full border border-yellow-300/40 text-yellow-300 text-xs tracking-widest">
            LUMINEX
          </div>

          {/* TEXT */}
          <p className="text-white/60 text-sm leading-relaxed mt-6">
            Dengan hormat, kami mengundang Anda untuk menghadiri acara wisuda
            sebagai bentuk perayaan atas pencapaian generasi terbaik kami.
          </p>

          {/* BUTTON */}
          <Link
            href="/Undangan/opening"
            className="mt-8 inline-flex items-center justify-center w-full gap-2 bg-yellow-300 text-[#0c3c78] font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-200 active:scale-95 transition-all text-sm tracking-wide"
          >
            ✨ Buka Undangan
          </Link>

          {/* FOOTER */}
          <p className="text-yellow-300/60 text-[10px] tracking-widest mt-6">
            LUMINEX · ANGKATAN 32
          </p>
        </div>
      </main>
    );
  }
}