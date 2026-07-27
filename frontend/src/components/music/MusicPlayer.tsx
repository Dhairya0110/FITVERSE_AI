'use client';

import React, { useState } from 'react';
import { useFitStore } from '@/store/useFitStore';
import { Music, Play, Pause, SkipForward } from 'lucide-react';

export const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const { currentTrack, mood } = useFitStore();

  return (
    <div className="glass-card p-6 flex flex-col justify-between relative overflow-hidden border border-purple-500/20">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Music className="w-5 h-5 text-purple-400" />
          <h3 className="text-base font-bold text-white">AI Workout Music & Motivation</h3>
        </div>
        <span className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 capitalize">
          Mood: {mood}
        </span>
      </div>

      {/* Track Player Display */}
      {currentTrack && (
        <div className="flex items-center gap-4 bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800">
          <img
            src={currentTrack.coverUrl}
            alt={currentTrack.title}
            className="w-14 h-14 rounded-xl object-cover border border-purple-500/30 shadow-md"
          />
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-bold text-white truncate">{currentTrack.title}</h4>
            <p className="text-xs text-slate-400 truncate">{currentTrack.artist}</p>
            <span className="text-[10px] text-cyan-400 font-mono mt-1 block">{currentTrack.duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center text-slate-950 font-bold shadow-[0_0_12px_rgba(0,229,255,0.5)] transition-all hover:scale-105"
            >
              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-0.5" />}
            </button>
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
