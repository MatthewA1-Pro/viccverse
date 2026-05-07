"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { RevenueChart } from "@/components/dashboard/Charts";
import { 
  Radar, 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid
} from "recharts";
import { NeonButton } from "@/components/ui/NeonButton";
import { Download, Calendar, Activity, Zap, Users, Target } from "lucide-react";

const radarData = [
  { subject: 'Engagement', A: 120, B: 110, fullMark: 150 },
  { subject: 'Retention', A: 98, B: 130, fullMark: 150 },
  { subject: 'Revenue', A: 86, B: 130, fullMark: 150 },
  { subject: 'Support', A: 99, B: 100, fullMark: 150 },
  { subject: 'Viral', A: 85, B: 90, fullMark: 150 },
  { subject: 'Uptime', A: 65, B: 85, fullMark: 150 },
];

const pieData = [
  { name: 'Desktop', value: 400 },
  { name: 'Mobile', value: 300 },
  { name: 'Tablet', value: 200 },
  { name: 'Unknown', value: 100 },
];

const COLORS = ['#8b5cf6', '#06b6d4', '#f43f5e', '#10b981'];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Advanced Analytics</h1>
          <p className="text-slate-400">Deep dive into your business performance metrics.</p>
        </div>
        <div className="flex items-center gap-3">
          <NeonButton variant="outline" size="sm" leftIcon={<Calendar size={16} />}>
            Custom Range
          </NeonButton>
          <NeonButton variant="primary" size="sm" leftIcon={<Download size={16} />}>
            Download CSV
          </NeonButton>
        </div>
      </div>

      {/* Real-time stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Live Visitors", value: "1,284", icon: Users, color: "text-primary" },
          { label: "Active Sessions", value: "852", icon: Activity, color: "text-secondary" },
          { label: "Avg. Load Time", value: "240ms", icon: Zap, color: "text-emerald-500" },
        ].map((stat, i) => (
          <GlassCard key={i} className="flex items-center gap-6">
            <div className={`p-4 rounded-2xl bg-slate-800/50 ${stat.color}`}>
              <stat.icon size={24} />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Radar Chart */}
        <GlassCard>
          <h3 className="text-lg font-bold text-white mb-6">Performance Radar</h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: "#64748b", fontSize: 12 }} />
                <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} axisLine={false} />
                <Radar
                  name="Current Month"
                  dataKey="A"
                  stroke="#8b5cf6"
                  fill="#8b5cf6"
                  fillOpacity={0.5}
                />
                <Radar
                  name="Last Month"
                  dataKey="B"
                  stroke="#06b6d4"
                  fill="#06b6d4"
                  fillOpacity={0.3}
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                  itemStyle={{ color: '#fff' }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        {/* Device Distribution */}
        <GlassCard>
          <h3 className="text-lg font-bold text-white mb-6">Device Distribution</h3>
          <div className="h-[350px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  innerRadius={80}
                  outerRadius={120}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute flex flex-col items-center justify-center">
              <span className="text-4xl font-bold text-white">1k</span>
              <span className="text-xs text-slate-500 uppercase tracking-widest font-bold">Total Devices</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            {pieData.map((d, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                <span className="text-xs text-slate-400">{d.name} ({Math.round(d.value / 10)}%)</span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>

      {/* Full width activity timeline */}
      <GlassCard>
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-lg font-bold text-white">User Activity Timeline</h3>
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs text-slate-400">Events</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-xs text-slate-400">Errors</span>
            </div>
          </div>
        </div>
        <RevenueChart />
      </GlassCard>
    </div>
  );
}
