"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { CustomInput } from "@/components/ui/InputAndBadge";
import { NeonButton } from "@/components/ui/NeonButton";
import { Mail, ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ForgotPasswordPage() {
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1500);
  };

  return (
    <GlassCard className="p-8 md:p-10" glow>
      {!isSent ? (
        <>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Reset Password</h2>
            <p className="text-slate-400">Enter your email and we'll send you instructions</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <CustomInput
              label="Email Address"
              type="email"
              placeholder="name@company.com"
              required
              leftIcon={<Mail size={18} />}
            />
            
            <NeonButton 
              type="submit" 
              className="w-full" 
              isLoading={isLoading}
              leftIcon={<Send size={18} />}
            >
              Send Instructions
            </NeonButton>
          </form>
        </>
      ) : (
        <div className="text-center">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 neon-glow-secondary">
            <Send className="text-emerald-500 w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Email Sent!</h2>
          <p className="text-slate-400 mb-8">
            Check your inbox for a link to reset your password. 
            If you don't see it, check your spam folder.
          </p>
          <NeonButton variant="outline" className="w-full" onClick={() => setIsSent(false)}>
            Try another email
          </NeonButton>
        </div>
      )}

      <div className="mt-8 pt-8 border-t border-slate-800/50">
        <Link 
          href="/login" 
          className="flex items-center justify-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-200 transition-colors"
        >
          <ArrowLeft size={16} />
          Back to Login
        </Link>
      </div>
    </GlassCard>
  );
}
