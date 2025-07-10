import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three';
import LogoGroup from './LogoGroup';
import { getPentagonPositions, getPentagonRotations } from '../utils/mathFunctions';

function FiveLogosGroup({ currentAgentIndex = 0 }: { currentAgentIndex?: number }) {
  const logoGroupRef = useRef<Group>(null);

  const pentagonRadius = 8;
  const positions = getPentagonPositions(pentagonRadius);
  const rotations = getPentagonRotations();
  
  // compute target rotation so selected logo faces the camera
  const num = positions.length;
  const angleStep = (2 * Math.PI) / num;
  const targetRotationY = (currentAgentIndex * angleStep) - Math.PI / 2;

  // set initial rotation on mount
  useEffect(() => {
    if (logoGroupRef.current) {
      logoGroupRef.current.rotation.y = targetRotationY;
    }
  }, []);

  // animate rotation towards target when currentAgentIndex changes
  useFrame((_, delta) => {
    if (!logoGroupRef.current) return;
    const currentY = logoGroupRef.current.rotation.y;
    logoGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      currentY,
      targetRotationY,
      delta * 5
    );
  });
   
  return (
    // outer group: rotate 90° clockwise around Z
    <group rotation={[0, 0, -Math.PI / 2]}>  
      <group position={[0, 0, 0]} scale={[0.3, 0.3, 0.3]} ref={logoGroupRef}>
        {positions.map((position, index) => (
          <LogoGroup
            key={index}
            currentAgentIndex={currentAgentIndex}
            position={position}
            rotation={rotations[index]}
            textTop={'module'}
            textBottom={`0${index + 1}`}
          />
        ))}
      </group>
    </group>
  );
}

export default FiveLogosGroup;