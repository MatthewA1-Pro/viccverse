"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { TrendingUp, TrendingDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  label: string;
  value: string;
  growth: string;
  trend: "up" | "down";
  subtext: string;
}

export function StatCard({ label, value, growth, trend, subtext }: StatCardProps) {
  return (
    <GlassCard className="group hover:border-primary/30 transition-all duration-300">
      <p className="text-sm font-medium text-slate-400 mb-1">{label}</p>
      <div className="flex items-end justify-between">
        <h3 className="text-3xl font-bold text-white tracking-tight">{value}</h3>
        <div className={cn(
          "flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-bold",
          trend === "up" ? "text-emerald-400 bg-emerald-400/10" : "text-rose-400 bg-rose-400/10"
        )}>
          {trend === "up" ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
          {growth}
        </div>
      </div>
      <p className="text-[10px] text-slate-500 mt-2 uppercase tracking-wider font-bold">
        {subtext}
      </p>
    </GlassCard>
  );
}
