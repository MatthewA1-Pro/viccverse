"use client";

import { Zap, Github, Twitter, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { NeonButton } from "@/components/ui/NeonButton";

export function PublicFooter() {
  return (
    <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                <Zap className="text-white w-4 h-4 fill-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">Vortex<span className="text-primary">Analytics</span></span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Leading the next generation of predictive data intelligence. We help modern businesses transcend their data with AI-driven insights and stunning visualizations.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={20} /></Link>
              <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={20} /></Link>
              <Link href="#" className="text-slate-500 hover:text-white transition-colors"><Instagram size={20} /></Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors text-sm">Business Intelligence</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors text-sm">Predictive Analytics</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors text-sm">Dashboard Design</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors text-sm">Data Warehousing</Link></li>
              <li><Link href="/services" className="text-slate-400 hover:text-primary transition-colors text-sm">API Integration</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-slate-400 hover:text-primary transition-colors text-sm">Our Story</Link></li>
              <li><Link href="/blog" className="text-slate-400 hover:text-primary transition-colors text-sm">Blog & News</Link></li>
              <li><Link href="/projects" className="text-slate-400 hover:text-primary transition-colors text-sm">Case Studies</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-primary transition-colors text-sm">Careers</Link></li>
              <li><Link href="/contact" className="text-slate-400 hover:text-primary transition-colors text-sm">Legal</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-bold text-white mb-6">Newsletter</h4>
            <p className="text-slate-400 text-sm">Subscribe to get the latest tech updates and data guides.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-sm text-slate-300 w-full focus:outline-none focus:border-primary"
              />
              <NeonButton size="sm">Join</NeonButton>
            </div>
            <div className="pt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <Mail size={14} /> hello@vortex-analytics.pro
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <MapPin size={14} /> 101 Silicon Valley, CA
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-xs text-center md:text-left">
            © 2026 Vortex Analytics Inc. Built with Antigravity AI for modern startups.
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-slate-500 hover:text-white text-xs">Privacy Policy</Link>
            <Link href="#" className="text-slate-500 hover:text-white text-xs">Terms of Service</Link>
            <Link href="#" className="text-slate-500 hover:text-white text-xs">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
