"use client";

import { useState, useEffect } from "react";
import BottomNav from "@/components/BottonNav";
import { QRCodeCanvas } from "qrcode.react";

/* ===== TYPE ===== */
type FormType = {
  nama: string;
  kelas: string;
  hadir: "Hadir" | "Tidak Hadir" | "";
  pesan: string;
};

type Tamu = FormType & {
  id: number;
  waktu: string;
};

export default function RSVPPage() {
  const [step, setStep] = useState<"intro" | "form" | "done">("intro");

  const [form, setForm] = useState<FormType>({
    nama: "",
    kelas: "",
    hadir: "",
    pesan: "",
  });

  const [dataTamu, setDataTamu] = useState<Tamu[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [lastSaved, setLastSaved] = useState<Tamu | null>(null);
  const [openDropdown, setOpenDropdown] = useState(false);

  /* ===== STORAGE ===== */
  useEffect(() => {
    const saved = localStorage.getItem("rsvp-data");
    if (saved) setDataTamu(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("rsvp-data", JSON.stringify(dataTamu));
  }, [dataTamu]);

  /* ===== DOWNLOAD QR PNG ===== */
  const downloadQR = () => {
    const canvas = document.getElementById("qr-code") as HTMLCanvasElement;

    if (!canvas) {
      alert("QR belum siap");
      return;
    }

    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");

    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = `QR-${lastSaved?.nama || "tamu"}.png`;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  /* ===== SUBMIT ===== */
  const handleSubmit = () => {
    if (!form.nama || !form.hadir) {
      alert("Nama dan kehadiran wajib diisi!");
      return;
    }

    const newData: Tamu = {
      ...form,
      id: editId ?? Date.now(),
      waktu: new Date().toLocaleString(),
    };

    if (editId) {
      setDataTamu((prev) =>
        prev.map((item) => (item.id === editId ? newData : item))
      );
    } else {
      setDataTamu((prev) => [newData, ...prev]);
    }

    setLastSaved(newData);
    setEditId(null);
    setStep("done");
  };

  const handleEdit = (item: Tamu) => {
    setForm(item);
    setEditId(item.id);
    setStep("form");
  };

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#041d4a] via-[#062b67] to-[#08357c] text-white pb-32">

        {/* GLOW */}
        <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-yellow-300/10 blur-3xl" />

        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl" />

        {/* ORNAMENT */}
        <div className="absolute top-20 left-8 w-2 h-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

        <div className="absolute top-32 right-10 w-2 h-2 rounded-full bg-yellow-300 shadow-[0_0_20px_gold]" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-lg mx-auto px-4">

          {/* HEADER */}
          <div className="relative text-center pt-14">

            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-yellow-300/10 blur-3xl" />

            <p className="tracking-[0.4em] text-yellow-300/70 text-[10px]">
              LUMINEX · ANGKATAN 32
            </p>

            <h1 className="mt-5 text-5xl font-serif text-white">
              RSVP
            </h1>

            <div className="flex items-center justify-center gap-3 mt-5">

              <div className="w-12 h-[1px] bg-yellow-300/40" />

              <div className="w-3 h-3 rotate-45 bg-yellow-300 shadow-[0_0_15px_gold]" />

              <div className="w-12 h-[1px] bg-yellow-300/40" />

            </div>

            <p className="mt-6 text-white/70 text-lg">
              Konfirmasi Kehadiran Wisuda
            </p>

          </div>

          {/* CONTENT */}
          <div className="mt-10 flex flex-col gap-7">

            {/* INTRO */}
            {step === "intro" && (
              <div className="relative overflow-hidden rounded-[32px] border border-yellow-300/20 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(255,215,0,0.06)] text-center">

                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-yellow-300/5 blur-3xl" />

                <p className="text-white/70 text-sm leading-7">
                  Silakan konfirmasi kehadiran Anda
                  pada acara Wisuda Angkatan 32.
                </p>

                <button
                  onClick={() => setStep("form")}
                  className="mt-6 bg-gradient-to-r from-yellow-300 to-yellow-400 text-[#062b67] px-6 py-3 rounded-full text-sm font-bold shadow-lg hover:scale-105 transition"
                >
                  KONFIRMASI
                </button>

              </div>
            )}

            {/* FORM */}
            {step === "form" && (
              <div className="relative overflow-hidden rounded-[32px] border border-yellow-300/20 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(255,215,0,0.06)] space-y-4">

                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-yellow-300/5 blur-3xl" />

                <input
                  placeholder="Nama"
                  className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 outline-none"
                  value={form.nama}
                  onChange={(e) =>
                    setForm({ ...form, nama: e.target.value })
                  }
                />

                <input
                  placeholder="Kelas"
                  className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 outline-none"
                  value={form.kelas}
                  onChange={(e) =>
                    setForm({ ...form, kelas: e.target.value })
                  }
                />

                {/* DROPDOWN */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 text-white flex justify-between"
                  >
                    {form.hadir || "Pilih Kehadiran"}
                    <span>▼</span>
                  </button>

                  {openDropdown && (
                    <div className="absolute w-full mt-2 bg-[#0c3c78] border border-white/10 rounded-2xl overflow-hidden z-50 backdrop-blur-xl">

                      {["Hadir", "Tidak Hadir"].map((item) => (
                        <div
                          key={item}
                          onClick={() => {
                            setForm({
                              ...form,
                              hadir: item as any,
                            });

                            setOpenDropdown(false);
                          }}
                          className="p-4 hover:bg-white/10 text-white cursor-pointer transition"
                        >
                          {item}
                        </div>
                      ))}

                    </div>
                  )}
                </div>

                <textarea
                  placeholder="Pesan"
                  className="w-full p-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-white/40 outline-none"
                  value={form.pesan}
                  onChange={(e) =>
                    setForm({ ...form, pesan: e.target.value })
                  }
                />

                <div className="flex gap-3 pt-2">

                  <button
                    onClick={() => setStep("intro")}
                    className="flex-1 border border-yellow-300 text-yellow-300 py-3 rounded-full font-semibold"
                  >
                    Kembali
                  </button>

                  <button
                    onClick={handleSubmit}
                    className="flex-1 bg-gradient-to-r from-yellow-300 to-yellow-400 text-[#062b67] py-3 rounded-full font-bold shadow-lg"
                  >
                    Kirim
                  </button>

                </div>

              </div>
            )}

            {/* DONE */}
            {step === "done" && lastSaved && (
              <div className="relative overflow-hidden rounded-[32px] border border-yellow-300/20 bg-white/5 backdrop-blur-xl p-6 shadow-[0_0_40px_rgba(255,215,0,0.06)] text-center">

                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-yellow-300/5 blur-3xl" />

                <h2 className="text-3xl font-serif text-white">
                  Terima Kasih!
                </h2>

                <p className="text-white/60 mt-3">
                  Konfirmasi berhasil disimpan
                </p>

                {lastSaved.hadir === "Hadir" && (
                  <div className="mt-6 bg-white p-4 rounded-2xl inline-block shadow-xl">

                    <QRCodeCanvas
                      id="qr-code"
                      value={`${lastSaved.id}-${lastSaved.nama}`}
                      size={200}
                    />

                    <button
                      onClick={downloadQR}
                      className="mt-4 w-full bg-[#062b67] text-white py-3 rounded-xl font-semibold"
                    >
                      Download QR PNG
                    </button>

                  </div>
                )}

                <button
                  onClick={() => setStep("form")}
                  className="mt-6 px-6 py-3 border border-yellow-300 text-yellow-300 rounded-full font-semibold"
                >
                  Update Konfirmasi
                </button>

              </div>
            )}

            {/* LIST TAMU */}
            <div className="space-y-4">

              {dataTamu.map((item) => (
                <div
                  key={item.id}
                  className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-xl p-5"
                >

                  <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-yellow-300/5 blur-3xl" />

                  <div className="flex justify-between items-start">

                    <div>
                      <p className="text-white font-semibold text-lg">
                        {item.nama}
                      </p>

                      <p className="text-yellow-300 text-sm mt-1">
                        {item.hadir}
                      </p>
                    </div>

                    <button
                      onClick={() => handleEdit(item)}
                      className="text-xs text-yellow-300 border border-yellow-300/30 px-3 py-1 rounded-full"
                    >
                      Edit
                    </button>

                  </div>

                  {item.kelas && (
                    <p className="text-white/50 text-sm mt-3">
                      {item.kelas}
                    </p>
                  )}

                  {item.pesan && (
                    <p className="text-white/70 text-sm mt-2 leading-6">
                      {item.pesan}
                    </p>
                  )}

                </div>
              ))}

            </div>

          </div>

        </div>

      </main>

      <BottomNav />
    </>
  );
}