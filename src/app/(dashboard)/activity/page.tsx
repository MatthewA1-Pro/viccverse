"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { Clock, User, Settings, Shield, Zap, Filter, Search, Download, Trash2 } from "lucide-react";
import { motion } from "framer-motion";

const activities = [
  { id: 1, type: "auth", user: "Alex Rivera", action: "Logged in from new device", target: "iPhone 15 Pro", time: "2 minutes ago", severity: "info" },
  { id: 2, type: "project", user: "Sarah Jenkins", action: "Updated project status", target: "Nexus AI Platform", time: "15 minutes ago", severity: "success" },
  { id: 3, type: "security", user: "System", action: "Firewall blocked suspicious request", target: "192.168.1.45", time: "1 hour ago", severity: "warning" },
  { id: 4, type: "settings", user: "Alex Rivera", action: "Changed API configuration", target: "ViccVerse Production", time: "3 hours ago", severity: "info" },
  { id: 5, type: "team", user: "Admin", action: "Added new team member", target: "David Kim", time: "5 hours ago", severity: "success" },
  { id: 6, type: "project", user: "Michael Chen", action: "Deleted temporary branch", target: "feat/legacy-cleanup", time: "Yesterday, 10:24 PM", severity: "info" },
  { id: 7, type: "security", user: "System", action: "Failed login attempt", target: "Unknown User", time: "Yesterday, 08:15 PM", severity: "error" },
  { id: 8, type: "auth", user: "Sarah Jenkins", action: "Updated profile information", target: "Sarah Profile", time: "Yesterday, 04:30 PM", severity: "info" },
];

const ActivityIcon = ({ type }: { type: string }) => {
  switch (type) {
    case "auth": return <User size={18} className="text-primary" />;
    case "project": return <Zap size={18} className="text-secondary" />;
    case "security": return <Shield size={18} className="text-red-400" />;
    case "settings": return <Settings size={18} className="text-amber-400" />;
    default: return <Clock size={18} className="text-slate-400" />;
  }
};

const SeverityBadge = ({ severity }: { severity: string }) => {
  switch (severity) {
    case "success": return <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />;
    case "warning": return <div className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />;
    case "error": return <div className="w-2 h-2 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />;
    default: return <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(139,92,246,0.5)]" />;
  }
};

export default function ActivityPage() {
  return (
    <div className="space-y-6 md:space-y-8 pb-10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 md:gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">System Logs</h1>
          <p className="text-sm md:text-base text-slate-400">Track all actions and system events across the ViccVerse platform.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <NeonButton variant="outline" size="sm" className="h-10 sm:h-auto" leftIcon={<Trash2 size={16} />}>
            Clear Logs
          </NeonButton>
          <NeonButton variant="primary" size="sm" className="h-10 sm:h-auto" leftIcon={<Download size={16} />}>
            Export Audit Trail
          </NeonButton>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1 space-y-4 md:space-y-6">
          <GlassCard className="p-4 md:p-6">
            <h3 className="text-xs md:text-sm font-bold text-slate-500 mb-4 md:mb-6 uppercase tracking-widest">Filter By Type</h3>
            <div className="flex flex-row lg:flex-col gap-2 overflow-x-auto scrollbar-hide pb-2 lg:pb-0">
              {["All Activity", "Security", "Auth", "Project", "Settings"].map((filter, i) => (
                <button 
                  key={i} 
                  className={`whitespace-nowrap lg:w-full text-left px-4 py-2 rounded-xl text-xs md:text-sm transition-all active:scale-95 ${i === 0 ? 'bg-primary/10 text-primary font-bold' : 'text-slate-400 hover:bg-slate-900 hover:text-white border border-white/5 lg:border-none'}`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-4 md:p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <h3 className="text-base md:text-lg font-bold text-white mb-2">Live Monitoring</h3>
            <p className="text-[10px] md:text-xs text-slate-400 mb-4 leading-relaxed">System is currently processing 42 events per second across all nodes.</p>
            <div className="flex items-center gap-2">
              <div className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-full w-full bg-emerald-500"></span>
              </div>
              <span className="text-[10px] md:text-xs font-black text-emerald-400 uppercase tracking-widest">Active Tracking</span>
            </div>
          </GlassCard>
        </div>

        <div className="lg:col-span-3">
          <GlassCard className="p-0 overflow-hidden">
            <div className="p-4 md:p-6 border-b border-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="relative flex-1 max-w-none sm:max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search activity..."
                  className="w-full bg-slate-900/40 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
                />
              </div>
              <div className="flex items-center justify-between sm:justify-end gap-4 px-1">
                <span className="text-[10px] md:text-xs font-medium text-slate-500">Page 1 of 42</span>
                <div className="flex gap-1">
                   <button className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 disabled:opacity-30" disabled><Filter size={14} /></button>
                </div>
              </div>
            </div>

            <div className="divide-y divide-slate-800/50">
              {activities.map((activity, i) => (
                <motion.div 
                  key={activity.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-4 md:p-6 hover:bg-slate-900/30 transition-all flex items-start gap-3 md:gap-4 group active:bg-slate-900/50"
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-slate-800/50 flex items-center justify-center shrink-0 border border-slate-700/50 group-hover:border-primary/30 transition-all">
                    <ActivityIcon type={activity.type} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1 md:mb-1.5 gap-2">
                      <p className="text-xs md:text-sm font-bold text-white leading-tight truncate">
                        {activity.user} <span className="font-medium text-slate-500">{activity.action}</span>
                      </p>
                      <SeverityBadge severity={activity.severity} />
                    </div>
                    <p className="text-[10px] md:text-xs text-slate-400 truncate leading-relaxed">Target: <span className="text-primary font-medium">{activity.target}</span></p>
                    <div className="flex items-center gap-3 mt-2.5">
                      <div className="flex items-center gap-1.5">
                         <Clock size={12} className="text-slate-600" />
                         <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{activity.time}</span>
                      </div>
                      <div className="hidden sm:flex items-center gap-1.5">
                         <div className="w-1 h-1 rounded-full bg-slate-700" />
                         <span className="text-[10px] font-bold text-slate-600 uppercase tracking-wider">ID: {activity.id}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="p-4 md:p-6 border-t border-slate-800/50 flex justify-center">
              <button className="text-[10px] md:text-xs font-bold text-primary hover:text-primary/80 transition-colors uppercase tracking-widest py-2 px-4 active:scale-95">Load older logs</button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
