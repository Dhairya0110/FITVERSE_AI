'use client';

import React from 'react';
import { useFitStore } from '@/store/useFitStore';
import { Flame, Droplet, Footprints, Dumbbell, Award, Coins, Plus, TrendingUp, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const DashboardCards: React.FC = () => {
  const { user, diet, logWater, addSteps, addCaloriesBurned, addXp, currentWorkout } = useFitStore();

  const cards = [
    {
      title: 'Calories Burned',
      value: `${currentWorkout?.caloriesBurned || 420} kcal`,
      subtext: 'Target: 500 kcal',
      icon: Flame,
      color: 'from-[#1E5EFF] to-[#38BDF8]',
      textColor: 'text-[#38BDF8]',
      action: () => addCaloriesBurned(50),
      actionText: '+50 kcal Burn',
    },
    {
      title: 'Water Hydration',
      value: `${diet.waterLoggedMl} / ${diet.waterTargetMl} ml`,
      subtext: `${Math.round((diet.waterLoggedMl / diet.waterTargetMl) * 100)}% Reached`,
      icon: Droplet,
      color: 'from-[#00B894] to-[#22C55E]',
      textColor: 'text-[#00B894]',
      action: () => logWater(250),
      actionText: '+250ml Quick Log',
    },
    {
      title: 'Daily Steps',
      value: `${(user.dailySteps || 8450).toLocaleString()}`,
      subtext: `Goal: ${(user.dailyStepsTarget || 10000).toLocaleString()} steps`,
      icon: Footprints,
      color: 'from-[#1E5EFF] to-[#00B894]',
      textColor: 'text-[#1E5EFF]',
      action: () => addSteps(500),
      actionText: '+500 Steps',
    },
    {
      title: 'Workout Protocol',
      value: currentWorkout?.title || 'Hypertrophy Upper Body Protocol',
      subtext: `${currentWorkout?.durationMinutes || 45} mins • ${currentWorkout?.exercises.length || 3} exercises`,
      icon: Dumbbell,
      color: 'from-purple-600 to-indigo-600',
      textColor: 'text-purple-400',
    },
    {
      title: 'XP Level',
      value: `Level ${Math.floor(user.xp / 100) + 1}`,
      subtext: `${user.xp} Total XP Points`,
      icon: Award,
      color: 'from-[#C9A227] to-amber-500',
      textColor: 'text-[#C9A227]',
      action: () => addXp(25),
      actionText: '+25 XP Boost',
    },
    {
      title: 'FitVerse Coins',
      value: `${user.coins} 🪙`,
      subtext: 'Unlock Avatar Gear',
      icon: Coins,
      color: 'from-[#C9A227] to-yellow-400',
      textColor: 'text-[#C9A227]',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {cards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="royal-card p-5 relative overflow-hidden flex flex-col justify-between cursor-pointer border border-[var(--card-border)] hover:border-[#1E5EFF]/40 transition-all duration-300"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-xs text-[var(--text-muted)] font-bold uppercase tracking-wider block">{card.title}</span>
                <h4 className="text-2xl font-black text-[var(--text-primary)] font-heading mt-1">{card.value}</h4>
                <p className="text-[11px] text-[var(--text-secondary)] mt-1.5 flex items-center gap-1 font-semibold">
                  <TrendingUp className="w-3.5 h-3.5 text-[#00B894]" />
                  {card.subtext}
                </p>
              </div>

              <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white font-bold shadow-md flex-shrink-0`}>
                <Icon className="w-5 h-5" />
              </div>
            </div>

            {card.action ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  card.action?.();
                }}
                className="mt-4 w-full py-2.5 rounded-xl royal-btn-secondary text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4 text-[#1E5EFF]" /> {card.actionText}
              </button>
            ) : (
              <div className="mt-4 pt-2.5 border-t border-[var(--border-color)] flex items-center justify-between text-[10px] text-[var(--text-muted)]">
                <span className="flex items-center gap-1 text-[#1E5EFF] font-bold">
                  <Sparkles className="w-3 h-3" /> Live Synced
                </span>
                <span className="font-semibold">Active Session</span>
              </div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};
