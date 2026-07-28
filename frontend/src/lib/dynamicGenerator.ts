import { UserProfile, WorkoutPlan, DietPlan, Exercise, Meal } from '@/types';

/**
 * FitVerse AI Master Exercise Database & Dynamic Engine
 */

export const MASTER_EXERCISE_POOL: Exercise[] = [
  // CHEST
  { id: 'ex_c1', name: 'Barbell Flat Bench Press', category: 'Chest', sets: 4, reps: 10, restSec: 60, targetMuscle: 'Chest', secondaryMuscles: ['Triceps', 'Front Delts'], instructions: ['Retract shoulder blades tightly', 'Lower bar with control to sternum'], hologramColor: '#00e5ff', modelType: 'cylinder' },
  { id: 'ex_c2', name: 'Incline Dumbbell Press', category: 'Chest', sets: 4, reps: 10, restSec: 60, targetMuscle: 'Upper Chest', secondaryMuscles: ['Front Delts'], instructions: ['Set bench to 30 degrees', 'Press dumbbells in an arch overhead'], hologramColor: '#3b82f6', modelType: 'box' },
  { id: 'ex_c3', name: 'Low-to-High Cable Flyes', category: 'Chest', sets: 3, reps: 12, restSec: 45, targetMuscle: 'Chest', secondaryMuscles: ['Front Delts'], instructions: ['Keep slight elbow bend', 'Squeeze chest at top of motion'], hologramColor: '#8b5cf6', modelType: 'sphere' },
  { id: 'ex_c4', name: 'Weighted Chest Dips', category: 'Chest', sets: 3, reps: 10, restSec: 60, targetMuscle: 'Lower Chest', secondaryMuscles: ['Triceps'], instructions: ['Lean forward slightly', 'Lower until upper arms are parallel'], hologramColor: '#06b6d4', modelType: 'torus' },

  // LEGS
  { id: 'ex_l1', name: 'Barbell Back Squats', category: 'Legs', sets: 4, reps: 8, restSec: 90, targetMuscle: 'Quadriceps & Glutes', secondaryMuscles: ['Hamstrings'], instructions: ['Keep chest high and spine neutral', 'Squat until thighs break parallel'], hologramColor: '#7c3aed', modelType: 'torus' },
  { id: 'ex_l2', name: 'Barbell Romanian Deadlifts', category: 'Legs', sets: 4, reps: 10, restSec: 75, targetMuscle: 'Hamstrings & Glutes', secondaryMuscles: ['Lower Back'], instructions: ['Hinge hips backward with soft knees', 'Lower bar along shins to feel hamstring stretch'], hologramColor: '#22c55e', modelType: 'box' },
  { id: 'ex_l3', name: 'Bulgarian Split Squats', category: 'Legs', sets: 4, reps: 12, restSec: 60, targetMuscle: 'Quadriceps', secondaryMuscles: ['Glutes'], instructions: ['Place rear foot on bench', 'Lower until front thigh is parallel to floor'], hologramColor: '#10b981', modelType: 'cylinder' },
  { id: 'ex_l4', name: '45-Degree Leg Press', category: 'Legs', sets: 4, reps: 12, restSec: 60, targetMuscle: 'Quadriceps', secondaryMuscles: ['Glutes'], instructions: ['Keep feet shoulder-width on sled', 'Push through heels without locking knees'], hologramColor: '#a855f7', modelType: 'sphere' },

  // BACK
  { id: 'ex_b1', name: 'Chest-Supported Dumbbell Rows', category: 'Back', sets: 4, reps: 10, restSec: 60, targetMuscle: 'Mid-Back & Lats', secondaryMuscles: ['Biceps'], instructions: ['Pull dumbbells up to hips', 'Squeeze shoulder blades together at peak'], hologramColor: '#ec4899', modelType: 'box' },
  { id: 'ex_b2', name: 'Lat Pulldowns (Wide Grip)', category: 'Back', sets: 4, reps: 12, restSec: 60, targetMuscle: 'Latissimus Dorsi', secondaryMuscles: ['Biceps'], instructions: ['Pull bar down to upper chest', 'Drive elbows down and back'], hologramColor: '#00e5ff', modelType: 'sphere' },
  { id: 'ex_b3', name: 'Overhand Barbell Bent-Over Rows', category: 'Back', sets: 4, reps: 8, restSec: 75, targetMuscle: 'Lats & Rhomboids', secondaryMuscles: ['Rear Delts'], instructions: ['Hinge torso to 45 degrees', 'Pull bar to lower ribcage'], hologramColor: '#f59e0b', modelType: 'cylinder' },
  { id: 'ex_b4', name: 'Seated Cable Face Pulls', category: 'Back', sets: 3, reps: 15, restSec: 45, targetMuscle: 'Rear Delts & Upper Back', secondaryMuscles: ['Rotator Cuff'], instructions: ['Pull rope toward forehead', 'Separate hands at peak contraction'], hologramColor: '#6366f1', modelType: 'torus' },

  // SHOULDERS
  { id: 'ex_s1', name: 'Overhead Barbell Military Press', category: 'Shoulders', sets: 4, reps: 8, restSec: 75, targetMuscle: 'Deltoids', secondaryMuscles: ['Triceps'], instructions: ['Press bar overhead from collarbone', 'Lock arms out over center of gravity'], hologramColor: '#f97316', modelType: 'cylinder' },
  { id: 'ex_s2', name: 'Lean-Away Cable Lateral Raises', category: 'Shoulders', sets: 4, reps: 15, restSec: 45, targetMuscle: 'Side Delts', secondaryMuscles: ['Traps'], instructions: ['Lean slightly off pole', 'Raise cable out to side with lead elbow'], hologramColor: '#06b6d4', modelType: 'sphere' },

  // ARMS
  { id: 'ex_a1', name: 'Incline Dumbbell Bicep Curls', category: 'Arms', sets: 4, reps: 10, restSec: 45, targetMuscle: 'Biceps', secondaryMuscles: ['Forearms'], instructions: ['Lie on incline bench', 'Curl dumbbells without moving upper arm'], hologramColor: '#3b82f6', modelType: 'cylinder' },
  { id: 'ex_a2', name: 'Tricep Cable Pushdowns', category: 'Arms', sets: 4, reps: 12, restSec: 45, targetMuscle: 'Triceps', secondaryMuscles: ['Forearms'], instructions: ['Keep elbows pinned to ribcage', 'Extend bar downwards fully'], hologramColor: '#10b981', modelType: 'torus' },

  // CARDIO / FAT LOSS
  { id: 'ex_f1', name: 'Jump Squats & Explosive Depth', category: 'Cardio', sets: 4, reps: 15, restSec: 30, targetMuscle: 'Quadriceps & Cardio', secondaryMuscles: ['Calves'], instructions: ['Squat deep with back straight', 'Explode upward into jump'], hologramColor: '#ef4444', modelType: 'cylinder' },
  { id: 'ex_f2', name: 'Burpees with Pushup', category: 'Cardio', sets: 4, reps: 12, restSec: 40, targetMuscle: 'Full Body', secondaryMuscles: ['Chest', 'Core'], instructions: ['Drop to plank position', 'Perform pushup then jump'], hologramColor: '#00e5ff', modelType: 'box' },
  { id: 'ex_f3', name: 'Mountain Climbers', category: 'Core', sets: 4, reps: 30, restSec: 30, targetMuscle: 'Abs & Core', secondaryMuscles: ['Shoulders'], instructions: ['Maintain tight plank core', 'Drive knees rapidly toward chest'], hologramColor: '#22c55e', modelType: 'sphere' },
];

function shuffleArray<T>(arr: T[]): T[] {
  const newArr = [...arr];
  for (let i = newArr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }
  return newArr;
}

export function generateCustomWorkoutPlan(user: UserProfile): WorkoutPlan {
  const { goal } = user;

  let title = 'Hypertrophy Mass & Strength Protocol';
  let exercises: Exercise[] = [];
  let duration = 45;
  let caloriesBurned = 420;

  if (goal === 'fat_loss') {
    title = 'High-Intensity Metabolic Fat Shred';
    duration = 35;
    caloriesBurned = 550;
    const cardioPool = MASTER_EXERCISE_POOL.filter((e) => e.category === 'Cardio' || e.category === 'Core' || e.category === 'Legs');
    const shuffled = shuffleArray(cardioPool);
    exercises = shuffled.slice(0, 4).map((ex, i) => ({ ...ex, id: `fl_${Date.now()}_${i}` }));
  } else if (goal === 'muscle_gain') {
    title = 'Hypertrophy Mass & Strength Protocol';
    duration = 50;
    caloriesBurned = 460;
    
    const chestEx = shuffleArray(MASTER_EXERCISE_POOL.filter((e) => e.category === 'Chest'))[0];
    const backEx = shuffleArray(MASTER_EXERCISE_POOL.filter((e) => e.category === 'Back'))[0];
    const legEx = shuffleArray(MASTER_EXERCISE_POOL.filter((e) => e.category === 'Legs'))[0];
    const shoulderEx = shuffleArray(MASTER_EXERCISE_POOL.filter((e) => e.category === 'Shoulders' || e.category === 'Arms'))[0];

    const selected = [chestEx, legEx, backEx, shoulderEx].filter(Boolean);
    exercises = selected.map((ex, i) => ({ ...ex, id: `mg_${Date.now()}_${i}` }));
  } else {
    title = 'Functional Recomposition & Core Matrix';
    duration = 40;
    caloriesBurned = 380;

    const recompPool = shuffleArray(MASTER_EXERCISE_POOL);
    exercises = recompPool.slice(0, 4).map((ex, i) => ({ ...ex, id: `mc_${Date.now()}_${i}` }));
  }

  return {
    id: `custom_wo_${Date.now()}`,
    title,
    difficulty: user.level || 'intermediate',
    durationMinutes: duration,
    caloriesBurned,
    exercises,
  };
}

function attachRecipeMetadata(meal: Meal): Meal {
  const name = meal.name;
  const youtubeQuery = `${name} healthy recipe cooking tutorial`;
  
  let prepTimeMins = 15;
  let difficulty: 'Easy' | 'Intermediate' | 'Advanced' = 'Easy';
  let cookingSteps: string[] = [
    'Prepare and measure all fresh ingredients according to macro targets.',
    'Sauté or sear on medium heat with minimal healthy cold-pressed oil.',
    'Season with organic herbs, turmeric, and sea salt to optimize nutrient absorption.',
    'Serve fresh and enjoy your high-performance metabolic nutrition.'
  ];

  if (name.toLowerCase().includes('chicken') || name.toLowerCase().includes('tandoori')) {
    prepTimeMins = 25;
    difficulty = 'Intermediate';
    cookingSteps = [
      'Marinate chicken breast with hung curd, lemon juice, ginger-garlic paste, and tandoori spices for 20 mins.',
      'Preheat grill/oven to 200°C (400°F) or heat a heavy skillet on medium-high heat.',
      'Sear chicken for 6-8 minutes on each side until internal temperature reaches 75°C (165°F).',
      'Rest for 5 minutes before slicing and serve with cucumber raita & brown rice.'
    ];
  } else if (name.toLowerCase().includes('paneer') || name.toLowerCase().includes('bhurji')) {
    prepTimeMins = 15;
    difficulty = 'Easy';
    cookingSteps = [
      'Crumble fresh paneer and finely chop onions, tomatoes, and green chillies.',
      'Heat 1 tsp oil/ghee in a pan, add cumin seeds, onions, and ginger paste until golden brown.',
      'Add chopped tomatoes, turmeric, coriander powder, and crumbled paneer. Stir for 4-5 mins.',
      'Garnish with fresh coriander leaves and serve warm with multigrain roti or toast.'
    ];
  } else if (name.toLowerCase().includes('salmon') || name.toLowerCase().includes('fish')) {
    prepTimeMins = 20;
    difficulty = 'Intermediate';
    cookingSteps = [
      'Pat fish fillet dry and season both sides with sea salt, crushed black pepper, and fresh lemon juice.',
      'Heat olive oil in a stainless steel or cast-iron skillet on medium-high heat.',
      'Place fish skin-side down and sear undisturbed for 4-5 minutes until crispy.',
      'Flip gently and cook for another 2-3 minutes. Serve hot with steamed asparagus & sweet potato.'
    ];
  } else if (name.toLowerCase().includes('oat') || name.toLowerCase().includes('oatmeal')) {
    prepTimeMins = 10;
    difficulty = 'Easy';
    cookingSteps = [
      'Combine rolled oats with water or milk of choice in a saucepan on medium heat.',
      'Simmer for 5 minutes stirring occasionally until thick and creamy.',
      'Remove from heat, mix in 1 scoop of whey/plant protein powder until completely smooth.',
      'Top with sliced banana, chia seeds, and fresh berries before serving.'
    ];
  }

  const alternativeRecipes = [
    { name: `Air-Fryer ${name}`, calories: Math.max(150, meal.calories - 35), youtubeQuery: `Air fryer ${name} low calorie recipe` },
    { name: `One-Pot Meal Prep ${name}`, calories: meal.calories, youtubeQuery: `One pot ${name} meal prep recipe` }
  ];

  return {
    ...meal,
    youtubeQuery,
    prepTimeMins,
    difficulty,
    cookingSteps,
    alternativeRecipes
  };
}

export function generateCustomDietPlan(user: UserProfile, forceRefresh: boolean = false): DietPlan {
  const { weightKg, heightCm, age, gender, goal, dietaryPreference, country } = user;
  const pref = (dietaryPreference || 'Non-Vegetarian').toLowerCase().trim();

  let bmr = 10 * weightKg + 6.25 * heightCm - 5 * age;
  bmr = gender === 'male' ? bmr + 5 : bmr - 161;

  let dailyCalories = Math.round(bmr * 1.55);
  if (goal === 'fat_loss') dailyCalories -= 450;
  if (goal === 'muscle_gain') dailyCalories += 350;

  const isVegan = pref === 'vegan';
  const isKeto = pref.includes('keto') || pref.includes('low carb');
  const isNonVeg = pref.includes('non') || pref === 'non-vegetarian' || pref === 'non-veg';
  const isVeg = !isVegan && !isNonVeg && !isKeto && (pref.includes('veg') || pref === 'vegetarian');

  let proteinG = Math.round(weightKg * 2.1);
  let fatG = Math.round(weightKg * 0.9);
  if (isKeto) {
    fatG = Math.round((dailyCalories * 0.70) / 9);
    proteinG = Math.round((dailyCalories * 0.25) / 4);
  }
  const carbsG = Math.max(20, Math.round((dailyCalories - (proteinG * 4 + fatG * 9)) / 4));

  const variant = forceRefresh ? Math.floor(Math.random() * 2) : 0;

  let meals: Meal[] = [];

  if (isVegan) {
    if (country === 'India') {
      const variants: Meal[][] = [
        [
          { type: 'breakfast', name: 'Moong Dal & Tofu Scramble with Multigrain Roti', calories: 450, proteinG: 30, carbsG: 50, fatG: 12, ingredients: ['Moong Dal', 'Tofu', 'Multigrain Roti', 'Spices'] },
          { type: 'lunch', name: 'Chana Masala with Brown Rice & Cucumber Salad', calories: 650, proteinG: 38, carbsG: 80, fatG: 14, ingredients: ['Chickpeas', 'Brown Rice', 'Tomatoes', 'Cucumber'] },
          { type: 'dinner', name: 'Soya Chunk Curry & Quinoa Bowl', calories: 580, proteinG: 48, carbsG: 55, fatG: 15, ingredients: ['Soya Chunks', 'Quinoa', 'Onions', 'Garlic'] },
          { type: 'snack', name: 'Roasted Makhana & Pea Protein Shake with Almond Milk', calories: 250, proteinG: 25, carbsG: 22, fatG: 5, ingredients: ['Makhana', 'Pea Protein', 'Almond Milk'] },
        ] as Meal[],
        [
          { type: 'breakfast', name: 'Besan Chilla with Spinach & Peanut Butter Oats', calories: 460, proteinG: 28, carbsG: 55, fatG: 14, ingredients: ['Besan (Gram Flour)', 'Spinach', 'Oats', 'Peanut Butter'] },
          { type: 'lunch', name: 'Rajma (Kidney Bean) Curry with Millets & Sprouts', calories: 640, proteinG: 36, carbsG: 78, fatG: 12, ingredients: ['Rajma', 'Millets', 'Moong Sprouts'] },
          { type: 'dinner', name: 'Tofu & Vegetable Stir-Fry with Steamed Rice', calories: 590, proteinG: 44, carbsG: 58, fatG: 16, ingredients: ['Tofu', 'Broccoli', 'Bell Peppers', 'Steamed Rice'] },
          { type: 'snack', name: 'Roasted Chana & Chia Seed Smoothie', calories: 240, proteinG: 22, carbsG: 25, fatG: 6, ingredients: ['Roasted Chana', 'Chia Seeds', 'Soy Milk'] },
        ] as Meal[],
      ];
      meals = variants[variant % variants.length];
    } else if (country === 'Japan') {
      meals = [
        { type: 'breakfast', name: 'Miso Soup with Silken Tofu, Edamame & Green Tea', calories: 420, proteinG: 28, carbsG: 45, fatG: 10, ingredients: ['Miso Paste', 'Tofu', 'Edamame', 'Nori Seaweed'] },
        { type: 'lunch', name: 'Teriyaki Tempeh & Brown Rice Poke Bowl with Avocado', calories: 660, proteinG: 42, carbsG: 70, fatG: 18, ingredients: ['Tempeh', 'Brown Rice', 'Avocado', 'Sesame'] },
        { type: 'dinner', name: 'Tofu & Shiitake Mushroom Ramen with Soba Noodles', calories: 590, proteinG: 36, carbsG: 65, fatG: 14, ingredients: ['Tofu', 'Soba Noodles', 'Shiitake', 'Bok Choy'] },
        { type: 'snack', name: 'Steamed Edamame & Roasted Soybeans', calories: 230, proteinG: 22, carbsG: 15, fatG: 7, ingredients: ['Edamame', 'Sea Salt'] },
      ];
    } else {
      meals = [
        { type: 'breakfast', name: 'High-Protein Oatmeal with Plant Protein, Chia & Berries', calories: 480, proteinG: 35, carbsG: 58, fatG: 12, ingredients: ['Oats', 'Plant Protein', 'Chia Seeds', 'Berries'] },
        { type: 'lunch', name: 'Grilled Tofu & Quinoa Power Bowl with Tahini Dressing', calories: 670, proteinG: 42, carbsG: 72, fatG: 18, ingredients: ['Tofu', 'Quinoa', 'Kale', 'Tahini'] },
        { type: 'dinner', name: 'Tempeh & Lentil Bolognese with Whole Wheat Pasta', calories: 610, proteinG: 46, carbsG: 65, fatG: 15, ingredients: ['Tempeh', 'Lentils', 'Whole Wheat Pasta', 'Marinara'] },
        { type: 'snack', name: 'Almond Milk Yogurt with Pumpkin Seeds', calories: 240, proteinG: 20, carbsG: 18, fatG: 10, ingredients: ['Almond Milk Yogurt', 'Pumpkin Seeds'] },
      ];
    }
  } else if (isKeto) {
    meals = [
      { type: 'breakfast', name: 'Avocado & Bacon / Cheese Omelette in Olive Oil', calories: 520, proteinG: 34, carbsG: 6, fatG: 40, ingredients: ['Eggs', 'Avocado', 'Cheese', 'Olive Oil'] },
      { type: 'lunch', name: 'Grilled Chicken Breast / Paneer Tikka Caesar Salad', calories: 680, proteinG: 52, carbsG: 8, fatG: 48, ingredients: ['Chicken/Paneer', 'Romaine Lettuce', 'Parmesan', 'Olive Oil'] },
      { type: 'dinner', name: 'Pan-Seared Salmon / Tofu with Garlic Butter Asparagus', calories: 620, proteinG: 48, carbsG: 7, fatG: 44, ingredients: ['Salmon/Tofu', 'Butter', 'Asparagus'] },
      { type: 'snack', name: 'Handful of Walnuts, Macadamias & String Cheese', calories: 280, proteinG: 14, carbsG: 4, fatG: 24, ingredients: ['Walnuts', 'Macadamias', 'Cheese'] },
    ];
  } else if (isVeg) {
    if (country === 'India') {
      const variants: Meal[][] = [
        [
          { type: 'breakfast', name: 'Paneer Bhurji & Multigrain Toast with Masala Chai', calories: 480, proteinG: 34, carbsG: 42, fatG: 18, ingredients: ['Paneer', 'Multigrain Toast', 'Onions', 'Spices'] },
          { type: 'lunch', name: 'Dal Tadka, Paneer Salad & Multigrain Roti with Curd', calories: 670, proteinG: 42, carbsG: 72, fatG: 20, ingredients: ['Arhar Dal', 'Paneer', 'Roti', 'Curd'] },
          { type: 'dinner', name: 'Palak Paneer with Brown Rice & Sprouted Moong', calories: 600, proteinG: 45, carbsG: 52, fatG: 18, ingredients: ['Spinach', 'Paneer', 'Brown Rice', 'Moong'] },
          { type: 'snack', name: 'Roasted Makhana & Scoop of Whey Protein Shake', calories: 260, proteinG: 28, carbsG: 18, fatG: 6, ingredients: ['Makhana', 'Whey Protein'] },
        ] as Meal[],
        [
          { type: 'breakfast', name: 'Paneer Stuffed Paratha / Egg White Omelette with Curd', calories: 490, proteinG: 32, carbsG: 48, fatG: 16, ingredients: ['Paneer', 'Whole Wheat', 'Curd'] },
          { type: 'lunch', name: 'Chana Masala with Paneer Tikka & Quinoa', calories: 680, proteinG: 44, carbsG: 68, fatG: 18, ingredients: ['Chickpeas', 'Paneer Tikka', 'Quinoa'] },
          { type: 'dinner', name: 'High-Protein Soya Matar Curry with Brown Rice', calories: 590, proteinG: 46, carbsG: 50, fatG: 15, ingredients: ['Soya Chunks', 'Green Peas', 'Brown Rice'] },
          { type: 'snack', name: 'Greek Yogurt with Almonds & Honey', calories: 250, proteinG: 24, carbsG: 16, fatG: 8, ingredients: ['Greek Yogurt', 'Almonds'] },
        ] as Meal[],
      ];
      meals = variants[variant % variants.length];
    } else {
      meals = [
        { type: 'breakfast', name: 'Egg White & Spinach Omelette with Whole Grain Toast', calories: 470, proteinG: 36, carbsG: 40, fatG: 14, ingredients: ['Egg Whites', 'Spinach', 'Whole Grain Toast'] },
        { type: 'lunch', name: 'Cottage Cheese & Quinoa Mediterranean Bowl', calories: 660, proteinG: 44, carbsG: 65, fatG: 16, ingredients: ['Cottage Cheese', 'Quinoa', 'Cucumbers', 'Feta'] },
        { type: 'dinner', name: 'Lentil & Sweet Potato Bake with Greek Yogurt Dressing', calories: 600, proteinG: 42, carbsG: 58, fatG: 14, ingredients: ['Lentils', 'Sweet Potato', 'Greek Yogurt'] },
        { type: 'snack', name: 'Whey Protein Shake with Peanut Butter & Oats', calories: 270, proteinG: 30, carbsG: 20, fatG: 8, ingredients: ['Whey Protein', 'Peanut Butter'] },
      ];
    }
  } else {
    if (country === 'India') {
      const variants: Meal[][] = [
        [
          { type: 'breakfast', name: 'Masala Egg White Omelette with Multigrain Toast', calories: 460, proteinG: 36, carbsG: 40, fatG: 12, ingredients: ['Egg Whites', 'Multigrain Toast', 'Onions', 'Green Chillies'] },
          { type: 'lunch', name: 'Tandoori Chicken Breast with Brown Rice & Cucumber Raita', calories: 680, proteinG: 54, carbsG: 60, fatG: 15, ingredients: ['Chicken Breast', 'Brown Rice', 'Curd'] },
          { type: 'dinner', name: 'Fish Curry (Rohu / Salmon) with Quinoa & Steamed Broccoli', calories: 590, proteinG: 48, carbsG: 42, fatG: 16, ingredients: ['Fish Fillet', 'Quinoa', 'Broccoli', 'Spices'] },
          { type: 'snack', name: 'Roasted Makhana & Whey Protein Shake', calories: 250, proteinG: 28, carbsG: 16, fatG: 5, ingredients: ['Makhana', 'Whey Protein'] },
        ] as Meal[],
        [
          { type: 'breakfast', name: 'Chicken Keema Paratha / Scrambled Eggs with Toast', calories: 500, proteinG: 38, carbsG: 44, fatG: 16, ingredients: ['Chicken Keema', 'Whole Wheat'] },
          { type: 'lunch', name: 'Grilled Chicken Bowl with Rajma & Basmati Rice', calories: 700, proteinG: 56, carbsG: 68, fatG: 16, ingredients: ['Chicken', 'Kidney Beans', 'Rice'] },
          { type: 'dinner', name: 'Grilled Lemon Pepper Fish with Asparagus', calories: 580, proteinG: 50, carbsG: 35, fatG: 14, ingredients: ['Fish Fillet', 'Asparagus', 'Lemon'] },
          { type: 'snack', name: 'Boiled Egg Whites & Almonds', calories: 240, proteinG: 26, carbsG: 4, fatG: 10, ingredients: ['Egg Whites', 'Almonds'] },
        ] as Meal[],
      ];
      meals = variants[variant % variants.length];
    } else {
      meals = [
        { type: 'breakfast', name: 'Oatmeal Bowl with Whey Protein, Egg Whites & Berries', calories: 500, proteinG: 40, carbsG: 55, fatG: 10, ingredients: ['Oats', 'Whey', 'Egg Whites', 'Berries'] },
        { type: 'lunch', name: 'Grilled Chicken Breast with Quinoa & Avocado Bowl', calories: 700, proteinG: 58, carbsG: 60, fatG: 18, ingredients: ['Chicken Breast', 'Quinoa', 'Avocado', 'Olive Oil'] },
        { type: 'dinner', name: 'Pan-Seared Atlantic Salmon with Asparagus & Sweet Potato', calories: 620, proteinG: 48, carbsG: 45, fatG: 22, ingredients: ['Salmon', 'Asparagus', 'Sweet Potato'] },
        { type: 'snack', name: 'Greek Yogurt with Roasted Almonds', calories: 250, proteinG: 24, carbsG: 14, fatG: 9, ingredients: ['Greek Yogurt', 'Almonds'] },
      ];
    }
  }

  // Attach YouTube & Recipe metadata to every meal
  meals = meals.map(attachRecipeMetadata);

  const rawIngredients = meals.flatMap((m) => m.ingredients || []);
  const shoppingList = Array.from(new Set(rawIngredients));

  return {
    dailyCalories,
    proteinG,
    carbsG,
    fatG,
    waterTargetMl: Math.round(weightKg * 42),
    waterLoggedMl: Math.round(weightKg * 20),
    meals,
    shoppingList: shoppingList.length > 0 ? shoppingList : ['Protein Source', 'Complex Carbs', 'Fresh Vegetables'],
  };
}
