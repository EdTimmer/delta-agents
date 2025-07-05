import { useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';


function LightsGroup() {
  const groupRef = useRef<Group>(null);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const time = clock.getElapsedTime();
      groupRef.current.rotation.y = Math.sin(time * 0.5) * 0.2;
    }
  });

  return (
    <group position={[0, 0, 0]} ref={groupRef} rotation={new THREE.Euler(0, 0, 0)}>
      <directionalLight position={[-4, 0.2, 5]} color={'white'} />   
      <directionalLight position={[-3, 0.2, 5]} color={'white'} />
      <directionalLight position={[-2, 0.2, 5]} color={'white'} />
      <directionalLight position={[-1, 0.2, 5]} color={'white'} />
      <directionalLight position={[0, 0.2, 5]} color={'white'} />
      <directionalLight position={[1, 0.2, 5]} color={'white'} />
      <directionalLight position={[2, 0.2, 5]} color={'white'} />
      <directionalLight position={[3, 0.2, 5]} color={'white'} />
      <directionalLight position={[4, 0.2, 5]} color={'white'} />

      <directionalLight position={[-2, -0.2, 5]} color={'white'} />
      <directionalLight position={[-1, -0.2, 5]} color={'white'} />
      <directionalLight position={[0, -0.2, 5]} color={'white'} />
      <directionalLight position={[1, -0.2, 5]} color={'white'} />
      <directionalLight position={[2, -0.2, 5]} color={'white'} />
    </group>    
  );
}

export default LightsGroup;