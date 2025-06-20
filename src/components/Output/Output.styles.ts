import styled from 'styled-components';
import colors from '../../styles/colors';

export const OutputContainer = styled.div`
  position: relative;
  width: 100%;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px;
  gap: 10px;
`;

export const StyledImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const StyledTitle = styled.p`
  color: ${colors.seasalt};
  font-family: 'Comfortaa', 'Roboto Mono', monospace;
  font-size: 18px;
  font-weight: bold;
  margin-top: 10px;
  line-height: 28px;
  /* white-space: pre-wrap;s */
`;

export const StyledTextMarginBottom = styled.p`
  color: ${colors.seasalt};
  font-family: 'Comfortaa', 'Roboto Mono', monospace;
  font-size: 16px;
  margin-bottom: 10px;
`;

export const StyledText = styled.p`
  color: ${colors.seasalt};
  font-family: 'Comfortaa', 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 20px;
`;

export const Image = styled.img`
  max-width: 100%;
  max-height: 60rem;
  height: auto;
  padding: 2rem;
`

export const PromptContainer = styled.div`
  width: 100%;
  border-bottom: 1px solid ${colors.seasalt};
  padding-bottom: 20px;
  margin-bottom: 20px;
`