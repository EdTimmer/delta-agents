import { useEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { Group } from "three";

interface Props {
  position: [number, number, number];
  rotation: THREE.Euler;
  text: string;
  color: string;
  scale:[number, number, number];
  size: number;
  currentAgentIndex?: number;
  assignedIndex?: number;
  isButtonText?: boolean;
}

const LogoTextMichroma = ({ position, rotation, text, color, scale, size }: Props) => {
  const [font, setFont] = useState<Font | null>(null);
  const groupRef = useRef<Group>(null);

  useEffect(() => {
    const loader = new FontLoader();
    loader.load('/fonts/michroma_regular.json', (loadedFont) => {
      setFont(loadedFont);
    });
  }, []);

  const textGeometry = useMemo(() => {
    if (!font) return null;  
    const textOptions = {
      font,
      size: size,
      depth: 0.2,
      curveSegments: 12,
      bevelEnabled: false,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 5,
    };

    const geometry = new TextGeometry(text, textOptions);
  
    geometry.computeBoundingBox();
    geometry.center();

    return geometry;
  }, [font]);

  if (!font || !textGeometry) return null;

  return (
    <group position={[0, 0, 0]} scale={[1.0, 1.0, 1.0]} ref={groupRef}>
      <mesh
        geometry={new THREE.BoxGeometry(4.5, 2, 3)}
        position={position}
      >
      <meshBasicMaterial transparent opacity={0} />
    </mesh>
      
      <mesh geometry={textGeometry} rotation={rotation} position={position} scale={scale}>
        <meshStandardMaterial
          color={color}
          roughness={0}
          metalness={1}
        />
      </mesh>
    </group>
  );
};

export default LogoTextMichroma;
