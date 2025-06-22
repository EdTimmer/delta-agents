import { useRef } from 'react';
import { Group } from 'three';
import * as THREE from 'three';
import RingBlue from './RingBlue';
import LogoTextMichroma from '../../LogoGroup/LogoTextMichroma';

interface Props {
  isMouseEntered: boolean;
  isFacingUser: boolean;
  // setIsFacingUser: (isFacingUser: boolean) => void;
  // guiy: string;
  // isClickToggled: boolean;
  // isSmallScreen: boolean;
}

function ButtonGroup({ isMouseEntered, isFacingUser }: Props) {
  const groupRef = useRef<Group>(null);

  // useFrame((state, delta) => {
  //   if (groupRef.current) {
  //     // Apply a "breathing" effect on the X axis.
  //     groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.12;

  //     // Determine the starting rotation.
  //     const initialRotation = isFacingUser ? 0 : Math.PI;
  //     // Set the target rotation: rotate an extra PI when the mouse enters.
  //     // const targetY = (isMouseEntered || isClickToggled) ? initialRotation - Math.PI : initialRotation;

  //     const targetY = isMouseEntered && !isFacingUser ? initialRotation - Math.PI : initialRotation;
      
  //     // Incorporate delta into the interpolation factor for frame rate independence.
  //     const speed = 3; // Adjust this to control the smoothness/speed
  //     const lerpFactor = 1 - Math.exp(-speed * delta);
      
  //     // Interpolate the current rotation towards the target rotation.
  //     groupRef.current.rotation.y = MathUtils.lerp(
  //       groupRef.current.rotation.y,
  //       targetY,
  //       lerpFactor
  //     );

  //     // Optionally, snap to target if very close.
  //     if (Math.abs(groupRef.current.rotation.y - targetY) < 0.001) {
  //       groupRef.current.rotation.y = targetY;
  //     }
  //   }
  // });

  return (
    <group position={[0, 0, 0]} scale={[1.0, 1.0, 1.0]} ref={groupRef}>
      <RingBlue 
        scale={22.0} 
        position={[0, 0, 0]} 
        rotation={[0, 0, 0]}
        isMouseEntered={isMouseEntered}
        isFacingUser={isFacingUser}
      />
      <LogoTextMichroma
        position={[0, 0, 0]}
        text={'agent'}
        color={'#6a6a6a'}
        scale={[1.0, 1.0, 1.0]}
        rotation={new THREE.Euler(0, 0, 0)}
        size={1.0}
      />
    </group>    
  );
}

export default ButtonGroup;
