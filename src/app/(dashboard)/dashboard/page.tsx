"use client";

import { StatCard } from "@/components/dashboard/StatCard";
import { RevenueChart, UserGrowthChart } from "@/components/dashboard/Charts";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";
import { GlassCard } from "@/components/ui/GlassCard";
import { statsData } from "@/lib/data";
import { Download, Calendar, Filter } from "lucide-react";
import { NeonButton } from "@/components/ui/NeonButton";

export default function DashboardOverview() {
  return (
    <div className="space-y-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Dashboard Overview</h1>
          <p className="text-slate-400">Welcome back, Alex. Here's what's happening today.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <NeonButton variant="outline" size="sm" leftIcon={<Calendar size={16} />}>
            Last 30 Days
          </NeonButton>
          <NeonButton variant="outline" size="sm" leftIcon={<Filter size={16} />}>
            Filters
          </NeonButton>
          <NeonButton variant="primary" size="sm" leftIcon={<Download size={16} />}>
            Export Reports
          </NeonButton>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsData.map((stat, index) => (
          <StatCard key={index} {...stat as any} />
        ))}
      </div>

      {/* Main Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <GlassCard className="lg:col-span-2 overflow-visible">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-lg font-bold text-white">Revenue Analysis</h3>
              <p className="text-sm text-slate-500">Monthly revenue growth and projections</p>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-primary" />
                <span className="text-xs text-slate-400">Revenue</span>
              </div>
            </div>
          </div>
          <RevenueChart />
        </GlassCard>

        <GlassCard>
          <div className="mb-8">
            <h3 className="text-lg font-bold text-white">User Acquisition</h3>
            <p className="text-sm text-slate-500">Weekly breakdown of new users</p>
          </div>
          <UserGrowthChart />
        </GlassCard>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <RecentTransactions />
        </div>
        
        <GlassCard className="flex flex-col">
          <h3 className="text-lg font-bold text-white mb-6">Traffic Sources</h3>
          <div className="space-y-6 flex-1">
            {[
              { label: "Direct", value: "45%", color: "bg-primary" },
              { label: "Organic Search", value: "28%", color: "bg-secondary" },
              { label: "Social Media", value: "15%", color: "bg-emerald-500" },
              { label: "Referral", value: "12%", color: "bg-amber-500" },
            ].map((source, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">{source.label}</span>
                  <span className="font-bold text-white">{source.value}</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div className={`h-full ${source.color}`} style={{ width: source.value }} />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 p-4 rounded-2xl bg-primary/5 border border-primary/20 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold">New</span>
            </div>
            <div>
              <p className="text-sm font-bold text-white">Vortex Pro AI</p>
              <p className="text-xs text-slate-500">Predictive analytics is now active.</p>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
