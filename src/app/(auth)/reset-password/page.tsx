"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { CustomInput } from "@/components/ui/InputAndBadge";
import { NeonButton } from "@/components/ui/NeonButton";
import { Lock, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ResetPasswordPage() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      setTimeout(() => router.push("/login"), 3000);
    }, 1500);
  };

  return (
    <GlassCard className="p-8 md:p-10" glow>
      {!isSuccess ? (
        <>
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">New Password</h2>
            <p className="text-slate-400">Please choose a strong password</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <CustomInput
              label="New Password"
              type="password"
              placeholder="••••••••"
              required
              leftIcon={<Lock size={18} />}
            />
            <CustomInput
              label="Confirm New Password"
              type="password"
              placeholder="••••••••"
              required
              leftIcon={<Lock size={18} />}
            />
            
            <NeonButton 
              type="submit" 
              className="w-full" 
              isLoading={isLoading}
            >
              Reset Password
            </NeonButton>
          </form>
        </>
      ) : (
        <div className="text-center">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-2xl flex items-center justify-center mx-auto mb-8 neon-glow-secondary">
            <CheckCircle2 className="text-emerald-500 w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Password Reset!</h2>
          <p className="text-slate-400 mb-8">
            Your password has been updated successfully. 
            Redirecting you to login...
          </p>
          <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary animate-progress" />
          </div>
        </div>
      )}
    </GlassCard>
  );
}
