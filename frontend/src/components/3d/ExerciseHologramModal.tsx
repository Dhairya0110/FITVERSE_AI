'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Torus, Cylinder, Sphere, Box } from '@react-three/drei';
import { Exercise } from '@/types';
import { X, Play, Pause, RotateCcw, Eye, Sparkles, Volume2, FastForward } from 'lucide-react';
import * as THREE from 'three';

interface Props {
  exercise: Exercise | null;
  onClose: () => void;
}

/**
 * Mixamo-Style 3D Humanoid Anatomical Mannequin Skeleton Rig
 * Bends knees, elbows, shoulders, and hips dynamically per exercise protocol
 */
const MixamoStyleHumanoidRig: React.FC<{
  exercise: Exercise;
  isPlaying: boolean;
  highlightMuscle: boolean;
  speed: number;
}> = ({ exercise, isPlaying, highlightMuscle, speed }) => {
  const rootRef = useRef<THREE.Group>(null!);
  const chestRef = useRef<THREE.Mesh>(null!);
  const leftThighRef = useRef<THREE.Group>(null!);
  const rightThighRef = useRef<THREE.Group>(null!);
  const leftShinRef = useRef<THREE.Group>(null!);
  const rightShinRef = useRef<THREE.Group>(null!);
  const leftArmRef = useRef<THREE.Group>(null!);
  const rightArmRef = useRef<THREE.Group>(null!);
  const barbellRef = useRef<THREE.Group>(null!);

  const targetLower = (exercise.targetMuscle || '').toLowerCase();
  const nameLower = (exercise.name || '').toLowerCase();

  useFrame((state) => {
    if (!isPlaying || !rootRef.current) return;

    const t = state.clock.elapsedTime * 2.8 * speed;

    if (targetLower.includes('quad') || targetLower.includes('leg') || nameLower.includes('squat')) {
      // SQUAT ANIMATION: Deep Knee flex + Hip lowering
      const squatPhase = (Math.sin(t) + 1) / 2; // 0 to 1
      rootRef.current.position.y = -squatPhase * 0.7; // Lower torso

      if (leftThighRef.current) leftThighRef.current.rotation.x = -squatPhase * 1.2;
      if (rightThighRef.current) rightThighRef.current.rotation.x = -squatPhase * 1.2;

      if (leftShinRef.current) leftShinRef.current.rotation.x = squatPhase * 1.1;
      if (rightShinRef.current) rightShinRef.current.rotation.x = squatPhase * 1.1;

      if (barbellRef.current) barbellRef.current.position.y = 0.85; // Resting on shoulders
    } else if (targetLower.includes('chest') || nameLower.includes('press') || nameLower.includes('bench')) {
      // BENCH PRESS ANIMATION: Horizontal or Vertical Elbow Extension
      const pressPhase = Math.sin(t);
      if (barbellRef.current) barbellRef.current.position.z = 0.3 + pressPhase * 0.4;

      if (leftArmRef.current) leftArmRef.current.rotation.z = 0.4 + pressPhase * 0.3;
      if (rightArmRef.current) rightArmRef.current.rotation.z = -0.4 - pressPhase * 0.3;
    } else if (targetLower.includes('lat') || targetLower.includes('back')) {
      // LAT PULLDOWN ANIMATION: Overhead bar pull down to chest
      const pullPhase = (Math.sin(t) + 1) / 2;
      if (barbellRef.current) barbellRef.current.position.y = 1.4 - pullPhase * 0.75;

      if (leftArmRef.current) leftArmRef.current.rotation.z = 1.2 - pullPhase * 0.8;
      if (rightArmRef.current) rightArmRef.current.rotation.z = -1.2 + pullPhase * 0.8;
    } else {
      // OVERHEAD PRESS / GENERAL: Barbell pressing up
      const pressUp = (Math.sin(t) + 1) / 2;
      if (barbellRef.current) barbellRef.current.position.y = 0.85 + pressUp * 0.7;
    }
  });

  const muscleColor = highlightMuscle ? '#ff2a6d' : exercise.hologramColor || '#00e5ff';

  return (
    <group ref={rootRef} position={[0, -0.2, 0]}>
      {/* Outer Holographic Energy Ring Base */}
      <Torus position={[0, -1.2, 0]} args={[2.0, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#00e5ff" wireframe transparent opacity={0.6} />
      </Torus>

      {/* 1. HEAD & NECK */}
      <Sphere position={[0, 1.15, 0]} args={[0.2, 32, 32]}>
        <meshStandardMaterial color="#00e5ff" wireframe emissive="#00e5ff" emissiveIntensity={0.5} />
      </Sphere>

      {/* 2. TORSO / CHEST (Anatomical Mannequin Core) */}
      <mesh ref={chestRef} position={[0, 0.6, 0]}>
        <Box args={[0.5, 0.6, 0.3]}>
          <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.85} />
        </Box>
      </mesh>

      {/* TARGET MUSCLE GLOW HIGHLIGHT (Neon Pink when focus ON) */}
      <Sphere
        position={[
          0,
          targetLower.includes('chest') ? 0.65 : targetLower.includes('back') ? 0.6 : targetLower.includes('quad') ? -0.2 : 0.8,
          0.15,
        ]}
        args={[0.35, 32, 32]}
      >
        <meshStandardMaterial
          color={muscleColor}
          wireframe={!highlightMuscle}
          emissive={muscleColor}
          emissiveIntensity={highlightMuscle ? 1.2 : 0.3}
        />
      </Sphere>

      {/* 3. PELVIS / HIPS */}
      <Sphere position={[0, 0.15, 0]} args={[0.22, 16, 16]}>
        <meshStandardMaterial color="#7c3aed" wireframe />
      </Sphere>

      {/* 4. LEFT ARM & FOREARM */}
      <group ref={leftArmRef} position={[-0.35, 0.8, 0]}>
        {/* Upper Arm */}
        <Cylinder position={[-0.15, -0.25, 0]} args={[0.07, 0.06, 0.45, 16]} rotation={[0, 0, 0.3]}>
          <meshStandardMaterial color="#00e5ff" wireframe />
        </Cylinder>
        {/* Elbow Joint & Forearm */}
        <Sphere position={[-0.25, -0.5, 0]} args={[0.06, 16, 16]}>
          <meshStandardMaterial color="#ff2a6d" />
        </Sphere>
      </group>

      {/* 5. RIGHT ARM & FOREARM */}
      <group ref={rightArmRef} position={[0.35, 0.8, 0]}>
        {/* Upper Arm */}
        <Cylinder position={[0.15, -0.25, 0]} args={[0.07, 0.06, 0.45, 16]} rotation={[0, 0, -0.3]}>
          <meshStandardMaterial color="#00e5ff" wireframe />
        </Cylinder>
        {/* Elbow Joint & Forearm */}
        <Sphere position={[0.25, -0.5, 0]} args={[0.06, 16, 16]}>
          <meshStandardMaterial color="#ff2a6d" />
        </Sphere>
      </group>

      {/* 6. LEFT THIGH & SHIN (Knee Flexion Joint) */}
      <group ref={leftThighRef} position={[-0.18, 0.05, 0]}>
        {/* Thigh (Quadriceps) */}
        <Cylinder position={[0, -0.3, 0]} args={[0.11, 0.09, 0.55, 16]}>
          <meshStandardMaterial color={targetLower.includes('quad') && highlightMuscle ? '#ff2a6d' : '#8b5cf6'} wireframe />
        </Cylinder>

        {/* Knee Joint & Shin */}
        <group ref={leftShinRef} position={[0, -0.55, 0]}>
          <Sphere args={[0.08, 16, 16]}>
            <meshStandardMaterial color="#ff2a6d" />
          </Sphere>
          <Cylinder position={[0, -0.3, 0]} args={[0.08, 0.06, 0.55, 16]}>
            <meshStandardMaterial color="#00e5ff" wireframe />
          </Cylinder>
        </group>
      </group>

      {/* 7. RIGHT THIGH & SHIN (Knee Flexion Joint) */}
      <group ref={rightThighRef} position={[0.18, 0.05, 0]}>
        {/* Thigh (Quadriceps) */}
        <Cylinder position={[0, -0.3, 0]} args={[0.11, 0.09, 0.55, 16]}>
          <meshStandardMaterial color={targetLower.includes('quad') && highlightMuscle ? '#ff2a6d' : '#8b5cf6'} wireframe />
        </Cylinder>

        {/* Knee Joint & Shin */}
        <group ref={rightShinRef} position={[0, -0.55, 0]}>
          <Sphere args={[0.08, 16, 16]}>
            <meshStandardMaterial color="#ff2a6d" />
          </Sphere>
          <Cylinder position={[0, -0.3, 0]} args={[0.08, 0.06, 0.55, 16]}>
            <meshStandardMaterial color="#00e5ff" wireframe />
          </Cylinder>
        </group>
      </group>

      {/* 8. BARBELL & WEIGHT PLATES ASSEMBLY */}
      <group ref={barbellRef} position={[0, 0.85, 0.3]}>
        <Cylinder args={[0.03, 0.03, 2.2, 16]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#00e5ff" emissive="#00e5ff" emissiveIntensity={0.8} />
        </Cylinder>
        <Cylinder position={[-1.0, 0, 0]} args={[0.28, 0.28, 0.08, 32]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#ff2a6d" emissive="#ff2a6d" emissiveIntensity={0.6} />
        </Cylinder>
        <Cylinder position={[1.0, 0, 0]} args={[0.28, 0.28, 0.08, 32]} rotation={[0, 0, Math.PI / 2]}>
          <meshStandardMaterial color="#ff2a6d" emissive="#ff2a6d" emissiveIntensity={0.6} />
        </Cylinder>
      </group>

      {/* Base Pedestal */}
      <Cylinder position={[0, -1.35, 0]} args={[1.6, 1.6, 0.1, 32]}>
        <meshStandardMaterial color="#22c55e" emissive="#00e5ff" emissiveIntensity={0.5} wireframe />
      </Cylinder>
    </group>
  );
};

export const ExerciseHologramModal: React.FC<Props> = ({ exercise, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [highlightMuscle, setHighlightMuscle] = useState(true);
  const [speed, setSpeed] = useState(1.0);

  const speakGuidance = (text: string) => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0;
      utterance.pitch = 1.1;
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    if (exercise) {
      const guidanceText = `Demonstrating Mixamo-style 3D humanoid hologram for ${exercise.name}. Target muscle focus: ${exercise.targetMuscle}. Perform ${exercise.sets} sets of ${exercise.reps} repetitions.`;
      speakGuidance(guidanceText);
    }
  }, [exercise]);

  if (!exercise) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-fadeIn">
      <div className="glass-card max-w-3xl w-full p-6 relative flex flex-col border border-cyan-500/40 shadow-[0_0_50px_rgba(0,229,255,0.35)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full glass-card hover:bg-rose-500/20 hover:text-rose-400 text-slate-400 transition-all z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase">
            <Sparkles className="w-3.5 h-3.5" /> Mixamo-Style 3D Humanoid Hologram
          </div>
          <h3 className="text-2xl font-black text-white mt-1">{exercise.name}</h3>
          <p className="text-xs text-slate-400">
            Target Muscle: <span className="text-cyan-400 font-bold">{exercise.targetMuscle}</span> • Sets: {exercise.sets} • Reps: {exercise.reps} • Rest: {exercise.restSec}s
          </p>
        </div>

        {/* 3D R3F Viewport */}
        <div className="w-full h-80 rounded-2xl bg-slate-950 border border-cyan-500/30 relative overflow-hidden shadow-inner">
          <Canvas camera={{ position: [0, 0, 4.8], fov: 50 }}>
            <ambientLight intensity={1.0} />
            <pointLight position={[10, 10, 10]} intensity={1.8} color="#00e5ff" />
            <pointLight position={[-10, -10, -10]} intensity={1.2} color="#ff2a6d" />
            <MixamoStyleHumanoidRig exercise={exercise} isPlaying={isPlaying} highlightMuscle={highlightMuscle} speed={speed} />
            <OrbitControls enableZoom={true} autoRotate={isPlaying} autoRotateSpeed={1.5 * speed} />
          </Canvas>

          {/* Muscle Highlight Indicator Badge */}
          <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur border border-slate-800 rounded-xl px-3 py-1.5 text-[11px] text-slate-300 flex items-center gap-2">
            <span className={`w-2.5 h-2.5 rounded-full ${highlightMuscle ? 'bg-pink-500 animate-ping' : 'bg-cyan-400'}`}></span>
            <span>Target Muscle Focus: {exercise.targetMuscle}</span>
          </div>

          <div className="absolute bottom-3 left-3 text-[10px] text-cyan-400/80 font-mono tracking-widest pointer-events-none">
            3D_HUMANOID_RIG // {exercise.name.toUpperCase().replace(/\s+/g, '_')} // SLOW_MOTION_{speed}X
          </div>
        </div>

        {/* Form Execution Instructions */}
        <div className="mt-3 p-3 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1">
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">Guided Posture Instructions:</span>
          <ul className="text-xs text-slate-300 list-disc list-inside space-y-0.5">
            {exercise.instructions?.map((ins, i) => (
              <li key={i}>{ins}</li>
            ))}
          </ul>
        </div>

        {/* Control Bar */}
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-slate-900/90 border border-slate-800">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-600 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md hover:scale-105 transition-all cursor-pointer"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'Pause' : 'Play Form'}</span>
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                setTimeout(() => setIsPlaying(true), 50);
              }}
              className="p-2 rounded-xl glass-card border border-slate-800 text-slate-300 hover:text-white text-xs flex items-center gap-1 cursor-pointer"
              title="Replay Animation"
            >
              <RotateCcw className="w-4 h-4" /> Replay
            </button>

            <button
              onClick={() => setSpeed(speed === 1.0 ? 0.5 : speed === 0.5 ? 1.5 : 1.0)}
              className="px-3 py-2 rounded-xl glass-card border border-slate-800 text-cyan-300 text-xs font-bold flex items-center gap-1 cursor-pointer"
            >
              <FastForward className="w-3.5 h-3.5" /> Speed: {speed}x
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => speakGuidance(`${exercise.name}. ${exercise.instructions.join('. ')}`)}
              className="px-3 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-1.5 hover:bg-emerald-500/20 transition-all cursor-pointer"
            >
              <Volume2 className="w-4 h-4" /> Spoken Guidance
            </button>

            <button
              onClick={() => setHighlightMuscle(!highlightMuscle)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                highlightMuscle
                  ? 'bg-pink-500/20 border border-pink-500 text-pink-400 shadow-[0_0_10px_rgba(255,42,109,0.5)]'
                  : 'glass-card border-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              <Eye className="w-4 h-4" /> Muscle Focus: {highlightMuscle ? 'ON' : 'OFF'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
