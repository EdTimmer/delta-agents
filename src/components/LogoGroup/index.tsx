import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Group } from 'three';
import * as THREE from 'three';
import LogoTextComfortaa from './LogoTextComfortaa';
import LogoTextLight from './LogoTextLight';
import LogoTextBold from './LogoTextBold';
import SpheresGroup from './SpheresGroup';

const agentNames = [
  '01',
  '02',
  '03',
  '04',
  '05',
];

function LogoGroup({ currentAgentIndex = 0 }: { currentAgentIndex?: number }) {
  const logoGroupRef = useRef<Group>(null);

  // Directly derive the agent number from the prop instead of using state
  const validIndex = Math.max(0, Math.min(currentAgentIndex, agentNames.length - 1));
  const agentNumber = agentNames[validIndex] || '01';

  console.log('LogoGroup render - currentAgentIndex:', currentAgentIndex, 'agentNumber:', agentNumber);
  useFrame((state) => {
    if (logoGroupRef.current) {
      const time = state.clock.getElapsedTime();
      const cycleLength = 16; // Total cycle length in seconds
      const pauseDuration = 7; // Pause duration in seconds
      const rockingDuration = cycleLength - pauseDuration;
      
      // Calculate which part of the cycle we're in
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

  // const getXposition = (index: number) => {
  //   if (index === 0) return -6;
  //   return 0;
  // }
  
  return (
    <group position={[0, 0, 0]} ref={logoGroupRef} rotation={new THREE.Euler(0, 0, 0)}>     
    <LogoTextLight text={'agent'} position={[0, 1.1, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#0e0e0e'} scale={[1.0, 1.0, 1.0]} size={1.3} />   
      {/* <LogoTextBold text={agentNumber} position={[-0.35, -1.1, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#ffffff'} /> */}
      <LogoTextComfortaa text={agentNumber} position={[0, -1.1, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#ffffff'} scale={[1.0, 1.0, 1.0]} size={1.9} />

      {/* <SpheresGroup position={[-10, 0, 0]} radius={0.8} speed={0.12} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} sphereSize={0.5} color={'#646464'} /> */}
    </group>    
  );
}

export default LogoGroup;