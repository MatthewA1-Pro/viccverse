"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { 
  Download, Calendar as CalendarIcon, Filter, Plus, 
  TrendingUp, Users, DollarSign, Activity, ChevronRight,
  MoreHorizontal, Clock, CheckCircle2, ArrowRight, Bot, 
  FolderKanban, MessageSquare, BarChart3
} from "lucide-react";
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip as ChartTooltip, ResponsiveContainer 
} from "recharts";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

// Mock Data
const chartData = [
  { name: 'Mon', value: 4000 },
  { name: 'Tue', value: 3000 },
  { name: 'Wed', value: 5000 },
  { name: 'Thu', value: 2780 },
  { name: 'Fri', value: 1890 },
  { name: 'Sat', value: 2390 },
  { name: 'Sun', value: 3490 },
];

const activeProjects = [
  { id: 1, name: "Nexus AI Platform", client: "TechCorp", progress: 78, status: "On Track", members: 4, dueDate: "Oct 15" },
  { id: 2, name: "FinTech Mobile App", client: "GlobalPay", progress: 45, status: "At Risk", members: 6, dueDate: "Nov 02" },
  { id: 3, name: "E-Commerce Redesign", client: "StyleHub", progress: 92, status: "Review", members: 3, dueDate: "Sep 28" },
];

const recentActivities = [
  { id: 1, user: "Sarah J.", action: "completed task", target: "API Integration", time: "2h ago", avatar: "SJ" },
  { id: 2, user: "Mike T.", action: "uploaded file", target: "Q3_Design_Assets.zip", time: "4h ago", avatar: "MT" },
  { id: 3, user: "AI Assistant", action: "generated report", target: "Weekly Analytics", time: "5h ago", avatar: "AI" },
];

const upcomingMeetings = [
  { id: 1, title: "Product Sync: Nexus AI", time: "10:00 AM", attendees: 5, type: "Video Call" },
  { id: 2, title: "Client Review: GlobalPay", time: "02:30 PM", attendees: 3, type: "Presentation" },
];

const StatCard = ({ title, value, change, trend, icon: Icon, delay }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.4 }}
  >
    <GlassCard className="p-6 relative overflow-hidden group hover:border-primary/30 transition-colors">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors" />
      <div className="flex justify-between items-start mb-6">
        <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-primary group-hover:border-primary/30 transition-colors shadow-inner">
          <Icon size={20} />
        </div>
        <div className={`flex items-center gap-1 text-sm font-bold ${trend === 'up' ? 'text-emerald-400' : 'text-red-400'}`}>
          {trend === 'up' ? <TrendingUp size={16} /> : <TrendingUp size={16} className="rotate-180" />}
          {change}
        </div>
      </div>
      <div>
        <h3 className="text-3xl font-black text-white mb-1 tracking-tight">{value}</h3>
        <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{title}</p>
      </div>
    </GlassCard>
  </motion.div>
);

export default function DashboardOverview() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProfile() {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        setUser(user);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    }
    getProfile();
  }, []);

  const firstName = user?.user_metadata?.first_name || "there";
  const fullName = user?.user_metadata?.full_name || user?.email || "User";

  return (
    <div className="space-y-8 pb-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-2"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold text-primary mb-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            System Online
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
            {loading ? "Good morning..." : `Good morning, ${firstName}.`}
          </h1>
          <p className="text-slate-400 text-sm md:text-base">Here's what's happening across your projects today.</p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-wrap items-center gap-3"
        >
          <button className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-sm font-bold flex items-center gap-2 hover:bg-slate-800 hover:text-white transition-all shadow-sm">
            <CalendarIcon size={16} /> This Week
          </button>
          <button className="px-4 py-2 rounded-xl bg-primary text-white text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            <Plus size={16} /> New Project
          </button>
        </motion.div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
        <StatCard title="Total Revenue" value="$124,500" change="+14.5%" trend="up" icon={DollarSign} delay={0.1} />
        <StatCard title="Active Projects" value="12" change="+2" trend="up" icon={FolderKanban} delay={0.2} />
        <StatCard title="Team Productivity" value="94%" change="+4.1%" trend="up" icon={Activity} delay={0.3} />
        <StatCard title="Client Messages" value="28" change="-5%" trend="down" icon={MessageSquare} delay={0.4} />
      </div>

      {/* Growth Chart Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <GlassCard className="p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">Revenue Growth</h3>
              <p className="text-[10px] sm:text-xs text-slate-500 mt-1">Weekly performance overview.</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary" />
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold">Revenue</span>
              </div>
            </div>
          </div>
          <div className="h-[200px] sm:h-[250px] md:h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData}>
                <defs>
                  <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 10 }}
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#64748b', fontSize: 10 }}
                  dx={-10}
                />
                <ChartTooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px', fontSize: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill="url(#colorValue)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </motion.div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Main Content Area (Left 2/3) */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* Active Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassCard className="p-0 overflow-hidden">
              <div className="p-4 md:p-6 border-b border-slate-800/50 flex items-center justify-between">
                <div>
                  <h2 className="text-base md:text-lg font-bold text-white">Active Projects</h2>
                  <p className="text-[10px] sm:text-xs text-slate-500 mt-1">Monitor your ongoing deliverables.</p>
                </div>
                <button className="text-xs sm:text-sm font-bold text-primary hover:text-primary/80 flex items-center gap-1 transition-colors">
                  View All <ArrowRight size={14} />
                </button>
              </div>
              <div className="divide-y divide-slate-800/50">
                {activeProjects.map((project) => (
                  <div key={project.id} className="p-4 md:p-6 hover:bg-slate-900/30 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1 sm:mb-2">
                        <h3 className="font-bold text-white text-sm sm:text-base">{project.name}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] font-bold uppercase tracking-wider ${
                          project.status === 'On Track' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 
                          project.status === 'At Risk' ? 'bg-red-500/10 text-red-400 border border-red-500/20' :
                          'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-[10px] sm:text-xs text-slate-500 font-medium">{project.client} • Due {project.dueDate}</p>
                    </div>
                    
                    <div className="flex-1 w-full max-w-none sm:max-w-xs">
                      <div className="flex justify-between text-[10px] sm:text-xs mb-1.5 font-medium">
                        <span className="text-slate-400">Progress</span>
                        <span className="text-white">{project.progress}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                        <div 
                          className={`h-full rounded-full ${project.progress > 80 ? 'bg-emerald-500' : project.progress < 50 ? 'bg-red-500' : 'bg-primary'}`} 
                          style={{ width: `${project.progress}%` }} 
                        />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between sm:justify-start gap-3 sm:pl-4">
                      <div className="flex -space-x-2">
                        {[...Array(Math.min(project.members, 3))].map((_, i) => (
                          <div key={i} className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-[8px] sm:text-[10px] font-bold text-slate-400">
                            U{i+1}
                          </div>
                        ))}
                        {project.members > 3 && (
                          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-800 border-2 border-slate-950 flex items-center justify-center text-[8px] sm:text-[10px] font-bold text-slate-400">
                            +{project.members - 3}
                          </div>
                        )}
                      </div>
                      <button className="w-8 h-8 rounded-lg hover:bg-slate-800 flex items-center justify-center text-slate-400 transition-colors">
                        <MoreHorizontal size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Quick Actions & AI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <GlassCard className="p-6 bg-gradient-to-br from-slate-900 to-slate-950 border-slate-800/60 hover:border-primary/30 transition-colors group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/20 text-primary flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.2)]">
                  <Bot size={20} className="sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-primary transition-colors">ViccVerse AI</h3>
                  <p className="text-[10px] sm:text-xs text-slate-500">Ready to assist you.</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed">Generate weekly reports, analyze project risks, or draft client updates instantly.</p>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  placeholder="Ask AI..." 
                  className="flex-1 bg-slate-950 border border-slate-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary/50 transition-colors h-10"
                />
                <button className="px-4 py-2 bg-primary text-white rounded-lg font-bold text-sm hover:bg-primary/90 transition-colors h-10 active:scale-95">
                  Ask
                </button>
              </div>
            </GlassCard>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { label: "Create Invoice", icon: DollarSign, color: "text-emerald-400", bg: "bg-emerald-400/10" },
                { label: "Schedule", icon: CalendarIcon, color: "text-secondary", bg: "bg-secondary/10" },
                { label: "Upload Files", icon: Download, color: "text-amber-400", bg: "bg-amber-400/10" },
                { label: "Reports", icon: BarChart3, color: "text-primary", bg: "bg-primary/10" },
              ].map((action, i) => (
                <GlassCard key={i} className="p-3 sm:p-4 flex flex-col items-center justify-center text-center gap-2 sm:gap-3 hover:bg-slate-900/80 hover:border-slate-700 cursor-pointer transition-all group active:scale-95">
                  <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full ${action.bg} ${action.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <action.icon size={16} />
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold text-slate-300 group-hover:text-white leading-tight">{action.label}</span>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Sidebar Area (Right 1/3) */}
        <div className="space-y-6">
          
          {/* User Profile Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
          >
            <GlassCard className="p-6 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/20 transition-colors" />
              <div className="flex items-center gap-4 mb-4 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-primary to-secondary p-[2px]">
                  <div className="w-full h-full rounded-[14px] bg-slate-900 flex items-center justify-center overflow-hidden">
                     {user?.user_metadata?.avatar_url ? (
                       <img src={user.user_metadata.avatar_url} alt={fullName} className="w-full h-full object-cover" />
                     ) : (
                       <div className="w-full h-full bg-slate-800 flex items-center justify-center text-xl font-black text-primary">
                         {fullName.charAt(0).toUpperCase()}
                       </div>
                     )}
                  </div>
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold text-white truncate">{fullName}</h3>
                  <p className="text-xs text-slate-400 font-medium truncate">{user?.email}</p>
                </div>
              </div>
              <div className="flex gap-2 relative z-10">
                 <Link href="/profile" className="flex-1">
                   <button className="w-full py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-slate-300 hover:text-white hover:border-primary/50 transition-colors">
                     View Profile
                   </button>
                 </Link>
                 <Link href="/settings" className="flex-1">
                   <button className="w-full py-2 bg-slate-900 border border-slate-800 rounded-lg text-xs font-bold text-slate-300 hover:text-white hover:border-primary/50 transition-colors">
                     Settings
                   </button>
                 </Link>
              </div>
            </GlassCard>
          </motion.div>

          {/* Upcoming Meetings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white">Upcoming</h3>
                <button className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 flex items-center justify-center text-slate-400 transition-colors">
                  <Plus size={16} />
                </button>
              </div>
              <div className="space-y-4">
                {upcomingMeetings.map((meeting) => (
                  <div key={meeting.id} className="flex gap-4 p-3 rounded-xl hover:bg-slate-900/50 transition-colors border border-transparent hover:border-slate-800">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex flex-col items-center justify-center shrink-0">
                      <span className="text-[10px] font-bold text-slate-500 uppercase">Today</span>
                      <span className="text-sm font-black text-white">{meeting.time.split(' ')[0]}</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{meeting.title}</h4>
                      <p className="text-xs text-slate-500 font-medium flex items-center gap-2">
                        <Users size={12} /> {meeting.attendees} • {meeting.type}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <GlassCard className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-white">Activity Feed</h3>
                <button className="text-xs font-bold text-slate-500 hover:text-white transition-colors">View All</button>
              </div>
              <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[1.125rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
                {recentActivities.map((activity, i) => (
                  <div key={activity.id} className="relative flex items-start gap-4">
                    <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold z-10 shrink-0 border-4 border-[#020617] ${activity.user === 'AI Assistant' ? 'bg-primary text-white' : 'bg-slate-800 text-slate-300'}`}>
                      {activity.avatar}
                    </div>
                    <div className="pt-1.5 flex-1 min-w-0">
                      <p className="text-sm text-slate-300 leading-snug">
                        <span className="font-bold text-white">{activity.user}</span> {activity.action} <span className="font-bold text-primary">{activity.target}</span>
                      </p>
                      <p className="text-xs text-slate-500 mt-1 flex items-center gap-1"><Clock size={10} /> {activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
}
