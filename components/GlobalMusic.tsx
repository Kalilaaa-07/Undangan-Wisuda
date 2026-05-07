"use client";

import { useEffect, useRef, useState } from "react";

export default function GlobalMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startMusic = async () => {
      if (started) return;

      try {
        await audioRef.current?.play();
        setStarted(true);
      } catch (err) {
        console.log("Autoplay blocked");
      }
    };

    window.addEventListener("click", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
    };
  }, [started]);

  return (
    <>
      <audio
        ref={audioRef}
        src="/music/bgmusic.mp3"
        loop
      />

      {/* BUTTON MUSIC */}
      <button
        onClick={() => {
          if (audioRef.current?.paused) {
            audioRef.current.play();
          } else {
            audioRef.current?.pause();
          }
        }}
        className="fixed top-5 right-5 z-[9999]
        bg-white/10 backdrop-blur-md
        border border-white/20
        text-white px-4 py-2 rounded-full"
      >
        🎵
      </button>
    </>
  );
}