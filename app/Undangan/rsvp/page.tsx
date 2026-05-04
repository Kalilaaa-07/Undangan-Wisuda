"use client";

import { useState, useEffect } from "react";
import BottomNav from "@/components/BottonNav"; 

export default function RSVPPage() {
  const [step, setStep] = useState<"intro" | "form">("intro");

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
    const target = new Date("2026-06-11T08:00:00");

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = target.getTime() - now;

      if (diff < 0) return;

      setTime({
        hari: Math.floor(diff / (1000 * 60 * 60 * 24)),
        jam: Math.floor((diff / (1000 * 60 * 60)) % 24),
        menit: Math.floor((diff / (1000 * 60)) % 60),
        detik: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <main className="min-h-screen bg-[#f9f4f4] px-4 pb-32 flex flex-col items-center">

        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 mt-6 text-center">

          {step === "intro" && (
            <>
              {/* TITLE */}
              <h1 className="text-3xl font-serif text-[#6e1a22] leading-tight">
                Confirm Your <br /> Attendance
              </h1>

              {/* COUNTDOWN */}
              <div className="grid grid-cols-4 gap-3 mt-6">
                {[
                  { label: "Hari", value: time.hari },
                  { label: "Jam", value: time.jam },
                  { label: "Menit", value: time.menit },
                  { label: "Detik", value: time.detik },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-[#8B0000] text-white py-3 rounded-xl shadow"
                  >
                    <div className="text-xl font-bold">
                      {String(item.value).padStart(2, "0")}
                    </div>
                    <div className="text-xs">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* INFO */}
              <div className="mt-6 bg-[#8B0000] text-white py-2 px-4 rounded-full text-sm">
                Undangan Hanya Untuk 2 Orang
              </div>

              <p className="mt-4 text-gray-600 text-sm">
                Tekan tombol dibawah ini untuk konfirmasi kehadiran
              </p>

              {/* BUTTON */}
              <button
                onClick={() => setStep("form")}
                className="mt-6 bg-[#8B0000] text-white px-6 py-3 rounded-lg shadow hover:scale-105 transition"
              >
                CLICK HERE
              </button>
            </>
          )}

          {step === "form" && (
            <>
              {/* TITLE */}
              <h1 className="text-2xl font-serif text-[#6e1a22] mb-4">
                RSVP
              </h1>

              <div className="space-y-4 text-left">

                <input
                  placeholder="Nama Tamu"
                  className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                  onChange={(e) =>
                    setForm({ ...form, nama: e.target.value })
                  }
                />

                <input
                  placeholder="Kelas"
                  className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                  onChange={(e) =>
                    setForm({ ...form, kelas: e.target.value })
                  }
                />

                <select
                  className="w-full p-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                  onChange={(e) =>
                    setForm({ ...form, hadir: e.target.value })
                  }
                >
                  <option value="">Pilih Kehadiran</option>
                  <option value="Hadir">Hadir</option>
                  <option value="Tidak Hadir">Tidak Hadir</option>
                </select>

                <textarea
                  placeholder="Ucapan"
                  className="w-full p-3 rounded-xl border border-gray-200 h-24 focus:outline-none focus:ring-2 focus:ring-[#8B0000]"
                  onChange={(e) =>
                    setForm({ ...form, pesan: e.target.value })
                  }
                />

                {/* SUBMIT */}
                <button className="w-full bg-[#8B0000] text-white py-3 rounded-full mt-2 shadow hover:scale-105 transition">
                  Kirim
                </button>

              </div>
            </>
          )}

        </div>
      </main>

      <BottomNav />
    </>
  );
}