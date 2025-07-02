import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef, useRef } from "react";
import * as THREE from 'three';

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
  modelFileName: string;
}

const Globe = forwardRef<any, Props>(({scale = 1.0, position = [0, 0, 0], rotation = [0, 0, 0], modelFileName}, _ref) => {
  const { nodes, materials } = useGLTF(`../../models/${modelFileName}.glb`) as any  ;
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.1; // Rotate the sphere around the y-axis
      groupRef.current.rotation.x += delta * 0.05; // Optional: add some rotation on the x-axis
    }
  });
  
  return (
    <group position={position} rotation={rotation} ref={groupRef}>
      {Object.values(nodes)
        .filter((n) => n instanceof THREE.Mesh)
        .map((mesh) => (
          <mesh
            key={mesh.uuid}
            geometry={mesh.geometry}
            material={materials[mesh.material.name]}
            castShadow
            receiveShadow
            scale={scale}
          />
        ))}
    </group>
  );
});

export default Globe;