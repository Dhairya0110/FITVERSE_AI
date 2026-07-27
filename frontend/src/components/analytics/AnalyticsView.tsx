'use client';

import React, { useState } from 'react';
import { useFitStore } from '@/store/useFitStore';
import { TrendingUp, Activity, Trophy, Calendar, Zap, Award, Flame, Target } from 'lucide-react';
import { motion } from 'framer-motion';

export const AnalyticsView: React.FC = () => {
  const { user } = useFitStore();
  const [timeframe, setTimeframe] = useState<'7d' | '30d' | '90d' | '1y'>('30d');

  // Simulated weight & XP timeline data
  const weightData = [
    { date: 'Mon', weight: 80.2, xp: 450, calories: 2100 },
    { date: 'Tue', weight: 79.8, xp: 580, calories: 2450 },
    { date: 'Wed', weight: 79.5, xp: 690, calories: 2300 },
    { date: 'Thu', weight: 79.1, xp: 750, calories: 2550 },
    { date: 'Fri', weight: 78.8, xp: 840, calories: 2400 },
    { date: 'Sat', weight: 78.4, xp: 920, calories: 2600 },
    { date: 'Sun', weight: 78.0, xp: 995, calories: 2500 },
  ];

  const maxWeight = 82;
  const minWeight = 74;

  const milestones = [
    { title: 'First Hologram Workout', date: '3 days ago', xp: '+100 XP', icon: '⚡' },
    { title: '7-Day Streak Master', date: 'Yesterday', xp: '+250 XP', icon: '🔥' },
    { title: 'Hydration Goal Reached', date: 'Today', xp: '+50 XP', icon: '💧' },
    { title: 'Avatar Phase 3 Unlocked', date: 'Today', xp: '+500 XP', icon: '🏆' },
  ];

  return (
    <div className="glass-card p-6 space-y-8 animate-fadeIn">
      {/* Header & Timeframe Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-2xl font-black flex items-center gap-2 font-heading">
            <Activity className="w-6 h-6 text-cyan-400" /> Quantum Analytics & Telemetry Center
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Real-time metric telemetry tracking weight velocity, body fat %, XP trajectory, and milestone logs.
          </p>
        </div>

        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-slate-950 border border-slate-800">
          {(['7d', '30d', '90d', '1y'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTimeframe(t)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase transition-all cursor-pointer ${
                timeframe === t
                  ? 'bg-gradient-to-r from-cyan-400 to-purple-600 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Hero Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl glass-card-sm border border-cyan-500/30 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
            <span>Weight Progress</span>
            <TrendingUp className="w-4 h-4 text-cyan-400" />
          </div>
          <h4 className="text-3xl font-black text-white font-heading">{user.weightKg} kg</h4>
          <p className="text-[11px] text-cyan-300 flex items-center gap-1 font-semibold">
            <Target className="w-3.5 h-3.5" /> Target: {user.targetWeightKg} kg (-{ (user.weightKg - user.targetWeightKg).toFixed(1) } kg left)
          </p>
        </div>

        <div className="p-5 rounded-3xl glass-card-sm border border-purple-500/30 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
            <span>Body Fat Index</span>
            <Zap className="w-4 h-4 text-purple-400" />
          </div>
          <h4 className="text-3xl font-black text-purple-400 font-heading">{user.bodyFatPercentage}%</h4>
          <p className="text-[11px] text-purple-300 font-semibold">Athletic Condition Category</p>
        </div>

        <div className="p-5 rounded-3xl glass-card-sm border border-amber-500/30 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
            <span>Level Progression</span>
            <Award className="w-4 h-4 text-amber-400" />
          </div>
          <h4 className="text-3xl font-black text-amber-400 font-heading">Lvl {Math.floor(user.xp / 100) + 1}</h4>
          <p className="text-[11px] text-amber-300 font-semibold">{user.xp} Total XP Accumulated</p>
        </div>

        <div className="p-5 rounded-3xl glass-card-sm border border-emerald-500/30 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-400 font-semibold">
            <span>Active Streak</span>
            <Flame className="w-4 h-4 text-emerald-400" />
          </div>
          <h4 className="text-3xl font-black text-emerald-400 font-heading">{user.streakDays} Days</h4>
          <p className="text-[11px] text-emerald-300 font-semibold">Consistency Score: 98%</p>
        </div>
      </div>

      {/* Animated 3D Visual Graph Timeline Stage */}
      <div className="p-6 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-lg font-extrabold text-white font-heading">Weight & XP Progression Velocity</h4>
            <p className="text-xs text-slate-400">Weekly trajectory based on logged workouts & metabolic output.</p>
          </div>
          <div className="flex items-center gap-4 text-xs font-bold">
            <span className="flex items-center gap-1.5 text-cyan-400"><div className="w-3 h-3 rounded-full bg-cyan-400" /> Weight (kg)</span>
            <span className="flex items-center gap-1.5 text-purple-400"><div className="w-3 h-3 rounded-full bg-purple-400" /> XP Growth</span>
          </div>
        </div>

        {/* Custom SVG / Bar Graph */}
        <div className="h-64 w-full flex items-end justify-between gap-4 pt-6 pb-2 px-4 border-b border-slate-800 relative">
          {/* Background Horizontal Guide Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20 py-6">
            <div className="w-full border-b border-slate-700" />
            <div className="w-full border-b border-slate-700" />
            <div className="w-full border-b border-slate-700" />
          </div>

          {weightData.map((d, idx) => {
            const weightHeightPercent = Math.max(20, ((d.weight - minWeight) / (maxWeight - minWeight)) * 100);
            const xpHeightPercent = Math.max(15, (d.xp / 1000) * 100);

            return (
              <div key={idx} className="flex-1 flex flex-col items-center gap-3 z-10 group cursor-pointer">
                <div className="w-full flex items-end justify-center gap-1.5 h-48">
                  {/* Weight Bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${weightHeightPercent}%` }}
                    transition={{ duration: 0.6, delay: idx * 0.08 }}
                    className="w-full max-w-[20px] rounded-t-xl bg-gradient-to-t from-cyan-600 to-cyan-400 shadow-[0_0_15px_rgba(0,229,255,0.4)] group-hover:scale-105 transition-all relative"
                  >
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 border border-cyan-400 text-cyan-300 text-[10px] font-black rounded-lg whitespace-nowrap z-20 pointer-events-none shadow-lg">
                      {d.weight} kg
                    </div>
                  </motion.div>

                  {/* XP Bar */}
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${xpHeightPercent}%` }}
                    transition={{ duration: 0.6, delay: idx * 0.08 + 0.04 }}
                    className="w-full max-w-[20px] rounded-t-xl bg-gradient-to-t from-purple-600 to-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.4)] group-hover:scale-105 transition-all relative"
                  >
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-slate-900 border border-purple-400 text-purple-300 text-[10px] font-black rounded-lg whitespace-nowrap z-20 pointer-events-none shadow-lg">
                      {d.xp} XP
                    </div>
                  </motion.div>
                </div>
                <span className="text-xs font-bold text-slate-400 group-hover:text-white transition-colors">{d.date}</span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievement & Milestone Timeline */}
      <div className="space-y-4">
        <h4 className="text-lg font-extrabold text-white flex items-center gap-2 font-heading">
          <Trophy className="w-5 h-5 text-amber-400" /> Milestone & Achievement Timeline
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl glass-card-sm border border-slate-800 flex items-start gap-3 hover:border-slate-700 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-xl shrink-0 shadow">
                {m.icon}
              </div>
              <div>
                <h5 className="text-xs font-extrabold text-white">{m.title}</h5>
                <span className="text-[10px] text-slate-400 block mt-0.5">{m.date}</span>
                <span className="text-[10px] font-bold text-amber-400 mt-1 block">{m.xp}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
