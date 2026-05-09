"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { CustomInput } from "@/components/ui/InputAndBadge";
import { NeonButton } from "@/components/ui/NeonButton";
import { Mail, Lock, User, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: signupError } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            first_name: formData.firstName,
            last_name: formData.lastName,
            full_name: `${formData.firstName} ${formData.lastName}`,
          },
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (signupError) throw signupError;

      if (data.user) {
        // If email confirmation is required, they might need to check their inbox
        // For now, let's redirect to verify-email or dashboard depending on setup
        router.push("/verify-email");
      }
    } catch (err: any) {
      setError(err.message || "An error occurred during signup");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <GlassCard className="p-8 md:p-10 border-white/5" glow>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
        <p className="text-slate-400">Join 10k+ businesses scaling with Vortex</p>
      </div>

      {error && (
        <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleSignup} className="space-y-5">
        <div className="grid grid-cols-2 gap-4">
          <CustomInput
            label="First Name"
            name="firstName"
            type="text"
            placeholder="John"
            required
            value={formData.firstName}
            onChange={handleChange}
            leftIcon={<User size={18} />}
          />
          <CustomInput
            label="Last Name"
            name="lastName"
            type="text"
            placeholder="Doe"
            required
            value={formData.lastName}
            onChange={handleChange}
          />
        </div>
        
        <CustomInput
          label="Work Email"
          name="email"
          type="email"
          placeholder="john@company.com"
          required
          value={formData.email}
          onChange={handleChange}
          leftIcon={<Mail size={18} />}
        />
        
        <CustomInput
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          required
          value={formData.password}
          onChange={handleChange}
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
