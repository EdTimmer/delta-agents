import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

interface RotatingEnvironmentProps {
  preset?: string;
  backgroundIntensity?: number;
  speed?: number;
}

function RotatingEnvironment({ 
  preset = "apartment", 
  backgroundIntensity = 2.0, 
  speed = 0.5 
}: RotatingEnvironmentProps) {
  const envRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (envRef.current) {
      envRef.current.rotation.y += delta * speed;
    }
  });

  return (
    <>
      {/* Static environment for reflections */}
      <Environment preset={preset as any} backgroundIntensity={0} background={false} />
      
      {/* Rotating visual environment background */}
      <group ref={envRef}>
        <mesh scale={[100, 100, 100]}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial 
            side={THREE.BackSide} 
            color="#87CEEB" 
            transparent
            opacity={0.3}
          />
        </mesh>
        
        {/* Rotating lights to create dynamic reflections */}
        <directionalLight position={[10, 10, 5]} intensity={0.5} color="#ffffff" />
        <directionalLight position={[-5, 5, -8]} intensity={0.3} color="#ffa366" />
        <pointLight position={[8, -3, 6]} intensity={0.4} color="#66aaff" distance={20} />
        <pointLight position={[-6, 4, -8]} intensity={0.3} color="#ffff66" distance={15} />
        <spotLight position={[0, 10, 0]} angle={0.3} intensity={0.6} color="#ffffff" target-position={[0, 0, 0]} />
      </group>
      
      {/* Static background */}
      <Environment preset={preset as any} backgroundIntensity={backgroundIntensity} background />
    </>
  );
}

export default RotatingEnvironment;
