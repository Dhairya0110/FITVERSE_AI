'use client';

import React, { useState } from 'react';
import { useFitStore } from '@/store/useFitStore';
import { BODYBUILDING_LEGENDS, BodybuildingLegend } from '@/lib/bodybuildingLegends';
import { Droplet, Plus, BookOpen, Quote, Trophy } from 'lucide-react';

export const NotificationCenter: React.FC = () => {
  const { diet, logWater } = useFitStore();
  const [selectedLegendIndex, setSelectedLegendIndex] = useState(0);

  const legends: BodybuildingLegend[] = BODYBUILDING_LEGENDS.en;
  const currentLegend = legends[selectedLegendIndex];

  const targetWater = diet?.waterTargetMl || 3500;
  const loggedWater = diet?.waterLoggedMl || 0;
  const waterProgress = Math.min(100, Math.round((loggedWater / targetWater) * 100));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* 1. Hydration & Water Tracker Card */}
      <div className="glass-card p-6 space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
              <Droplet className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Smart Hydration Engine</h3>
              <p className="text-xs text-slate-400">Daily intake goal calculated by body weight</p>
            </div>
          </div>
          <span className="text-sm font-extrabold text-cyan-400">{waterProgress}%</span>
        </div>

        {/* Visual Water Fill Tube */}
        <div className="relative w-full h-8 bg-slate-950 rounded-full overflow-hidden border border-slate-800 p-1">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500 shadow-[0_0_15px_rgba(6,182,212,0.6)]"
            style={{ width: `${waterProgress}%` }}
          />
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400">
          <span>Logged: <strong className="text-white">{loggedWater} ml</strong></span>
          <span>Target: <strong className="text-white">{targetWater} ml</strong></span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => logWater(250)}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:scale-102 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" /> Quick Log (+250ml)
          </button>
        </div>
      </div>

      {/* 2. Bodybuilding Legends & Today's Knowledge Library */}
      <div className="glass-card p-6 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Bodybuilding Legends Database</h3>
              <p className="text-xs text-slate-400">Real biographies, quotes & hypertrophy tips</p>
            </div>
          </div>
        </div>

        {/* Legend Selector Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {legends.map((legend, idx) => (
            <button
              key={legend.name}
              onClick={() => setSelectedLegendIndex(idx)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
                idx === selectedLegendIndex
                  ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-slate-950 shadow-[0_0_12px_rgba(245,158,11,0.5)]'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {legend.name}
            </button>
          ))}
        </div>

        {/* Active Legend Profile Card */}
        {currentLegend && (
          <div className="p-4 rounded-2xl bg-gradient-to-br from-amber-950/30 to-slate-950 border border-amber-500/30 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-extrabold text-amber-300">{currentLegend.name}</h4>
                <p className="text-xs text-slate-400 italic">&quot;{currentLegend.title}&quot;</p>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-400 text-[10px] font-bold uppercase flex items-center gap-1">
                <Trophy className="w-3 h-3" /> Legend
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 italic flex items-start gap-2">
              <Quote className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>&quot;{currentLegend.quote}&quot;</span>
            </div>

            <div className="space-y-1.5 text-xs">
              <p><strong className="text-white">Biography:</strong> <span className="text-slate-400">{currentLegend.biography}</span></p>
              <p><strong className="text-amber-400">Achievements:</strong> <span className="text-slate-300">{currentLegend.achievements}</span></p>
              <p><strong className="text-cyan-400">Hypertrophy Tip:</strong> <span className="text-slate-300">{currentLegend.tip}</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
