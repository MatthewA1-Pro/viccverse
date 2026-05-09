"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Plus, Search, Filter, MoreHorizontal, MessageSquare, Paperclip, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const columns = [
  { id: 'todo', title: 'To Do', count: 4, color: 'text-slate-400' },
  { id: 'in-progress', title: 'In Progress', count: 3, color: 'text-primary' },
  { id: 'review', title: 'In Review', count: 2, color: 'text-amber-400' },
  { id: 'done', title: 'Completed', count: 8, color: 'text-emerald-400' },
];

const tasks = [
  { id: 1, title: "Design System Architecture", tag: "Design", priority: "High", comments: 4, attachments: 2, status: "todo", assignees: ["SJ"] },
  { id: 2, type: "API", title: "Implement Authentication Flow", tag: "Backend", priority: "Critical", comments: 12, attachments: 0, status: "in-progress", assignees: ["AR", "SJ"] },
  { id: 3, title: "Update Landing Page Copy", tag: "Marketing", priority: "Low", comments: 1, attachments: 1, status: "review", assignees: ["MT"] },
  { id: 4, title: "Database Migration", tag: "DevOps", priority: "High", comments: 8, attachments: 4, status: "in-progress", assignees: ["AR"] },
];

export default function TasksPage() {
  return (
    <div className="space-y-8 pb-10 h-full flex flex-col">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 shrink-0">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">Tasks</h1>
          <p className="text-slate-400 mt-2">Manage your sprints and daily objectives.</p>
        </motion.div>
        
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex gap-3">
          <button className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm font-bold flex items-center gap-2 hover:bg-slate-800 hover:text-white transition-all">
            <Filter size={16} /> Filters
          </button>
          <button className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            <Plus size={16} /> New Task
          </button>
        </motion.div>
      </div>

      {/* Kanban Board */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.2 }}
        className="flex gap-6 overflow-x-auto pb-4 flex-1 min-h-[500px]"
      >
        {columns.map((column) => (
          <div key={column.id} className="min-w-[300px] w-[300px] flex flex-col gap-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full bg-current ${column.color}`} />
                <h3 className="font-bold text-white">{column.title}</h3>
                <span className="px-2 py-0.5 rounded-full bg-slate-800 text-xs font-bold text-slate-400">{column.count}</span>
              </div>
              <button className="text-slate-500 hover:text-white"><Plus size={16} /></button>
            </div>

            <div className="flex flex-col gap-4">
              {tasks.filter(t => t.status === column.id).map(task => (
                <GlassCard key={task.id} className="p-4 cursor-grab active:cursor-grabbing hover:border-primary/50 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-md ${
                      task.priority === 'Critical' ? 'bg-red-500/10 text-red-400' :
                      task.priority === 'High' ? 'bg-amber-500/10 text-amber-400' :
                      'bg-slate-800 text-slate-400'
                    }`}>
                      {task.priority}
                    </span>
                    <button className="text-slate-500 hover:text-white"><MoreHorizontal size={14} /></button>
                  </div>
                  
                  <h4 className="font-bold text-white text-sm mb-4 leading-snug">{task.title}</h4>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-3 text-xs font-bold text-slate-500">
                      {task.comments > 0 && <span className="flex items-center gap-1 hover:text-white transition-colors"><MessageSquare size={12} /> {task.comments}</span>}
                      {task.attachments > 0 && <span className="flex items-center gap-1 hover:text-white transition-colors"><Paperclip size={12} /> {task.attachments}</span>}
                    </div>
                    
                    <div className="flex -space-x-1.5">
                      {task.assignees.map((user, i) => (
                        <div key={i} className="w-6 h-6 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-[8px] font-bold text-white">
                          {user}
                        </div>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              ))}
              
              {/* Add task placeholder */}
              <button className="w-full py-3 border-2 border-dashed border-slate-800 rounded-xl text-slate-500 hover:text-white hover:border-slate-600 transition-colors flex items-center justify-center gap-2 text-sm font-bold">
                <Plus size={16} /> Add Task
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
