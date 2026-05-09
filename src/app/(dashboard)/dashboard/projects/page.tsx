"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { 
  Plus, Search, Filter, MoreHorizontal, CheckCircle2, 
  Clock, AlertCircle, Users, BarChart2
} from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  { id: 1, name: "Nexus AI Platform", client: "TechCorp", status: "In Progress", progress: 78, due: "Oct 15, 2026", budget: "$45,000", team: 4, type: "SaaS Development" },
  { id: 2, name: "GlobalPay Mobile App", client: "GlobalPay", status: "Review", progress: 92, due: "Sep 28, 2026", budget: "$85,000", team: 6, type: "Mobile App" },
  { id: 3, name: "StyleHub E-Commerce", client: "StyleHub", status: "Planning", progress: 15, due: "Nov 02, 2026", budget: "$32,000", team: 3, type: "Web Development" },
  { id: 4, name: "HealthSync Dashboard", client: "MediCare", status: "In Progress", progress: 45, due: "Oct 30, 2026", budget: "$60,000", team: 5, type: "Dashboard UI" },
];

export default function ProjectsPage() {
  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">Projects</h1>
          <p className="text-slate-400 mt-2">Manage and track all your active agency projects.</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search projects..." 
              className="bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2 text-sm text-slate-300 focus:outline-none focus:border-primary/50 transition-colors"
            />
          </div>
          <button className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            <Plus size={16} /> New Project
          </button>
        </motion.div>
      </div>

      {/* Project Filters */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="flex gap-4 border-b border-slate-800/50 pb-4">
        {['All Projects', 'Active', 'In Review', 'Completed', 'Archived'].map((filter, i) => (
          <button key={i} className={`text-sm font-bold pb-4 -mb-4 border-b-2 transition-colors ${i === 0 ? 'text-primary border-primary' : 'text-slate-500 border-transparent hover:text-white'}`}>
            {filter}
          </button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 + 0.2 }}>
            <GlassCard className="p-6 hover:border-primary/30 transition-all group">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                      project.status === 'In Progress' ? 'bg-primary/10 text-primary border border-primary/20' : 
                      project.status === 'Review' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' :
                      'bg-slate-800 text-slate-400 border border-slate-700'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-sm text-slate-400">{project.client} • {project.type}</p>
                </div>
                <button className="w-8 h-8 rounded-lg hover:bg-slate-800 flex items-center justify-center text-slate-400 transition-colors">
                  <MoreHorizontal size={18} />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50">
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Budget</p>
                  <p className="text-sm font-bold text-white">{project.budget}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Due Date</p>
                  <p className="text-sm font-bold text-white">{project.due}</p>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase mb-1">Team</p>
                  <div className="flex items-center gap-1 text-sm font-bold text-white">
                    <Users size={14} className="text-slate-400" /> {project.team}
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs mb-2 font-bold">
                  <span className="text-slate-400">Project Progress</span>
                  <span className="text-white">{project.progress}%</span>
                </div>
                <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary" 
                    style={{ width: `${project.progress}%` }} 
                  />
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
