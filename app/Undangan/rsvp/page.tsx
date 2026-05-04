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

/* ===== COMPONENT ===== */
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

  /* ===== LOAD STORAGE ===== */
  useEffect(() => {
    const saved = localStorage.getItem("rsvp-data");
    if (saved) setDataTamu(JSON.parse(saved));
  }, []);

  /* ===== SAVE STORAGE ===== */
  useEffect(() => {
    localStorage.setItem("rsvp-data", JSON.stringify(dataTamu));
  }, [dataTamu]);

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

    setLastSaved(newData); // simpan untuk QR
    setEditId(null);
    setStep("done");
  };

  /* ===== EDIT ===== */
  const handleEdit = (item: Tamu) => {
    setForm({
      nama: item.nama,
      kelas: item.kelas,
      hadir: item.hadir,
      pesan: item.pesan,
    });
    setEditId(item.id);
    setStep("form");
  };

  return (
    <>
      <main className="min-h-screen bg-[#0c3c78] flex flex-col items-center px-4 pb-28">

        {/* HEADER */}
        <div className="text-center mt-10 mb-6">
          <p className="text-yellow-300/70 text-xs tracking-[0.3em]">
            LUMINEX · ANGKATAN 32
          </p>
          <h1 className="text-3xl font-serif text-white mt-2">
            Konfirmasi Hadir
          </h1>
          <div className="w-12 h-[2px] bg-yellow-300 mx-auto mt-4" />
        </div>

        {/* INTRO */}
        {step === "intro" && (
          <div className="w-full max-w-md bg-gradient-to-br from-[#0a2f60] to-[#0e4a96] border border-yellow-300/20 p-6 rounded-2xl text-center">
            <p className="text-white/60 text-sm mb-4">
              Silakan konfirmasi kehadiran Anda
            </p>

            <button
              onClick={() => setStep("form")}
              className="bg-yellow-300 text-[#0c3c78] px-6 py-3 rounded-full font-semibold"
            >
              KONFIRMASI
            </button>
          </div>
        )}

        {/* FORM */}
        {step === "form" && (
          <div className="w-full max-w-md bg-gradient-to-br from-[#0a2f60] to-[#0e4a96] border border-yellow-300/20 p-6 rounded-2xl space-y-3">

            <input
              placeholder="Nama"
              className="w-full p-3 rounded-xl bg-white/10 text-white"
              value={form.nama}
              onChange={(e) =>
                setForm({ ...form, nama: e.target.value })
              }
            />

            <input
              placeholder="Kelas"
              className="w-full p-3 rounded-xl bg-white/10 text-white"
              value={form.kelas}
              onChange={(e) =>
                setForm({ ...form, kelas: e.target.value })
              }
            />

            <select
              className="w-full p-3 rounded-xl bg-white/10 text-white"
              value={form.hadir}
              onChange={(e) =>
                setForm({
                  ...form,
                  hadir: e.target.value as FormType["hadir"],
                })
              }
            >
              <option value="">Pilih Kehadiran</option>
              <option value="Hadir">Hadir</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
            </select>

            <textarea
              placeholder="Pesan"
              className="w-full p-3 rounded-xl bg-white/10 text-white"
              value={form.pesan}
              onChange={(e) =>
                setForm({ ...form, pesan: e.target.value })
              }
            />

            <div className="flex gap-2">
              <button
                onClick={() => setStep("intro")}
                className="flex-1 border border-yellow-300 text-yellow-300 py-2 rounded-full"
              >
                Kembali
              </button>

              <button
                onClick={handleSubmit}
                className="flex-1 bg-yellow-300 text-[#0c3c78] py-2 rounded-full font-semibold"
              >
                Kirim
              </button>
            </div>
          </div>
        )}

        {/* DONE */}
        {step === "done" && lastSaved && (
          <div className="w-full max-w-md bg-gradient-to-br from-[#0a2f60] to-[#0e4a96] border border-yellow-300/20 p-6 rounded-2xl text-center">

            <h2 className="text-xl text-white font-serif">
              Terima Kasih!
            </h2>

            <p className="text-white/60 mt-2">
              Konfirmasi berhasil
            </p>

            {/* QR hanya jika hadir */}
            {lastSaved.hadir === "Hadir" && (
              <div className="mt-5 bg-white p-4 rounded-xl inline-block">
                <QRCodeCanvas
                  value={`${lastSaved.id}-${lastSaved.nama}`}
                  size={160}
                />
                <p className="text-xs mt-2 text-gray-600">
                  Tunjukkan saat masuk
                </p>
              </div>
            )}

            <button
              onClick={() => setStep("form")}
              className="mt-5 px-6 py-2 border border-yellow-300 text-yellow-300 rounded-full"
            >
              Update Konfirmasi
            </button>
          </div>
        )}

        {/* LIST TAMU */}
        <div className="w-full max-w-md mt-8 space-y-3">
          {dataTamu.map((item) => (
            <div
              key={item.id}
              className="bg-white/10 p-4 rounded-xl border border-white/10"
            >
              <div className="flex justify-between items-center">
                <p className="text-white font-semibold">
                  {item.nama}
                </p>

                <button
                  onClick={() => handleEdit(item)}
                  className="text-xs text-yellow-300"
                >
                  Edit
                </button>
              </div>

              <p className="text-yellow-300 text-xs">
                {item.hadir}
              </p>

              <p className="text-white/60 text-sm mt-1">
                {item.pesan}
              </p>

              <p className="text-white/40 text-xs mt-2">
                {item.waktu}
              </p>
            </div>
          ))}
        </div>

      </main>

      <BottomNav />
    </>
  );
}