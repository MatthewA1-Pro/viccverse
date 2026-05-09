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
  { icon: BarChart3, title: "Data Insights", desc: "Advanced statistical modeling and predictive analysis to uncover hidden patterns in your data ecosystem.", features: ["Predictive Modeling", "User Retention", "Data Strategy"] },
  { icon: PieChart, title: "SaaS Architecture", desc: "Strategic architecture design that ensures your software scales seamlessly with your business growth.", features: ["Scalable Infrastructure", "Multi-tenant logic", "Cloud Native"] },
  { icon: Layers, title: "Premium UI/UX", desc: "Interactive, high-performance visual interfaces built for speed, clarity, and conversion.", features: ["Next.js & React", "Custom Motion", "Modern Branding"] },
  { icon: Cpu, title: "AI Integration", desc: "Streamline operations with intelligent workflows and custom machine learning model integration.", features: ["LLM Workflows", "Smart Automation", "NLP Solutions"] },
  { icon: Code2, title: "Web Development", desc: "Bespoke SaaS applications and data-driven websites built on the most advanced modern stacks.", features: ["TypeScript", "Performance First", "Enterprise Grade"] },
  { icon: Database, title: "Cloud Ecosystems", desc: "Centralize your data assets with robust cloud synchronization and automated pipelines.", features: ["Supabase/Firebase", "ETL Systems", "Live Syncing"] },
  { icon: Smartphone, title: "Mobile Experience", desc: "Premium mobile application development with a focus on native performance and user delight.", features: ["React Native", "Offline-First", "Smooth Interactions"] },
  { icon: ShieldCheck, title: "Product Security", desc: "Enterprise-grade protection and compliance auditing for your sensitive digital assets.", features: ["Identity Management", "Data Encryption", "Secure API Layer"] },
  { icon: Globe, title: "External Integrations", desc: "Connect your entire stack with custom API development and deep third-party management.", features: ["Complex Webhooks", "CRM Syncing", "Payment Gateways"] },
];

export default function ServicesPage() {
  return (
    <div className="pt-40 space-y-40 pb-40">
      <section className="px-6 max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-8xl font-black text-foreground tracking-tighter">
          Infinite <span className="text-secondary">Solutions</span>.
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-balance">
          We provide a comprehensive suite of digital engineering services 
          designed to scale with your ambition and dominate your market.
        </p>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {allServices.map((service, i) => (
          <GlassCard key={i} className="flex flex-col h-full group border-border">
            <div className="w-14 h-14 rounded-2xl bg-muted border border-border flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
              <service.icon size={28} />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">{service.desc}</p>
            <ul className="space-y-3 mb-8">
              {service.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
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
        <h2 className="text-3xl md:text-5xl font-bold text-foreground text-center mb-20">How We Work.</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {[
            { step: "01", title: "Discovery", desc: "We deep-dive into your requirements and business landscape." },
            { step: "02", title: "Strategy", desc: "Designing a custom architecture for your unique needs." },
            { step: "03", title: "Execution", desc: "Agile development with continuous delivery and testing." },
            { step: "04", title: "Optimisation", desc: "Ongoing refinement and scaling based on real results." },
          ].map((item, i) => (
            <div key={i} className="space-y-4 relative">
              {i < 3 && <div className="hidden lg:block absolute top-6 left-full w-full h-[1px] bg-border -z-10" />}
              <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/20">
                {item.step}
              </div>
              <h4 className="text-lg font-bold text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6">
        <GlassCard className="max-w-5xl mx-auto p-12 text-center space-y-8 border-border">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground">Ready to elevate your tech?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Get a free architecture consultation and find out how Viccverse can help your business lead the pack.</p>
          <NeonButton size="lg" variant="secondary" className="px-10">Book a Call</NeonButton>
        </GlassCard>
      </section>
    </div>
  );
}
