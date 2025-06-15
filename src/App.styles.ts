import styled from 'styled-components';
import colors from './styles/colors';

export const AppContainer = styled.div`
  background-color: ${colors.eerieBlack};
  position: relative;
  z-index: 1;
  font-family: 'Roboto Mono', monospace;
  // background-size: cover;
  // background-position: center;
  // background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 30px;
`;

export const CenteredRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const BotScene = styled.div`
  /* position: absolute;
  top: 0;
  left: 0; */
  z-index: 0;
  /* display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center; */
  width: 500px;
  height: 600px;
  margin-right: -100px;
  /* margin-top: -10rem; */
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  /* pointer-events: none; Prevents interaction with the scene */


  @media (min-width: 1024px) {
    gap: 40rem;
  }
`;

export const Header = styled.h1`
  color: ${colors.seasalt};
  font-family: 'Carlito', 'Roboto Mono', monospace;
  font-size: 2.6rem;
  margin: 0;
  padding: 0;
  font-weight: 400;
  text-align: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const PetriDishContainer = styled.div`
  width: 35rem;
  height: 40rem;
  cursor: pointer;
`;

export const MilSatContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 3;
`;

export const ThreeDWebGroupContainer = styled.div`
  width: 50rem;
  height: 25rem;
  cursor: pointer;
`;

export const LogoContainer = styled.div`
  /* position: absolute;
  top: 0;
  left: 0; */
  width: 100vw;
  height: 120px;
  /* margin-top: -70px; */
  /* background-color: #000; */
  /* margin-bottom: -100px; */
  /* margin-top: 3rem;
  margin-left: 60px; */
  /* border-bottom: 1px solid ${colors.outerSpace}; */
  background-color: ${colors.onyx};
  border-bottom: 1px solid ${colors.yinmnBlue};
  z-index: 1;


  @media (max-width: 450px) {
    width: 45rem;
    height: 25rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 650px) {
    margin-bottom: 5rem;
  }
`;

export const BackgroundCanvas = styled.div`
  /* position: fixed;
  top: -400px;
  left: 0; */
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: -1; /* Ensure background canvas is behind other content */
  pointer-events: none; /* Prevent canvas from intercepting pointer events */
`;

export const WavesContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 300px;
  overflow: hidden;
  z-index: 0; /* Ensure waves are behind other content */
`;

export const Title = styled.h1`
  color: ${colors.seasalt};
  font-size: 3.8rem;
  margin: 0;
  letter-spacing: 1.0rem;
  text-transform: lowercase;
  padding: 0;
  font-weight: 300;
`;

export const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

export const WebLink = styled.a`
  color: ${colors.seasalt};
  font-family: 'Carlito', 'Roboto Mono', monospace;
  font-size: 2.6rem;
  text-decoration-line: underline;
  text-underline-offset: 5px;
  margin-left: 0.4rem;
`;

export const Email = styled.p`
  color: ${colors.seasalt};
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  text-decoration: none;
  z-index: 3;
`;

export const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const LinkContainer = styled.div`
  position: absolute;
  bottom: 30px;
  right: 40px;
  font-size: 16px;
  letter-spacing: 1px;
  z-index: 30;

  a {
    color: #6c757dff;
    text-decoration: underline;
    text-underline-offset: 4px;

    &:hover {
      color: #fff;
    }
  }
`;

export const InterfaceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  /* margin-bottom: 400px;
  margin-left: 200px; */
  z-index: 10;
  /* margin-right: 400px; */
  gap: 10px;
`;

export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${colors.onyx};
  background-color: ${colors.onyx};
  color: ${colors.seasalt};
  font-size: 16px;

  &:focus {
    border: 1px solid #4a90e2;
    outline: none; /* Remove default browser outline */
  }
`; 

export const FlexEndRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const FlexStartRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

  // &:focus {
  //   background-color: rgba(255, 255, 255, 0.15);
  //   outline: none;
  //   border-color: #6c757dff; /* Change border color on focus */
  // }

  export const SubmitButton = styled.button`
    background-color: ${colors.onyx};
    color: ${colors.frenchGray};
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
    /* margin-left: 10px; */
    transition: background-color 0.3s ease;
    &:hover {
      background-color: ${colors.outerSpace};
      border: 1px solid ${colors.yinmnBlue};
    }

    &:focus {
      outline: none;
      /* box-shadow: 0 0 0 1px rgba(108, 117, 125, 0.5); */
      
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

  export const ChangeAgentButton = styled.button`
    background-color: ${colors.onyx}; // #6c757dff;
    color: ${colors.frenchGray};
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    color: ${colors.seasalt};
    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
    /* margin-left: 10px; */
    transition: background-color 0.3s ease;
    &:hover {
      background-color: ${colors.outerSpace};  // #5a6268ff; /* Darker shade on hover */
      border: 1px solid ${colors.yinmnBlue};
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

  export const OutputText = styled.p`
    color: ${colors.seasalt};
    font-family: 'Roboto Mono', monospace;
    font-size: 1.6rem;
    margin: 0;
    padding: 0;
    /* margin-top: 10px; */
    white-space: pre-wrap; /* Preserve whitespace and line breaks */
  `;

  export const OutputContainer = styled.div`
    background-color: ${colors.onyx};
    padding: 20px;
    border-radius: 5px;
    width: 100%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow-y: auto; /* Enable scrolling for long outputs */
    max-height: 300px; /* Limit height to prevent overflow */
    &::-webkit-scrollbar {
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${colors.frenchGray2};
      border-radius: 4px;
    }
    &::-webkit-scrollbar-track {
      background-color: ${colors.onyx};
    }

    @media (max-width: 600px) {
      width: 100%;
      max-width: 100%;
    }
`;
  
