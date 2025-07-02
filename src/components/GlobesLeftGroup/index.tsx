import { useRef, useEffect } from 'react';
import { useFrame } from "@react-three/fiber";
import { Group } from 'three';
import * as THREE from 'three';
import Globe from '../Globe'


interface Props {
  separation?: number;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

function GlobesLeftGroup({ separation = 1, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: Props) {
  const groupRef = useRef<Group>(null);

  // Set initial rotation once when component mounts
  useEffect(() => {
    if (groupRef.current) {
      groupRef.current.rotation.set(rotation[0], rotation[1], rotation[2]);
    }
  }, []);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.1; // Rotate the sphere around the z-axis
      // groupRef.current.rotation.x += delta * 0.05; // Optional: add some rotation on the x-axis
    }
  });

  return (
    <group position={position} ref={groupRef} scale={[scale, scale, scale]} rotation={new THREE.Euler(...rotation)}>        
      <Globe position={[-1 * separation, 0, 0]} scale={0.25} rotation={[0, 0, 0]} modelFileName={'sphere_gold_1'} />
      <Globe position={[0, 1 * separation, 0]} scale={0.25} rotation={[0, 0, 0]} modelFileName={'sphere_gold_2'} />
      <Globe position={[1 * separation, 0, 0]} scale={0.25} rotation={[0, 0, 0]} modelFileName={'sphere_gold_11'} />
      <Globe position={[0, -1 * separation, 0]} scale={0.25} rotation={[0, 0, 0]} modelFileName={'sphere_gold_8'} />
    </group>    
  );
}

export default GlobesLeftGroup;