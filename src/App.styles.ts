import styled from 'styled-components';
import colors from './styles/colors';

export const AppContainer = styled.div`
  background-color: #fff;
  position: relative;
  z-index: 1;
  font-family: 'Open Sans', 'Roboto Mono', monospace;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const LeftColumn = styled.div`
  position: relative;
  background-color: ${colors.lightBlue};
  width: 300px;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  z-index: 10;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  gap: 20px;
  pointer-events: auto;

  * {
    pointer-events: auto;
  }

  @media (max-width: 1600px) {
    width: 200px;
    margin-right: 20px;
  }
`;

export const NavSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
`;


export const RightColumn = styled.div`
  background-color: transparent;
  width: 300px;
  height: 100%;
`;

export const BotScene = styled.div`
  z-index: 0;
  width: 500px;
  height: 500px;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 0;
  margin-left: -40px;

  @media (max-width: 1500px) {
    width: 600px;
    height: 600px;
    margin-left: -30px;
  }  
`;

export const RightSpheresScene = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  width: 800px;
  height: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  margin-top: 0;

  @media (max-width: 1600px) {
    right: -200px;
  }
`;

export const TopLeftGlobeScene = styled.div`
  position: absolute;
  top: -240px;
  left: -80px;
  z-index: 0;
  width: 900px;
  height: 900px;
  pointer-events: none;
`;

export const LightGlobeScene = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 20;
  width: 900px;
  height: 900px;
  pointer-events: none;

  * {
    pointer-events: none !important;
  }

  @media (max-width: 1600px) {
    left: -200px;
  }
`;

export const LinkContainer = styled.div`
  position: absolute;
  bottom: 30px;
  left: 40px;
  font-size: 16px;
  letter-spacing: 1px;
  z-index: 30;

  a {
    color: #6c757dff;
    text-decoration: underline;
    text-underline-offset: 4px;
    font-size: 16px;
    letter-spacing: 1px;

    &:hover {
      color: #fff;
    }
  }
`;

export const Link = styled.a`
  color: #6c757dff;
  text-decoration: underline;
  text-underline-offset: 4px;
  font-size: 16px;
  letter-spacing: 1px;

  &:hover {
    color: #000;
  }
`;

export const InterfaceContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 960px;
  height: 100%;
  z-index: 30;
  gap: 20px;
`;

export const StyledForm = styled.form`
  position: relative;
  width: 100%;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 14px;
  border-radius: 12px;
  border: 1px solid ${colors.frenchGray};
  background-color: #fff;
  color: ${colors.onyx};
  font-size: 16px;

  &:focus {
    outline: none;
  }
`; 

export const FlexStartRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 8px;
  top: 6px;
  background-color: ${colors.lightBlue};
  border: none;
  border-radius: 8px;
  margin: 0;
  padding: 6px;
  max-height: 48px;
  &:hover {
    cursor: pointer;
  }
  &:disabled {
    cursor: default;
  }
  &:focus {
    outline: none;
  }
  &:active {
    transform: scale(0.98);
  }
`;

export const TitleLarge = styled.h1`
  font-size: 24px;
  font-weight: 600;
  font-family: 'Open Sans', 'Roboto Mono', monospace;
  color: ${colors.black};
`;

export const LogoContainer = styled.div`
  position: absolute;
  top: -200px;
  right: -600px;
  /* transform: translateX(-50%); */
  z-index: 30;
  width: 800px;
  height: 800px;
`;  