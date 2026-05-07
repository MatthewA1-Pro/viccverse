"use client";

import { NeonButton } from "@/components/ui/NeonButton";
import { motion } from "framer-motion";
import { ArrowLeft, Home, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#020617] flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[150px] rounded-full -z-10" />
      
      <div className="max-w-2xl w-full text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-[180px] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-800 opacity-20">
            404
          </h1>
        </motion.div>

        <div className="space-y-4">
          <h2 className="text-4xl font-bold text-white tracking-tight">Lost in the Void</h2>
          <p className="text-slate-400 text-lg max-w-md mx-auto">
            The page you are looking for has been swallowed by the vortex. 
            Don't worry, even the best analysts get lost sometimes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/dashboard" className="w-full sm:w-auto">
            <NeonButton size="lg" className="w-full sm:w-auto" leftIcon={<Home size={20} />}>
              Back to Dashboard
            </NeonButton>
          </Link>
          <Link href="/" className="w-full sm:w-auto">
            <NeonButton variant="outline" size="lg" className="w-full sm:w-auto" leftIcon={<ArrowLeft size={20} />}>
              Return Home
            </NeonButton>
          </Link>
        </div>

        <div className="pt-12 relative max-w-sm mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Try searching for something else..." 
            className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl pl-12 pr-4 py-4 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all shadow-2xl"
          />
        </div>
      </div>

      {/* Decorative floating elements */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          className="absolute hidden lg:block opacity-20"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
        >
          <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-primary to-secondary blur-sm" />
        </motion.div>
      ))}
    </div>
  );
}
