"use client";

import { Zap, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NeonButton } from "@/components/ui/NeonButton";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Community", href: "/community" },
  { name: "Contact", href: "/contact" },
];

export function PublicNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-slate-950/80 backdrop-blur-xl border-b border-white/5 py-3" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center neon-glow-primary group-hover:scale-110 transition-transform">
            <Zap className="text-white w-6 h-6 fill-white" />
          </div>
          <span className="font-bold text-2xl tracking-tight">Vortex<span className="text-primary">Analytics</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="text-sm font-semibold text-slate-300 hover:text-white">Sign In</Link>
          <Link href="/signup">
            <NeonButton size="sm">Get Started</NeonButton>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-slate-950 border-b border-white/5 p-6 md:hidden flex flex-col gap-6"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-slate-400"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex flex-col gap-4 pt-4 border-t border-white/5">
              <Link href="/login" onClick={() => setIsOpen(false)} className="text-center font-semibold text-slate-300">Sign In</Link>
              <Link href="/signup" onClick={() => setIsOpen(false)}>
                <NeonButton className="w-full">Get Started</NeonButton>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
