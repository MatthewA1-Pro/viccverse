"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { ChevronLeft, ChevronRight, Plus, Users, Video, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const events = [
  { id: 1, title: "Product Sync: Nexus AI", time: "10:00 AM - 11:30 AM", type: "Video Call", icon: Video, color: "border-l-primary bg-primary/10" },
  { id: 2, title: "Client Review: GlobalPay", time: "02:30 PM - 04:00 PM", type: "Presentation", icon: Users, color: "border-l-secondary bg-secondary/10" },
  { id: 3, title: "Team Lunch", time: "12:30 PM - 01:30 PM", type: "In Person", icon: MapPin, color: "border-l-emerald-500 bg-emerald-500/10" },
];

export default function CalendarPage() {
  return (
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">Calendar</h1>
          <p className="text-slate-400 mt-2">Manage your schedule and upcoming meetings.</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex gap-3">
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl p-1">
            <button className="px-3 py-1.5 rounded-lg bg-slate-800 text-white text-sm font-bold shadow-sm">Week</button>
            <button className="px-3 py-1.5 rounded-lg text-slate-400 hover:text-white text-sm font-bold transition-colors">Month</button>
          </div>
          <button className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            <Plus size={16} /> New Event
          </button>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <GlassCard className="p-0 overflow-hidden min-h-[600px] flex flex-col">
            <div className="p-4 border-b border-slate-800/50 flex items-center justify-between bg-slate-900/50">
              <h2 className="text-lg font-bold text-white">October 2026</h2>
              <div className="flex gap-2">
                <button className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 transition-colors"><ChevronLeft size={20} /></button>
                <button className="p-1.5 rounded-lg hover:bg-slate-800 text-slate-400 transition-colors"><ChevronRight size={20} /></button>
              </div>
            </div>
            <div className="flex-1 p-6 flex items-center justify-center border-2 border-dashed border-slate-800/50 m-6 rounded-2xl bg-slate-900/20">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 mx-auto flex items-center justify-center mb-4 text-slate-500">
                  <CalendarIcon size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-300 mb-2">Calendar View Placeholder</h3>
                <p className="text-sm text-slate-500 max-w-sm">A full interactive calendar grid would be rendered here in production.</p>
              </div>
            </div>
          </GlassCard>
        </div>

        <div className="space-y-6">
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-white mb-6">Upcoming Today</h3>
            <div className="space-y-4">
              {events.map((event, i) => (
                <motion.div 
                  key={event.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-4 rounded-xl border-l-4 ${event.color} backdrop-blur-sm`}
                >
                  <h4 className="font-bold text-white mb-1">{event.title}</h4>
                  <p className="text-xs text-slate-300 font-medium mb-3">{event.time}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <event.icon size={12} /> {event.type}
                    </span>
                    <div className="flex -space-x-1.5">
                      {[...Array(3)].map((_, j) => (
                        <div key={j} className="w-6 h-6 rounded-full bg-slate-800 border border-slate-950 flex items-center justify-center text-[8px] font-bold text-slate-300">
                          U{j+1}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}

function CalendarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}
