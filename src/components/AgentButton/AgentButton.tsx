import { ButtonLabel, StyledButton } from './AgentButton.styles';
import colors from '../../styles/colors';

interface AgentButtonProps {
  setCurrentAgentIndex: (index: number) => void;
  currentAgentIndex: number;
  assignedIndex: number;
  setIsReset?: (value: boolean) => void;
  label: string;
}
const AgentButton = (
  {
    setCurrentAgentIndex,
    currentAgentIndex,
    assignedIndex,
    setIsReset,
    label,
  }: AgentButtonProps) => {

  const borderColorMap = [
    colors.blenderBotBlue,
    colors.blenderBotGreen,
    colors.blenderBotYellow,
    colors.blenderBotRed,
    colors.blenderBotPurple,
  ];

  const handleButtonClick = (assignedIndex: number) => {
    setCurrentAgentIndex(assignedIndex);
    setIsReset?.(true);
  };

  return (
    <StyledButton
      type="button"
      onClick={() => handleButtonClick(assignedIndex)}
      $hoverBorderColor={borderColorMap[currentAgentIndex]}
      $assignedIndex={assignedIndex}
      $currentAgentIndex={currentAgentIndex}
    >
      <ButtonLabel>{label}</ButtonLabel>
    </StyledButton>
  );
}

export default AgentButton;
