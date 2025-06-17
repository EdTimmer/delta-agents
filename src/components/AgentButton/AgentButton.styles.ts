import styled from 'styled-components';
import colors from '../../styles/colors';
import { color } from 'three/webgpu';

interface StyledButtonProps {
  hoverBorderColor?: string;
  currentBorderColor?: string;
  assignedIndex: number;
  currentAgentIndex: number;
}

const borderColorMap = [
    colors.blenderBotBlue,
    colors.blenderBotGreen,
    colors.blenderBotYellow,
    colors.blenderBotRed,
    colors.blenderBotPurple,
];
  
export const StyledButton = styled.button<StyledButtonProps>`
    background-color:  ${props => props.currentAgentIndex === props.assignedIndex
      ? colors.eerieBlack : colors.onyx};
    color: ${colors.frenchGray};
    border: none;
    padding: 10px 20px;
    border-radius: 12px;
    width: 100%;
    height: 100px;
    cursor: pointer;
    color: ${colors.seasalt};
    font-family: 'Comfortaa', 'Roboto Mono', monospace;
    font-size: 16px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.currentAgentIndex === props.assignedIndex
      ? borderColorMap[props.assignedIndex] : colors.onyx};
    /* margin-left: 10px; */

    transition: background-color 0.3s ease;

    &:hover {
      background-color: ${colors.eerieBlack}; /* Lighter shade on hover */
      border-width: 1px;
      border-style: solid;
      border-color: ${props => borderColorMap[props.assignedIndex]}; /* Change border color on hover */
    }

    &:focus {
        outline: none;
        box-shadow: 0 0 0 1px rgba(108, 117, 125, 0.5); /* Focus ring */
    }

    &:active {
        background-color: ${colors.onyx}; /* Even darker shade when clicked */
        transform: scale(0.98); /* Slight scale down effect */
    }

    &:disabled {
        color:  ${colors.eerieBlack}; /* Lighter shade when disabled */
        cursor: default;
    }
`;