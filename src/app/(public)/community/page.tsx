"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { 
  MessageCircle, 
  Github, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Facebook,
  Users,
  Zap,
  Star,
  Award
} from "lucide-react";
import { motion } from "framer-motion";

const socialStats = [
  { platform: "Twitter/X", followers: "42k", icon: Twitter, color: "text-cyan-400" },
  { platform: "Discord", followers: "12k", icon: MessageCircle, color: "text-indigo-400" },
  { platform: "LinkedIn", followers: "85k", icon: Linkedin, color: "text-blue-500" },
  { platform: "GitHub", followers: "5k", icon: Github, color: "text-white" },
];

export default function CommunityPage() {
  return (
    <div className="pt-40 space-y-40 pb-40">
      {/* Hero Section */}
      <section className="px-6 max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
          The Vortex <span className="text-primary">Ecosystem</span>.
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
          Join a global community of data scientists, engineers, and visionaries 
          shaping the future of intelligence.
        </p>
      </section>

      {/* Social Stats Grid */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
        {socialStats.map((social, i) => (
          <GlassCard key={i} className="text-center group hover:border-primary/50 transition-all">
            <social.icon size={32} className={`${social.color} mx-auto mb-4 group-hover:scale-110 transition-transform`} />
            <p className="text-2xl font-black text-white">{social.followers}</p>
            <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{social.platform}</p>
          </GlassCard>
        ))}
      </section>

      {/* Main Community Channels */}
      <section className="px-6 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        <GlassCard className="p-10 space-y-8 border-indigo-500/20">
          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
            <MessageCircle size={32} />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Discord Community</h2>
            <p className="text-slate-400 leading-relaxed">
              Get real-time support, participate in weekly tech talks, and share 
              your data visualizations with fellow Vortex users.
            </p>
          </div>
          <NeonButton className="w-full bg-[#5865F2] hover:bg-[#4752C4] border-none text-white">Join Discord</NeonButton>
        </GlassCard>

        <GlassCard className="p-10 space-y-8 border-cyan-500/20">
          <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
            <Twitter size={32} />
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-white">Twitter / X Updates</h2>
            <p className="text-slate-400 leading-relaxed">
              Follow us for daily bite-sized data tips, company news, and 
              insights into our latest predictive models.
            </p>
          </div>
          <NeonButton className="w-full bg-slate-900 border-slate-800 text-white hover:bg-slate-800">Follow @VortexAI</NeonButton>
        </GlassCard>
      </section>

      {/* Open Source / Contributors */}
      <section className="px-6 max-w-7xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-white">Open Source DNA.</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Vortex believes in giving back. Many of our core visualization libraries are open-sourced on GitHub.</p>
        </div>
        
        <GlassCard className="p-12 border-white/5 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8 text-primary opacity-10">
            <Github size={120} />
          </div>
          <div className="relative z-10 space-y-8">
            <div className="flex items-center justify-center gap-8 flex-wrap">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-14 h-14 rounded-full bg-slate-800 border border-slate-700 animate-pulse-slow" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
              <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold">
                +420
              </div>
            </div>
            <p className="text-xl font-bold text-white">Join 400+ contributors making data more accessible.</p>
            <NeonButton variant="outline" leftIcon={<Github size={18} />}>View GitHub Org</NeonButton>
          </div>
        </GlassCard>
      </section>

      {/* Community Recognition */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Award, title: "Vortex MVP", desc: "Our reward program for the most active community contributors." },
            { icon: Star, title: "Partner Program", desc: "Co-market and build with the Vortex Enterprise team." },
            { icon: Users, title: "Local Chapters", desc: "Meet fellow data enthusiasts in your city through our regional events." },
          ].map((item, i) => (
            <GlassCard key={i} className="text-center space-y-4">
              <div className="text-primary flex justify-center"><item.icon size={32} /></div>
              <h3 className="text-lg font-bold text-white">{item.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
