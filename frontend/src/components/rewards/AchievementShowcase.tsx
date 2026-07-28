'use client';

import React, { useState } from 'react';
import { useFitStore } from '@/store/useFitStore';
import {
  Trophy, Award, Flame, Coins, Shield, Sparkles, CheckCircle2,
  Lock, Search, Filter, Globe, Star, Zap, Gift, Crown, Share2,
  ChevronRight, RefreshCw, BarChart2, Check, ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type BadgeRarity = 'common' | 'rare' | 'epic' | 'legendary' | 'mythic';
export type AchievementCategory =
  | 'all'
  | 'workout'
  | 'streak'
  | 'hydration'
  | 'diet'
  | 'cardio'
  | 'strength'
  | 'knowledge'
  | 'coach'
  | 'music'
  | 'avatar';

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  category: AchievementCategory;
  rarity: BadgeRarity;
  xpReward: number;
  coinReward: number;
  icon: string;
  unlocked: boolean;
  progressPercent: number; // 0 - 100
  unlockDate?: string;
}

const LANGUAGES = [
  'English', 'Hindi', 'Gujarati', 'Marathi', 'Tamil', 'Telugu',
  'Punjabi', 'Bengali', 'Spanish', 'French', 'German', 'Arabic',
  'Japanese', 'Korean', 'Portuguese', 'Chinese'
];

const INITIAL_ACHIEVEMENTS: AchievementItem[] = [
  // 💪 WORKOUT ACHIEVEMENTS
  { id: 'wo_1', title: 'First Ascent', description: 'Complete your 1st AI workout session', category: 'workout', rarity: 'common', xpReward: 50, coinReward: 25, icon: '🏋️‍♂️', unlocked: true, progressPercent: 100, unlockDate: '2026-07-20' },
  { id: 'wo_5', title: 'Cyber Cadet', description: 'Complete 5 total workouts', category: 'workout', rarity: 'common', xpReward: 100, coinReward: 50, icon: '⚡', unlocked: true, progressPercent: 100, unlockDate: '2026-07-23' },
  { id: 'wo_10', title: 'Iron Warrior', description: 'Complete 10 total workouts', category: 'workout', rarity: 'rare', xpReward: 250, coinReward: 100, icon: '🔥', unlocked: false, progressPercent: 60 },
  { id: 'wo_25', title: 'Fitness Legion', description: 'Complete 25 total workouts', category: 'workout', rarity: 'epic', xpReward: 500, coinReward: 250, icon: '🏆', unlocked: false, progressPercent: 24 },
  { id: 'wo_50', title: 'Century Titan', description: 'Complete 50 total workouts', category: 'workout', rarity: 'legendary', xpReward: 1000, coinReward: 500, icon: '👑', unlocked: false, progressPercent: 12 },
  { id: 'wo_100', title: 'FitVerse Immortal', description: 'Complete 100 total workouts', category: 'workout', rarity: 'mythic', xpReward: 2500, coinReward: 1500, icon: '🌌', unlocked: false, progressPercent: 6 },

  // 🔥 STREAK ACHIEVEMENTS
  { id: 'st_3', title: 'Momentum Ignited', description: 'Maintain a 3-day consecutive login streak', category: 'streak', rarity: 'common', xpReward: 75, coinReward: 30, icon: '🔥', unlocked: true, progressPercent: 100, unlockDate: '2026-07-22' },
  { id: 'st_7', title: 'Weekly Cyber Discipline', description: 'Maintain a 7-day consecutive streak', category: 'streak', rarity: 'rare', xpReward: 200, coinReward: 100, icon: '📅', unlocked: false, progressPercent: 42 },
  { id: 'st_15', title: 'Unstoppable Force', description: 'Maintain a 15-day streak', category: 'streak', rarity: 'rare', xpReward: 400, coinReward: 200, icon: '⚡', unlocked: false, progressPercent: 20 },
  { id: 'st_30', title: 'Monthly Legend', description: 'Maintain a 30-day streak', category: 'streak', rarity: 'epic', xpReward: 800, coinReward: 400, icon: '🌟', unlocked: false, progressPercent: 10 },
  { id: 'st_100', title: 'Master of Consistency', description: 'Maintain a 100-day streak', category: 'streak', rarity: 'legendary', xpReward: 2000, coinReward: 1000, icon: '🎖️', unlocked: false, progressPercent: 3 },

  // 💧 HYDRATION ACHIEVEMENTS
  { id: 'hy_1', title: 'First Hydro Splash', description: 'Reach 3,000ml daily water goal once', category: 'hydration', rarity: 'common', xpReward: 50, coinReward: 25, icon: '💧', unlocked: true, progressPercent: 100, unlockDate: '2026-07-21' },
  { id: 'hy_7', title: 'Hydration Guardian', description: 'Hit daily water target for 7 straight days', category: 'hydration', rarity: 'rare', xpReward: 150, coinReward: 75, icon: '🌊', unlocked: false, progressPercent: 71 },
  { id: 'hy_100', title: 'Aqua Overlord', description: 'Drink 100 Litres total tracked water', category: 'hydration', rarity: 'epic', xpReward: 600, coinReward: 300, icon: '🧊', unlocked: false, progressPercent: 35 },

  // 🍽 DIET ACHIEVEMENTS
  { id: 'dt_1', title: 'Metabolic Catalyst', description: 'Log your 1st meal in AI Meal Analyzer', category: 'diet', rarity: 'common', xpReward: 50, coinReward: 25, icon: '🥗', unlocked: true, progressPercent: 100, unlockDate: '2026-07-27' },
  { id: 'dt_7', title: 'Clean Eating Master', description: 'Log healthy meals for 7 consecutive days', category: 'diet', rarity: 'rare', xpReward: 200, coinReward: 100, icon: '🥑', unlocked: false, progressPercent: 57 },
  { id: 'dt_prot', title: 'Protein Machine', description: 'Hit your daily protein target 5 times', category: 'diet', rarity: 'epic', xpReward: 350, coinReward: 175, icon: '🥩', unlocked: false, progressPercent: 40 },

  // 🏋 STRENGTH ACHIEVEMENTS
  { id: 'str_1', title: 'Barbell Novice', description: 'Complete your first heavy strength protocol', category: 'strength', rarity: 'common', xpReward: 60, coinReward: 30, icon: '🏋️', unlocked: true, progressPercent: 100, unlockDate: '2026-07-24' },
  { id: 'str_10k', title: '10 Tonne Club', description: 'Lift 10,000 kg cumulative weight volume', category: 'strength', rarity: 'epic', xpReward: 750, coinReward: 350, icon: '💪', unlocked: false, progressPercent: 48 },

  // 🏃 CARDIO ACHIEVEMENTS
  { id: 'cd_500', title: 'Calorie Burner', description: 'Burn 500 total workout calories', category: 'cardio', rarity: 'common', xpReward: 75, coinReward: 35, icon: '🏃‍♂️', unlocked: true, progressPercent: 100, unlockDate: '2026-07-25' },
  { id: 'cd_5k', title: 'Inferno Engine', description: 'Burn 5,000 total workout calories', category: 'cardio', rarity: 'epic', xpReward: 800, coinReward: 400, icon: '🔥', unlocked: false, progressPercent: 32 },

  // 🧠 KNOWLEDGE ACHIEVEMENTS
  { id: 'kn_1', title: 'Fitness Scholar', description: 'Read your first AI Knowledge article', category: 'knowledge', rarity: 'common', xpReward: 40, coinReward: 20, icon: '📖', unlocked: true, progressPercent: 100, unlockDate: '2026-07-26' },
  { id: 'kn_10', title: 'Bio-Hacking Master', description: 'Read 10 total fitness & diet articles', category: 'knowledge', rarity: 'rare', xpReward: 250, coinReward: 125, icon: '🧠', unlocked: false, progressPercent: 30 },

  // 🤖 AI COACH ACHIEVEMENTS
  { id: 'ai_1', title: 'Neural Connection', description: 'Ask J.A.R.V.I.S AI Coach your 1st query', category: 'coach', rarity: 'common', xpReward: 50, coinReward: 25, icon: '🤖', unlocked: true, progressPercent: 100, unlockDate: '2026-07-26' },
  { id: 'ai_50', title: 'AI Co-Pilot', description: 'Interact with AI Coach 50 times', category: 'coach', rarity: 'epic', xpReward: 500, coinReward: 250, icon: '⚡', unlocked: false, progressPercent: 22 },

  // 🎵 MUSIC ACHIEVEMENTS
  { id: 'ms_1', title: 'Cyber Beats', description: 'Listen to workout audio streams during workouts', category: 'music', rarity: 'common', xpReward: 40, coinReward: 20, icon: '🎧', unlocked: true, progressPercent: 100, unlockDate: '2026-07-27' },

  // 👤 AVATAR ACHIEVEMENTS
  { id: 'av_1', title: 'Avatar Genesis', description: 'Select and customize your initial cyber avatar', category: 'avatar', rarity: 'common', xpReward: 100, coinReward: 50, icon: '👤', unlocked: true, progressPercent: 100, unlockDate: '2026-07-20' },
  { id: 'av_ev2', title: 'Ascension Phase 2', description: 'Evolve avatar to Level 5 Stage', category: 'avatar', rarity: 'legendary', xpReward: 1200, coinReward: 600, icon: '✨', unlocked: false, progressPercent: 20 },
];

export const AchievementShowcase: React.FC = () => {
  const { user, avatar, addXp } = useFitStore();

  // State
  const [selectedLanguage, setSelectedLanguage] = useState<string>('English');
  const [activeCategory, setActiveCategory] = useState<AchievementCategory>('all');
  const [selectedRarity, setSelectedRarity] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [achievements, setAchievements] = useState<AchievementItem[]>(INITIAL_ACHIEVEMENTS);
  const [activeView, setActiveView] = useState<'grid' | 'trophy_room'>('grid');

  // Claim Celebration Modal State
  const [claimedModalItem, setClaimedModalItem] = useState<AchievementItem | null>(null);
  const [dailyClaimed, setDailyClaimed] = useState<boolean>(false);

  // Claim Daily Bonus (+50 XP & +25 Coins)
  const handleClaimDailyReward = () => {
    addXp(50);
    setDailyClaimed(true);
    setTimeout(() => setDailyClaimed(false), 4500);
  };

  // Claim Achievement Reward
  const handleClaimAchievement = (ach: AchievementItem) => {
    if (!ach.unlocked) return;
    addXp(ach.xpReward);
    setClaimedModalItem(ach);
  };

  // Stats calculation
  const totalCount = achievements.length;
  const unlockedCount = achievements.filter((a) => a.unlocked).length;
  const completionPercentage = Math.round((unlockedCount / totalCount) * 100);

  // Filtered achievements
  const filteredAchievements = achievements.filter((ach) => {
    const matchesCat = activeCategory === 'all' || ach.category === activeCategory;
    const matchesRarity = selectedRarity === 'all' || ach.rarity === selectedRarity;
    const matchesSearch =
      ach.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      ach.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesRarity && matchesSearch;
  });

  // Color helper for Rarity Badges
  const getRarityBadgeStyle = (rarity: BadgeRarity) => {
    switch (rarity) {
      case 'common':
        return 'bg-emerald-500/20 text-emerald-400 border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)]';
      case 'rare':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/40 shadow-[0_0_10px_rgba(6,182,212,0.3)]';
      case 'epic':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/40 shadow-[0_0_10px_rgba(168,85,247,0.3)]';
      case 'legendary':
        return 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-[0_0_15px_rgba(245,158,11,0.4)]';
      case 'mythic':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/50 shadow-[0_0_20px_rgba(244,63,94,0.6)] animate-pulse';
    }
  };

  const getRarityCardBorder = (rarity: BadgeRarity, unlocked: boolean) => {
    if (!unlocked) return 'border-[var(--border-color)] royal-card';
    switch (rarity) {
      case 'common': return 'border-emerald-500/40 royal-card shadow-[0_0_15px_rgba(16,185,129,0.15)]';
      case 'rare': return 'border-cyan-500/40 royal-card shadow-[0_0_15px_rgba(6,182,212,0.15)]';
      case 'epic': return 'border-purple-500/40 royal-card shadow-[0_0_15px_rgba(168,85,247,0.15)]';
      case 'legendary': return 'border-amber-500/50 royal-card shadow-[0_0_20px_rgba(245,158,11,0.25)]';
      case 'mythic': return 'border-rose-500/60 royal-card shadow-[0_0_25px_rgba(244,63,94,0.3)]';
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      
      {/* HERO BANNER & STATS OVERVIEW */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900/90 p-6 md:p-8 border border-amber-500/40 shadow-2xl royal-card">
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl -z-0 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-500 text-xs font-extrabold uppercase tracking-wider border border-amber-500/40">
              <Crown className="w-3.5 h-3.5 text-amber-500" /> Gamified Trophy Hall & Milestone Rewards
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-[var(--text-primary)] font-heading">
              Achievement Showcase
            </h2>
            <p className="text-sm text-[var(--text-secondary)] max-w-2xl font-semibold">
              Unlock badges, gain XP, earn FitVerse Coins, and build your ultimate personal trophy room as you accomplish fitness milestones and daily consistency.
            </p>
          </div>

          {/* Action Bar: Daily Claim Button */}
          <div className="flex items-center gap-3 self-start md:self-auto flex-wrap">
            <button
              onClick={handleClaimDailyReward}
              className={`px-4 py-2.5 rounded-2xl text-xs font-black flex items-center gap-2 transition-all cursor-pointer ${
                dailyClaimed
                  ? 'bg-emerald-500 text-white shadow-[0_0_20px_rgba(52,211,153,0.6)]'
                  : 'bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-slate-950 shadow-lg hover:scale-105'
              }`}
            >
              {dailyClaimed ? <CheckCircle2 className="w-4 h-4" /> : <Gift className="w-4 h-4" />}
              <span>{dailyClaimed ? 'Claimed +50 XP & +25 Coins!' : 'Claim Daily Reward (+50 XP)'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* STATS OVERVIEW CARDS BAR */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        
        {/* Total XP & Level */}
        <div className="p-4 rounded-3xl royal-card border border-amber-500/30 bg-slate-900/90 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-500 flex-shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-extrabold block">Current Rank</span>
            <h4 className="text-xl font-black text-[var(--text-primary)] font-heading">Level {Math.floor(user.xp / 100) + 1}</h4>
            <span className="text-[10px] font-bold text-amber-500">{user.xp} Total XP</span>
          </div>
        </div>

        {/* FitVerse Coins */}
        <div className="p-4 rounded-3xl royal-card border border-yellow-500/30 bg-slate-900/90 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-yellow-500/20 border border-yellow-500/40 flex items-center justify-center text-yellow-500 flex-shrink-0">
            <Coins className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-extrabold block">FitVerse Coins</span>
            <h4 className="text-xl font-black text-[var(--text-primary)] font-heading">{user.coins} 🪙</h4>
            <span className="text-[10px] font-bold text-yellow-500">Shop Ready</span>
          </div>
        </div>

        {/* Streak Days */}
        <div className="p-4 rounded-3xl royal-card border border-orange-500/30 bg-slate-900/90 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-orange-500/20 border border-orange-500/40 flex items-center justify-center text-orange-500 flex-shrink-0">
            <Flame className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-extrabold block">Active Streak</span>
            <h4 className="text-xl font-black text-[var(--text-primary)] font-heading">{user.streakDays} Days</h4>
            <span className="text-[10px] font-bold text-orange-500">Consistency Bonus</span>
          </div>
        </div>

        {/* Completion Progress % */}
        <div className="p-4 rounded-3xl royal-card border border-purple-500/30 bg-slate-900/90 flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400 flex-shrink-0">
            <Trophy className="w-6 h-6" />
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[var(--text-muted)] font-extrabold block">Trophy Hall</span>
            <h4 className="text-xl font-black text-[var(--text-primary)] font-heading">{completionPercentage}%</h4>
            <span className="text-[10px] font-bold text-purple-400">{unlockedCount}/{totalCount} Unlocked</span>
          </div>
        </div>
      </div>

      {/* VIEW SWITCHER & SEARCH / FILTER BAR */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-2 border-b border-slate-800">
        
        {/* View Switcher Tabs (All Badges Grid vs Interactive 3D Trophy Room) */}
        <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => setActiveView('grid')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
              activeView === 'grid'
                ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4" /> All Badges & Quests
          </button>

          <button
            onClick={() => setActiveView('trophy_room')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
              activeView === 'trophy_room'
                ? 'bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Trophy className="w-4 h-4" /> 3D Trophy Room
          </button>
        </div>

        {/* Search & Rarity Filter */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 sm:flex-none">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search achievements..."
              className="bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 w-full sm:w-48"
            />
          </div>

          <select
            value={selectedRarity}
            onChange={(e) => setSelectedRarity(e.target.value)}
            className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs font-bold text-slate-200 focus:outline-none cursor-pointer"
          >
            <option value="all">All Rarities</option>
            <option value="common">Common 🟢</option>
            <option value="rare">Rare 🔵</option>
            <option value="epic">Epic 🟣</option>
            <option value="legendary">Legendary 🟠</option>
            <option value="mythic">Mythic 🔴</option>
          </select>
        </div>
      </div>

      {/* CATEGORY FILTER PILLS BAR */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {[
          { id: 'all', label: 'All Badges', icon: '🌟' },
          { id: 'workout', label: 'Workouts', icon: '🏋️‍♂️' },
          { id: 'streak', label: 'Streaks', icon: '🔥' },
          { id: 'hydration', label: 'Hydration', icon: '💧' },
          { id: 'diet', label: 'Diet & Nutrition', icon: '🥗' },
          { id: 'strength', label: 'Strength', icon: '💪' },
          { id: 'cardio', label: 'Cardio', icon: '🏃‍♂️' },
          { id: 'knowledge', label: 'Knowledge', icon: '📖' },
          { id: 'coach', label: 'AI Coach', icon: '🤖' },
          { id: 'avatar', label: 'Avatars', icon: '👤' },
        ].map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id as AchievementCategory)}
            className={`px-3.5 py-1.5 rounded-full text-xs font-extrabold whitespace-nowrap flex items-center gap-1.5 transition-all cursor-pointer ${
              activeCategory === cat.id
                ? 'bg-amber-400 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)]'
                : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
            }`}
          >
            <span>{cat.icon}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </div>

      {/* CONDITIONAL DISPLAY: GRID OR TROPHY ROOM */}
      {activeView === 'grid' ? (
        
        /* GRID VIEW OF BADGES */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredAchievements.map((ach) => {
            const cardBorder = getRarityCardBorder(ach.rarity, ach.unlocked);
            const badgeStyle = getRarityBadgeStyle(ach.rarity);

            return (
              <div
                key={ach.id}
                className={`p-5 rounded-3xl border transition-all duration-300 flex flex-col justify-between space-y-4 relative overflow-hidden ${cardBorder}`}
              >
                {/* Top Badge Info Header */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl font-bold flex-shrink-0 ${
                        ach.unlocked ? 'bg-slate-800/80 border border-slate-700 shadow-md' : 'royal-card border border-[var(--border-color)]'
                      }`}
                    >
                      {ach.unlocked ? ach.icon : <Lock className="w-5 h-5 text-[var(--text-muted)]" />}
                    </div>

                    <div>
                      <h4 className="text-sm font-black text-[var(--text-primary)] font-heading">{ach.title}</h4>
                      <span className={`text-[9px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full border inline-block mt-0.5 ${badgeStyle}`}>
                        {ach.rarity}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs font-black text-amber-500 block">+{ach.xpReward} XP</span>
                    <span className="text-[10px] text-yellow-500 font-bold block">+{ach.coinReward} 🪙</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-semibold">
                  {ach.description}
                </p>

                {/* Progress Bar & Status Footer */}
                <div className="space-y-2 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center justify-between text-[11px] font-bold">
                    <span className="text-slate-400">
                      {ach.unlocked ? `Unlocked on ${ach.unlockDate || 'Recently'}` : `Progress: ${ach.progressPercent}%`}
                    </span>
                    <span className={ach.unlocked ? 'text-emerald-400 font-extrabold' : 'text-slate-500'}>
                      {ach.unlocked ? 'Completed ✓' : `${ach.progressPercent}/100%`}
                    </span>
                  </div>

                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        ach.unlocked ? 'bg-gradient-to-r from-emerald-400 to-teal-400' : 'bg-amber-500/60'
                      }`}
                      style={{ width: `${ach.progressPercent}%` }}
                    />
                  </div>

                  {ach.unlocked && (
                    <button
                      onClick={() => handleClaimAchievement(ach)}
                      className="w-full mt-2 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 text-xs font-extrabold flex items-center justify-center gap-1.5 hover:scale-[1.02] transition-all cursor-pointer shadow-md"
                    >
                      <Sparkles className="w-3.5 h-3.5" /> View Reward Showcase
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      ) : (

        /* 3D TROPHY ROOM SHOWCASE VIEW */
        <div className="space-y-6">
          <div className="glass-card p-6 md:p-8 rounded-3xl border border-amber-500/30 bg-gradient-to-b from-slate-900 via-amber-950/20 to-slate-950 relative overflow-hidden space-y-6">
            <div className="text-center max-w-xl mx-auto space-y-2">
              <span className="text-xs font-black uppercase tracking-widest text-amber-400 flex items-center justify-center gap-2">
                <Crown className="w-4 h-4 text-amber-400" /> FitVerse Cyber Trophy Gallery
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white font-heading">
                Personal Cyber Trophy Room
              </h3>
              <p className="text-xs text-slate-300">
                Your earned badges and trophies are showcased on 3D pedestals. Complete more milestones to expand your trophy collection!
              </p>
            </div>

            {/* 3D TROPHY PEDESTAL STANDS GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 pt-4">
              {achievements.slice(0, 8).map((ach, idx) => (
                <div
                  key={ach.id}
                  className="flex flex-col items-center justify-center p-4 rounded-3xl bg-slate-900/90 border border-slate-800 group hover:border-amber-500/50 transition-all cursor-pointer relative"
                >
                  {/* Glowing 3D Pedestal Stand */}
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-b from-slate-800 via-slate-900 to-amber-950/50 border border-slate-700 flex items-center justify-center text-4xl shadow-xl group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all">
                    {ach.unlocked ? ach.icon : '🔒'}
                  </div>

                  {/* Stand Base Platform */}
                  <div className="w-24 h-3 bg-gradient-to-r from-amber-500/40 via-yellow-400/80 to-amber-500/40 rounded-full mt-2 shadow-[0_0_15px_rgba(245,158,11,0.5)]" />

                  <h5 className="text-xs font-bold text-white text-center mt-3 truncate w-full">{ach.title}</h5>
                  <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full mt-1 border ${getRarityBadgeStyle(ach.rarity)}`}>
                    {ach.rarity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      )}

      {/* UNLOCKED CELEBRATION POP-UP MODAL */}
      <AnimatePresence>
        {claimedModalItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="glass-card p-6 md:p-8 rounded-3xl max-w-md w-full border border-amber-500/50 text-center space-y-6 shadow-[0_0_50px_rgba(245,158,11,0.4)] relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl pointer-events-none" />

              <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-amber-400 to-yellow-500 text-5xl flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.6)] animate-bounce">
                {claimedModalItem.icon}
              </div>

              <div className="space-y-1">
                <span className="text-xs font-black uppercase tracking-widest text-amber-400 flex items-center justify-center gap-1">
                  <Sparkles className="w-4 h-4" /> Achievement Unlocked!
                </span>
                <h3 className="text-2xl font-black text-white font-heading">{claimedModalItem.title}</h3>
                <p className="text-xs text-slate-300">{claimedModalItem.description}</p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-around">
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">XP Gained</span>
                  <span className="text-lg font-black text-amber-400">+{claimedModalItem.xpReward} XP</span>
                </div>
                <div className="w-px h-8 bg-slate-800" />
                <div>
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Coins Earned</span>
                  <span className="text-lg font-black text-yellow-400">+{claimedModalItem.coinReward} 🪙</span>
                </div>
              </div>

              <button
                onClick={() => setClaimedModalItem(null)}
                className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-400 to-yellow-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer"
              >
                Claim Rewards & Continue
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
