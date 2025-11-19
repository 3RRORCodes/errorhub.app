import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Stars(props: any) {
  const ref = useRef<any>(null);
  
  // Generate random points in a sphere
  const sphere = useMemo(() => {
    const temp = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      const r = 1.2 * Math.cbrt(Math.random()); // Radius distribution
      const theta = Math.random() * 2 * Math.PI;
      const phi = Math.acos(2 * Math.random() - 1);
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      temp[i * 3] = x;
      temp[i * 3 + 1] = y;
      temp[i * 3 + 2] = z;
    }
    return temp;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 15;
      ref.current.rotation.y -= delta / 20;
      
      // Subtle mouse interaction
      const mouseX = state.pointer.x;
      const mouseY = state.pointer.y;
      ref.current.rotation.x += mouseY * 0.0005;
      ref.current.rotation.y += mouseX * 0.0005;
    }
  });

  return (
    <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} rotation={[0, 0, Math.PI / 4]} {...props}>
      <PointMaterial
        transparent
        color="#8B5CF6"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

const StarField: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian via-transparent to-obsidian z-10 opacity-80" />
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Stars />
      </Canvas>
    </div>
  );
};

export default StarField;