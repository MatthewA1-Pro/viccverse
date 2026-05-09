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
        <h1 className="text-5xl md:text-8xl font-black text-foreground tracking-tighter">
          Connect with <span className="text-primary">Viccverse</span>.
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto text-balance">
          Ready to elevate your digital presence? Our experts are here to help you 
          navigate the future of product engineering and design.
        </p>
      </section>

      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Contact Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-foreground">Global Headquarters</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="font-bold text-foreground">Lagos Innovation Hub</p>
                  <p className="text-sm">24 Lekki Phase 1, Lagos, Nigeria</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="font-bold text-foreground">Email Us</p>
                  <p className="text-sm">oluwavictortemitope@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="font-bold text-foreground">Call Us</p>
                  <p className="text-sm">+234 (810) 000-0000</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-muted-foreground">
                <div className="w-12 h-12 rounded-xl bg-muted border border-border flex items-center justify-center text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <p className="font-bold text-foreground">Business Hours</p>
                  <p className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM GMT+1</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 space-y-6">
            <h3 className="text-xl font-bold text-foreground">Talk to a Strategist</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Schedule a 30-minute high-impact strategy session with our product architects 
              to discuss your technical roadmap and business goals.
            </p>
            <NeonButton variant="primary" className="w-full">Book Strategy Session</NeonButton>
          </div>

          <div className="relative rounded-3xl overflow-hidden h-64 grayscale opacity-70 dark:opacity-50 border border-border bg-muted">
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
        <GlassCard className="p-10 border-border" glow>
          <div className="mb-10 space-y-2">
            <h2 className="text-3xl font-bold text-foreground">Send a Message</h2>
            <p className="text-muted-foreground">Tell us about your project and we'll get back to you within 2 hours.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CustomInput label="Your Name" placeholder="Alex Rivera" required />
              <CustomInput label="Work Email" type="email" placeholder="alex@company.com" required />
            </div>
            <CustomInput label="Company Name" placeholder="Acme Inc." />
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted-foreground ml-1">Inquiry Type</label>
              <select className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-all appearance-none cursor-pointer">
                <option>SaaS Platform</option>
                <option>Web Application</option>
                <option>AI Integration</option>
                <option>Other / General</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-muted-foreground ml-1">Message</label>
              <textarea 
                className="w-full bg-muted border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 transition-all min-h-[150px] resize-none"
                placeholder="How can we help your business scale with modern technology?"
                required
              />
            </div>
            <NeonButton 
              type="submit" 
              className="w-full py-4 shadow-lg shadow-primary/20" 
              isLoading={isSubmitting}
              rightIcon={<Send size={20} />}
            >
              Send Message
            </NeonButton>
          </form>

          <div className="mt-10 pt-10 border-t border-border flex items-center justify-between">
            <p className="text-xs text-muted-foreground">Also available on:</p>
            <div className="flex gap-4">
              <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp"><MessageSquare size={20} /></button>
              <button className="text-muted-foreground hover:text-primary transition-colors" aria-label="LinkedIn"><Globe size={20} /></button>
            </div>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
