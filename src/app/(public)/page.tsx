"use client";

import { NeonButton } from "@/components/ui/NeonButton";
import { GlassCard } from "@/components/ui/GlassCard";
import { 
  Zap, 
  BarChart3, 
  Shield, 
  Globe, 
  ArrowRight, 
  ChevronRight,
  Play,
  CheckCircle2,
  Database,
  Cpu,
  Layers,
  Code2,
  Smartphone,
  PieChart,
  Activity,
  Target,
  TrendingUp,
  MessageSquare,
  Plus
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const services = [
  { icon: BarChart3, title: "Data Analytics", desc: "Predictive modeling and deep statistical analysis for complex datasets." },
  { icon: PieChart, title: "Business Intelligence", desc: "Transform raw data into actionable business strategies and insights." },
  { icon: Layers, title: "Dashboard Dev", desc: "Custom, high-performance visual interfaces built with React & Next.js." },
  { icon: Cpu, title: "AI Automation", desc: "Smart workflows powered by machine learning to reduce manual overhead." },
  { icon: Code2, title: "Web Development", desc: "Scalable, secure, and modern web applications for tech-forward brands." },
  { icon: Database, title: "Cloud Integration", desc: "Seamless synchronization of your data across AWS, Azure, and Google Cloud." },
];

const projects = [
  { 
    title: "EcoSphere Dashboard", 
    category: "Sustainability", 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    results: "+45% Efficiency",
    tech: "Next.js, Python"
  },
  { 
    title: "Nova Fintech App", 
    category: "Finance", 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    results: "2M+ Transactions",
    tech: "React, Supabase"
  },
  { 
    title: "Zenith AI CRM", 
    category: "Enterprise", 
    image: "https://images.unsplash.com/photo-1504868584819-f8e90526354c?auto=format&fit=crop&q=80&w=800",
    results: "98% Accuracy",
    tech: "Node.js, OpenAI"
  }
];

const faqs = [
  { q: "How long does a typical integration take?", a: "Most integrations are completed within 2-4 weeks depending on complexity." },
  { q: "Do you offer custom dashboard designs?", a: "Yes, every dashboard we build is tailored to your specific business requirements." },
  { q: "Is my data secure with Vortex?", a: "Absolutely. We use enterprise-grade encryption and comply with GDPR/CCPA standards." },
  { q: "Can we migrate from our existing system?", a: "We provide full migration support from any legacy platform with zero downtime." }
];

export default function LandingPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <div className="space-y-40 pb-40">
      {/* Hero Section */}
      <section className="relative pt-48 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-xs font-bold uppercase tracking-widest text-primary"
          >
            <Zap size={14} className="animate-pulse" />
            Empowering 10k+ Modern Businesses
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tight leading-[1] max-w-4xl mx-auto"
          >
            Data Intelligence for the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">Future</span>.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Vortex Analytics transcends traditional business intelligence. We provide 
            AI-driven forecasting and stunning visualizations that turn data into destiny.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Link href="/signup">
              <NeonButton size="lg" rightIcon={<ArrowRight size={20} />}>Start Free Trial</NeonButton>
            </Link>
            <Link href="#demo">
              <NeonButton variant="outline" size="lg" leftIcon={<Play size={20} />}>Live Demo</NeonButton>
            </Link>
          </motion.div>

          {/* Floating Cards Mockup */}
          <div className="relative mt-20 max-w-5xl mx-auto">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-[80px] rounded-full animate-pulse-slow" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-secondary/20 blur-[80px] rounded-full animate-pulse-slow" />
            
            <GlassCard className="p-0 border-white/10 overflow-hidden shadow-2xl relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" 
                alt="Vortex Dashboard" 
                className="w-full opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            </GlassCard>
            
            {/* Overlay Stat Cards */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-10 top-20 hidden lg:block"
            >
              <GlassCard className="p-4 w-48 neon-glow-primary">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="text-emerald-400" size={16} />
                  <span className="text-[10px] font-bold text-emerald-400">+24.8%</span>
                </div>
                <p className="text-xs text-slate-500 font-bold uppercase">Growth</p>
                <p className="text-xl font-bold text-white">$842k</p>
              </GlassCard>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -left-10 bottom-20 hidden lg:block"
            >
              <GlassCard className="p-4 w-48 neon-glow-secondary">
                <div className="flex items-center gap-2 mb-2">
                  <Activity className="text-secondary" size={16} />
                  <span className="text-[10px] font-bold text-slate-400">Live Traffic</span>
                </div>
                <p className="text-xl font-bold text-white">4,281</p>
                <div className="w-full h-1 bg-slate-800 rounded-full mt-2 overflow-hidden">
                  <div className="w-3/4 h-full bg-secondary" />
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="px-6 py-20 bg-slate-950/30">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          <div className="flex items-center gap-2 text-xl font-bold"><CheckCircle2 /> Stripe</div>
          <div className="flex items-center gap-2 text-xl font-bold"><CheckCircle2 /> Vercel</div>
          <div className="flex items-center gap-2 text-xl font-bold"><CheckCircle2 /> Linear</div>
          <div className="flex items-center gap-2 text-xl font-bold"><CheckCircle2 /> Notion</div>
          <div className="flex items-center gap-2 text-xl font-bold"><CheckCircle2 /> Airbnb</div>
        </div>
      </section>

      {/* Services Section */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-bold text-white">Solutions for Every Stage.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">From early-stage startups to global enterprises, we provide the intelligence you need to lead.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <GlassCard key={i} className="hover:border-primary/50 transition-colors group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <service.icon className="text-primary w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{service.desc}</p>
              <Link href="/services" className="text-primary text-xs font-bold uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                Learn More <ChevronRight size={14} />
              </Link>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Client Results / Stats */}
      <section className="px-6 py-32 bg-primary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white">Numbers That <span className="text-secondary">Matter</span>.</h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              We don't just provide data; we provide outcomes. Our clients see significant 
              improvements in operational efficiency and revenue growth within the first 90 days.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div>
                <p className="text-4xl font-black text-white">320%</p>
                <p className="text-sm text-slate-500 font-bold uppercase mt-1">Avg. Revenue Growth</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white">45min</p>
                <p className="text-sm text-slate-500 font-bold uppercase mt-1">Time Saved Per Day</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white">12k+</p>
                <p className="text-sm text-slate-500 font-bold uppercase mt-1">Active Dashboards</p>
              </div>
              <div>
                <p className="text-4xl font-black text-white">99.9%</p>
                <p className="text-sm text-slate-500 font-bold uppercase mt-1">System Uptime</p>
              </div>
            </div>
            <NeonButton variant="primary" className="mt-10">Download Impact Report</NeonButton>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <GlassCard className="p-8 space-y-4 neon-glow-primary">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                <TrendingUp size={24} />
              </div>
              <h4 className="text-lg font-bold text-white">Revenue Lift</h4>
              <p className="text-sm text-slate-400">Optimize pricing strategy with AI predictive models.</p>
            </GlassCard>
            <GlassCard className="p-8 space-y-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary">
                <Target size={24} />
              </div>
              <h4 className="text-lg font-bold text-white">Target Accuracy</h4>
              <p className="text-sm text-slate-400">Reduce CAC by 40% through precise user segmentation.</p>
            </GlassCard>
            <GlassCard className="p-8 space-y-4 col-span-1 md:col-span-2">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Layers size={24} />
              </div>
              <h4 className="text-lg font-bold text-white">Enterprise Scalability</h4>
              <p className="text-sm text-slate-400">Handles 50M+ events per day with zero latency issues for global platforms.</p>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-white">Featured Work.</h2>
            <p className="text-slate-400 max-w-xl">A selection of high-impact platforms we've built for industry leaders.</p>
          </div>
          <Link href="/projects">
            <NeonButton variant="outline" rightIcon={<ChevronRight size={18} />}>View Portfolio</NeonButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden mb-6 aspect-video">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <NeonButton size="sm">Case Study</NeonButton>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md text-[10px] font-bold text-white border border-white/10 uppercase tracking-widest">
                    {project.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-500">{project.tech}</span>
                <span className="text-primary font-bold">{project.results}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Transparent Pricing.</h2>
          <p className="text-slate-400">Scale your intelligence with plans built for growth.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Starter", price: "$49", features: ["Up to 10k events/mo", "Basic Analytics", "Email Support", "1 Workspace"] },
            { name: "Professional", price: "$199", features: ["Up to 1M events/mo", "Advanced AI Models", "Priority Support", "5 Workspaces", "Custom Dashboards"], featured: true },
            { name: "Enterprise", price: "Custom", features: ["Unlimited events", "Dedicated Success Manager", "On-premise deployment", "SSO & SAML", "Unlimited Workspaces"] },
          ].map((plan, i) => (
            <GlassCard key={i} className={plan.featured ? "border-primary/50 shadow-primary/20 scale-105 z-10" : "border-white/5"}>
              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-white">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-slate-500 text-sm">/mo</span>}
              </div>
              <ul className="space-y-4 mb-10">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-slate-400">
                    <CheckCircle2 size={16} className="text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <NeonButton 
                variant={plan.featured ? "primary" : "outline"} 
                className="w-full"
              >
                {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
              </NeonButton>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-16">Frequently Asked.</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i} 
              className="rounded-2xl border border-white/5 bg-slate-900/50 overflow-hidden cursor-pointer group"
              onClick={() => setActiveFaq(activeFaq === i ? null : i)}
            >
              <div className="p-6 flex items-center justify-between">
                <h4 className="font-bold text-white group-hover:text-primary transition-colors">{faq.q}</h4>
                <Plus className={`text-slate-500 transition-transform duration-300 ${activeFaq === i ? 'rotate-45' : ''}`} />
              </div>
              {activeFaq === i && (
                <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <GlassCard className="max-w-5xl mx-auto p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-primary" />
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter">Ready to Transcend?</h2>
          <p className="text-lg text-slate-400 mb-12 max-w-xl mx-auto">
            Join the 10,000+ businesses already using Vortex to master their data and own their future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/signup">
              <NeonButton size="lg">Get Started Now</NeonButton>
            </Link>
            <Link href="/contact">
              <div className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer font-bold">
                <MessageSquare size={20} />
                Talk to Sales
              </div>
            </Link>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
