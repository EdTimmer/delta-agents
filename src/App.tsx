import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { 
  AppContainer,
  InterfaceContainer,
  LeftColumn,
  TitleLarge,
  RightSpheresScene,
  TopLeftGlobeScene,
  RightColumn,
  LogoContainerRight,
  NavSection,
  Link,
  LogoContainerLeft,
} from './App.styles'
import AgentButton from './components/AgentButton/AgentButton';
import GlobesRightGroup from './components/GlobesRightGroup';
import CenterContent from './components/CenterContent/CenterContent';
import TopGlobeGroup from './components/TopGlobeGroup';
import ModulesGroup from './components/ModulesGroup';
import Demo3DGroup from './components/Demo3DGroup';

function App() {
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);

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
          <TopGlobeGroup currentAgentIndex={currentAgentIndex} scale={0.7} position={[-0.4, 0.4, 0]} rotation={[0, 0, 0]} />
          <directionalLight position={[0, 0, 10]} color={'#fff'} intensity={1} />

          <Environment preset="forest" backgroundIntensity={1.0} />
        </Canvas>
      </TopLeftGlobeScene>
        
      <LeftColumn>
        <NavSection>
        <TitleLarge>Demo - 3D</TitleLarge>
        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={0}
          currentAgentIndex={currentAgentIndex}
          label={'Selection 01'}
        />

        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={1}
          currentAgentIndex={currentAgentIndex}
          label={'Selection 02'}
        />

        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={2}
          currentAgentIndex={currentAgentIndex}
          label={'Selection 03'}
        />

        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={3}
          currentAgentIndex={currentAgentIndex}
          label={'Selection 04'}
        />

        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={4}
          currentAgentIndex={currentAgentIndex}
          label={'Selection 05'}
        />
        </NavSection>

        <NavSection>
          <Link href="https://www.edtimmer.com/" target="_blank" aria-label="Link to portfolio" title="Link to portfolio">edtimmer.com</Link>
        </NavSection>
      </LeftColumn>

      <InterfaceContainer>
        <CenterContent currentAgentIndex={currentAgentIndex} />

        <LogoContainerLeft>
          <Canvas gl={{ antialias: true }}>
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} far={180}/>
            <ambientLight intensity={1} />
            {/* <LogoTextMichromaVertical position={[0, 1.2, 0]} rotation={new THREE.Euler(0, 0, 0)} text="DEMO—3D" color="#ffffff" scale={[1, 1, 1]} size={0.35} letterSpacing={0.2} /> */}
            <Demo3DGroup currentAgentIndex={currentAgentIndex} />
            <Environment preset="forest" backgroundIntensity={1.0} />
            <OrbitControls />
          </Canvas>
        </LogoContainerLeft>

        <LogoContainerRight>
          <Canvas gl={{ antialias: true }}>
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} far={18}/>
            <ambientLight intensity={1} />
            <ModulesGroup currentAgentIndex={currentAgentIndex} />
            <Environment preset="forest" backgroundIntensity={1.0} />
            <OrbitControls />
          </Canvas>
        </LogoContainerRight> 
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
          <GlobesRightGroup separation={0.8} scale={1} position={[0, -0.7, 0]} rotation={[0.9, Math.PI / 2 - 0.7, 0]} currentAgentIndex={currentAgentIndex} />
          <directionalLight position={[-5, 0, 0]} color={'#fff'} intensity={1} />
          <Environment preset="forest" backgroundIntensity={0.2} />
        </Canvas>
      </RightSpheresScene>
    </AppContainer>    
  )
}

export default App
