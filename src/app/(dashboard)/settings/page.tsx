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
        { label: "Organization Name", desc: "Viccverse Global Solutions", type: "text" },
        { label: "Workspace URL", desc: "viccverse.com/workspace/main", type: "text" },
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
        { label: "Data Retention", desc: "Current: 24 Months", type: "select" },
        { label: "Export Format", desc: "JSON (Default)", type: "select" },
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground tracking-tight">System Settings</h1>
        <p className="text-muted-foreground">Configure your workspace and preferences.</p>
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
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-all font-bold text-sm ${
                item.active 
                  ? 'bg-primary/10 text-primary shadow-sm shadow-primary/5' 
                  : 'text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              <item.icon size={18} />
              {item.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="lg:col-span-3 space-y-8">
          {settingSections.map((section, i) => (
            <GlassCard key={i} className="border-border">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-muted border border-border text-primary">
                  <section.icon size={18} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{section.title}</h3>
              </div>

              <div className="space-y-8">
                {section.items.map((item, j) => (
                  <div key={j} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-bold text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-1">{item.desc}</p>
                    </div>
                    
                    {item.type === "toggle" ? (
                      <button className={`relative w-11 h-6 rounded-full transition-colors ${item.value ? 'bg-primary' : 'bg-muted border border-border'}`}>
                        <div className={`absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform ${item.value ? 'translate-x-5' : ''} shadow-sm`} />
                      </button>
                    ) : item.type === "text" ? (
                      <button className="text-xs font-bold text-primary hover:underline uppercase tracking-wider">Update</button>
                    ) : (
                      <NeonButton variant="outline" size="sm" className="h-9 px-4 text-xs font-bold">Manage</NeonButton>
                    )}
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}

          <div className="flex justify-end gap-4">
            <NeonButton variant="ghost">Reset Defaults</NeonButton>
            <NeonButton variant="primary" className="shadow-lg shadow-primary/20">Save Configuration</NeonButton>
          </div>
        </div>
      </div>
    </div>
  );
}
