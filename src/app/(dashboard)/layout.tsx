"use client";

import { Sidebar } from "@/components/dashboard/Sidebar";
import { Search, Bell, Menu, ArrowLeft, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    if (!isLoggedIn) {
      router.push("/login");
    } else {
      setIsCheckingAuth(false);
    }
  }, [router]);

  if (isCheckingAuth) {
    return (
      <div className="flex min-h-screen bg-slate-950 items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar - Desktop */}
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 lg:hidden"
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 w-[280px] h-full z-[60] lg:hidden"
            >
              <div className="relative h-full">
                <Sidebar permanent />
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute top-6 -right-12 w-10 h-10 bg-slate-900 border border-white/5 rounded-full flex items-center justify-center text-slate-400 hover:text-white lg:hidden shadow-2xl"
                >
                  <X size={24} />
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Navbar */}
        <header className="h-16 border-b border-slate-800/50 bg-slate-950/20 backdrop-blur-md sticky top-0 z-40 flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-3 md:gap-4 flex-1">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden text-slate-400 hover:text-white transition-colors touch-target"
            >
              <Menu size={24} />
            </button>
            <button 
              onClick={() => router.back()}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-bold bg-slate-900/50 hover:bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-800/50 h-9"
            >
              <ArrowLeft size={16} /> <span className="hidden sm:inline">Back</span>
            </button>
            <div className="relative max-w-md w-full hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 w-4 h-4" />
              <input
                type="text"
                placeholder="Search..."
                className="w-full bg-slate-900/40 border border-slate-800 rounded-lg pl-10 pr-4 py-2 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2 text-slate-400 hover:text-white transition-colors"
            >
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full neon-glow-primary" />
            </motion.button>
            
            <div className="h-8 w-[1px] bg-slate-800 mx-1 hidden sm:block" />
            
            <div className="flex items-center gap-2 md:gap-3">
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
        <div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-10 relative scrollbar-hide">
          {/* Ambient background glows */}
          <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />
          <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-secondary/5 blur-[120px] rounded-full -z-10" />
          
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
