"use client";

import { useEffect, useState } from "react";

import {
  Check,
  Download,
  Pencil,
  Sparkles,
} from "lucide-react";

import { QRCodeCanvas } from "qrcode.react";

import BottomNav from "@/components/BottonNav"

/* ===== TYPES ===== */
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
  const [step, setStep] = useState<
    "intro" | "form" | "done"
  >("intro");

  const [form, setForm] = useState<FormType>({
    nama: "",
    kelas: "",
    hadir: "",
    pesan: "",
  });

  const [dataTamu, setDataTamu] = useState<
    Tamu[]
  >([]);

  const [editId, setEditId] = useState<
    number | null
  >(null);

  const [lastSaved, setLastSaved] =
    useState<Tamu | null>(null);

  const [openDropdown, setOpenDropdown] =
    useState(false);

  /* ===== STORAGE ===== */
  useEffect(() => {
    const saved =
      localStorage.getItem("rsvp-data");

    if (saved) {
      setDataTamu(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "rsvp-data",
      JSON.stringify(dataTamu)
    );
  }, [dataTamu]);

  /* ===== DOWNLOAD QR ===== */
  const downloadQR = () => {
    const canvas = document.getElementById(
      "qr-code"
    ) as HTMLCanvasElement;

    if (!canvas) return;

    const pngUrl = canvas
      .toDataURL("image/png")
      .replace(
        "image/png",
        "image/octet-stream"
      );

    const link =
      document.createElement("a");

    link.href = pngUrl;

    link.download = `QR-${
      lastSaved?.nama || "tamu"
    }.png`;

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
  };

  /* ===== SUBMIT ===== */
  const handleSubmit = () => {
    if (!form.nama || !form.hadir) {
      alert(
        "Nama dan kehadiran wajib diisi!"
      );

      return;
    }

    const newData: Tamu = {
      ...form,
      id: editId ?? Date.now(),
      waktu: new Date().toLocaleString(),
    };

    if (editId) {
      setDataTamu((prev) =>
        prev.map((item) =>
          item.id === editId
            ? newData
            : item
        )
      );
    } else {
      setDataTamu((prev) => [
        newData,
        ...prev,
      ]);
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
      <main className="relative min-h-screen overflow-hidden bg-[#071f3d] pb-32 text-white">

        {/* ===== BACKGROUND ===== */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(ellipse at center, #1450a8 0%, #0c3c78 40%, #071f3d 100%)",
          }}
        />

        {/* ===== GLOW ===== */}
        <div
          className="absolute left-1/2 top-24 z-[1] h-80 w-80 -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,0,0.18) 0%, transparent 70%)",
          }}
        />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 mx-auto max-w-lg px-4 pt-10">

          {/* ===== HEADER ===== */}
          <div className="text-center">

            <p
              className="text-[10px] text-yellow-300/70"
              style={{
                letterSpacing: "0.45em",
                fontFamily: "serif",
              }}
            >
              ✦ LUMINEX · ANGKATAN 32 ✦
            </p>

            <h1
              className="mt-4 text-white"
              style={{
                fontFamily:
                  "'Playfair Display', serif",
                fontSize:
                  "clamp(52px, 10vw, 88px)",
                fontWeight: 900,
                lineHeight: 0.95,
                textShadow:
                  "0 0 30px rgba(255,255,255,0.18)",
              }}
            >
              RSVP
            </h1>

            <p className="mt-5 text-sm leading-relaxed text-white/70">
              Konfirmasi Kehadiran
              <br />
              Wisuda Angkatan 32
            </p>

            <Divider />
          </div>

          {/* ===== CONTENT ===== */}
          <div className="mt-8 flex flex-col gap-6">

            {/* ===== INTRO ===== */}
            {step === "intro" && (
              <GlassCard>

                <p className="text-center text-sm leading-7 text-white/70">
                  Silakan konfirmasi
                  kehadiran Anda pada acara
                  wisuda LUMINEX Angkatan
                  32.
                </p>

                <div className="mt-6 flex justify-center">

                  <button
                    onClick={() =>
                      setStep("form")
                    }
                    className="inline-flex items-center gap-3 rounded-full border border-yellow-300/30 bg-yellow-300 px-6 py-3 text-sm font-bold text-[#071f3d] shadow-2xl transition active:scale-95"
                  >

                    <Sparkles size={18} />

                    Konfirmasi

                  </button>

                </div>

              </GlassCard>
            )}

            {/* ===== FORM ===== */}
            {step === "form" && (
              <GlassCard>

                <div className="space-y-4">

                  <input
                    placeholder="Nama"
                    value={form.nama}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        nama:
                          e.target.value,
                      })
                    }
                    className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none placeholder:text-white/40"
                  />

                  <input
                    placeholder="Kelas"
                    value={form.kelas}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        kelas:
                          e.target.value,
                      })
                    }
                    className="w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none placeholder:text-white/40"
                  />

                  {/* ===== DROPDOWN ===== */}
                  <div className="relative">

                    <button
                      type="button"
                      onClick={() =>
                        setOpenDropdown(
                          !openDropdown
                        )
                      }
                      className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-white/10 p-4 text-white"
                    >
                      {form.hadir ||
                        "Pilih Kehadiran"}

                      <span>▼</span>
                    </button>

                    {openDropdown && (
                      <div className="absolute z-50 mt-2 w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c3c78] backdrop-blur-xl">

                        {[
                          "Hadir",
                          "Tidak Hadir",
                        ].map((item) => (
                          <div
                            key={item}
                            onClick={() => {
                              setForm({
                                ...form,
                                hadir:
                                  item as any,
                              });

                              setOpenDropdown(
                                false
                              );
                            }}
                            className="cursor-pointer p-4 text-white transition hover:bg-white/10"
                          >
                            {item}
                          </div>
                        ))}

                      </div>
                    )}

                  </div>

                  <textarea
                    placeholder="Pesan"
                    value={form.pesan}
                    onChange={(e) =>
                      setForm({
                        ...form,
                        pesan:
                          e.target.value,
                      })
                    }
                    className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-white/10 p-4 text-white outline-none placeholder:text-white/40"
                  />

                  {/* ===== BUTTONS ===== */}
                  <div className="flex gap-3 pt-2">

                    <button
                      onClick={() =>
                        setStep("intro")
                      }
                      className="flex-1 rounded-full border border-yellow-300/40 py-3 font-semibold text-yellow-300"
                    >
                      Kembali
                    </button>

                    <button
                      onClick={
                        handleSubmit
                      }
                      className="flex-1 rounded-full bg-yellow-300 py-3 font-bold text-[#071f3d]"
                    >
                      Kirim
                    </button>

                  </div>

                </div>

              </GlassCard>
            )}

            {/* ===== DONE ===== */}
            {step === "done" &&
              lastSaved && (
                <GlassCard>

                  <div className="flex flex-col items-center text-center">

                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-yellow-300/30 bg-yellow-300/10">

                      <Check
                        size={30}
                        className="text-yellow-300"
                      />

                    </div>

                    <h2
                      className="mt-5 text-white"
                      style={{
                        fontFamily:
                          "'Playfair Display', serif",
                        fontSize:
                          "clamp(36px, 7vw, 56px)",
                      }}
                    >
                      Terima
                      <br />
                      Kasih
                    </h2>

                    <p className="mt-3 text-sm text-white/70">
                      Konfirmasi berhasil
                      disimpan
                    </p>

                    {lastSaved.hadir ===
                      "Hadir" && (
                      <div className="mt-6 rounded-[28px] bg-white p-5 shadow-2xl">

                        <QRCodeCanvas
                          id="qr-code"
                          value={`${lastSaved.id}-${lastSaved.nama}`}
                          size={220}
                        />

                        <button
                          onClick={
                            downloadQR
                          }
                          className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#071f3d] px-5 py-3 text-sm font-bold text-white"
                        >

                          <Download size={18} />

                          Download QR

                        </button>

                      </div>
                    )}

                    <button
                      onClick={() =>
                        setStep("form")
                      }
                      className="mt-6 rounded-full border border-yellow-300/40 px-6 py-3 font-semibold text-yellow-300"
                    >
                      Update Konfirmasi
                    </button>

                  </div>

                </GlassCard>
              )}

            {/* ===== LIST ===== */}
            <div className="space-y-4">

              {dataTamu.map((item) => (
                <GlassCard key={item.id}>

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <h3 className="text-lg font-semibold text-white">
                        {item.nama}
                      </h3>

                      <p className="mt-1 text-sm text-yellow-300">
                        {item.hadir}
                      </p>

                    </div>

                    <button
                      onClick={() =>
                        handleEdit(item)
                      }
                      className="inline-flex items-center gap-2 rounded-full border border-yellow-300/30 px-4 py-2 text-xs text-yellow-300"
                    >

                      <Pencil size={14} />

                      Edit

                    </button>

                  </div>

                  {item.kelas && (
                    <p className="mt-4 text-sm text-white/50">
                      {item.kelas}
                    </p>
                  )}

                  {item.pesan && (
                    <p className="mt-3 text-sm leading-7 text-white/70">
                      {item.pesan}
                    </p>
                  )}

                </GlassCard>
              ))}

            </div>

            {/* ===== SPARKLES ===== */}
            <div className="mt-8 flex justify-center gap-4">

              {["✦", "✧", "⋆", "✧", "✦"].map(
                (s, i) => (
                  <span
                    key={i}
                    style={{
                      fontSize: 18,
                      textShadow:
                        "0 0 10px rgba(255,215,0,0.8)",
                      animation: `float 2.5s ease-in-out ${
                        i * 0.2
                      }s infinite`,
                      color:
                        i % 2 === 1
                          ? "#ffffff"
                          : "#ffd700",
                    }}
                  >
                    {s}
                  </span>
                )
              )}

            </div>

          </div>
        </div>

        {/* ===== STYLE ===== */}
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&display=swap");

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-8px);
            }
          }
        `}</style>
      </main>

      <BottomNav />
    </>
  );
}

/* ===== GLASS CARD ===== */
function GlassCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="overflow-hidden rounded-[30px] border border-yellow-300/20 p-6 backdrop-blur-xl"
      style={{
        background:
          "linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03))",
        boxShadow:
          "0 0 40px rgba(0,0,0,0.2)",
      }}
    >
      {children}
    </div>
  );
}

/* ===== DIVIDER ===== */
function Divider() {
  return (
    <div className="my-7 flex items-center justify-center gap-3">

      <div
        className="h-px w-20"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,215,0,0.7))",
        }}
      />

      <span className="text-xs text-yellow-400">
        ◆
      </span>

      <div
        className="h-px w-20"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(255,215,0,0.7))",
        }}
      />

    </div>
  );
}