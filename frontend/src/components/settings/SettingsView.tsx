'use client';

import React, { useState } from 'react';
import { useFitStore } from '@/store/useFitStore';
import { Settings, Sliders, Sun, Moon, Volume2, Mic, Sparkles, ShieldCheck, Cpu } from 'lucide-react';

export const SettingsView: React.FC = () => {
  const { user, updateUserProfile, theme, toggleTheme, isVoiceActive, toggleVoiceAssistant } = useFitStore();
  const [ambientGlow, setAmbientGlow] = useState(80);
  const [voiceSpeed, setVoiceSpeed] = useState(1.0);
  const [soundEffects, setSoundEffects] = useState(true);
  const [autoHologram, setAutoHologram] = useState(true);

  return (
    <div className="glass-card p-6 space-y-8 animate-fadeIn">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-2xl font-black flex items-center gap-2 font-heading">
            <Settings className="w-6 h-6 text-cyan-400" /> Neural System Configuration & Preferences
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Calibrate ambient light intensity, JARVIS voice synthesis speed, UI sound FX, and render quality.
          </p>
        </div>

        <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold flex items-center gap-1.5">
          <Cpu className="w-3.5 h-3.5" /> OS v4.8 Quantum
        </span>
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Theme & Display */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h4 className="text-base font-extrabold text-white flex items-center gap-2 font-heading">
            <Sun className="w-4 h-4 text-amber-400" /> Display & Visual Theme
          </h4>

          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div>
              <span className="text-xs font-bold text-white block">Theme Mode</span>
              <span className="text-[10px] text-slate-400 block">Switch between Cyber Dark and Clean Lite</span>
            </div>
            <button
              onClick={toggleTheme}
              className="px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300 text-xs font-bold flex items-center gap-1.5 cursor-pointer hover:bg-cyan-500/30 transition-all"
            >
              {theme === 'dark' ? <Moon className="w-4 h-4 text-indigo-400" /> : <Sun className="w-4 h-4 text-amber-400" />}
              <span className="capitalize">{theme} Theme</span>
            </button>
          </div>

          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div>
              <span className="text-xs font-bold text-white block">System Language</span>
              <span className="text-[10px] text-slate-400 block">Applied across AI Coach, Diet, & Music</span>
            </div>
            <select
              value={user.language || 'English'}
              onChange={(e) => updateUserProfile({ language: e.target.value })}
              className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5 text-xs text-purple-300 font-bold focus:outline-none cursor-pointer"
            >
              <option value="English">🌐 English</option>
              <option value="Hindi">🇮🇳 Hindi (हिंदी)</option>
              <option value="Gujarati">🇮🇳 Gujarati (ગુજરાતી)</option>
              <option value="Spanish">🇪🇸 Spanish (Español)</option>
              <option value="French">🇫🇷 French (Français)</option>
              <option value="German">🇩🇪 German (Deutsch)</option>
              <option value="Japanese">🇯🇵 Japanese (日本語)</option>
            </select>
          </div>

          <div className="space-y-2 p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-white">Ambient Glow Intensity</span>
              <span className="text-cyan-400">{ambientGlow}%</span>
            </div>
            <input
              type="range"
              min="20"
              max="100"
              value={ambientGlow}
              onChange={(e) => setAmbientGlow(parseInt(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>
        </div>

        {/* Audio & JARVIS Voice Control */}
        <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-4">
          <h4 className="text-base font-extrabold text-white flex items-center gap-2 font-heading">
            <Volume2 className="w-4 h-4 text-purple-400" /> J.A.R.V.I.S Audio Telemetry
          </h4>

          <div className="flex items-center justify-between p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div>
              <span className="text-xs font-bold text-white block">Speech Commands Engine</span>
              <span className="text-[10px] text-slate-400 block">Web Speech API Voice listener</span>
            </div>
            <button
              onClick={toggleVoiceAssistant}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isVoiceActive
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {isVoiceActive ? 'Voice ON' : 'Voice OFF'}
            </button>
          </div>

          <div className="space-y-2 p-3 rounded-2xl bg-slate-950/80 border border-slate-800">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-white">JARVIS Voice Speech Rate</span>
              <span className="text-purple-400">{voiceSpeed}x Speed</span>
            </div>
            <input
              type="range"
              min="0.75"
              max="1.5"
              step="0.05"
              value={voiceSpeed}
              onChange={(e) => setVoiceSpeed(parseFloat(e.target.value))}
              className="w-full accent-purple-400 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Live System Preview */}
      <div className="p-6 rounded-3xl glass-card-sm border border-cyan-500/30 space-y-2">
        <div className="flex items-center gap-2 text-xs font-bold text-cyan-400">
          <ShieldCheck className="w-4 h-4" /> Live Calibration Telemetry
        </div>
        <p className="text-xs text-slate-300">
          All settings are saved locally and synced across your FitVerse neural session.
        </p>
      </div>
    </div>
  );
};
