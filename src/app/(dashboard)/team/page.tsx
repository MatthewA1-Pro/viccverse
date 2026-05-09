"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { Mail, Phone, MapPin, Search, Plus, MoreHorizontal, ShieldCheck, Star } from "lucide-react";
import { motion } from "framer-motion";

const teamMembers = [
  { id: 1, name: "Alex Rivera", role: "Senior Data Analyst", email: "alex@viccverse.com", location: "San Francisco, CA", avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200", status: "Online", performance: 98 },
  { id: 2, name: "Sarah Jenkins", role: "Product Manager", email: "sarah@viccverse.com", location: "London, UK", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200", status: "In Meeting", performance: 95 },
  { id: 3, name: "Michael Chen", role: "Lead Engineer", email: "michael@viccverse.com", location: "Toronto, CA", avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=200", status: "Offline", performance: 88 },
  { id: 4, name: "Emily Watson", role: "UX Designer", email: "emily@viccverse.com", location: "Berlin, DE", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200", status: "Online", performance: 92 },
  { id: 5, name: "David Kim", role: "AI Researcher", email: "david@viccverse.com", location: "Seoul, KR", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200", status: "Busy", performance: 99 },
  { id: 6, name: "Jessica Lee", role: "Marketing Lead", email: "jessica@viccverse.com", location: "New York, NY", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200", status: "Online", performance: 85 },
];

export default function TeamPage() {
  return (
    <div className="space-y-6 md:space-y-8 pb-10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 md:gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Team Directory</h1>
          <p className="text-sm md:text-base text-slate-400">Manage your team members, roles, and permissions.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <div className="relative flex-1 sm:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search team..."
              className="bg-slate-900/40 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all w-full sm:w-64"
            />
          </div>
          <NeonButton variant="primary" size="sm" className="h-10 sm:h-auto" leftIcon={<Plus size={16} />}>
            Add Member
          </NeonButton>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
        {teamMembers.map((member, i) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <GlassCard className="p-4 md:p-6 relative overflow-hidden group hover:border-primary/30 transition-all active:scale-[0.98]">
              <div className="absolute top-0 right-0 w-24 md:w-32 h-24 md:h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <div className="flex items-center gap-3 md:gap-4">
                  <div className="relative">
                    <img src={member.avatar} alt={member.name} className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-slate-800 group-hover:border-primary/50 transition-colors" />
                    <div className={`absolute bottom-0 right-0 w-3 h-3 md:w-3.5 md:h-3.5 rounded-full border-2 border-slate-950 ${
                      member.status === 'Online' ? 'bg-emerald-500' : 
                      member.status === 'Busy' ? 'bg-red-500' : 
                      member.status === 'In Meeting' ? 'bg-amber-500' : 'bg-slate-500'
                    }`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-base md:text-lg truncate">{member.name}</h3>
                    <p className="text-[10px] md:text-xs text-primary font-medium uppercase tracking-wider truncate">{member.role}</p>
                  </div>
                </div>
                <button className="text-slate-500 hover:text-white transition-colors p-1">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              <div className="space-y-2.5 md:space-y-3 mb-6 relative z-10">
                <div className="flex items-center gap-3 text-xs md:text-sm text-slate-400">
                  <Mail size={14} className="text-slate-500 shrink-0" />
                  <span className="truncate">{member.email}</span>
                </div>
                <div className="flex items-center gap-3 text-xs md:text-sm text-slate-400">
                  <MapPin size={14} className="text-slate-500 shrink-0" />
                  <span className="truncate">{member.location}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/50 flex items-center justify-between relative z-10">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck size={14} className={member.id === 1 ? 'text-secondary' : 'text-slate-600'} />
                  <span className="text-[10px] md:text-xs font-medium text-slate-400">{member.id === 1 ? 'Admin' : 'Member'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-[10px] md:text-xs font-bold text-white">{member.performance}%</div>
                  <div className="w-12 md:w-16 h-1 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary rounded-full shadow-[0_0_8px_rgba(139,92,246,0.3)]" 
                      style={{ width: `${member.performance}%` }}
                    />
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
