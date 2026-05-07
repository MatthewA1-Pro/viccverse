"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { CustomInput } from "@/components/ui/InputAndBadge";
import { NeonButton } from "@/components/ui/NeonButton";
import { Mail, Lock, User, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth
    setTimeout(() => {
      setIsLoading(false);
      router.push("/verify-email");
    }, 1500);
  };

  return (
    <GlassCard className="p-8 md:p-10 border-white/5" glow>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
        <p className="text-slate-400">Join 10k+ businesses scaling with Vortex</p>
      </div>

      <form onSubmit={handleSignup} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <CustomInput
            label="First Name"
            type="text"
            placeholder="John"
            required
            leftIcon={<User size={18} />}
          />
          <CustomInput
            label="Last Name"
            type="text"
            placeholder="Doe"
            required
          />
        </div>
        
        <CustomInput
          label="Work Email"
          type="email"
          placeholder="john@company.com"
          required
          leftIcon={<Mail size={18} />}
        />
        
        <CustomInput
          label="Password"
          type="password"
          placeholder="••••••••"
          required
          leftIcon={<Lock size={18} />}
        />

        <div className="flex items-start gap-3 px-1">
          <div className="pt-1">
            <input 
              type="checkbox" 
              className="w-4 h-4 rounded bg-slate-900 border-slate-800 text-primary focus:ring-primary/20 transition-all" 
              required
            />
          </div>
          <p className="text-xs text-slate-500 leading-relaxed">
            I agree to the <Link href="#" className="text-slate-300 underline">Terms of Service</Link> and <Link href="#" className="text-slate-300 underline">Privacy Policy</Link>.
          </p>
        </div>

        <NeonButton 
          type="submit" 
          className="w-full" 
          isLoading={isLoading}
          leftIcon={<ShieldCheck size={18} />}
        >
          Start 14-Day Free Trial
        </NeonButton>
      </form>

      <p className="text-center mt-8 text-sm text-slate-400">
        Already have an account?{" "}
        <Link href="/login" className="text-primary font-bold hover:underline">
          Sign in
        </Link>
      </p>
    </GlassCard>
  );
}
