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

export default function RundownPage() {
  return (
    <>
      <main className="min-h-screen bg-[#fff7f7] px-6 pb-28">

        {/* TITLE */}
        <div className="text-center pt-10 mb-10">
          <h1 className="text-3xl md:text-4xl font-serif text-[#6e1a22]">
            Rundown Acara
          </h1>
          <p className="text-gray-500 mt-2">
            Susunan kegiatan acara wisuda
          </p>
        </div>

        {/* TIMELINE */}
        <div className="max-w-xl mx-auto relative">

          {/* LINE */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-[#6e1a22]/30"></div>

          {rundownData.map((item, i) => (
            <div key={i} className="flex items-start gap-4 mb-8">

              {/* DOT */}
              <div className="w-8 h-8 rounded-full bg-[#6e1a22] flex items-center justify-center text-white text-sm font-bold z-10">
                {i + 1}
              </div>

              {/* CONTENT */}
              <div className="bg-white p-4 rounded-xl shadow-md flex-1 border border-[#6e1a22]/10">

                <p className="text-sm text-[#6e1a22] font-semibold">
                  {item.waktu}
                </p>

                <h2 className="text-lg font-semibold text-gray-800 mt-1">
                  {item.acara}
                </h2>

                <p className="text-gray-600 text-sm mt-1">
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