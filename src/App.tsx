import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { Environment, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { 
  AppContainer,
  LinkContainer,
  InterfaceContainer,
  LeftColumn,
  TitleLarge,
  SpheresScene,
  TopLeftGlobeScene,
  RightColumn,
  LogoContainer,
} from './App.styles'
import { z } from 'zod'
import AgentButton from './components/AgentButton/AgentButton';
import Globe from './components/Globe';
import LogoGroup from './components/LogoGroup';
import GlobesRightGroup from './components/GlobesRightGroup';
import CenterContent from './components/CenterContent/CenterContent';
import Lights from './components/Lights';


const CatSchema = z.array(
  z.object({
    url: z.string().url(),
    breeds: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
        temperament: z.string(),
        affection_level: z.number(),
        energy_level: z.number(),
      }),
    ),
  }),
)

const DogSchema = z.array(
  z.object({
    url: z.string().url(),
    breeds: z.array(
      z.object({
        name: z.string(),
        bred_for: z.string(),
        breed_group: z.string(),
      }),
    ),
  }),
)

const FoxSchema = z.object({
  image: z.string().url(),
})

const LandscapeSchema = z.object({
  image: z.string().url(),
})

const RandomFactsSchema = z.object({
  text: z.string(),
});

export type CatType = z.infer<typeof CatSchema>
export type DogType = z.infer<typeof DogSchema>
export type FoxType = z.infer<typeof FoxSchema>
export type LandscapeType = z.infer<typeof LandscapeSchema>
export type RandomFactsType = z.infer<typeof RandomFactsSchema>

function App() {
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0)
  const [isReset, setIsReset] = useState(false);

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
          {/* sphere_gold_7, green_glass_bumps_2, green_plastic_bumps, green_bumps_rough */}
          <Globe position={[-0.6, 0.4, 0]} scale={0.8} rotation={[0, 0, 0]} modelFileName={'sphere_gold_8'} speedX={0.02} speedY={0} speedZ={0}/>

          <Globe position={[0.4, -1, 0]} scale={0.3} rotation={[0, 0, 0]} modelFileName={'dark_green_glass'} />

          {/* <directionalLight position={[0, 0, 10]} color={'#fff'} intensity={1} />
          <directionalLight position={[3, -3, 0]} color={'#fff'} intensity={1} /> */}

          <Environment preset="forest" backgroundIntensity={1.0} />
        </Canvas>
      </TopLeftGlobeScene>
        
      <LeftColumn>       
        <TitleLarge>Design AI</TitleLarge>
        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={0}
          currentAgentIndex={currentAgentIndex}
          setIsReset={setIsReset}
          label={'Agent 01'}
        />

        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={1}
          currentAgentIndex={currentAgentIndex}
          setIsReset={setIsReset}
          label={'Agent 02'}
        />

        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={2}
          currentAgentIndex={currentAgentIndex}
          setIsReset={setIsReset}
          label={'Agent 03'}
        />

        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={3}
          currentAgentIndex={currentAgentIndex}
          setIsReset={setIsReset}
          label={'Agent 04'}

        />

        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={4}
          currentAgentIndex={currentAgentIndex}
          setIsReset={setIsReset}
          label={'Agent 05'}
        />
      </LeftColumn>

      {/* <CenteredRow> */}
        <InterfaceContainer>
          {/* <FlexStartRow>
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
                    color: colors.onyx,
                    fontSize: 20
                  }}
                />               
              </SubmitButton>
            </StyledForm>
          </FlexStartRow> */}

          <CenterContent currentAgentIndex={currentAgentIndex} />
          {/* <OutputContainer
            style={{borderColor: 'red'}}
          >
            {!isReset && isSuccess && parsedCatData && currentAgentIndex === 0 &&
              <Output
                name={parsedCatData[0].breeds[0].name}
                description={parsedCatData[0].breeds[0].description}
                imageUrl={parsedCatData[0].url ?? ''}
                prompt={prompt}
                variableText={'getting a cat'}
              />
            }
            {!isReset && isSuccess && parsedDogData && currentAgentIndex === 1 &&
              <Output
                name={parsedDogData[0].breeds[0].name}
                imageUrl={parsedDogData[0].url ?? ''}
                prompt={prompt}
                variableText={'getting a dog'}
              />
            }
            {!isReset && isSuccess && parsedFoxData && currentAgentIndex === 2 &&
              <Output
                imageUrl={parsedFoxData.image ?? ''}
                prompt={prompt}
                variableText={'admiring a fox'}
              />
            }
            {!isReset && isSuccess && parsedRandomFactsData && currentAgentIndex === 3 &&
              <Output
                prompt={prompt}
                variableText={'reading a random fact'}
                text={parsedRandomFactsData?.text ?? ''}
              />
            }
            {!isReset && isSuccess && parsedCatData && currentAgentIndex === 4 &&
              <Output
                imageUrl={parsedCatData[0].url ?? ''}
                prompt={prompt}
                variableText={'getting a cat'}
              />
            }
            {!isReset && taoTeChingChapter && currentAgentIndex === 4 &&
              <Output
                prompt={prompt}
                variableText={'reading a chapter from the Tao Te Ching'}
                text={taoTeChingChapter}
              />
            }
            
              
          </OutputContainer> */}
          <LogoContainer style={{ left: getleftPosition(currentAgentIndex) }}>
            <Canvas gl={{ antialias: true }}>
              <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} />
              {/* <OrthographicCamera makeDefault position={[0, 0, 5]} zoom={15} /> */}
              <ambientLight intensity={1} />
              <LogoGroup currentAgentIndex={currentAgentIndex} />
              {/* <Lights /> */}
              <Environment preset="forest" backgroundIntensity={1.0} />
            </Canvas>
          </LogoContainer> 
        </InterfaceContainer>

 

        <RightColumn />
{/* 
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

            <directionalLight position={[-0.02, -0.5, 1]} color={'#fff'} intensity={0.0025} />
            <directionalLight position={[0, -0.5, 1]} color={'#fff'} intensity={0.0025} />
            <directionalLight position={[0.02, -0.5, 1]} color={'#fff'} intensity={0.0025} />
            
            <animated.group rotation-y={isSpinning ? spinRotation : rotation} position={position.to((x, y, z) => [x, y, z])}>
              <BeeBot
                agentFileName={agents[currentAgentIndex]}
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                scale={1}
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
        </BotScene> */}
      {/* </CenteredRow> */}
        <SpheresScene>
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
            <GlobesRightGroup separation={0.7} scale={1} position={[0, -0.7, 0]} rotation={[0.5, Math.PI / 2 - 0.7, 0]} />

            <Environment preset="forest" backgroundIntensity={0.2} />
          </Canvas>
        </SpheresScene>


      <LinkContainer>
        <a href="https://www.edtimmer.com/" target="_blank" aria-label="Link to portfolio" title="Link to portfolio">edtimmer.com</a>
      </LinkContainer>
    </AppContainer>    
  )
}

export default App
