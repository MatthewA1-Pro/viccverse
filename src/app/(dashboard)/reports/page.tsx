"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/InputAndBadge";
import { NeonButton } from "@/components/ui/NeonButton";
import { 
  Search, 
  Filter, 
  Download, 
  FileText, 
  MoreVertical,
  ChevronLeft,
  ChevronRight,
  Printer,
  Share2
} from "lucide-react";
import { useState } from "react";

const reports = [
  { id: "REP-2024-001", name: "Q1 Financial Summary", type: "Financial", date: "May 12, 2024", size: "2.4 MB", status: "Generated" },
  { id: "REP-2024-002", name: "User Retention Audit", type: "Product", date: "May 10, 2024", size: "1.8 MB", status: "Generated" },
  { id: "REP-2024-003", name: "Marketing Campaign ROI", type: "Marketing", date: "May 08, 2024", size: "3.2 MB", status: "Pending" },
  { id: "REP-2024-004", name: "Annual Growth Forecast", type: "Executive", date: "May 05, 2024", size: "5.1 MB", status: "Generated" },
  { id: "REP-2024-005", name: "Customer Support Health", type: "Operations", date: "May 01, 2024", size: "0.9 MB", status: "Failed" },
  { id: "REP-2024-006", name: "Infrastructure Cost Analysis", type: "Technical", date: "Apr 28, 2024", size: "1.2 MB", status: "Generated" },
  { id: "REP-2024-007", name: "Global Traffic Distribution", type: "Technical", date: "Apr 25, 2024", size: "2.7 MB", status: "Generated" },
];

export default function ReportsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">System Reports</h1>
          <p className="text-slate-400">Access and export your business intelligence data.</p>
        </div>
        <div className="flex items-center gap-3">
          <NeonButton variant="primary" size="sm" leftIcon={<FileText size={16} />}>
            Generate New Report
          </NeonButton>
        </div>
      </div>

      <GlassCard className="overflow-visible">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search reports..."
              className="w-full bg-slate-900/50 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <NeonButton variant="outline" size="sm" leftIcon={<Filter size={16} />}>
              Filter
            </NeonButton>
            <NeonButton variant="outline" size="sm" leftIcon={<Download size={16} />}>
              Batch Export
            </NeonButton>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left border-b border-slate-800">
                <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider pl-4">Report Details</th>
                <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider">Category</th>
                <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider">Date</th>
                <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider">Size</th>
                <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider">Status</th>
                <th className="pb-4 font-semibold text-slate-400 text-xs uppercase tracking-wider text-right pr-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {reports.map((report) => (
                <tr key={report.id} className="group hover:bg-slate-800/30 transition-colors">
                  <td className="py-5 pl-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-primary">
                        <FileText size={20} />
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{report.name}</p>
                        <p className="text-xs text-slate-500 font-mono">{report.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-5">
                    <span className="text-xs font-medium text-slate-300 bg-slate-800/50 px-2.5 py-1 rounded-lg">
                      {report.type}
                    </span>
                  </td>
                  <td className="py-5">
                    <p className="text-sm text-slate-400">{report.date}</p>
                  </td>
                  <td className="py-5">
                    <p className="text-sm font-mono text-slate-500">{report.size}</p>
                  </td>
                  <td className="py-5">
                    <Badge variant={
                      report.status === "Generated" ? "success" : 
                      report.status === "Pending" ? "warning" : "error"
                    }>
                      {report.status}
                    </Badge>
                  </td>
                  <td className="py-5 text-right pr-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-slate-500 hover:text-white transition-colors">
                        <Download size={18} />
                      </button>
                      <button className="p-2 text-slate-500 hover:text-white transition-colors">
                        <Share2 size={18} />
                      </button>
                      <button className="p-2 text-slate-500 hover:text-white transition-colors">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 pt-6">
          <p className="text-sm text-slate-500">
            Showing <span className="text-white font-bold">1</span> to <span className="text-white font-bold">7</span> of <span className="text-white font-bold">24</span> reports
          </p>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-500 disabled:opacity-50" disabled>
              <ChevronLeft size={18} />
            </button>
            {[1, 2, 3].map((page) => (
              <button 
                key={page}
                className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all ${
                  page === 1 ? 'bg-primary text-white neon-glow-primary' : 'bg-slate-800 border border-slate-700 text-slate-400 hover:text-white'
                }`}
              >
                {page}
              </button>
            ))}
            <button className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-400 hover:text-white">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </GlassCard>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard className="flex items-center justify-between p-8 border-primary/20">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">Scheduled Reports</h3>
            <p className="text-sm text-slate-400">Manage your automated report deliveries.</p>
            <NeonButton variant="outline" size="sm" className="mt-4">
              Configure Schedules
            </NeonButton>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
            <Printer size={32} />
          </div>
        </GlassCard>

        <GlassCard className="flex items-center justify-between p-8 border-secondary/20">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-white">API Integrations</h3>
            <p className="text-sm text-slate-400">Connect your reports to external tools.</p>
            <NeonButton variant="outline" size="sm" className="mt-4">
              View API Docs
            </NeonButton>
          </div>
          <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
            <Share2 size={32} />
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
