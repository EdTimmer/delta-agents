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
  background-color: ${colors.lightBlue};
  /* border-width: 2px;
  border-style: solid;
  border-color: ${props => props.$currentAgentIndex !== -1 ? borderColorMap[props.$currentAgentIndex] : colors.frenchGray}; */
  width: 100%;
  height: 100%;
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    /* max-height: 100%; */
    object-fit: cover;
    overflow: hidden;
    /* border-radius: 10px; */
    border: 1px solid ${colors.black};
  }
`;

export const FlexStartRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 20px 0;
`;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 800;
  font-family: 'Open Sans', 'Roboto Mono', monospace;
  color: ${colors.black};
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Open Sans', 'Roboto Mono', monospace;
  color: ${colors.black};
`;