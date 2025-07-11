import styled from 'styled-components';
import colors from '../../styles/colors';

export const ComponentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

export const MainContainer = styled.div`
  background-color: ${colors.lightBlue};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 10;
`;

export const ImageContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    min-width: 100%;
    height: 614px;
    object-fit: cover;
    overflow: hidden;
    border-radius: 10px;

    @media (max-width: 1600px) {
      height: 400px;
    }
  }
`;

export const FlexStartRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  padding: 0;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  font-family: 'Open Sans', 'Roboto Mono', monospace;
  color: ${colors.black};
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 16px;
  font-weight: 400;
  font-family: 'Open Sans', 'Roboto Mono', monospace;
  color: ${colors.black};
`;