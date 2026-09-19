'use client';

import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

interface DataNodeProps {
  position: [number, number, number];
  size?: number;
  color?: string;
  delay?: number;
}

export default function DataNode({ position, size = 0.15, color = '#00d4ff', delay = 0 }: DataNodeProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.MeshStandardMaterial>(null);
  const [hovered, setHovered] = useState(false);

  // Initial random offset for unique animation phases
  const offset = useMemo(() => Math.random() * Math.PI * 2, []);

  useFrame((state) => {
    if (meshRef.current) {
      // Subtle rotation
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2 + offset;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3 + offset;
      
      // Pulse scale slightly
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2 + offset) * 0.05;
      meshRef.current.scale.set(scale, scale, scale);
    }

    if (materialRef.current) {
      // Pulse emissive intensity
      const baseIntensity = hovered ? 2.5 : 1.5;
      materialRef.current.emissiveIntensity = baseIntensity + Math.sin(state.clock.elapsedTime * 3 + offset) * 0.5;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.5}
      floatIntensity={1}
      floatingRange={[-0.2, 0.2]}
    >
      <mesh
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[size, 1]} />
        <meshStandardMaterial
          ref={materialRef}
          color={color}
          emissive={color}
          emissiveIntensity={1.5}
          wireframe={true}
          transparent
          opacity={0.8}
        />
        
        {/* Core solid sphere */}
        <mesh>
          <sphereGeometry args={[size * 0.5, 16, 16]} />
          <meshBasicMaterial color={hovered ? '#ffffff' : color} />
        </mesh>
      </mesh>
    </Float>
  );
}
