import { useRef, useMemo } from 'react';
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

interface LogoGroupProps {
  currentAgentIndex?: number;
  position?: [number, number, number];
  rotation?: [number, number, number]; // Not used in this component
  textTop: string;
  textBottom: string;
}

function LogoGroup({ currentAgentIndex = 0, position = [0, 0, 0], textTop, textBottom }: LogoGroupProps) {
  const logoGroupRef = useRef<Group>(null);
  // compute base rotation so local +Z (text front) points outward from center
  const baseRotationY = useMemo(() => {
    const [x, , z] = position;
    // rotate around Y so local +Z aligns with world vector (x, z)
    return Math.atan2(x, z);
  }, [position]);
  // static rotation around Z axis (45 degrees)
  const baseRotationZ = Math.PI / 2;

  const validIndex = Math.max(0, Math.min(currentAgentIndex, agentNames.length - 1));
  const agentNumber = agentNames[validIndex] || '01';

  console.log('LogoGroup render - currentAgentIndex:', currentAgentIndex, 'agentNumber:', agentNumber);
  // No animation: set static orientation facing outward
  

  return (
    <group
      position={[...position]}
      ref={logoGroupRef}
      rotation={new THREE.Euler(0, baseRotationY, baseRotationZ)}
    >
      <LogoTextLight text={textTop} position={[0, 1.1, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#0e0e0e'} scale={[1.0, 1.0, 1.0]} size={1.3} />
      <LogoTextMichroma text={textBottom} position={[0, -1.1, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#ffffff'} scale={[1.0, 1.0, 1.0]} size={1.9} />
    </group>    
  );
}

export default LogoGroup;