"use client";

import { useRef, useState } from "react";

import {
  ImagePlus,
  X,
} from "lucide-react";

import BottomNav from "@/components/BottonNav";

/* ===== DATA AWAL ===== */
const initialPhotos = [
  "/rpl3-kelas.png",
  "/rpl6-kelas.png",
  "/kel1.JPG",
  "/kel2.JPG",
];

export default function GalleryPage() {
  const [photos, setPhotos] =
    useState<string[]>(initialPhotos);

  const [selectedImage, setSelectedImage] =
    useState<string | null>(null);

  const fileInputRef =
    useRef<HTMLInputElement | null>(null);

  /* ===== TAMBAH FOTO ===== */
  const handleAddPhoto = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;

    if (!files) return;

    const newPhotos = Array.from(files).map(
      (file) => URL.createObjectURL(file)
    );

    setPhotos((prev) => [
      ...prev,
      ...newPhotos,
    ]);
  };

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#071f3d] px-4 pb-32">

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
          className="absolute left-1/2 top-32 z-[1] h-72 w-72 -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)",
          }}
        />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 mx-auto max-w-6xl pt-10">

          {/* ===== HEADER ===== */}
          <div className="mb-8 text-center">

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
              className="mt-3 text-white"
              style={{
                fontFamily:
                  "'Playfair Display', serif",
                fontSize:
                  "clamp(42px, 8vw, 72px)",
                fontWeight: 900,
                lineHeight: 1,
                textShadow:
                  "0 0 25px rgba(255,255,255,0.18)",
              }}
            >
              Our
              <br />
              Memories
            </h1>

            <p className="mt-4 text-sm text-white/70">
              Kenangan terbaik bersama
              LUMINEX
            </p>

            <Divider />
          </div>

          {/* ===== BUTTON ===== */}
          <div className="mx-auto mb-8 w-fit">

            <button
              onClick={() =>
                fileInputRef.current?.click()
              }
              className="inline-flex items-center gap-3 rounded-full border border-yellow-300/30 bg-yellow-300 px-6 py-3 text-sm font-bold text-[#071f3d] shadow-2xl transition active:scale-95"
            >
              <ImagePlus size={18} />

              Tambah Foto
            </button>


            <input
              type="file"
              multiple
              accept="image/*"
              ref={fileInputRef}
              onChange={handleAddPhoto}
              className="hidden"
            />

          </div>

          {/* ===== GALLERY ===== */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">

            {photos.map((img, i) => (
              <div
                key={i}
                onClick={() =>
                  setSelectedImage(img)
                }
                className="group relative cursor-pointer overflow-hidden rounded-[24px] border border-white/10 bg-white/5 backdrop-blur-md"
              >

                {/* IMAGE */}
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-black/0 transition duration-300 group-hover:bg-black/20" />

                {/* GLOW */}
                <div className="absolute inset-0 border border-yellow-300/0 transition duration-300 group-hover:border-yellow-300/30" />

              </div>
            ))}

          </div>

          {/* ===== EMPTY ===== */}
          {photos.length === 0 && (
            <div className="mt-20 text-center text-white/70">
              Belum ada foto
            </div>
          )}

          {/* ===== SPARKLES ===== */}
          <div className="mt-12 flex justify-center gap-4">

            {["✦", "✧", "⋆", "✧", "✦"].map(
              (s, i) => (
                <span
                  key={i}
                  style={{
                    fontSize: 18,
                    textShadow:
                      "0 0 10px rgba(255,215,0,0.8)",
                    animation: `float 2.5s ease-in-out ${i * 0.2
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

        {/* ===== MODAL ===== */}
        {selectedImage && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
            onClick={() =>
              setSelectedImage(null)
            }
          >

            {/* CLOSE BUTTON */}
            <button
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2 text-white backdrop-blur-md"
              onClick={() =>
                setSelectedImage(null)
              }
            >
              <X size={22} />
            </button>

            {/* IMAGE */}
            <img
              src={selectedImage}
              alt="Preview"
              className="max-h-[90vh] max-w-full rounded-3xl border border-white/10 shadow-2xl"
            />

          </div>
        )}

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

function Divider() {
  return (
    <div className="my-7 flex w-full items-center justify-center gap-3">

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