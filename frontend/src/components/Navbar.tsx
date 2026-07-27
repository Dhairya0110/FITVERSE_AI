'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useFitStore } from '@/store/useFitStore';
import { FitVerseVoiceEngine } from '@/lib/voiceEngine';
import { MoodType } from '@/types';
import { Zap, Flame, Award, Mic, Sun, Moon, Sparkles, LogIn, LogOut, Volume2, Search, Bell, User } from 'lucide-react';

interface NavbarProps {
  onToggleAuthModal?: () => void;
  onNavigateTab?: (tab: 'dashboard' | 'workout' | 'diet' | 'avatar' | 'music' | 'analytics' | 'rewards' | 'settings' | 'notifications') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onToggleAuthModal, onNavigateTab }) => {
  const { user, isLoggedIn, logout, isVoiceActive, toggleVoiceAssistant, logWater, mood, setMood, theme, toggleTheme } = useFitStore();
  const [voiceFeedbackText, setVoiceFeedbackText] = useState<string | null>(null);

  const voiceEngineRef = useRef<FitVerseVoiceEngine | null>(null);
  const handlersRef = useRef({ onNavigateTab, logWater, toggleTheme });

  useEffect(() => {
    handlersRef.current = { onNavigateTab, logWater, toggleTheme };
    if (voiceEngineRef.current) {
      voiceEngineRef.current.updateHandlers({
        onNavigate: (tab) => handlersRef.current.onNavigateTab?.(tab),
        onLogWater: () => handlersRef.current.logWater(250),
        onToggleTheme: () => handlersRef.current.toggleTheme(),
      });
    }
  }, [onNavigateTab, logWater, toggleTheme]);

  useEffect(() => {
    if (!voiceEngineRef.current) {
      voiceEngineRef.current = new FitVerseVoiceEngine({
        onNavigate: (tab) => handlersRef.current.onNavigateTab?.(tab),
        onLogWater: () => handlersRef.current.logWater(250),
        onToggleTheme: () => handlersRef.current.toggleTheme(),
        onFeedback: (msg) => {
          setVoiceFeedbackText(msg);
          setTimeout(() => setVoiceFeedbackText(null), 5000);
        },
      });
    }
  }, []);

  const handleVoiceToggle = () => {
    const nextVoiceState = !isVoiceActive;
    toggleVoiceAssistant();
    
    if (nextVoiceState) {
      voiceEngineRef.current?.startListening();
    } else {
      voiceEngineRef.current?.stopListening();
    }
  };

  return (
    <nav className="glass-nav fixed top-0 left-0 right-0 z-50 px-6 lg:px-10 py-3.5 border-b border-[var(--border-color)]">
      <div className="w-full max-w-[1760px] mx-auto flex items-center justify-between gap-4">
        
        {/* Brand Logo & Name */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigateTab?.('dashboard')}>
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#1E5EFF] to-[#00B894] flex items-center justify-center text-white font-black text-xl shadow-md">
            <Zap className="w-5 h-5 fill-current" />
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-[var(--text-primary)] font-heading">
              FITVERSE <span className="text-[#1E5EFF]">AI</span>
            </span>
            <span className="block text-[9px] tracking-widest text-[var(--text-muted)] uppercase font-semibold">
              Royal Luxury Fitness OS
            </span>
          </div>
        </div>

        {/* Center Feedback / Quick Stats */}
        {voiceFeedbackText ? (
          <div className="animate-bounce px-4 py-1.5 rounded-full bg-[#1E5EFF]/20 border border-[#1E5EFF] text-[#4DA3FF] text-xs font-bold flex items-center gap-2 shadow-md">
            <Volume2 className="w-4 h-4 text-[#1E5EFF]" />
            <span>{voiceFeedbackText}</span>
          </div>
        ) : (
          <div className="hidden md:flex items-center gap-4">
            <div className="px-3.5 py-1.5 rounded-full bg-[var(--hover-bg)] border border-[var(--border-color)] flex items-center gap-1.5 text-xs font-bold text-[var(--text-primary)] shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#C9A227] fill-[#C9A227]" />
              <span>ROYAL ECOSYSTEM</span>
            </div>

            <div className="px-4 py-1.5 rounded-full bg-[var(--hover-bg)] flex items-center gap-2 border border-[var(--border-color)] text-amber-500 text-xs font-semibold">
              <Flame className="w-4 h-4 text-amber-500 fill-amber-500 animate-pulse" />
              <span>{user.streakDays} Day Streak</span>
            </div>

            <div className="px-4 py-1.5 rounded-full bg-[var(--hover-bg)] flex items-center gap-2 border border-[var(--border-color)] text-purple-400 text-xs font-semibold">
              <Award className="w-4 h-4 text-purple-400" />
              <span>Lvl {Math.floor(user.xp / 100) + 1} ({user.xp} XP)</span>
            </div>

            <select
              value={mood}
              onChange={(e) => setMood(e.target.value as MoodType)}
              className="bg-[var(--input-bg)] text-xs text-[var(--text-primary)] border border-[var(--border-color)] rounded-full px-3 py-1.5 focus:outline-none focus:border-[#1E5EFF] cursor-pointer"
            >
              <option value="motivated">🔥 Motivated</option>
              <option value="happy">😃 Energetic</option>
              <option value="tired">💤 Tired / Rest</option>
              <option value="sad">🌧️ Focused Chill</option>
              <option value="lazy">⚡ Push Mode</option>
            </select>
          </div>
        )}

        {/* Right Action Controls: Mode Switcher, Voice, User Auth */}
        <div className="flex items-center gap-3">
          
          {/* ROYAL THEME MODE SWITCHER BUTTON */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-2xl bg-[var(--hover-bg)] border border-[var(--border-color)] hover:border-[#1E5EFF]/50 text-[var(--text-primary)] transition-all flex items-center gap-2 text-xs font-bold cursor-pointer shadow-sm"
            title={theme === 'dark' ? 'Switch to Royal Light Mode' : 'Switch to Royal Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-[#C9A227]" />
            ) : (
              <Moon className="w-4 h-4 text-[#1E5EFF]" />
            )}
            <span className="hidden sm:inline capitalize">
              {theme === 'dark' ? 'Royal Light Mode' : 'Royal Dark Mode'}
            </span>
          </button>

          {/* Voice Assistant Toggle */}
          <button
            onClick={handleVoiceToggle}
            className={`p-2.5 rounded-2xl border transition-all cursor-pointer ${
              isVoiceActive
                ? 'bg-[#1E5EFF]/20 border-[#1E5EFF] text-[#1E5EFF] shadow-[0_0_15px_rgba(30,94,255,0.4)] animate-pulse'
                : 'bg-[var(--hover-bg)] border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)]'
            }`}
            title={isVoiceActive ? 'Voice Assistant Active — Click to turn off' : 'Click to activate J.A.R.V.I.S Voice Control'}
          >
            <Mic className="w-4 h-4" />
          </button>

          {/* Notifications Shortcut */}
          <button
            onClick={() => onNavigateTab?.('notifications')}
            className="p-2.5 rounded-2xl bg-[var(--hover-bg)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-all cursor-pointer hidden sm:flex"
            title="Notifications & Logs"
          >
            <Bell className="w-4 h-4" />
          </button>

          {/* Session Login/Logout Button */}
          {isLoggedIn ? (
            <button
              onClick={logout}
              className="p-2.5 rounded-2xl bg-[var(--hover-bg)] border border-[var(--border-color)] text-[var(--text-muted)] hover:text-[var(--accent-danger)] hover:border-[var(--accent-danger)]/50 transition-all cursor-pointer"
              title="Disconnect Session"
            >
              <LogOut className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onToggleAuthModal}
              className="px-4 py-2 rounded-2xl royal-btn-primary text-xs font-extrabold flex items-center gap-1.5 shadow-md cursor-pointer"
            >
              <LogIn className="w-4 h-4" /> Connect Session
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
