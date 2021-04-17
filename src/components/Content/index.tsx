import styled from "styled-components";
import BGImage from "../../shared/img/image.jpg";
import { Wrapper } from "../../style/baseReact.tsx";
import { Input } from "../../shared/components/Input";
import { Button } from "../../shared/components/Button";

const Container = styled.div`
  background: url(${BGImage}) no-repeat center;
  background-size: cover;
  height: 100vh;
  color: black;
  color: white;
`;

const Title = styled.h1`
  padding-top: 263px;
  max-width: 619px;
  font-weight: 500;
  line-height: 60px;
  font-size: 50px;
  margin-bottom: 22px;
`;

const SubTitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  max-width: 546px;
  margin-bottom: 59px;
`;

const InputContainer = styled.div``;

const SubmitButton = styled(Button)``;

interface ContentProps {}

export default function Content(props: ContentProps) {
  return (
    <Container>
      <Wrapper>
        <Title>Discover Amazing places in Japan</Title>
        <SubTitle>
          Jump off balcony, onto stranger's head. Chase ball of string hide when
          guests come over. Being gorgeous with belly side up i could pee on
          this if i had the energy but under the bed, for attack the child, open
          the door.
        </SubTitle>
        <InputContainer>
          <Input placeholder="What would you like to do?" />
          <Input placeholder="Where would you like to go?" />
          <SubmitButton />
        </InputContainer>
      </Wrapper>
    </Container>
  );
}
