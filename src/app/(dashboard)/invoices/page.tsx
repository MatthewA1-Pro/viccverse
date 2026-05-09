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
    <div className="space-y-8 pb-10">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Financial Records</h1>
          <p className="text-slate-400">View and manage all your project invoices and payments.</p>
        </div>
        <div className="flex items-center gap-3">
          <NeonButton variant="outline" size="sm" leftIcon={<Filter size={16} />}>
            Filter
          </NeonButton>
          <NeonButton variant="primary" size="sm" leftIcon={<Plus size={16} />}>
            Create Invoice
          </NeonButton>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <GlassCard className="p-6">
          <p className="text-sm font-medium text-slate-500 mb-2">Total Outstanding</p>
          <h3 className="text-3xl font-black text-white tracking-tight">$24,100.00</h3>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-red-400">
            <AlertCircle size={14} /> 2 invoices overdue
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <p className="text-sm font-medium text-slate-500 mb-2">Total Revenue (MTD)</p>
          <h3 className="text-3xl font-black text-white tracking-tight">$84,350.00</h3>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-emerald-400">
            <CheckCircle2 size={14} /> +12.4% from last month
          </div>
        </GlassCard>
        <GlassCard className="p-6">
          <p className="text-sm font-medium text-slate-500 mb-2">Pending Payments</p>
          <h3 className="text-3xl font-black text-white tracking-tight">$8,900.00</h3>
          <div className="mt-4 flex items-center gap-2 text-xs font-bold text-amber-400">
            <Clock size={14} /> Awaiting 1 transaction
          </div>
        </GlassCard>
      </div>

      <GlassCard className="p-0 overflow-hidden">
        <div className="p-6 border-b border-slate-800/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by ID, client or type..."
              className="w-full bg-slate-900/40 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
            />
          </div>
          <button className="text-sm font-bold text-slate-400 hover:text-white transition-colors flex items-center gap-2">
            Export All <Download size={16} />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-800/50 bg-slate-900/20">
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Invoice ID</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Client</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Type</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Amount</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Date</th>
                <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-widest">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/30">
              {invoices.map((invoice, i) => (
                <motion.tr 
                  key={invoice.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="hover:bg-slate-900/40 transition-colors"
                >
                  <td className="p-4">
                    <span className="text-sm font-bold text-white">{invoice.id}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm font-medium text-slate-300">{invoice.client}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-xs font-medium text-slate-500">{invoice.type}</span>
                  </td>
                  <td className="p-4">
                    <span className="text-sm font-bold text-white">{invoice.amount}</span>
                  </td>
                  <td className="p-4">
                    <StatusBadge status={invoice.status} />
                  </td>
                  <td className="p-4">
                    <span className="text-sm text-slate-500">{invoice.date}</span>
                  </td>
                  <td className="p-4">
                    <button className="p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 text-slate-400 hover:text-white transition-all">
                      <Download size={16} />
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
