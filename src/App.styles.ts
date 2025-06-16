import styled from 'styled-components';
import colors from './styles/colors';

export const AppContainer = styled.div`
  background-color: ${colors.eerieBlack};
  position: relative;
  z-index: 1;
  font-family: 'Comfortaa', 'Roboto Mono', monospace;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  overflow: hidden;
`;

export const SpaceBetweenRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 0;
`;

export const CenteredRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
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

export const LeftColumn = styled.div`
  width: 500px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin-top: 120px;
  padding-left: 120px;
  padding-right: 120px;
  gap: 20px;;
`;

export const ColumnWithGap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  gap: 20px;;
`;

export const BotScene = styled.div`
  z-index: 0;
  width: 500px;
  height: 500px;
  /* margin-right: -100px; */
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  flex-wrap: wrap;
  /* margin-top: -30px; */
  margin-top: 40px;
  @media (min-width: 1024px) {
    gap: 40rem;
  }
`;

export const LogoContainer = styled.div`
  width: 100vw;
  height: 120px;
  background-color: #000;
  /* border-bottom: 1px solid ${colors.yinmnBlue}; */
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
  position: relative;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  pointer-events: none;
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
  margin-top: 120px;
  width: 800px;
  z-index: 10;
  gap: 20px;;
`;

export const StyledForm = styled.form`
  width: 100%;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  border: 1px solid ${colors.onyx};
  background-color: ${colors.onyx};
  color: ${colors.seasalt};
  font-size: 16px;

  &:focus {
    /* border: 1px solid #4a90e2; */
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
  gap: 20px;;
`;

  export const SubmitButton = styled.button`
    /* position: absolute;
    right: 10px;
    top: 8px; */
    background-color: transparent;
    border: 1px solid ${colors.onyx};
    background-color: ${colors.onyx};
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    margin: 0;
    padding: 10px;
    max-height: 40px;;
    &:hover {
      cursor: pointer;
      /* border: 1px solid #4a90e2; */
    }
    &:disabled {
      cursor: default;
    }
    &:focus {
      outline: none;
      box-shadow: 0 0 0 1px rgba(108, 117, 125, 0.5); /* Focus ring */
    }
    &:active {
      background-color: ${colors.veryDark}; /* Even darker shade when clicked */
      transform: scale(0.98); /* Slight scale down effect */
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
    font-family: 'Comfortaa', 'Roboto Mono', monospace;
    font-size: 16px;
    /* margin-left: 10px; */
    transition: background-color 0.3s ease;
    &:hover {
      background-color: ${colors.outerSpace};  // #5a6268ff; /* Darker shade on hover */
      /* border: 1px solid ${colors.yinmnBlue}; */
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
    font-family: 'Comfortaa', 'Roboto Mono', monospace;
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
    height: 520px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow-y: auto; /* Enable scrolling for long outputs */
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
  
  export const AddContainer = styled.button`
    background-color: ${colors.onyx}; // #6c757dff;
    color: ${colors.frenchGray};
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    width: 100%;
    height: 100px;
    cursor: pointer;
    color: ${colors.seasalt};
    font-family: 'Comfortaa', 'Roboto Mono', monospace;
    font-size: 16px;
    /* margin-left: 10px; */
    transition: background-color 0.3s ease;
    &:hover {
      background-color: ${colors.outerSpace};  // #5a6268ff; /* Darker shade on hover */
      /* border: 1px solid ${colors.yinmnBlue}; */
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