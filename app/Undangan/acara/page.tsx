"use client";

import { useEffect, useState } from "react";
import BottomNav from "@/components/BottonNav";

export default function AcaraPage() {
  const targetDate = new Date("2026-06-11T08:00:00");

  const [timeLeft, setTimeLeft] = useState({
    hari: 0,
    jam: 0,
    menit: 0,
    detik: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) return;

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
      <main className="min-h-screen flex flex-col items-center text-center px-4 sm:px-6 pb-32 bg-[#f9f4f4]">

        {/* CONTAINER BIAR CENTER & RAPI */}
        <div className="w-full max-w-md">

          {/* TITLE */}
          <h1 className="mt-10 text-2xl sm:text-3xl font-serif text-[#6e1a22]">
            Your Event
          </h1>

          <p className="text-sm sm:text-lg text-gray-600 mt-2">
            Kamis, 11 Juni 2026
          </p>

          {/* COUNTDOWN */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 mt-6">
            {[
              { label: "Hari", value: timeLeft.hari },
              { label: "Jam", value: timeLeft.jam },
              { label: "Menit", value: timeLeft.menit },
              { label: "Detik", value: timeLeft.detik },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#8B0000] text-white py-3 sm:py-4 rounded-xl shadow-md"
              >
                <div className="text-lg sm:text-2xl font-bold">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-xs sm:text-sm">{item.label}</div>
              </div>
            ))}
          </div>

          {/* LOCATION */}
          <h2 className="mt-10 text-xl sm:text-2xl font-serif text-[#6e1a22]">
            Graha Cakrawala UM
          </h2>

          <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
            Universitas Negeri Malang, Jl. Cakrawala, Sumbersari,
            Kec. Lowokwaru, Kota Malang, Jawa Timur 65145
          </p>

          {/* BUTTON */}
          <a
            href="https://maps.app.goo.gl/6KkrjWt3PZj8j6dL8"
            target="_blank"
            className="mt-6 inline-block bg-[#8B0000] text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
          >
            Buka Google Maps
          </a>

          {/* DRESSCODE */}
          <div className="mt-10 border border-[#8B0000]/40 rounded-2xl px-6 py-6">
            <h3 className="text-xl font-serif text-[#6e1a22]">
              Dresscode
            </h3>
            <p className="font-medium text-gray-600 mt-2">
              Bebas Rapi
            </p>
          </div>

        </div>
      </main>

      <BottomNav />
    </>
  );
}