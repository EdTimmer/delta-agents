import {  useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

interface Props {
  agentFileName: string;
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  animationSpeed?: number;
}

const BeeBot = (
  (
    {
      agentFileName = "bee_bot12_blue.glb",
      scale = 1,
      position = [0, 0, 0],
      rotation = [0, 0, 0],
      animationSpeed = 1,
    }: Props,
  ) => {
    const parentGroupRef = useRef<THREE.Group>(null);
    const groupRef = useRef<THREE.Group>(null);

    // Load the GLTF model with its animations
    const { animations, scene } = useGLTF(
      "../../models/" + agentFileName
    );
    console.log("Loaded GLTF model:", agentFileName);
    const { actions } = useAnimations(animations, parentGroupRef);

     useEffect(() => {
      Object.values(actions).forEach((a) => {
        if (a) {
          a.timeScale = animationSpeed; // Set the speed
          a.play();
        }
      });
    }, [actions, animationSpeed]);

    // set initial rotation
    useEffect(() => {
      if (groupRef.current) {
        groupRef.current.rotation.set(
          rotation[0],
          rotation[1],
          rotation[2]
        );
      }
    }, [rotation]);

    // Up and down floating effect
    // useFrame(() => {
    //   if (parentGroupRef.current) {
    //     const elapsedTime = clock.current.getElapsedTime();
    //     // Calculate new Y position using sine wave
    //     const newY = initialY.current + Math.sin(elapsedTime * floatSpeed) * floatAmplitude;
        
    //     // Update only the Y component of position
    //     parentGroupRef.current.position.y = newY;
    //   }
    // });

    return (
      <group ref={parentGroupRef} position={position as [number, number, number]}>
        <primitive
          ref={groupRef}
          object={scene}
          rotation={rotation}
          scale={scale}
        />
      </group>
    );
  }
);

export default BeeBot;