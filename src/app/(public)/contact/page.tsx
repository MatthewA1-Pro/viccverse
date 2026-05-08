"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { CustomInput } from "@/components/ui/InputAndBadge";
import { NeonButton } from "@/components/ui/NeonButton";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare,
  Globe,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => setIsSubmitting(false), 2000);
  };

  return (
    <div className="pt-40 space-y-40 pb-40">
      <section className="px-6 max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
          Connect with <span className="text-primary">Vortex</span>.
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
          Ready to transcend your data? Our experts are here to help you 
          navigate the future of business intelligence.
        </p>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-white">Global Headquarters</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-slate-400">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-white">Silicon Valley Office</p>
                  <p className="text-sm">101 Innovation Way, San Jose, CA 95112</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-bold text-white">Email Us</p>
                  <p className="text-sm">hello@vortex-analytics.pro</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-white">Call Us</p>
                  <p className="text-sm">+1 (555) 842-9021</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-slate-400">
                <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-bold text-white">Business Hours</p>
                  <p className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM PST</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-primary/10 border border-primary/20 space-y-6">
            <h3 className="text-xl font-bold text-white">Talk to a Consultant</h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Schedule a 30-minute discovery call with our solutions architects 
              to discuss your data infrastructure and business goals.
            </p>
            <NeonButton variant="primary" className="w-full">Book Discovery Call</NeonButton>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-64 grayscale opacity-50 border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1524666041070-9d87656c25bb?auto=format&fit=crop&q=80&w=1000" 
              alt="Office Map" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-4 h-4 bg-primary rounded-full neon-glow-primary animate-ping" />
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <GlassCard className="p-10 border-white/5" glow>
          <div className="mb-10 space-y-2">
            <h2 className="text-3xl font-bold text-white">Send a Message</h2>
            <p className="text-slate-400">Tell us about your project and we'll get back to you within 24 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CustomInput label="Your Name" placeholder="Alex Rivera" required />
              <CustomInput label="Work Email" type="email" placeholder="alex@company.com" required />
            </div>
            <CustomInput label="Company Name" placeholder="Acme Inc." />
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-400 ml-1">Inquiry Type</label>
              <select className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 focus:outline-none focus:border-primary/50 transition-all">
                <option>Data Analytics</option>
                <option>Dashboard Development</option>
                <option>AI Automation</option>
                <option>Other / General</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-slate-400 ml-1">Message</label>
              <textarea 
                className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all min-h-[150px]"
                placeholder="How can we help your business transcend your data?"
                required
              />
            </div>
            <NeonButton 
              type="submit" 
              className="w-full py-4" 
              isLoading={isSubmitting}
              rightIcon={<Send size={20} />}
            >
              Send Message
            </NeonButton>
          </form>

          <div className="mt-10 pt-10 border-t border-white/5 flex items-center justify-between">
            <p className="text-xs text-slate-500">Also available on:</p>
            <div className="flex gap-4">
              <button className="text-slate-500 hover:text-white transition-colors"><MessageSquare size={20} /></button>
              <button className="text-slate-500 hover:text-white transition-colors"><Globe size={20} /></button>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
