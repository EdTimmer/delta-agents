import { useRef, useEffect } from 'react';
import { useFrame } from "@react-three/fiber";
import { Group } from 'three';
import Globe from '../Globe'

interface Props {
  separation?: number;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

function GlobesRightGroup({ separation = 1, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: Props) {
  const groupRef = useRef<Group>(null);
  const initialRotationSet = useRef(false);

  // Set initial rotation once when component mounts
  useEffect(() => {
    if (groupRef.current && !initialRotationSet.current) {
      groupRef.current.rotation.set(rotation[0], rotation[1], rotation[2]);
      initialRotationSet.current = true;
    }
  }, [rotation[0], rotation[1], rotation[2]]);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.025; // Rotate the sphere around the z-axis
      // groupRef.current.rotation.x += delta * 0.05; // Optional: add some rotation on the x-axis
    }
  });

  return (
    <group position={position} ref={groupRef} scale={[scale, scale, scale]}>
      <Globe position={[-1 * separation, 0, 0]} scale={0.25} rotation={[0, 0, 0]} modelFileName={'sphere_gold_12'} />
      <Globe position={[0, 1 * separation, 0]} scale={0.25} rotation={[0, 0, 0]} modelFileName={'sphere_gold_13'} />
      <Globe position={[1 * separation, 0, 0]} scale={0.25} rotation={[0, 0, 0]} modelFileName={'sphere_gold_9'} />
      <Globe position={[0, -1 * separation, 0]} scale={0.25} rotation={[0, 0, 0]} modelFileName={'sphere_gold_5'} />
    </group>    
  );
}

export default GlobesRightGroup;