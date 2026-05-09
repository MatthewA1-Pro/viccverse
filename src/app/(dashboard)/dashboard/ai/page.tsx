"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Bot, Send, Sparkles, Image as ImageIcon, Code, FileText, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function AIPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-8rem)] pb-4">
      {/* Header */}
      <div className="shrink-0 mb-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.2)]">
            <Bot size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-black text-white tracking-tight">ViccVerse AI Workspace</h1>
            <p className="text-slate-400 text-sm">Your intelligent co-pilot for development and agency operations.</p>
          </div>
        </motion.div>
      </div>

      <div className="flex-1 flex gap-6 min-h-0">
        {/* Main Chat Area */}
        <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden relative">
          {/* Decorative background */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-primary/10 blur-[100px] rounded-full pointer-events-none" />

          {/* Chat History Placeholder */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6 relative z-10">
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                <Bot size={16} className="text-white" />
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-300 max-w-[80%] leading-relaxed">
                Hello John! I'm ViccVerse AI. I can help you analyze project data, write code, draft client emails, or manage your schedule. What would you like to build today?
              </div>
            </div>

            <div className="flex gap-4 flex-row-reverse">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center shrink-0">
                <span className="text-[10px] font-bold text-white">JS</span>
              </div>
              <div className="bg-primary border border-primary/50 rounded-2xl rounded-tr-sm p-4 text-sm text-white max-w-[80%] leading-relaxed shadow-[0_5px_15px_rgba(139,92,246,0.2)]">
                Can you generate a quick status report for the Nexus AI Platform project?
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-[0_0_10px_rgba(139,92,246,0.5)]">
                <Bot size={16} className="text-white" />
              </div>
              <div className="bg-slate-900/80 border border-slate-800 rounded-2xl rounded-tl-sm p-4 text-sm text-slate-300 max-w-[80%] leading-relaxed space-y-4">
                <p>Certainly. Here is the current status report for <strong>Nexus AI Platform</strong>:</p>
                <div className="bg-slate-950 rounded-xl p-4 border border-slate-800">
                  <h4 className="font-bold text-white mb-2">Project: Nexus AI Platform</h4>
                  <ul className="space-y-1 text-slate-400">
                    <li>• Status: <span className="text-emerald-400">On Track (78%)</span></li>
                    <li>• Next Milestone: Backend API Integration (Due Oct 15)</li>
                    <li>• Budget Utilization: $32k / $45k</li>
                    <li>• Risk Level: Low</li>
                  </ul>
                </div>
                <p>Would you like me to draft an email to the client (TechCorp) with this update?</p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-slate-950/50 border-t border-slate-800/50 relative z-10 backdrop-blur-md">
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input 
                  type="text" 
                  placeholder="Message ViccVerse AI..." 
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-4 pr-12 py-3.5 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors shadow-inner"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg bg-primary/20 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Sparkles size={16} />
                </button>
              </div>
              <button className="px-6 py-3.5 bg-primary text-white rounded-xl font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                <Send size={16} />
              </button>
            </div>
            <div className="flex gap-4 mt-3 px-1 text-xs font-bold text-slate-500">
              <button className="hover:text-white transition-colors">/summarize</button>
              <button className="hover:text-white transition-colors">/code</button>
              <button className="hover:text-white transition-colors">/analyze</button>
            </div>
          </div>
        </GlassCard>

        {/* Sidebar Tools */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="w-80 hidden lg:flex flex-col gap-4"
        >
          <h3 className="font-bold text-white text-lg">AI Tools</h3>
          {[
            { icon: Code, title: "Code Generation", desc: "Generate React components or API routes instantly.", color: "text-blue-400" },
            { icon: FileText, title: "Smart Documents", desc: "Draft proposals and client contracts.", color: "text-amber-400" },
            { icon: ImageIcon, title: "Asset Generation", desc: "Create UI mockups and placeholder images.", color: "text-emerald-400" },
            { icon: Zap, title: "Automations", desc: "Trigger Zapier workflows via natural language.", color: "text-primary" }
          ].map((tool, i) => (
            <GlassCard key={i} className="p-4 cursor-pointer hover:border-primary/50 transition-colors group">
              <div className="flex items-center gap-3 mb-2">
                <tool.icon size={18} className={tool.color} />
                <h4 className="font-bold text-white group-hover:text-primary transition-colors">{tool.title}</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">{tool.desc}</p>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
