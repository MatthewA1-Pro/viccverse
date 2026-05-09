"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { CustomInput } from "@/components/ui/InputAndBadge";
import { NeonButton } from "@/components/ui/NeonButton";
import { Mail, Lock, Github, Globe } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (loginError) throw loginError;

      if (data.session) {
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err: any) {
      setError(err.message || "Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = async (provider: 'google' | 'github') => {
    try {
      const { error: socialError } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (socialError) throw socialError;
    } catch (err: any) {
      setError(err.message || `Error signing in with ${provider}`);
    }
  };

  return (
    <GlassCard className="p-8 md:p-10 border-white/5" glow>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
        <p className="text-slate-400">Enter your credentials to access your dashboard</p>
      </div>

      {error && (
        <div className="mb-6 p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm text-center">
          {error}
        </div>
      )}

      <form onSubmit={handleLogin} className="space-y-6">
        <CustomInput
          label="Email Address"
          name="email"
          type="email"
          placeholder="name@company.com"
          required
          value={formData.email}
          onChange={handleChange}
          leftIcon={<Mail size={18} />}
        />
        <div className="space-y-1">
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
          <div className="text-right">
            <Link 
              href="/forgot-password" 
              className="text-xs text-primary hover:text-primary/80 transition-colors font-medium"
            >
              Forgot password?
            </Link>
          </div>
        </div>

        <NeonButton 
          type="submit" 
          className="w-full" 
          isLoading={isLoading}
        >
          Sign In
        </NeonButton>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-800"></div>
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-slate-950 px-2 text-slate-500 font-bold tracking-widest">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <NeonButton 
          variant="outline" 
          className="w-full" 
          leftIcon={<Globe size={18} />}
          onClick={() => handleSocialLogin('google')}
        >
          Google
        </NeonButton>
        <NeonButton 
          variant="outline" 
          className="w-full" 
          leftIcon={<Github size={18} />}
          onClick={() => handleSocialLogin('github')}
        >
          GitHub
        </NeonButton>
      </div>

      <p className="text-center mt-8 text-sm text-slate-400">
        Don't have an account?{" "}
        <Link href="/signup" className="text-primary font-bold hover:underline">
          Create one for free
        </Link>
      </p>
    </GlassCard>
  );
}
