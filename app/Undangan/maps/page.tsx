"use client";

import BottomNav from "@/components/BottonNav";

export default function MapsPage() {
  return (
    <>
      <main className="min-h-screen bg-[#0c3c78] flex justify-center px-4 pb-32">

        <div className="w-full max-w-md mt-6">

          {/* HEADER */}
          <div className="text-center mb-6">
            <p className="text-yellow-300/70 text-xs tracking-[0.3em] mb-2">
              LOKASI ACARA
            </p>

            <h1 className="text-3xl font-serif text-white">
              Graha Cakrawala
            </h1>

            <p className="text-white/60 text-sm mt-1">
              Universitas Negeri Malang
            </p>

            <div className="w-12 h-[2px] bg-yellow-300 mx-auto mt-4" />
          </div>

          {/* CARD */}
          <div className="bg-gradient-to-br from-[#0a2f60] to-[#0e4a96] border border-yellow-300/20 rounded-2xl shadow-xl p-5">

            {/* MAP */}
            <div className="rounded-xl overflow-hidden border border-yellow-300/20 shadow-md">
              <iframe
                src="https://www.google.com/maps?q=Graha+Cakrawala+Universitas+Negeri+Malang&output=embed"
                className="w-full h-[260px]"
                loading="lazy"
              ></iframe>
            </div>

            {/* ADDRESS */}
            <div className="mt-5 text-center">
              <p className="text-white/70 text-sm leading-relaxed">
                Graha Cakrawala, Universitas Negeri Malang <br />
                Jl. Semarang No.5, Sumbersari, Lowokwaru <br />
                Kota Malang, Jawa Timur
              </p>
            </div>

            {/* BUTTON */}
            <a
              href="https://maps.app.goo.gl/rcJPhbsJDxRMGWS7A"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex justify-center items-center gap-2 bg-yellow-300 text-[#0c3c78] font-semibold px-6 py-3 rounded-full shadow-md hover:scale-105 transition"
            >
              📍 Buka di Google Maps
            </a>

          </div>

        </div>
      </main>

      <BottomNav />
    </>
  );
}