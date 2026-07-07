'use client';

import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, Sparkles } from '@react-three/drei';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

/* The central glass orb with a distort material — slowly morphs and
   reacts to the pointer. */
function GlassOrb() {
  const mesh = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();

  useFrame((state) => {
    if (!mesh.current) return;
    const t = state.clock.elapsedTime;
    mesh.current.rotation.y = t * 0.15;
    mesh.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    // subtle pointer follow
    const x = (state.pointer.x * viewport.width) / 8;
    const y = (state.pointer.y * viewport.height) / 8;
    mesh.current.position.x += (x - mesh.current.position.x) * 0.04;
    mesh.current.position.y += (y - mesh.current.position.y) * 0.04;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={mesh} castShadow>
        <icosahedronGeometry args={[1.4, 12]} />
        <MeshDistortMaterial
          color="#F5A300"
          emissive="#E69500"
          emissiveIntensity={0.25}
          roughness={0.05}
          metalness={0.9}
          distort={0.35}
          speed={1.8}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  );
}

/* Small orbiting accent spheres */
function Orbiters() {
  const group = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (group.current) group.current.rotation.y = state.clock.elapsedTime * 0.3;
  });

  const positions = useMemo(
    () =>
      Array.from({ length: 3 }, (_, i) => {
        const angle = (i / 3) * Math.PI * 2;
        return [Math.cos(angle) * 2.6, Math.sin(angle * 1.5) * 0.8, Math.sin(angle) * 2.6] as [
          number,
          number,
          number
        ];
      }),
    []
  );

  return (
    <group ref={group}>
      {positions.map((p, i) => (
        <Float key={i} speed={2} floatIntensity={2}>
          <mesh position={p} castShadow>
            <sphereGeometry args={[0.18, 32, 32]} />
            <meshStandardMaterial
              color={i === 0 ? '#FFD87A' : '#F5A300'}
              emissive={i === 0 ? '#FFD87A' : '#F5A300'}
              emissiveIntensity={0.6}
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={1.2} castShadow />
      <pointLight position={[-5, -3, 2]} color="#F5A300" intensity={2} />
      <pointLight position={[3, 4, -2]} color="#FFD87A" intensity={1.5} />

      <group>
        <GlassOrb />
        <Orbiters />
      </group>

      {/* Glowing particles */}
      <Sparkles
        count={60}
        scale={8}
        size={3}
        speed={0.4}
        color="#F5A300"
        opacity={0.6}
      />

      {/* HDR environment for realistic reflections */}
      <Environment preset="city" />
    </Canvas>
  );
}
