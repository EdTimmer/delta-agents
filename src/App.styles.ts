import styled from 'styled-components';
import colors from './styles/colors';

export const AppContainer = styled.div`
  background-color: #fff;
  position: relative;
  z-index: 1;
  font-family: 'Open Sans', 'Roboto Mono', monospace;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  overflow-x: hidden;
`;

export const LeftColumn = styled.div`
  position: relative;
  background-color: ${colors.lightBlue};
  width: 300px;
  height: calc(100vh - 40px);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 20px;
  /* padding-top: 580px; */
  z-index: 10;
  border-radius: 20px;
  gap: 20px;
  pointer-events: auto;

  * {
    pointer-events: auto;
  }

  @media (max-width: 1650px) {
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
  top: 350px;
  right: -800px;
  z-index: 0;
  width: 800px;
  height: 800px;
  opacity: 1;

  @media (max-width: 1600px) {
    right: -600px;
  }

  @media (max-width: 1270px) {
    display: none;
  }
`;

export const TopLeftScene = styled.div`
  position: absolute;
  top: -100px;
  left: 300px;
  z-index: 0;
  width: 900px;
  height: 900px;
  pointer-events: none;

  @media (max-width: 2800px) {
    left: 100px;
  }

  @media (max-width: 1600px) {
    display: none;
  }
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
  right: 100px;
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

  @media (max-width: 1600px) {
    width: 700px;
  }
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

export const LogoContainerRight = styled.div`
  position: absolute;
  top: -300px;;
  right: -700px;
  /* transform: translateX(-50%); */
  z-index: 30;
  width: 800px;
  height: 800px;
  z-index: 0;
  pointer-events: none;

  * {
    pointer-events: none !important;
  }
  @media (max-width: 1850px) {
    right: -600px;
  }
  @media (max-width: 1270px) {
    display: none;
  }
`;

export const LogoContainerLeft = styled.div`
  position: absolute;
  top: 400px;
  right: -90px;
  z-index: 30;
  width: 500px;
  height: 500px;
  z-index: 50;
  pointer-events: none;

  * {
    pointer-events: none !important;
  }

  @media (max-width: 1650px) {
    right: -136px;
  }
`;

export const LeftGlobesContainer = styled.div`
  position: absolute;
  top: -300px;
  right: -1000px;
  width: 1200px;
  height: 1200px;
  overflow: hidden;
  z-index: -10;
  pointer-events: none;
  opacity: 1;
  * {
    pointer-events: none !important;
  }
  @media (max-width: 1600px) {
    display: none;
  }
`;

export const BottomGlobeScene = styled.div`
  width: 1200px;
  height: 1200px;
  /* z-index: -10; */
  pointer-events: none;

  * {
    pointer-events: none !important;
  }
  @media (max-width: 1600px) {
    display: none;
  }
`;