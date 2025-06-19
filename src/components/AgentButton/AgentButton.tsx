import { StyledButton } from './AgentButton.styles';
import colors from '../../styles/colors';
import { z } from 'zod'
import { fromZodError } from 'zod-validation-error'

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

export type CatType = z.infer<typeof CatSchema>

interface AgentButtonProps {
  setCurrentAgentIndex: (index: number) => void;
  currentAgentIndex: number;
  assignedIndex: number;  
  setParsedData: (data: CatType) => void;
  setIsSuccess: (isSuccess: boolean) => void;
  setCatUrl: (url: string) => void;
  setErrors: (errors: string[]) => void;
  children: React.ReactNode;
}
const AgentButton = (
  {
    setCurrentAgentIndex,
    currentAgentIndex,
    assignedIndex,
    setParsedData,
    setIsSuccess,
    setCatUrl,
    setErrors,
    children
  }: AgentButtonProps) => {

  const borderColorMap = [
    colors.blenderBotBlue,
    colors.blenderBotGreen,
    colors.blenderBotYellow,
    colors.blenderBotRed,
    colors.blenderBotPurple,
  ];
    const apiKey =
    'live_SDlCPG7Qb9dLy1ZgZo2jNek2fdwN2ZJ1uOQvwSEygdEsT7xTOYUOjJMnIczWO71E'

  const fetchCat = async () => {
    const data = await fetch(
      `https://api.thecatapi.com/v1/images/search?has_breeds=1&api_key=${apiKey}`,
    ).then((res) => res.json())

    console.log('raw data', data)
    // const parsedNotSafe = CatSchema.parse(data);
    // console.log('parsedNotSafe', parsedNotSafe)
    const parsed = CatSchema.safeParse(data)
    console.log('parsed data', parsed)
    // Handle Success
    if (parsed.success) {
      setIsSuccess(true)
      setErrors([])
      setCatUrl(data[0].url)
      setParsedData(parsed.data)
      // Handle Error
    } else {
      setIsSuccess(false)
      const errorsMessage = fromZodError(parsed.error)
      setParsedData([])
      setErrors(String(errorsMessage).split(';'))
    }
  }

  const handleButtonClick = (assignedIndex: number) => {
    setCurrentAgentIndex(assignedIndex);
    if (assignedIndex === 0) {
      fetchCat();
    }
  };

  return (
    <StyledButton
      type="button"
      onClick={() => handleButtonClick(assignedIndex)}
      $hoverBorderColor={borderColorMap[currentAgentIndex]}
      $assignedIndex={assignedIndex}
      $currentAgentIndex={currentAgentIndex}
    >
      {children}
    </StyledButton>
  );
}

export default AgentButton;
