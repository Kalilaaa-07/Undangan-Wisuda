"use client";

import { useEffect, useState } from "react";
import BottomNav from "@/components/BottonNav";

export default function AcaraPage() {
  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-06-11T08:00:00").getTime();

    const interval = setInterval(() => {
      const distance = targetDate - Date.now();

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({
          hari: 0,
          jam: 0,
          menit: 0,
          detik: 0,
        });
        return;
      }

      setTimeLeft({
        hari: Math.floor(distance / (1000 * 60 * 60 * 24)),
        jam: Math.floor((distance / (1000 * 60 * 60)) % 24),
        menit: Math.floor((distance / (1000 * 60)) % 60),
        detik: Math.floor((distance / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="relative min-h-screen flex flex-col items-center text-center pb-28 bg-[#0c3c78] overflow-x-hidden">

        {/* ===== HEADER ===== */}
        <div className="relative w-full bg-[#0a2f60] pt-10 pb-14 px-4 flex flex-col items-center shadow-lg">
          <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-yellow-300/60" />
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-yellow-300/60" />

          <p className="tracking-[0.4em] text-yellow-300/70 text-[10px] sm:text-xs mb-3">
            LUMINEX · ANGKATAN 32
          </p>

          <h1 className="text-3xl sm:text-4xl font-serif text-white">
            Info Acara
          </h1>

          <div className="w-12 h-[2px] bg-yellow-300 mt-4" />

          <p className="mt-3 text-sm sm:text-base text-white/70">
            Kamis, 11 Juni 2026 · 08.00 WIB
          </p>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="w-full max-w-md px-4 mt-6 flex flex-col gap-6">

          {/* COUNTDOWN */}
          <div>
            <p className="text-white/50 text-xs tracking-[0.3em] mb-3">
              MENUJU HARI H
            </p>

            <div className="grid grid-cols-4 gap-2">
              {[
                { label: "Hari", value: timeLeft.hari },
                { label: "Jam", value: timeLeft.jam },
                { label: "Menit", value: timeLeft.menit },
                { label: "Detik", value: timeLeft.detik },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center py-4 rounded-xl"
                  style={{
                    background: "linear-gradient(145deg, #0a2f60, #0e4a96)",
                    border: "1px solid rgba(255,215,0,0.2)",
                  }}
                >
                  <div className="text-xl font-bold text-yellow-300">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-xs text-white/60">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* LOCATION */}
          <div className="w-full rounded-2xl p-5 text-left bg-gradient-to-br from-[#0a2f60] to-[#0e4a96] border border-yellow-300/20">

            <p className="text-yellow-300/80 text-[10px] tracking-[0.3em] mb-2">
              LOKASI
            </p>

            <h2 className="text-lg font-serif text-white mb-2">
              Graha Cakrawala UM
            </h2>

            <p className="text-white/60 text-sm">
              Universitas Negeri Malang, Jl. Cakrawala, Sumbersari,
              Lowokwaru, Kota Malang
            </p>

            {/* 🔥 FIX DI SINI */}
            <a
              href="https://maps.app.goo.gl/6KkrjWt3PZj8j6dL8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 bg-yellow-300 text-[#0c3c78] text-sm font-semibold px-5 py-2 rounded-full"
            >
              📍 Buka Google Maps
            </a>
          </div>

          {/* DRESSCODE */}
          <div className="w-full rounded-2xl p-5 text-left bg-gradient-to-br from-[#0a2f60] to-[#0e4a96] border border-yellow-300/20">

            <p className="text-yellow-300/80 text-[10px] tracking-[0.3em] mb-2">
              DRESSCODE
            </p>

            <h3 className="text-lg font-serif text-white">
              Bebas Rapi
            </h3>

            <p className="text-white/50 text-sm">
              Harap berpakaian sopan dan rapi.
            </p>
          </div>

        </div>
      </main>

      <BottomNav />
    </>
  );
}