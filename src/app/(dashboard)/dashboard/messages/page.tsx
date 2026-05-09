"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Search, MoreVertical, Phone, Video, Paperclip, Send, Smile, Plus } from "lucide-react";
import { motion } from "framer-motion";

const conversations = [
  { id: 1, name: "TechCorp Team", type: "group", lastMsg: "Looks good to me. Let's deploy it.", time: "10:42 AM", unread: 3, active: true },
  { id: 2, name: "Sarah Jenkins", type: "direct", lastMsg: "Did you check the new designs?", time: "09:15 AM", unread: 0, active: false },
  { id: 3, name: "Design Sync", type: "group", lastMsg: "Meeting in 5 mins", time: "Yesterday", unread: 0, active: false },
  { id: 4, name: "GlobalPay Client", type: "group", lastMsg: "Invoice received, thanks.", time: "Tuesday", unread: 0, active: false },
];

export default function MessagesPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] pb-4">
      {/* Header */}
      <div className="shrink-0 mb-6 flex justify-between items-end">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">Messages</h1>
          <p className="text-slate-400 mt-2">Team communication and client updates.</p>
        </motion.div>
        <button className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]">
          <Plus size={16} /> New Chat
        </button>
      </div>

      <GlassCard className="flex-1 flex p-0 overflow-hidden min-h-0">
        {/* Sidebar */}
        <div className="w-80 border-r border-slate-800/50 flex flex-col bg-slate-900/30">
          <div className="p-4 border-b border-slate-800/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search messages..." 
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-300 focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversations.map((chat) => (
              <div key={chat.id} className={`p-4 border-b border-slate-800/50 cursor-pointer transition-colors flex items-center gap-3 ${chat.active ? 'bg-primary/10 border-l-2 border-l-primary' : 'hover:bg-slate-800/50'}`}>
                <div className="relative">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${chat.type === 'group' ? 'bg-slate-800 text-slate-300' : 'bg-gradient-to-tr from-primary to-secondary text-white'}`}>
                    {chat.name.charAt(0)}
                  </div>
                  {chat.active && <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-500 border-2 border-slate-900" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h4 className={`font-bold truncate text-sm ${chat.active ? 'text-white' : 'text-slate-300'}`}>{chat.name}</h4>
                    <span className="text-[10px] text-slate-500 font-medium shrink-0">{chat.time}</span>
                  </div>
                  <p className={`text-xs truncate ${chat.unread > 0 ? 'text-white font-bold' : 'text-slate-500'}`}>{chat.lastMsg}</p>
                </div>
                {chat.unread > 0 && (
                  <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[10px] font-bold text-white shrink-0">
                    {chat.unread}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Chat Area */}
        <div className="flex-1 flex flex-col relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
          
          <div className="h-16 border-b border-slate-800/50 flex items-center justify-between px-6 bg-slate-900/30 backdrop-blur-md z-10">
            <div className="flex items-center gap-3">
              <h2 className="font-bold text-white">TechCorp Team</h2>
              <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-bold text-slate-400">4 Members</span>
            </div>
            <div className="flex items-center gap-4 text-slate-400">
              <button className="hover:text-white transition-colors"><Phone size={18} /></button>
              <button className="hover:text-white transition-colors"><Video size={18} /></button>
              <button className="hover:text-white transition-colors"><MoreVertical size={18} /></button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-6 space-y-6 z-10">
            {/* Chat bubbles */}
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-[10px] font-bold text-white">
                JS
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-slate-300">John Smith</span>
                  <span className="text-[10px] text-slate-500">10:30 AM</span>
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl rounded-tl-sm p-3 text-sm text-slate-300 max-w-lg">
                  I've pushed the latest UI updates for the dashboard.
                </div>
              </div>
            </div>

            <div className="flex gap-4 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center shrink-0 text-[10px] font-bold text-white">
                TC
              </div>
              <div className="flex flex-col items-end">
                <div className="flex items-center gap-2 mb-1 flex-row-reverse">
                  <span className="text-xs font-bold text-slate-300">TechCorp Client</span>
                  <span className="text-[10px] text-slate-500">10:42 AM</span>
                </div>
                <div className="bg-primary border border-primary/50 rounded-2xl rounded-tr-sm p-3 text-sm text-white max-w-lg">
                  Looks good to me. Let's deploy it.
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-slate-950/50 border-t border-slate-800/50 z-10 backdrop-blur-md">
            <div className="flex items-end gap-2 bg-slate-900 border border-slate-800 rounded-xl p-2 focus-within:border-primary/50 transition-colors">
              <button className="p-2 text-slate-400 hover:text-white transition-colors"><Paperclip size={20} /></button>
              <textarea 
                placeholder="Type a message..." 
                className="flex-1 bg-transparent border-none resize-none max-h-32 min-h-[40px] text-sm text-white focus:outline-none py-2"
                rows={1}
              />
              <button className="p-2 text-slate-400 hover:text-white transition-colors"><Smile size={20} /></button>
              <button className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"><Send size={18} /></button>
            </div>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
