import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three';
import LogoTextMichroma from './LogoTextMichroma';
import LogoTextLight from './LogoTextLight';

const agentNames = [
  '01',
  '02',
  '03',
  '04',
  '05',
];

function LogoGroup({ currentAgentIndex = 0 }: { currentAgentIndex?: number }) {
  const logoGroupRef = useRef<Group>(null);

  const validIndex = Math.max(0, Math.min(currentAgentIndex, agentNames.length - 1));
  const agentNumber = agentNames[validIndex] || '01';

  console.log('LogoGroup render - currentAgentIndex:', currentAgentIndex, 'agentNumber:', agentNumber);
  useFrame((state) => {
    if (logoGroupRef.current) {
      const time = state.clock.getElapsedTime();
      const cycleLength = 16;
      const pauseDuration = 7;
      const rockingDuration = cycleLength - pauseDuration;
      
      const cycleTime = time % cycleLength;
      
      if (cycleTime < rockingDuration) {
        // Rocking phase
        const rockingTime = cycleTime;
        const normalizedTime = (rockingTime / rockingDuration) * Math.PI * 2; // Complete sine cycle
        const rockingAngle = Math.sin(normalizedTime) * 0.05; // Gentle amplitude
        logoGroupRef.current.rotation.y = rockingAngle;
      } else {
        // Pause phase - hold the last position
        logoGroupRef.current.rotation.y = 0; // Return to neutral position during pause
      }
    }
  });
  
  return (
    <group position={[0, 0, 0]} ref={logoGroupRef} rotation={new THREE.Euler(0, 0, 0)}>     
      <LogoTextLight text={'agent'} position={[0, 1.1, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#0e0e0e'} scale={[1.0, 1.0, 1.0]} size={1.3} />   
      <LogoTextMichroma text={agentNumber} position={[0, -1.1, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#ffffff'} scale={[1.0, 1.0, 1.0]} size={1.9} />
    </group>    
  );
}

export default LogoGroup;