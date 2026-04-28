"use client"

import { Home, Calendar, BookOpen, Clock, MapPin } from "lucide-react"

export default function BottomNav() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#6b0f1a] text-white flex justify-around py-3 rounded-t-3xl">

      <div className="flex flex-col items-center text-xs">
        <Home size={20} />
        <span>Opening</span>
      </div>

      <div className="flex flex-col items-center text-xs">
        <Calendar size={20} />
        <span>Acara</span>
      </div>

      <div className="flex flex-col items-center text-xs">
        <BookOpen size={20} />
        <span>Panduan</span>
      </div>

      <div className="flex flex-col items-center text-xs">
        <Clock size={20} />
        <span>Rundown</span>
      </div>

      <div className="flex flex-col items-center text-xs">
        <MapPin size={20} />
        <span>Maps</span>
      </div>

    </div>
  )
}