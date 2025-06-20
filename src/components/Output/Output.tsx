import {
  OutputContainer,
  StyledTitle,
  StyledText,
  Image,
  StyledTextMarginBottom,
} from './Output.styles';

interface OutputProps {
  prompt: string;
  name?: string;
  imageUrl: string;
  variableText: string;
  description?: string;
}

const Output = ({ name, description, imageUrl, prompt, variableText }: OutputProps) => {
  return (
    <OutputContainer>
      <StyledText>{prompt}</StyledText>
      <StyledTextMarginBottom>...</StyledTextMarginBottom>
      <StyledText>After careful consideration of your request, Agent Hive AI recommends {variableText}, perhaps this one:</StyledText>
      
      <Image src={imageUrl} alt="animal" /> 
      
      {name && name.length > 0 && (<>
          <StyledTitle>Breed</StyledTitle>
          <StyledText>{name}</StyledText>
        </>)}

      {description && description.length > 0 && 
      (<>
      <StyledTitle>Description</StyledTitle>
      <StyledText>{description}</StyledText>
      </>)}
    </OutputContainer>
  );
}

export default Output;