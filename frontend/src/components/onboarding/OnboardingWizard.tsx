'use client';

import React, { useState } from 'react';
import { useFitStore } from '@/store/useFitStore';
import { AVATAR_REGISTRY } from '@/lib/avatarRegistry';
import { Sparkles, ArrowRight, CheckCircle2, User, Target, Utensils, AlertTriangle, Globe, Music, Crown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface OnboardingWizardProps {
  onComplete: () => void;
}

export const OnboardingWizard: React.FC<OnboardingWizardProps> = ({ onComplete }) => {
  const { user, updateUserProfile, setSelectedAvatar, setOnboarded } = useFitStore();
  const [step, setStep] = useState(1);

  // Form State
  const [fullName, setFullName] = useState(user.fullName || 'Alex Cyber');
  const [age, setAge] = useState(user.age || 26);
  const [gender, setGender] = useState<'male' | 'female'>(user.gender || 'male');
  const [heightCm, setHeightCm] = useState(user.heightCm || 180);
  const [weightKg, setWeightKg] = useState(user.weightKg || 78);
  const [targetWeightKg, setTargetWeightKg] = useState(user.targetWeightKg || 74);
  const [goal, setGoal] = useState(user.goal || 'muscle_gain');
  const [dietaryPreference, setDietaryPreference] = useState(user.dietaryPreference || 'Non-Vegetarian');
  const [allergies, setAllergies] = useState<string[]>(user.allergies || ['None']);
  const [country, setCountry] = useState(user.country || 'USA');
  const [mood, setMood] = useState('motivated');
  const [selectedAvatarId, setSelectedAvatarId] = useState('m_fit');

  const filteredAvatars = AVATAR_REGISTRY.filter((a) => a.gender === gender);

  const handleNext = () => {
    if (step < 7) {
      setStep(step + 1);
    } else {
      // Save all parameters
      const chosenAvatar = AVATAR_REGISTRY.find((a) => a.id === selectedAvatarId);
      updateUserProfile({
        fullName,
        age,
        gender,
        heightCm,
        weightKg,
        targetWeightKg,
        goal,
        dietaryPreference,
        allergies,
        country,
      });

      if (chosenAvatar) {
        setSelectedAvatar(chosenAvatar.id, chosenAvatar.gender, chosenAvatar.bodyType);
      }
      setOnboarded(true);
      onComplete();
    }
  };

  const stepsList = [
    { title: 'Identity', icon: User },
    { title: 'Targets', icon: Target },
    { title: 'Diet', icon: Utensils },
    { title: 'Allergies', icon: AlertTriangle },
    { title: 'Region', icon: Globe },
    { title: 'Vibe', icon: Music },
    { title: 'Companion', icon: Crown },
  ];

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-8 px-4 relative z-10">
      <div className="w-full max-w-2xl glass-card p-8 rounded-3xl border border-cyan-500/30 shadow-[0_0_50px_rgba(0,229,255,0.15)] relative overflow-hidden space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" /> FitVerse DNA Onboarding Sequencer
          </div>
          <h2 className="text-2xl font-black text-white">Configure Your AI Ecosystem</h2>
        </div>

        {/* Stepper Node Progress Bar */}
        <div className="flex items-center justify-between relative px-2">
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-800 -translate-y-1/2 z-0" />
          <div
            className="absolute top-1/2 left-4 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-600 -translate-y-1/2 z-0 transition-all duration-500"
            style={{ width: `${((step - 1) / 6) * 100}%` }}
          />

          {stepsList.map((st, idx) => {
            const stepNum = idx + 1;
            const isActive = step === stepNum;
            const isDone = step > stepNum;
            return (
              <div key={st.title} className="relative z-10 flex flex-col items-center gap-1">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                    isDone
                      ? 'bg-cyan-400 text-slate-950 shadow-[0_0_10px_rgba(0,229,255,0.5)]'
                      : isActive
                      ? 'bg-purple-600 text-white shadow-[0_0_15px_rgba(124,58,237,0.6)] ring-2 ring-purple-400'
                      : 'bg-slate-900 border border-slate-800 text-slate-500'
                  }`}
                >
                  {isDone ? <CheckCircle2 className="w-4 h-4" /> : stepNum}
                </div>
                <span className={`text-[10px] hidden sm:block ${isActive ? 'text-cyan-400 font-bold' : 'text-slate-500'}`}>
                  {st.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Step Dynamic Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="py-4 space-y-4"
          >
            {/* Step 1: Identity */}
            {step === 1 && (
              <div className="space-y-4">
                <h3 className="text-base font-extrabold text-cyan-300">Step 1: Physical Identity</h3>
                <div>
                  <label className="text-xs text-slate-300 block mb-1">Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-300 block mb-1">Age (Years)</label>
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => setAge(parseInt(e.target.value) || 25)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-300 block mb-1">Biological Gender</label>
                    <select
                      value={gender}
                      onChange={(e) => setGender(e.target.value as 'male' | 'female')}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-cyan-300 focus:outline-none"
                    >
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Targets */}
            {step === 2 && (
              <div className="space-y-4">
                <h3 className="text-base font-extrabold text-cyan-300">Step 2: Physical Metrics & Goal</h3>
                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-xs text-slate-300 block mb-1">Height (cm)</label>
                    <input
                      type="number"
                      value={heightCm}
                      onChange={(e) => setHeightCm(parseFloat(e.target.value) || 180)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-300 block mb-1">Weight (kg)</label>
                    <input
                      type="number"
                      value={weightKg}
                      onChange={(e) => setWeightKg(parseFloat(e.target.value) || 78)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-300 block mb-1">Target (kg)</label>
                    <input
                      type="number"
                      value={targetWeightKg}
                      onChange={(e) => setTargetWeightKg(parseFloat(e.target.value) || 74)}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-300 block mb-1">Primary Fitness Goal</label>
                  <select
                    value={goal}
                    onChange={(e) => setGoal(e.target.value as any)}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-2.5 text-xs text-purple-300 focus:outline-none"
                  >
                    <option value="muscle_gain">Muscle Hypertrophy & Gain</option>
                    <option value="fat_loss">Fat Loss & Shred</option>
                    <option value="maintenance">Body Recomposition & Maintenance</option>
                    <option value="endurance">Stamina & Cardio Endurance</option>
                  </select>
                </div>
              </div>
            )}

            {/* Step 3: Diet */}
            {step === 3 && (
              <div className="space-y-4">
                <h3 className="text-base font-extrabold text-cyan-300">Step 3: Dietary Preference</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['Non-Vegetarian', 'Vegetarian', 'Vegan', 'Keto / Low Carb'].map((d) => (
                    <button
                      key={d}
                      type="button"
                      onClick={() => setDietaryPreference(d)}
                      className={`p-4 rounded-2xl border text-xs font-bold text-left transition-all cursor-pointer ${
                        dietaryPreference === d
                          ? 'bg-purple-600/30 border-purple-400 text-white shadow-[0_0_15px_rgba(124,58,237,0.4)]'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 4: Allergies */}
            {step === 4 && (
              <div className="space-y-4">
                <h3 className="text-base font-extrabold text-cyan-300">Step 4: Food Allergies & Exclusions</h3>
                <div className="grid grid-cols-2 gap-3">
                  {['None', 'Lactose / Dairy', 'Nuts / Peanuts', 'Gluten / Wheat', 'Soy', 'Shellfish'].map((al) => (
                    <button
                      key={al}
                      type="button"
                      onClick={() => setAllergies([al])}
                      className={`p-3 rounded-2xl border text-xs font-bold transition-all cursor-pointer ${
                        allergies.includes(al)
                          ? 'bg-emerald-600/30 border-emerald-400 text-emerald-300 shadow-[0_0_15px_rgba(34,197,94,0.4)]'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {al}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 5: Region */}
            {step === 5 && (
              <div className="space-y-4">
                <h3 className="text-base font-extrabold text-cyan-300">Step 5: Country & Cuisine Origin</h3>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-cyan-300 focus:outline-none"
                >
                  <option value="USA">USA / Western Cuisine</option>
                  <option value="India">India (Gujarati, Kathiyawadi, Punjabi, South)</option>
                  <option value="Japan">Japan (Miso, Natto, Soba, Teriyaki)</option>
                  <option value="Mediterranean">Mediterranean (Greek, Olive Oil, Hummus)</option>
                  <option value="Mexico">Latin America (Tacos, Avocado, Fajitas)</option>
                </select>
              </div>
            )}

            {/* Step 6: Vibe */}
            {step === 6 && (
              <div className="space-y-4">
                <h3 className="text-base font-extrabold text-cyan-300">Step 6: Vibe & Initial Mood</h3>
                <select
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-xs text-amber-300 focus:outline-none"
                >
                  <option value="motivated">🔥 Motivated (High Intensity)</option>
                  <option value="happy">😃 Energetic & Joyful</option>
                  <option value="tired">💤 Tired / Active Recovery</option>
                  <option value="sad">🌧️ Focused Chill</option>
                </select>
              </div>
            )}

            {/* Step 7: Avatar Companion */}
            {step === 7 && (
              <div className="space-y-4">
                <h3 className="text-base font-extrabold text-cyan-300">Step 7: Choose Your Evolving Avatar Companion</h3>
                <p className="text-xs text-slate-400">Select from authentic avatar models ({gender.toUpperCase()}):</p>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 max-h-60 overflow-y-auto pr-1 scrollbar-thin">
                  {filteredAvatars.map((av) => {
                    const isSelected = av.id === selectedAvatarId;
                    return (
                      <div
                        key={av.id}
                        onClick={() => setSelectedAvatarId(av.id)}
                        className={`p-2 rounded-2xl border cursor-pointer transition-all flex flex-col items-center ${
                          isSelected
                            ? 'bg-purple-950/40 border-purple-400 shadow-[0_0_15px_rgba(139,92,246,0.6)] scale-105'
                            : 'bg-slate-950 border-slate-800 hover:border-slate-700'
                        }`}
                      >
                        <img
                          src={av.avatarUrl}
                          alt={av.name}
                          className="w-16 h-16 rounded-xl object-cover border border-slate-800"
                        />
                        <span className="text-[10px] font-bold text-white mt-1 text-center truncate w-full">{av.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Footer Next Button */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            type="button"
            disabled={step === 1}
            onClick={() => setStep(step - 1)}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white text-xs font-semibold disabled:opacity-30 cursor-pointer"
          >
            Back
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-purple-500 to-emerald-400 text-slate-950 font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:scale-105 transition-all cursor-pointer"
          >
            {step === 7 ? 'Complete Setup & Launch Dashboard' : 'Next Step'} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
