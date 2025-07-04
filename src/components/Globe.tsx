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
  speedY?: number;
  speedX?: number;
  speedZ?: number;
}

const Globe = forwardRef<any, Props>(({scale = 1.0, position = [0, 0, 0], rotation = [0, 0, 0], modelFileName, speedX = 0.025, speedY = 0.025, speedZ = 0.025}, _ref) => {
  const { nodes, materials } = useGLTF(`../../models/${modelFileName}.glb`) as any  ;
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * speedX; // Rotate the sphere around the y-axis
      groupRef.current.rotation.x += delta * speedY; // Optional: add some rotation on the x-axis
      groupRef.current.rotation.z += delta * speedZ; // Optional: add some rotation on the z-axis
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