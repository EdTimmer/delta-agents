import { useRef } from 'react';
import { Group } from 'three';
import * as THREE from 'three';
import RingBlue from './RingBlue';
import LogoTextMichroma from '../../LogoGroup/LogoTextMichroma';

interface Props {
  isMouseEntered: boolean;
  isFacingUser: boolean;
  assignedIndex: number;
  currentAgentIndex: number;
}

const logoTextOptions = [
  'agent 01',
  'agent 03',
  'agent 05',
  'agent 07',
  'agent 11',
]

function ButtonGroup({ isMouseEntered, isFacingUser, assignedIndex, currentAgentIndex }: Props) {
  const groupRef = useRef<Group>(null);

  return (
    <group position={[0, 0, 0]} scale={[1.0, 1.0, 1.0]} ref={groupRef}>
      <RingBlue 
        scale={12.0} 
        position={[0, 0, 0]} 
        rotation={[0, 0, 0]}
        isMouseEntered={isMouseEntered}
        isFacingUser={isFacingUser}
        assignedIndex={assignedIndex}
      />
      <LogoTextMichroma
        position={[0, 0, 0]}
        text={logoTextOptions[assignedIndex] || 'agent'}
        color={'#6a6a6a'}
        scale={[1.0, 1.0, 1.0]}
        rotation={new THREE.Euler(0, 0, 0)}
        size={0.44}
        currentAgentIndex={currentAgentIndex}
        assignedIndex={assignedIndex}
        isButtonText={true}
      />
    </group>    
  );
}

export default ButtonGroup;
