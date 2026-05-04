"use client";

import { useState, useEffect } from "react";
import BottomNav from "@/components/BottonNav";

export default function RSVPPage() {
  const [step, setStep] = useState<"intro" | "form" | "done">("intro");

  const [time, setTime] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  const [form, setForm] = useState({
    nama: "",
    kelas: "",
    hadir: "",
    pesan: "",
  });

  useEffect(() => {
    const target = new Date("2026-06-11T08:00:00").getTime();

    const interval = setInterval(() => {
      const diff = target - Date.now();
      if (diff < 0) { clearInterval(interval); return; }
      setTime({
        hari: Math.floor(diff / (1000 * 60 * 60 * 24)),
        jam: Math.floor((diff / (1000 * 60 * 60)) % 24),
        menit: Math.floor((diff / (1000 * 60)) % 60),
        detik: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const cardStyle: React.CSSProperties = {
    background: "linear-gradient(145deg, #0a2f60, #0e4a96)",
    border: "1px solid rgba(255,215,0,0.2)",
    boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
  };

  const inputClass =
    "w-full p-3 rounded-xl bg-white/10 border border-yellow-300/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-yellow-300/50 text-sm";

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
            Konfirmasi Hadir
          </h1>
          <div className="w-12 h-[2px] bg-yellow-300 mx-auto mt-4" />
          <p className="mt-3 text-sm text-white/60 tracking-wide">
            Kamis, 11 Juni 2026 · 08.00 WIB
          </p>

          <svg className="absolute -bottom-[1px] left-0 w-full" viewBox="0 0 1440 40" preserveAspectRatio="none">
            <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" fill="#0c3c78" />
          </svg>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="w-full max-w-sm sm:max-w-md px-4 sm:px-0 mt-6 flex flex-col items-center gap-5">

          {/* COUNTDOWN */}
          <div className="w-full">
            <p className="text-white/50 text-xs tracking-[0.3em] mb-3 text-center">MENUJU HARI H</p>
            <div className="grid grid-cols-4 gap-2 sm:gap-3">
              {[
                { label: "Hari", value: time.hari },
                { label: "Jam", value: time.jam },
                { label: "Menit", value: time.menit },
                { label: "Detik", value: time.detik },
              ].map((item, i) => (
                <div
                  key={i}
                  className="relative flex flex-col items-center justify-center py-4 rounded-2xl overflow-hidden"
                  style={cardStyle}
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[2px] bg-yellow-300/70 rounded-full" />
                  <div className="text-xl sm:text-2xl font-bold text-yellow-300 tabular-nums">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-[10px] sm:text-xs text-white/60 mt-1 tracking-wide">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DIVIDER */}
          <div className="flex items-center gap-3 w-full">
            <div className="flex-1 h-[1px] bg-white/10" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-300/50" />
            <div className="flex-1 h-[1px] bg-white/10" />
          </div>

          {/* ===== STEP: INTRO ===== */}
          {step === "intro" && (
            <div className="w-full rounded-2xl p-6 flex flex-col items-center text-center" style={cardStyle}>
              <div className="flex items-center gap-2 mb-4 self-start">
                <div className="w-1 h-6 bg-yellow-300 rounded-full" />
                <p className="text-yellow-300/80 text-[10px] tracking-[0.3em]">INFORMASI</p>
              </div>

              <div className="inline-block border border-yellow-300/40 rounded-full px-5 py-2 text-yellow-300 text-sm mb-4">
                Undangan Hanya Untuk 2 Orang
              </div>

              <p className="text-white/60 text-sm leading-relaxed mb-6">
                Tekan tombol di bawah ini untuk mengonfirmasi kehadiran kamu di acara wisuda kami.
              </p>

              <button
                onClick={() => setStep("form")}
                className="bg-yellow-300 text-[#0c3c78] font-semibold px-8 py-3 rounded-full shadow-md hover:bg-yellow-200 active:scale-95 transition-all text-sm tracking-wide"
              >
                KONFIRMASI SEKARANG
              </button>
            </div>
          )}

          {/* ===== STEP: FORM ===== */}
          {step === "form" && (
            <div className="w-full rounded-2xl p-6" style={cardStyle}>
              <div className="flex items-center gap-2 mb-5">
                <div className="w-1 h-6 bg-yellow-300 rounded-full" />
                <p className="text-yellow-300/80 text-[10px] tracking-[0.3em]">FORM RSVP</p>
              </div>

              <div className="space-y-3">
                <input
                  placeholder="Nama Tamu"
                  className={inputClass}
                  value={form.nama}
                  onChange={(e) => setForm({ ...form, nama: e.target.value })}
                />

                <input
                  placeholder="Kelas"
                  className={inputClass}
                  value={form.kelas}
                  onChange={(e) => setForm({ ...form, kelas: e.target.value })}
                />

                <select
                  className={inputClass}
                  value={form.hadir}
                  onChange={(e) => setForm({ ...form, hadir: e.target.value })}
                >
                  <option value="" className="bg-[#0c3c78]">Pilih Kehadiran</option>
                  <option value="Hadir" className="bg-[#0c3c78]">Hadir</option>
                  <option value="Tidak Hadir" className="bg-[#0c3c78]">Tidak Hadir</option>
                </select>

                <textarea
                  placeholder="Ucapan & Doa"
                  className={`${inputClass} h-24 resize-none`}
                  value={form.pesan}
                  onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                />

                <div className="flex gap-3 pt-1">
                  <button
                    onClick={() => setStep("intro")}
                    className="flex-1 border border-yellow-300/40 text-yellow-300/70 py-3 rounded-full text-sm hover:bg-white/5 active:scale-95 transition-all"
                  >
                    Kembali
                  </button>
                  <button
                    onClick={() => setStep("done")}
                    className="flex-1 bg-yellow-300 text-[#0c3c78] font-semibold py-3 rounded-full shadow-md hover:bg-yellow-200 active:scale-95 transition-all text-sm"
                  >
                    Kirim
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* ===== STEP: DONE ===== */}
          {step === "done" && (
            <div className="w-full rounded-2xl p-8 flex flex-col items-center text-center" style={cardStyle}>
              <div className="w-16 h-16 rounded-full border-2 border-yellow-300/60 flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-yellow-300" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-serif text-white mb-2">Terima Kasih!</h2>
              <p className="text-white/60 text-sm leading-relaxed">
                Konfirmasi kehadiran <span className="text-yellow-300">{form.nama || "kamu"}</span> telah kami terima. Sampai jumpa di hari wisuda!
              </p>
              <div className="w-12 h-[1px] bg-yellow-300/30 mx-auto my-5" />
              <p className="text-yellow-300/60 text-xs tracking-widest">LUMINEX · ANGKATAN 32</p>
            </div>
          )}

        </div>
      </main>

      <BottomNav />
    </>
  );
}