import { useEffect, useRef } from 'react';
import { Group } from 'three';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { RectAreaLightUniformsLib } from 'three/addons/lights/RectAreaLightUniformsLib.js'


function LightsGroup() {
  const groupRef = useRef<Group>(null);

  // useFrame(({ clock }) => {
  //   if (groupRef.current) {
  //     const time = clock.getElapsedTime();
  //     groupRef.current.rotation.y = Math.sin(time * 0.1) * 0.2;
  //   }
  // });

  const lightRef = useRef<THREE.RectAreaLight>(null)
  // useEffect(() => {
  //   RectAreaLightUniformsLib.init()
  //   if (lightRef.current) {
  //     lightRef.current.lookAt(0, 0, 0)
  //   }
  // }, [])

  return (
    <group position={[0, 0, 0]} ref={groupRef} rotation={new THREE.Euler(0, 0, 0)}>
      <directionalLight position={[-2.5, 0, 5]} color={'white'} intensity={0.05} />
      <directionalLight position={[-2, -0.2, 5]} color={'white'} intensity={0.05} />
      <directionalLight position={[-1.5, 0, 5]} color={'white'} intensity={0.05} />
      <directionalLight position={[-1, -0.2, 5]} color={'white'} intensity={0.05} />
      <directionalLight position={[-0.5, 0, 5]} color={'white'} intensity={0.05} />
      <directionalLight position={[0, -0.2, 5]} color={'white'} intensity={0.05} />
      <directionalLight position={[0.5, 0, 5]} color={'white'} intensity={0.05} />
      <directionalLight position={[1, -0.2, 5]} color={'white'} intensity={0.05} />
      <directionalLight position={[1.5, 0, 5]} color={'white'} intensity={0.05} />
      <directionalLight position={[2, -0.2, 5]} color={'white'} intensity={0.05} />
      <directionalLight position={[2.5, 0, 5]} color={'white'} intensity={0.05} />

      {/* <rectAreaLight
        ref={lightRef}
        width={5}
        height={3}
        intensity={1}
        color={'white'}
        position={[0, 0, 5]}
      /> */}
    </group>    
  );
}

export default LightsGroup;