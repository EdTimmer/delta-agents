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

  const rotX = rotation[0];
  const rotY = rotation[1];
  const rotZ = rotation[2];

  // Set initial rotation once when component mounts
  useEffect(() => {
    if (groupRef.current && !initialRotationSet.current) {
      groupRef.current.rotation.set(rotX, rotY, rotZ);
      initialRotationSet.current = true;
    }
  }, [rotX, rotY, rotZ]);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.z += delta * 0.01; // Rotate the sphere around the z-axis
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