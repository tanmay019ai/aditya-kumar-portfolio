'use client';

import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Line } from '@react-three/drei';
import * as THREE from 'three';
import DataNode from './DataNode';
import ParticleField from './ParticleField';

// Core central structure
function CentralCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    if (coreRef.current) {
      coreRef.current.rotation.x = time * 0.1;
      coreRef.current.rotation.y = time * 0.15;
    }
    if (outerRef.current) {
      outerRef.current.rotation.x = -time * 0.05;
      outerRef.current.rotation.y = -time * 0.08;
      outerRef.current.rotation.z = time * 0.02;
      
      // Pulse scale
      const scale = 1 + Math.sin(time * 2) * 0.02;
      outerRef.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <group position={[3, 0, -2]}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh ref={coreRef}>
          <octahedronGeometry args={[1.5, 0]} />
          <meshStandardMaterial 
            color="#00d4ff" 
            emissive="#00d4ff"
            emissiveIntensity={0.8}
            wireframe 
            transparent 
            opacity={0.3} 
          />
        </mesh>
        <mesh ref={outerRef}>
          <icosahedronGeometry args={[2.2, 1]} />
          <meshStandardMaterial 
            color="#7c3aed" 
            emissive="#7c3aed"
            emissiveIntensity={0.4}
            wireframe 
            transparent 
            opacity={0.15} 
          />
        </mesh>
        
        {/* Core bright center */}
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshBasicMaterial color="#ffffff" />
        </mesh>
        
        {/* Glow halo */}
        <mesh>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshBasicMaterial color="#00d4ff" transparent opacity={0.2} />
        </mesh>
      </Float>
    </group>
  );
}

// Generates connection lines between nodes
function NetworkConnections({ nodes }: { nodes: [number, number, number][] }) {
  const linesRef = useRef<THREE.Group>(null);
  
  // Create line pairs based on distance
  const lines = useMemo(() => {
    const pairs: [THREE.Vector3, THREE.Vector3][] = [];
    const maxDist = 5.0;
    
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const p1 = new THREE.Vector3(...nodes[i]);
        const p2 = new THREE.Vector3(...nodes[j]);
        if (p1.distanceTo(p2) < maxDist) {
          pairs.push([p1, p2]);
        }
      }
      
      // Connect to core
      const p1 = new THREE.Vector3(...nodes[i]);
      const core = new THREE.Vector3(3, 0, -2);
      if (p1.distanceTo(core) < 7.0) {
        pairs.push([p1, core]);
      }
    }
    return pairs;
  }, [nodes]);

  useFrame((state) => {
    if (linesRef.current) {
      // Gentle pulse on opacity for all lines
      const opacity = 0.15 + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
      linesRef.current.children.forEach(child => {
        if (child instanceof THREE.Line && child.material instanceof THREE.LineBasicMaterial) {
          child.material.opacity = opacity;
        }
      });
    }
  });

  return (
    <group ref={linesRef}>
      {lines.map((pair, idx) => (
        <Line
          key={idx}
          points={[pair[0], pair[1]]}
          color="#7c3aed"
          lineWidth={1}
          transparent
          opacity={0.15}
        />
      ))}
    </group>
  );
}

// Scene controller that handles mouse interaction
function SceneController() {
  const { camera, size, pointer } = useThree();
  const target = new THREE.Vector3(0, 0, 0);

  useFrame(() => {
    // Parallax effect based on pointer
    target.x = (pointer.x * 2);
    target.y = (pointer.y * 2);
    target.z = camera.position.z;

    // Smoothly interpolate camera position
    camera.position.x += (target.x - camera.position.x) * 0.02;
    camera.position.y += (target.y - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

export default function HeroScene() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate deterministic random positions for nodes
  const nodes = useMemo(() => {
    const count = isMobile ? 6 : 12;
    const positions: [number, number, number][] = [];
    
    // Seeded random for consistent layout
    let seed = 12345;
    const random = () => {
      const x = Math.sin(seed++) * 10000;
      return x - Math.floor(x);
    };
    
    for (let i = 0; i < count; i++) {
      positions.push([
        (random() - 0.5) * 12,
        (random() - 0.5) * 8,
        (random() - 0.5) * 8 - 2
      ]);
    }
    return positions;
  }, [isMobile]);

  return (
    <div className="absolute inset-0 w-full h-full -z-10 bg-transparent">
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#7c3aed" />
        
        <CentralCore />
        
        {nodes.map((pos, i) => (
          <DataNode 
            key={i} 
            position={pos} 
            size={0.1 + Math.random() * 0.15}
            color={i % 3 === 0 ? '#7c3aed' : '#00d4ff'}
          />
        ))}
        
        <NetworkConnections nodes={nodes} />
        
        <ParticleField count={isMobile ? 150 : 300} />
        
        <SceneController />
        
        {/* Optional: Add orbit controls for debugging or extra interaction */}
        {/* <OrbitControls enableZoom={false} enablePan={false} /> */}
      </Canvas>
    </div>
  );
}
