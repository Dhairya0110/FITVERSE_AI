'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial, Sphere, Torus, Cylinder } from '@react-three/drei';
import { useFitStore } from '@/store/useFitStore';
import * as THREE from 'three';

const HologramMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  const ringRef = useRef<THREE.Mesh>(null!);
  const { avatar } = useFitStore();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z += delta * 0.8;
      ringRef.current.rotation.x += delta * 0.3;
    }
  });

  const scaleY = avatar.bodyType === 'skinny' ? 1.4 : avatar.bodyType === 'fit' ? 1.6 : avatar.bodyType === 'plus' ? 1.5 : 1.5;
  const scaleX = avatar.bodyType === 'skinny' ? 0.7 : avatar.bodyType === 'fit' ? 1.0 : avatar.bodyType === 'plus' ? 1.3 : 0.8;

  return (
    <group>
      {/* Outer Hologram Energy Ring */}
      <Torus ref={ringRef} args={[1.8, 0.03, 16, 100]} position={[0, 0, 0]}>
        <meshBasicMaterial color="#00e5ff" wireframe transparent opacity={0.6} />
      </Torus>

      {/* Cyber Torso / Core */}
      <mesh ref={meshRef} position={[0, 0, 0]} scale={[scaleX, scaleY, scaleX]}>
        <cylinderGeometry args={[0.6, 0.4, 1.8, 32]} />
        <MeshDistortMaterial
          color={avatar.bodyType === 'fit' ? '#00e5ff' : '#8b5cf6'}
          attach="material"
          distort={0.2}
          speed={2}
          wireframe
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Cyber Head */}
      <Sphere position={[0, 1.3 * (scaleY / 1.5), 0]} args={[0.35, 32, 32]}>
        <meshStandardMaterial color="#8b5cf6" wireframe roughness={0.1} />
      </Sphere>

      {/* Pedestal Base Ring */}
      <Cylinder position={[0, -1.2, 0]} args={[1.5, 1.5, 0.1, 32]}>
        <meshStandardMaterial color="#22c55e" emissive="#00e5ff" emissiveIntensity={0.5} wireframe />
      </Cylinder>
    </group>
  );
};

export const HologramAvatar: React.FC = () => {
  const { avatar, setSelectedAvatar } = useFitStore();

  return (
    <div className="glass-card p-6 relative overflow-hidden flex flex-col items-center">
      {/* Header */}
      <div className="w-full flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-bold text-white tracking-wide">3D Exercise Hologram & Avatar</h3>
          <p className="text-xs text-slate-400">Level {avatar.level} • {avatar.gender.toUpperCase()} ({avatar.bodyType.toUpperCase()})</p>
        </div>
        <span className="px-3 py-1 text-xs rounded-full bg-[#00e5ff]/10 border border-[#00e5ff]/40 text-[#00e5ff] font-semibold cyan-glow">
          Interactive R3F
        </span>
      </div>

      {/* Canvas Viewport */}
      <div className="w-full h-72 rounded-2xl bg-slate-950/80 border border-cyan-500/20 relative shadow-inner">
        <Canvas camera={{ position: [0, 0, 4.5], fov: 50 }}>
          <ambientLight intensity={0.8} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#00e5ff" />
          <pointLight position={[-10, -10, -10]} intensity={1} color="#8b5cf6" />
          <HologramMesh />
          <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={1.2} maxPolarAngle={Math.PI / 2} />
        </Canvas>

        {/* Cyber Overlay text */}
        <div className="absolute bottom-3 left-3 text-[10px] text-cyan-400/70 font-mono tracking-widest pointer-events-none">
          SYSTEM_STATUS // 3D_HOLO_RENDER_ONLINE
        </div>
      </div>

      {/* Body Type Evolution Controls */}
      <div className="w-full mt-4 flex items-center justify-between gap-2">
        <span className="text-xs text-slate-400 font-medium">Evolve Avatar:</span>
        <div className="flex gap-2">
          {(['skinny', 'lean', 'fit', 'plus'] as const).map((type) => (
            <button
              key={type}
              onClick={() => setSelectedAvatar(`${avatar.gender.charAt(0)}_${type}`, avatar.gender, type)}
              className={`px-3 py-1 text-xs rounded-lg capitalize transition-all ${
                avatar.bodyType === type
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-slate-950 font-bold shadow-[0_0_10px_rgba(0,229,255,0.5)]'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
