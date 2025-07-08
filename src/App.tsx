import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { 
  AppContainer,
  InterfaceContainer,
  LeftColumn,
  TitleLarge,
  RightSpheresScene,
  TopLeftGlobeScene,
  RightColumn,
  LogoContainer,
  NavSection,
  Link,
  LightGlobeScene,
} from './App.styles'
import AgentButton from './components/AgentButton/AgentButton';
import Globe from './components/Globe';
import LogoGroup from './components/LogoGroup';
import GlobesRightGroup from './components/GlobesRightGroup';
import CenterContent from './components/CenterContent/CenterContent';

function App() {
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0)

  const getleftPosition = (index: number) => {  
    switch (index) {
      case 0:
        return '13%';
      case 1:
        return '13%';
      case 2:
        return '13%';
      case 3:
        return '50%';
      case 4:
        return '84%';
      default:
        return '50%';
    }
  } 

  return (    
    <AppContainer>
      <TopLeftGlobeScene>
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
          <PerspectiveCamera makeDefault fov={20} position={[0, 0, 8]} />
          <Globe position={[-0.6, 0.4, 0]} scale={0.8} rotation={[0, 0, 0]} modelFileName={'sphere_gold_8'} speedX={0.02} speedY={0} speedZ={0}/>
          <directionalLight position={[0, 0, 10]} color={'#fff'} intensity={1} />

          <Environment preset="forest" backgroundIntensity={1.0} />
        </Canvas>
      </TopLeftGlobeScene>

      <LightGlobeScene>
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
          <PerspectiveCamera makeDefault fov={20} position={[0, 0, 8]} />
          <Globe position={[0, -0.9, 0]} scale={0.3} rotation={[0, Math.PI / 2, Math.PI]} modelFileName={'light_green_3'} speedZ={0} speedY={0} speedX={0.08} />

          <directionalLight position={[0, -3, 0]} color={'#fff'} intensity={1} />
          <directionalLight position={[3, -3, 3]} color={'#fff'} intensity={0.5} />

          <Environment preset="forest" backgroundIntensity={1.0} />
        </Canvas>
      </LightGlobeScene>
        
      <LeftColumn>
        <NavSection>
        <TitleLarge>Delta agents</TitleLarge>
        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={0}
          currentAgentIndex={currentAgentIndex}
          label={'Agent 01'}
        />

        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={1}
          currentAgentIndex={currentAgentIndex}
          label={'Agent 02'}
        />

        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={2}
          currentAgentIndex={currentAgentIndex}
          label={'Agent 03'}
        />

        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={3}
          currentAgentIndex={currentAgentIndex}
          label={'Agent 04'}
        />

        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={4}
          currentAgentIndex={currentAgentIndex}
          label={'Agent 05'}
        />
        </NavSection>

        <NavSection>
          <Link href="https://www.edtimmer.com/" target="_blank" aria-label="Link to portfolio" title="Link to portfolio">edtimmer.com</Link>
        </NavSection>
      </LeftColumn>

        <InterfaceContainer>
          <CenterContent currentAgentIndex={currentAgentIndex} />
          <LogoContainer style={{ left: getleftPosition(currentAgentIndex) }}>
            <Canvas gl={{ antialias: true }}>
              <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} />
              <ambientLight intensity={1} />
              <LogoGroup currentAgentIndex={currentAgentIndex} />
              <Environment preset="forest" backgroundIntensity={1.0} />
            </Canvas>
          </LogoContainer> 
        </InterfaceContainer>

        <RightColumn />
        <RightSpheresScene>
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
            <PerspectiveCamera makeDefault fov={16} position={[0, 0, 10]} far={15} />
            <GlobesRightGroup separation={0.7} scale={1} position={[0, -0.7, 0]} rotation={[0.5, Math.PI / 2 - 0.7, 0]} currentAgentIndex={currentAgentIndex} />
            <Environment preset="forest" backgroundIntensity={0.2} />
          </Canvas>
        </RightSpheresScene>
    </AppContainer>    
  )
}

export default App
