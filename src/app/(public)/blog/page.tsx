"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { 
  Search, 
  Tag, 
  Calendar, 
  Clock, 
  ArrowRight,
  TrendingUp,
  Cpu,
  BarChart3,
  Globe,
  Mail
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Predictive Analytics in 2026",
    excerpt: "Explore how machine learning models are evolving to provide hyper-accurate business forecasts with minimal data input.",
    date: "May 12, 2026",
    readTime: "8 min read",
    category: "AI & Data",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    author: "Sarah Jenkins"
  },
  {
    id: 2,
    title: "Designing Dashboards for Human Decision Making",
    excerpt: "Why most analytics platforms fail to drive action and how to design visual systems that actually impact the bottom line.",
    date: "May 08, 2026",
    readTime: "12 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    author: "Alex Rivera"
  },
  {
    id: 3,
    title: "Scaling Your Data Infrastructure with Cloud Native Tech",
    excerpt: "A technical guide to building robust data pipelines that can handle millions of events per second with zero latency.",
    date: "May 05, 2026",
    readTime: "15 min read",
    category: "Infrastructure",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    author: "David Chen"
  },
  {
    id: 4,
    title: "Leveraging Real-Time Insights for Retail Growth",
    excerpt: "How modern e-commerce brands are using sub-second analytics to optimize inventory and marketing spend.",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    category: "Business",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    author: "Elena Rodriguez"
  },
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="pt-40 space-y-40 pb-40">
      {/* Hero Section */}
      <section className="px-6 max-w-5xl mx-auto text-center space-y-8">
        <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter">
          Vortex <span className="text-secondary">Journal</span>.
        </h1>
        <p className="text-xl text-slate-400 leading-relaxed max-w-3xl mx-auto">
          Insights, guides, and news from the forefront of data intelligence 
          and modern SaaS engineering.
        </p>
      </section>

      {/* Featured Post */}
      <section className="px-6 max-w-7xl mx-auto">
        <Link href={`/blog/${blogPosts[0].id}`}>
          <GlassCard className="p-0 border-white/5 group overflow-hidden grid grid-cols-1 lg:grid-cols-2">
            <div className="aspect-video lg:aspect-auto overflow-hidden">
              <img 
                src={blogPosts[0].image} 
                alt={blogPosts[0].title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-10 md:p-16 space-y-8 flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest border border-primary/20">
                  Featured Article
                </span>
                <span className="text-xs text-slate-500 font-medium">{blogPosts[0].date}</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                {blogPosts[0].title}
              </h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700" />
                  <span className="text-sm font-bold text-white">{blogPosts[0].author}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock size={14} />
                  {blogPosts[0].readTime}
                </div>
              </div>
            </div>
          </GlassCard>
        </Link>
      </section>

      {/* Search & Categories */}
      <section className="px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="relative max-w-md w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search articles..." 
            className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl pl-12 pr-4 py-3.5 text-sm text-slate-300 placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-slate-500">
          <span className="text-primary">All</span>
          <span className="hover:text-white cursor-pointer">AI</span>
          <span className="hover:text-white cursor-pointer">Design</span>
          <span className="hover:text-white cursor-pointer">Engineering</span>
          <span className="hover:text-white cursor-pointer">Business</span>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Link key={post.id} href={`/blog/${post.id}`}>
              <GlassCard className="p-0 border-white/5 group h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8 space-y-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-secondary uppercase tracking-widest">{post.category}</span>
                    <span className="text-[10px] text-slate-500 font-bold uppercase">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors flex-1">
                    {post.title}
                  </h3>
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <span className="text-xs text-slate-500">{post.author}</span>
                    <ArrowRight size={18} className="text-slate-700 group-hover:text-primary transition-all group-hover:translate-x-1" />
                  </div>
                </div>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter / Stay Updated */}
      <section className="px-6">
        <GlassCard className="max-w-4xl mx-auto p-12 text-center space-y-8 bg-gradient-to-br from-slate-900 to-slate-950">
          <Mail className="text-primary mx-auto" size={48} />
          <h2 className="text-3xl md:text-5xl font-bold text-white">Join the Intelligence Network.</h2>
          <p className="text-slate-400 max-w-lg mx-auto">Get monthly curated insights on data engineering, AI trends, and SaaS growth strategies delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="name@company.com" 
              className="flex-1 bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-primary"
            />
            <NeonButton variant="primary">Subscribe</NeonButton>
          </div>
        </GlassCard>
      </section>
    </div>
  );
}
