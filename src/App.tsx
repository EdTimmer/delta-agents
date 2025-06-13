import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { CameraShake, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { 
  AppContainer,
  MainContainer,
  SceneContent,
  LinkContainer,
  InputContainer,
  StyledInput,
  SubmitButton,
  ChangeAgentButton,
  OutputText,
} from './App.styles'
import BeeBot from './components/BeeBot';
import { useSpring, animated } from '@react-spring/three';
;

function App() {
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('initial text output');
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);

  const agents = [
    'bee_bot12_blue.glb',
    'bee_bot12_green.glb',
    'bee_bot12_yellow.glb',
    'bee_bot12_red.glb',    
    'bee_bot12_purple.glb'
  ];

  const { rotation } = useSpring({
    rotation: inputIsFocused ? -Math.PI / 4 : 0,
    config: { mass: 1, tension: 120, friction: 14 } // Adjust these values to control animation feel
  });

  const { spinRotation } = useSpring({
    spinRotation: isSpinning ? Math.PI * 2 : 0,
    config: { mass: 2.5, tension: 40, friction: 10 },
    onRest: () => {
      if (isSpinning) {
        setIsSpinning(false); // Reset after animation completes
      }
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Message submitted:', inputText);
    setIsSpinning(true);
    setOutputText(`Processing: ${inputText}`); // Optional: Update output text

    // Process the input here - connect to AI backend, etc.
    // Clear input after submission
    setInputText('');
  };

  // cycle through five different agents
  const handleChangeAgent = () => {
    setCurrentAgentIndex((prevIndex) => (prevIndex + 1) % agents.length);
  }

  return (
    <>
      <AppContainer>
        <InputContainer>
          <form onSubmit={handleSubmit}>
            <StyledInput
              type="text"
              placeholder="Ask me anything..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onFocus={() => setInputIsFocused(true)}
              onBlur={() => setInputIsFocused(false)}
            />
            <SubmitButton 
              type="submit"
              disabled={!inputText.trim()}
            >
              Submit
            </SubmitButton>

            <ChangeAgentButton 
              type="button"
              onClick={() => {handleChangeAgent()}}
            >Change Agent</ChangeAgentButton>
          </form>

          <OutputText>{outputText}</OutputText>
        </InputContainer>

        <SceneContent>
          <MainContainer>

            <Canvas
              gl={{
                antialias: true,
                toneMapping: THREE.ACESFilmicToneMapping
              }}
              onCreated={({ gl }) => {
                gl.toneMapping = THREE.ACESFilmicToneMapping;
                gl.toneMappingExposure = 1.0;
                }}
              >
                <PerspectiveCamera makeDefault fov={20} position={[0, 0, 10]} />

                <directionalLight position={[0, -2, 5]} color={'#ffe6b3'} />

              <animated.group rotation-y={isSpinning ? spinRotation : rotation} position={[1, 0, 0]}>
                <BeeBot
                  agentFileName={agents[currentAgentIndex]}
                  position={[0, 0, 0]}
                  rotation={[0, 0, 0]}
                  scale={1}
                  // fileName={'bee_bot12_blue.glb'}
                  animationSpeed={inputIsFocused ? 4 : 1} // Speed up animation when input is focused
                />
              </animated.group>
              

              <Environment preset="forest" backgroundIntensity={0.2} />
              {/* <OrbitControls enableDamping={true} /> */}
              <CameraShake
                maxYaw={0.1} // Max amount camera can yaw in either direction
                maxPitch={0.05} // Max amount camera can pitch in either direction
                maxRoll={0.1} // Max amount camera can roll in either direction
                yawFrequency={0.1} // Frequency of the the yaw rotation
                pitchFrequency={0.1} // Frequency of the pitch rotation
                rollFrequency={0.1} // Frequency of the roll rotation
                intensity={0.5} // initial intensity of the shake
                decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
              />
            </Canvas>
          </MainContainer>
        </SceneContent>

        <LinkContainer>
          <a href="https://www.edtimmer.com/" target="_blank" aria-label="Link to portfolio" title="Link to portfolio">edtimmer.com</a>
        </LinkContainer>
      </AppContainer>
    </>
  )
}

export default App
