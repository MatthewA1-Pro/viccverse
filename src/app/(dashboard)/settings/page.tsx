"use client";

import { GlassCard } from "@/components/ui/GlassCard";
import { NeonButton } from "@/components/ui/NeonButton";
import { 
  Settings, 
  Moon, 
  Sun, 
  Palette, 
  Database, 
  Shield, 
  Mail, 
  Bell,
  Zap
} from "lucide-react";
import { useState } from "react";

export default function SettingsPage() {
  const [theme, setTheme] = useState("dark");

  const settingSections = [
    {
      title: "General",
      icon: Settings,
      items: [
        { label: "Organization Name", desc: "Vortex Pro Analytics Inc.", type: "text" },
        { label: "Workspace URL", desc: "vortex-pro.com/workspace/alex", type: "text" },
      ]
    },
    {
      title: "Appearance",
      icon: Palette,
      items: [
        { label: "Theme Mode", desc: "Switch between dark and light themes", type: "toggle", value: true },
        { label: "Glassmorphism", desc: "Enable semi-transparent backgrounds", type: "toggle", value: true },
        { label: "Neon Effects", desc: "Show glowing highlights on interactive elements", type: "toggle", value: true },
      ]
    },
    {
      title: "Data & Storage",
      icon: Database,
      items: [
        { label: "Auto-sync", desc: "Sync data every 5 minutes", type: "toggle", value: true },
        { label: "Data Retention", desc: "Current: 12 Months", type: "select" },
        { label: "Export Format", desc: "JSON (Default)", type: "select" },
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white tracking-tight">System Settings</h1>
        <p className="text-slate-400">Configure your workspace and preferences.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Navigation Sidebar */}
        <div className="space-y-2">
          {[
            { icon: Settings, label: "General", active: true },
            { icon: Palette, label: "Appearance", active: false },
            { icon: Shield, label: "Security", active: false },
            { icon: Bell, label: "Notifications", active: false },
            { icon: Mail, label: "Billing", active: false },
            { icon: Zap, label: "Integrations", active: false },
          ].map((item, i) => (
            <button 
              key={i}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all font-medium ${
                item.active ? 'bg-primary/10 text-primary' : 'text-slate-400 hover:bg-slate-900/50 hover:text-slate-200'
              }`}
            >
              <item.icon size={20} />
              {item.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-8">
          {settingSections.map((section, i) => (
            <GlassCard key={i}>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-slate-800 text-slate-400">
                  <section.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">{section.title}</h3>
              </div>

              <div className="space-y-8">
                {section.items.map((item, j) => (
                  <div key={j} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-white">{item.label}</p>
                      <p className="text-xs text-slate-500 mt-1">{item.desc}</p>
                    </div>
                    
                    {item.type === "toggle" ? (
                      <button className={`relative w-12 h-6 rounded-full transition-colors ${item.value ? 'bg-primary neon-glow-primary' : 'bg-slate-800'}`}>
                        <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${item.value ? 'translate-x-6' : ''}`} />
                      </button>
                    ) : item.type === "text" ? (
                      <button className="text-sm font-bold text-primary hover:underline">Change</button>
                    ) : (
                      <NeonButton variant="outline" size="sm">Manage</NeonButton>
                    )}
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}

          <div className="flex justify-end gap-4">
            <NeonButton variant="ghost">Reset Defaults</NeonButton>
            <NeonButton variant="primary">Save Configuration</NeonButton>
          </div>
        </div>
      </div>
    </div>
  );
}
