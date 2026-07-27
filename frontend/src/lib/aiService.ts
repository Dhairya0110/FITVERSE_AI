import { WorkoutPlan, Exercise } from '@/types';

const GROQ_API_KEY = process.env.NEXT_PUBLIC_GROQ_API_KEY || '';

export async function askGroqAICoach(
  prompt: string,
  userContext?: string,
  currentWorkout?: WorkoutPlan | null
): Promise<string> {
  const lower = prompt.toLowerCase().trim();

  // 1. Handle "today's workout" / "my workout" / "current workout" / "todays workout" / "workout plan" / "workout section" / "workout"
  const isTodayWorkoutQuery =
    lower === 'workout' ||
    lower.includes('today') ||
    lower.includes('my workout') ||
    lower.includes('current workout') ||
    lower.includes('workout plan') ||
    lower.includes('workout section') ||
    lower.includes('routine') ||
    lower.includes('schedule') ||
    lower.includes('what is my workout') ||
    lower.includes('exercises today');

  if (isTodayWorkoutQuery && currentWorkout && currentWorkout.exercises && currentWorkout.exercises.length > 0) {
    const exerciseList = currentWorkout.exercises
      .map(
        (ex: Exercise, idx: number) =>
          `  ${idx + 1}. ⚡ **${ex.name}** (${ex.targetMuscle || ex.category}) — ${ex.sets} sets × ${ex.reps} reps | Rest: ${ex.restSec}s`
      )
      .join('\n');

    return `🏋️ **Today's Active Workout Protocol: "${currentWorkout.title}"**\n\n` +
      `📊 **Summary**: ${currentWorkout.exercises.length} Exercises | ~${currentWorkout.caloriesBurned || 420} kcal | ⏱️ ${currentWorkout.durationMinutes || 45} mins (${currentWorkout.difficulty || 'Intermediate'})\n\n` +
      `**Exercises currently in your Workout Section:**\n${exerciseList}\n\n` +
      `💡 *J.A.R.V.I.S Tip: Execute with strict form, control the tempo on every repetition, and maintain rest intervals!*`;
  }

  // 2. Step-by-Step Interactive Diet Protocol Engine
  const isDietQuery =
    lower.includes('diet') ||
    lower.includes('nutrition') ||
    lower.includes('eat') ||
    lower.includes('food') ||
    lower.includes('meal') ||
    lower.includes('recipe') ||
    lower.includes('breakfast') ||
    lower.includes('lunch') ||
    lower.includes('dinner');

  // Extract user profile defaults from userContext if available
  let contextPref: string | null = null;
  if (userContext?.includes('DietPreference: Vegan')) contextPref = 'Vegan';
  else if (userContext?.includes('DietPreference: Keto')) contextPref = 'Keto';
  else if (userContext?.includes('DietPreference: Vegetarian')) contextPref = 'Vegetarian';
  else if (userContext?.includes('DietPreference: Non-Vegetarian')) contextPref = 'Non-Vegetarian';

  let contextRegion: string | null = null;
  if (userContext?.includes('Country: India')) contextRegion = 'India';
  else if (userContext?.includes('Country: Japan')) contextRegion = 'Japan';
  else if (userContext?.includes('Country: Mediterranean')) contextRegion = 'Mediterranean';
  else if (userContext?.includes('Country: Mexico') || userContext?.includes('Country: Latin America')) contextRegion = 'Latin America';
  else if (userContext?.includes('Country: USA')) contextRegion = 'USA';

  // Detect Diet Preference in prompt
  let detectedPref: string | null = null;
  if (lower.includes('vegan')) detectedPref = 'Vegan';
  else if (lower.includes('keto') || lower.includes('low carb')) detectedPref = 'Keto';
  else if (lower.includes('non veg') || lower.includes('non-veg') || lower.includes('non vegetarian') || lower.includes('chicken') || lower.includes('fish') || lower.includes('egg')) detectedPref = 'Non-Vegetarian';
  else if (lower.includes('veg') || lower.includes('vegetarian') || lower.includes('paneer')) detectedPref = 'Vegetarian';

  // Detect Region in prompt
  let detectedRegion: string | null = null;
  if (lower.includes('india') || lower.includes('indian') || lower.includes('desi') || lower.includes('punjabi') || lower.includes('south asian')) detectedRegion = 'India';
  else if (lower.includes('usa') || lower.includes('american') || lower.includes('western')) detectedRegion = 'USA';
  else if (lower.includes('japan') || lower.includes('japanese') || lower.includes('asian')) detectedRegion = 'Japan';
  else if (lower.includes('mediterranean') || lower.includes('greek')) detectedRegion = 'Mediterranean';
  else if (lower.includes('latin') || lower.includes('mexico') || lower.includes('mexican')) detectedRegion = 'Latin America';

  // Use context defaults if prompt specified one dimension or region directly
  if (!detectedPref && (detectedRegion || isDietQuery)) {
    detectedPref = contextPref || 'Non-Vegetarian';
  }
  if (!detectedRegion && (detectedPref || isDietQuery)) {
    detectedRegion = contextRegion || 'India';
  }

  if (isDietQuery || (detectedPref && !isTodayWorkoutQuery) || (detectedRegion && !isTodayWorkoutQuery)) {
    // Both Diet Preference & Region identified -> Output the Appropriate Customized Diet Plan!
    if (detectedPref === 'Vegan') {
      if (detectedRegion === 'India') {
        return `🥗 **J.A.R.V.I.S Appropriate Vegan Diet Plan (India)**\n\n` +
          `🔥 **Daily Targets**: ~2350 kcal | Protein: 165g | Carbs: 240g | Fat: 65g\n\n` +
          `• 🌅 **Breakfast**: Moong Dal & Tofu Scramble with Multigrain Roti\n` +
          `  *Macros*: 450 kcal | 30g Protein | 50g Carbs | 12g Fat\n` +
          `• ☀️ **Lunch**: Chana Masala with Brown Rice & Cucumber Salad\n` +
          `  *Macros*: 650 kcal | 38g Protein | 80g Carbs | 14g Fat\n` +
          `• 🌙 **Dinner**: Soya Chunk Curry & Quinoa Bowl\n` +
          `  *Macros*: 580 kcal | 48g Protein | 55g Carbs | 15g Fat\n` +
          `• 🍏 **Snack**: Roasted Makhana & Pea Protein Shake with Almond Milk\n` +
          `  *Macros*: 250 kcal | 25g Protein | 22g Carbs | 5g Fat\n\n` +
          `💡 *J.A.R.V.I.S Tip: Drink 3.5L of water and take Vitamin B12 / Omega-3 supplementation!*`;
      }
      return `🥗 **J.A.R.V.I.S Appropriate Vegan Diet Plan (${detectedRegion})**\n\n` +
        `🔥 **Daily Targets**: ~2300 kcal | Protein: 160g | Carbs: 235g | Fat: 60g\n\n` +
        `• 🌅 **Breakfast**: High-Protein Oatmeal with Plant Protein Powder, Chia & Berries\n` +
        `  *Macros*: 480 kcal | 35g Protein | 58g Carbs | 12g Fat\n` +
        `• ☀️ **Lunch**: Grilled Tofu & Quinoa Power Bowl with Tahini Dressing\n` +
        `  *Macros*: 670 kcal | 42g Protein | 72g Carbs | 18g Fat\n` +
        `• 🌙 **Dinner**: Tempeh & Lentil Bolognese with Whole Wheat Pasta\n` +
        `  *Macros*: 610 kcal | 46g Protein | 65g Carbs | 15g Fat\n` +
        `• 🍏 **Snack**: Almond Milk Yogurt with Roasted Pumpkin Seeds\n` +
        `  *Macros*: 240 kcal | 20g Protein | 18g Carbs | 10g Fat\n\n` +
        `💡 *J.A.R.V.I.S Tip: Ensure adequate lysine and leucine intake via plant protein blends!*`;
    }

    if (detectedPref === 'Vegetarian') {
      if (detectedRegion === 'India') {
        return `🥗 **J.A.R.V.I.S Appropriate Vegetarian Diet Plan (India)**\n\n` +
          `🔥 **Daily Targets**: ~2400 kcal | Protein: 175g | Carbs: 230g | Fat: 68g\n\n` +
          `• 🌅 **Breakfast**: Paneer Bhurji & Multigrain Toast with Masala Chai\n` +
          `  *Macros*: 480 kcal | 34g Protein | 42g Carbs | 18g Fat\n` +
          `• ☀️ **Lunch**: Dal Tadka, Paneer Salad & Multigrain Roti with Curd\n` +
          `  *Macros*: 670 kcal | 42g Protein | 72g Carbs | 20g Fat\n` +
          `• 🌙 **Dinner**: Palak Paneer with Brown Rice & Sprouted Moong\n` +
          `  *Macros*: 600 kcal | 45g Protein | 52g Carbs | 18g Fat\n` +
          `• 🍏 **Snack**: Roasted Makhana & Scoop of Whey Protein Shake\n` +
          `  *Macros*: 260 kcal | 28g Protein | 18g Carbs | 6g Fat\n\n` +
          `💡 *J.A.R.V.I.S Tip: Pair Vitamin C-rich foods (lemon juice) with dal & paneer for maximum iron absorption!*`;
      }
      return `🥗 **J.A.R.V.I.S Appropriate Vegetarian Diet Plan (${detectedRegion})**\n\n` +
        `🔥 **Daily Targets**: ~2350 kcal | Protein: 170g | Carbs: 225g | Fat: 65g\n\n` +
        `• 🌅 **Breakfast**: Egg White & Spinach Omelette with Whole Grain Toast\n` +
        `  *Macros*: 470 kcal | 36g Protein | 40g Carbs | 14g Fat\n` +
        `• ☀️ **Lunch**: Cottage Cheese & Quinoa Mediterranean Bowl\n` +
        `  *Macros*: 660 kcal | 44g Protein | 65g Carbs | 16g Fat\n` +
        `• 🌙 **Dinner**: Lentil & Sweet Potato Bake with Greek Yogurt Dressing\n` +
        `  *Macros*: 600 kcal | 42g Protein | 58g Carbs | 14g Fat\n` +
        `• 🍏 **Snack**: Whey Protein Shake with Peanut Butter & Oats\n` +
        `  *Macros*: 270 kcal | 30g Protein | 20g Carbs | 8g Fat\n\n` +
        `💡 *J.A.R.V.I.S Tip: Keep your hydration above 3.5L to optimize digestion!*`;
    }

    if (detectedPref === 'Non-Vegetarian') {
      if (detectedRegion === 'India') {
        return `🍗 **J.A.R.V.I.S Appropriate Non-Vegetarian Diet Plan (India)**\n\n` +
          `🔥 **Daily Targets**: ~2450 kcal | Protein: 185g | Carbs: 220g | Fat: 65g\n\n` +
          `• 🌅 **Breakfast**: Masala Egg White Omelette with Multigrain Toast\n` +
          `  *Macros*: 460 kcal | 36g Protein | 40g Carbs | 12g Fat\n` +
          `• ☀️ **Lunch**: Tandoori Chicken Breast with Brown Rice & Cucumber Raita\n` +
          `  *Macros*: 680 kcal | 54g Protein | 60g Carbs | 15g Fat\n` +
          `• 🌙 **Dinner**: Fish Curry (Rohu / Salmon) with Quinoa & Steamed Broccoli\n` +
          `  *Macros*: 590 kcal | 48g Protein | 42g Carbs | 16g Fat\n` +
          `• 🍏 **Snack**: Roasted Makhana & Scoop of Whey Protein Shake\n` +
          `  *Macros*: 250 kcal | 28g Protein | 16g Carbs | 5g Fat\n\n` +
          `💡 *J.A.R.V.I.S Tip: Use minimal oil for Tandoori marinades to keep lean protein purity!*`;
      }
      return `🍗 **J.A.R.V.I.S Appropriate Non-Vegetarian Diet Plan (${detectedRegion})**\n\n` +
        `🔥 **Daily Targets**: ~2480 kcal | Protein: 190g | Carbs: 215g | Fat: 70g\n\n` +
        `• 🌅 **Breakfast**: Oatmeal Bowl with Whey Protein, Egg Whites & Berries\n` +
        `  *Macros*: 500 kcal | 40g Protein | 55g Carbs | 10g Fat\n` +
        `• ☀️ **Lunch**: Grilled Chicken Breast with Quinoa & Avocado Bowl\n` +
        `  *Macros*: 700 kcal | 58g Protein | 60g Carbs | 18g Fat\n` +
        `• 🌙 **Dinner**: Pan-Seared Atlantic Salmon with Asparagus & Sweet Potato\n` +
        `  *Macros*: 620 kcal | 48g Protein | 45g Carbs | 22g Fat\n` +
        `• 🍏 **Snack**: Greek Yogurt with Roasted Almonds\n` +
        `  *Macros*: 250 kcal | 24g Protein | 14g Carbs | 9g Fat\n\n` +
        `💡 *J.A.R.V.I.S Tip: Salmon provides rich Omega-3 fatty acids for muscle joint recovery!*`;
    }

    if (detectedPref === 'Keto') {
      return `🥑 **J.A.R.V.I.S Appropriate Keto / Low-Carb Diet Plan (${detectedRegion})**\n\n` +
        `🔥 **Daily Targets**: ~2200 kcal | Protein: 150g | Carbs: 25g | Fat: 165g\n\n` +
        `• 🌅 **Breakfast**: Avocado & Bacon / Cheese Omelette in Olive Oil\n` +
        `  *Macros*: 520 kcal | 34g Protein | 6g Carbs | 40g Fat\n` +
        `• ☀️ **Lunch**: Grilled Chicken Breast / Paneer Caesar Salad (Extra Virgin Olive Oil)\n` +
        `  *Macros*: 680 kcal | 52g Protein | 8g Carbs | 48g Fat\n` +
        `• 🌙 **Dinner**: Pan-Seared Salmon / Tofu with Garlic Butter Asparagus\n` +
        `  *Macros*: 620 kcal | 48g Protein | 7g Carbs | 44g Fat\n` +
        `• 🍏 **Snack**: Walnuts, Macadamias & String Cheese\n` +
        `  *Macros*: 280 kcal | 14g Protein | 4g Carbs | 24g Fat\n\n` +
        `💡 *J.A.R.V.I.S Tip: Keep net carbs strictly under 30g to maintain nutritional ketosis!*`;
    }
  }

  // 3. Handle specific muscle group queries (chest, back, legs, shoulders, arms, biceps, triceps, abs/core, cardio)
  const muscleKeywords = [
    { keys: ['chest', 'bench', 'pecs'], muscle: 'Chest', name: 'Chest' },
    { keys: ['back', 'lats', 'pull', 'row', 'traps'], muscle: 'Back', name: 'Back' },
    { keys: ['leg', 'squat', 'quad', 'hamstring', 'glute', 'calf'], muscle: 'Legs', name: 'Legs & Lower Body' },
    { keys: ['shoulder', 'delt', 'overhead press'], muscle: 'Shoulder', name: 'Shoulders & Delts' },
    { keys: ['arm', 'bicep', 'tricep', 'curl', 'pushdown'], muscle: 'Arm', name: 'Arms (Biceps & Triceps)' },
    { keys: ['abs', 'core', 'plank', 'crunch'], muscle: 'Core', name: 'Abs & Core' },
    { keys: ['cardio', 'hiit', 'stamina', 'sprint'], muscle: 'Cardio', name: 'Cardio & HIIT' },
  ];

  for (const group of muscleKeywords) {
    const isMatchingGroup = group.keys.some((k) => lower.includes(k));
    if (isMatchingGroup) {
      // Check if current workout section has exercises matching this body part
      const matchingExs = currentWorkout?.exercises?.filter((ex) => {
        const cat = (ex.category || '').toLowerCase();
        const target = (ex.targetMuscle || '').toLowerCase();
        const name = (ex.name || '').toLowerCase();
        return group.keys.some((k) => cat.includes(k) || target.includes(k) || name.includes(k));
      });

      if (matchingExs && matchingExs.length > 0) {
        const listStr = matchingExs
          .map(
            (ex, i) =>
              `  ${i + 1}. 🔹 **${ex.name}**: ${ex.sets} sets × ${ex.reps} reps (Target: ${ex.targetMuscle})\n     *Instruction*: ${ex.instructions?.join('. ') || 'Focus on controlled form.'}`
          )
          .join('\n');

        return `💪 **Active Workout Section Exercises for ${group.name}:**\n\n` +
          `Your active plan **"${currentWorkout?.title}"** includes the following ${group.name} exercises:\n` +
          `${listStr}\n\n` +
          `💡 *Form Focus: Retract your shoulders, keep core engaged, and drive through full range of motion!*`;
      }

      // If body part is not in current active workout, provide targeted specific protocol
      if (group.name.includes('Chest')) {
        return `🏋️ **${group.name} Protocol** (Note: Not currently in today's active ${currentWorkout?.title || 'plan'}):\n\n` +
          `  1. 🔹 **Incline Dumbbell Press**: 4 sets × 8-10 reps (Rest: 60s) — Target: Upper Chest\n` +
          `  2. 🔹 **Barbell Flat Bench Press**: 4 sets × 8 reps (Rest: 90s) — Target: Mid Chest\n` +
          `  3. 🔹 **Low-to-High Cable Flyes**: 3 sets × 12 reps (Rest: 45s) — Target: Inner/Upper Chest\n\n` +
          `💡 *Tip: Keep scapula retracted and push with controlled tension!*`;
      }
      if (group.name.includes('Legs')) {
        return `🦵 **${group.name} Protocol** (Note: Not currently in today's active ${currentWorkout?.title || 'plan'}):\n\n` +
          `  1. 🔹 **Barbell Back Squats**: 4 sets × 8 reps (Rest: 90s) — Target: Quads & Glutes\n` +
          `  2. 🔹 **Romanian Deadlifts**: 4 sets × 10 reps (Rest: 60s) — Target: Hamstrings & Lower Back\n` +
          `  3. 🔹 **Bulgarian Split Squats**: 3 sets × 12 reps (Rest: 45s) — Target: Quad Isolation\n\n` +
          `💡 *Tip: Drive through heels and maintain a neutral spine throughout the lift.*`;
      }
      if (group.name.includes('Back')) {
        return `💪 **${group.name} Protocol** (Note: Not currently in today's active ${currentWorkout?.title || 'plan'}):\n\n` +
          `  1. 🔹 **Lat Pulldowns / Pull-ups**: 4 sets × 8-10 reps (Rest: 60s) — Target: Lat Width\n` +
          `  2. 🔹 **Bent-Over Barbell Rows**: 4 sets × 8 reps (Rest: 60s) — Target: Back Thickness\n` +
          `  3. 🔹 **Seated Cable Face Pulls**: 3 sets × 15 reps (Rest: 45s) — Target: Rear Delts & Upper Back\n\n` +
          `💡 *Tip: Pull with your elbows and squeeze shoulder blades together at peak contraction.*`;
      }
      if (group.name.includes('Shoulders')) {
        return `🛡️ **${group.name} Protocol**:\n\n` +
          `  1. 🔹 **Overhead Dumbbell Press**: 4 sets × 8-10 reps (Rest: 60s) — Target: Front/Side Delts\n` +
          `  2. 🔹 **Lean-Away Cable Lateral Raises**: 4 sets × 12-15 reps (Rest: 45s) — Target: Side Delts\n` +
          `  3. 🔹 **Reverse Pec Deck Flyes**: 3 sets × 15 reps (Rest: 45s) — Target: Rear Delts\n\n` +
          `💡 *Tip: Control the weight on the way down and avoid shrugging your traps.*`;
      }
      if (group.name.includes('Arms')) {
        return `⚡ **${group.name} Protocol**:\n\n` +
          `  1. 🔹 **Tricep Cable Pushdowns**: 4 sets × 12 reps (Rest: 45s) — Target: Tricep Lateral Head\n` +
          `  2. 🔹 **Incline Dumbbell Bicep Curls**: 4 sets × 10 reps (Rest: 45s) — Target: Bicep Long Head\n` +
          `  3. 🔹 **Overhead Rope Extensions**: 3 sets × 12 reps (Rest: 45s) — Target: Tricep Long Head\n\n` +
          `💡 *Tip: Lock your elbows in place to isolate the muscle completely.*`;
      }
      if (group.name.includes('Abs')) {
        return `🔥 **${group.name} Protocol**:\n\n` +
          `  1. 🔹 **Hanging Leg Raises**: 4 sets × 12-15 reps (Rest: 30s) — Target: Lower Abs\n` +
          `  2. 🔹 **Kneeling Cable Crunches**: 4 sets × 15 reps (Rest: 30s) — Target: Upper Abs\n` +
          `  3. 🔹 **Plank to Push-Up Taps**: 3 sets × 60 seconds (Rest: 30s) — Target: Deep Core Stability\n\n` +
          `💡 *Tip: Exhale forcefully on contraction to fully engage the rectus abdominis.*`;
      }
      if (group.name.includes('Cardio')) {
        return `🏃 **${group.name} Protocol**:\n\n` +
          `  1. 🔹 **Sprint Intervals**: 10 rounds of 30s max sprint / 45s walk (Rest: 45s)\n` +
          `  2. 🔹 **Jump Rope Double-Unders**: 4 sets × 2 minutes continuous\n` +
          `  3. 🔹 **Incline Treadmill Walk**: 15 minutes at 12% incline, 4.5 km/h\n\n` +
          `💡 *Tip: Keep your heart rate elevated to boost metabolic conditioning (EPOC).*`;
      }
    }
  }

  // 4. Try Groq API if API Key is available
  if (GROQ_API_KEY) {
    try {
      const workoutContextStr = currentWorkout
        ? `Active Workout: ${currentWorkout.title}, Exercises: ${currentWorkout.exercises.map((e) => `${e.name} (${e.targetMuscle}) ${e.sets}x${e.reps}`).join(', ')}`
        : 'No active workout plan loaded.';

      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: `You are FitVerse AI Coach J.A.R.V.I.S, an elite ultra-intelligent fitness & nutrition mentor. Answer the user's specific query concisely and accurately using bullet points. Active User Workout Data: ${workoutContextStr}. User Context: ${userContext || 'Intermediate athlete.'}`,
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
          temperature: 0.7,
          max_tokens: 450,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const content = data.choices?.[0]?.message?.content;
        if (content) return content;
      }
    } catch (error) {
      console.warn('Groq API Call error, using fallback:', error);
    }
  }

  // 5. Default Fallback Answers
  if (lower.includes('water') || lower.includes('hydration') || lower.includes('sleep') || lower.includes('recover') || lower.includes('sore') || lower.includes('tired')) {
    return `💧 **Hydration & Recovery Protocol**:\nDrink 3.5 to 4 Liters of water today. Aim for 7.5 - 9 hours of quality deep sleep to stimulate natural growth hormone secretion and reduce muscle soreness.`;
  }
  if (lower.includes('hype') || lower.includes('motivation') || lower.includes('iron man') || lower.includes('quote') || lower.includes('boost')) {
    return `⚡ **J.A.R.V.I.S Hype Protocol**:\n"The only limit is the one you set in your mind." Power at 100%! Step into the arena, execute every rep with discipline, and dominate today!`;
  }

  return `🤖 **J.A.R.V.I.S Analysis for "${prompt}"**:\nFor optimal fitness output, maintain progressive overload on your active workout plan ("${currentWorkout?.title || 'Hypertrophy Protocol'}"), hit your daily protein targets, and log your hydration. Let's crush today's goals!`;
}
