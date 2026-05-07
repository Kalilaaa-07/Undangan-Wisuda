"use client";

import {
  CameraOff,
  CigaretteOff,
} from "lucide-react";

import BottomNav from "@/components/BottonNav";

export default function NotePage() {
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
            Note Acara
          </h1>

          <div className="w-12 h-[2px] bg-yellow-300 mt-4" />

          <p className="mt-3 text-sm sm:text-base text-white/70">
            Informasi penting untuk tamu undangan
          </p>

        </div>

        {/* ===== CONTENT ===== */}
        <div className="w-full max-w-md px-4 mt-6 flex flex-col gap-6">

          {/* ICON */}
          <div className="flex justify-center gap-6">

            {/* NO CAMERA */}
            <div className="w-28 h-28 rounded-full border-[4px] border-yellow-300/30 flex items-center justify-center relative bg-gradient-to-br from-[#0a2f60] to-[#0e4a96]">

              <CameraOff
                size={45}
                className="text-yellow-300"
              />

              <div className="absolute w-[120%] h-1 bg-yellow-300 rotate-45" />

            </div>

            {/* NO SMOKING */}
            <div className="w-28 h-28 rounded-full border-[4px] border-yellow-300/30 flex items-center justify-center relative bg-gradient-to-br from-[#0a2f60] to-[#0e4a96]">

              <CigaretteOff
                size={45}
                className="text-yellow-300"
              />

              <div className="absolute w-[120%] h-1 bg-yellow-300 rotate-45" />

            </div>

          </div>

          {/* NOTE CARD */}
          <div className="w-full rounded-2xl p-5 text-left bg-gradient-to-br from-[#0a2f60] to-[#0e4a96] border border-yellow-300/20">

            <p className="text-yellow-300/80 text-[10px] tracking-[0.3em] mb-3">
              INFORMASI
            </p>

            <ul className="space-y-4 text-white/80 text-sm leading-relaxed">

              <li>
                • Undangan berlaku untuk dua orang
              </li>

              <li>
                • Menggunakan pakaian formal
              </li>

              <li>
                • Hadir 30 menit sebelum acara
              </li>

              <li>
                • Konfirmasi kehadiran scan barcode pada undangan
              </li>

              <li>
                • Undangan harap dibawa
              </li>

              <li>
                • Gunakan Google Maps menuju Graha Cakrawala
              </li>

              <li>
                • Mohon menjaga ketertiban selama acara
              </li>

            </ul>

          </div>

          {/* BUTTON MAPS */}
          <div className="flex justify-center">
            <a
              href="https://maps.app.goo.gl/6KkrjWt3PZj8j6dL8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-yellow-300 text-[#0c3c78] text-sm font-semibold px-6 py-3 rounded-full shadow-lg active:scale-95 transition"
            >
              📍 Buka Google Maps
            </a>
          </div>

        </div>

      </main>

      <BottomNav />
    </>
  );
}