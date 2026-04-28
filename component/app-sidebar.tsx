"use client"

import Link from "next/link"
import { GraduationCap, CalendarDays, MessageCircle, Home } from "lucide-react"

export default function SidebarWisuda() {
  return (
    <div className="fixed left-0 top-0 h-screen w-64 bg-[#1E63B5] text-white flex flex-col">

      {/* Header */}
      <div className="p-6 border-b border-blue-400">
        <h1 className="text-xl font-bold">LUMINEX</h1>
        <p className="text-sm opacity-80">
          SMK Telkom Malang
        </p>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-2 p-4">

        <Link href="#opening" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition">
          <Home size={18} />
          Opening
        </Link>

        <Link href="#about" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition">
          <GraduationCap size={18} />
          Tentang Wisuda
        </Link>

        <Link href="#schedule" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition">
          <CalendarDays size={18} />
          Jadwal Acara
        </Link>

        <Link href="#wishes" className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-600 transition">
          <MessageCircle size={18} />
          Ucapan
        </Link>

      </nav>

      {/* Footer */}
      <div className="mt-auto p-4 text-xs opacity-70">
        Angkatan 32 • Luminex
      </div>

    </div>
  )
}