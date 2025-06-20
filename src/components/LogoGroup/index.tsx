import { useRef } from 'react';
import { Group } from 'three';
import * as THREE from 'three';
import LogoTextComfortaa from './LogoTextComfortaa';
import LogoTextDancing from './LogoTextDancing';

function LogoGroup() {
  const logoGroupRef = useRef<Group>(null);

  return (
    <group position={[0, 0, 0]} ref={logoGroupRef} rotation={new THREE.Euler(0, 0, 0)}>        
      <LogoTextComfortaa scale={[1, 1, 1]} size={1.8} text={'Agent Hive AI'} position={[0, 1.2, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#6a6a6a'} />
      <LogoTextDancing scale={[1, 1, 1]} size={1.8} text={'better than real'} position={[0, -1.4, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#6a6a6a'} />
    </group>    
  );
}

export default LogoGroup;