import { useRef, useEffect } from 'react';
import { Group } from 'three';
import * as THREE from 'three';
import { useSpring, animated } from '@react-spring/three';
import LogoTextMichromaVertical from './LogoGroup/LogoTextMichromaVertical';

function Demo3DGroup({ currentAgentIndex = 0 }: { currentAgentIndex?: number }) {
  const logoGroupRef = useRef<Group>(null);
  const hasMounted = useRef(false);

  const prevAgentIndexRef = useRef(currentAgentIndex);
  const [{ spinRotation }, spinApi] = useSpring(() => ({ spinRotation: 0 }));

  useEffect(() => {
    if (hasMounted.current) {
      const direction = currentAgentIndex > prevAgentIndexRef.current ? 1 : -1;
      spinApi.start({
        from: { spinRotation: 0 },
        to: { spinRotation: direction * Math.PI * 2 },
        reset: true,
        config: { mass: 2.5, tension: 40, friction: 10 },
        onRest: () => {
          // reset value after each spin
          spinApi.set({ spinRotation: 0 });
        },
      });
      prevAgentIndexRef.current = currentAgentIndex;
    } else {
      hasMounted.current = true;
    }
  }, [currentAgentIndex, spinApi]);

  return (
    <animated.group
      ref={logoGroupRef}
      position={[0, 0, 0]}
      rotation-y={spinRotation as unknown as number}
    >
      <LogoTextMichromaVertical
        position={[0, 1.2, 0]}
        rotation={new THREE.Euler(0, 0, 0)}
        text="DEMO—3D"
        color="#ffffff"
        scale={[1, 1, 1]}
        size={0.4}
        letterSpacing={0.2}
      />
    </animated.group>
  );
}

export default Demo3DGroup;