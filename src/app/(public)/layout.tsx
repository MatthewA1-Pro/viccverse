"use client";

import { PublicNavbar } from "@/components/public/PublicNavbar";
import { PublicFooter } from "@/components/public/PublicFooter";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { 
  Instagram, 
  Twitter, 
  Linkedin, 
  Facebook, 
  MessageCircle 
} from "lucide-react";
import Link from "next/link";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col min-h-screen bg-[#020617]">
      <PublicNavbar />
      
      {/* Floating Social Sidebar */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-6">
        {[
          { icon: Twitter, href: "#", color: "hover:text-cyan-400" },
          { icon: Linkedin, href: "#", color: "hover:text-blue-500" },
          { icon: Instagram, href: "#", color: "hover:text-pink-500" },
          { icon: Facebook, href: "#", color: "hover:text-blue-600" },
          { icon: MessageCircle, href: "#", color: "hover:text-emerald-500" },
        ].map((social, i) => (
          <motion.a
            key={i}
            href={social.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className={`text-slate-600 transition-all duration-300 transform hover:scale-125 ${social.color}`}
          >
            <social.icon size={22} />
          </motion.a>
        ))}
        <div className="w-[1px] h-20 bg-slate-800 mx-auto mt-2" />
      </div>

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <PublicFooter />
      
      {/* WhatsApp Floating Button */}
      <Link 
        href="https://wa.me/#" 
        target="_blank"
        className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-emerald-500 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-emerald-600 transition-all hover:scale-110 active:scale-95 group"
      >
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with an Expert
        </span>
      </Link>
    </div>
  );
}
