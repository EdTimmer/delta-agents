import { useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';
import { Font, FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js'

interface Props {
  position: [number, number, number];
  rotation: THREE.Euler;
  text: string;
  color: string;
  scale: [number, number, number];
  size: number;
  letterSpacing?: number;
}

const LogoTextMichromaVertical = ({ position, rotation, text, color, scale, size, letterSpacing = 0 }: Props) => {
  const [font, setFont] = useState<Font | null>(null);
  useEffect(() => {
    const loader = new FontLoader();
    loader.load('/fonts/michroma_regular.json', (loadedFont) => {
      setFont(loadedFont);
    });
  }, []);

  const textGeometries = useMemo(() => {
    if (!font) return [];
    const opts = {
      font,
      size,
      depth: 0.2,
      curveSegments: 12,
      bevelEnabled: false,
      bevelThickness: 0.1,
      bevelSize: 0.1,
      bevelOffset: 0,
      bevelSegments: 5,
    };
    return text.split('').map((char) => {
      const geom = new TextGeometry(char, opts);
      geom.computeBoundingBox();
      geom.center();
      return geom;
    });
  }, [font, text, size]);

  // Calculate the total height to center the entire string vertically
  const totalHeight = useMemo(() => {
    if (textGeometries.length === 0) return 0;
    return (textGeometries.length - 1) * (size + letterSpacing);
  }, [textGeometries, size, letterSpacing]);

  if (!font || textGeometries.length === 0) return null;

  return (
    <group position={position} rotation={rotation} scale={scale}>
      {textGeometries.map((geom, idx) => (
        <mesh 
          key={idx} 
          geometry={geom} 
          position={[0, -idx * (size + letterSpacing) + totalHeight / 2, 0]}
        >
          <meshStandardMaterial color={color} roughness={0} metalness={1} />
        </mesh>
      ))}
    </group>
  );
};

export default LogoTextMichromaVertical;
