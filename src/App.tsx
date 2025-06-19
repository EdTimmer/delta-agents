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
  WavesContainer,
  OutputContainer,
  StyledForm,
  CenteredRow,
  FlexStartRow,
  LeftColumn,
} from './App.styles'
import BeeBot from './components/BeeBot';
import { useSpring, animated } from '@react-spring/three';
import Waves from './components/Waves';
import LogoGroup from './components/LogoGroup';
import SearchIcon from '@mui/icons-material/Search';
import colors from './styles/colors';
import AgentButton from './components/AgentButton/AgentButton';
import Lights from './components/Lights';
import { z } from 'zod'
import { fromZodError } from 'zod-validation-error'
import CatOutput from './components/CatOutput/CatOutput';
import DogOutput from './components/DogOutput/DogOutput';

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
        // score: z.number(),
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

export type CatType = z.infer<typeof CatSchema>
export type DogType = z.infer<typeof DogSchema>

function App() {
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const [inputText, setInputText] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0);
  const [parsedCatData, setParsedCatData] = useState<CatType>()
  const [parsedDogData, setParsedDogData] = useState<DogType>()
  const [isSuccess, setIsSuccess] = useState<boolean>()
  const [imageUrl, setImageUrl] = useState<string>()
  const [errors, setErrors] = useState<string[]>()

  console.log('parsedData :>> ', parsedCatData);

  const catApiKey =
    'live_SDlCPG7Qb9dLy1ZgZo2jNek2fdwN2ZJ1uOQvwSEygdEsT7xTOYUOjJMnIczWO71E'

  const fetchCat = async () => {
    const data = await fetch(
      `https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${catApiKey}`,
    ).then((res) => res.json())

    console.log('raw data', data)
    // const parsedNotSafe = CatSchema.parse(data);
    // console.log('parsedNotSafe', parsedNotSafe)
    const parsed = CatSchema.safeParse(data)
    console.log('parsed data', parsed)
    // Handle Success
    if (parsed.success) {
      setIsSuccess(true)
      setErrors(undefined)
      setImageUrl(data[0].url)
      setParsedCatData(parsed.data)
      // Handle Error
    } else {
      setIsSuccess(false)
      const errorsMessage = fromZodError(parsed.error)
      setParsedCatData([])
      setErrors(String(errorsMessage).split(';'))
    }
  }

  const dogApiKey = 'live_QtPuZBUrIaDL1DegxhM3j96hi6VrWCl0EJBJxX65Nq4p7r8md4XeqLKjehZymHvW'

  const fetchDog = async () => {
    const data = await fetch(
      `https://api.thedogapi.com/v1/images/search?has_breeds=1&api_key=${dogApiKey}`,
    ).then((res) => res.json())

    console.log('raw data', data)
    // const parsedNotSafe = CatSchema.parse(data);
    // console.log('parsedNotSafe', parsedNotSafe)
    const parsed = DogSchema.safeParse(data)
    console.log('parsed data', parsed)
    // Handle Success
    if (parsed.success) {
      setIsSuccess(true)
      setErrors(undefined)
      setImageUrl(data[0].url)
      setParsedDogData(parsed.data)
      // Handle Error
    } else {
      setIsSuccess(false)
      const errorsMessage = fromZodError(parsed.error)
      setParsedDogData([])
      setErrors(String(errorsMessage).split(';'))
    }
  }

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
    // console.log('Message submitted:', inputText);
    if (currentAgentIndex === 0) {
      fetchCat(); // Fetch cat data on submit
    }
    if (currentAgentIndex === 1) {
      fetchDog(); // Fetch dog data on submit
    }
    
    setIsSpinning(true);

    // Process the input here - connect to AI backend, etc.
    // Clear input after submission
    setInputText('');
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (    
    <AppContainer>
      <Column>
        <LogoContainer>
          <Canvas gl={{ antialias: true }}>
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 20]} />
            <ambientLight intensity={1} />
            <LogoGroup />
            <Lights />
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
             {isSuccess && parsedCatData && currentAgentIndex === 0 &&
                <CatOutput
                  name={parsedCatData[0].breeds[0].name}
                  description={parsedCatData[0].breeds[0].description}
                  temperament={parsedCatData[0].breeds[0].temperament}
                  affectionLevel={parsedCatData[0].breeds[0].affection_level}
                  energyLevel={parsedCatData[0].breeds[0].energy_level}
                  catUrl={imageUrl ?? ''}
                />
             }
              {isSuccess && parsedDogData && currentAgentIndex === 1 &&
                  <DogOutput
                    name={parsedDogData[0].breeds[0].name}
                    bredFor={parsedDogData[0].breeds[0].bred_for}
                    breedGroup={parsedDogData[0].breeds[0].breed_group}
                    // description={parsedDogData[0].breeds[0].bred_for}
                    // temperament={parsedDogData[0].breeds[0].breed_group}
                    // affectionLevel={0} // Placeholder, as Dog API does not provide this
                    // energyLevel={0} // Placeholder, as Dog API does not provide this
                    dogUrl={imageUrl ?? ''}
                  />
              }
                
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
