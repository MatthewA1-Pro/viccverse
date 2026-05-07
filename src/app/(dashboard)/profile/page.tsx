"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { CustomInput, Badge } from "@/components/ui/InputAndBadge";
import { NeonButton } from "@/components/ui/NeonButton";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Camera, 
  ShieldCheck, 
  Key,
  Globe,
  Github,
  X
} from "lucide-react";
import { useState } from "react";

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">User Profile</h1>
        <p className="text-slate-400">Manage your personal information and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Avatar & Summary */}
        <div className="space-y-8">
          <GlassCard className="text-center">
            <div className="relative inline-block mx-auto mb-6">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-primary to-secondary p-[2px] neon-glow-primary">
                <div className="w-full h-full rounded-[30px] bg-slate-950 flex items-center justify-center text-4xl font-bold text-white overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=200" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <button className="absolute bottom-[-10px] right-[-10px] p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors">
                <Camera size={18} />
              </button>
            </div>
            
            <h2 className="text-2xl font-bold text-white">Alex Rivera</h2>
            <p className="text-slate-500 text-sm mb-4">Senior Data Analyst</p>
            
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              <Badge variant="primary">Administrator</Badge>
              <Badge variant="success">Verified</Badge>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-slate-800">
              <div>
                <p className="text-xl font-bold text-white">128</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Reports</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white">12.4k</p>
                <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">Queries</p>
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-lg font-bold text-white mb-6">Social Accounts</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="flex items-center gap-3">
                  <Github className="text-slate-400" size={20} />
                  <span className="text-sm font-medium text-slate-300">alexrivera_pro</span>
                </div>
                <Badge variant="info">Linked</Badge>
              </div>
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/50 border border-slate-800">
                <div className="flex items-center gap-3">
                  <X className="text-slate-400" size={20} />
                  <span className="text-sm font-medium text-slate-300">arivera_data</span>
                </div>
                <Badge variant="info">Linked</Badge>
              </div>
              <NeonButton variant="outline" size="sm" className="w-full">
                Add More Accounts
              </NeonButton>
            </div>
          </GlassCard>
        </div>

        {/* Right Column - Forms */}
        <div className="lg:col-span-2 space-y-8">
          <GlassCard>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-white">Personal Information</h3>
              <NeonButton 
                variant={isEditing ? "primary" : "outline"} 
                size="sm"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Save Changes" : "Edit Profile"}
              </NeonButton>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <CustomInput 
                label="Full Name" 
                defaultValue="Alex Rivera" 
                disabled={!isEditing}
                leftIcon={<User size={18} />}
              />
              <CustomInput 
                label="Email Address" 
                defaultValue="alex@rivera.com" 
                disabled={!isEditing}
                leftIcon={<Mail size={18} />}
              />
              <CustomInput 
                label="Phone Number" 
                defaultValue="+1 (555) 000-0000" 
                disabled={!isEditing}
                leftIcon={<Phone size={18} />}
              />
              <CustomInput 
                label="Location" 
                defaultValue="San Francisco, CA" 
                disabled={!isEditing}
                leftIcon={<MapPin size={18} />}
              />
              <div className="md:col-span-2">
                <label className="text-sm font-medium text-slate-400 ml-1 mb-1.5 block">Professional Bio</label>
                <textarea 
                  className="w-full bg-slate-900/50 border border-slate-800 rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-primary/50 transition-all min-h-[120px]"
                  placeholder="Tell us about yourself..."
                  defaultValue="Passionate data scientist with over 8 years of experience in business intelligence and predictive modeling. Helping businesses unlock their full potential through data."
                  disabled={!isEditing}
                />
              </div>
            </div>
          </GlassCard>

          <GlassCard>
            <h3 className="text-xl font-bold text-white mb-8">Account Security</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-primary/5 border border-primary/10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Two-Factor Authentication</p>
                    <p className="text-xs text-slate-500">Currently enabled via Google Authenticator</p>
                  </div>
                </div>
                <NeonButton variant="outline" size="sm">Manage</NeonButton>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
                    <Key size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Password Settings</p>
                    <p className="text-xs text-slate-500">Last changed 3 months ago</p>
                  </div>
                </div>
                <NeonButton variant="outline" size="sm">Change Password</NeonButton>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-900/50 border border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400">
                    <Globe size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">Active Sessions</p>
                    <p className="text-xs text-slate-500">3 devices currently logged in</p>
                  </div>
                </div>
                <NeonButton variant="outline" size="sm">View Sessions</NeonButton>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
