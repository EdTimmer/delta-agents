import { useRef, useEffect } from 'react';
import { useFrame } from "@react-three/fiber";
import { Group } from 'three';
import Globe from './Globe'

interface Props {
  currentAgentIndex: number;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

function OneGlobeGroup({ currentAgentIndex, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: Props) {
  const groupRef = useRef<Group>(null);
  const initialRotationSet = useRef(false);
  const animationStartTime = useRef<number | null>(null);
  const isAnimating = useRef(false);
  const previousAgentIndex = useRef<number>(currentAgentIndex);

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

  // Start animation when currentAgentIndex changes
  useEffect(() => {
    if (previousAgentIndex.current !== currentAgentIndex) {
      isAnimating.current = true;
      animationStartTime.current = Date.now();
      previousAgentIndex.current = currentAgentIndex;
    }
  }, [currentAgentIndex]);

  useFrame((_state, delta) => {
    if (groupRef.current && isAnimating.current) {
      const elapsed = Date.now() - (animationStartTime.current || 0);
      const animationDuration = 5000;

      if (elapsed < animationDuration) {
        const progress = elapsed / animationDuration;
        // Ease out cubic: 1 - (1 - x)^3
        const easeOut = 1 - Math.pow(1 - progress, 3);
        // Invert the easing to start fast and slow down
        const rotationSpeed = 1.5 * (1 - easeOut);
        groupRef.current.rotation.y += delta * rotationSpeed;
      } else {
        isAnimating.current = false;
        animationStartTime.current = null;
      }
    }
  });

  return (
    <group position={position} ref={groupRef} scale={[scale, scale, scale]}>
      <Globe position={[0, 0, 0]} scale={1} rotation={[0, 0, 0]} modelFileName={'sphere_gold_8'} speedZ={0} speedY={0} speedX={0} />
    </group>    
  );
}

export default OneGlobeGroup;