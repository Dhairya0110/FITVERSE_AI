import { UserProfile, HealthMetrics } from '@/types';

/**
 * Calculates scientifically accurate health metrics using standard formulas:
 * - BMI: weight (kg) / (height (m))^2
 * - BMR: Mifflin-St Jeor Equation
 *   Male: (10 * weight) + (6.25 * height) - (5 * age) + 5
 *   Female: (10 * weight) + (6.25 * height) - (5 * age) - 161
 * - TDEE: BMR * Activity Multiplier
 * - Macros: Goal-based protein (1.8-2.2g/kg), Fats (25% of TDEE), Carbs (remainder)
 * - Daily Water: 35ml per kg of body weight + Activity bonus
 */
export function calculateHealthMetrics(user: UserProfile): HealthMetrics {
  const heightM = user.heightCm / 100;
  const bmi = parseFloat((user.weightKg / (heightM * heightM)).toFixed(1));

  let bmiCategory = 'Normal Weight';
  if (bmi < 18.5) bmiCategory = 'Underweight';
  else if (bmi >= 25 && bmi < 29.9) bmiCategory = 'Overweight';
  else if (bmi >= 30) bmiCategory = 'Obese';

  // Mifflin-St Jeor BMR
  let bmr = (10 * user.weightKg) + (6.25 * user.heightCm) - (5 * user.age);
  if (user.gender === 'male') {
    bmr += 5;
  } else {
    bmr -= 161;
  }
  bmr = Math.round(bmr);

  // TDEE Multipliers
  const activityFactors = {
    sedentary: 1.2,
    light: 1.375,
    moderate: 1.55,
    active: 1.725,
    very_active: 1.9,
  };
  const factor = activityFactors[user.activityLevel] || 1.375;
  const tdee = Math.round(bmr * factor);

  // Calorie target based on goal
  let targetCalories = tdee;
  if (user.goal === 'fat_loss') targetCalories = Math.round(tdee - 500);
  else if (user.goal === 'muscle_gain') targetCalories = Math.round(tdee + 300);

  // Protein calculation (1.8g to 2.2g per kg based on goal)
  const proteinMultiplier = user.goal === 'muscle_gain' ? 2.2 : user.goal === 'fat_loss' ? 2.0 : 1.8;
  const proteinGrams = Math.round(user.weightKg * proteinMultiplier);
  const proteinCalories = proteinGrams * 4;

  // Fat calculation (25% of target calories)
  const fatCalories = targetCalories * 0.25;
  const fatGrams = Math.round(fatCalories / 9);

  // Remaining calories for Carbs
  const carbCalories = Math.max(0, targetCalories - (proteinCalories + fatCalories));
  const carbsGrams = Math.round(carbCalories / 4);

  // Water requirement (35ml per kg)
  const dailyWaterMl = Math.round(user.weightKg * 35 + 500);

  return {
    bmi,
    bmiCategory,
    bmr,
    tdee,
    dailyCaloriesTarget: targetCalories,
    proteinGrams,
    carbsGrams,
    fatGrams,
    dailyWaterMl,
  };
}
