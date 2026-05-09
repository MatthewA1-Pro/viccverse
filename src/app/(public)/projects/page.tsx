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
    tech: ["Next.js", "Tailwind", "PostgreSQL"]
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
    tech: ["Next.js", "OpenAI", "Supabase"]
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
    tech: ["Next.js", "AWS", "Node.js"]
  },
  { 
    title: "Viccverse Platform", 
    category: "SaaS", 
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800",
    impact: "In-House System",
    client: "Viccverse",
    tech: ["Next.js", "Tailwind", "Framer"]
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
        <h1 className="text-5xl md:text-8xl font-black text-foreground tracking-tighter">
          Case <span className="text-primary">Studies</span>.
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-balance">
          A showcase of high-performance digital systems and visual products we've 
          built for ambitious brands worldwide.
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
                  ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' 
                  : 'bg-muted border-border text-muted-foreground hover:text-foreground hover:border-primary/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, i) => (
            <GlassCard key={i} className="p-0 border-border group overflow-hidden">
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 backdrop-blur-sm">
                  <button className="p-3 rounded-full bg-foreground text-background hover:scale-110 transition-transform shadow-xl" aria-label="Visit Site">
                    <ExternalLink size={20} />
                  </button>
                  <button className="p-3 rounded-full bg-muted text-foreground border border-border hover:scale-110 transition-transform shadow-xl" aria-label="Github Repo">
                    <Github size={20} />
                  </button>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{project.category}</span>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-500 uppercase">
                    <TrendingUp size={12} />
                    {project.impact}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((t, j) => (
                    <span key={j} className="text-[10px] px-2 py-1 rounded bg-muted text-muted-foreground font-medium border border-border">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="pt-6 border-t border-border flex items-center justify-between">
                  <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-tight">Client: {project.client}</span>
                  <NeonButton variant="ghost" size="sm" rightIcon={<ArrowUpRight size={14} />}>
                    View Case
                  </NeonButton>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Global Impact Stat */}
      <section className="px-6 py-32 bg-muted/30 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-2">
            <Users className="text-primary mx-auto mb-4" size={40} />
            <h4 className="text-4xl font-black text-foreground">5M+</h4>
            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">End Users Impacted</p>
          </div>
          <div className="space-y-2">
            <Zap className="text-secondary mx-auto mb-4" size={40} />
            <h4 className="text-4xl font-black text-foreground">200+</h4>
            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Products Shipped</p>
          </div>
          <div className="space-y-2">
            <Target className="text-emerald-500 mx-auto mb-4" size={40} />
            <h4 className="text-4xl font-black text-foreground">100%</h4>
            <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Delivery Success</p>
          </div>
        </div>
      </section>
    </div>
  );
}
