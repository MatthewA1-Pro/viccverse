"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#020617] flex flex-col relative overflow-hidden pt-24">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 blur-[120px] rounded-full" />
      <div className="absolute top-[20%] right-[10%] w-[20%] h-[20%] bg-violet-500/10 blur-[80px] rounded-full" />

      {/* Header - Fixed and with signup link */}
      <header className="fixed top-0 left-0 w-full z-20 bg-[#020617] flex items-center justify-between p-4 md:p-8 shadow-lg">
        <Link href="/" className="flex items-center gap-3 w-fit">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center neon-glow-primary">
            <Zap className="text-white w-6 h-6 fill-white" />
          </div>
          <span className="font-bold text-2xl tracking-tight text-white">
            Vortex<span className="text-primary">Pro</span>
          </span>
        </Link>
        {/* Sign Up button */}
        <Link href="/signup" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors">
          Create Account
        </Link>
      </header>

      {/* Main Content - offset for fixed header */}
      <main className="flex-1 flex items-center justify-center p-6 relative z-10 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 p-8 text-center">
        <p className="text-sm text-slate-500">
          © 2026 Vortex Analytics Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
