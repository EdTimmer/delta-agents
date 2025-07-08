import styled from 'styled-components';
import colors from '../../styles/colors';

interface StyledButtonProps {
  $hoverBorderColor?: string;
  $currentBorderColor?: string;
  $assignedIndex: number;
  $currentAgentIndex: number;
}


  
export const StyledButton = styled.button<StyledButtonProps>`
    background: transparent;
    width: 200px;
    padding: 4px;
    cursor: pointer;
    color: ${colors.black};
    font-size: 16px;
    border: 2px solid transparent;
    border-bottom-width: 2px;
    border-bottom-style: solid;
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
      border-bottom-color: ${colors.green}; /* Change border color on hover */
    }

    &:focus {
        outline: none;
    }

    &:active {
        background-color: ${colors.white};
        transform: scale(0.98);
    }

    &:disabled {
        color:  ${colors.eerieBlack};
        cursor: default;
    }

    @media (max-width: 1600px) {
      width: 160px;
      margin-right: 20px;
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
