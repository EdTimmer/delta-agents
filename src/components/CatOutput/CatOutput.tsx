import {
  OutputContainer,
  CatTextTitle,
  CatText,
  Image,
} from './CatOutput.styles';

interface CatOutputProps {
  name: string;
  description: string;
  temperament: string;
  affectionLevel: number;
  energyLevel: number;
  catUrl: string;
  prompt?: string; // Optional input text prop
}

const CatOutput = ({ name, description, temperament, affectionLevel, energyLevel, catUrl, prompt }: CatOutputProps) => {
  console.log('prompt :>> ', prompt);
  return (
    <OutputContainer>
      <CatText>{prompt}</CatText>
      <CatText>After careful consideration of your request, Agent Hive AI recommends getting a cat, perhaps this one:</CatText>
      
      <Image src={catUrl} alt="cat" /> 
      
      <CatTextTitle>Breed</CatTextTitle>
      <CatText>{name}</CatText>

      <CatTextTitle>Temperament</CatTextTitle>
      <CatText>{temperament}</CatText>

      <CatTextTitle>Affection Level</CatTextTitle>
      <CatText>{affectionLevel}</CatText>

      <CatTextTitle>Energy Level</CatTextTitle>
      <CatText>{energyLevel}</CatText>

      <CatTextTitle>Description</CatTextTitle>
      <CatText>{description}</CatText>    
    </OutputContainer>
  );
}

export default CatOutput;