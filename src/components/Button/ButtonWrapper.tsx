import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { useEffect, useState } from 'react';
import ButtonGroup from './ButtonGroup';

interface Props {
  setCurrentAgentIndex: (index: number) => void;
  currentAgentIndex: number;
  assignedIndex: number;
  setIsReset: (isReset: boolean) => void;
}

const ButtonWrapper = ({ setCurrentAgentIndex, currentAgentIndex, assignedIndex, setIsReset }: Props) => {
  const [isMouseEntered, setIsMouseEntered] = useState(false);
  const [isFacingUser, setIsFacingUser] = useState(false);

  
  const handleOnMouseEnter = () => {
    console.log('mouse entered :>> ');
    setIsMouseEntered(true);
  }
  const handleOnMouseLeave = () => {
    console.log('mouse left :>> ');
    setIsMouseEntered(false);
  }

  const handleButtonClick = (assignedIndex: number) => {
    setIsFacingUser(true);
    setCurrentAgentIndex(assignedIndex);
    setIsReset?.(true); // Reset the state when a new agent is selected
  };

  useEffect(() => {
    if (currentAgentIndex !== assignedIndex) {
      setIsFacingUser(false);
    }
  }, [currentAgentIndex, assignedIndex]);


  return (
    <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} onClick={() => handleButtonClick(assignedIndex)} style={{ width: '100%', height: '100%' }}>
      <Canvas gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} />
        <ambientLight intensity={1} />
        <ButtonGroup isMouseEntered={isMouseEntered} isFacingUser={isFacingUser} />
        <Environment preset="apartment" backgroundIntensity={2.0} />
      </Canvas>
    </div>   
  );
}

export default ButtonWrapper;