"use client";

import { useState, useEffect } from "react";
import { 
  Zap, ArrowRight, Play, CheckCircle2, X, Menu, Plus,
  Code2, BrainCircuit, Rocket, Palette, Bot, Smartphone, 
  MessageCircle, Mail, Calendar, Star, ArrowUpRight, Globe, Shield, Activity
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-transparent text-slate-50 selection:bg-primary/30 font-sans">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-secondary/10 blur-[150px] rounded-full" />
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-32 px-6 min-h-[90vh] flex items-center">
        <div className="max-w-5xl mx-auto text-center space-y-8 z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary mb-2 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Premium Digital Agency
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] text-balance"
          >
            We Build Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">Digital Products</span> That Scale.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed text-balance"
          >
            We engineer award-winning AI-powered websites, SaaS platforms, and enterprise solutions designed to help ambitious businesses grow faster and dominate their markets.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full max-w-lg mx-auto sm:max-w-none"
          >
            <Link href="/dashboard" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 rounded-full bg-primary text-white font-bold text-base md:text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] active:scale-95">
                Start Project <ArrowRight size={20} className="shrink-0" />
              </button>
            </Link>
            <Link href="#contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-base md:text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm active:scale-95">
                Free Consultation <Calendar size={20} className="shrink-0" />
              </button>
            </Link>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8, duration: 1 }}
             className="pt-16 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 text-slate-500 text-[10px] sm:text-xs md:text-sm font-medium"
          >
             <div className="flex items-center gap-2"><CheckCircle2 className="text-primary w-4 h-4 md:w-5 md:h-5"/> Award-Winning Design</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="text-primary w-4 h-4 md:w-5 md:h-5"/> Enterprise Grade Tech</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="text-primary w-4 h-4 md:w-5 md:h-5"/> 100% Satisfaction</div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="px-6 py-16 md:py-20 border-y border-white/5 bg-slate-900/20 backdrop-blur-sm relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <p className="text-center text-[10px] sm:text-xs font-bold uppercase tracking-widest text-slate-500 mb-12">Trusted by Innovative Companies</p>
           
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 text-base sm:text-xl font-black tracking-tighter"><Globe size={18} /> LOGOIPSUM</div>
             <div className="flex items-center gap-2 text-base sm:text-xl font-black tracking-tighter"><Activity size={18} /> TECHFLOW</div>
             <div className="flex items-center gap-2 text-base sm:text-xl font-black tracking-tighter"><Shield size={18} /> SECUREBASE</div>
             <div className="flex items-center gap-2 text-base sm:text-xl font-black tracking-tighter"><Zap size={18} /> ZAPSCALE</div>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
             {[
               { number: "50+", label: "Projects Completed" },
               { number: "99%", label: "Client Satisfaction" },
               { number: "15+", label: "Enterprise Partners" },
               { number: "24/7", label: "Premium Support" }
             ].map((stat, i) => (
               <div key={i} className="text-center space-y-1 sm:space-y-2 group">
                 <div className="text-3xl sm:text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 group-hover:to-primary transition-colors duration-300">{stat.number}</div>
                 <div className="text-[10px] sm:text-xs md:text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-20 md:py-32 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-20 space-y-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight">Premium <span className="text-primary">Services</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">We deliver end-to-end digital solutions designed to accelerate your business growth and dominate your market.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Code2, title: "Web Development", desc: "High-performance, SEO-optimized web applications built with Next.js and React. Designed to convert visitors into customers." },
              { icon: BrainCircuit, title: "AI Integration", desc: "Empower your business with custom LLM integrations, intelligent chatbots, and automated AI workflows." },
              { icon: Rocket, title: "SaaS MVP Development", desc: "Launch your startup in weeks, not months. Scalable architecture ready for rapid user growth and investment." },
              { icon: Palette, title: "UI/UX Design", desc: "Award-winning interfaces that captivate users. We prioritize conversion, accessibility, and modern aesthetics." },
              { icon: Bot, title: "Automation Systems", desc: "Eliminate manual tasks with custom Zapier, Make, and API integrations that save your team hundreds of hours." },
              { icon: Smartphone, title: "Mobile Optimization", desc: "Responsive, app-like mobile experiences that engage users seamlessly across all devices and platforms." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-6 sm:p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-primary/30 transition-all hover:bg-slate-900/60 relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors" />
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/50 transition-all">
                  <service.icon className="text-primary w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-xs sm:text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="px-6 py-20 md:py-32 bg-slate-950/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6">
             <div className="space-y-4 max-w-2xl">
               <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight">Featured <span className="text-primary">Work</span></h2>
               <p className="text-slate-400 text-base sm:text-lg">Explore our recent success stories and see how we've helped ambitious brands transform their digital presence.</p>
             </div>
             <button className="w-full md:w-auto justify-center px-6 py-3.5 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-semibold flex items-center gap-2 text-sm md:text-base active:scale-95">
               View All Projects <ArrowRight size={18} />
             </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Vortex Analytics V2", desc: "Complete redesign and backend rebuild for an enterprise SaaS analytics platform. Increased user retention by 40%.", tech: ["Next.js", "Supabase", "Tailwind", "PostgreSQL"], img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070" },
              { title: "Luxe Auto Gallery", desc: "High-end luxury car dealership platform with real-time inventory and CRM. Generated $2M+ in leads within 3 months.", tech: ["React", "Node.js", "Framer Motion", "MongoDB"], img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&q=80&w=2083" },
            ].map((project, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-slate-900/50 relative backdrop-blur-sm"
              >
                 <div className="h-56 sm:h-80 overflow-hidden relative">
                   <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                   <img src={project.img} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20 flex gap-2">
                     <button className="px-3 md:px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md text-white hover:bg-primary transition-colors text-[10px] sm:text-xs md:text-sm font-bold flex items-center gap-1.5 md:gap-2 active:scale-95">
                       <Play size={12} className="sm:w-4 sm:h-4" /> Live Preview
                     </button>
                     <button className="p-2 rounded-full bg-slate-900/80 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors shrink-0 active:scale-95" aria-label="Case Study">
                       <ArrowUpRight size={14} className="sm:w-5 sm:h-5" />
                     </button>
                   </div>
                 </div>
                 <div className="p-6 sm:p-8">
                   <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                   <p className="text-slate-400 mb-6 text-xs sm:text-sm leading-relaxed">{project.desc}</p>
                   <div className="flex flex-wrap gap-2 mb-6">
                     {project.tech.map(t => (
                       <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-medium text-slate-300 border border-white/5">{t}</span>
                     ))}
                   </div>
                   <button className="text-primary font-bold text-xs sm:text-sm flex items-center gap-1 hover:gap-2 transition-all">
                     Read Case Study <ArrowRight size={16} />
                   </button>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="px-6 py-20 md:py-32 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 md:mb-20 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight">How We <span className="text-primary">Work</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">A proven, transparent process designed to deliver exceptional results on time and on budget.</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-4 sm:before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {[
              { step: "01", title: "Discovery", desc: "We dive deep into your business goals, target audience, and technical requirements to ensure alignment." },
              { step: "02", title: "Strategy", desc: "Creating a comprehensive roadmap, wireframes, and technical architecture plan for the build." },
              { step: "03", title: "Design", desc: "Crafting premium, high-converting interfaces that align perfectly with your brand identity." },
              { step: "04", title: "Development", desc: "Writing clean, scalable code using modern frameworks and best practices." },
              { step: "05", title: "Testing", desc: "Rigorous QA testing across devices and browsers to ensure a flawless user experience." },
              { step: "06", title: "Launch", desc: "Deploying your product to production with seamless transition and no downtime." },
              { step: "07", title: "Support", desc: "Continuous monitoring, updates, and strategic improvements to maximize ROI." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full border-4 border-[#020617] bg-primary text-white text-xs sm:text-sm font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_rgba(139,92,246,0.2)] z-10">
                  {item.step}
                </div>
                <div className="w-[calc(100%-3rem)] sm:w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-5 sm:p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:border-primary/30 transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-20 md:py-32 bg-slate-900/20 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 md:mb-20 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight">Simple, Transparent <span className="text-primary">Pricing</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-base sm:text-lg">Choose the perfect plan for your project's needs. Scale seamlessly as your business grows.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: "Starter", price: "$4,999", desc: "Perfect for early-stage startups needing a landing page and simple MVP.", features: ["Custom Landing Page", "Basic Next.js App", "Contact Form Integration", "Mobile Optimization", "1 Week Delivery"] },
              { name: "Pro", price: "$9,999", desc: "Ideal for growing businesses needing complex SaaS architecture and auth.", features: ["Advanced Next.js App", "Supabase Auth + DB", "Custom Dashboard", "AI API Integration", "Stripe Integration", "2-3 Weeks Delivery"], popular: true },
              { name: "Enterprise", price: "Custom", desc: "For large organizations requiring bespoke solutions and dedicated support.", features: ["Custom Architecture", "Enterprise Security", "Advanced AI Agents", "Legacy System Migration", "24/7 Priority Support", "Dedicated Tech Lead"] },
            ].map((tier, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 sm:p-8 rounded-3xl border flex flex-col ${tier.popular ? 'bg-slate-900 border-primary shadow-[0_0_30px_rgba(139,92,246,0.15)] relative overflow-hidden lg:-translate-y-4' : 'bg-slate-900/40 border-white/5 backdrop-blur-sm'}`}
              >
                {tier.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold uppercase tracking-wider py-1 px-4 rounded-bl-xl">Most Popular</div>
                )}
                <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                <p className="text-slate-400 text-xs sm:text-sm mb-6 min-h-[40px]">{tier.desc}</p>
                <div className="text-3xl sm:text-4xl font-black mb-8 text-white">{tier.price}<span className="text-base sm:text-lg text-slate-500 font-medium">{tier.price !== "Custom" ? " /project" : ""}</span></div>
                
                <div className="space-y-4 mb-8 flex-1">
                  {tier.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-primary shrink-0" />
                      <span className="text-xs sm:text-sm font-medium text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link href="/dashboard" className="mt-auto">
                  <button className={`w-full py-4 rounded-xl font-bold transition-all text-sm sm:text-base active:scale-95 ${tier.popular ? 'bg-primary text-white hover:bg-primary/90' : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'}`}>
                    Get Started
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="px-6 py-20 md:py-32 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 md:mb-16 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">Frequently Asked <span className="text-primary">Questions</span></h2>
            <p className="text-slate-400 text-base sm:text-lg">Everything you need to know about working with ViccVerse.</p>
          </div>
          
          <div className="space-y-4">
            {[
              { q: "How long does a typical project take?", a: "For a standard SaaS MVP or complex website, our average delivery time is 2 to 4 weeks. Enterprise solutions may take longer depending on scope. We emphasize rapid delivery without compromising on code quality or premium design." },
              { q: "Do you offer ongoing support after launch?", a: "Absolutely. We provide a 30-day bug-free guarantee after launch. For long-term peace of mind, we offer ongoing maintenance retainers that cover security updates, performance monitoring, and continuous feature development." },
              { q: "What technologies do you use?", a: "We specialize in modern, high-performance stacks: Next.js (React) for the frontend, Tailwind CSS for styling, Framer Motion for animations, and Supabase or Node.js for backend infrastructure. This ensures your project is blazing fast, SEO-friendly, and highly scalable." },
              { q: "Do you integrate AI into your builds?", a: "Yes, we are experts at integrating LLMs (like OpenAI GPT-4 or Anthropic Claude) directly into your SaaS platforms to create smart AI assistants, automated data analysis, and intelligent workflows tailored to your users." },
            ].map((faq, i) => (
              <details key={i} className="group bg-slate-900/40 border border-white/5 rounded-2xl p-5 sm:p-6 open:bg-slate-900/80 transition-colors cursor-pointer">
                <summary className="font-bold text-base sm:text-lg text-white flex justify-between items-center outline-none list-none">
                  {faq.q}
                  <span className="text-primary group-open:rotate-45 transition-transform duration-300">
                    <Plus size={20} />
                  </span>
                </summary>
                <p className="text-slate-400 mt-4 text-xs sm:text-sm leading-relaxed pl-2 border-l-2 border-primary/30">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 md:py-32 relative overflow-hidden border-t border-white/5">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[300px] sm:h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10 text-center space-y-8 md:space-y-10 bg-slate-900/60 backdrop-blur-2xl p-8 sm:p-12 md:p-20 rounded-[2rem] sm:rounded-[3rem] border border-white/10 shadow-2xl"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight leading-tight text-balance">
            Let's Build Something <span className="text-primary">Amazing.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
            Join the forward-thinking brands that trust ViccVerse to build their most critical digital infrastructure.
          </p>
          <div className="flex flex-col w-full sm:flex-row items-center justify-center gap-4 pt-6">
             <Link href="/dashboard" className="w-full sm:w-auto">
               <button className="w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 rounded-full bg-white text-slate-950 font-black text-base md:text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-xl hover:scale-105 active:scale-95">
                 Start Your Journey <ArrowRight size={20} className="shrink-0" />
               </button>
             </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
