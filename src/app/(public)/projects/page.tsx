"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { 
  ArrowUpRight, 
  Search, 
  Filter, 
  ExternalLink, 
  Github,
  Zap,
  TrendingUp,
  Target,
  Users
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const categories = ["All", "SaaS", "Fintech", "AI", "Enterprise", "HealthTech"];

const allProjects = [
  { 
    title: "EcoSphere Analytics", 
    category: "SaaS", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    impact: "+45% Efficiency",
    client: "EcoCorp Int",
    tech: ["Next.js", "Python", "Recharts"]
  },
  { 
    title: "Nova Fintech Suite", 
    category: "Fintech", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    impact: "$2M Vol/mo",
    client: "Nova Bank",
    tech: ["React", "Supabase", "Chart.js"]
  },
  { 
    title: "Zenith AI CRM", 
    category: "AI", 
    image: "https://images.unsplash.com/photo-1504868584819-f8e90526354c?auto=format&fit=crop&q=80&w=800",
    impact: "98% Support Acc",
    client: "Z-Enterprise",
    tech: ["Node.js", "OpenAI", "PostgreSQL"]
  },
  { 
    title: "VitalTrack Health", 
    category: "HealthTech", 
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800",
    impact: "10k+ Daily Users",
    client: "Vitality Labs",
    tech: ["ReactNative", "Firebase"]
  },
  { 
    title: "Quantum Cloud", 
    category: "Enterprise", 
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    impact: "0.2ms Latency",
    client: "Quantum Ltd",
    tech: ["Go", "Kubernetes", "AWS"]
  },
  { 
    title: "Aura Design System", 
    category: "SaaS", 
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    impact: "20+ Apps Using",
    client: "Vortex Internal",
    tech: ["Storybook", "Tailwind"]
  },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-40 space-y-40 pb-40">
      <section className="px-6 max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
          Case <span className="text-primary">Studies</span>.
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
          A showcase of high-performance systems and visual intelligences we've 
          built for visionaries worldwide.
        </p>
      </section>

      {/* Filters */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-20">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-xl text-sm font-bold transition-all border ${
                activeCategory === cat 
                  ? 'bg-primary border-primary text-white neon-glow-primary' 
                  : 'bg-slate-900 border-slate-800 text-slate-500 hover:text-white hover:border-slate-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <GlassCard key={i} className="p-0 border-white/5 group overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <button className="p-3 rounded-full bg-white text-slate-950 hover:scale-110 transition-transform">
                    <ExternalLink size={20} />
                  </button>
                  <button className="p-3 rounded-full bg-slate-900 text-white hover:scale-110 transition-transform">
                    <Github size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{project.category}</span>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-400 uppercase">
                    <TrendingUp size={12} />
                    {project.impact}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-[10px] px-2 py-1 rounded bg-slate-800 text-slate-500 font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Client: {project.client}</span>
                  <NeonButton variant="ghost" size="sm" rightIcon={<ArrowUpRight size={14} />}>
                    View
                  </NeonButton>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Global Impact Stat */}
      <section className="px-6 py-32 bg-slate-950/50 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-2">
            <Users className="text-primary mx-auto mb-4" size={40} />
            <h4 className="text-4xl font-black text-white">5M+</h4>
            <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">End Users Impacted</p>
          </div>
          <div className="space-y-2">
            <Zap className="text-secondary mx-auto mb-4" size={40} />
            <h4 className="text-4xl font-black text-white">200+</h4>
            <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">Dashboards Deployed</p>
          </div>
          <div className="space-y-2">
            <Target className="text-emerald-500 mx-auto mb-4" size={40} />
            <h4 className="text-4xl font-black text-white">100%</h4>
            <p className="text-sm text-slate-500 uppercase font-bold tracking-widest">Project Delivery Rate</p>
          </div>
        </div>
      </section>
    </div>
  );
}
