"use client";

import { Settings as SettingsIcon, Bell, Moon, Globe, Shield, Zap } from "lucide-react";
import { MagicCard } from "@/components/ui/magic-card";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { useState } from "react";

const settingSections = [
    {
        icon: <Bell className="h-6 w-6" />,
        title: "Notifications",
        description: "Manage your notification preferences",
        gradient: "from-blue-500 to-cyan-500",
    },
    {
        icon: <Moon className="h-6 w-6" />,
        title: "Appearance",
        description: "Customize the look and feel",
        gradient: "from-purple-500 to-pink-500",
    },
    {
        icon: <Globe className="h-6 w-6" />,
        title: "Language",
        description: "Set your preferred language",
        gradient: "from-green-500 to-emerald-500",
    },
    {
        icon: <Shield className="h-6 w-6" />,
        title: "Privacy",
        description: "Control your privacy settings",
        gradient: "from-orange-500 to-red-500",
    },
    {
        icon: <Zap className="h-6 w-6" />,
        title: "Performance",
        description: "Optimize app performance",
        gradient: "from-yellow-500 to-orange-500",
    },
];

export default function SettingsPage() {
    const [notifications, setNotifications] = useState(true);

    return (
        <div className="max-w-5xl mx-auto space-y-12">
            <BlurFade delay={0.2} inView>
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 via-red-600 to-pink-600">
                        Settings
                    </h1>
                    <p className="text-xl text-neutral-600 dark:text-neutral-400">
                        Configure your preferences and account settings
                    </p>
                </div>
            </BlurFade>

            {/* Quick Settings */}
            <BlurFade delay={0.3} inView>
                <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm p-8">
                    <BorderBeam size={300} duration={15} />

                    <div className="space-y-6">
                        <h2 className="text-2xl font-bold flex items-center gap-2">
                            <SettingsIcon className="h-6 w-6" />
                            Quick Settings
                        </h2>

                        <div className="flex items-center justify-between p-4 rounded-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                            <div>
                                <h3 className="font-semibold">Notifications</h3>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                                    Enable push notifications
                                </p>
                            </div>
                            <button
                                onClick={() => setNotifications(!notifications)}
                                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notifications ? "bg-purple-600" : "bg-neutral-300 dark:bg-neutral-700"
                                    }`}
                            >
                                <span
                                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${notifications ? "translate-x-6" : "translate-x-1"
                                        }`}
                                />
                            </button>
                        </div>
                    </div>
                </div>
            </BlurFade>

            {/* Settings Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {settingSections.map((section, idx) => (
                    <BlurFade key={section.title} delay={0.4 + idx * 0.1} inView>
                        <MagicCard
                            className="cursor-pointer h-full p-6 shadow-2xl hover:scale-105 transition-transform duration-300"
                            gradientColor="#262626"
                        >
                            <div className="flex items-start gap-4">
                                <div className={`p-3 rounded-lg bg-gradient-to-br ${section.gradient}`}>
                                    {section.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2">{section.title}</h3>
                                    <p className="text-neutral-600 dark:text-neutral-400">
                                        {section.description}
                                    </p>
                                </div>
                            </div>
                        </MagicCard>
                    </BlurFade>
                ))}
            </div>

            {/* Account Section */}
            <BlurFade delay={1.0} inView>
                <div className="relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm p-8">
                    <BorderBeam size={300} duration={18} delay={5} />

                    <h2 className="text-2xl font-bold mb-6">Account Information</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium mb-2">Username</label>
                            <input
                                type="text"
                                defaultValue="Taruto-f"
                                className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                defaultValue="taruto@example.com"
                                className="w-full px-4 py-3 rounded-xl border-2 border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>
            </BlurFade>
        </div>
    );
}
