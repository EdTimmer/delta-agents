import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
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
    setIsMouseEntered(true);
  }
  const handleOnMouseLeave = () => {
    setIsMouseEntered(false);
  }

  const handleButtonClick = (assignedIndex: number) => {
    setIsFacingUser(true);
    setCurrentAgentIndex(assignedIndex);
    setIsReset?.(true);
  };

  useEffect(() => {
    if (currentAgentIndex !== assignedIndex) {
      setIsFacingUser(false);
    } else {
      setIsFacingUser(true);
    }
  }, [currentAgentIndex, assignedIndex]);

  return (
    <div onMouseEnter={handleOnMouseEnter} onMouseLeave={handleOnMouseLeave} onClick={() => handleButtonClick(assignedIndex)} style={{ width: '100%', height: '140px' }}>
      <Canvas gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} />
        <ambientLight intensity={1} />
        <ButtonGroup isMouseEntered={isMouseEntered} isFacingUser={isFacingUser} assignedIndex={assignedIndex} currentAgentIndex={currentAgentIndex} />
        <Environment preset="apartment" backgroundIntensity={2.0} />
        {assignedIndex === currentAgentIndex && (
          <>
            <directionalLight position={[-0.4, 0, 2]} intensity={1} />
            <directionalLight position={[-0.2, 0, 2]} intensity={1} />
            <directionalLight position={[0, 0, 2]} intensity={1} />
            <directionalLight position={[0.2, 0, 2]} intensity={1} />
            <directionalLight position={[0.4, 0, 2]} intensity={1} />
          </>
        )}
      </Canvas>
    </div>   
  );
}

export default ButtonWrapper;