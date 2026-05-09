"use client";

import { useEffect, useState } from "react";
import { Check, Download, Pencil, Sparkles, ChevronDown, ArrowLeft, Send } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import BottomNav from "@/components/BottonNav";

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
  const [form, setForm] = useState<FormType>({ nama: "", kelas: "", hadir: "", pesan: "" });
  const [dataTamu, setDataTamu] = useState<Tamu[]>([]);
  const [editId, setEditId] = useState<number | null>(null);
  const [lastSaved, setLastSaved] = useState<Tamu | null>(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const [focused, setFocused] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("rsvp-data");
    if (saved) setDataTamu(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("rsvp-data", JSON.stringify(dataTamu));
  }, [dataTamu]);

  const downloadQR = () => {
    const canvas = document.getElementById("qr-code") as HTMLCanvasElement;
    if (!canvas) return;
    const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = `QR-${lastSaved?.nama || "tamu"}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = () => {
    if (!form.nama || !form.hadir) {
      alert("Nama dan kehadiran wajib diisi!");
      return;
    }
    const newData: Tamu = { ...form, id: editId ?? Date.now(), waktu: new Date().toLocaleString() };
    if (editId) {
      setDataTamu((prev) => prev.map((item) => (item.id === editId ? newData : item)));
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
      <main className="relative min-h-screen overflow-hidden bg-[#050f20] pb-36 text-white">

        {/* ===== BACKGROUND ===== */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(ellipse at 50% 0%, #0d3470 0%, #071840 45%, #050f20 100%)",
          }}
        />

        {/* ===== TOP GOLD LINE ===== */}
        <div
          className="absolute top-0 left-0 right-0 z-[3] h-px"
          style={{ background: "linear-gradient(to right, transparent, rgba(255,215,0,0.7), transparent)" }}
        />

        {/* ===== AMBIENT GLOW ===== */}
        <div
          className="absolute left-1/2 top-0 z-[1] h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/4 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,215,0,0.07) 0%, rgba(20,80,200,0.08) 50%, transparent 75%)" }}
        />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 mx-auto max-w-md px-4 pt-12">

          {/* ===== HEADER ===== */}
          <div className="text-center">

            {/* badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-yellow-400/5 px-4 py-1.5 backdrop-blur-xl"
              style={{ letterSpacing: "0.32em" }}
            >
              <span className="text-yellow-400 text-[9px]">✦</span>
              <span className="text-[9px] text-yellow-300/80">LUMINEX · ANGKATAN 32</span>
              <span className="text-yellow-400 text-[9px]">✦</span>
            </div>

            {/* title */}
            <div className="relative mt-6 inline-block">
              <h1
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(64px, 16vw, 100px)",
                  fontWeight: 900,
                  lineHeight: 1,
                  letterSpacing: "0.12em",
                  color: "transparent",
                  backgroundImage: "linear-gradient(160deg, #ffffff 10%, #e8d68a 45%, #ffd700 60%, #fff8e0 90%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  filter: "drop-shadow(0 0 40px rgba(255,215,0,0.2))",
                }}
              >
                RSVP
              </h1>
              {/* underline accent */}
              <div
                className="absolute -bottom-1 left-0 right-0 h-px"
                style={{ background: "linear-gradient(to right, transparent, rgba(255,215,0,0.6), transparent)" }}
              />
            </div>

            <p
              className="mt-4 text-sm text-white/50"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(13px,2vw,15px)", letterSpacing: "0.05em" }}
            >
              Konfirmasi Kehadiran Wisuda Angkatan 32
            </p>

            <GoldDivider />
          </div>

          {/* ===== STEP: INTRO ===== */}
          {step === "intro" && (
            <div className="animate-fadein">
              <LuxCard>
                {/* decorative top ornament */}
                <div className="mb-6 flex justify-center">
                  <div className="relative flex h-20 w-20 items-center justify-center">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: "radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)",
                        animation: "pulse 3s ease-in-out infinite",
                      }}
                    />
                    <div
                      className="absolute inset-0 rounded-full border border-yellow-400/20"
                      style={{ animation: "spin-slow 20s linear infinite" }}
                    />
                    <Sparkles size={28} className="text-yellow-300 relative z-10" />
                  </div>
                </div>

                <h2
                  className="text-center text-white"
                  style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(20px,4vw,26px)", letterSpacing: "0.1em" }}
                >
                  Konfirmasi Kehadiran
                </h2>

                <p
                  className="mt-4 text-center leading-8 text-white/55"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(14px,2.2vw,16px)" }}
                >
                  Kami mengundang Anda untuk hadir dalam malam perayaan wisuda yang penuh cahaya dan kenangan.
                </p>

                <GoldDivider compact />

                <div className="flex justify-center">
                  <button
                    onClick={() => setStep("form")}
                    className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-8 py-3.5 text-sm font-bold text-[#050f20] transition-all active:scale-95"
                    style={{
                      background: "linear-gradient(135deg, #ffd700 0%, #f0c000 50%, #ffd700 100%)",
                      boxShadow: "0 0 0 1px rgba(255,215,0,0.3), 0 8px 30px rgba(255,215,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)",
                    }}
                  >
                    <span
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ background: "linear-gradient(135deg, #ffe040 0%, #ffd000 100%)" }}
                    />
                    <Sparkles size={16} className="relative" />
                    <span className="relative" style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.1em" }}>
                      Konfirmasi Sekarang
                    </span>
                  </button>
                </div>

                {dataTamu.length > 0 && (
                  <p className="mt-5 text-center text-[11px] text-white/30" style={{ letterSpacing: "0.2em" }}>
                    {dataTamu.length} konfirmasi telah masuk
                  </p>
                )}
              </LuxCard>
            </div>
          )}

          {/* ===== STEP: FORM ===== */}
          {step === "form" && (
            <div className="animate-fadein">
              <LuxCard>

                <button
                  onClick={() => setStep("intro")}
                  className="mb-6 inline-flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors"
                  style={{ letterSpacing: "0.15em" }}
                >
                  <ArrowLeft size={13} />
                  KEMBALI
                </button>

                <h2
                  className="mb-6 text-white"
                  style={{ fontFamily: "'Cinzel', serif", fontSize: "clamp(16px,3.5vw,20px)", letterSpacing: "0.12em" }}
                >
                  {editId ? "Update Konfirmasi" : "Isi Formulir"}
                </h2>

                <div className="space-y-4">

                  {/* Nama */}
                  <FloatingInput
                    label="Nama Lengkap"
                    value={form.nama}
                    onChange={(v) => setForm({ ...form, nama: v })}
                    focused={focused === "nama"}
                    onFocus={() => setFocused("nama")}
                    onBlur={() => setFocused("")}
                  />

                  {/* Kelas */}
                  <FloatingInput
                    label="Kelas"
                    value={form.kelas}
                    onChange={(v) => setForm({ ...form, kelas: v })}
                    focused={focused === "kelas"}
                    onFocus={() => setFocused("kelas")}
                    onBlur={() => setFocused("")}
                  />

                  {/* Kehadiran dropdown */}
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setOpenDropdown(!openDropdown)}
                      className="flex w-full items-center justify-between px-5 py-4 text-sm transition-all"
                      style={{
                        borderRadius: 16,
                        border: openDropdown || form.hadir
                          ? "1px solid rgba(255,215,0,0.4)"
                          : "1px solid rgba(255,255,255,0.1)",
                        background: "rgba(255,255,255,0.05)",
                        color: form.hadir ? "#fff" : "rgba(255,255,255,0.35)",
                      }}
                    >
                      <span style={{ fontFamily: form.hadir ? "'Cinzel', serif" : "inherit", letterSpacing: form.hadir ? "0.08em" : 0, fontSize: form.hadir ? 13 : 14 }}>
                        {form.hadir || "Pilih Kehadiran"}
                      </span>
                      <ChevronDown
                        size={16}
                        className="text-yellow-400/60 transition-transform"
                        style={{ transform: openDropdown ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </button>

                    {openDropdown && (
                      <div
                        className="absolute z-50 mt-2 w-full overflow-hidden backdrop-blur-xl"
                        style={{
                          borderRadius: 16,
                          border: "1px solid rgba(255,215,0,0.2)",
                          background: "rgba(7,24,64,0.96)",
                          boxShadow: "0 20px 40px rgba(0,0,0,0.5)",
                        }}
                      >
                        {["Hadir", "Tidak Hadir"].map((item, i) => (
                          <div
                            key={item}
                            onClick={() => { setForm({ ...form, hadir: item as any }); setOpenDropdown(false); }}
                            className="flex cursor-pointer items-center gap-3 px-5 py-4 transition-colors hover:bg-white/5"
                            style={{ borderBottom: i === 0 ? "1px solid rgba(255,255,255,0.05)" : "none" }}
                          >
                            <span
                              className="flex h-5 w-5 items-center justify-center rounded-full border"
                              style={{ borderColor: item === "Hadir" ? "rgba(255,215,0,0.4)" : "rgba(255,100,100,0.4)" }}
                            >
                              {item === "Hadir"
                                ? <span className="h-2 w-2 rounded-full bg-yellow-400" />
                                : <span className="h-2 w-2 rounded-full bg-red-400/70" />
                              }
                            </span>
                            <span
                              className="text-sm text-white"
                              style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.08em", fontSize: 13 }}
                            >
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Pesan */}
                  <div className="relative">
                    <textarea
                      placeholder=" "
                      value={form.pesan}
                      onChange={(e) => setForm({ ...form, pesan: e.target.value })}
                      onFocus={() => setFocused("pesan")}
                      onBlur={() => setFocused("")}
                      rows={4}
                      className="w-full resize-none px-5 pt-6 pb-3 text-sm text-white outline-none placeholder-transparent transition-all"
                      style={{
                        borderRadius: 16,
                        border: focused === "pesan" ? "1px solid rgba(255,215,0,0.4)" : "1px solid rgba(255,255,255,0.1)",
                        background: "rgba(255,255,255,0.05)",
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: 15,
                        lineHeight: 1.8,
                      }}
                    />
                    <label
                      className="pointer-events-none absolute left-5 text-white/35 transition-all"
                      style={{
                        top: form.pesan || focused === "pesan" ? 8 : "50%",
                        transform: form.pesan || focused === "pesan" ? "translateY(0) scale(0.8)" : "translateY(-50%) scale(1)",
                        transformOrigin: "left",
                        fontSize: 13,
                        letterSpacing: "0.05em",
                        color: focused === "pesan" ? "rgba(255,215,0,0.6)" : undefined,
                      }}
                    >
                      Pesan &amp; Doa
                    </label>
                  </div>

                  {/* Submit button */}
                  <div className="pt-2">
                    <button
                      onClick={handleSubmit}
                      className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-full py-4 font-bold transition-all active:scale-[0.98]"
                      style={{
                        background: "linear-gradient(135deg, #ffd700 0%, #f0c000 50%, #ffd700 100%)",
                        boxShadow: "0 0 0 1px rgba(255,215,0,0.3), 0 8px 30px rgba(255,215,0,0.25)",
                        color: "#050f20",
                      }}
                    >
                      <span
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                        style={{ background: "linear-gradient(135deg, #ffe040 0%, #ffd000 100%)" }}
                      />
                      <Send size={16} className="relative" />
                      <span className="relative" style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.12em", fontSize: 13 }}>
                        {editId ? "SIMPAN PERUBAHAN" : "KIRIM KONFIRMASI"}
                      </span>
                    </button>
                  </div>

                </div>
              </LuxCard>
            </div>
          )}

          {/* ===== STEP: DONE ===== */}
          {step === "done" && lastSaved && (
            <div className="animate-fadein">
              <LuxCard>
                <div className="flex flex-col items-center text-center">

                  {/* success icon */}
                  <div className="relative mb-6">
                    <div
                      className="absolute inset-0 rounded-full blur-xl"
                      style={{ background: "radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)" }}
                    />
                    <div
                      className="relative flex h-20 w-20 items-center justify-center rounded-full border border-yellow-400/30"
                      style={{ background: "rgba(255,215,0,0.08)" }}
                    >
                      <Check size={32} className="text-yellow-300" strokeWidth={2.5} />
                    </div>
                  </div>

                  <p className="text-[10px] tracking-[0.45em] text-yellow-400/60 uppercase">Berhasil Tersimpan</p>

                  <h2
                    className="mt-3 text-white"
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "clamp(32px,8vw,52px)",
                      fontWeight: 900,
                      letterSpacing: "0.06em",
                      lineHeight: 1.1,
                    }}
                  >
                    Terima<br />Kasih
                  </h2>

                  <p
                    className="mt-3 max-w-[260px] leading-7 text-white/45"
                    style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 15 }}
                  >
                    Konfirmasi kehadiran Anda telah kami terima dengan baik.
                  </p>

                  {/* kehadiran pill */}
                  <div
                    className="mt-5 inline-flex items-center gap-2 rounded-full px-5 py-2"
                    style={{
                      background: lastSaved.hadir === "Hadir"
                        ? "rgba(255,215,0,0.1)" : "rgba(255,100,100,0.08)",
                      border: lastSaved.hadir === "Hadir"
                        ? "1px solid rgba(255,215,0,0.3)" : "1px solid rgba(255,100,100,0.25)",
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: lastSaved.hadir === "Hadir" ? "#ffd700" : "#ff6464" }}
                    />
                    <span
                      className="text-xs"
                      style={{
                        fontFamily: "'Cinzel', serif",
                        letterSpacing: "0.12em",
                        color: lastSaved.hadir === "Hadir" ? "#ffd700" : "#ff9090",
                        fontSize: 11,
                      }}
                    >
                      {lastSaved.hadir}
                    </span>
                  </div>

                  {/* QR code */}
                  {lastSaved.hadir === "Hadir" && (
                    <div className="mt-8 w-full">
                      <p className="mb-4 text-[10px] tracking-[0.35em] text-white/30 uppercase">E-Ticket QR Code</p>
                      <div
                        className="relative overflow-hidden rounded-3xl p-6"
                        style={{
                          background: "#fff",
                          boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,215,0,0.15)",
                        }}
                      >
                        {/* corner decorations */}
                        {["top-3 left-3", "top-3 right-3", "bottom-3 left-3", "bottom-3 right-3"].map((pos, i) => (
                          <div
                            key={i}
                            className={`absolute ${pos} h-4 w-4`}
                            style={{
                              borderTop: i < 2 ? "2px solid rgba(255,215,0,0.6)" : "none",
                              borderBottom: i >= 2 ? "2px solid rgba(255,215,0,0.6)" : "none",
                              borderLeft: i % 2 === 0 ? "2px solid rgba(255,215,0,0.6)" : "none",
                              borderRight: i % 2 === 1 ? "2px solid rgba(255,215,0,0.6)" : "none",
                            }}
                          />
                        ))}

                        <div className="flex justify-center">
                          <QRCodeCanvas
                            id="qr-code"
                            value={`${lastSaved.id}-${lastSaved.nama}`}
                            size={200}
                            fgColor="#050f20"
                          />
                        </div>

                        <div className="mt-4 border-t border-dashed border-gray-200 pt-4">
                          <p className="text-center text-[10px] tracking-widest text-gray-400 uppercase">
                            {lastSaved.nama}
                          </p>
                          <p className="mt-0.5 text-center text-[9px] text-gray-300">
                            LUMINEX · SMK TELKOM MALANG · 2026
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={downloadQR}
                        className="mt-4 flex w-full items-center justify-center gap-3 rounded-full border border-yellow-400/25 bg-yellow-400/5 py-3.5 text-sm font-semibold text-yellow-300 transition-all hover:bg-yellow-400/10 active:scale-[0.98]"
                        style={{ letterSpacing: "0.1em", fontFamily: "'Cinzel', serif", fontSize: 12 }}
                      >
                        <Download size={15} />
                        DOWNLOAD QR
                      </button>
                    </div>
                  )}

                  <GoldDivider compact />

                  <button
                    onClick={() => setStep("form")}
                    className="inline-flex items-center gap-2 text-xs text-white/35 hover:text-white/60 transition-colors"
                    style={{ letterSpacing: "0.2em" }}
                  >
                    <Pencil size={12} />
                    UPDATE KONFIRMASI
                  </button>

                </div>
              </LuxCard>
            </div>
          )}

          {/* ===== GUEST LIST ===== */}
          {dataTamu.length > 0 && (
            <div className="mt-8">
              <div className="mb-5 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-yellow-400/25" />
                <p className="text-[10px] tracking-[0.4em] text-white/30 uppercase">Daftar Tamu</p>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-yellow-400/25" />
              </div>

              <div className="space-y-3">
                {dataTamu.map((item, idx) => (
                  <div
                    key={item.id}
                    className="overflow-hidden rounded-2xl border border-white/6 transition-all hover:border-yellow-400/15"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                      animationDelay: `${idx * 0.05}s`,
                    }}
                  >
                    <div className="flex items-center justify-between gap-4 px-5 py-4">
                      <div className="flex items-center gap-3 min-w-0">
                        {/* avatar number */}
                        <div
                          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-xs font-bold"
                          style={{
                            background: "rgba(255,215,0,0.1)",
                            border: "1px solid rgba(255,215,0,0.2)",
                            color: "#ffd700",
                            fontFamily: "'Cinzel', serif",
                          }}
                        >
                          {idx + 1}
                        </div>
                        <div className="min-w-0">
                          <p
                            className="truncate text-sm font-semibold text-white"
                            style={{ fontFamily: "'Cinzel', serif", letterSpacing: "0.04em", fontSize: 13 }}
                          >
                            {item.nama}
                          </p>
                          {item.kelas && (
                            <p className="mt-0.5 text-[11px] text-white/35">{item.kelas}</p>
                          )}
                        </div>
                      </div>

                      <div className="flex flex-shrink-0 items-center gap-2">
                        <span
                          className="rounded-full px-3 py-1 text-[10px]"
                          style={{
                            background: item.hadir === "Hadir" ? "rgba(255,215,0,0.1)" : "rgba(255,100,100,0.08)",
                            border: item.hadir === "Hadir" ? "1px solid rgba(255,215,0,0.25)" : "1px solid rgba(255,100,100,0.2)",
                            color: item.hadir === "Hadir" ? "#ffd700" : "#ff9090",
                            fontFamily: "'Cinzel', serif",
                            letterSpacing: "0.08em",
                          }}
                        >
                          {item.hadir}
                        </span>
                        <button
                          onClick={() => handleEdit(item)}
                          className="flex h-8 w-8 items-center justify-center rounded-full border border-white/8 text-white/30 transition-colors hover:border-yellow-400/25 hover:text-yellow-400/60"
                        >
                          <Pencil size={12} />
                        </button>
                      </div>
                    </div>

                    {item.pesan && (
                      <div
                        className="border-t border-white/5 px-5 py-3"
                        style={{ borderTopStyle: "dashed" }}
                      >
                        <p
                          className="text-xs leading-6 text-white/40 italic"
                          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 13 }}
                        >
                          "{item.pesan}"
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ===== FOOTER SPARKLES ===== */}
          <div className="mt-12 flex justify-center gap-3">
            {["✦", "✧", "⋆", "✧", "✦"].map((s, i) => (
              <span
                key={i}
                style={{
                  fontSize: 15,
                  color: i % 2 === 0 ? "#ffd700" : "#ffffff",
                  textShadow: "0 0 12px rgba(255,215,0,0.8)",
                  animation: `float 2.5s ease-in-out ${i * 0.2}s infinite`,
                  display: "inline-block",
                  opacity: 0.6,
                }}
              >
                {s}
              </span>
            ))}
          </div>

        </div>

        {/* ===== STYLES ===== */}
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700;900&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&display=swap");

          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
          }

          @keyframes fadein {
            from { opacity: 0; transform: translateY(12px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes pulse {
            0%, 100% { opacity: 0.5; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.08); }
          }

          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }

          .animate-fadein {
            animation: fadein 0.4s ease-out forwards;
          }
        `}</style>
      </main>

      <BottomNav />
    </>
  );
}

/* ===== LUXURY CARD ===== */
function LuxCard({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="overflow-hidden rounded-[28px] p-6"
      style={{
        background: "linear-gradient(160deg, rgba(255,255,255,0.07) 0%, rgba(255,255,255,0.025) 60%, rgba(13,52,112,0.15) 100%)",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), inset 0 -1px 0 rgba(255,215,0,0.05), 0 30px 60px rgba(0,0,0,0.4)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* top shimmer line */}
      <div
        className="absolute left-6 right-6 top-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,215,0,0.4), transparent)" }}
      />
      {children}
    </div>
  );
}

/* ===== FLOATING INPUT ===== */
function FloatingInput({
  label, value, onChange, focused, onFocus, onBlur,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  focused: boolean;
  onFocus: () => void;
  onBlur: () => void;
}) {
  return (
    <div className="relative">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder=" "
        className="w-full px-5 pt-6 pb-2 text-sm text-white outline-none placeholder-transparent transition-all"
        style={{
          borderRadius: 16,
          border: focused ? "1px solid rgba(255,215,0,0.45)" : "1px solid rgba(255,255,255,0.1)",
          background: "rgba(255,255,255,0.05)",
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 16,
        }}
      />
      <label
        className="pointer-events-none absolute left-5 transition-all"
        style={{
          top: value || focused ? 8 : "50%",
          transform: value || focused ? "translateY(0) scale(0.78)" : "translateY(-50%) scale(1)",
          transformOrigin: "left",
          fontSize: 13,
          letterSpacing: "0.05em",
          color: focused ? "rgba(255,215,0,0.65)" : "rgba(255,255,255,0.35)",
        }}
      >
        {label}
      </label>
    </div>
  );
}

/* ===== GOLD DIVIDER ===== */
function GoldDivider({ compact }: { compact?: boolean }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${compact ? "my-5" : "my-7"}`}>
      <div
        className={`h-px ${compact ? "w-12" : "w-20"}`}
        style={{ background: "linear-gradient(to right, transparent, rgba(255,215,0,0.6))" }}
      />
      <span style={{ color: "#ffd700", fontSize: 10, filter: "drop-shadow(0 0 4px rgba(255,215,0,0.8))" }}>◆</span>
      <div
        className={`h-px ${compact ? "w-12" : "w-20"}`}
        style={{ background: "linear-gradient(to left, transparent, rgba(255,215,0,0.6))" }}
      />
    </div>
  );
}
