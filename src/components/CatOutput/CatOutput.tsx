import {
  OutputContainer,
  CatTextTitle,
  CatText,
  Image,
} from './CatOutput.styles';

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
      <CatText>{prompt}</CatText>
      <CatText>After careful consideration of your request, Agent Hive AI recommends {variableText}, perhaps this one:</CatText>
      
      <Image src={imageUrl} alt="animal" /> 
      
      {name && name.length > 0 && (<>
          <CatTextTitle>Breed</CatTextTitle>
          <CatText>{name}</CatText>
        </>)}

      {description && description.length > 0 && 
      (<>
      <CatTextTitle>Description</CatTextTitle>
      <CatText>{description}</CatText>
      </>)}
    </OutputContainer>
  );
}

export default Output;