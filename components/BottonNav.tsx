"use client";

import Link from "next/link";
import { Home, Calendar, BookOpen, Clock, MapPin } from "lucide-react";

export default function BottomNav() {
  const navItem =
    "flex flex-col items-center text-xs cursor-pointer hover:opacity-80";

  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#1e5aa8] text-white flex justify-around py-3 rounded-t-3xl shadow-lg z-50 border-t border-white/10">
      <Link href="/Undangan/opening" className={navItem}>
        <Home size={20} />
        <span>Opening</span>
      </Link>

      <Link href="/Undangan/acara" className={navItem}>
        <Calendar size={20} />
        <span>Acara</span>
      </Link>

      <Link href="/Undangan/rsvp" className={navItem}>
        <BookOpen size={20} />
        <span>RSVP</span>
      </Link>

      <Link href="/Undangan/rundown" className={navItem}>
        <Clock size={20} />
        <span>Rundown</span>
      </Link>

      <Link href="/Undangan/maps" className={navItem}>
        <MapPin size={20} />
        <span>Maps</span>
      </Link>

    </div>
  );
}