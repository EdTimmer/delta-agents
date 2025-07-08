import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef, useRef } from "react";
import * as THREE from 'three';

interface Props {
  children?: React.ReactNode;
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
  modelFileName: string;
  speedY?: number;
  speedX?: number;
  speedZ?: number;
}

const Globe = forwardRef<THREE.Group, Props>(({scale = 1.0, position = [0, 0, 0], rotation = [0, 0, 0], modelFileName, speedX = 0.015, speedY = 0.015, speedZ = 0.015}) => {
  const { nodes, materials } = useGLTF(`../../models/${modelFileName}.glb`);
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
        .filter((n): n is THREE.Mesh => n instanceof THREE.Mesh)
        .map((mesh) => {
          const material = Array.isArray(mesh.material) ? mesh.material[0] : mesh.material;
          return (
            <mesh
              key={mesh.uuid}
              geometry={mesh.geometry}
              material={materials[material.name]}
              castShadow
              receiveShadow
              scale={scale}
            />
          );
        })}
    </group>
  );
});

export default Globe;