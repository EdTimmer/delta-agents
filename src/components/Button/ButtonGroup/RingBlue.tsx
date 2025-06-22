import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';
import { Group, MathUtils } from "three";

interface Props {
  children?: React.ReactNode;
  [key: string]: any;
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
  isMouseEntered: boolean;
  isFacingUser: boolean;
  assignedIndex: number;
}

const filePaths = [
  '../../models/ring_blue_3.glb',
  '../../models/ring_green_3.glb',
  '../../models/ring_yellow_3.glb',
  '../../models/ring_red_3.glb',
  '../../models/ring_purple_3.glb',
];



const RingBlue = ({scale = 1.0, position = [0, 0, 0], rotation = [0, 0, 0], isFacingUser, isMouseEntered, assignedIndex}: Props) => {
  
  const { nodes, materials } = useGLTF(filePaths[assignedIndex] || filePaths[0]);
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      // Apply a "breathing" effect on the X axis.
      // groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.12;

      // Determine the starting rotation.
      const initialRotation = isFacingUser ? 0 : Math.PI;
      // Set the target rotation: rotate an extra PI when the mouse enters.
      // const targetY = (isMouseEntered || isClickToggled) ? initialRotation - Math.PI : initialRotation;

      const targetY = isMouseEntered && !isFacingUser ? initialRotation - Math.PI : initialRotation;
      
      // Incorporate delta into the interpolation factor for frame rate independence.
      const speed = 3; // Adjust this to control the smoothness/speed
      const lerpFactor = 1 - Math.exp(-speed * delta);
      
      // Interpolate the current rotation towards the target rotation.
      groupRef.current.rotation.y = MathUtils.lerp(
        groupRef.current.rotation.y,
        targetY,
        lerpFactor
      );

      // Optionally, snap to target if very close.
      if (Math.abs(groupRef.current.rotation.y - targetY) < 0.001) {
        groupRef.current.rotation.y = targetY;
      }
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
};

export default RingBlue;
