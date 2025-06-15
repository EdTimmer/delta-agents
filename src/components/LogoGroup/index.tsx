import { useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import LogoTextBold from './LogoTextBold';
import * as THREE from 'three';
import LogoTextLight from './LogoTextLight';
import SpheresGroup from './SpheresGroup';
import colors from '../../styles/colors';

function LogoGroup() {
  const logoGroupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (logoGroupRef.current) {
      const time = clock.getElapsedTime();
      logoGroupRef.current.rotation.y = Math.sin(time * 0.8) * 0.02;
    }
  });

  return (
    <group position={[0, 0, 0]} scale={[2.2, 2.2, 2.2]} ref={logoGroupRef} rotation={new THREE.Euler(0, 0, 0)}>        
      <LogoTextLight text={'agent quest ai'} position={[0, 0, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#6a6a6a'} />
      {/* <LogoTextBold text={'agent quest ai'} position={[0, 0, 0]} rotation={new THREE.Euler(0, 0, 0)} color={getColor(currentAgentIndex)} /> */}
      {/* <LogoTextLight text={'bee bot ai'} position={[0.1, -0.7, 0]} rotation={new THREE.Euler(0, 0, 0)} color={colors.fairyTale} />       */}
      {/* <SpheresGroup position={[-3.25, 1.1, 0]} radius={0.32} speed={0.4} rotation={new THREE.Euler(Math.PI / 2, 0, 0)} sphereSize={0.22} color={'#6a6a6a'} /> */}
    </group>    
  );
}

export default LogoGroup;