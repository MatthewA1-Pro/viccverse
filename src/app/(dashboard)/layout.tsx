"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { Search, Bell, Menu, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - Desktop */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 border-b border-slate-800/50 bg-slate-950/20 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-6">
          <div className="flex items-center gap-4 flex-1">
            <button className="lg:hidden text-slate-400 hover:text-white transition-colors">
              <Menu size={24} />
            </button>
            <button 
              onClick={() => router.back()}
              className="hidden sm:flex text-slate-400 hover:text-white transition-colors items-center gap-2 text-sm font-bold bg-slate-900/50 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800/50"
            >
              <ArrowLeft size={16} /> Back
            </button>
            <div className="relative max-w-md w-full hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search analytics, reports, users..."
                className="w-full bg-slate-900/40 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-slate-400 hover:text-white transition-colors"
            >
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full neon-glow-primary" />
            </motion.button>
            
            <div className="h-8 w-[1px] bg-slate-800 mx-2 hidden sm:block" />
            
            <div className="flex items-center gap-3">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-semibold text-slate-200">Alex Rivera</p>
                <p className="text-[10px] text-slate-500">Administrator</p>
              </div>
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary p-[1px]">
                <div className="w-full h-full rounded-[7px] bg-slate-950 flex items-center justify-center text-xs font-bold">
                  AR
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-10 relative">
          {/* Ambient background glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 blur-[120px] rounded-full -z-10" />
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </div>
      </main>
    </div>
  );
}
