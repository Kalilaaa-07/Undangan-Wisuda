"use client";

import { useEffect, useRef } from "react";
import BottomNav from "@/components/BottonNav";


export default function OpeningPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animId = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    window.addEventListener("resize", resize);

    // ===== STARS =====
    const stars = Array.from({ length: 130 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.5 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.008 + 0.003,
    }));

    // ===== CONFETTI =====
    const confettiColors = [
      "#ffd700",
      "#ffffff",
      "#87ceeb",
      "#fffacd",
    ];

    const confetti = Array.from({ length: 35 }, () => ({
      x: Math.random(),
      y: Math.random(),
      w: Math.random() * 6 + 3,
      h: Math.random() * 10 + 4,
      color:
        confettiColors[
          Math.floor(Math.random() * confettiColors.length)
        ],
      rotation: Math.random() * 360,
      speed: Math.random() * 0.25 + 0.07,
      rotSpeed: (Math.random() - 0.5) * 4,
    }));

    // ===== SHOOTING STARS =====
    const shootingStars: {
      x: number;
      y: number;
      len: number;
      speed: number;
      progress: number;
    }[] = [];

    const spawnShooting = () => {
      if (
        Math.random() < 0.008 &&
        shootingStars.length < 3
      ) {
        shootingStars.push({
          x: Math.random() * 0.6,
          y: Math.random() * 0.35,
          len: Math.random() * 90 + 40,
          speed: Math.random() * 0.003 + 0.004,
          progress: 0,
        });
      }
    };

    const draw = () => {
      const W = canvas.width;
      const H = canvas.height;

      ctx.clearRect(0, 0, W, H);

      // ===== STARS =====
      stars.forEach((s) => {
        s.phase += s.speed;

        const alpha =
          0.25 + 0.75 * Math.abs(Math.sin(s.phase));

        ctx.beginPath();

        ctx.arc(
          s.x * W,
          s.y * H,
          s.r,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(255,255,255,${alpha})`;

        ctx.fill();
      });

      // ===== CONFETTI =====
      confetti.forEach((c) => {
        c.y += c.speed / 100;

        if (c.y > 1) {
          c.y = -0.02;
        }

        c.rotation += c.rotSpeed;

        ctx.save();

        ctx.translate(c.x * W, c.y * H);

        ctx.rotate((c.rotation * Math.PI) / 180);

        ctx.fillStyle = `${c.color}99`;

        ctx.fillRect(
          -c.w / 2,
          -c.h / 2,
          c.w,
          c.h
        );

        ctx.restore();
      });

      // ===== SHOOTING STARS =====
      spawnShooting();

      for (
        let i = shootingStars.length - 1;
        i >= 0;
        i--
      ) {
        const ss = shootingStars[i];

        ss.progress += ss.speed;

        if (ss.progress >= 1) {
          shootingStars.splice(i, 1);
          continue;
        }

        const sx =
          (ss.x + ss.progress * 0.45) * W;

        const sy =
          (ss.y + ss.progress * 0.18) * H;

        const gradient = ctx.createLinearGradient(
          sx - ss.len,
          sy - ss.len * 0.4,
          sx,
          sy
        );

        gradient.addColorStop(
          0,
          "rgba(255,215,0,0)"
        );

        gradient.addColorStop(
          1,
          `rgba(255,215,0,${1 - ss.progress})`
        );

        ctx.beginPath();

        ctx.moveTo(
          sx - ss.len,
          sy - ss.len * 0.4
        );

        ctx.lineTo(sx, sy);

        ctx.strokeStyle = gradient;

        ctx.lineWidth = 1.5;

        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);

      window.removeEventListener(
        "resize",
        resize
      );
    };
  }, []);

  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#071f3d]">
        {/* ===== CANVAS ===== */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0"
        />

        {/* ===== BACKGROUND ===== */}
        <div
          className="absolute inset-0 z-[1]"
          style={{
            background:
              "radial-gradient(ellipse at center, #1450a8 0%, #0c3c78 40%, #071f3d 100%)",
          }}
        />

        {/* ===== CENTER GLOW ===== */}
        <div
          className="absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: 260,
            height: 260,
            background:
              "radial-gradient(circle, rgba(255,215,0,0.18) 0%, rgba(100,180,255,0.08) 45%, transparent 75%)",
            animation:
              "lumipulse 4s ease-in-out infinite",
          }}
        />

        {/* ===== RINGS ===== */}
        {[260, 360, 470].map((size, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 z-[2] rounded-full"
            style={{
              width: size,
              height: size,
              marginLeft: -size / 2,
              marginTop: -size / 2,
              border: `1px solid rgba(255,215,0,${
                0.1 - i * 0.02
              })`,
              animation: `spin ${
                40 + i * 20
              }s linear infinite`,
            }}
          />
        ))}

        {/* ===== CORNERS ===== */}
        <CornerOrnament className="left-4 top-4" />
        <CornerOrnament className="right-4 top-4 scale-x-[-1]" />
        <CornerOrnament className="bottom-28 left-4 scale-y-[-1]" />
        <CornerOrnament className="bottom-28 right-4 scale-x-[-1] scale-y-[-1]" />

        {/* ===== CONTENT ===== */}
        <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pb-36 pt-14 text-center">
          {/* ===== LOGO ===== */}
          <img
            src="/telkom.png"
            alt="Logo Telkom"
            className="mb-5 w-20 sm:w-24"
            style={{
              filter:
                "drop-shadow(0 0 20px rgba(255,255,255,0.3))",
            }}
          />

          {/* ===== LABEL ===== */}
          <p
            className="mb-5 text-[10px] text-white/60"
            style={{
              letterSpacing: "0.45em",
              fontFamily: "serif",
            }}
          >
            ✦ UNDANGAN WISUDA ✦
          </p>

          {/* ===== BADGE ===== */}
          <div
            className="mb-7 inline-flex items-center gap-2 rounded-full px-5 py-2 text-[10px] font-bold text-yellow-300 sm:text-xs"
            style={{
              letterSpacing: "0.18em",
              background:
                "linear-gradient(135deg, rgba(255,215,0,0.16), rgba(255,180,0,0.05))",
              border:
                "1px solid rgba(255,215,0,0.35)",
            }}
          >
            ✦ SMK TELKOM MALANG · ANGKATAN 32 ✦
          </div>

          {/* ===== TITLE ===== */}
          <h1
            className="leading-[0.95] text-white"
            style={{
              fontFamily:
                "'Playfair Display', serif",
              fontSize:
                "clamp(54px, 10vw, 92px)",
              fontWeight: 900,
              textShadow:
                "0 0 30px rgba(255,255,255,0.2)",
            }}
          >
            Selamat
            <br />
            Datang
          </h1>

          {/* ===== SUBTEXT ===== */}
          <p className="mt-6 max-w-[420px] text-sm leading-relaxed text-white/75 md:text-base">
            Kami dengan bangga mengundang Anda
            <br />
            untuk menghadiri acara perayaan
          </p>

          <Divider />

          {/* ===== EVENT ===== */}
          <p className="text-sm tracking-wide text-white/80 md:text-base">
            Wisuda SMK Telkom Malang
          </p>

          <p
            className="mt-2 text-2xl font-bold text-yellow-300"
            style={{
              textShadow:
                "0 0 18px rgba(255,215,0,0.45)",
            }}
          >
            Angkatan 32
          </p>

          <Divider />

          {/* ===== MASKOT ===== */}
          <div className="relative mt-4 flex flex-col items-center">
            <div className="relative mb-4 flex items-center justify-center">
              <div
                className="absolute h-28 w-28 rounded-full blur-3xl"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,215,0,0.35) 0%, transparent 70%)",
                }}
              />

              <img
                src="/lumi1.png"
                alt="Lumi Maskot"
                className="relative w-24 animate-float object-contain sm:w-28 md:w-32"
                style={{
                  filter:
                    "drop-shadow(0 0 25px rgba(255,215,0,0.45))",
                }}
              />
            </div>

            {/* ===== GLOW TEXT ===== */}
            <span
              className="pointer-events-none absolute select-none"
              style={{
                bottom: "-5px",
                fontFamily: "'Cinzel', serif",
                fontSize:
                  "clamp(42px, 9vw, 70px)",
                fontWeight: 900,
                letterSpacing: "0.22em",
                color: "rgba(255,215,0,0.2)",
                filter: "blur(10px)",
              }}
            >
              LUMINEX
            </span>

            {/* ===== MAIN TEXT ===== */}
            <span
              className="relative"
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize:
                  "clamp(42px, 9vw, 70px)",
                fontWeight: 900,
                letterSpacing: "0.22em",
                background:
                  "linear-gradient(180deg, #fff8dc 0%, #ffd700 45%, #ffae00 100%)",
                WebkitBackgroundClip:
                  "text" as const,
                WebkitTextFillColor:
                  "transparent",
                backgroundClip: "text" as const,
                animation:
                  "shimmer 3s ease-in-out infinite",
              }}
            >
              LUMINEX
            </span>
          </div>

          {/* ===== STARS ===== */}
          <div className="mt-5 flex gap-3">
            {["★", "★", "★", "★", "★"].map(
              (star, i) => (
                <span
                  key={i}
                  className="text-lg text-yellow-300"
                  style={{
                    animation: `twinkle 2s ease-in-out ${
                      i * 0.2
                    }s infinite`,
                  }}
                >
                  {star}
                </span>
              )
            )}
          </div>

          {/* ===== PILL ===== */}
          <div
            className="mt-7 flex items-center gap-3 rounded-full px-5 py-3 text-xs text-white/70 sm:text-sm"
            style={{
              background:
                "rgba(255,255,255,0.05)",
              border:
                "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-yellow-400" />
            Bersama kita rayakan generasi
            LUMINEX
          </div>
        </div>

        {/* ===== SPARKLES ===== */}
        <div className="absolute bottom-[110px] left-0 right-0 z-10 flex justify-center gap-4">
          {["✦", "✧", "⋆", "✧", "✦"].map(
            (sparkle, i) => (
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
                {sparkle}
              </span>
            )
          )}
        </div>

        {/* ===== STYLE ===== */}
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Cinzel:wght@700;900&display=swap");

          @keyframes lumipulse {
            0%,
            100% {
              transform: translate(-50%, -50%)
                scale(1);
              opacity: 0.7;
            }

            50% {
              transform: translate(-50%, -50%)
                scale(1.15);
              opacity: 1;
            }
          }

          @keyframes spin {
            from {
              transform: rotate(0deg);
            }

            to {
              transform: rotate(360deg);
            }
          }

          @keyframes shimmer {
            0%,
            100% {
              filter: brightness(1);
            }

            50% {
              filter: brightness(1.35);
            }
          }

          @keyframes twinkle {
            0%,
            100% {
              opacity: 0.4;
              transform: scale(0.8);
            }

            50% {
              opacity: 1;
              transform: scale(1.2);
            }
          }

          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }

            50% {
              transform: translateY(-8px);
            }
          }

          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}</style>
      </main>

      <BottomNav />
    </>
  );
}

function Divider() {
  return (
    <div className="my-6 flex w-full max-w-[240px] items-center gap-3">
      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(to right, transparent, rgba(255,215,0,0.7))",
        }}
      />

      <span className="text-xs text-yellow-400">
        ◆
      </span>

      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(to left, transparent, rgba(255,215,0,0.7))",
        }}
      />
    </div>
  );
}

function CornerOrnament({
  className,
}: {
  className: string;
}) {
  return (
    <div
      className={`absolute z-10 h-20 w-20 ${className}`}
    >
      <svg
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full opacity-60"
      >
        <path
          d="M2 58 L2 2 L58 2"
          stroke="#ffd700"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M2 28 L12 28"
          stroke="#ffd700"
          strokeWidth="1"
          opacity="0.6"
        />

        <path
          d="M28 2 L28 12"
          stroke="#ffd700"
          strokeWidth="1"
          opacity="0.6"
        />

        <circle
          cx="2"
          cy="2"
          r="3"
          fill="#ffd700"
        />

        <text
          x="14"
          y="20"
          fontSize="11"
          fill="#ffd700"
          opacity="0.5"
          fontFamily="serif"
        >
          ✦
        </text>
      </svg>
    </div>
  );
}