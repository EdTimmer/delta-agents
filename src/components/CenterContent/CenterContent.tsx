import { MainContainer, ImageContainer, Title, Text, FlexStartRow, ComponentWrapper } from "./CenterContent.styles";
import Abst02 from "/images/abst02.jpg";
import Abst03 from "/images/abst03.jpg";
import Abst04 from "/images/abst04.jpg";
import Abst05 from "/images/abst05.jpg";
import Abst06 from "/images/abst06.jpg";
import Corporate03 from "/images/corporate03.jpg";
import Office01 from "/images/office01.jpg";
import Office02 from "/images/office02.jpg";
import Office03 from "/images/office03.jpg";
import Office04 from "/images/office04.jpg";
import Office05 from "/images/office05.jpg";
import Office06 from "/images/office06.jpg";
import Office07 from "/images/office07.jpg";
import Office08 from "/images/office08.jpg";
import Office09 from "/images/office09.jpg";

interface CenterContentProps {
  currentAgentIndex: number;
}

const imageMap: { [key: number]: string } = {
  0: Office06,
  1: Office01,
  2: Office03,
  3: Office09,
  4: Office08,
  // 5: Office06,
};

const CenterContent = ({ currentAgentIndex }: CenterContentProps) => {
  return (
    <ComponentWrapper>
      <MainContainer>
        <ImageContainer>
          <img src={imageMap[currentAgentIndex]} alt="Landscape" />
        </ImageContainer>
      </MainContainer>

      <MainContainer>
        <FlexStartRow>
          <Title>Lorem Ipsum Dolor Sit Amet</Title>
        </FlexStartRow>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non rutrum ipsum, quis ornare augue. Nam facilisis quam quis pulvinar convallis. Etiam rutrum metus ac mauris pretium, et blandit lectus sagittis. Sed vulputate lobortis velit, nec convallis arcu imperdiet vitae. Vivamus vehicula fringilla massa, sit amet consectetur magna volutpat eu. Duis scelerisque euismod nunc, vitae molestie eros finibus non. Sed ut nisl finibus, gravida velit eu, consequat augue. Phasellus id odio ut mauris mollis laoreet sit amet sed leo. Nullam pellentesque, justo eget posuere vulputate, lacus metus lacinia dui, ut maximus dolor sapien vitae dolor. Pellentesque interdum sollicitudin lacus.
        </Text>
      </MainContainer>

      <MainContainer>
        <FlexStartRow>
          <Title>Curabitur non rutrum ipsum</Title>
        </FlexStartRow>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur non rutrum ipsum, quis ornare augue. Nam facilisis quam quis pulvinar convallis. Etiam rutrum metus ac mauris pretium, et blandit lectus sagittis. Sed vulputate lobortis velit, nec convallis arcu imperdiet vitae. Vivamus vehicula fringilla massa, sit amet consectetur magna volutpat eu. Duis scelerisque euismod nunc, vitae molestie eros finibus non. Sed ut nisl finibus, gravida velit eu, consequat augue. Phasellus id odio ut mauris mollis laoreet sit amet sed leo. Nullam pellentesque, justo eget posuere vulputate, lacus metus lacinia dui, ut maximus dolor sapien vitae dolor. Pellentesque interdum sollicitudin lacus.
        </Text>
      </MainContainer>
    </ComponentWrapper>
  );
};

export default CenterContent;
