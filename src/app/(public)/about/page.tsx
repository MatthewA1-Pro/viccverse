"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/InputAndBadge";
import { 
  Users, 
  Target, 
  Zap, 
  Shield, 
  Globe, 
  Heart,
  Briefcase,
  History,
  Trophy
} from "lucide-react";
import { motion } from "framer-motion";

const team = [
  { name: "Sarah Jenkins", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
  { name: "David Chen", role: "CTO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
  { name: "Elena Rodriguez", role: "Head of Product", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" },
  { name: "Marcus Wright", role: "Lead Data Scientist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
];

const milestones = [
  { year: "2022", title: "Inception", desc: "Vortex was founded in a small garage in Palo Alto." },
  { year: "2023", title: "Series A", desc: "Raised $12M to expand our predictive analytics engine." },
  { year: "2024", title: "Global Expansion", desc: "Opened offices in London and Singapore." },
  { year: "2025", title: "Enterprise Launch", desc: "Released our high-scale data infrastructure for Fortune 500s." },
];

export default function AboutPage() {
  return (
    <div className="pt-40 space-y-40 pb-40">
      {/* Hero Section */}
      <section className="px-6 max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
          Transcending the <span className="text-primary">Status Quo</span>.
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
          We started Vortex because we were tired of "business intelligence" that wasn't 
          actually intelligent. Our mission is to provide businesses with a window into the future.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <GlassCard className="p-10 space-y-6 border-primary/20">
          <Target className="text-primary" size={40} />
          <h2 className="text-3xl font-bold text-white">Our Vision</h2>
          <p className="text-slate-400 leading-relaxed">
            To become the global standard for predictive intelligence, where data doesn't 
            just describe the past but dictates a successful future for every organization.
          </p>
        </GlassCard>
        <GlassCard className="p-10 space-y-6 border-secondary/20">
          <Heart className="text-secondary" size={40} />
          <h2 className="text-3xl font-bold text-white">Our Values</h2>
          <p className="text-slate-400 leading-relaxed">
            Integrity, precision, and relentless innovation. we believe that data should 
            be accessible, beautiful, and profoundly useful to everyone.
          </p>
        </GlassCard>
      </section>

      {/* Milestone Timeline */}
      <section className="px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-20">The Journey.</h2>
        <div className="space-y-12">
          {milestones.map((m, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-10 items-center md:items-start group">
              <div className="w-24 text-3xl font-black text-primary/50 group-hover:text-primary transition-colors">
                {m.year}
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-xl font-bold text-white">{m.title}</h3>
                <p className="text-slate-400">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">The Brains.</h2>
          <p className="text-slate-400">A diverse team of scientists, engineers, and designers.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="text-center group"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl group-hover:bg-primary/40 transition-colors" />
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="relative w-full h-full object-cover rounded-3xl grayscale hover:grayscale-0 transition-all duration-500 border border-white/10"
                />
              </div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-slate-500 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Statistics */}
      <section className="px-6 py-20 bg-slate-950/50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { icon: Briefcase, value: "150+", label: "Employees" },
            { icon: Globe, value: "45", label: "Countries" },
            { icon: Trophy, value: "12", label: "Tech Awards" },
            { icon: History, value: "24/7", label: "Support" },
          ].map((stat, i) => (
            <div key={i} className="space-y-3">
              <div className="flex items-center justify-center text-primary mb-2">
                <stat.icon size={32} />
              </div>
              <p className="text-3xl font-black text-white">{stat.value}</p>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
