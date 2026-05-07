"use client";

import { useEffect, useState } from "react";

import {
  MapPin,
  Shirt,
} from "lucide-react";

import BottomNav from "@/components/BottonNav";

export default function AcaraPage() {
  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  useEffect(() => {
    const targetDate = new Date(
      "2026-06-11T08:00:00"
    ).getTime();

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
        hari: Math.floor(
          distance / (1000 * 60 * 60 * 24)
        ),

        jam: Math.floor(
          (distance / (1000 * 60 * 60)) % 24
        ),

        menit: Math.floor(
          (distance / (1000 * 60)) % 60
        ),

        detik: Math.floor(
          (distance / 1000) % 60
        ),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#041d4a] via-[#062b67] to-[#08357c] text-white pb-32">

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

        <div className="absolute top-[420px] left-12 w-1 h-1 rounded-full bg-yellow-300 shadow-[0_0_15px_gold]" />

        <div className="absolute bottom-52 right-16 w-2 h-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

        <div className="absolute top-[700px] left-20 w-2 h-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

        {/* LEFT LEAF */}
        <div className="absolute left-0 top-[350px] opacity-20 hidden md:block">

          <div className="relative w-[120px] h-[300px]">

            <div className="absolute left-8 top-0 w-[1px] h-full bg-yellow-300/40" />

            <div className="absolute left-8 top-10 w-20 h-10 border border-yellow-300/40 rounded-full rotate-[-25deg]" />

            <div className="absolute left-8 top-28 w-24 h-12 border border-yellow-300/40 rounded-full rotate-[20deg]" />

            <div className="absolute left-8 top-48 w-20 h-10 border border-yellow-300/40 rounded-full rotate-[-15deg]" />

          </div>

        </div>

        {/* RIGHT LEAF */}
        <div className="absolute right-0 top-[300px] opacity-20 hidden md:block">

          <div className="relative w-[120px] h-[300px]">

            <div className="absolute right-8 top-0 w-[1px] h-full bg-yellow-300/40" />

            <div className="absolute right-8 top-10 w-20 h-10 border border-yellow-300/40 rounded-full rotate-[25deg]" />

            <div className="absolute right-8 top-28 w-24 h-12 border border-yellow-300/40 rounded-full rotate-[-20deg]" />

            <div className="absolute right-8 top-48 w-20 h-10 border border-yellow-300/40 rounded-full rotate-[15deg]" />

          </div>

        </div>

        {/* ================================================= */}
        {/* CONTENT */}
        {/* ================================================= */}

        <div className="relative z-10 max-w-lg mx-auto px-4">

          {/* HEADER */}
          <div className="relative text-center pt-14">

            {/* HEADER GLOW */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-yellow-300/10 blur-3xl" />

            <p className="tracking-[0.4em] text-yellow-300/70 text-[10px]">
              LUMINEX · ANGKATAN 32
            </p>

            <h1 className="mt-5 text-5xl md:text-6xl font-serif text-white drop-shadow-lg">
              Info Acara
            </h1>

            {/* ORNAMENT */}
            <div className="flex items-center justify-center gap-3 mt-5">

              <div className="w-12 h-[1px] bg-yellow-300/40" />

              <div className="w-3 h-3 rotate-45 bg-yellow-300 shadow-[0_0_15px_gold]" />

              <div className="w-12 h-[1px] bg-yellow-300/40" />

            </div>

            <p className="mt-6 text-white/70 text-lg">
              Kamis, 11 Juni 2026 · 08.00 WIB
            </p>

          </div>

          {/* COUNTDOWN */}
          <div className="mt-14">

            <p className="text-center text-yellow-300 tracking-[0.35em] text-xs mb-5">
              MENUJU HARI H
            </p>

            <div className="grid grid-cols-4 gap-3">

              {[
                {
                  label: "Hari",
                  value: timeLeft.hari,
                },
                {
                  label: "Jam",
                  value: timeLeft.jam,
                },
                {
                  label: "Menit",
                  value: timeLeft.menit,
                },
                {
                  label: "Detik",
                  value: timeLeft.detik,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative rounded-3xl border border-yellow-300/20 bg-white/5 backdrop-blur-xl py-5 text-center shadow-[0_0_25px_rgba(255,215,0,0.08)]"
                >

                  {/* BOX GLOW */}
                  <div className="absolute inset-0 rounded-3xl shadow-[0_0_25px_rgba(255,215,0,0.08)]" />

                  <h2 className="text-4xl font-bold text-yellow-300">
                    {String(item.value).padStart(2, "0")}
                  </h2>

                  <p className="mt-2 text-white/70 text-sm">
                    {item.label}
                  </p>

                </div>
              ))}

            </div>

          </div>

          {/* CARD WRAPPER */}
          <div className="mt-10 flex flex-col gap-7">

            {/* ================================================= */}
            {/* LOCATION CARD */}
            {/* ================================================= */}

            <div className="relative overflow-hidden rounded-[32px] border border-yellow-300/20 bg-white/5 backdrop-blur-xl p-5 shadow-[0_0_40px_rgba(255,215,0,0.06)]">

              {/* CARD GLOW */}
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-yellow-300/5 blur-3xl" />

              {/* SPARKLE */}
              <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-yellow-300 shadow-[0_0_15px_gold]" />

              <div className="flex items-start gap-4">

                {/* ICON */}
                <div className="w-16 h-16 min-w-[64px] rounded-full border border-yellow-300/20 bg-[#0a3d87] flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.12)]">

                  <MapPin
                    size={28}
                    className="text-yellow-300"
                  />

                </div>

                {/* TEXT */}
                <div className="flex-1">

                  <p className="text-yellow-300 tracking-[0.25em] text-[10px]">
                    LOKASI
                  </p>

                  <h2 className="mt-2 text-[26px] md:text-[32px] leading-tight font-serif text-white">
                    Graha Cakrawala UM
                  </h2>

                  <p className="mt-3 text-white/70 text-sm leading-7">
                    Universitas Negeri Malang,
                    Jl. Cakrawala, Sumbersari,
                    Lowokwaru, Kota Malang
                  </p>

                  {/* BUTTON */}
                  <a
                    href="https://maps.app.goo.gl/6KkrjWt3PZj8j6dL8"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 bg-gradient-to-r from-yellow-300 to-yellow-400 text-[#062b67] px-5 py-3 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition"
                  >
                    📍 Buka Google Maps
                  </a>

                </div>

              </div>

            </div>

            {/* ================================================= */}
            {/* DRESSCODE CARD */}
            {/* ================================================= */}

            <div className="relative overflow-hidden rounded-[32px] border border-yellow-300/20 bg-white/5 backdrop-blur-xl p-5 shadow-[0_0_40px_rgba(255,215,0,0.06)]">

              {/* CARD GLOW */}
              <div className="absolute bottom-0 right-0 w-40 h-40 rounded-full bg-yellow-300/5 blur-3xl" />

              {/* SPARKLE */}
              <div className="absolute top-5 right-5 w-2 h-2 rounded-full bg-yellow-300 shadow-[0_0_15px_gold]" />

              <div className="flex items-start gap-4">

                {/* ICON */}
                <div className="w-16 h-16 min-w-[64px] rounded-full border border-yellow-300/20 bg-[#0a3d87] flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.12)]">

                  <Shirt
                    size={28}
                    className="text-yellow-300"
                  />

                </div>

                {/* TEXT */}
                <div className="flex-1">

                  <p className="text-yellow-300 tracking-[0.25em] text-[10px]">
                    DRESSCODE
                  </p>

                  <h2 className="mt-2 text-[26px] md:text-[32px] leading-tight font-serif text-white">
                    Bebas Rapi
                  </h2>

                  <p className="mt-3 text-white/70 text-sm leading-7">
                    Harap berpakaian sopan,
                    rapi, dan nyaman selama acara.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* BOTTOM ORNAMENT */}
          <div className="flex items-center justify-center gap-4 mt-14">

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