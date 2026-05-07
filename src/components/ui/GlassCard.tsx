"use client";

import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  glowColor?: "primary" | "secondary";
}

export function GlassCard({
  children,
  className,
  glow = false,
  glowColor = "primary",
  ...props
}: GlassCardProps) {
  const glowClasses = glow
    ? glowColor === "primary"
      ? "neon-glow-primary"
      : "neon-glow-secondary"
    : "";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "glass-morphism rounded-2xl p-6 relative overflow-hidden",
        glowClasses,
        className
      )}
      {...props}
    >
      {/* Decorative background gradients */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-secondary/5 blur-3xl rounded-full pointer-events-none" />
      
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
