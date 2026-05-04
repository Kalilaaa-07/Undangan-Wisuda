"use client";

import BottomNav from "@/components/BottonNav"; 

export default function MapsPage() {
  return (
    <>
      <main className="min-h-screen bg-[#f9f4f4] px-4 pb-32 flex justify-center">

        {/* CONTAINER */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 mt-6 text-center">

          {/* TITLE */}
          <h1 className="text-2xl md:text-3xl font-serif text-[#6e1a22]">
            Graha Cakrawala
          </h1>

          <h2 className="text-lg text-gray-500 mt-1 mb-6">
            Universitas Negeri Malang
          </h2>

          {/* MAP */}
          <div className="rounded-xl overflow-hidden shadow-md border border-[#6e1a22]/20">
            <iframe
              src="https://www.google.com/maps?q=Graha+Cakrawala+Universitas+Negeri+Malang&output=embed"
              className="w-full h-[250px]"
              loading="lazy"
            ></iframe>
          </div>

          {/* ADDRESS */}
          <p className="text-gray-600 mt-6 text-sm leading-relaxed">
            Graha Cakrawala, Universitas Negeri Malang, <br />
            Jl. Semarang No.5, Sumbersari, Kec. Lowokwaru, <br />
            Kota Malang, Jawa Timur
          </p>

          {/* BUTTON */}
          <a
            href="https://maps.app.goo.gl/rcJPhbsJDxRMGWS7A"
            target="_blank"
            className="mt-6 inline-block bg-[#8B0000] text-white px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
          >
            📍 Petunjuk Ke Lokasi
          </a>

        </div>

      </main>

      <BottomNav />
    </>
  );
}