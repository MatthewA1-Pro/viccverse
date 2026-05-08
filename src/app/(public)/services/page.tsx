"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { 
  BarChart3, 
  PieChart, 
  Layers, 
  Cpu, 
  Code2, 
  Database,
  Smartphone,
  ShieldCheck,
  Zap,
  Globe,
  Settings,
  MousePointer2
} from "lucide-react";

const allServices = [
  { icon: BarChart3, title: "Data Analytics", desc: "Advanced statistical modeling and predictive analysis to uncover hidden patterns in your data.", features: ["Predictive Modeling", "Churn Analysis", "Statistical R"] },
  { icon: PieChart, title: "Business Intelligence", desc: "Strategic data visualization and reporting that drives informed decision making at all levels.", features: ["Custom Reports", "KPI Tracking", "Trend Analysis"] },
  { icon: Layers, title: "Dashboard Development", desc: "Interactive, high-performance visual interfaces built for speed and clarity.", features: ["Real-time Sync", "Custom UI/UX", "Mobile Friendly"] },
  { icon: Cpu, title: "AI Automation", desc: "Streamline operations with intelligent workflows and machine learning integration.", features: ["Automated Reporting", "Smart Alerts", "NLP Integration"] },
  { icon: Code2, title: "Web Development", desc: "Bespoke SaaS applications and data-driven websites built on modern stacks.", features: ["Next.js & React", "Secure Auth", "Scaleable Infra"] },
  { icon: Database, title: "Cloud Integration", desc: "Centralize your data assets with robust cloud synchronization and warehousing.", features: ["AWS/Azure/GCP", "ETL Pipelines", "Data Migration"] },
  { icon: Smartphone, title: "Mobile Analytics", desc: "Native app tracking and user behavior analysis for iOS and Android.", features: ["Event Tracking", "Funnel Analysis", "Heatmaps"] },
  { icon: ShieldCheck, title: "Data Security", desc: "Enterprise-grade protection and compliance auditing for your sensitive assets.", features: ["GDPR/SOC2", "Encryption", "Access Control"] },
  { icon: Globe, title: "API Integration", desc: "Connect your entire stack with custom API development and management.", features: ["Webhooks", "Third-party Sync", "API Monitoring"] },
];

export default function ServicesPage() {
  return (
    <div className="pt-40 space-y-40 pb-40">
      <section className="px-6 max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
          Infinite <span className="text-secondary">Solutions</span>.
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
          We provide a comprehensive suite of data and technology services 
          designed to scale with your ambition.
        </p>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service, i) => (
          <GlassCard key={i} className="flex flex-col h-full group">
            <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <service.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-1">{service.desc}</p>
            <ul className="space-y-3 mb-8">
              {service.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-xs text-slate-500">
                  <Zap size={12} className="text-secondary" />
                  {f}
                </li>
              ))}
            </ul>
            <NeonButton variant="outline" size="sm" className="w-full">Explore Service</NeonButton>
          </GlassCard>
        ))}
      </section>

      {/* Process Section */}
      <section className="px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white text-center mb-20">How We Work.</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { step: "01", title: "Discovery", desc: "We deep-dive into your requirements and data landscape." },
            { step: "02", title: "Strategy", desc: "Designing a custom architecture for your unique needs." },
            { step: "03", title: "Execution", desc: "Agile development with continuous delivery and testing." },
            { step: "04", title: "Optimisation", desc: "Ongoing refinement and scaling based on real results." },
          ].map((item, i) => (
            <div key={i} className="space-y-4 relative">
              {i < 3 && <div className="hidden lg:block absolute top-6 left-full w-full h-[1px] bg-slate-800 -z-10" />}
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-xl">
                {item.step}
              </div>
              <h4 className="text-lg font-bold text-white">{item.title}</h4>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <GlassCard className="max-w-5xl mx-auto p-12 text-center space-y-8 border-secondary/20">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Ready to elevate your tech?</h2>
          <p className="text-slate-400 max-w-xl mx-auto">Get a free architecture consultation and find out how Vortex can help your business lead the pack.</p>
          <NeonButton size="lg" variant="secondary">Book a Call</NeonButton>
        </GlassCard>
      </section>
    </div>
  );
}
