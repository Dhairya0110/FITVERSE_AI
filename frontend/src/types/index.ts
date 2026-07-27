export type Gender = 'male' | 'female';

export type AvatarBodyType = 'skinny' | 'lean' | 'fit' | 'plus';

export interface AvatarOption {
  id: string;
  gender: Gender;
  bodyType: AvatarBodyType;
  name: string;
  description: string;
  avatarUrl: string;
  colorHex: string;
}

export type FitnessGoal = 'fat_loss' | 'muscle_gain' | 'maintenance' | 'endurance';

export type FitnessLevel = 'beginner' | 'intermediate' | 'advanced';

export type MoodType = 'sad' | 'happy' | 'angry' | 'tired' | 'motivated' | 'lazy';

export interface UserProfile {
  id: string;
  username: string;
  email: string;
  fullName: string;
  age: number;
  gender: Gender;
  heightCm: number;
  weightKg: number;
  targetWeightKg: number;
  bodyFatPercentage: number;
  goal: FitnessGoal;
  level: FitnessLevel;
  activityLevel: 'sedentary' | 'light' | 'moderate' | 'active' | 'very_active';
  country: string;
  allergies: string[];
  dietaryPreference: string;
  budget: 'low' | 'medium' | 'high';
  xp: number;
  coins: number;
  streakDays: number;
  dailySteps?: number;
  dailyStepsTarget?: number;
}

export interface HealthMetrics {
  bmi: number;
  bmiCategory: string;
  bmr: number;
  tdee: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  dailyWaterMl: number;
  dailyCaloriesTarget: number;
}

export interface AvatarState {
  selectedAvatarId: string;
  gender: Gender;
  bodyType: AvatarBodyType;
  level: number;
  accessories: string[];
  evolutionStage: string;
}

export interface Exercise {
  id: string;
  name: string;
  category: string;
  sets: number;
  reps: number;
  restSec: number;
  targetMuscle: string;
  secondaryMuscles?: string[];
  instructions: string[];
  hologramColor: string;
  modelType: 'cylinder' | 'box' | 'sphere' | 'torus';
}

export interface WorkoutPlan {
  id: string;
  title: string;
  difficulty: FitnessLevel;
  durationMinutes: number;
  caloriesBurned: number;
  exercises: Exercise[];
}

export interface Meal {
  type: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  name: string;
  calories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
  ingredients: string[];
  imageUrl?: string;
  youtubeQuery?: string;
  prepTimeMins?: number;
  difficulty?: 'Easy' | 'Intermediate' | 'Advanced';
  cookingSteps?: string[];
  alternativeRecipes?: { name: string; calories: number; youtubeQuery: string }[];
}

export interface DietPlan {
  dailyCalories: number;
  proteinG: number;
  carbsG: number;
  fatG: number;
  waterTargetMl: number;
  waterLoggedMl: number;
  meals: Meal[];
  shoppingList: string[];
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

export interface MusicTrack {
  id: string;
  title: string;
  artist: string;
  album: string;
  duration: string;
  mood: MoodType;
  genre: string;
  country: string;
  audioUrl: string;
  coverUrl: string;
}
