import { supabase } from '@/lib/supabaseClient';
import { useFitStore } from '@/store/useFitStore';

/**
 * FitVerse Real-Time Supabase Sync Service
 * Fetches and persists live user profile, daily metrics, water intake,
 * XP levels, and current workout state directly with Supabase Cloud DB.
 */

export async function fetchUserSupabaseData(userEmail: string) {
  try {
    // 1. Fetch Profile Record
    const { data: profile, error: profileErr } = await supabase
      .from('profiles')
      .select('*')
      .eq('email', userEmail)
      .single();

    if (profileErr) {
      console.warn('Supabase Profile Fetch Notice (using local active store):', profileErr.message);
      return;
    }

    if (profile) {
      useFitStore.setState((state) => ({
        user: {
          ...state.user,
          fullName: profile.full_name || state.user.fullName,
          age: profile.age || state.user.age,
          weightKg: profile.weight_kg || state.user.weightKg,
          targetWeightKg: profile.target_weight_kg || state.user.targetWeightKg,
          xp: profile.xp ?? state.user.xp,
          coins: profile.coins ?? state.user.coins,
          streakDays: profile.streak_days ?? state.user.streakDays,
        },
      }));
    }

    // 2. Fetch Diet & Hydration Data
    const { data: dietData } = await supabase
      .from('diet_plans')
      .select('*')
      .eq('user_id', profile?.id)
      .single();

    if (dietData) {
      useFitStore.setState((state) => ({
        diet: {
          ...state.diet,
          waterLoggedMl: dietData.water_logged_ml ?? state.diet.waterLoggedMl,
          waterTargetMl: dietData.water_target_ml ?? state.diet.waterTargetMl,
          dailyCalories: dietData.daily_calories ?? state.diet.dailyCalories,
        },
      }));
    }
  } catch (err) {
    console.error('Supabase Sync Error:', err);
  }
}

export async function syncWaterToSupabase(newWaterLoggedMl: number) {
  try {
    const activeUser = useFitStore.getState().user;
    const { data: profile } = await supabase
      .from('profiles')
      .select('id')
      .eq('email', activeUser.email)
      .single();

    if (profile?.id) {
      await supabase
        .from('diet_plans')
        .update({ water_logged_ml: newWaterLoggedMl, updated_at: new Date().toISOString() })
        .eq('user_id', profile.id);
    }
  } catch (err) {
    console.warn('Supabase Water Sync Fallback:', err);
  }
}

export async function syncXpToSupabase(newXp: number, newCoins?: number) {
  try {
    const activeUser = useFitStore.getState().user;
    await supabase
      .from('profiles')
      .update({
        xp: newXp,
        coins: newCoins ?? activeUser.coins,
        updated_at: new Date().toISOString(),
      })
      .eq('email', activeUser.email);
  } catch (err) {
    console.warn('Supabase XP Sync Fallback:', err);
  }
}
