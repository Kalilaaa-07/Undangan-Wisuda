"use client";

import { useState } from "react";
import BottomNav from "@/component/BottonNav";

export default function Home() {
  const [open, setOpen] = useState(false);

  // COVER UNDANGAN
  if (!open) {
    return (
      <main
        className="flex min-h-screen items-center justify-center text-center px-6"
        style={{
          background: "linear-gradient(180deg,#FFF176 0%, #FFE45E 100%)",
        }}
      >
        <div className="max-w-md">

          <h2 className="text-4xl font-semibold mb-6 text-blue-600">
            Undangan Wisuda
          </h2>

          <h1 className="text-4xl font-bold mb-2 text-blue-900">
            Victorious Day
          </h1>

          <p className="mb-2 text-lg text-blue-900">
            SMK TELKOM MALANG
          </p>

          <p className="mb-2 text-blue-900">
            Angkatan 32
          </p>

          <p className="font-bold text-xl mb-8 text-blue-600 tracking-widest">
            LUMINEX
          </p>

          <p className="mb-1 text-blue-900">
            Kepada Yth.
          </p>

          <p className="font-semibold mb-10 text-blue-600">
            Nama Tamu
          </p>

          <button
            onClick={() => setOpen(true)}
            className="px-8 py-3 rounded-full font-semibold shadow-lg transition hover:scale-105 bg-blue-600 text-white"
          >
            Open Invitation
          </button>

        </div>
      </main>
    );
  }

  // HALAMAN UNDANGAN
  return (
    <>
      <main
        className="flex min-h-screen flex-col items-center justify-center text-center px-6 pb-24"
        style={{ background: "#FFE45E" }}
      >
        <h1 className="text-4xl font-bold mb-4 text-blue-600">
          Selamat Datang 🎓
        </h1>

        <p className="max-w-md text-lg text-blue-900">
          Kami dengan bangga mengundang Anda untuk menghadiri acara
          <b> Wisuda SMK Telkom Malang Angkatan 32</b>.
          <br />
          <br />
          Bersama kita rayakan perjalanan dan pencapaian
          generasi <b>Luminex</b>.
        </p>
      </main>

      <BottomNav />
    </>
  );
}