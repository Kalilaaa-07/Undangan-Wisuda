"use client";

import {
  Clock3,
  Sparkles,
} from "lucide-react";

import BottomNav from "@/components/BottonNav"

/* ===== DATA ===== */
const rundownData = [
  {
    waktu: "07.30 - 08.00",
    acara: "Registrasi Tamu",
    desc: "Tamu undangan melakukan registrasi dan memasuki venue",
  },
  {
    waktu: "08.00 - 08.15",
    acara: "Pembukaan",
    desc: "Pembukaan oleh MC dan doa",
  },
  {
    waktu: "08.15 - 09.30",
    acara: "Prosesi Wisuda",
    desc: "Pemanggilan dan penyerahan penghargaan kepada wisudawan",
  },
  {
    waktu: "09.30 - 10.00",
    acara: "Sambutan",
    desc: "Sambutan dari Kepala Sekolah dan perwakilan siswa",
  },
  {
    waktu: "10.00 - 11.00",
    acara: "Penutup & Foto Bersama",
    desc: "Sesi foto dan penutup acara",
  },
];

export default function RundownPage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#071f3d] pb-32 text-white">

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
          className="absolute left-1/2 top-24 z-[1] h-80 w-80 -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,0,0.18) 0%, transparent 70%)",
          }}
        />

        {/* ===== SPARKLES ===== */}
        <div className="absolute left-10 top-28 h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

        <div className="absolute right-10 top-40 h-2 w-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 mx-auto max-w-md px-4 pt-10">

          {/* ===== HEADER ===== */}
          <div className="text-center">

            <p
              className="text-[10px] text-yellow-300/70"
              style={{
                letterSpacing: "0.45em",
                fontFamily: "serif",
              }}
            >
              ✦ LUMINEX · ANGKATAN 32 ✦
            </p>

            <h1
              className="mt-4 text-white"
              style={{
                fontFamily:
                  "'Playfair Display', serif",
                fontSize:
                  "clamp(52px, 10vw, 88px)",
                fontWeight: 900,
                lineHeight: 0.95,
                textShadow:
                  "0 0 30px rgba(255,255,255,0.18)",
              }}
            >
              Rundown
              <br />
              Acara
            </h1>

            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Susunan kegiatan acara
              <br />
              Wisuda LUMINEX
            </p>

            <Divider />
          </div>

          {/* ===== TIMELINE ===== */}
          <div className="relative mt-10">

            {/* LINE */}
            <div
              className="absolute left-[19px] top-0 bottom-0 w-px"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(255,215,0,0.7), rgba(255,215,0,0.1))",
              }}
            />

            <div className="space-y-6">

              {rundownData.map((item, i) => (
                <div
                  key={i}
                  className="relative flex gap-4"
                >

                  {/* ===== DOT ===== */}
                  <div className="relative z-10 flex h-10 w-10 min-w-[40px] items-center justify-center rounded-full border border-yellow-300/30 bg-yellow-300 text-sm font-bold text-[#071f3d] shadow-[0_0_20px_rgba(255,215,0,0.3)]">

                    {i + 1}

                  </div>

                  {/* ===== CARD ===== */}
                  <div
                    className="flex-1 overflow-hidden rounded-[28px] border border-yellow-300/20 p-5 backdrop-blur-xl"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
                      boxShadow:
                        "0 0 40px rgba(0,0,0,0.2)",
                    }}
                  >

                    {/* ===== TOP ===== */}
                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-yellow-300/20 bg-yellow-300/10">

                        <Clock3
                          size={18}
                          className="text-yellow-300"
                        />

                      </div>

                      <div>

                        <p
                          className="text-[10px] text-yellow-300/80"
                          style={{
                            letterSpacing:
                              "0.28em",
                          }}
                        >
                          {item.waktu}
                        </p>

                        <h2
                          className="mt-1 text-white"
                          style={{
                            fontFamily:
                              "'Playfair Display', serif",
                            fontSize:
                              "clamp(24px, 5vw, 34px)",
                            lineHeight: 1.1,
                          }}
                        >
                          {item.acara}
                        </h2>

                      </div>

                    </div>

                    {/* ===== DESC ===== */}
                    <p className="mt-4 text-sm leading-7 text-white/70">

                      {item.desc}

                    </p>

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* ===== BOTTOM ===== */}
          <div className="mt-14 flex justify-center gap-4">

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

/* ===== DIVIDER ===== */
function Divider() {
  return (
    <div className="my-7 flex items-center justify-center gap-3">

      <div
        className="h-px w-20"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,215,0,0.7))",
        }}
      />

      <span className="text-xs text-yellow-400">
        ◆
      </span>

      <div
        className="h-px w-20"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(255,215,0,0.7))",
        }}
      />

    </div>
  );
}