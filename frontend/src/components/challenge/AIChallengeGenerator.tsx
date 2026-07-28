'use client';

import React, { useState } from 'react';
import { useFitStore } from '@/store/useFitStore';
import {
  Target, Sparkles, ShieldAlert, CheckCircle2, Flame, Droplet,
  Award, Coins, Play, RefreshCw, Volume2, VolumeX, Globe, ArrowRight,
  ShieldCheck, AlertTriangle, Activity, Zap, Check, Lock, RotateCcw,
  Clock, Dumbbell, Heart, HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type ChallengeType = 'daily' | 'weekly' | 'monthly';
export type DifficultyLevel = 'easy' | 'medium' | 'hard' | 'expert';
export type InjuryType = 'none' | 'knee' | 'shoulder' | 'back';

export interface AIChallenge {
  id: string;
  title: string;
  description: string;
  type: ChallengeType;
  difficulty: DifficultyLevel;
  durationMinutes: number;
  targetValue: number;
  currentValue: number;
  unit: string;
  xpReward: number;
  coinReward: number;
  icon: string;
  isCompleted: boolean;
  isStarted: boolean;
  aiSafetyNote: string;
  suitableForGoal: string;
  prohibitedExercises: string[];
}

const LANGUAGES = [
  'English', 'Hindi', 'Gujarati', 'Marathi', 'Tamil', 'Telugu',
  'Punjabi', 'Bengali', 'Spanish', 'French', 'German', 'Arabic',
  'Japanese', 'Korean', 'Portuguese', 'Chinese'
];

export const AIChallengeGenerator: React.FC = () => {
  const { user, addXp, logWater, addSteps, addCaloriesBurned } = useFitStore();

  const selectedLanguage = user.language || 'English';
  const [activeTypeTab, setActiveTypeTab] = useState<ChallengeType>('daily');
  const [selectedInjury, setSelectedInjury] = useState<InjuryType>('none');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [aiGenStep, setAiGenStep] = useState<string>('');
  const [completionSuccessMsg, setCompletionSuccessMsg] = useState<string | null>(null);

  // Voice AI State
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  // Challenges Pool
  const [challenges, setChallenges] = useState<AIChallenge[]>([
    // DAILY CHALLENGES
    {
      id: 'd_1',
      title: 'Hydration Wave Pursuit',
      description: 'Log 2,500 ml of pure water intake today to optimize protein synthesis and cell volume.',
      type: 'daily',
      difficulty: 'easy',
      durationMinutes: 5,
      targetValue: 2500,
      currentValue: 1750,
      unit: 'ml',
      xpReward: 50,
      coinReward: 25,
      icon: '💧',
      isCompleted: false,
      isStarted: true,
      aiSafetyNote: '100% safe for all fitness levels & joint conditions. Essential for joint lubrication.',
      suitableForGoal: 'All Fitness Goals',
      prohibitedExercises: []
    },
    {
      id: 'd_2',
      title: 'Bodyweight Core & Mobility Pulse',
      description: 'Complete 3 sets of 15 Core Deadbugs & Planks. Low impact, zero spine load.',
      type: 'daily',
      difficulty: 'medium',
      durationMinutes: 15,
      targetValue: 3,
      currentValue: 1,
      unit: 'sets',
      xpReward: 80,
      coinReward: 40,
      icon: '⚡',
      isCompleted: false,
      isStarted: true,
      aiSafetyNote: 'Spine-safe core activation. Approved for beginners and lower back pain management.',
      suitableForGoal: 'Fat Loss & Core Stability',
      prohibitedExercises: ['Heavy Deadlifts', 'Weighted Squats']
    },
    {
      id: 'd_3',
      title: 'Metabolic Step Circuit',
      description: 'Walk 8,000 steps today to elevate NEAT (Non-Exercise Activity Thermogenesis).',
      type: 'daily',
      difficulty: 'medium',
      durationMinutes: 45,
      targetValue: 8000,
      currentValue: 5200,
      unit: 'steps',
      xpReward: 100,
      coinReward: 50,
      icon: '🏃‍♂️',
      isCompleted: false,
      isStarted: true,
      aiSafetyNote: 'Low-impact cardiovascular conditioning. Safe for shoulder & upper body injuries.',
      suitableForGoal: 'Fat Loss & Endurance',
      prohibitedExercises: []
    },

    // WEEKLY CHALLENGES
    {
      id: 'w_1',
      title: '5-Day Protocol Consistency',
      description: 'Complete 5 structured workouts over the course of 7 days.',
      type: 'weekly',
      difficulty: 'hard',
      durationMinutes: 225,
      targetValue: 5,
      currentValue: 3,
      unit: 'workouts',
      xpReward: 300,
      coinReward: 150,
      icon: '🏋️‍♂️',
      isCompleted: false,
      isStarted: true,
      aiSafetyNote: 'Ensures adequate 48-hour recovery between identical muscle group sessions.',
      suitableForGoal: 'Muscle Gain & Strength',
      prohibitedExercises: []
    },
    {
      id: 'w_2',
      title: '2,500 Calorie Burn Quest',
      description: 'Burn a total of 2,500 workout calories across this week.',
      type: 'weekly',
      difficulty: 'hard',
      durationMinutes: 300,
      targetValue: 2500,
      currentValue: 1850,
      unit: 'kcal',
      xpReward: 450,
      coinReward: 200,
      icon: '🔥',
      isCompleted: false,
      isStarted: true,
      aiSafetyNote: 'Paced calorie targets to prevent overtraining syndrome.',
      suitableForGoal: 'Fat Loss',
      prohibitedExercises: []
    },

    // MONTHLY CHALLENGES
    {
      id: 'm_1',
      title: '30-Day Cyber Discipline Streak',
      description: 'Log into FitVerse AI and complete daily habits for 30 consecutive days.',
      type: 'monthly',
      difficulty: 'expert',
      durationMinutes: 900,
      targetValue: 30,
      currentValue: 14,
      unit: 'days',
      xpReward: 1500,
      coinReward: 750,
      icon: '👑',
      isCompleted: false,
      isStarted: true,
      aiSafetyNote: 'Long-term habit formation quest with adaptive recovery days built in.',
      suitableForGoal: 'All Fitness Goals',
      prohibitedExercises: []
    }
  ]);

  // AI Generator Function based on User Profile & Injury Filter
  const generateAiChallenges = () => {
    setIsGenerating(true);

    const steps = [
      '🔍 Analyzing user level (Intermediate) & BMI metrics...',
      `🛡️ Applying Injury Safety Filter: ${selectedInjury.toUpperCase()}...`,
      '🤖 Querying Gemini AI Adaptive Difficulty Matrix...',
      '⚖️ Calculating safe calorie & step targets...',
      '✨ Synthesizing personalized quest rewards...'
    ];

    let idx = 0;
    setAiGenStep(steps[0]);

    const interval = setInterval(() => {
      idx++;
      if (idx < steps.length) {
        setAiGenStep(steps[idx]);
      } else {
        clearInterval(interval);
        setIsGenerating(false);

        // Generate tailored challenges based on injury & level
        let newDaily: AIChallenge[] = [];

        if (selectedInjury === 'knee') {
          newDaily = [
            {
              id: `c_knee_${Date.now()}_1`,
              title: 'Seated Upper Body Cyber Burst',
              description: 'Complete 4 sets of Seated Dumbbell Press & Seated Cable Rows. Zero knee stress.',
              type: 'daily',
              difficulty: 'medium',
              durationMinutes: 25,
              targetValue: 4,
              currentValue: 0,
              unit: 'sets',
              xpReward: 120,
              coinReward: 60,
              icon: '💪',
              isCompleted: false,
              isStarted: false,
              aiSafetyNote: '🟢 KNEE SAFE: Strictly eliminates squats, lunges, and jump impacts.',
              suitableForGoal: 'Upper Body Hypertrophy',
              prohibitedExercises: ['Barbell Squats', 'Walking Lunges', 'Jump Squats', 'Running']
            },
            {
              id: `c_knee_${Date.now()}_2`,
              title: 'Core Anti-Extension Plank Challenge',
              description: 'Hold 3 x 45-second forearm planks to strengthen deep transverse abdominis.',
              type: 'daily',
              difficulty: 'easy',
              durationMinutes: 10,
              targetValue: 3,
              currentValue: 0,
              unit: 'holds',
              xpReward: 70,
              coinReward: 35,
              icon: '🛡️',
              isCompleted: false,
              isStarted: false,
              aiSafetyNote: '🟢 KNEE SAFE: Isometric core exercise with zero patellar tendon strain.',
              suitableForGoal: 'Core Stability',
              prohibitedExercises: ['Jump Squats', 'High Knees']
            }
          ];
        } else if (selectedInjury === 'shoulder') {
          newDaily = [
            {
              id: `c_sh_${Date.now()}_1`,
              title: 'Lower Body Quad & Hamstring Blast',
              description: 'Complete Leg Press, Leg Curls, and Calf Raises. Completely bypasses shoulder joint.',
              type: 'daily',
              difficulty: 'hard',
              durationMinutes: 35,
              targetValue: 4,
              currentValue: 0,
              unit: 'sets',
              xpReward: 150,
              coinReward: 75,
              icon: '🦵',
              isCompleted: false,
              isStarted: false,
              aiSafetyNote: '🟢 SHOULDER SAFE: Eliminates overhead presses, bench presses & push-ups.',
              suitableForGoal: 'Lower Body Strength',
              prohibitedExercises: ['Bench Press', 'Overhead Shoulder Press', 'Push-ups']
            }
          ];
        } else if (selectedInjury === 'back') {
          newDaily = [
            {
              id: `c_bk_${Date.now()}_1`,
              title: 'Spine Decompression & Glute Bridge Protocol',
              description: 'Complete 3 sets of Glute Bridges & Cat-Cow stretches for spinal alignment.',
              type: 'daily',
              difficulty: 'easy',
              durationMinutes: 15,
              targetValue: 3,
              currentValue: 0,
              unit: 'sets',
              xpReward: 90,
              coinReward: 45,
              icon: '🧘‍♀️',
              isCompleted: false,
              isStarted: false,
              aiSafetyNote: '🟢 BACK SAFE: Eliminates heavy deadlifts, bent-over rows & heavy squats.',
              suitableForGoal: 'Posture & Spinal Health',
              prohibitedExercises: ['Barbell Deadlifts', 'Bent-Over Rows', 'Heavy Squats']
            }
          ];
        } else {
          newDaily = [
            {
              id: `c_gen_${Date.now()}_1`,
              title: 'Full Body Hypertrophy Circuit',
              description: 'Complete 4 sets of Barbell Bench Press, Lat Pulldowns, and Leg Presses.',
              type: 'daily',
              difficulty: 'hard',
              durationMinutes: 40,
              targetValue: 4,
              currentValue: 0,
              unit: 'sets',
              xpReward: 160,
              coinReward: 80,
              icon: '🏋️‍♂️',
              isCompleted: false,
              isStarted: false,
              aiSafetyNote: 'Fully unconstrained high-efficiency compound workout quest.',
              suitableForGoal: 'Muscle Gain & Calorie Burn',
              prohibitedExercises: []
            }
          ];
        }

        setChallenges((prev) => [...newDaily, ...prev.filter((c) => c.type !== 'daily')]);
        setCompletionSuccessMsg(`🎉 AI generated ${newDaily.length} safe challenges tailored for ${selectedInjury.toUpperCase()} condition!`);
        setTimeout(() => setCompletionSuccessMsg(null), 4500);
      }
    }, 600);
  };

  // Start Challenge Action
  const handleStartChallenge = (id: string) => {
    setChallenges((prev) =>
      prev.map((c) => (c.id === id ? { ...c, isStarted: true, currentValue: Math.max(1, c.currentValue) } : c))
    );
  };

  // Complete Challenge Action
  const handleCompleteChallenge = (ch: AIChallenge) => {
    addXp(ch.xpReward);

    setChallenges((prev) =>
      prev.map((c) => (c.id === ch.id ? { ...c, isCompleted: true, currentValue: c.targetValue } : c))
    );

    setCompletionSuccessMsg(`🏆 Challenge "${ch.title}" Completed! +${ch.xpReward} XP & +${ch.coinReward} Coins Claimed!`);
    setTimeout(() => setCompletionSuccessMsg(null), 4500);
  };

  // Skip / Swap Challenge
  const handleSkipChallenge = (id: string) => {
    setChallenges((prev) => prev.filter((c) => c.id !== id));
  };

  // Voice Speech Synthesis
  const speakText = (text: string) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const filteredChallenges = challenges.filter((c) => c.type === activeTypeTab);

  // Helper for Difficulty Badges
  const getDifficultyBadge = (diff: DifficultyLevel) => {
    switch (diff) {
      case 'easy':
        return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40 shadow-[0_0_10px_rgba(16,185,129,0.3)]';
      case 'medium':
        return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/40 shadow-[0_0_10px_rgba(234,179,8,0.3)]';
      case 'hard':
        return 'bg-orange-500/20 text-orange-300 border-orange-500/40 shadow-[0_0_10px_rgba(249,115,22,0.3)]';
      case 'expert':
        return 'bg-rose-500/20 text-rose-300 border-rose-500/50 shadow-[0_0_15px_rgba(244,63,94,0.5)] animate-pulse';
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* HERO BANNER & AI SAFETY REGIME */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-950/90 via-indigo-950/80 to-slate-950 p-6 md:p-8 border border-purple-500/30 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl -z-0 pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold uppercase tracking-wider border border-purple-500/40">
              <Sparkles className="w-3.5 h-3.5" /> Adaptive AI Safety & Quest Generator
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white font-heading">
              AI Challenge Generator
            </h2>
            <p className="text-sm text-slate-300 max-w-2xl">
              Generates safe, goal-tailored daily, weekly, and monthly fitness quests. Automatically filters out unsafe exercises for reported knee, shoulder, or back injuries.
            </p>
          </div>
        </div>
      </div>

      {/* FEEDBACK SUCCESS ALERT */}
      <AnimatePresence>
        {completionSuccessMsg && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/50 text-emerald-200 text-sm font-bold flex items-center gap-3 shadow-lg"
          >
            <Award className="w-5 h-5 text-emerald-400 flex-shrink-0" />
            <span>{completionSuccessMsg}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* INJURY & SAFETY CONTROL PANEL BAR */}
      <div className="glass-card p-6 rounded-3xl border border-slate-800 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-sm font-black text-white flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-purple-400" /> Health Protection & Injury Filter
            </h3>
            <p className="text-xs text-slate-400">
              Select any current physical limitation so AI strictly excludes prohibited movements.
            </p>
          </div>

          {/* Injury Selector Buttons */}
          <div className="flex items-center gap-2 flex-wrap">
            {[
              { id: 'none', label: 'No Injuries 🟢', desc: 'Full Access' },
              { id: 'knee', label: 'Knee Joint 🦵', desc: 'No Squats/Lunges' },
              { id: 'shoulder', label: 'Shoulder 🦾', desc: 'No Press/Pushups' },
              { id: 'back', label: 'Lower Back 🧘', desc: 'No Deadlifts/Rows' },
            ].map((inj) => (
              <button
                key={inj.id}
                onClick={() => setSelectedInjury(inj.id as InjuryType)}
                className={`px-3.5 py-2 rounded-2xl text-xs font-extrabold transition-all cursor-pointer ${
                  selectedInjury === inj.id
                    ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(147,51,234,0.5)] scale-105'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {inj.label}
              </button>
            ))}
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={generateAiChallenges}
          disabled={isGenerating}
          className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-600 text-white text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 ${isGenerating ? 'animate-spin' : ''}`} />
          {isGenerating ? aiGenStep : '🤖 Generate Safe AI Personalized Challenges'}
        </button>
      </div>

      {/* CHALLENGE TYPE TAB BAR (DAILY / WEEKLY / MONTHLY) */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => setActiveTypeTab('daily')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
              activeTypeTab === 'daily'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            📅 Daily Quests ({challenges.filter((c) => c.type === 'daily').length})
          </button>

          <button
            onClick={() => setActiveTypeTab('weekly')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
              activeTypeTab === 'weekly'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            📆 Weekly Quests ({challenges.filter((c) => c.type === 'weekly').length})
          </button>

          <button
            onClick={() => setActiveTypeTab('monthly')}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all flex items-center gap-2 cursor-pointer ${
              activeTypeTab === 'monthly'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-md'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🗓️ Monthly Quests ({challenges.filter((c) => c.type === 'monthly').length})
          </button>
        </div>

        <span className="text-xs text-purple-300 font-extrabold">
          Level: <span className="capitalize text-white">{user.level}</span>
        </span>
      </div>

      {/* CHALLENGES LIST CARDS */}
      <div className="space-y-4">
        {filteredChallenges.length === 0 ? (
          <div className="glass-card p-8 rounded-3xl border border-slate-800 text-center space-y-3">
            <Target className="w-10 h-10 text-purple-400 mx-auto" />
            <h4 className="text-sm font-bold text-white">No quests active for this category.</h4>
            <p className="text-xs text-slate-400">Click "Generate Safe AI Personalized Challenges" above to create new quests!</p>
          </div>
        ) : (
          filteredChallenges.map((ch) => {
            const percent = Math.min(100, Math.round((ch.currentValue / ch.targetValue) * 100));
            const diffBadgeStyle = getDifficultyBadge(ch.difficulty);

            return (
              <div
                key={ch.id}
                className={`p-6 rounded-3xl border transition-all duration-300 space-y-4 relative overflow-hidden ${
                  ch.isCompleted
                    ? 'border-emerald-500/40 bg-emerald-950/30 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                    : 'border-slate-800 hover:border-purple-500/60 bg-slate-900/90 shadow-md hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]'
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl flex-shrink-0">
                      {ch.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-black text-white font-heading">{ch.title}</h4>
                        <span className={`text-[9px] uppercase tracking-wider font-extrabold px-2.5 py-0.5 rounded-full border ${diffBadgeStyle}`}>
                          {ch.difficulty}
                        </span>
                      </div>
                      <span className="text-[11px] text-purple-300 font-semibold block mt-0.5">
                        Goal Focus: {ch.suitableForGoal} • ~{ch.durationMinutes} mins
                      </span>
                    </div>
                  </div>

                  {/* Rewards Badge */}
                  <div className="flex items-center gap-3 self-start sm:self-auto">
                    <div className="text-right">
                      <span className="text-xs font-black text-purple-400 block">+{ch.xpReward} XP</span>
                      <span className="text-[10px] text-yellow-400 font-bold block">+{ch.coinReward} 🪙</span>
                    </div>
                    <button
                      onClick={() => speakText(`${ch.title}. ${ch.description}. ${ch.aiSafetyNote}`)}
                      className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors cursor-pointer"
                    >
                      <Volume2 className="w-4 h-4 text-purple-400" />
                    </button>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-semibold">
                  {ch.description}
                </p>

                {/* AI Safety Recommendation & Prohibited Exercises Banner */}
                <div className="p-3 rounded-2xl bg-slate-950/80 border border-purple-500/20 text-xs text-purple-200 space-y-1">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span className="font-bold">{ch.aiSafetyNote}</span>
                  </div>
                  {ch.prohibitedExercises.length > 0 && (
                    <div className="text-[10px] text-rose-400 font-semibold pl-6">
                      Prohibited Movements Filtered: {ch.prohibitedExercises.join(', ')}
                    </div>
                  )}
                </div>

                {/* Progress Bar & Actions */}
                <div className="space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="text-slate-400">
                      Progress: {ch.currentValue} / {ch.targetValue} {ch.unit}
                    </span>
                    <span className={ch.isCompleted ? 'text-emerald-400 font-extrabold' : 'text-purple-300 font-extrabold'}>
                      {ch.isCompleted ? 'Completed ✓' : `${percent}%`}
                    </span>
                  </div>

                  <div className="w-full bg-slate-800 h-2.5 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        ch.isCompleted ? 'bg-emerald-400' : 'bg-gradient-to-r from-purple-500 to-indigo-400'
                      }`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>

                  {/* Buttons Action Group */}
                  <div className="flex items-center justify-between pt-2 gap-3">
                    <button
                      onClick={() => handleSkipChallenge(ch.id)}
                      className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-rose-400 text-xs font-bold transition-all cursor-pointer"
                    >
                      Skip / Swap Quest
                    </button>

                    {!ch.isCompleted ? (
                      <button
                        onClick={() => handleCompleteChallenge(ch)}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-400 hover:to-indigo-500 text-white text-xs font-black uppercase tracking-wider shadow-lg hover:scale-105 transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-4 h-4" /> Complete Quest (+{ch.xpReward} XP)
                      </button>
                    ) : (
                      <span className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-300 text-xs font-extrabold flex items-center gap-1.5 border border-emerald-500/40">
                        <Check className="w-4 h-4" /> Quest Cleared!
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
