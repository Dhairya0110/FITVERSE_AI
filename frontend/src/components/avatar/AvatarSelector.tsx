'use client';

import React, { useState } from 'react';
import { useFitStore } from '@/store/useFitStore';
import { AVATAR_REGISTRY } from '@/lib/avatarRegistry';
import { User, Sparkles, Check, Shield, Zap, Flame, Award, Sliders, Palette, ShoppingBag } from 'lucide-react';
import { motion } from 'framer-motion';

export const AvatarSelector: React.FC = () => {
  const { user, avatar, setSelectedAvatar } = useFitStore();
  const [filterGender, setFilterGender] = useState<'all' | 'male' | 'female'>('all');
  const [selectedAura, setSelectedAura] = useState<'cyan' | 'gold' | 'purple' | 'crimson'>('cyan');
  const [selectedBodyStage, setSelectedBodyStage] = useState<'skinny' | 'lean' | 'fit' | 'athletic' | 'muscular'>('fit');
  const [equippedGear, setEquippedGear] = useState<string[]>(['Neon Cyber Visor', 'Iron Grip Gloves']);

  const selectedOption = AVATAR_REGISTRY.find((a) => a.id === avatar.selectedAvatarId) || AVATAR_REGISTRY[2];

  const filteredAvatars = AVATAR_REGISTRY.filter(
    (a) => filterGender === 'all' || a.gender === filterGender
  );

  const auraColors = {
    cyan: 'from-cyan-400 to-blue-600 shadow-[0_0_30px_rgba(0,229,255,0.6)] border-cyan-400',
    gold: 'from-amber-300 to-yellow-500 shadow-[0_0_30px_rgba(245,158,11,0.6)] border-amber-400',
    purple: 'from-purple-500 to-indigo-600 shadow-[0_0_30px_rgba(139,92,246,0.6)] border-purple-400',
    crimson: 'from-rose-500 to-red-600 shadow-[0_0_30px_rgba(239,68,68,0.6)] border-rose-400',
  };

  const gearOptions = [
    { name: 'Neon Cyber Visor', cost: 150, icon: '🥽', desc: 'HUD Overlay & Vital Telemetry' },
    { name: 'Iron Grip Gloves', cost: 200, icon: '🥊', desc: '+15% Grip Strength & Rep Accuracy' },
    { name: 'Quantum Smartwatch', cost: 300, icon: '⌚', desc: 'Real-time Heart Rate & VO2 Max' },
    { name: 'Cybernetic Exo Boots', cost: 450, icon: '👟', desc: '+20% Kinetic Energy Energy Output' },
  ];

  const bodyStages = [
    { id: 'skinny', label: 'Skinny', scale: '0.85', desc: 'Lean Base' },
    { id: 'lean', label: 'Lean', scale: '0.95', desc: 'Conditioned' },
    { id: 'fit', label: 'Fit', scale: '1.05', desc: 'Optimal Peak' },
    { id: 'athletic', label: 'Athletic', scale: '1.15', desc: 'Explosive Power' },
    { id: 'muscular', label: 'Muscular', scale: '1.25', desc: 'Hypertrophy Beast' },
  ] as const;

  const toggleGear = (gearName: string) => {
    if (equippedGear.includes(gearName)) {
      setEquippedGear(equippedGear.filter((g) => g !== gearName));
    } else {
      setEquippedGear([...equippedGear, gearName]);
    }
  };

  return (
    <div className="royal-card p-6 md:p-8 space-y-8 animate-fadeIn border border-[var(--border-color)]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[var(--border-color)]">
        <div>
          <h3 className="text-2xl font-black flex items-center gap-2 font-heading text-[var(--text-primary)]">
            <User className="w-6 h-6 text-[#1E5EFF]" /> 3D Avatar Evolution & Holographic Gear Studio
          </h3>
          <p className="text-xs text-[var(--text-muted)] font-semibold mt-0.5">
            Customize your 3D digital persona, morph muscle frames smoothly, and equip futuristic cybernetic gear.
          </p>
        </div>

        {/* Gender Filter Tabs */}
        <div className="flex items-center gap-1.5 p-1.5 rounded-full bg-[var(--input-bg)] border border-[var(--border-color)]">
          {(['all', 'male', 'female'] as const).map((g) => (
            <button
              key={g}
              onClick={() => setFilterGender(g)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold capitalize transition-all cursor-pointer ${
                filterGender === g
                  ? 'royal-btn-primary shadow-md'
                  : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
              }`}
            >
              {g}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Avatar Active Preview Box with Aura & Morph Controls */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/40 flex flex-col lg:flex-row items-center gap-8 shadow-2xl relative overflow-hidden">
        {/* Hologram Aura Showcase */}
        <div className="relative shrink-0 flex flex-col items-center">
          <div className={`relative w-40 h-40 rounded-3xl overflow-hidden border-2 bg-slate-950 ${auraColors[selectedAura]} transition-all duration-500`}>
            <img
              src={selectedOption.avatarUrl}
              alt={selectedOption.name}
              className="w-full h-full object-cover transition-transform duration-500"
              style={{ transform: `scale(${bodyStages.find(s => s.id === selectedBodyStage)?.scale || '1'})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
            <span className="absolute bottom-2 left-2 px-2.5 py-0.5 rounded text-[9px] font-extrabold bg-cyan-400 text-slate-950 uppercase tracking-wider shadow">
              EVOLVED
            </span>
          </div>

          <div className="mt-3 text-center">
            <span className="text-xs font-extrabold text-cyan-300 capitalize">{selectedBodyStage} Stage</span>
            <span className="block text-[10px] text-slate-400">Scale Factor: {bodyStages.find(s => s.id === selectedBodyStage)?.scale}x</span>
          </div>
        </div>

        {/* Morphing Evolution Slider & Aura Selector */}
        <div className="flex-1 space-y-5 w-full">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Evolution Phase 3: {selectedBodyStage.toUpperCase()}
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-semibold">Aura Color:</span>
              {(['cyan', 'gold', 'purple', 'crimson'] as const).map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedAura(color)}
                  className={`w-6 h-6 rounded-full border-2 transition-all cursor-pointer ${
                    selectedAura === color ? 'border-white scale-110 shadow-lg' : 'border-transparent opacity-70'
                  } ${
                    color === 'cyan'
                      ? 'bg-cyan-400'
                      : color === 'gold'
                      ? 'bg-amber-400'
                      : color === 'purple'
                      ? 'bg-purple-500'
                      : 'bg-rose-500'
                  }`}
                />
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-extrabold text-white">{selectedOption.name}</h4>
            <p className="text-xs text-slate-300 mt-1">{selectedOption.description}</p>
          </div>

          {/* Morphing Body Stage Buttons */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-cyan-400" /> Anatomical Body Evolution Stage:
            </label>
            <div className="grid grid-cols-5 gap-2">
              {bodyStages.map((stage) => (
                <button
                  key={stage.id}
                  onClick={() => setSelectedBodyStage(stage.id)}
                  className={`py-2 rounded-xl text-xs font-bold transition-all border cursor-pointer ${
                    selectedBodyStage === stage.id
                      ? 'bg-cyan-400 text-slate-950 border-cyan-300 shadow-[0_0_15px_rgba(0,229,255,0.5)]'
                      : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {stage.label}
                </button>
              ))}
            </div>
          </div>

          {/* Evolution Stats Grid */}
          <div className="grid grid-cols-3 gap-3 pt-1">
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Weight Goal</span>
              <span className="text-sm font-black text-white">{user.weightKg} → {user.targetWeightKg} kg</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Body Fat</span>
              <span className="text-sm font-black text-purple-400">{user.bodyFatPercentage}% Target</span>
            </div>
            <div className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 block uppercase tracking-wider">Equipped Gear</span>
              <span className="text-sm font-black text-emerald-400">{equippedGear.length} Items</span>
            </div>
          </div>
        </div>
      </div>

      {/* Cybernetic Accessories Shop */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-800 pb-3">
          <h4 className="text-lg font-extrabold flex items-center gap-2 font-heading">
            <ShoppingBag className="w-5 h-5 text-amber-400" /> Unlockable Cyber Accessories Shop
          </h4>
          <span className="text-xs font-bold text-amber-400 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30">
            Available Coins: {user.coins} 🪙
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {gearOptions.map((item, idx) => {
            const isEquipped = equippedGear.includes(item.name);
            return (
              <div
                key={idx}
                className={`p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                  isEquipped
                    ? 'bg-gradient-to-b from-purple-950/40 to-slate-900 border-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.3)]'
                    : 'glass-card border-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-xs font-bold text-amber-400">{item.cost} 🪙</span>
                  </div>
                  <h5 className="text-sm font-bold text-white">{item.name}</h5>
                  <p className="text-[11px] text-slate-400 mt-1">{item.desc}</p>
                </div>

                <button
                  onClick={() => toggleGear(item.name)}
                  className={`mt-4 w-full py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isEquipped
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                  }`}
                >
                  {isEquipped ? '✓ Equipped' : 'Equip Gear'}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* 24-Avatar Roster Grid View */}
      <div className="space-y-4">
        <h4 className="text-lg font-extrabold flex items-center gap-2 font-heading text-[var(--text-primary)]">
          <Shield className="w-5 h-5 text-[#1E5EFF]" /> 24 High-Resolution Avatar Roster ({filteredAvatars.length} Available)
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredAvatars.map((opt) => {
            const isSelected = opt.id === avatar.selectedAvatarId;
            return (
              <motion.div
                key={opt.id}
                whileHover={{ y: -4, scale: 1.02 }}
                onClick={() => setSelectedAvatar(opt.id, opt.gender, opt.bodyType)}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'border-[#1E5EFF] bg-[#1E5EFF]/10 shadow-[0_0_15px_rgba(30,94,255,0.4)]'
                    : 'royal-card border-[var(--border-color)] hover:border-[#1E5EFF]/40'
                }`}
              >
                <div className="relative w-full h-44 rounded-xl overflow-hidden mb-3 border border-[var(--border-color)]">
                  <img src={opt.avatarUrl} alt={opt.name} className="w-full h-full object-cover" />
                  {isSelected && (
                    <div className="absolute top-2 right-2 w-7 h-7 rounded-full bg-[#1E5EFF] flex items-center justify-center text-white font-bold shadow-md">
                      <Check className="w-4 h-4" />
                    </div>
                  )}
                  <span className="absolute bottom-2 left-2 px-2 py-0.5 rounded text-[10px] font-bold bg-[var(--card-bg)] text-[var(--text-primary)] capitalize border border-[var(--border-color)] shadow-sm">
                    {opt.gender} • {opt.bodyType}
                  </span>
                </div>

                <div>
                  <h5 className="text-sm font-black text-[var(--text-primary)] truncate">{opt.name}</h5>
                  <p className="text-[11px] text-[var(--text-muted)] font-semibold line-clamp-2 mt-0.5">{opt.description}</p>
                </div>

                <button
                  className={`mt-3 w-full py-2 rounded-xl text-xs font-black transition-all cursor-pointer ${
                    isSelected
                      ? 'royal-btn-primary shadow-md'
                      : 'royal-btn-secondary'
                  }`}
                >
                  {isSelected ? 'Equipped Avatar ✓' : 'Select Avatar'}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

