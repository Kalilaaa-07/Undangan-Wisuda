"use client";

import { useEffect, useRef } from "react";

export default function GlobalMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.volume = 0.3;

    const startMusic = async () => {
      try {
        await audio.play();
      } catch (err) {
        console.log("Autoplay gagal");
      }
    };

    // coba autoplay
    startMusic();

    // fallback pas user klik dimana aja
    document.addEventListener("click", startMusic);

    return () => {
      document.removeEventListener("click", startMusic);
    };
  }, []);

  return (
    <audio ref={audioRef} loop autoPlay hidden>
      <source src="/music1.mp3" type="audio/mpeg" />
    </audio>
  );
}