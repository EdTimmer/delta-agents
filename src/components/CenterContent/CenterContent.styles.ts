import styled from 'styled-components';
import colors from '../../styles/colors';

interface Props {
  $currentAgentIndex: number;
}

const borderColorMap = [
    colors.blenderBotBlue,
    colors.blenderBotGreen,
    colors.blenderBotYellow,
    colors.blenderBotRed,
    colors.blenderBotPurple,
];

export const MainContainer = styled.div<Props>`
  background: transparent;
  border-width: 2px;
  border-style: solid;
  border-color: ${props => props.$currentAgentIndex !== -1 ? borderColorMap[props.$currentAgentIndex] : colors.frenchGray};
  width: 800px;
  height: 600px;
  padding: 4px;
  border-radius: 12px;
`;
