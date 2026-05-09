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
    title: "Deployment Successful", 
    desc: "Your latest build has been successfully deployed to the production environment.", 
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
    desc: "GitHub integration has been successfully connected to your workspace.", 
    time: "2 hours ago", 
    type: "info",
    read: true
  },
  { 
    id: 4, 
    title: "System Update", 
    desc: "Viccverse v2.5.0 is now live. Enhanced theme engine and performance updates.", 
    time: "5 hours ago", 
    type: "info",
    read: true
  },
  { 
    id: 5, 
    title: "Payment Successful", 
    desc: "Your subscription for 'Professional Plan' has been renewed.", 
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
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Notifications</h1>
          <p className="text-muted-foreground">Stay updated with your latest workspace activity.</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="text-xs font-bold text-primary hover:underline uppercase tracking-wider">Mark all as read</button>
          <button className="p-2 text-muted-foreground hover:text-destructive transition-colors" aria-label="Delete all">
            <Trash2 size={18} />
          </button>
        </div>
      </div>

      <GlassCard className="p-0 overflow-hidden border-border">
        <div className="p-6 border-b border-border flex items-center justify-between gap-4 bg-muted/20">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <input
              type="text"
              placeholder="Search notifications..."
              className="w-full bg-muted border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-all"
            />
          </div>
          <div className="flex gap-2">
            {["All", "Unread"].map((tab, i) => (
              <button 
                key={i}
                className={`px-4 py-2 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${
                  i === 0 ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="divide-y divide-border">
          {notifications.map((n) => (
            <div 
              key={n.id} 
              className={`p-6 flex gap-6 hover:bg-muted/50 transition-all group relative ${!n.read ? 'bg-primary/5' : ''}`}
            >
              {!n.read && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary shadow-[0_0_15px_rgba(var(--primary),0.5)]" />
              )}
              
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-border ${
                n.type === 'success' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' : 
                n.type === 'warning' ? 'bg-amber-500/10 text-amber-500 border-amber-500/20' : 'bg-primary/10 text-primary border-primary/20'
              }`}>
                {n.type === 'success' ? <CheckCircle size={24} /> : 
                 n.type === 'warning' ? <AlertCircle size={24} /> : <Info size={24} />}
              </div>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-foreground">{n.title}</h4>
                  <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                    <Clock size={12} />
                    {n.time}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{n.desc}</p>
                <div className="flex gap-4 pt-2">
                  <button className="text-[10px] font-bold text-primary hover:underline uppercase tracking-widest">View Details</button>
                  <button className="text-[10px] font-bold text-muted-foreground hover:text-foreground uppercase tracking-widest transition-colors">Dismiss</button>
                </div>
              </div>

              <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-muted-foreground hover:text-foreground">
                <MoreVertical size={20} />
              </button>
            </div>
          ))}
        </div>

        <div className="p-4 bg-muted/10 text-center border-t border-border">
          <button className="text-[10px] font-bold text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest">
            Load older notifications
          </button>
        </div>
      </GlassCard>
    </div>
  );
}
