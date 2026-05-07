"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/InputAndBadge";
import { recentTransactions } from "@/lib/data";
import { MoreHorizontal, ArrowUpRight } from "lucide-react";

export function RecentTransactions() {
  return (
    <GlassCard className="h-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-bold text-white">Recent Transactions</h3>
          <p className="text-sm text-slate-500">Latest business activity across all channels</p>
        </div>
        <button className="p-2 hover:bg-slate-800 rounded-lg transition-colors text-slate-400">
          <MoreHorizontal size={20} />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left border-b border-slate-800">
              <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider">Transaction ID</th>
              <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider">Customer</th>
              <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider">Status</th>
              <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider text-right">Amount</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/50">
            {recentTransactions.map((tx) => (
              <tr key={tx.id} className="group hover:bg-slate-800/30 transition-colors">
                <td className="py-4">
                  <span className="text-sm font-mono text-slate-400">{tx.id}</span>
                </td>
                <td className="py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[10px] font-bold">
                      {tx.user.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-200">{tx.user}</p>
                      <p className="text-[10px] text-slate-500">{tx.date}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4">
                  <Badge variant={
                    tx.status === "Completed" ? "success" : 
                    tx.status === "Pending" ? "warning" : "error"
                  }>
                    {tx.status}
                  </Badge>
                </td>
                <td className="py-4 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <span className="text-sm font-bold text-white">{tx.amount}</span>
                    <ArrowUpRight size={12} className="text-slate-500 group-hover:text-primary transition-colors" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button className="w-full mt-6 py-2 text-sm font-semibold text-slate-400 hover:text-white border border-dashed border-slate-800 rounded-xl hover:border-slate-700 transition-all">
        View All Transactions
      </button>
    </GlassCard>
  );
}
