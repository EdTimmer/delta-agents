import { useRef } from 'react';
import { Group } from 'three';
import * as THREE from 'three';
import LogoTextLight from './LogoTextLight';

function LogoGroup() {
  const logoGroupRef = useRef<Group>(null);

  return (
    <group position={[0, 0, 0]} scale={[2.2, 2.2, 2.2]} ref={logoGroupRef} rotation={new THREE.Euler(0, 0, 0)}>        
      <LogoTextLight text={'agent hive ai'} position={[0, 0, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#6a6a6a'} />
    </group>    
  );
}

export default LogoGroup;