import { create } from 'zustand';
import { UserProfile, AvatarState, WorkoutPlan, DietPlan, ChatMessage, MoodType, MusicTrack, Exercise } from '@/types';
import { fetchUserSupabaseData, syncWaterToSupabase, syncXpToSupabase } from '@/lib/syncService';
import { generateCustomWorkoutPlan, generateCustomDietPlan, MASTER_EXERCISE_POOL } from '@/lib/dynamicGenerator';

interface FitStoreState {
  user: UserProfile;
  avatar: AvatarState;
  currentWorkout: WorkoutPlan | null;
  diet: DietPlan;
  mood: MoodType;
  currentTrack: MusicTrack | null;
  chatHistory: ChatMessage[];
  isVoiceActive: boolean;
  isAdmin: boolean;
  isLoggedIn: boolean;
  isOnboarded: boolean;
  theme: 'dark' | 'light';
  showIntroVideo: boolean;
  
  // Actions
  login: (email: string, fullName?: string, isOnboardedStatus?: boolean) => void;
  logout: () => void;
  triggerIntroVideo: () => void;
  closeIntroVideo: () => void;
  setOnboarded: (status: boolean) => void;
  logWater: (amountMl: number) => void;
  addSteps: (steps: number) => void;
  addCaloriesBurned: (cals: number) => void;
  addXp: (amount: number) => void;
  setMood: (mood: MoodType) => void;
  setSelectedAvatar: (avatarId: string, gender: 'male' | 'female', bodyType: 'skinny' | 'lean' | 'fit' | 'plus') => void;
  addExercise: (exercise: Exercise) => void;
  removeExercise: (id: string) => void;
  replaceExerciseWithAi: (id: string) => void;
  regenerateWorkoutPlan: () => void;
  updateUserProfile: (updates: Partial<UserProfile>) => void;
  generateAiDietPlan: () => void;
  setCurrentTrack: (track: MusicTrack) => void;
  sendChatMessage: (messageText: string) => void;
  toggleVoiceAssistant: () => void;
  toggleTheme: () => void;
  completeWorkout: () => void;
}

export const useFitStore = create<FitStoreState>((set) => ({
  isLoggedIn: false,
  isOnboarded: typeof window !== 'undefined' ? localStorage.getItem('fitverse_onboarded') !== 'false' : true,
  user: {
    id: 'usr_001',
    username: 'CyberWarrior',
    email: 'warrior@fitverse.ai',
    fullName: 'Alex Cyber',
    age: 26,
    gender: 'male',
    heightCm: 180,
    weightKg: 78,
    targetWeightKg: 74,
    bodyFatPercentage: 14.5,
    goal: 'muscle_gain',
    level: 'intermediate',
    activityLevel: 'active',
    country: 'USA',
    language: 'English',
    allergies: [],
    dietaryPreference: 'Non-Vegetarian',
    budget: 'medium',
    xp: 0,
    coins: 50,
    streakDays: 1,
    dailySteps: 0,
    dailyStepsTarget: 10000,
    completedWorkouts: 0,
  },
  avatar: {
    selectedAvatarId: 'm_fit',
    gender: 'male',
    bodyType: 'fit',
    level: 1,
    accessories: [],
    evolutionStage: 'Phase 1 - Initial Foundation',
  },
  currentWorkout: {
    id: 'wo_1',
    title: 'Hypertrophy Upper Body Protocol',
    difficulty: 'intermediate',
    durationMinutes: 45,
    caloriesBurned: 420,
    exercises: [
      {
        id: 'ex_1',
        name: 'Barbell Bench Press',
        category: 'Chest',
        sets: 4,
        reps: 10,
        restSec: 60,
        targetMuscle: 'Chest',
        secondaryMuscles: ['Triceps', 'Front Delts'],
        instructions: ['Keep shoulder blades retracted', 'Touch chest lightly at bottom'],
        hologramColor: '#00e5ff',
        modelType: 'cylinder',
      },
      {
        id: 'ex_2',
        name: 'Incline Dumbbell Flyes',
        category: 'Chest',
        sets: 3,
        reps: 12,
        restSec: 45,
        targetMuscle: 'Upper Chest',
        secondaryMuscles: ['Front Delts'],
        instructions: ['Maintain slight bend in elbows', 'Squeeze chest at top'],
        hologramColor: '#8b5cf6',
        modelType: 'sphere',
      },
      {
        id: 'ex_3',
        name: 'Tricep Cable Pushdowns',
        category: 'Triceps',
        sets: 4,
        reps: 12,
        restSec: 45,
        targetMuscle: 'Triceps',
        secondaryMuscles: ['Forearms'],
        instructions: ['Keep elbows pinned to sides', 'Extend fully at bottom'],
        hologramColor: '#22c55e',
        modelType: 'torus',
      },
    ],
  },
  diet: {
    dailyCalories: 2500,
    proteinG: 175,
    carbsG: 230,
    fatG: 70,
    waterTargetMl: 3500,
    waterLoggedMl: 1750,
    meals: [
      { type: 'breakfast', name: 'Oatmeal with Whey Protein & Blueberries', calories: 500, proteinG: 35, carbsG: 65, fatG: 10, ingredients: ['Oats', 'Whey', 'Blueberries'] },
      { type: 'lunch', name: 'Grilled Chicken Breast & Quinoa Bowl', calories: 700, proteinG: 55, carbsG: 70, fatG: 15, ingredients: ['Chicken', 'Quinoa', 'Olive Oil'] },
      { type: 'dinner', name: 'Steamed Salmon with Asparagus & Sweet Potato', calories: 600, proteinG: 45, carbsG: 50, fatG: 20, ingredients: ['Salmon', 'Asparagus', 'Sweet Potato'] },
      { type: 'snack', name: 'Greek Yogurt with Almonds', calories: 250, proteinG: 20, carbsG: 15, fatG: 10, ingredients: ['Greek Yogurt', 'Almonds'] },
    ],
    shoppingList: ['Oats', 'Whey Protein', 'Chicken Breast', 'Quinoa', 'Salmon', 'Asparagus', 'Greek Yogurt', 'Almonds'],
  },
  mood: 'motivated',
  currentTrack: {
    id: 'tr_1',
    title: 'Believer (Cyberpunk Remix)',
    artist: 'Imagine Dragons / Neon Synth',
    album: 'Ecosystem Beats Vol 1',
    duration: '3:24',
    mood: 'motivated',
    genre: 'Synthwave',
    country: 'Global',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    coverUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=300&q=80',
  },
  chatHistory: [
    { id: 'c1', sender: 'ai', text: 'Greeting Fighter! I am your AI Coach. How can I optimize your performance today?', timestamp: '10:00 AM' }
  ],
  isVoiceActive: false,
  isAdmin: false,
  theme: 'dark',
  showIntroVideo: false,

  // Actions
  triggerIntroVideo: () => set({ showIntroVideo: true }),
  closeIntroVideo: () => set({ showIntroVideo: false }),

  login: (email, fullName, isOnboardedStatus = true) => {
    let streakDays = 1;
    if (typeof window !== 'undefined') {
      localStorage.setItem('fitverse_onboarded', isOnboardedStatus ? 'true' : 'false');
      const lastLogin = localStorage.getItem('fitverse_last_login');
      const today = new Date().toISOString().split('T')[0];
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

      if (lastLogin === yesterday) {
        const prevStreak = parseInt(localStorage.getItem('fitverse_streak') || '1', 10);
        streakDays = prevStreak + 1;
      } else if (lastLogin === today) {
        streakDays = Math.max(1, parseInt(localStorage.getItem('fitverse_streak') || '1', 10));
      } else {
        streakDays = 1;
      }
      localStorage.setItem('fitverse_last_login', today);
      localStorage.setItem('fitverse_streak', streakDays.toString());
    }

    set((state) => ({
      isLoggedIn: true,
      isOnboarded: isOnboardedStatus,
      showIntroVideo: true,
      user: {
        ...state.user,
        email: email || state.user.email,
        fullName: fullName || state.user.fullName,
        streakDays,
      },
    }));
    fetchUserSupabaseData(email || 'warrior@fitverse.ai');
  },

  completeWorkout: () =>
    set((state) => {
      const newXp = state.user.xp + 100;
      const newCoins = state.user.coins + 50;
      const newLevel = Math.floor(newXp / 100) + 1;
      const newCompleted = (state.user.completedWorkouts || 0) + 1;

      syncXpToSupabase(newXp, newCoins);

      return {
        user: {
          ...state.user,
          xp: newXp,
          coins: newCoins,
          completedWorkouts: newCompleted,
        },
        avatar: {
          ...state.avatar,
          level: newLevel,
        },
      };
    }),

  logout: () => set({ isLoggedIn: false }),

  setOnboarded: (status) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('fitverse_onboarded', status ? 'true' : 'false');
    }
    set({ isOnboarded: status });
  },

  logWater: (amountMl) =>
    set((state) => {
      const newWater = Math.min(state.diet.waterTargetMl, state.diet.waterLoggedMl + amountMl);
      syncWaterToSupabase(newWater);
      return {
        diet: {
          ...state.diet,
          waterLoggedMl: newWater,
        },
      };
    }),

  addSteps: (steps) =>
    set((state) => {
      const updatedSteps = (state.user.dailySteps || 8450) + steps;
      return {
        user: {
          ...state.user,
          dailySteps: updatedSteps,
        },
      };
    }),

  addCaloriesBurned: (cals) =>
    set((state) => {
      if (!state.currentWorkout) return state;
      const newBurn = state.currentWorkout.caloriesBurned + cals;
      return {
        currentWorkout: {
          ...state.currentWorkout,
          caloriesBurned: newBurn,
        },
      };
    }),

  setMood: (mood) => set({ mood }),

  addXp: (amount) =>
    set((state) => {
      const newXp = state.user.xp + amount;
      const newCoins = state.user.coins + Math.floor(amount / 2);
      const newLevel = Math.floor(newXp / 100) + 1;
      
      syncXpToSupabase(newXp, newCoins);

      return {
        user: {
          ...state.user,
          xp: newXp,
          coins: newCoins,
        },
        avatar: {
          ...state.avatar,
          level: newLevel,
        },
      };
    }),

  setSelectedAvatar: (avatarId, gender, bodyType) =>
    set((state) => ({
      avatar: {
        ...state.avatar,
        selectedAvatarId: avatarId,
        gender,
        bodyType,
      },
    })),

  addExercise: (exercise) =>
    set((state) => {
      if (!state.currentWorkout) return state;
      const updatedExs = [...state.currentWorkout.exercises, exercise];
      return {
        currentWorkout: {
          ...state.currentWorkout,
          exercises: updatedExs,
          durationMinutes: state.currentWorkout.durationMinutes + 12,
          caloriesBurned: state.currentWorkout.caloriesBurned + 90,
        },
      };
    }),

  removeExercise: (id) =>
    set((state) => {
      if (!state.currentWorkout) return state;
      const updatedExs = state.currentWorkout.exercises.filter((e) => e.id !== id);
      return {
        currentWorkout: {
          ...state.currentWorkout,
          exercises: updatedExs,
          durationMinutes: Math.max(15, state.currentWorkout.durationMinutes - 12),
          caloriesBurned: Math.max(100, state.currentWorkout.caloriesBurned - 90),
        },
      };
    }),

  replaceExerciseWithAi: (id) =>
    set((state) => {
      if (!state.currentWorkout) return state;
      const targetEx = state.currentWorkout.exercises.find((e) => e.id === id);
      const activeNames = state.currentWorkout.exercises.map((e) => e.name.toLowerCase());
      
      let pool = MASTER_EXERCISE_POOL.filter((e) => !activeNames.includes(e.name.toLowerCase()));
      if (targetEx) {
        const matchingCat = pool.filter((e) => e.category === targetEx.category || e.targetMuscle.includes(targetEx.targetMuscle));
        if (matchingCat.length > 0) pool = matchingCat;
      }
      if (pool.length === 0) pool = MASTER_EXERCISE_POOL;

      const randomAiEx = pool[Math.floor(Math.random() * pool.length)];
      const updatedExs = state.currentWorkout.exercises.map((e) => (e.id === id ? { ...randomAiEx, id: `replaced_${Date.now()}` } : e));
      return {
        currentWorkout: {
          ...state.currentWorkout,
          exercises: updatedExs,
        },
      };
    }),

  regenerateWorkoutPlan: () =>
    set((state) => ({
      currentWorkout: generateCustomWorkoutPlan(state.user),
    })),

  updateUserProfile: (updates) =>
    set((state) => {
      const updatedUser = { ...state.user, ...updates };
      const newWorkout = generateCustomWorkoutPlan(updatedUser);
      const newDiet = generateCustomDietPlan(updatedUser, true);
      return {
        user: updatedUser,
        currentWorkout: newWorkout,
        diet: newDiet,
      };
    }),

  generateAiDietPlan: () =>
    set((state) => ({
      diet: generateCustomDietPlan(state.user, true),
    })),

  setCurrentTrack: (track) => set({ currentTrack: track }),

  sendChatMessage: (text) =>
    set((state) => {
      const userMsg: ChatMessage = {
        id: Date.now().toString(),
        sender: 'user',
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      return { chatHistory: [...state.chatHistory, userMsg] };
    }),

  toggleVoiceAssistant: () => set((state) => ({ isVoiceActive: !state.isVoiceActive })),

  toggleTheme: () => set((state) => ({ theme: state.theme === 'dark' ? 'light' : 'dark' })),
}));
