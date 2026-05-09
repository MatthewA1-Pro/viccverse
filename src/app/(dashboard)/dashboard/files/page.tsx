"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Search, Folder, File as FileIcon, Image as ImageIcon, FileText, UploadCloud, MoreVertical, Plus, Filter } from "lucide-react";
import { motion } from "framer-motion";

const folders = [
  { id: 1, name: "Project Assets", items: 42, size: "1.2 GB", color: "text-blue-400", bg: "bg-blue-400/10" },
  { id: 2, name: "Invoices", items: 15, size: "45 MB", color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { id: 3, name: "Design Files", items: 128, size: "4.5 GB", color: "text-primary", bg: "bg-primary/10" },
  { id: 4, name: "Client Briefs", items: 8, size: "12 MB", color: "text-amber-400", bg: "bg-amber-400/10" },
];

const recentFiles = [
  { id: 1, name: "Q3_Report_Final.pdf", type: "pdf", size: "2.4 MB", date: "Today, 10:42 AM", icon: FileText, color: "text-red-400" },
  { id: 2, name: "Hero_Section_V2.fig", type: "figma", size: "15.2 MB", date: "Yesterday", icon: ImageIcon, color: "text-purple-400" },
  { id: 3, name: "Brand_Guidelines.pdf", type: "pdf", size: "8.1 MB", date: "Oct 12, 2026", icon: FileText, color: "text-red-400" },
  { id: 4, name: "Logo_Assets.zip", type: "zip", size: "45.0 MB", date: "Oct 10, 2026", icon: Folder, color: "text-amber-400" },
];

export default function FilesPage() {
  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">File Manager</h1>
          <p className="text-slate-400 mt-2">Manage your project assets and documents securely.</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search files..." 
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-300 focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <button className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm font-bold flex items-center gap-2 hover:bg-slate-800 hover:text-white transition-all">
            <Plus size={16} /> New Folder
          </button>
          <button className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            <UploadCloud size={16} /> Upload
          </button>
        </motion.div>
      </div>

      {/* Folders Grid */}
      <div>
        <h2 className="text-lg font-bold text-white mb-4">Quick Access Folders</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {folders.map((folder, i) => (
            <motion.div key={folder.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <GlassCard className="p-5 cursor-pointer hover:border-primary/30 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <div className={`w-12 h-12 rounded-xl ${folder.bg} ${folder.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <Folder size={24} className="fill-current opacity-20 absolute" />
                    <Folder size={24} className="relative z-10" />
                  </div>
                  <button className="text-slate-500 hover:text-white"><MoreVertical size={16} /></button>
                </div>
                <h3 className="font-bold text-white mb-1 group-hover:text-primary transition-colors">{folder.name}</h3>
                <p className="text-xs text-slate-400 font-medium">{folder.items} items • {folder.size}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Recent Files */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Recent Files</h2>
          <button className="text-sm font-bold text-slate-400 flex items-center gap-2 hover:text-white transition-colors">
            <Filter size={16} /> Filter
          </button>
        </div>
        <GlassCard className="p-0 overflow-hidden">
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800/50 bg-slate-900/50">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Name</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Size</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Date Modified</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/50">
                {recentFiles.map((file, i) => (
                  <motion.tr 
                    key={file.id} 
                    initial={{ opacity: 0, x: -10 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ delay: 0.3 + (i * 0.1) }}
                    className="hover:bg-slate-900/50 transition-colors group"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center ${file.color}`}>
                          <file.icon size={20} />
                        </div>
                        <span className="font-bold text-slate-200 group-hover:text-white transition-colors">{file.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400">{file.size}</td>
                    <td className="px-6 py-4 text-sm text-slate-400">{file.date}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="p-2 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white transition-colors inline-flex">
                        <MoreVertical size={16} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
