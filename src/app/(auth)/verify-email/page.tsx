"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { MailCheck, ArrowRight, RefreshCw } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function VerifyEmailPage() {
  const [isResending, setIsResending] = useState(false);

  const handleResend = () => {
    setIsResending(true);
    setTimeout(() => setIsResending(false), 2000);
  };

  return (
    <GlassCard className="p-8 md:p-10 text-center" glow>
      <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-8 neon-glow-primary">
        <MailCheck className="text-primary w-10 h-10" />
      </div>
      
      <h2 className="text-3xl font-bold text-white mb-4">Check Your Email</h2>
      <p className="text-slate-400 mb-8 leading-relaxed">
        We've sent a verification link to <span className="text-white font-semibold">alex@rivera.com</span>. 
        Please click the link to verify your account.
      </p>

      <div className="space-y-4">
        <Link href="/dashboard">
          <NeonButton className="w-full" rightIcon={<ArrowRight size={18} />}>
            Go to Dashboard
          </NeonButton>
        </Link>
        
        <button 
          onClick={handleResend}
          disabled={isResending}
          className="flex items-center justify-center gap-2 w-full text-sm font-medium text-slate-500 hover:text-slate-300 transition-colors"
        >
          <RefreshCw size={16} className={isResending ? "animate-spin" : ""} />
          {isResending ? "Resending..." : "Didn't receive the email? Resend"}
        </button>
      </div>
    </GlassCard>
  );
}
