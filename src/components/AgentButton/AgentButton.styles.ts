import styled from 'styled-components';
import colors from '../../styles/colors';

interface StyledButtonProps {
  $hoverBorderColor?: string;
  $currentBorderColor?: string;
  $assignedIndex: number;
  $currentAgentIndex: number;
}

const borderColorMap = [
    colors.blenderBotBlue,
    colors.green,
    colors.blenderBotYellow,
    colors.blenderBotRed,
    colors.blenderBotPurple,
];
  
export const StyledButton = styled.button<StyledButtonProps>`
    background: transparent;
    width: 200px;
    padding: 4px;
    cursor: pointer;
    color: ${colors.black};
    font-size: 16px;
    /* border-top-width: 1px; */
    border: 2px solid transparent;
    border-bottom-width: 2px;
    /* border-top-style: solid; */
    border-bottom-style: solid;
    /* border-top-color: ${props => props.$currentAgentIndex === props.$assignedIndex
      ? borderColorMap[props.$assignedIndex] : colors.onyx}; */
    border-bottom-color: ${props => props.$currentAgentIndex === props.$assignedIndex
      ? colors.green : colors.frenchGray};
    border-left: none;
    border-right: none;
    border-top: none;
    z-index: 25;
    transition: background-color 0.3s ease;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    &:hover {
      /* background-color: ${colors.eerieBlack}; Lighter shade on hover */
      /* border-bottom-width: 2px;
      border-bottom-style: solid; */
      border-bottom-color: ${colors.green}; /* Change border color on hover */
    }

    &:focus {
        outline: none;
        // box-shadow: 0 0 0 1px rgba(108, 117, 125, 0.5); /* Focus ring */
    }

    &:active {
        background-color: ${colors.white}; /* Even darker shade when clicked */
        transform: scale(0.98); /* Slight scale down effect */
    }

    &:disabled {
        color:  ${colors.eerieBlack}; /* Lighter shade when disabled */
        cursor: default;
    }
`;

export const ButtonLabel = styled.p`
  color: ${colors.onyx};
  font-family: 'Open Sans', 'Comfortaa', 'Roboto Mono', monospace;
  font-size: 14px;
  margin: 0;
  padding: 0;
  text-align: center;
`;
