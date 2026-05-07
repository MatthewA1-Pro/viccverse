"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/InputAndBadge";
import { 
  Bell, 
  Search, 
  Trash2, 
  CheckCircle, 
  AlertCircle, 
  Info,
  Clock,
  MoreVertical
} from "lucide-react";
import { useState } from "react";

const notifications = [
  { 
    id: 1, 
    title: "Project Milestone Reached", 
    desc: "Q1 Revenue goal of $400k has been achieved. Check the updated reports.", 
    time: "2 mins ago", 
    type: "success",
    read: false
  },
  { 
    id: 2, 
    title: "Security Alert", 
    desc: "New login detected from San Francisco, CA. Was this you?", 
    time: "15 mins ago", 
    type: "warning",
    read: false
  },
  { 
    id: 3, 
    title: "New Integration", 
    desc: "Slack integration has been successfully connected to your workspace.", 
    time: "2 hours ago", 
    type: "info",
    read: true
  },
  { 
    id: 4, 
    title: "System Update", 
    desc: "Vortex Pro v2.4.0 is now live. New predictive AI models are available.", 
    time: "5 hours ago", 
    type: "info",
    read: true
  },
  { 
    id: 5, 
    title: "Payment Successful", 
    desc: "Your subscription for 'Enterprise Plan' has been renewed.", 
    time: "1 day ago", 
    type: "success",
    read: true
  },
];

export default function NotificationsPage() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Notifications</h1>
          <p className="text-slate-400">Stay updated with your latest business activity.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-sm font-bold text-primary hover:underline">Mark all as read</button>
          <button className="p-2 text-slate-500 hover:text-red-400 transition-colors">
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      <GlassCard className="p-0 overflow-hidden">
        <div className="p-6 border-b border-slate-800 flex items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search notifications..."
              className="w-full bg-slate-900/50 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
            />
          </div>
          <div className="flex gap-2">
            {["All", "Unread", "Archive"].map((tab, i) => (
              <button 
                key={i}
                className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  i === 0 ? 'bg-primary/10 text-primary' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-slate-800/50">
          {notifications.map((n) => (
            <div 
              key={n.id} 
              className={`p-6 flex gap-6 hover:bg-slate-800/20 transition-all group relative ${!n.read ? 'bg-primary/5' : ''}`}
            >
              {!n.read && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary neon-glow-primary" />
              )}
              
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${
                n.type === 'success' ? 'bg-emerald-500/10 text-emerald-500' : 
                n.type === 'warning' ? 'bg-amber-500/10 text-amber-500' : 'bg-primary/10 text-primary'
              }`}>
                {n.type === 'success' ? <CheckCircle size={24} /> : 
                 n.type === 'warning' ? <AlertCircle size={24} /> : <Info size={24} />}
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-white">{n.title}</h4>
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                    <Clock size={12} />
                    {n.time}
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{n.desc}</p>
                <div className="flex gap-4 pt-2">
                  <button className="text-xs font-bold text-primary hover:underline">View Details</button>
                  <button className="text-xs font-bold text-slate-500 hover:text-slate-300">Dismiss</button>
                </div>
              </div>

              <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-slate-500 hover:text-white">
                <MoreVertical size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="p-6 bg-slate-900/20 text-center">
          <button className="text-sm font-bold text-slate-500 hover:text-white transition-colors">
            Load older notifications
          </button>
        </div>
      </GlassCard>
    </div>
  );
}
