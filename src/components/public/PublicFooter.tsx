"use client";

import { Zap, Github, Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { NeonButton } from "@/components/ui/NeonButton";

export function PublicFooter() {
  return (
    <footer className="bg-background border-t border-border pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                <Zap className="text-white w-4 h-4 fill-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-foreground">Vicc<span className="text-primary">verse</span></span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Leading the next generation of predictive digital intelligence. We help modern businesses transcend their vision with AI-driven products and stunning design.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Github size={20} /></Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors"><Instagram size={20} /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Product Development</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">AI Integration</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">UI/UX Strategy</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Brand Identity</Link></li>
              <li><Link href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Growth Engine</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Story</Link></li>
              <li><Link href="/blog" className="text-muted-foreground hover:text-primary transition-colors text-sm">Insights</Link></li>
              <li><Link href="/projects" className="text-muted-foreground hover:text-primary transition-colors text-sm">Portfolio</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Careers</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">Legal</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-bold text-foreground mb-6">Newsletter</h4>
            <p className="text-muted-foreground text-sm">Join 5,000+ founders getting our weekly insights.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter email" 
                className="bg-muted/50 border border-border rounded-xl px-4 py-2 text-sm text-foreground w-full focus:outline-none focus:border-primary"
              />
              <NeonButton size="sm">Join</NeonButton>
            </div>
            <div className="pt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Mail size={14} /> hello@viccverse.com
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin size={14} /> Silicon Valley, CA
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-muted-foreground text-xs text-center md:text-left">
            © 2026 Viccverse Inc. Built for the modern web.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-muted-foreground hover:text-foreground text-xs">Privacy</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground text-xs">Terms</Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground text-xs">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
