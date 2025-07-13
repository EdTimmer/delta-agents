import { useRef, useEffect } from 'react';
import { useFrame } from "@react-three/fiber";
import { Group } from 'three';
import Globe from '../Globe';

interface Props {
  currentAgentIndex: number;
  separation?: number;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
}

function GlobesLeftGroup({ currentAgentIndex, separation = 1, scale = 1, position = [0, 0, 0], rotation = [0, 0, 0] }: Props) {
  const groupRef = useRef<Group>(null);
  const initialRotationSet = useRef(false);
  const animationStartTime = useRef<number | null>(null);
  const isAnimating = useRef(false);
  const previousAgentIndex = useRef<number>(currentAgentIndex);
  const directionRef = useRef<number>(1);

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
      // determine spin direction: forward or backward
      directionRef.current = currentAgentIndex > previousAgentIndex.current ? 1 : -1;
      isAnimating.current = true;
      animationStartTime.current = Date.now();
      previousAgentIndex.current = currentAgentIndex;
    }
  }, [currentAgentIndex]);

  useFrame((_state, delta) => {
    if (groupRef.current && isAnimating.current) {
      const elapsed = Date.now() - (animationStartTime.current || 0);
      const delayDuration = 0;
      const animationDuration = 5000;
      const totalDuration = delayDuration + animationDuration;

      if (elapsed < delayDuration) {
        // During delay period, do nothing
        return;
      } else if (elapsed < totalDuration) {
        // Animation period
        const animationElapsed = elapsed - delayDuration;
        const progress = animationElapsed / animationDuration;
        // Ease out cubic: 1 - (1 - x)^3
        const easeOut = 1 - Math.pow(1 - progress, 3);
        // Invert the easing to start fast and slow down
        const rotationSpeed = 1.5 * (1 - easeOut);
        // apply directional rotation
        groupRef.current.rotation.z += delta * rotationSpeed * directionRef.current;
      } else {
        isAnimating.current = false;
        animationStartTime.current = null;
      }
    }
  });

  // Create positions for a regular pentagon on the x/y plane
  const positions: [number, number, number][] = [];
  const numVertices = 5;
  const angleStep = (2 * Math.PI) / numVertices;
  
  for (let i = 0; i < numVertices; i++) {
    const angle = i * angleStep;
    const x = separation * Math.cos(angle);
    const y = separation * Math.sin(angle);
    positions.push([x, y, 0]); // Note: z=0 for x/y plane
  }
  
  // Model files for each globe
  const modelFiles = [
    'spirals_light_yellow',
    'dimples_light_purple',
    'grooves_light_blue_2',
    'light_12',
    'squares_light_red',
  ];

  return (
    <group position={position} ref={groupRef} scale={[scale, scale, scale]}>
      {positions.map((pos, index) => (
        <Globe 
          key={index}
          position={pos}
          scale={0.25}
          rotation={[0, 0, 0]}
          modelFileName={modelFiles[index]}
          speedX={0}
          speedY={0}
          speedZ={0}
        />
      ))}
    </group>    
  );
}

export default GlobesLeftGroup;