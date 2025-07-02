import { useState } from 'react'
import { Canvas } from '@react-three/fiber';
import { CameraShake, Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { 
  AppContainer,
  BotScene,
  LinkContainer,
  InterfaceContainer,
  StyledInput,
  SubmitButton,
  OutputContainer,
  StyledForm,
  CenteredRow,
  FlexStartRow,
  LeftColumn,
  TitleLarge,
  SpheresScene,
} from './App.styles'
import BeeBot from './components/BeeBot';
import { useSpring, animated } from '@react-spring/three';
import SearchIcon from '@mui/icons-material/Search';
import colors from './styles/colors';
import { z } from 'zod'
import Output from './components/Output/Output';
import { taoTeChing } from './utils/textData';
import AgentButton from './components/AgentButton/AgentButton';
import Sphere from './components/Sphere';

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
  const [inputIsFocused, setInputIsFocused] = useState(false);
  const [inputText, setInputText] = useState('');
  const [prompt, setPrompt] = useState('');
  const [isSpinning, setIsSpinning] = useState(false);
  const [currentAgentIndex, setCurrentAgentIndex] = useState(0)
  const [parsedCatData, setParsedCatData] = useState<CatType>()
  const [parsedDogData, setParsedDogData] = useState<DogType>()
  const [parsedFoxData, setParsedFoxData] = useState<FoxType>()
  const [taoTeChingChapter, setTaoTeChingChapter] = useState<string>();
  const [parsedRandomFactsData, setParsedRandomFactsData] = useState<RandomFactsType>()
  const [isSuccess, setIsSuccess] = useState<boolean>()
  const [isReset, setIsReset] = useState(false);

  const handleCleanUp = () => {
    setParsedCatData(undefined)
    setParsedDogData(undefined)
    setParsedFoxData(undefined)
    setTaoTeChingChapter(undefined)
    setParsedRandomFactsData(undefined)
  }

  const catApiKey = import.meta.env.VITE_CAT_API_KEY

  const fetchCat = async () => {
    handleCleanUp()
    const data = await fetch(
      `https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${catApiKey}`,
    ).then((res) => res.json())

    const parsed = CatSchema.safeParse(data)
    if (parsed.success) {
      setIsSuccess(true)
      setParsedCatData(parsed.data)
    } else {
      setIsSuccess(false)
      setParsedCatData([])
    }
  }

  const dogApiKey = import.meta.env.VITE_DOG_API_KEY
  const fetchDog = async () => {
    handleCleanUp()
    const data = await fetch(
      `https://api.thedogapi.com/v1/images/search?has_breeds=1&api_key=${dogApiKey}`,
    ).then((res) => res.json())
    const parsed = DogSchema.safeParse(data)
    if (parsed.success) {
      setIsSuccess(true)
      setParsedDogData(parsed.data)
    } else {
      setIsSuccess(false)
      setParsedDogData([])
    }
  }

  const fetchFox = async () => {
    handleCleanUp()
    const data = await fetch(
      `https://randomfox.ca/floof/`,
    ).then((res) => res.json())
    const parsed = FoxSchema.safeParse(data)
    if (parsed.success) {
      setIsSuccess(true)
      setParsedFoxData(parsed.data)
    } else {
      setIsSuccess(false)
      setParsedFoxData({ image: '' })
    }
  }

  const fetchRandomFacts = async () => {
    handleCleanUp()
    const data = await fetch(
      `https://uselessfacts.jsph.pl/random.json?language=en`,
    ).then((res) => res.json())
    console.log('data :>> ', data);
    const parsed = RandomFactsSchema.safeParse(data)

    if (parsed.success) {
      setIsSuccess(true)
      setParsedRandomFactsData(parsed.data)
    } else {
      setIsSuccess(false)
      setParsedRandomFactsData({ text: '' })
    }
  }
  
  const getRandomElementFromArray = (array: string[]) => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  };

  const setNewTaoTeChingChapter = () => {
    handleCleanUp()
    const randomChapter = getRandomElementFromArray(taoTeChing);
    setTaoTeChingChapter(randomChapter);
  };

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

  const { position } = useSpring({
    position: isSpinning ? [0, -1.2, 1.6] : [0, -1.2, 0],
    config: {
      // Different physics based on direction
      mass: isSpinning ? 2.0 : 5.0,        // Heavier mass for return = slower
      tension: isSpinning ? 120 : 60,      // Lower tension for return = gentler
      friction: isSpinning ? 8 : 46        // Higher friction for return = more damping
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsReset(false);
    if (currentAgentIndex === 0) {
      fetchCat();
    } else if (currentAgentIndex === 1) {
      fetchDog();
    } else if (currentAgentIndex === 2) {
      fetchFox();
    } else if (currentAgentIndex === 3) {
      fetchRandomFacts();
    } else if (currentAgentIndex === 4) {
      setNewTaoTeChingChapter(); // Default to cat if no specific agent is selected
    }
    setIsSpinning(true);

    setPrompt(inputText);
    setInputText('');
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  return (    
    <AppContainer>
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
          label={'Agent 03'}
        />

        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={2}
          currentAgentIndex={currentAgentIndex}
          setIsReset={setIsReset}
          label={'Agent 05'}
        />

        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={3}
          currentAgentIndex={currentAgentIndex}
          setIsReset={setIsReset}
          label={'Agent 07'}

        />

        <AgentButton
          setCurrentAgentIndex={setCurrentAgentIndex}
          assignedIndex={4}
          currentAgentIndex={currentAgentIndex}
          setIsReset={setIsReset}
          label={'Agent 11'}
        />
      </LeftColumn>

      <CenteredRow>
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
                    color: colors.onyx,
                    fontSize: 20
                  }}
                />               
              </SubmitButton>
            </StyledForm>
          </FlexStartRow>

          <OutputContainer>
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
            
              
          </OutputContainer>
        </InterfaceContainer>
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
      </CenteredRow>

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
            
            <PerspectiveCamera makeDefault fov={20} position={[0, 0, 10]} />

            <directionalLight position={[0, 0, 5]} color={'#fff'} intensity={1} />
            {/* <directionalLight position={[0, -0.5, 1]} color={'#fff'} intensity={0.0025} />
            <directionalLight position={[0.02, -0.5, 1]} color={'#fff'} intensity={0.0025} /> */}
            
                    
            <Sphere position={[-1, 1, 0]} scale={0.25} rotation={[0, 0, 0]} modelFileName={'sphere_gold_1'} />
            <Sphere position={[-1, 0, 0]} scale={0.2} rotation={[0, 0, 0]} modelFileName={'sphere_gold_2'} />
            <Sphere position={[-1, -1, 0]} scale={0.2} rotation={[0, 0, 0]} modelFileName={'sphere_gold_7'} />

            <Sphere position={[2, 1, 0]} scale={0.25} rotation={[0, 0, 0]} modelFileName={'sphere_gold_4'} />
            <Sphere position={[2, 0, 0]} scale={0.25} rotation={[0, 0, 0]} modelFileName={'sphere_gold_5'} />
            <Sphere position={[2, -1, 0]} scale={0.2} rotation={[0, 0, 0]} modelFileName={'sphere_gold_6'} />
            {/* <OrbitControls
              makeDefault
              minAzimuthAngle={0}
              maxAzimuthAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 3}
              maxPolarAngle={Math.PI / 3}
              enablePan={true}
              zoomSpeed={0.3}
              enableDamping={true}
              enableZoom={false}
            /> */}

            <Environment preset="forest" backgroundIntensity={0.2} />
            {/* <CameraShake
              maxYaw={0.1} // Max amount camera can yaw in either direction
              maxPitch={0.05} // Max amount camera can pitch in either direction
              maxRoll={0.1} // Max amount camera can roll in either direction
              yawFrequency={0.1} // Frequency of the the yaw rotation
              pitchFrequency={0.1} // Frequency of the pitch rotation
              rollFrequency={0.1} // Frequency of the roll rotation
              intensity={0.5} // initial intensity of the shake
              decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
            /> */}
          </Canvas>
        </SpheresScene>


      <LinkContainer>
        <a href="https://www.edtimmer.com/" target="_blank" aria-label="Link to portfolio" title="Link to portfolio">edtimmer.com</a>
      </LinkContainer>
    </AppContainer>    
  )
}

export default App
