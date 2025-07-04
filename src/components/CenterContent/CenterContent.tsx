import { MainContainer } from "./CenterContent.styles";

interface CenterContentProps {
  currentAgentIndex: number;
}

const CenterContent = ({ currentAgentIndex }: CenterContentProps) => {
  return (
    <MainContainer $currentAgentIndex={currentAgentIndex}>
      {/* Your content goes here */}
    </MainContainer>
  );
};

export default CenterContent;
