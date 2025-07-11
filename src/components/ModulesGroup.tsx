import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three';
import LogoGroup from './LogoGroup';
import { getPentagonPositions, getPentagonRotations } from '../utils/mathFunctions';

function ModulesGroup({ currentAgentIndex = 0 }: { currentAgentIndex?: number }) {
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
    // set initial rotation on mount only
    if (logoGroupRef.current) {
      logoGroupRef.current.rotation.y = (currentAgentIndex * ((2 * Math.PI) / positions.length)) - Math.PI / 2;
    }
  }, []);

  // animate rotation towards target when currentAgentIndex changes
  useFrame((_, delta) => {
    if (!logoGroupRef.current) return;
    const currentY = logoGroupRef.current.rotation.y;
    logoGroupRef.current.rotation.y = THREE.MathUtils.lerp(
      currentY,
      targetRotationY,
      delta * 2  // slower rotation speed
    );
  });
   
  return (
    <group rotation={[0, 0, -Math.PI / 2]}>  
      <group position={[0, 0, 0]} scale={[0.3, 0.3, 0.3]} ref={logoGroupRef}>
        {positions.map((position, index) => (
          <LogoGroup
            key={index}
            position={position}
            rotation={rotations[index]}
            textTop={'selection'}
            textBottom={`0${index + 1}`}
            sizeTop={0.8}
            sizeBottom={1.9}
          />
        ))}
      </group>
    </group>
  );
}

export default ModulesGroup;