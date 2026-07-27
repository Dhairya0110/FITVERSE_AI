'use client';

import React, { useState } from 'react';
import { useFitStore } from '@/store/useFitStore';
import { calculateHealthMetrics } from '@/lib/healthCalculations';
import { Utensils, Sparkles, RefreshCw, Droplet, Plus, Check, ShoppingBag, Clock, Play, ListChecks, ChefHat, ExternalLink, Camera } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AIMealAnalyzer } from './AIMealAnalyzer';

export const DietPlannerView: React.FC = () => {
  const { user, diet, logWater, updateUserProfile, generateAiDietPlan } = useFitStore();
  const metrics = calculateHealthMetrics(user);

  const [subView, setSubView] = useState<'diet' | 'analyzer'>('analyzer');
  const [country, setCountry] = useState(user.country || 'USA');
  const [preference, setPreference] = useState(user.dietaryPreference || 'Non-Vegetarian');
  const [budget, setBudget] = useState<'low' | 'medium' | 'high'>(user.budget || 'medium');
  
  // Interactive meal section tab state per meal index
  const [activeMealTab, setActiveMealTab] = useState<Record<number, 'ingredients' | 'steps' | 'alternatives' | null>>({});
  const [checkedItems, setCheckedItems] = useState<string[]>(['Oats', 'Whey Protein']);

  const getMealCookingSteps = (meal: { name: string; ingredients: string[] }): string[] => {
    const name = meal.name.toLowerCase();

    if (name.includes('oat') || name.includes('oatmeal') || name.includes('porridge')) {
      return [
        'Boil 1 cup of water or milk in a small pot and stir in 1/2 cup of rolled oats.',
        'Simmer on medium-low heat for 4–5 minutes until oats absorb liquid and thicken.',
        'Remove pot from heat and mix in 1 scoop of whey/plant protein powder until smooth.',
        'Top with fresh berries, chia seeds, chopped nuts, and a drizzle of honey.'
      ];
    }
    if (name.includes('egg') || name.includes('omelette') || (name.includes('bhurji') && name.includes('egg'))) {
      return [
        'Whisk 3–4 egg whites (and 1 whole egg) in a bowl with turmeric, salt, and black pepper.',
        'Heat 1 tsp olive oil or ghee in a non-stick skillet on medium heat; sauté chopped onions & green chillies.',
        'Pour the egg mixture into the pan, tilting to spread evenly, and cook for 2–3 minutes.',
        'Fold gently, cook for another minute until golden, and serve hot with multigrain toast.'
      ];
    }
    if (name.includes('paneer')) {
      if (name.includes('palak')) {
        return [
          'Blanch fresh spinach leaves in boiling water for 2 mins, then blend into a smooth green puree.',
          'Heat 1 tsp ghee, sauté cumin, garlic, and ginger paste until aromatic.',
          'Pour in spinach puree, add garam masala and paneer cubes, and simmer for 5–7 minutes.',
          'Garnish with 1 tbsp low-fat cream or curd and serve with brown rice or roti.'
        ];
      }
      return [
        'Crumble 150g fresh paneer and finely chop onions, tomatoes, green chillies, and cilantro.',
        'Heat 1 tsp oil/ghee in a pan, toss in cumin seeds, onions, and ginger paste until light brown.',
        'Add diced tomatoes, turmeric, coriander powder, and salt; cook until tomatoes soften.',
        'Stir in crumbled paneer, cook for 3–4 minutes on medium heat, and garnish with fresh cilantro.'
      ];
    }
    if (name.includes('chicken') || name.includes('tandoori') || name.includes('keema')) {
      return [
        'Marinate chicken breast with hung curd, lemon juice, ginger-garlic paste, and tandoori masala for 20 mins.',
        'Preheat grill/oven to 200°C (400°F) or heat a grill skillet with minimal oil.',
        'Sear chicken for 6–8 minutes on each side until fully cooked and internal temp reaches 75°C (165°F).',
        'Rest chicken for 5 minutes to retain juices, slice thinly, and serve with cucumber raita & rice.'
      ];
    }
    if (name.includes('salmon') || name.includes('fish')) {
      return [
        'Pat salmon/fish fillet dry with paper towels; season both sides with sea salt, pepper, and lemon juice.',
        'Heat 1 tbsp olive oil in a skillet on medium-high heat until hot.',
        'Place fish skin-side down and sear undisturbed for 4 minutes until skin is golden and crisp.',
        'Flip carefully and cook for an additional 2–3 minutes. Serve with asparagus & sweet potato.'
      ];
    }
    if (name.includes('dal') || name.includes('chana') || name.includes('rajma') || name.includes('soya')) {
      return [
        'Soak legumes/beans overnight and pressure cook with turmeric and salt until tender.',
        'Prepare tempering (tadka): heat oil/ghee, add mustard seeds, cumin, garlic, and chopped onions.',
        'Add tomato puree and Indian spices (garam masala, coriander, chilli); simmer for 5 minutes.',
        'Pour tempering over cooked lentils/beans, simmer for 5–10 mins, and serve with brown rice.'
      ];
    }
    if (name.includes('tofu') || name.includes('vegan') || name.includes('tempeh') || name.includes('ramen')) {
      return [
        'Press tofu to remove excess moisture, then cut into firm 1-inch cubes.',
        'Sauté tofu cubes in 1 tsp sesame oil on medium-high heat until edges turn golden and crispy.',
        'Add chopped broccoli, bell peppers, soy sauce, and minced garlic; stir-fry for 3–4 minutes.',
        'Serve hot over steamed quinoa, brown rice, or buckwheat soba noodles.'
      ];
    }
    if (name.includes('chilla') || name.includes('paratha') || name.includes('dosa') || name.includes('besan')) {
      return [
        'Mix gram flour (besan) or whole wheat batter with water, chopped spinach, onions, and spices into a smooth batter.',
        'Heat a non-stick tawa/skillet and grease lightly with oil or ghee.',
        'Pour a ladleful of batter and spread in circular motion; cook on medium heat for 2–3 mins until bottom turns golden.',
        'Flip and cook the other side for 1–2 mins. Serve warm with mint chutney or curd.'
      ];
    }
    if (name.includes('avocado') || name.includes('salad') || name.includes('keto')) {
      return [
        'Wash and chop fresh romaine lettuce, cucumbers, cherry tomatoes, and grilled protein source.',
        'Dice 1/2 ripe avocado and toss into the salad bowl.',
        'Whisk extra virgin olive oil, lemon juice, sea salt, black pepper, and Dijon mustard for dressing.',
        'Drizzle dressing over salad, toss gently, and top with pumpkin seeds or parmesan.'
      ];
    }
    if (name.includes('makhana') || name.includes('almond') || name.includes('nut') || name.includes('snack')) {
      return [
        'Heat 1/2 tsp ghee in a pan on low heat and add 1 cup lotus seeds (makhana) or raw almonds.',
        'Roast continuously for 6–8 minutes on low flame until crunchy and light brown.',
        'Season with pink Himalayan salt, black pepper, and chat masala.',
        'Allow to cool for 2 minutes for maximum crunchiness and enjoy as a metabolic snack.'
      ];
    }

    return [
      `Prepare and measure fresh ingredients: ${meal.ingredients.slice(0, 3).join(', ')}.`,
      'Heat 1 tsp healthy cooking oil (olive oil or ghee) in a non-stick pan on medium heat.',
      'Cook primary protein & ingredients for 6–10 minutes until tender and aromatic.',
      'Season with natural herbs & sea salt, plate neatly, and enjoy fresh.'
    ];
  };

  React.useEffect(() => {
    if (user.country) setCountry(user.country);
    if (user.dietaryPreference) setPreference(user.dietaryPreference);
    if (user.budget) setBudget(user.budget);
  }, [user.country, user.dietaryPreference, user.budget]);

  const handleRegenerate = () => {
    generateAiDietPlan();
  };

  const handleCountryChange = (val: string) => {
    setCountry(val);
    updateUserProfile({ country: val, dietaryPreference: preference, budget });
  };

  const handlePreferenceChange = (val: string) => {
    setPreference(val);
    updateUserProfile({ country, dietaryPreference: val, budget });
  };

  const handleBudgetChange = (val: 'low' | 'medium' | 'high') => {
    setBudget(val);
    updateUserProfile({ country, dietaryPreference: preference, budget: val });
  };

  const toggleShoppingItem = (item: string) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((i) => i !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  const toggleMealTab = (mealIdx: number, tab: 'ingredients' | 'steps' | 'alternatives') => {
    setActiveMealTab((prev) => ({
      ...prev,
      [mealIdx]: prev[mealIdx] === tab ? null : tab,
    }));
  };

  const waterPercent = Math.min(100, Math.round((diet.waterLoggedMl / diet.waterTargetMl) * 100));

  const getMealImageUrl = (meal: { name: string; type: string; imageUrl?: string }): string => {
    if (meal.imageUrl) return meal.imageUrl;
    const name = meal.name.toLowerCase();

    if (name.includes('paneer') || name.includes('bhurji') || name.includes('palak')) {
      return 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=600&q=80';
    }
    if (name.includes('dal') || name.includes('chana') || name.includes('rajma') || name.includes('curry')) {
      return 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=600&q=80';
    }
    if (name.includes('chilla') || name.includes('paratha') || name.includes('toast') || name.includes('dosa')) {
      return 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=600&q=80';
    }
    if (name.includes('tofu') || name.includes('vegan') || name.includes('tempeh') || name.includes('bolognese')) {
      return 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=600&q=80';
    }
    if (name.includes('miso') || name.includes('ramen') || name.includes('soba')) {
      return 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80';
    }
    if (name.includes('chicken') || name.includes('keema') || name.includes('tikka')) {
      return 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=600&q=80';
    }
    if (name.includes('salmon') || name.includes('fish')) {
      return 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80';
    }
    if (name.includes('egg') || name.includes('omelette')) {
      return 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=600&q=80';
    }
    if (name.includes('oat') || name.includes('oatmeal')) {
      return 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=600&q=80';
    }
    if (name.includes('avocado') || name.includes('keto') || name.includes('caesar') || name.includes('salad')) {
      return 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=600&q=80';
    }
    if (name.includes('makhana') || name.includes('walnut') || name.includes('almond') || name.includes('seed')) {
      return 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=600&q=80';
    }
    if (name.includes('yogurt') || name.includes('smoothie') || name.includes('shake')) {
      return 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80';
    }

    const typeDefaults: Record<string, string> = {
      breakfast: 'https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=600&q=80',
      lunch: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80',
      dinner: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&w=600&q=80',
      snack: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80',
    };

    return typeDefaults[meal.type] || typeDefaults.breakfast;
  };

  return (
    <div className="glass-card p-6 space-y-8 animate-fadeIn relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-2xl font-black flex items-center gap-2 font-heading">
            <Utensils className="w-6 h-6 text-emerald-400" /> FitVerse AI Nutrition & Metabolic Ecosystem
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            AI Vision meal image scanner, precision macro tracking, and YouTube recipe tutorials.
          </p>
        </div>

        {/* SubView Tab Switcher */}
        <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
          <button
            onClick={() => setSubView('analyzer')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
              subView === 'analyzer'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg scale-105'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Camera className="w-4 h-4" /> AI Meal Image Analyzer
          </button>
          <button
            onClick={() => setSubView('diet')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
              subView === 'diet'
                ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg scale-105'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Utensils className="w-4 h-4" /> Metabolic Diet & Recipes
          </button>
        </div>
      </div>

      {subView === 'analyzer' ? (
        <AIMealAnalyzer metrics={metrics} />
      ) : (
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-slate-400">Custom Metabolic Plan & Hydration Engine</span>
            <button
              onClick={handleRegenerate}
              className="px-4 py-2 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-600 text-slate-950 text-xs font-extrabold flex items-center gap-2 shadow-lg hover:scale-105 transition-all cursor-pointer"
            >
              <RefreshCw className="w-4 h-4" /> Regenerate AI Diet
            </button>
          </div>

      {/* Water Hydration Glass Bottle Tracker Stage */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-cyan-950/40 via-blue-950/40 to-slate-950 border border-cyan-500/40 grid grid-cols-1 md:grid-cols-3 gap-6 items-center shadow-2xl relative overflow-hidden">
        {/* Animated Liquid Wave Water Bottle */}
        <div className="flex flex-col items-center justify-center relative">
          <div className="w-28 h-48 rounded-3xl border-4 border-cyan-400/80 bg-slate-950/80 p-1 relative overflow-hidden shadow-[0_0_30px_rgba(0,229,255,0.4)]">
            <div className="w-full h-full rounded-2xl relative overflow-hidden bg-slate-900/60">
              <div
                className="water-wave transition-all duration-700 ease-out"
                style={{ top: `${100 - waterPercent}%` }}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-white font-extrabold">
                <Droplet className="w-7 h-7 text-white animate-bounce drop-shadow" />
                <span className="text-2xl font-black font-heading mt-1 drop-shadow-md">{waterPercent}%</span>
                <span className="text-[10px] text-cyan-100 uppercase tracking-widest font-semibold">{diet.waterLoggedMl} ml</span>
              </div>
            </div>
          </div>
        </div>

        {/* Water Stat Info & Buttons */}
        <div className="md:col-span-2 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase">
            <Droplet className="w-3.5 h-3.5" /> Fluid Wave Hydration Tracker
          </div>
          <div>
            <h4 className="text-xl font-bold text-white">Daily Target: {diet.waterTargetMl} ml</h4>
            <p className="text-xs text-slate-400 mt-1">
              Maintain intracellular hydration to optimize protein synthesis and prevent metabolic fatigue.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => logWater(250)}
              className="px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 text-xs font-extrabold flex items-center gap-1.5 hover:bg-cyan-500/30 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> +250 ml Glass
            </button>
            <button
              onClick={() => logWater(500)}
              className="px-4 py-2 rounded-xl bg-blue-500/20 border border-blue-400/50 text-blue-300 text-xs font-extrabold flex items-center gap-1.5 hover:bg-blue-500/30 transition-all cursor-pointer"
            >
              <Plus className="w-3.5 h-3.5" /> +500 ml Bottle
            </button>
          </div>
        </div>
      </div>

      {/* Target Macro Summary */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-emerald-500/30">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">Target Calories</span>
          <span className="text-xl font-black text-emerald-400">{diet.dailyCalories} kcal</span>
        </div>
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-pink-500/30">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">Protein Goal</span>
          <span className="text-xl font-black text-pink-400">{diet.proteinG}g</span>
        </div>
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-cyan-500/30">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">Carbs Target</span>
          <span className="text-xl font-black text-cyan-400">{diet.carbsG}g</span>
        </div>
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-amber-500/30">
          <span className="text-[10px] text-slate-400 uppercase font-semibold block">Fats Ceiling</span>
          <span className="text-xl font-black text-amber-400">{diet.fatG}g</span>
        </div>
      </div>

      {/* Filter Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-950/60 border border-slate-800">
        <div>
          <label className="text-[11px] text-slate-400 block mb-1 font-bold uppercase tracking-wider">Cuisine Region</label>
          <select
            value={country}
            onChange={(e) => handleCountryChange(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-cyan-300 focus:outline-none"
          >
            <option value="India">India / South Asian</option>
            <option value="USA">USA / Western</option>
            <option value="Japan">Japan / East Asian</option>
          </select>
        </div>

        <div>
          <label className="text-[11px] text-slate-400 block mb-1 font-bold uppercase tracking-wider">Dietary Preference</label>
          <select
            value={preference}
            onChange={(e) => handlePreferenceChange(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-emerald-300 focus:outline-none"
          >
            <option value="Non-Vegetarian">Non-Vegetarian</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vegan">Vegan</option>
            <option value="Keto">Keto / Low Carb</option>
          </select>
        </div>

        <div>
          <label className="text-[11px] text-slate-400 block mb-1 font-bold uppercase tracking-wider">Budget Tier</label>
          <select
            value={budget}
            onChange={(e) => handleBudgetChange(e.target.value as 'low' | 'medium' | 'high')}
            className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs text-amber-300 focus:outline-none"
          >
            <option value="low">Budget Friendly</option>
            <option value="medium">Standard Balanced</option>
            <option value="high">Premium Gourmet</option>
          </select>
        </div>
      </div>

      {/* Meal Cards with Direct YouTube Recipe Integration */}
      <div className="space-y-4">
        <h4 className="text-lg font-extrabold text-white flex items-center gap-2 font-heading">
          <Sparkles className="w-5 h-5 text-emerald-400" /> Today&apos;s Neural Meal Script & YouTube Recipes
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {diet.meals.map((meal, idx) => {
            const activeTab = activeMealTab[idx];
            const prepTime = meal.prepTimeMins || 15;
            const diff = meal.difficulty || 'Easy';
            const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(meal.name + ' healthy recipe tutorial')}`;

            return (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                className="rounded-3xl glass-card border border-slate-800 overflow-hidden flex flex-col justify-between"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={getMealImageUrl(meal)}
                    alt={meal.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] bg-emerald-500 text-slate-950 font-extrabold uppercase tracking-wider shadow">
                    {meal.type}
                  </span>
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs bg-slate-950/80 border border-slate-800 text-amber-400 font-extrabold">
                    {meal.calories} kcal
                  </span>

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-slate-300 font-semibold">
                    <span className="flex items-center gap-1 bg-slate-950/80 px-2.5 py-1 rounded-full border border-slate-800">
                      <Clock className="w-3 h-3 text-cyan-400" /> {prepTime} mins
                    </span>
                    <span className="bg-slate-950/80 px-2.5 py-1 rounded-full border border-slate-800 text-emerald-400">
                      {diff} Execution
                    </span>
                  </div>
                </div>

                <div className="p-5 space-y-4">
                  <h5 className="text-base font-extrabold text-white">{meal.name}</h5>

                  {/* Macro Progress Bars */}
                  <div className="grid grid-cols-3 gap-2 text-[11px]">
                    <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-slate-400 block">Protein</span>
                      <span className="text-pink-400 font-black">{meal.proteinG}g</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-slate-400 block">Carbs</span>
                      <span className="text-cyan-400 font-black">{meal.carbsG}g</span>
                    </div>
                    <div className="p-2 rounded-xl bg-slate-950/80 border border-slate-800">
                      <span className="text-slate-400 block">Fat</span>
                      <span className="text-amber-400 font-black">{meal.fatG}g</span>
                    </div>
                  </div>

                  {/* Direct YouTube Recipe Link & Action Toolbar */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    {/* 1. Direct ▶ Watch Recipe Link (Opens directly in YouTube) */}
                    <a
                      href={youtubeSearchUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 px-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-[0_0_12px_rgba(239,68,68,0.4)] hover:scale-105 transition-all cursor-pointer col-span-2 sm:col-span-1"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" /> ▶ Watch Recipe
                      <ExternalLink className="w-3 h-3 text-red-200 ml-0.5" />
                    </a>

                    {/* 2. 📋 Ingredients Button */}
                    <button
                      onClick={() => toggleMealTab(idx, 'ingredients')}
                      className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        activeTab === 'ingredients'
                          ? 'bg-cyan-500/20 border-cyan-400 text-cyan-300'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      <ListChecks className="w-3.5 h-3.5 text-cyan-400" /> 📋 Ingredients
                    </button>

                    {/* 3. 🍳 Cooking Steps Button */}
                    <button
                      onClick={() => toggleMealTab(idx, 'steps')}
                      className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        activeTab === 'steps'
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      <ChefHat className="w-3.5 h-3.5 text-amber-400" /> 🍳 Cooking Steps
                    </button>

                    {/* 4. 🔄 Alternative Recipes Button */}
                    <button
                      onClick={() => toggleMealTab(idx, 'alternatives')}
                      className={`py-2 px-3 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        activeTab === 'alternatives'
                          ? 'bg-purple-500/20 border-purple-400 text-purple-300'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-purple-400" /> 🔄 Alternatives
                    </button>
                  </div>

                  {/* Expandable Recipe Tabs */}
                  <AnimatePresence>
                    {activeTab === 'ingredients' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-3 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-2 text-xs"
                      >
                        <h6 className="font-bold text-cyan-300 flex items-center gap-1">
                          <ListChecks className="w-4 h-4" /> Ingredients Required:
                        </h6>
                        <ul className="grid grid-cols-2 gap-1.5 text-[11px] text-slate-300">
                          {meal.ingredients.map((ing, i) => (
                            <li key={i} className="flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-lg border border-slate-800">
                              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                              {ing}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {activeTab === 'steps' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-3 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-2 text-xs"
                      >
                        <h6 className="font-bold text-amber-300 flex items-center gap-1">
                          <ChefHat className="w-4 h-4" /> Step-by-Step Cooking Steps:
                        </h6>
                        <ol className="list-decimal list-inside space-y-1.5 text-[11px] text-slate-300 leading-relaxed">
                          {getMealCookingSteps(meal).map((step, sIdx) => (
                            <li key={sIdx} className="bg-slate-900/60 p-2 rounded-xl border border-slate-800">
                              {step}
                            </li>
                          ))}
                        </ol>
                      </motion.div>
                    )}

                    {activeTab === 'alternatives' && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="p-3 rounded-2xl bg-slate-950 border border-purple-500/30 space-y-2 text-xs"
                      >
                        <h6 className="font-bold text-purple-300 flex items-center gap-1">
                          <RefreshCw className="w-4 h-4" /> Alternative Recipe Variations:
                        </h6>
                        <div className="space-y-2">
                          {(meal.alternativeRecipes || [
                            { name: `Air-Fryer ${meal.name}`, calories: meal.calories - 30, youtubeQuery: `Air fryer ${meal.name}` },
                            { name: `One-Pot Meal Prep ${meal.name}`, calories: meal.calories, youtubeQuery: `One pot ${meal.name}` }
                          ]).map((alt, aIdx) => (
                            <div key={aIdx} className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-between gap-2">
                              <div>
                                <span className="font-bold text-white block text-[11px]">{alt.name}</span>
                                <span className="text-[10px] text-amber-400">{alt.calories} kcal</span>
                              </div>
                              <a
                                href={`https://www.youtube.com/results?search_query=${encodeURIComponent(alt.name + ' healthy recipe')}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-2.5 py-1 rounded-lg bg-red-600/30 border border-red-500/40 text-red-300 font-extrabold text-[10px] flex items-center gap-1 hover:bg-red-600/50 cursor-pointer"
                              >
                                <Play className="w-3 h-3 fill-current" /> Watch
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Expandable Shopping List */}
      <div className="p-6 rounded-3xl glass-card border border-slate-800 space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-base font-extrabold text-white flex items-center gap-2 font-heading">
            <ShoppingBag className="w-5 h-5 text-amber-400" /> Interactive Smart Grocery Shopping List
          </h4>
          <span className="text-xs font-semibold text-slate-400">
            {checkedItems.length} of {diet.shoppingList.length} items completed
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {diet.shoppingList.map((item, idx) => {
            const isChecked = checkedItems.includes(item);
            return (
              <button
                key={idx}
                onClick={() => toggleShoppingItem(item)}
                className={`p-3 rounded-2xl border text-left text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                  isChecked
                    ? 'bg-emerald-950/30 border-emerald-500/50 text-emerald-300 line-through opacity-75'
                    : 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700'
                }`}
              >
                <span>{item}</span>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center ${isChecked ? 'bg-emerald-400 text-slate-950' : 'border border-slate-700'}`}>
                  {isChecked && <Check className="w-3.5 h-3.5" />}
                </div>
              </button>
            );
          })}
        </div>
      </div>
        </div>
      )}
    </div>
  );
};
