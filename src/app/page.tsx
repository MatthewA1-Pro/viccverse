"use client";

import { NeonButton } from "@/components/ui/NeonButton";
import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Zap, BarChart3, Shield, Globe, ArrowRight, ChevronRight, Play, Github, CheckCircle2, X, Menu } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function LandingPage() {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-primary/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-secondary/10 blur-[120px] rounded-full" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/20 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center neon-glow-primary">
              <Zap className="text-white w-5 h-5 fill-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">Vortex<span className="text-primary">Pro</span></span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
            <Link href="#" className="hover:text-white transition-colors">Features</Link>
            <Link href="#" className="hover:text-white transition-colors">Solutions</Link>
            <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
            <Link href="#" className="hover:text-white transition-colors">Documentation</Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm font-semibold hover:text-primary transition-colors">Sign in</Link>
            <Link href="/signup">
              <NeonButton size="sm">Get Started</NeonButton>
            </Link>
          </div>
        </div>

        {/* Mobile navigation panel */}
        {navOpen && (
          <div className="md:hidden bg-slate-950/30 backdrop-blur-md border-t border-white/5">
            <div className="flex flex-col gap-4 py-4 px-6 text-sm font-medium text-slate-400">
              <Link href="#" className="hover:text-white transition-colors">Features</Link>
              <Link href="#" className="hover:text-white transition-colors">Solutions</Link>
              <Link href="#" className="hover:text-white transition-colors">Pricing</Link>
              <Link href="#" className="hover:text-white transition-colors">Documentation</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Now in Private Beta
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1]"
          >
            Predict the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">Future</span> of Your Business.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the next generation of data analytics. Real-time insights, 
            AI-driven forecasting, and stunning visualizations built for modern teams.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link href="/signup" className="w-full sm:w-auto">
              <NeonButton size="lg" className="w-full sm:w-auto" rightIcon={<ArrowRight size={20} />}>
                Start Your Journey
              </NeonButton>
            </Link>
            <Link href="#" className="w-full sm:w-auto">
              <NeonButton variant="outline" size="lg" className="w-full sm:w-auto" leftIcon={<Play size={20} />}>
                Watch Demo
              </NeonButton>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="px-6 pb-40">
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-6xl mx-auto relative group"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-90 group-hover:scale-100 transition-transform duration-1000 -z-10" />
          <div className="rounded-3xl border border-white/10 bg-slate-900/50 backdrop-blur-xl p-4 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 mb-4 px-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-amber-500/50" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
              </div>
              <div className="flex-1 bg-white/5 rounded-lg h-6 flex items-center justify-center text-[10px] text-slate-500 font-mono">
                vortex-analytics-pro.vercel.app/dashboard
              </div>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
              alt="Dashboard Preview" 
              className="rounded-xl w-full border border-white/5 opacity-80"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="px-6 py-20 bg-slate-950/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Built for Scale.</h2>
            <p className="text-slate-400 max-w-xl mx-auto">Vortex provides everything you need to understand your users and grow your revenue.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: "Deep Analytics", desc: "Drill down into every metric with precision. Custom reports at your fingertips." },
              { icon: Globe, title: "Global Scale", desc: "Edge-ready infrastructure ensures lightning fast performance anywhere in the world." },
              { icon: Shield, title: "Enterprise Security", desc: "Military-grade encryption and advanced access controls keep your data safe." }
            ].map((f, i) => (
              <GlassCard key={i} className="hover:border-primary/50 transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <f.icon className="text-primary w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{f.title}</h3>
                <p className="text-slate-400 leading-relaxed">{f.desc}</p>
                <div className="mt-6 flex items-center text-primary text-sm font-bold gap-1 cursor-pointer">
                  Learn more <ChevronRight size={16} />
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="px-6 py-40 text-center">
        <div className="max-w-3xl mx-auto space-y-10">
          <h2 className="text-4xl md:text-6xl font-bold">Ready to transcend?</h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/signup">
              <NeonButton size="lg">Get Started Now</NeonButton>
            </Link>
            <Link href="https://github.com" target="_blank">
              <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer font-bold">
                <Github size={24} />
                View on GitHub
              </div>
            </Link>
          </div>
          
          <div className="pt-20 grid grid-cols-2 md:grid-cols-4 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            <div className="flex items-center justify-center gap-2 font-bold text-xl"><CheckCircle2 /> Stripe</div>
            <div className="flex items-center justify-center gap-2 font-bold text-xl"><CheckCircle2 /> Linear</div>
            <div className="flex items-center justify-center gap-2 font-bold text-xl"><CheckCircle2 /> Vercel</div>
            <div className="flex items-center justify-center gap-2 font-bold text-xl"><CheckCircle2 /> Notion</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
