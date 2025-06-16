import { StyledButton } from './AgentButton.styles';
import colors from '../../styles/colors';

interface AgentButtonProps {
  setCurrentAgentIndex: (index: number) => void;
  currentAgentIndex: number;
  assignedIndex: number;
  children: React.ReactNode;
}
const AgentButton = ({setCurrentAgentIndex, currentAgentIndex, assignedIndex, children}: AgentButtonProps) => {
  const borderColorMap = [
    colors.blenderBotBlue,
    colors.blenderBotGreen,
    colors.blenderBotYellow,
    colors.blenderBotRed,
    colors.blenderBotPurple,
  ];

  return (
    <StyledButton
      type="button"
      onClick={() => setCurrentAgentIndex(assignedIndex)}
      hoverBorderColor={borderColorMap[currentAgentIndex]}
      assignedIndex={assignedIndex}
      currentAgentIndex={currentAgentIndex}
    >
      {children}
    </StyledButton>
  );
}

export default AgentButton;
