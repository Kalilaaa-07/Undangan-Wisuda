"use client";

import { useRef, useState } from "react";
import BottomNav from "@/components/BottonNav";

/* ===== DATA AWAL ===== */
const initialPhotos = [
  "/rpl3-kelas.png",
  "/rpl6-kelas.png",
  "/kel1.JPG",
  "/kel2.JPG",
];

export default function GalleryPage() {
  const [photos, setPhotos] = useState<string[]>(initialPhotos);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  /* ===== TAMBAH FOTO ===== */
  const handleAddPhoto = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;

    if (!files) return;

    const newPhotos = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );

    setPhotos((prev) => [...prev, ...newPhotos]);
  };

  return (
    <>
      <main className="min-h-screen bg-[#0f3d82] px-4 pb-28">

        {/* HEADER */}
        <div className="text-center pt-10 mb-8">
          <p className="text-yellow-300/70 text-xs tracking-[0.3em]">
            LUMINEX · ANGKATAN 32
          </p>

          <h1 className="text-4xl font-serif text-white mt-2">
            Our Memories
          </h1>

          <div className="w-16 h-[2px] bg-yellow-300 mx-auto mt-4" />
        </div>

        {/* BUTTON TAMBAH FOTO */}
        <div className="max-w-6xl mx-auto mb-6 flex justify-end">
          <button
            onClick={() => fileInputRef.current?.click()}
            className="bg-yellow-300 text-black px-5 py-2 rounded-xl font-semibold hover:scale-105 transition"
          >
            + Tambah Foto
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

        {/* GALLERY FOTO */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">

          {photos.map((img, i) => (
            <div
              key={i}
              onClick={() => setSelectedImage(img)}
              className="group relative overflow-hidden rounded-2xl cursor-pointer border border-white/10 bg-black/20"
            >
              <img
                src={img}
                className="w-full h-44 object-cover group-hover:scale-110 transition duration-300"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            </div>
          ))}

        </div>

        {/* JIKA BELUM ADA FOTO */}
        {photos.length === 0 && (
          <div className="text-center text-white/70 mt-20">
            Belum ada foto
          </div>
        )}

        {/* MODAL PREVIEW */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <img
              src={selectedImage}
              className="max-w-full max-h-full rounded-2xl"
            />
          </div>
        )}

      </main>

      <BottomNav />
    </>
  );
}