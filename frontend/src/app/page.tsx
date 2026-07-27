'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { AuthPage } from '@/components/auth/AuthPage';
import { OnboardingWizard } from '@/components/onboarding/OnboardingWizard';
import { DashboardCards } from '@/components/dashboard/DashboardCards';
import { AvatarSelector } from '@/components/avatar/AvatarSelector';
import { ExerciseManager } from '@/components/workout/ExerciseManager';
import { DietPlannerView } from '@/components/diet/DietPlannerView';
import { MusicPlayerExpanded } from '@/components/music/MusicPlayerExpanded';
import { AnalyticsView } from '@/components/analytics/AnalyticsView';
import { RewardSystem } from '@/components/rewards/RewardSystem';
import { SettingsView } from '@/components/settings/SettingsView';
import { NotificationCenter } from '@/components/notifications/NotificationCenter';
import { AICoachChat } from '@/components/coach/AICoachChat';
import { useFitStore } from '@/store/useFitStore';
import { LayoutDashboard, Dumbbell, Utensils, User, Music, Activity, Trophy, Settings, Bell, ChevronRight, Crown, Sparkles } from 'lucide-react';

export default function Home() {
  const { theme, isLoggedIn, isOnboarded, setOnboarded } = useFitStore();
  const [activeTab, setActiveTab] = useState<
    'dashboard' | 'workout' | 'diet' | 'avatar' | 'music' | 'analytics' | 'rewards' | 'settings' | 'notifications'
  >('dashboard');

  const [showAuthScreen, setShowAuthScreen] = useState(false);

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'workout', label: 'Workouts', icon: Dumbbell },
    { id: 'diet', label: 'AI Diet & Water', icon: Utensils },
    { id: 'avatar', label: 'Avatars & Gear', icon: User },
    { id: 'music', label: 'Spotify Audio', icon: Music },
    { id: 'analytics', label: '3D Analytics', icon: Activity },
    { id: 'rewards', label: 'Rewards & Level Up', icon: Trophy },
    { id: 'settings', label: 'Settings & Light', icon: Settings },
    { id: 'notifications', label: 'Knowledge & Logs', icon: Bell },
  ] as const;

  return (
    <div data-theme={theme} className="min-h-screen relative pb-16 bg-[var(--primary-bg)] text-[var(--text-primary)] transition-colors duration-400">
      {/* Background Aurora Blobs */}
      <div className="aurora-bg">
        <div className="aurora-blob blob-cyan"></div>
        <div className="aurora-blob blob-purple"></div>
        <div className="aurora-blob blob-green"></div>
      </div>

      {/* Glass Navigation Bar */}
      <Navbar
        onToggleAuthModal={() => setShowAuthScreen(!showAuthScreen)}
        onNavigateTab={(tab) => setActiveTab(tab)}
      />

      {/* Main App Container */}
      <main className="w-full max-w-[1760px] mx-auto px-6 lg:px-10 pt-28 space-y-8">
        {/* STEP 1: LOGIN / SIGN UP PAGE */}
        {!isLoggedIn || showAuthScreen ? (
          <AuthPage />
        ) : !isOnboarded ? (
          /* STEP 2: 7-STEP ONBOARDING & AVATAR SELECTION WIZARD */
          <OnboardingWizard onComplete={() => setOnboarded(true)} />
        ) : (
          /* STEP 3: MAIN DASHBOARD & ECOSYSTEM TABS */
          <>
            {/* Navigation Tabs Bar */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[var(--border-color)]">
              {tabs.map((t) => {
                const Icon = t.icon;
                const isActive = activeTab === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => setActiveTab(t.id)}
                    className={`whitespace-nowrap px-4 py-2.5 rounded-2xl text-xs font-bold flex items-center gap-2 transition-all cursor-pointer ${
                      isActive
                        ? 'royal-btn-primary shadow-md'
                        : 'bg-[var(--card-bg)] text-[var(--text-muted)] border border-[var(--card-border)] hover:text-[var(--text-primary)] hover:border-[var(--border-color)]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{t.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Tab 1: Dashboard View */}
            {activeTab === 'dashboard' && (
              <div className="space-y-8 animate-fadeIn">
                {/* Hero Welcome Banner */}
                <section className="royal-card p-8 relative overflow-hidden border border-[#1E5EFF]/30">
                  <div className="max-w-2xl space-y-3 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1E5EFF]/10 border border-[#1E5EFF]/30 text-[#1E5EFF] text-xs font-bold tracking-wider uppercase">
                      <Crown className="w-4 h-4 text-[#C9A227]" /> Premium AI Fitness OS
                    </div>
                    <h1 className="text-3xl sm:text-4xl font-black leading-tight font-heading text-[var(--text-primary)]">
                      Ascend Beyond Limits with <br />
                      <span className="bg-gradient-to-r from-[#1E5EFF] via-[#38BDF8] to-[#00B894] bg-clip-text text-transparent">
                        FitVerse Neural AI
                      </span>
                    </h1>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed font-semibold">
                      J.A.R.V.I.S AI coach compiles metabolic protocols, dynamic workout tracking, fluid water tracking, morphable avatar frames, and mood-synced audio.
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <button
                        onClick={() => setActiveTab('workout')}
                        className="royal-btn-primary px-6 py-3 text-xs sm:text-sm font-extrabold flex items-center gap-2 cursor-pointer shadow-lg"
                      >
                        Launch AI Workouts <ChevronRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setOnboarded(false)}
                        className="royal-btn-secondary px-5 py-3 text-xs sm:text-sm font-bold flex items-center gap-1.5 cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4 text-[#C9A227]" /> Re-configure DNA Onboarding
                      </button>
                    </div>
                  </div>
                </section>

                {/* Daily Metrics Dashboard Cards */}
                <section className="space-y-4">
                  <h2 className="text-xl font-extrabold flex items-center gap-2 font-heading text-[var(--text-primary)]">
                    <Dumbbell className="w-5 h-5 text-[#1E5EFF]" /> Neural Analytics & Telemetry
                  </h2>
                  <DashboardCards />
                </section>

                {/* AI Coach Grid */}
                <section className="w-full">
                  <AICoachChat />
                </section>
              </div>
            )}

            {/* Tab 2: Workouts Manager */}
            {activeTab === 'workout' && (
              <div className="space-y-8 animate-fadeIn">
                <ExerciseManager />
              </div>
            )}

            {/* Tab 3: AI Diet & Health View */}
            {activeTab === 'diet' && (
              <div className="space-y-8 animate-fadeIn">
                <DietPlannerView />
              </div>
            )}

            {/* Tab 4: Avatars & Evolution */}
            {activeTab === 'avatar' && (
              <div className="space-y-8 animate-fadeIn">
                <AvatarSelector />
              </div>
            )}

            {/* Tab 5: Audio Music Player */}
            {activeTab === 'music' && (
              <div className="space-y-8 animate-fadeIn">
                <MusicPlayerExpanded />
              </div>
            )}

            {/* Tab 6: 3D Analytics */}
            {activeTab === 'analytics' && (
              <div className="space-y-8 animate-fadeIn">
                <AnalyticsView />
              </div>
            )}

            {/* Tab 7: Gamified Rewards */}
            {activeTab === 'rewards' && (
              <div className="space-y-8 animate-fadeIn">
                <RewardSystem />
              </div>
            )}

            {/* Tab 8: System Settings */}
            {activeTab === 'settings' && (
              <div className="space-y-8 animate-fadeIn">
                <SettingsView />
              </div>
            )}

            {/* Tab 9: Hydration & Knowledge Base */}
            {activeTab === 'notifications' && (
              <div className="space-y-8 animate-fadeIn">
                <NotificationCenter />
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
}
