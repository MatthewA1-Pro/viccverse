"use client";

import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  FolderKanban,
  CheckSquare,
  BarChart3, 
  MessageSquare,
  Users,
  Files,
  Calendar,
  Bot,
  Receipt,
  Activity,
  Settings, 
  LogOut,
  ChevronLeft,
  Zap,
  ShieldCheck,
  Search
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "@/lib/supabase";

const topMenuItems = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: FolderKanban, label: "Projects", href: "/dashboard/projects" },
  { icon: CheckSquare, label: "Tasks", href: "/dashboard/tasks" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: MessageSquare, label: "Messages", href: "/dashboard/messages", badge: "3" },
  { icon: Users, label: "Team", href: "/team" },
  { icon: Files, label: "File Manager", href: "/dashboard/files" },
  { icon: Calendar, label: "Calendar", href: "/dashboard/calendar" },
  { icon: Bot, label: "AI Assistant", href: "/dashboard/ai" },
];

const bottomMenuItems = [
  { icon: Receipt, label: "Invoices", href: "/invoices" },
  { icon: Activity, label: "Activity Logs", href: "/activity" },
  { icon: Settings, label: "Settings", href: "/settings" },
];

export function Sidebar({ permanent = false }: { permanent?: boolean }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [user, setUser] = useState<any>(null);
  const pathname = usePathname();
  const router = useRouter();
  const effectiveCollapsed = permanent ? false : isCollapsed;

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    fetchUser();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/login");
    router.refresh();
  };

  const fullName = user?.user_metadata?.full_name || user?.email || "User";
  const initials = user?.user_metadata?.first_name && user?.user_metadata?.last_name 
    ? `${user.user_metadata.first_name[0]}${user.user_metadata.last_name[0]}`.toUpperCase()
    : fullName.charAt(0).toUpperCase();

  return (
    <motion.aside
      animate={{ width: effectiveCollapsed ? 80 : 260 }}
      className="h-screen sticky top-0 bg-background/80 backdrop-blur-2xl border-r border-border flex flex-col z-50 overflow-hidden shadow-2xl transition-colors duration-500"
    >
      {/* Logo Section */}
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)] shrink-0">
          <span className="font-bold text-xl text-white">V</span>
        </div>
        <AnimatePresence>
          {!effectiveCollapsed && (
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              className="font-black text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400"
            >
              Vicc<span className="text-primary">Verse</span>
            </motion.span>
          )}
        </AnimatePresence>
      </div>

      {/* Toggle Button - Hidden on mobile or if permanent */}
      {!permanent && (
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="absolute top-8 -right-3 w-6 h-6 bg-slate-800 border border-slate-700 rounded-full hidden lg:flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-700 transition-colors z-50"
        >
          <ChevronLeft className={cn("w-4 h-4 transition-transform", effectiveCollapsed && "rotate-180")} />
        </button>
      )}

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden scrollbar-hide py-4 px-4 flex flex-col gap-8">
        
        {/* Main Menu */}
        <nav className="space-y-1">
          {!effectiveCollapsed && <p className="px-4 text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">Workspace</p>}
          {topMenuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded-xl transition-all group relative overflow-hidden active:scale-95",
                  isActive 
                    ? "bg-primary/10 text-primary font-semibold" 
                    : "text-slate-400 font-medium hover:bg-slate-900 hover:text-slate-200"
                )}
              >
                <item.icon className={cn("w-5 h-5 shrink-0", isActive && "text-primary")} />
                <AnimatePresence>
                  {!effectiveCollapsed && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="flex-1 flex items-center justify-between whitespace-nowrap"
                    >
                      <span className="text-sm md:text-base">{item.label}</span>
                      {item.badge && (
                        <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-bold">
                          {item.badge}
                        </span>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute left-0 w-1 h-6 bg-primary rounded-r-full shadow-[0_0_10px_rgba(139,92,246,0.5)]"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* System Menu */}
        <nav className="space-y-1 mt-auto">
          {!effectiveCollapsed && <p className="px-4 text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">System</p>}
          {bottomMenuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "flex items-center gap-4 px-4 py-3 rounded-xl transition-all group relative overflow-hidden active:scale-95",
                  isActive 
                    ? "bg-primary/10 text-primary font-semibold" 
                    : "text-slate-400 font-medium hover:bg-slate-900 hover:text-slate-200"
                )}
              >
                <item.icon className={cn("w-5 h-5 shrink-0", isActive && "text-primary")} />
                <AnimatePresence>
                  {!effectiveCollapsed && (
                    <motion.span
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      className="whitespace-nowrap text-sm md:text-base"
                    >
                      {item.label}
                    </motion.span>
                  )}
                </AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute left-0 w-1 h-6 bg-primary rounded-r-full"
                  />
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer / User Info */}
      <div className="p-4 border-t border-border">
        <Link href="/profile" className="bg-muted/50 hover:bg-muted transition-colors border border-border rounded-2xl p-3 flex items-center gap-3 cursor-pointer group active:scale-95">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-slate-800 to-slate-700 border border-slate-600 flex items-center justify-center shrink-0 overflow-hidden shadow-inner relative">
            {user?.user_metadata?.avatar_url ? (
              <img src={user.user_metadata.avatar_url} alt={fullName} className="w-full h-full object-cover" />
            ) : (
              <span className="font-bold text-slate-300 text-sm z-10">{initials}</span>
            )}
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <AnimatePresence>
            {!effectiveCollapsed && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col min-w-0 flex-1"
              >
                <span className="text-sm font-bold text-slate-200 truncate group-hover:text-white transition-colors">{fullName}</span>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-secondary" />
                  <span className="text-[10px] text-slate-500 font-semibold truncate">Enterprise Plan</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
        <button 
          onClick={handleSignOut}
          className={cn(
            "w-full mt-2 flex items-center gap-4 px-4 py-3 rounded-xl text-slate-400 hover:bg-red-500/10 hover:text-red-400 transition-all group active:scale-95",
            effectiveCollapsed && "justify-center"
          )}
        >
          <LogOut className="w-5 h-5 shrink-0" />
          {!effectiveCollapsed && <span className="text-sm font-bold">Sign Out</span>}
        </button>
      </div>
    </motion.aside>
  );
}
