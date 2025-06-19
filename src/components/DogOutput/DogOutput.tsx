import {
  OutputContainer,
  DogTextTitle,
  DogText,
  Image,
} from './DogOutput.styles';

interface DogOutputProps {
  name: string;
  bredFor: string;
  breedGroup: string;
  dogUrl: string;
  prompt?: string; // Optional input text prop
}

const DogOutput = ({ name, bredFor, breedGroup, dogUrl, prompt }: DogOutputProps) => {
  console.log('dogUrl :>> ', dogUrl);
  return (
    <OutputContainer>
      <DogText>{prompt}</DogText>
      <DogText>After careful consideration of your request, Agent Hive AI recommends getting a dog, perhaps this one:</DogText>
      
      <Image src={dogUrl} alt="dog" /> 
      
      <DogTextTitle>Breed</DogTextTitle>
      <DogText>{name}</DogText>

      <DogTextTitle>Bred For</DogTextTitle>
      <DogText>{bredFor}</DogText>

      <DogTextTitle>Breed Group</DogTextTitle>
      <DogText>{breedGroup}</DogText>  
    </OutputContainer>
  );
}

export default DogOutput;