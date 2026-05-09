"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { Receipt, Download, Search, Filter, Plus, Clock, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";

const invoices = [
  { id: "INV-2026-001", client: "TechCorp Solutions", amount: "$12,450.00", date: "Sep 12, 2026", status: "Paid", type: "Subscription" },
  { id: "INV-2026-002", client: "GlobalPay Inc.", amount: "$8,900.00", date: "Sep 10, 2026", status: "Pending", type: "Custom Dev" },
  { id: "INV-2026-003", client: "StyleHub E-commerce", amount: "$4,500.00", date: "Sep 08, 2026", status: "Paid", type: "Consulting" },
  { id: "INV-2026-004", client: "Nexus AI Lab", amount: "$15,200.00", date: "Sep 05, 2026", status: "Overdue", type: "Enterprise Plan" },
  { id: "INV-2026-005", client: "Quantum Dynamics", amount: "$2,800.00", date: "Sep 02, 2026", status: "Paid", type: "API Access" },
  { id: "INV-2026-006", client: "SkyNet Systems", amount: "$11,100.00", date: "Aug 28, 2026", status: "Cancelled", type: "Support" },
];

const StatusBadge = ({ status }: { status: string }) => {
  switch (status) {
    case "Paid":
      return (
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
          <CheckCircle2 size={14} /> {status}
        </span>
      );
    case "Pending":
      return (
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-bold uppercase tracking-wider">
          <Clock size={14} /> {status}
        </span>
      );
    case "Overdue":
      return (
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 text-xs font-bold uppercase tracking-wider">
          <AlertCircle size={14} /> {status}
        </span>
      );
    case "Cancelled":
      return (
        <span className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-500/10 text-slate-400 border border-slate-500/20 text-xs font-bold uppercase tracking-wider">
          <XCircle size={14} /> {status}
        </span>
      );
    default:
      return null;
  }
};

export default function InvoicesPage() {
  return (
    <div className="space-y-6 md:space-y-8 pb-10">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 md:gap-6">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white tracking-tight">Financial Records</h1>
          <p className="text-sm md:text-base text-slate-400">View and manage all your project invoices and payments.</p>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <NeonButton variant="outline" size="sm" className="h-10 sm:h-auto" leftIcon={<Filter size={16} />}>
            Filter
          </NeonButton>
          <NeonButton variant="primary" size="sm" className="h-10 sm:h-auto" leftIcon={<Plus size={16} />}>
            Create Invoice
          </NeonButton>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <GlassCard className="p-5 md:p-6">
          <p className="text-[10px] md:text-sm font-medium text-slate-500 mb-1 md:mb-2 uppercase tracking-wider">Total Outstanding</p>
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">$24,100.00</h3>
          <div className="mt-3 md:mt-4 flex items-center gap-2 text-[10px] md:text-xs font-bold text-red-400">
            <AlertCircle size={14} /> 2 invoices overdue
          </div>
        </GlassCard>
        <GlassCard className="p-5 md:p-6">
          <p className="text-[10px] md:text-sm font-medium text-slate-500 mb-1 md:mb-2 uppercase tracking-wider">Total Revenue (MTD)</p>
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">$84,350.00</h3>
          <div className="mt-3 md:mt-4 flex items-center gap-2 text-[10px] md:text-xs font-bold text-emerald-400">
            <CheckCircle2 size={14} /> +12.4% from last month
          </div>
        </GlassCard>
        <GlassCard className="p-5 md:p-6 sm:col-span-2 lg:col-span-1">
          <p className="text-[10px] md:text-sm font-medium text-slate-500 mb-1 md:mb-2 uppercase tracking-wider">Pending Payments</p>
          <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">$8,900.00</h3>
          <div className="mt-3 md:mt-4 flex items-center gap-2 text-[10px] md:text-xs font-bold text-amber-400">
            <Clock size={14} /> Awaiting 1 transaction
          </div>
        </GlassCard>
      </div>

      <GlassCard className="p-0 overflow-hidden">
        <div className="p-4 md:p-6 border-b border-slate-800/50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-none sm:max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search invoices..."
              className="w-full bg-slate-900/40 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
            />
          </div>
          <button className="text-xs md:text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center justify-center gap-2 px-4 py-2 border border-white/5 rounded-lg sm:border-none sm:p-0 active:scale-95">
            Export <span className="hidden sm:inline">All</span> <Download size={16} />
          </button>
        </div>

        <div className="overflow-x-auto scrollbar-hide">
          <table className="w-full text-left min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-800/50 bg-slate-900/20">
                <th className="p-4 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Invoice ID</th>
                <th className="p-4 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Client</th>
                <th className="p-4 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Type</th>
                <th className="p-4 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Amount</th>
                <th className="p-4 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="p-4 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
                <th className="p-4 text-[10px] md:text-xs font-bold text-slate-500 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/30">
              {invoices.map((invoice, i) => (
                <motion.tr 
                  key={invoice.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-900/40 transition-colors group"
                >
                  <td className="p-4">
                    <span className="text-xs md:text-sm font-bold text-white group-hover:text-primary transition-colors">{invoice.id}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-xs md:text-sm font-medium text-slate-300">{invoice.client}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-[10px] md:text-xs font-medium text-slate-500">{invoice.type}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-xs md:text-sm font-bold text-white">{invoice.amount}</span>
                  </td>
                  <td className="p-4">
                    <StatusBadge status={invoice.status} />
                  </td>
                  <td className="p-4">
                    <span className="text-[10px] md:text-xs text-slate-500">{invoice.date}</span>
                  </td>
                  <td className="p-4">
                    <button className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-all active:scale-90">
                      <Download size={14} />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </GlassCard>
    </div>
  );
}
