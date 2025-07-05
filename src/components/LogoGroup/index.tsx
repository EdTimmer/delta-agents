import { useRef } from 'react';
import { Group } from 'three';
import * as THREE from 'three';
import LogoTextComfortaa from './LogoTextComfortaa';
import LogoTextMichroma from './LogoTextMichroma';
import LogoTextBold from './LogoTextBold';

function LogoGroup() {
  const logoGroupRef = useRef<Group>(null);

  return (
    <group position={[0, 0, 0]} ref={logoGroupRef} rotation={new THREE.Euler(0, 0, 0)}>        
      <LogoTextBold text={'Delta Flow'} position={[0, 0, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#000'} />
    </group>    
  );
}

export default LogoGroup;