import { StyledButton } from './AgentButton.styles';
import colors from '../../styles/colors';

interface AgentButtonProps {
  setCurrentAgentIndex: (index: number) => void;
  currentAgentIndex: number;
  assignedIndex: number;
  setIsReset?: (value: boolean) => void;
  children: React.ReactNode;
}
const AgentButton = (
  {
    setCurrentAgentIndex,
    currentAgentIndex,
    assignedIndex,
    setIsReset,
    children
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
    setIsReset?.(true); // Reset the state when a new agent is selected
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
