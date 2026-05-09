"use client";

import { MapPinned } from "lucide-react";
import BottomNav from "@/components/BottonNav";

export default function NotePage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#071f3d] pb-28 text-white">

        {/* ===== BACKGROUND ===== */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, #1450a8 0%, #0c3c78 40%, #071f3d 100%)",
          }}
        />

        {/* ===== GLOW ===== */}
        <div
          className="absolute left-1/2 top-40 z-[1] h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,0,0.18) 0%, transparent 70%)",
          }}
        />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 flex flex-col items-center px-5 pt-10">

          {/* ===== TOP LABEL ===== */}
          <p
            className="mb-3 text-[10px] text-yellow-300/70"
            style={{
              letterSpacing: "0.45em",
              fontFamily: "serif",
            }}
          >
            ✦ LUMINEX · ANGKATAN 32 ✦
          </p>

          {/* ===== TITLE ===== */}
          <h1
            className="text-center text-white"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(42px, 8vw, 72px)",
              fontWeight: 900,
              lineHeight: 1,
              textShadow:
                "0 0 25px rgba(255,255,255,0.18)",
            }}
          >
            Note
            Acara
          </h1>

          {/* ===== SUBTITLE ===== */}
          <p className="mt-5 max-w-[320px] text-center text-sm leading-relaxed text-white/70">
            Informasi penting untuk seluruh
            tamu undangan wisuda SMK Telkom
            Malang
          </p>

          <Divider />

          {/* ===== CARD ===== */}
          <div
            className="mt-4 w-full max-w-md rounded-[28px] border border-yellow-300/20 p-6 backdrop-blur-xl"
            style={{
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
              boxShadow:
                "0 0 40px rgba(0,0,0,0.2)",
            }}
          >

            {/* ===== CARD LABEL ===== */}
            <p
              className="mb-5 text-[10px] text-yellow-300/80"
              style={{
                letterSpacing: "0.35em",
              }}
            >
              INFORMASI PENTING
            </p>

            {/* ===== LIST ===== */}
            <ul className="space-y-4 text-sm leading-relaxed text-white/80">

              <li className="flex gap-3">
                <span className="text-yellow-300">
                  ✦
                </span>
                Undangan berlaku untuk dua
                orang
              </li>

              <li className="flex gap-3">
                <span className="text-yellow-300">
                  ✦
                </span>
                Menggunakan pakaian formal
              </li>

              <li className="flex gap-3">
                <span className="text-yellow-300">
                  ✦
                </span>
                Hadir 30 menit sebelum acara
              </li>

              <li className="flex gap-3">
                <span className="text-yellow-300">
                  ✦
                </span>
                Konfirmasi kehadiran scan
                barcode pada undangan
              </li>

              <li className="flex gap-3">
                <span className="text-yellow-300">
                  ✦
                </span>
                Undangan harap dibawa
              </li>

              <li className="flex gap-3">
                <span className="text-yellow-300">
                  ✦
                </span>
                Gunakan Google Maps menuju
                Graha Cakrawala
              </li>

              <li className="flex gap-3">
                <span className="text-yellow-300">
                  ✦
                </span>
                Mohon menjaga ketertiban
                selama acara
              </li>

              <li className="flex gap-3">
                <span className="text-yellow-300">
                  ✦
                </span>
                Dilarang membawa makanan
                dan minuman dari luar
              </li>

              <li className="flex gap-3">
                <span className="text-yellow-300">
                  ✦
                </span>
                Dilarang menggunakan flash
                saat dokumentasi
              </li>

              <li className="flex gap-3">
                <span className="text-yellow-300">
                  ✦
                </span>
                Jaga barang bawaan pribadi
              </li>

              <li className="flex gap-3">
                <span className="text-yellow-300">
                  ✦
                </span>
                Matikan atau silent mode
                pada perangkat saat acara
                berlangsung
              </li>

            </ul>
          </div>

          {/* ===== BUTTON ===== */}
          <a
            href="https://maps.app.goo.gl/6KkrjWt3PZj8j6dL8"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-yellow-300/30 bg-yellow-300 px-7 py-3 text-sm font-bold text-[#071f3d] shadow-2xl transition active:scale-95"
          >
            <MapPinned size={18} />

            Buka Google Maps
          </a>

          {/* ===== THANK YOU ===== */}
          <div className="mt-14 text-center">

            <p
              className="text-yellow-300 italic"
              style={{
                fontFamily:
                  "'Playfair Display', serif",
                fontSize:
                  "clamp(30px, 5vw, 46px)",
                textShadow:
                  "0 0 20px rgba(255,215,0,0.45)",
              }}
            >
              ✦ Terima kasih ✦
            </p>

            <div
              className="mx-auto mt-3 h-px w-44"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(255,215,0,0.8), transparent)",
              }}
            />

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              atas kehadiran dan
              <br />
              kerja samanya
            </p>

          </div>

          {/* ===== SPARKLES ===== */}
          <div className="mt-10 flex gap-4">
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

        {/* ===== STYLE ===== */}
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap");

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-8px);
            }
          }
        `}</style>
      </main>

      <BottomNav />
    </>
  );
}

function Divider() {
  return (
    <div className="my-7 flex w-full max-w-[240px] items-center gap-3">
      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,215,0,0.7))",
        }}
      />

      <span className="text-xs text-yellow-400">
        ◆
      </span>

      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(255,215,0,0.7))",
        }}
      />
    </div>
  );
}