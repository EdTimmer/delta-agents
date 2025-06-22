import { useRef } from 'react';
import { Group } from 'three';
import * as THREE from 'three';
import LogoTextComfortaa from './LogoTextComfortaa';
import LogoTextMichroma from './LogoTextMichroma';

function LogoGroup() {
  const logoGroupRef = useRef<Group>(null);

  return (
    <group position={[0, 0, 0]} ref={logoGroupRef} rotation={new THREE.Euler(0, 0, 0)}>        
      <LogoTextComfortaa scale={[1, 1, 1]} size={1.9} text={'agent hive ai'} position={[0, 1.2, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#6a6a6a'} />
      <LogoTextMichroma scale={[1, 1, 1]} size={0.9} text={'better than real'} position={[0, -1.4, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#6a6a6a'} />
    </group>    
  );
}

export default LogoGroup;