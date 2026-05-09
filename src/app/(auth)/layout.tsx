"use client";

import { motion } from "framer-motion";
import { Zap, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col relative overflow-hidden pt-24">
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 dark:bg-primary/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/10 dark:bg-secondary/20 blur-[120px] rounded-full" />

      {/* Header - Fixed and with signup link */}
      <header className="fixed top-0 left-0 w-full z-20 bg-background/80 backdrop-blur-xl flex items-center justify-between p-4 md:p-8 border-b border-border shadow-sm">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm font-bold bg-muted border border-border px-3 py-2 rounded-lg">
            <ArrowLeft size={16} /> <span className="hidden sm:inline">Back to Website</span>
          </Link>
          <Link href="/" className="hidden md:flex items-center gap-3 w-fit">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center neon-glow-primary">
              <Zap className="text-white w-4 h-4 fill-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-foreground">
              Vicc<span className="text-primary">verse</span>
            </span>
          </Link>
        </div>
        {/* Sign Up button */}
        <Link href="/signup" className="px-4 py-2 bg-primary text-white rounded-xl hover:bg-primary/90 transition-all font-bold text-sm shadow-lg shadow-primary/20 active:scale-95">
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
        <p className="text-sm text-muted-foreground">
          © 2026 Viccverse Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
