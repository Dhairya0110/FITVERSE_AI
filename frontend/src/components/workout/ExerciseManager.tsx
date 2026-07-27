// FitVerse AI Dynamic Exercise & Challenge Manager Component
import React, { useState } from 'react';
import { useFitStore } from '@/store/useFitStore';
import { Exercise } from '@/types';
import { Dumbbell, Plus, Trash2, RefreshCw, Camera, Lightbulb, Search, Play, ExternalLink, ShieldAlert, Activity, CheckCircle2, ChevronDown, ChevronUp, Target } from 'lucide-react';
import { ExercisePoseDetector } from '@/components/camera/ExercisePoseDetector';
import { motion, AnimatePresence } from 'framer-motion';
import { AIChallengeGenerator } from '@/components/challenge/AIChallengeGenerator';

interface Props {
  onOpenHologram?: (exercise: Exercise) => void;
}

interface FormTips {
  properForm: string[];
  breathingTempo: string;
  commonMistakes: string[];
  safetyAdvice: string;
}

export function getExerciseFormTips(exName: string, targetMuscle?: string): FormTips {
  const name = exName.toLowerCase();

  // 1. Bench Press / Chest Press
  if (name.includes('flat bench') || name.includes('barbell flat bench') || (name.includes('bench') && !name.includes('incline'))) {
    return {
      properForm: [
        'Retract and depress shoulder blades tightly into bench to protect shoulder caps.',
        'Grip bar slightly wider than shoulder width with thumbs wrapped securely around bar.',
        'Lower bar with control to lower sternum, keeping elbows tucked at ~45° scaption angle.'
      ],
      breathingTempo: 'Inhale deep into lungs on controlled descent; exhale powerfully while pressing bar back up (Tempo: 2s down, 1s chest touch, 1s press).',
      commonMistakes: [
        'Flaring elbows out to 90° (causes severe shoulder impingement)',
        'Bouncing heavy bar off ribcage',
        'Lifting hips/buttocks off the bench to force reps'
      ],
      safetyAdvice: 'Always use a spotter or safety pins when pressing heavy sets near failure.'
    };
  }

  // 2. Incline Press
  if (name.includes('incline')) {
    return {
      properForm: [
        'Set bench angle to 30° (higher angles shift tension away from clavicular chest onto front shoulders).',
        'Press dumbbells/barbell in a slight arc over upper chest with wrists stacked over elbows.',
        'Squeeze upper chest hard at peak contraction without locking elbows out rigidly.'
      ],
      breathingTempo: 'Inhale on deep eccentric stretch, exhale as you drive weights upward (Tempo: 3s down, 1s stretch, 1s press).',
      commonMistakes: [
        'Setting bench angle too steep (>45° turning move into overhead press)',
        'Dropping dumbbells sideways at bottom',
        'Arching lower back excessive to mimic flat press'
      ],
      safetyAdvice: 'Control dumbbell lowering path carefully to avoid shoulder rotators strain.'
    };
  }

  // 3. Cable Flyes
  if (name.includes('fly') || name.includes('crossover')) {
    return {
      properForm: [
        'Set pulleys low/high, take one step forward, and keep slight bend in elbows throughout movement.',
        'Scoop hands inward in a wide arc, bringing pinkies together at peak contraction.',
        'Maintain chest proud and avoid using shoulder shrugging to bring hands together.'
      ],
      breathingTempo: 'Inhale on wide arm stretch, exhale as you hug hands together in front of chest (Tempo: 2s fly, 1s peak squeeze, 3s stretch).',
      commonMistakes: [
        'Bending elbows too much (converting fly into a press)',
        'Swinging torso forward and backward for momentum',
        'Allowing shoulders to roll forward at end of stretch'
      ],
      safetyAdvice: 'Do not overstretch past shoulder joint plane at starting position.'
    };
  }

  // 4. Chest Dips
  if (name.includes('dip')) {
    return {
      properForm: [
        'Lean torso forward ~30° with chin tucked to isolate chest over triceps.',
        'Lower body until upper arms are parallel with dip bars (90° elbow bend).',
        'Press upward through palms until arms are extended.'
      ],
      breathingTempo: 'Inhale on descent into stretch, exhale forcefully while pressing up (Tempo: 2s down, 1s press).',
      commonMistakes: [
        'Staying completely vertical (shifts focus almost entirely to triceps)',
        'Dipping excessively deep below 90° (causes severe anterior shoulder capsule strain)',
        'Kicking legs to generate momentum'
      ],
      safetyAdvice: 'If experiencing sternum or shoulder pain, reduce depth or use assistance band.'
    };
  }

  // 5. Back Squat
  if (name.includes('back squat') || (name.includes('squat') && !name.includes('split') && !name.includes('jump'))) {
    return {
      properForm: [
        'Set feet shoulder-width apart with toes flared slightly outward (15–30°).',
        'Hinge hips back while bending knees outward inline with 2nd toes.',
        'Squat down until top of thighs break parallel to floor while keeping spine neutral.'
      ],
      breathingTempo: 'Inhale deep into abdomen at top, hold core brace on descent, exhale past sticking point (Tempo: 3s down, 1s bottom pause, 1s up).',
      commonMistakes: [
        'Knees collapsing inward (knee valgus collapse)',
        'Heels lifting off the floor during descent',
        'Rounding lower back at bottom (butt wink)'
      ],
      safetyAdvice: 'Always squat inside a rack with safety spotter arms adjusted to chest height.'
    };
  }

  // 6. Romanian Deadlift (RDL)
  if (name.includes('romanian') || name.includes('rdl')) {
    return {
      properForm: [
        'Stand tall with feet hip-width apart and knees soft (slightly bent, not locked).',
        'Push hips backward towards wall behind you while sliding bar down close to shins.',
        'Lower until deep stretch is felt in hamstrings, then drive hips forward to stand.'
      ],
      breathingTempo: 'Inhale and brace core on hip hinge descent; exhale as hips drive forward (Tempo: 3s stretch down, 1s hip drive).',
      commonMistakes: [
        'Rounding lower back curve instead of hinging at hips',
        'Bending knees excessively into a traditional squat',
        'Letting bar drift away from legs'
      ],
      safetyAdvice: 'Keep bar touching shins throughout movement to minimize spine shear stress.'
    };
  }

  // 7. Bulgarian Split Squats
  if (name.includes('split squat') || name.includes('bulgarian')) {
    return {
      properForm: [
        'Place rear foot laces-down on bench behind you; stride front foot forward.',
        'Lower rear knee toward floor until front thigh is parallel with ground.',
        'Keep front heel firmly planted and drive through mid-foot to rise.'
      ],
      breathingTempo: 'Inhale as rear knee lowers, exhale as front leg drives upward (Tempo: 3s down, 1s up).',
      commonMistakes: [
        'Short stride length causing front knee to jam far past toes painfully',
        'Leaning torso sideways off balance',
        'Pushing off rear foot instead of front quad/glute'
      ],
      safetyAdvice: 'Perform bodyweight first to master balance before adding dumbbells.'
    };
  }

  // 8. Leg Press
  if (name.includes('leg press')) {
    return {
      properForm: [
        'Place feet shoulder-width on sled platform with lower back pressed flat into seat pad.',
        'Release safety levers and lower sled until knees form 90° angle.',
        'Push platform away through mid-foot and heels without locking knees at top.'
      ],
      breathingTempo: 'Inhale as sled lowers toward chest, exhale as you press platform away (Tempo: 3s lower, 1s press).',
      commonMistakes: [
        'Locking out knees forcefully at top of extension (risk of hyperextension injury)',
        'Allowing lower back/tailbone to curl off back pad at bottom',
        'Placing feet too low on platform putting shear stress on knees'
      ],
      safetyAdvice: 'Never lock knees out completely at top of movement.'
    };
  }

  // 9. Dumbbell Rows
  if (name.includes('dumbbell row') || name.includes('chest-supported')) {
    return {
      properForm: [
        'Lie chest-down on incline bench or place knee/hand on flat bench.',
        'Pull dumbbell upward toward hip pocket, driving elbow back and squeezing lat.',
        'Lower weight fully to feel lat stretch without rotating torso.'
      ],
      breathingTempo: 'Inhale on bottom stretch, exhale as you row dumbbell to hip (Tempo: 1s pull, 1s squeeze, 3s lower).',
      commonMistakes: [
        'Yanking dumbbell toward shoulder instead of hip pocket',
        'Shrugging upper trap into neck',
        'Twisting torso to jerk heavy weight upward'
      ],
      safetyAdvice: 'Keep chest supported or spine neutral to protect lower back.'
    };
  }

  // 10. Lat Pulldown
  if (name.includes('lat pulldown') || name.includes('pulldown')) {
    return {
      properForm: [
        'Grip bar wider than shoulders; sit with thigh pads snug over knees.',
        'Initiate pull by depressing shoulder blades down into back pockets.',
        'Pull bar down to upper chest while driving elbows down toward sides.'
      ],
      breathingTempo: 'Inhale on overhead stretch, exhale while pulling bar down to chest (Tempo: 1s pull, 1s squeeze, 3s stretch).',
      commonMistakes: [
        'Pulling bar behind neck (strains cervical spine and rotator cuff)',
        'Leaning back 45° to turn pulldown into a row',
        'Using momentum to yank bar down'
      ],
      safetyAdvice: 'Pull through elbows rather than gripping tightly with forearms.'
    };
  }

  // 11. Barbell Bent-Over Row
  if (name.includes('bent-over') || name.includes('barbell row')) {
    return {
      properForm: [
        'Hinge torso forward to ~45° with knees soft and spine rigid.',
        'Grip bar overhand, pull bar straight up to lower ribcage/navel.',
        'Squeeze shoulder blades together at top before lowering with control.'
      ],
      breathingTempo: 'Inhale at bottom stretch, exhale forcefully while rowing bar to navel (Tempo: 1s pull, 2s lower).',
      commonMistakes: [
        'Standing up too high during reps (shortens lat range of motion)',
        'Rounding spinal lumbar curve under bar load',
        'Using hip momentum to bounce weight up'
      ],
      safetyAdvice: 'If lower back fatigues early, switch to chest-supported dumbbell rows.'
    };
  }

  // 12. Face Pulls
  if (name.includes('face pull')) {
    return {
      properForm: [
        'Attach rope to cable stack at eye level; grip rope ends with thumbs pointing back.',
        'Pull rope directly toward forehead while separating hands and rotating shoulders externally.',
        'Squeeze rear delts and upper back tightly at peak contraction.'
      ],
      breathingTempo: 'Inhale at start, exhale while pulling rope toward face (Tempo: 1s pull, 1s peak squeeze, 2s return).',
      commonMistakes: [
        'Pulling rope to chest/neck instead of forehead/eyes',
        'Using heavy weight and leaning backward off balance',
        'Internal rotating shoulders instead of external rotation'
      ],
      safetyAdvice: 'Use light weight and focus purely on rear delt & rotator cuff contraction.'
    };
  }

  // 13. Military Press / Overhead Press
  if (name.includes('military') || name.includes('overhead press') || (name.includes('press') && name.includes('shoulder'))) {
    return {
      properForm: [
        'Stand tall with feet shoulder-width, bar resting across collarbone.',
        'Squeeze glutes and brace core tightly to prevent lower back arching.',
        'Press bar overhead in straight path, pushing head slightly forward at top lockout.'
      ],
      breathingTempo: 'Inhale at chest level, hold brace, exhale as bar passes forehead to lockout (Tempo: 2s down, 1s press).',
      commonMistakes: [
        'Arching lower back backward excessively (lumbar hyperextension)',
        'Bending knees to push-press strict weight reps',
        'Pressing bar forward away from center of gravity'
      ],
      safetyAdvice: 'Keep core & glutes tight throughout press to protect spine.'
    };
  }

  // 14. Lateral Raises
  if (name.includes('lateral raise') || name.includes('side raise')) {
    return {
      properForm: [
        'Stand tall or lean slightly forward with dumbbells at sides.',
        'Raise arms out to sides leading with elbows until hands reach shoulder height.',
        'Keep pinky fingers slightly higher than thumbs (pouring water motion).'
      ],
      breathingTempo: 'Inhale at bottom, exhale as dumbbells rise to shoulder height (Tempo: 2s up, 1s hold, 3s down).',
      commonMistakes: [
        'Shrugging traps into neck to swing dumbbells up',
        'Raising weights higher than shoulder level',
        'Using heavy weights and swinging hips'
      ],
      safetyAdvice: 'Use lighter weights to isolate lateral deltoid head.'
    };
  }

  // 15. Bicep Curls
  if (name.includes('curl') || name.includes('bicep')) {
    return {
      properForm: [
        'Stand tall or sit on incline bench with arms fully extended.',
        'Keep elbows pinned to sides of ribcage; curl weight up by flexing biceps.',
        'Squeeze biceps hard at top before slowly lowering weight to full stretch.'
      ],
      breathingTempo: 'Exhale while curling weight upward, inhale on controlled lowering phase (Tempo: 1s curl, 1s squeeze, 3s lower).',
      commonMistakes: [
        'Swinging shoulders or torso to move weight',
        'Drifting elbows forward into a front raise motion',
        'Cutting bottom range of motion short'
      ],
      safetyAdvice: 'Control the 3-second eccentric phase to build bicep peak tension safely.'
    };
  }

  // 16. Tricep Pushdown / Extension
  if (name.includes('tricep') || name.includes('pushdown')) {
    return {
      properForm: [
        'Attach bar or rope to cable pulley; pin elbows tightly against ribcage.',
        'Extend elbows fully downward until arms are straight, squeezing triceps at bottom.',
        'Return bar with control up to 90° elbow bend without moving upper arms.'
      ],
      breathingTempo: 'Inhale on 90° bend return, exhale as you extend arms straight down (Tempo: 1s push, 1s squeeze, 2s return).',
      commonMistakes: [
        'Flaring elbows out to sides',
        'Allowing upper arms to swing back and forth',
        'Hunching shoulders over cable'
      ],
      safetyAdvice: 'Avoid locking elbows aggressively under heavy loads.'
    };
  }

  // 17. Jump Squats / Cardio HIIT
  if (name.includes('jump squat') || name.includes('cardio') || name.includes('depth')) {
    return {
      properForm: [
        'Squat deep with chest high and knees tracking over toes.',
        'Explode upward forcefully into vertical jump extending ankles, knees, and hips.',
        'Land softly on balls of feet, rolling onto heels to absorb impact smoothly.'
      ],
      breathingTempo: 'Inhale on squat descent, exhale explosively as you jump upward.',
      commonMistakes: [
        'Landing with stiff locked knees (high joint impact)',
        'Letting knees collapse inward on takeoff or landing',
        'Slouching chest forward'
      ],
      safetyAdvice: 'Perform on cushioned surface or mat to protect ankle and knee joints.'
    };
  }

  // 18. Burpees
  if (name.includes('burpee')) {
    return {
      properForm: [
        'From standing position, drop hands to floor and kick feet back into high plank.',
        'Lower chest to floor for full pushup, then press up and jump feet back to hands.',
        'Explode upward into jump with hands reaching overhead.'
      ],
      breathingTempo: 'Continuous fluid breathing rhythm matching rep pace.',
      commonMistakes: [
        'Sagging lower back into swayback position during plank/pushup',
        'Skipping full pushup or overhead jump extension',
        'Landing heavily on flat feet'
      ],
      safetyAdvice: 'Pace your reps evenly to maintain core stability throughout set.'
    };
  }

  // 19. Mountain Climbers
  if (name.includes('mountain climber') || name.includes('climber')) {
    return {
      properForm: [
        'Start in solid pushup plank position with hands under shoulders and core braced.',
        'Drive one knee rapidly toward chest, then switch legs continuously.',
        'Keep hips low and level inline with shoulders.'
      ],
      breathingTempo: 'Rhythmic, steady breathing pattern throughout timed duration.',
      commonMistakes: [
        'Poking hips high up in air like a mountain peak',
        'Sagging hips toward floor straining lower back',
        'Shortening knee drive range'
      ],
      safetyAdvice: 'Keep wrists stacked directly under shoulders to prevent wrist strain.'
    };
  }

  // Default Custom Form Tips (for custom added exercises)
  return {
    properForm: [
      `Maintain strict biomechanical posture and alignment throughout ${exName}.`,
      'Focus on full controlled range of motion without using body momentum.',
      `Squeeze target muscle (${targetMuscle || 'primary muscle'}) at peak contraction.`
    ],
    breathingTempo: 'Exhale during concentric exertion phase, inhale during controlled eccentric lowering phase (Tempo: 2s lower, 1s squeeze).',
    commonMistakes: [
      'Using body momentum or swinging torso to lift weight',
      'Cutting range of motion short with partial reps',
      'Holding breath during heavy exertion'
    ],
    safetyAdvice: 'Select weight that allows 100% correct form without joint discomfort.'
  };
}

export const ExerciseManager: React.FC<Props> = () => {
  const { currentWorkout, addExercise, removeExercise, replaceExerciseWithAi, regenerateWorkoutPlan, completeWorkout } = useFitStore();
  
  const [subView, setSubView] = useState<'workout' | 'challenges'>('workout');
  const [newExName, setNewExName] = useState('');
  const [newExMuscle, setNewExMuscle] = useState('Chest');
  const [showAddForm, setShowAddForm] = useState(false);
  const [activePoseExercise, setActivePoseExercise] = useState<string | null>(null);
  const [completedToday, setCompletedToday] = useState(false);
  
  // Search & Filter State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  // Form Tips Expandable state per exercise ID
  const [expandedTipsId, setExpandedTipsId] = useState<string | null>(null);

  const handleComplete = () => {
    completeWorkout();
    setCompletedToday(true);
    setTimeout(() => setCompletedToday(false), 4000);
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newExName.trim()) return;

    const newEx: Exercise = {
      id: `ex_${Date.now()}`,
      name: newExName,
      category: 'Strength',
      sets: 4,
      reps: 12,
      restSec: 45,
      targetMuscle: newExMuscle,
      secondaryMuscles: ['Core'],
      instructions: ['Maintain strict form', 'Control the eccentric movement'],
      hologramColor: '#00e5ff',
      modelType: 'cylinder',
    };

    addExercise(newEx);
    setNewExName('');
    setShowAddForm(false);
  };

  const toggleFormTips = (exId: string) => {
    setExpandedTipsId(expandedTipsId === exId ? null : exId);
  };

  const exercises = currentWorkout?.exercises || [];

  const filteredExercises = exercises.filter((ex) => {
    const matchesQuery = ex.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ex.targetMuscle.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (ex.category && ex.category.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (selectedCategory === 'All') return matchesQuery;
    return matchesQuery && ex.targetMuscle.toLowerCase().includes(selectedCategory.toLowerCase());
  });

  const muscleCategories = ['All', 'Chest', 'Back', 'Legs', 'Shoulders', 'Arms', 'Core'];

  return (
    <div className="glass-card p-6 space-y-6 animate-fadeIn">
      {/* Active Camera Pose Detector Modal */}
      {activePoseExercise && (
        <ExercisePoseDetector
          exerciseName={activePoseExercise}
          onClose={() => setActivePoseExercise(null)}
        />
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
        <div>
          <h3 className="text-xl font-extrabold text-white flex items-center gap-2 font-heading">
            <Dumbbell className="w-6 h-6 text-cyan-400" /> FitVerse AI Workouts & Adaptive Quests
          </h3>
          <p className="text-xs text-slate-400 mt-0.5">
            Watch professional YouTube form guides, inspect AI posture tips, and run safe AI challenge generators.
          </p>
        </div>

        {/* SubView Switcher */}
        <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800 self-start md:self-auto">
          <button
            onClick={() => setSubView('workout')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
              subView === 'workout'
                ? 'bg-gradient-to-r from-cyan-400 to-teal-400 text-slate-950 shadow-lg scale-105'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Dumbbell className="w-4 h-4" /> Workouts & Video Guides
          </button>
          <button
            onClick={() => setSubView('challenges')}
            className={`px-4 py-2 rounded-xl text-xs font-black transition-all flex items-center gap-2 cursor-pointer ${
              subView === 'challenges'
                ? 'bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg scale-105'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Target className="w-4 h-4" /> AI Challenge Generator
          </button>
        </div>
      </div>

      {subView === 'challenges' ? (
        <AIChallengeGenerator />
      ) : (
        <div className="space-y-6">

        <div className="flex items-center gap-2 flex-wrap sm:flex-nowrap">
          <button
            onClick={handleComplete}
            disabled={completedToday}
            className={`px-4 py-2 rounded-xl text-slate-950 font-extrabold text-xs flex items-center gap-1.5 transition-all cursor-pointer ${
              completedToday
                ? 'bg-emerald-400 opacity-90 shadow-[0_0_15px_rgba(52,211,153,0.6)]'
                : 'bg-gradient-to-r from-emerald-400 to-teal-500 shadow-[0_0_15px_rgba(16,185,129,0.5)] hover:scale-105'
            }`}
          >
            <Dumbbell className="w-4 h-4" /> {completedToday ? 'Workout Logged (+100 XP)!' : 'Complete Workout (+100 XP)'}
          </button>
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="px-4 py-2 rounded-xl bg-[#00e5ff]/10 border border-[#00e5ff]/40 text-[#00e5ff] text-xs font-bold flex items-center gap-1.5 hover:bg-[#00e5ff]/20 transition-all cursor-pointer"
          >
            <Plus className="w-4 h-4" /> Add Exercise
          </button>
          <button
            onClick={regenerateWorkoutPlan}
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 text-slate-950 text-xs font-extrabold flex items-center gap-1.5 shadow-md hover:scale-105 transition-all cursor-pointer"
          >
            <RefreshCw className="w-4 h-4" /> AI Regenerate
          </button>
        </div>

      {/* Add Exercise Form Modal */}
      {showAddForm && (
        <form onSubmit={handleAdd} className="p-4 rounded-2xl bg-slate-950 border border-cyan-500/30 space-y-3">
          <h4 className="text-sm font-bold text-cyan-300">Add New Exercise Protocol</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="Exercise Name (e.g. Cable crossovers)"
              value={newExName}
              onChange={(e) => setNewExName(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-cyan-400"
            />
            <select
              value={newExMuscle}
              onChange={(e) => setNewExMuscle(e.target.value)}
              className="bg-slate-900 border border-slate-800 rounded-xl px-3 py-2 text-xs text-cyan-300 focus:outline-none"
            >
              <option value="Chest">Chest</option>
              <option value="Back">Back</option>
              <option value="Quadriceps">Quadriceps</option>
              <option value="Hamstrings">Hamstrings</option>
              <option value="Shoulders">Shoulders</option>
              <option value="Triceps">Triceps</option>
              <option value="Biceps">Biceps</option>
              <option value="Abs & Core">Abs & Core</option>
            </select>
          </div>
          <div className="flex justify-end gap-2 pt-1">
            <button
              type="button"
              onClick={() => setShowAddForm(false)}
              className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-1.5 rounded-lg bg-cyan-400 text-slate-950 font-bold text-xs"
            >
              Save Exercise
            </button>
          </div>
        </form>
      )}

      {/* Workout Overview Stats */}
      {currentWorkout && (
        <div className="p-4 rounded-2xl royal-card border border-[var(--border-color)] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            <span className="text-[var(--text-muted)] font-bold">Active Routine:</span>
            <h4 className="text-sm font-extrabold text-[var(--text-primary)] mt-0.5">{currentWorkout.title}</h4>
          </div>
          <div className="flex gap-4">
            <div>
              <span className="text-[var(--text-muted)] block text-[10px] uppercase font-bold">Duration</span>
              <span className="font-extrabold text-[#1E5EFF]">{currentWorkout.durationMinutes} mins</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block text-[10px] uppercase font-bold">Est. Burn</span>
              <span className="font-extrabold text-[#C9A227]">{currentWorkout.caloriesBurned} kcal</span>
            </div>
            <div>
              <span className="text-[var(--text-muted)] block text-[10px] uppercase font-bold">Level</span>
              <span className="font-extrabold text-[#00B894] capitalize">{currentWorkout.difficulty}</span>
            </div>
          </div>
        </div>
      )}

      {/* Exercise Search & Muscle Filter Bar */}
      <div className="space-y-3 p-4 rounded-2xl royal-card border border-[var(--border-color)]">
        <div className="relative">
          <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search exercises by name, muscle group, or equipment..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full royal-input pl-9 pr-3 py-2 text-xs font-semibold focus:border-[#1E5EFF]"
          />
        </div>

        {/* Category Chips */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="text-[11px] text-slate-400 font-bold uppercase shrink-0">Filter Muscle:</span>
          {muscleCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-xl font-bold transition-all shrink-0 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-[0_0_10px_rgba(6,182,212,0.4)]'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Exercise List Cards */}
      <div className="space-y-4">
        {filteredExercises.length === 0 ? (
          <div className="p-8 text-center glass-card border border-slate-800 rounded-2xl space-y-2">
            <Dumbbell className="w-8 h-8 text-slate-500 mx-auto" />
            <p className="text-xs text-slate-400">No exercises match your search query.</p>
          </div>
        ) : (
          filteredExercises.map((ex, idx) => {
            const isTipsExpanded = expandedTipsId === ex.id;
            const tips = getExerciseFormTips(ex.name, ex.targetMuscle);
            const youtubeTutorialUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(ex.name + ' correct form tutorial fitness')}`;

            return (
              <div
                key={ex.id}
                className="p-5 rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 space-y-3 transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  {/* Left Exercise Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 font-extrabold text-sm shadow">
                      {idx + 1}
                    </div>
                    <div>
                      <h5 className="text-base font-extrabold text-white flex items-center gap-2">
                        {ex.name}
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] bg-slate-950 border border-slate-800 text-cyan-300 font-semibold uppercase">
                          {ex.targetMuscle}
                        </span>
                      </h5>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {ex.sets} Sets • {ex.reps} Reps • {ex.restSec}s Rest
                      </p>
                    </div>
                  </div>

                  {/* Exercise Action Toolbar (Matching Requirements in Specification) */}
                  <div className="flex items-center gap-2 flex-wrap">
                    {/* 1. 🎥 Watch Exercise Button (Direct YouTube Link) */}
                    <a
                      href={youtubeTutorialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-700 text-white font-extrabold text-xs flex items-center gap-1.5 shadow-[0_0_12px_rgba(239,68,68,0.4)] hover:scale-105 transition-all cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" /> 🎥 Watch Exercise
                      <ExternalLink className="w-3 h-3 text-red-200" />
                    </a>

                    {/* 2. 💡 AI Form Tips Button */}
                    <button
                      onClick={() => toggleFormTips(ex.id)}
                      className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                        isTipsExpanded
                          ? 'bg-amber-500/20 border-amber-400 text-amber-300'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:text-white'
                      }`}
                    >
                      <Lightbulb className="w-3.5 h-3.5 text-amber-400" /> 💡 AI Form Tips
                      {isTipsExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                    </button>

                    {/* 3. 📷 Camera AI Pose Tracker */}
                    <button
                      onClick={() => setActivePoseExercise(ex.name)}
                      className="px-3 py-1.5 rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-300 text-xs font-bold flex items-center gap-1.5 hover:bg-purple-500/30 transition-all cursor-pointer"
                    >
                      <Camera className="w-3.5 h-3.5" /> Camera AI
                    </button>

                    {/* 4. AI Swap */}
                    <button
                      onClick={() => replaceExerciseWithAi(ex.id)}
                      className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-all cursor-pointer"
                      title="AI Swap Exercise"
                    >
                      <RefreshCw className="w-4 h-4" />
                    </button>

                    {/* 5. Delete Exercise */}
                    <button
                      onClick={() => removeExercise(ex.id)}
                      className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-slate-400 hover:text-rose-400 hover:bg-slate-800 transition-all cursor-pointer"
                      title="Remove Exercise"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Expandable AI Form Tips & Common Mistakes Drawer */}
                <AnimatePresence>
                  {isTipsExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="p-4 rounded-2xl bg-slate-950 border border-amber-500/30 space-y-3 text-xs"
                    >
                      {/* Proper Form & Technique */}
                      <div className="space-y-1.5">
                        <h6 className="font-extrabold text-amber-300 flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Proper Biomechanical Posture & Execution:
                        </h6>
                        <ul className="space-y-1 text-slate-300 text-[11px] leading-relaxed pl-2">
                          {tips.properForm.map((rule, rIdx) => (
                            <li key={rIdx} className="flex items-start gap-1.5">
                              <span className="text-emerald-400 font-bold">•</span>
                              <span>{rule}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tempo & Breathing */}
                      <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
                        <span className="font-extrabold text-cyan-300 flex items-center gap-1.5 text-[11px]">
                          <Activity className="w-3.5 h-3.5 text-cyan-400" /> Recommended Tempo & Breathing Rhythm:
                        </span>
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          {tips.breathingTempo}
                        </p>
                      </div>

                      {/* Common Mistakes */}
                      <div className="space-y-1.5">
                        <h6 className="font-extrabold text-rose-400 flex items-center gap-1.5">
                          <ShieldAlert className="w-4 h-4 text-rose-400" /> ❌ Common Form Mistakes to Avoid:
                        </h6>
                        <ul className="space-y-1 text-slate-300 text-[11px] leading-relaxed pl-2">
                          {tips.commonMistakes.map((mistake, mIdx) => (
                            <li key={mIdx} className="flex items-start gap-1.5">
                              <span className="text-rose-400 font-bold">•</span>
                              <span>{mistake}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Safety Advice */}
                      <div className="pt-2 border-t border-slate-800 text-[11px] text-slate-400">
                        <strong className="text-amber-400">🛡️ Safety Notice:</strong> {tips.safetyAdvice}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })
        )}
      </div>
        </div>
      )}
    </div>
  );
};
