import { useRef, useMemo } from 'react';
import { Group } from 'three';
import * as THREE from 'three';
import LogoTextMichroma from './LogoTextMichroma';

interface LogoGroupProps {
  position?: [number, number, number];
  rotation?: [number, number, number];
  textTop?: string;
  textBottom: string;
  sizeTop?: number;
  sizeBottom?: number;
}

function LogoGroup({ position = [0, 0, 0], textTop, textBottom, sizeTop = 1.3, sizeBottom = 1.9 }: LogoGroupProps) {
  const logoGroupRef = useRef<Group>(null);
  // compute base rotation so local +Z (text front) points outward from center
  const baseRotationY = useMemo(() => {
    const [x, , z] = position;
    // rotate around Y so local +Z aligns with world vector (x, z)
    return Math.atan2(x, z);
  }, [position]);
  // static rotation around Z axis (45 degrees)
  const baseRotationZ = Math.PI / 2;

  return (
    <group
      position={[...position]}
      ref={logoGroupRef}
      rotation={new THREE.Euler(0, baseRotationY, baseRotationZ)}
    >
      {textTop && <LogoTextMichroma text={textTop} position={[0, 1, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#0e0e0e'} scale={[1.0, 1.0, 1.0]} size={sizeTop} />}
      <LogoTextMichroma text={textBottom} position={[0, -1, 0]} rotation={new THREE.Euler(0, 0, 0)} color={'#ffffff'} scale={[1.0, 1.0, 1.0]} size={sizeBottom} />
    </group>    
  );
}

export default LogoGroup;