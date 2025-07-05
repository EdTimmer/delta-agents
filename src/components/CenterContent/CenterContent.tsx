import { MainContainer, ImageContainer, Title, Text, FlexStartRow } from "./CenterContent.styles";
import Landscape01 from "/images/landscape01.jpg";
import Landscape02 from "/images/landscape02.jpg";
import Landscape03 from "/images/landscape03.jpg";  
import Landscape04 from "/images/landscape04.jpg";
import Landscape05 from "/images/landscape05.jpg";
import Cyber01 from "/images/cyber01.jpg";
import Cyber02 from "/images/cyber02.jpg";
import Cyber03 from "/images/cyber03.jpg";
import Corporate01 from "/images/corporate01.jpg";
import Corporate02 from "/images/corporate02.jpg";
import Corporate03 from "/images/corporate03.jpg";
import Botanical01 from "/images/botanical01.jpg";
import Botanical02 from "/images/botanical02.jpg";
import Botanical03 from "/images/botanical03.jpg";
import Botanical04 from "/images/botanical04.jpg";
import Botanical05 from "/images/botanical05.jpg";
import Botanical06 from "/images/botanical06.jpg";
import Botanical07 from "/images/botanical07.jpg";


interface CenterContentProps {
  currentAgentIndex: number;
}

const imageMap: { [key: number]: string } = {
  0: Botanical02,
  1: Botanical03,
  2: Botanical04,
  3: Botanical06,
  4: Botanical07,
};

const CenterContent = ({ currentAgentIndex }: CenterContentProps) => {
  return (
    <MainContainer $currentAgentIndex={currentAgentIndex}>
      {/* <FlexStartRow style={{ paddingTop: "0", marginTop: "-10px" }}>
        <Title>Curabitur non rutrum ipsum</Title>
      </FlexStartRow> */}

      <ImageContainer>
        <img src={imageMap[currentAgentIndex]} alt="Landscape" />
      </ImageContainer>
      <FlexStartRow>
        <Title>Lorem Ipsum Dolor Sit Amet</Title>
      </FlexStartRow>
      <Text>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non rutrum ipsum, quis ornare augue. Nam facilisis quam quis pulvinar convallis. Etiam rutrum metus ac mauris pretium, et blandit lectus sagittis. Sed vulputate lobortis velit, nec convallis arcu imperdiet vitae. Vivamus vehicula fringilla massa, sit amet consectetur magna volutpat eu. Duis scelerisque euismod nunc, vitae molestie eros finibus non. Sed ut nisl finibus, gravida velit eu, consequat augue. Phasellus id odio ut mauris mollis laoreet sit amet sed leo. Nullam pellentesque, justo eget posuere vulputate, lacus metus lacinia dui, ut maximus dolor sapien vitae dolor. Pellentesque interdum sollicitudin lacus.
      </Text>

      <FlexStartRow>
        <Title>Curabitur non rutrum ipsum</Title>
      </FlexStartRow>
      <Text>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non rutrum ipsum, quis ornare augue. Nam facilisis quam quis pulvinar convallis. Etiam rutrum metus ac mauris pretium, et blandit lectus sagittis. Sed vulputate lobortis velit, nec convallis arcu imperdiet vitae. Vivamus vehicula fringilla massa, sit amet consectetur magna volutpat eu. Duis scelerisque euismod nunc, vitae molestie eros finibus non. Sed ut nisl finibus, gravida velit eu, consequat augue. Phasellus id odio ut mauris mollis laoreet sit amet sed leo. Nullam pellentesque, justo eget posuere vulputate, lacus metus lacinia dui, ut maximus dolor sapien vitae dolor. Pellentesque interdum sollicitudin lacus.
      </Text>
    </MainContainer>
  );
};

export default CenterContent;
