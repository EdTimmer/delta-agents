import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { CameraShake, Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { 
  AppContainer,
  BotScene,
  LinkContainer,
  InterfaceContainer,
  StyledInput,
  SubmitButton,
  OutputText,
  BackgroundCanvas,
  LogoContainer,
  Column,
  ColumnWithGap,
  WavesContainer,
  OutputContainer,
  StyledForm,
  CenteredRow,
  FlexStartRow,
  SpaceBetweenRow,
  LeftColumn,
} from './App.styles'
import BeeBot from './components/BeeBot';
import { useSpring, animated } from '@react-spring/three';
import Waves from './components/Waves';
import LogoGroup from './components/LogoGroup';
import { Add } from '@mui/icons-material';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import colors from './styles/colors';
import AgentButton from './components/AgentButton/AgentButton';

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
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  // cycle through five different agents
  const handleChangeAgent = (index: number) => {
    setCurrentAgentIndex(index);
  }
  // console.log('currentAgentIndex in App.tsx :>> ', currentAgentIndex);
  return (    
    <AppContainer>
      <Column>
        <LogoContainer>
          <Canvas gl={{ antialias: true }}>
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} />
            <ambientLight intensity={1} />

            <LogoGroup />
            {/* <Environment files="/public/images/mud_road_puresky_2k.hdr" environmentIntensity={1}/> */}
            <directionalLight position={[-3, 0, 5]} color={'#fff'} />
            <directionalLight position={[-2, 0, 5]} color={'#fff'} />
            <directionalLight position={[-1, 0, 5]} color={'#fff'} />
            <Environment preset="apartment" backgroundIntensity={2.0} />
          </Canvas>
        </LogoContainer>  

        <CenteredRow>
          <LeftColumn>
            <AgentButton
              setCurrentAgentIndex={setCurrentAgentIndex}
              assignedIndex={0}
              currentAgentIndex={currentAgentIndex}
            >
              Agent 01
            </AgentButton>

            <AgentButton
              setCurrentAgentIndex={setCurrentAgentIndex}
              assignedIndex={1}
              currentAgentIndex={currentAgentIndex}
            >
              Agent 03
            </AgentButton>

            <AgentButton
              setCurrentAgentIndex={setCurrentAgentIndex}
              assignedIndex={2}
              currentAgentIndex={currentAgentIndex}
            >
              Agent 05
            </AgentButton>

            <AgentButton
              setCurrentAgentIndex={setCurrentAgentIndex}
              assignedIndex={3}
              currentAgentIndex={currentAgentIndex}
            >
              Agent 07
            </AgentButton>

            <AgentButton
              setCurrentAgentIndex={setCurrentAgentIndex}
              assignedIndex={4}
              currentAgentIndex={currentAgentIndex}
            >
              Agent 11
            </AgentButton>
          </LeftColumn>

          <InterfaceContainer>
            <FlexStartRow>
              <StyledForm onSubmit={handleSubmit}>
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
                onClick={handleSubmit}
              >                
                <SearchIcon
                  sx={{
                    color: colors.seasalt,
                    fontSize: 20
                  }}
                />               
              </SubmitButton>
              </StyledForm>
            </FlexStartRow>

            <OutputContainer>
              <OutputText>{outputText}</OutputText>
            </OutputContainer>
          </InterfaceContainer>

          <BotScene>
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

                <directionalLight position={[-1, -2, 5]} color={'#fff'} />

              <animated.group rotation-y={isSpinning ? spinRotation : rotation} position={[0, -1.2, 0]}>
                <BeeBot
                  agentFileName={agents[currentAgentIndex]}
                  position={[0, 0, 0]}
                  rotation={[0, 0, 0]}
                  scale={2.4}
                  animationSpeed={inputIsFocused ? 4 : 1}
                />
              </animated.group>              

              <Environment preset="forest" backgroundIntensity={0.2} />
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
          </BotScene>
        </CenteredRow>
      </Column>

      <WavesContainer>
          <BackgroundCanvas>
            <Canvas camera={{ position: [0, 0.25, 0.4], fov: 75 }}>
              <Waves />
            </Canvas>
          </BackgroundCanvas>
        </WavesContainer>

        <LinkContainer>
          <a href="https://www.edtimmer.com/" target="_blank" aria-label="Link to portfolio" title="Link to portfolio">edtimmer.com</a>
        </LinkContainer>
    </AppContainer>    
  )
}

export default App
