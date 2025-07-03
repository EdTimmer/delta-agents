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

function GlobesRightGroup({ separation = 1, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: Props) {
  const groupRef = useRef<Group>(null);
  const baseRotation = useRef<[number, number, number]>([0, 0, 0]);

  // Set initial rotation and store base rotation
  useEffect(() => {
    if (groupRef.current) {
      baseRotation.current = [...rotation];
      groupRef.current.rotation.set(rotation[0], rotation[1], rotation[2]);
    }
  }, [rotation]);

  useFrame((state) => {
    if (groupRef.current) {
      // Apply continuous rotation on top of base rotation
      groupRef.current.rotation.set(
        baseRotation.current[0],
        baseRotation.current[1], 
        baseRotation.current[2] + (state.clock.elapsedTime * 0.015)
      );
    }
  });

  return (
    <group position={position} ref={groupRef} scale={[scale, scale, scale]} rotation={new THREE.Euler(...rotation)}>
      <Globe position={[-1 * separation, 0, 0]} scale={0.25} rotation={[0, 0, 0]} modelFileName={'sphere_gold_9'} />
      <Globe position={[0, 1 * separation, 0]} scale={0.25} rotation={[0, 0, 0]} modelFileName={'sphere_gold_1'} />
      <Globe position={[1 * separation, 0, 0]} scale={0.2} rotation={[0, 0, 0]} modelFileName={'sphere_gold_2'} />
      <Globe position={[0, -1 * separation, 0]} scale={0.25} rotation={[0, 0, 0]} modelFileName={'sphere_gold_5'} />
    </group>    
  );
}

export default GlobesRightGroup;