'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Volume2, VolumeX, ArrowRight, Sparkles, Film } from 'lucide-react';
import { useFitStore } from '@/store/useFitStore';

interface IntroVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const IntroVideoModal: React.FC<IntroVideoModalProps> = ({ isOpen, onClose }) => {
  const { theme } = useFitStore();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true); // Default muted to ensure browser autoplay succeeds
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showUnmuteHint, setShowUnmuteHint] = useState(true);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn('Autoplay prevented by browser policy:', err);
        setIsPlaying(false);
      });
    }
  }, [isOpen]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
    setShowUnmuteHint(false);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 0);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const formatTime = (timeInSec: number) => {
    if (isNaN(timeInSec)) return '00:00';
    const mins = Math.floor(timeInSec / 60);
    const secs = Math.floor(timeInSec % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex flex-col items-center justify-between p-4 sm:p-8"
      >
        {/* Top Header Bar */}
        <div className="w-full max-w-6xl flex items-center justify-between z-20 pt-2">
          <div className="flex items-center gap-3">
            <img
              src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
              alt="FITVERSE AI Logo"
              className="h-10 sm:h-12 w-auto object-contain rounded-xl shadow-lg"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-black text-white tracking-wider uppercase font-heading flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-[#1E5EFF]" /> Cinematic System Briefing
              </span>
              <span className="text-[10px] text-slate-400 font-semibold">FitVerse OS Neural Interface</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="royal-btn-primary px-5 py-2.5 rounded-2xl text-xs font-extrabold flex items-center gap-2 shadow-[0_0_20px_rgba(30,94,255,0.4)] cursor-pointer hover:scale-105 transition-all"
          >
            <span>Skip Intro / Enter App</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Central Video Frame */}
        <div className="relative w-full max-w-5xl my-auto aspect-video rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(30,94,255,0.25)] border border-slate-800 bg-black flex items-center justify-center group">
          <video
            ref={videoRef}
            src="/intro-video.mp4"
            className="w-full h-full object-contain"
            playsInline
            autoPlay
            muted={isMuted}
            onTimeUpdate={handleTimeUpdate}
            onEnded={onClose}
            onClick={togglePlay}
          />

          {/* Unmute Prompt Hint */}
          {showUnmuteHint && isMuted && (
            <motion.button
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={toggleMute}
              className="absolute top-6 left-6 z-30 px-4 py-2 rounded-full bg-[#1E5EFF]/80 backdrop-blur-md text-white text-xs font-bold flex items-center gap-2 border border-white/20 shadow-lg cursor-pointer hover:bg-[#1E5EFF] transition-all animate-pulse"
            >
              <VolumeX className="w-4 h-4 text-amber-300" />
              <span>Click to Enable Audio 🔊</span>
            </motion.button>
          )}

          {/* Overlay Play/Pause Button on Hover/Pause */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 m-auto w-20 h-20 rounded-full bg-[#1E5EFF]/80 text-white flex items-center justify-center backdrop-blur-md border border-white/20 shadow-2xl cursor-pointer hover:scale-110 transition-all z-30"
            >
              <Play className="w-8 h-8 fill-current ml-1" />
            </button>
          )}
        </div>

        {/* Bottom Video Controls Bar */}
        <div className="w-full max-w-5xl z-20 space-y-3 bg-slate-950/80 p-4 sm:p-5 rounded-2xl border border-slate-800 backdrop-blur-md shadow-2xl">
          {/* Progress Slider */}
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-mono font-bold text-slate-400 min-w-[45px] text-right">
              {formatTime(currentTime)}
            </span>
            <input
              type="range"
              min={0}
              max={duration || 100}
              value={currentTime}
              onChange={handleSeek}
              className="flex-1 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#1E5EFF]"
            />
            <span className="text-[11px] font-mono font-bold text-slate-400 min-w-[45px]">
              {formatTime(duration)}
            </span>
          </div>

          {/* Control Buttons */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={togglePlay}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#1E5EFF] text-white transition-all cursor-pointer"
                title={isPlaying ? 'Pause Video' : 'Play Video'}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              <button
                onClick={toggleMute}
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-[#1E5EFF] text-white transition-all cursor-pointer"
                title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
              </button>

              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-[10px] font-extrabold uppercase">
                <Sparkles className="w-3 h-3" /> FitVerse Ecosystem 2026
              </div>
            </div>

            <button
              onClick={onClose}
              className="text-xs font-bold text-slate-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1"
            >
              Finish & Proceed <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
