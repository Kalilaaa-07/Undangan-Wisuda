"use client";

import BottomNav from "@/components/BottonNav";

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

const cardStyle: React.CSSProperties = {
  background: "linear-gradient(145deg, #0a2f60, #0e4a96)",
  border: "1px solid rgba(255,215,0,0.2)",
  boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
};

export default function RundownPage() {
  return (
    <>
      <main className="relative min-h-screen flex flex-col items-center bg-[#0c3c78] pb-28 overflow-x-hidden">

        {/* ===== TOP HEADER ===== */}
        <div className="relative w-full bg-[#0a2f60] pt-10 pb-14 px-4 flex flex-col items-center shadow-lg">
          <div className="absolute top-4 left-4 w-2 h-2 rounded-full bg-yellow-300/60" />
          <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-yellow-300/60" />

          <p className="tracking-[0.4em] text-yellow-300/70 text-[10px] sm:text-xs mb-3">
            LUMINEX · ANGKATAN 32
          </p>
          <h1 className="text-3xl sm:text-4xl font-serif text-white drop-shadow-md">
            Rundown Acara
          </h1>
          <div className="w-12 h-[2px] bg-yellow-300 mx-auto mt-4" />
          <p className="mt-3 text-sm text-white/60 tracking-wide">
            Susunan kegiatan acara wisuda
          </p>

          <svg className="absolute -bottom-[1px] left-0 w-full" viewBox="0 0 1440 40" preserveAspectRatio="none">
            <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" fill="#0c3c78" />
          </svg>
        </div>

        {/* ===== TIMELINE ===== */}
        <div className="w-full max-w-sm sm:max-w-md px-4 sm:px-0 mt-8 relative">

          {/* VERTICAL LINE */}
          <div
            className="absolute left-[27px] sm:left-[27px] top-0 bottom-0 w-[2px]"
            style={{ background: "linear-gradient(to bottom, rgba(255,215,0,0.6), rgba(255,215,0,0.1))" }}
          />

          {rundownData.map((item, i) => (
            <div key={i} className="flex items-start gap-4 mb-6 relative">

              {/* DOT */}
              <div
                className="w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-[#0c3c78] text-sm font-bold z-10 shadow-lg"
                style={{ background: "linear-gradient(135deg, #fde68a, #f59e0b)" }}
              >
                {i + 1}
              </div>

              {/* CARD */}
              <div className="flex-1 rounded-2xl p-4 sm:p-5" style={cardStyle}>

                <div className="flex items-center gap-2 mb-2">
                  <div className="w-1 h-5 bg-yellow-300 rounded-full" />
                  <p className="text-yellow-300/80 text-[10px] tracking-[0.25em] uppercase">
                    {item.waktu}
                  </p>
                </div>

                <h2 className="text-base sm:text-lg font-serif text-white">
                  {item.acara}
                </h2>

                <p className="text-white/55 text-sm mt-1 leading-relaxed">
                  {item.desc}
                </p>

              </div>
            </div>
          ))}

        </div>
      </main>

      <BottomNav />
    </>
  );
}