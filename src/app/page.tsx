"use client";

import { useState, useEffect } from "react";
import { 
  Zap, ArrowRight, Play, CheckCircle2, X, Menu, 
  Code2, BrainCircuit, Rocket, Palette, Bot, Smartphone, 
  MessageCircle, Mail, Calendar, Star, ArrowUpRight, Globe, Shield, Activity
} from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function LandingPage() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-50 selection:bg-primary/30 font-sans overflow-x-hidden">
      {/* Dynamic Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-primary/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[70%] h-[70%] bg-secondary/10 blur-[150px] rounded-full" />
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/2347025731925" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center neon-glow-primary"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="fill-current" />
      </a>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              <span className="font-bold text-xl text-white">V</span>
            </div>
            <span className="font-black text-2xl tracking-tight">Vicc<span className="text-primary">Verse</span></span>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <Link href="#services" className="hover:text-white transition-colors">Services</Link>
            <Link href="#work" className="hover:text-white transition-colors">Work</Link>
            <Link href="#process" className="hover:text-white transition-colors">Process</Link>
            <Link href="#contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="md:hidden flex items-center justify-center p-2 rounded-md text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation"
          >
            {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <div className="hidden md:flex items-center gap-4">
            <Link href="#contact">
              <button className="px-6 py-2.5 rounded-full bg-white text-slate-950 font-bold hover:bg-slate-200 transition-colors">
                Start Project
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile navigation panel */}
        <AnimatePresence>
          {navOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/5 shadow-2xl"
            >
              <div className="flex flex-col gap-6 p-6 text-base font-semibold text-slate-300">
                <Link href="#services" onClick={() => setNavOpen(false)} className="hover:text-white transition-colors">Services</Link>
                <Link href="#work" onClick={() => setNavOpen(false)} className="hover:text-white transition-colors">Work</Link>
                <Link href="#process" onClick={() => setNavOpen(false)} className="hover:text-white transition-colors">Process</Link>
                <Link href="#contact" onClick={() => setNavOpen(false)} className="hover:text-white transition-colors">Contact</Link>
                <Link href="#contact" onClick={() => setNavOpen(false)} className="px-6 py-3 rounded-full bg-white text-slate-950 font-bold text-center mt-4">
                  Start Project
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 min-h-[90vh] flex items-center">
        <div className="max-w-5xl mx-auto text-center space-y-8 z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-primary mb-2 backdrop-blur-sm"
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
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] text-balance"
          >
            We Build Modern <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-gradient">Digital Products</span> That Scale.
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed text-balance"
          >
            We engineer award-winning AI-powered websites, SaaS platforms, and enterprise solutions designed to help ambitious businesses grow faster and dominate their markets.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 w-full"
          >
            <Link href="#contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 rounded-full bg-primary text-white font-bold text-base md:text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:shadow-[0_0_40px_rgba(139,92,246,0.5)]">
                Start Your Project <ArrowRight size={20} className="shrink-0" />
              </button>
            </Link>
            <Link href="#contact" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-6 py-4 md:px-8 md:py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-base md:text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm">
                Free Consultation <Calendar size={20} className="shrink-0" />
              </button>
            </Link>
          </motion.div>
          
          <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.8, duration: 1 }}
             className="pt-16 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-slate-500 text-sm font-medium"
          >
             <div className="flex items-center gap-2"><CheckCircle2 className="text-primary w-5 h-5"/> Award-Winning Design</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="text-primary w-5 h-5"/> Enterprise Grade Tech</div>
             <div className="flex items-center gap-2"><CheckCircle2 className="text-primary w-5 h-5"/> 100% Client Satisfaction</div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="px-6 py-20 border-y border-white/5 bg-slate-900/20 backdrop-blur-sm relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <p className="text-center text-sm font-bold uppercase tracking-widest text-slate-500 mb-12">Trusted by Innovative Companies</p>
           
           <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
             <div className="flex items-center gap-2 text-xl font-black tracking-tighter"><Globe /> LOGOIPSUM</div>
             <div className="flex items-center gap-2 text-xl font-black tracking-tighter"><Activity /> TECHFLOW</div>
             <div className="flex items-center gap-2 text-xl font-black tracking-tighter"><Shield /> SECUREBASE</div>
             <div className="flex items-center gap-2 text-xl font-black tracking-tighter"><Zap /> ZAPSCALE</div>
           </div>

           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20">
             {[
               { number: "50+", label: "Projects Completed" },
               { number: "99%", label: "Client Satisfaction" },
               { number: "15+", label: "Enterprise Partners" },
               { number: "24/7", label: "Premium Support" }
             ].map((stat, i) => (
               <div key={i} className="text-center space-y-2 group">
                 <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500 group-hover:to-primary transition-colors duration-300">{stat.number}</div>
                 <div className="text-sm font-medium text-slate-400 uppercase tracking-wider">{stat.label}</div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-6 py-32 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20 space-y-4"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">Premium <span className="text-primary">Services</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">We deliver end-to-end digital solutions designed to accelerate your business growth and dominate your market.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                className="group p-8 rounded-3xl bg-slate-900/40 border border-white/5 hover:border-primary/30 transition-all hover:bg-slate-900/60 relative overflow-hidden backdrop-blur-sm"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/10 transition-colors" />
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/50 transition-all">
                  <service.icon className="text-primary w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="px-6 py-32 bg-slate-950/50 relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6">
             <div className="space-y-4 max-w-2xl">
               <h2 className="text-4xl md:text-6xl font-black tracking-tight">Featured <span className="text-primary">Work</span></h2>
               <p className="text-slate-400 text-lg">Explore our recent success stories and see how we've helped ambitious brands transform their digital presence.</p>
             </div>
             <button className="w-full md:w-auto justify-center px-6 py-3.5 rounded-full border border-white/10 hover:bg-white/5 transition-colors font-semibold flex items-center gap-2 text-sm md:text-base">
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
                 <div className="h-64 sm:h-80 overflow-hidden relative">
                   <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                   <img src={project.img} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                   <div className="absolute top-3 right-3 md:top-4 md:right-4 z-20 flex gap-2">
                     <button className="px-3 md:px-4 py-2 rounded-full bg-slate-900/80 backdrop-blur-md text-white hover:bg-primary transition-colors text-xs md:text-sm font-bold flex items-center gap-1.5 md:gap-2">
                       <Play size={14} className="md:w-4 md:h-4" /> Live Preview
                     </button>
                     <button className="p-2 rounded-full bg-slate-900/80 backdrop-blur-md text-white hover:bg-white hover:text-black transition-colors shrink-0" aria-label="Case Study">
                       <ArrowUpRight size={16} className="md:w-5 md:h-5" />
                     </button>
                   </div>
                 </div>
                 <div className="p-8">
                   <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                   <p className="text-slate-400 mb-6 text-sm leading-relaxed">{project.desc}</p>
                   <div className="flex flex-wrap gap-2 mb-6">
                     {project.tech.map(t => (
                       <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-xs font-medium text-slate-300 border border-white/5">{t}</span>
                     ))}
                   </div>
                   <button className="text-primary font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                     Read Case Study <ArrowRight size={16} />
                   </button>
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="px-6 py-32 relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black tracking-tight">How We <span className="text-primary">Work</span></h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">A proven, transparent process designed to deliver exceptional results on time and on budget.</p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">
            {[
              { step: "01", title: "Discovery", desc: "We dive deep into your business goals, target audience, and technical requirements to ensure alignment." },
              { step: "02", title: "Strategy", desc: "Creating a comprehensive roadmap, wireframes, and technical architecture plan for the build." },
              { step: "03", title: "Design", desc: "Crafting premium, high-converting interfaces that align perfectly with your brand identity." },
              { step: "04", title: "Development", desc: "Writing clean, scalable code using modern frameworks and best practices." },
              { step: "05", title: "Testing", desc: "Rigorous QA testing across devices and browsers to ensure a flawless user experience." },
              { step: "06", title: "Launch", desc: "Deploying your product to production with seamless transition and no downtime." },
              { step: "07", title: "Ongoing Support", desc: "Continuous monitoring, updates, and strategic improvements to maximize ROI." }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#020617] bg-primary text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_rgba(139,92,246,0.2)] z-10">
                  {item.step}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 md:p-8 rounded-3xl bg-slate-900/40 border border-white/5 backdrop-blur-sm hover:border-primary/30 transition-all hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] hover:-translate-y-1">
                  <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-slate-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto relative z-10 text-center space-y-10 bg-slate-900/60 backdrop-blur-2xl p-12 md:p-20 rounded-[3rem] border border-white/10 shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-balance">
            Let's Build Something <span className="text-primary">Amazing.</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Join the forward-thinking brands that trust ViccVerse to build their most critical digital infrastructure.
          </p>
          <div className="flex flex-col w-full sm:flex-row items-center justify-center gap-4 pt-6">
             <Link href="#contact" className="w-full sm:w-auto">
               <button className="w-full sm:w-auto px-6 md:px-10 py-4 md:py-5 rounded-full bg-white text-slate-950 font-black text-base md:text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2 shadow-xl hover:scale-105">
                 Start Your Journey <ArrowRight size={20} className="shrink-0" />
               </button>
             </Link>
          </div>
        </motion.div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="px-6 py-20 border-t border-white/5 bg-slate-950/80 backdrop-blur-lg relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6 lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                <span className="font-bold text-white text-xl">V</span>
              </div>
              <span className="font-black text-2xl tracking-tight">Vicc<span className="text-primary">Verse</span></span>
            </div>
            <p className="text-slate-400 max-w-md text-sm leading-relaxed">
              A premium digital agency specializing in modern web applications, AI integrations, and high-performance SaaS platforms that drive real business results.
            </p>
            <div className="flex gap-4">
               <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-colors cursor-pointer text-slate-300 hover:text-white" aria-label="Website"><Globe size={18} /></a>
               <a href="https://wa.me/2347025731925" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#25D366] hover:border-[#25D366] transition-colors cursor-pointer text-slate-300 hover:text-white" aria-label="WhatsApp"><MessageCircle size={18} /></a>
               <a href="mailto:oluwavictortemitope@gmail.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer text-slate-300" aria-label="Email"><Mail size={18} /></a>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Services</h4>
            <div className="flex flex-col gap-3 text-sm text-slate-400 font-medium">
              <Link href="#services" className="hover:text-primary transition-colors">Web Development</Link>
              <Link href="#services" className="hover:text-primary transition-colors">AI Integration</Link>
              <Link href="#services" className="hover:text-primary transition-colors">SaaS MVP</Link>
              <Link href="#services" className="hover:text-primary transition-colors">UI/UX Design</Link>
              <Link href="#services" className="hover:text-primary transition-colors">Automation Systems</Link>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-lg font-bold">Get in Touch</h4>
            <div className="flex flex-col gap-4 text-sm text-slate-400 font-medium">
              <a href="mailto:oluwavictortemitope@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail size={16} className="shrink-0" /> oluwavictortemitope@gmail.com
              </a>
              <a href="https://wa.me/2347025731925" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-[#25D366] transition-colors">
                <MessageCircle size={16} className="shrink-0" /> +234 702 573 1925
              </a>
              <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary text-white text-sm transition-all"
                  required
                />
                <button type="submit" className="w-full py-3 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold transition-colors text-sm">
                  Subscribe to Newsletter
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} ViccVerse Agency. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
