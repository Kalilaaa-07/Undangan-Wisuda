"use client";

import { useState } from "react";
import BottomNav from "@/components/BottonNav";

export default function Home() {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <main
        className="flex min-h-screen items-center justify-center text-center px-6"
        style={{
          background: "linear-gradient(180deg,#FFF176 0%, #FFE45E 100%)",
        }}
      >
        <div className="max-w-md">

          <h2
            className="text-4xl font-semibold mb-6"
            style={{ color: "#1E63B5" }}
          >
            Undangan Wisuda
          </h2>

          <h1
            className="text-4xl font-bold mb-2"
            style={{ color: "#0D3B66" }}
          >
            Victorious Day
          </h1>

          <p className="mb-2 text-lg" style={{ color: "#0D3B66" }}>
            SMK TELKOM MALANG
          </p>

          <p className="mb-2" style={{ color: "#0D3B66" }}>
            Angkatan 32
          </p>

          <p
            className="font-bold text-xl mb-8"
            style={{ color: "#1E63B5", letterSpacing: "3px" }}
          >
            LUMINEX
          </p>

          <p className="mb-1" style={{ color: "#0D3B66" }}>
            Kepada Yth.
          </p>

          <p
            className="font-semibold mb-10"
            style={{ color: "#1E63B5" }}
          >
            Nama Tamu
          </p>

          <button
            onClick={() => setOpen(true)}
            className="px-8 py-3 rounded-full font-semibold shadow-lg transition hover:scale-105"
            style={{
              background: "#1E63B5",
              color: "white",
            }}
          >
            Open Invitation
          </button>
        </div>
      </main>
    );
  }

  return (
  <>
    <main
      className="flex min-h-screen flex-col items-center justify-center text-center px-6 pb-24"
      style={{
        background: "#FFE45E",
      }}
    >
      <h1
        className="text-4xl font-bold mb-4"
        style={{ color: "#1E63B5" }}
      >
        Selamat Datang 🎓
      </h1>

      <p
        className="max-w-md text-lg"
        style={{ color: "#0D3B66" }}
      >
        Kami dengan bangga mengundang Anda untuk menghadiri acara
        <b> Wisuda SMK Telkom Malang Angkatan 32</b>.
        <br />
        <br />
        Bersama kita rayakan perjalanan dan pencapaian
        generasi <b>Luminex</b>.
      </p>
    </main>

    {/* Navbar bawah */}
    <BottomNav />
  </>
);
}