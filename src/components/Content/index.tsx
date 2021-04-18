import styled from "styled-components";
import BGImage from "../../shared/img/Image.png";
import { Wrapper } from "style/baseReact";
import InputElement from "../../shared/components/Input";
import { Button } from "shared/components/Button";
import Benefits from "./components/Benefits";
import React from "react";

const Container = styled.div`
  background: url(${BGImage}) no-repeat center;
  background-size: cover;
  height: 100vh;
  color: white;
`;

const Title = styled.h1`
  padding-top: 163px;
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

const InputContainer = styled.form`
  display: flex;
`;

const SubmitButton = styled(Button)`
  color: white;
  background-color: #1b7dff;
  width: 200px;
  margin: 1em;
  padding: 1em;
`;

interface ContentProps {}

export default function Content(props: ContentProps) {
  return (
    <>
      <Container>
        <Wrapper>
          <Title>Discover Amazing places in Japan</Title>
          <SubTitle>
            Jump off balcony, onto stranger's head. Chase ball of string hide
            when guests come over. Being gorgeous with belly side up i could pee
            on this if i had the energy but under the bed, for attack the child,
            open the door.
          </SubTitle>
          <InputContainer>
            <InputElement placeholder="What would you like to do?" />
            <InputElement placeholder="Where would you like to go?" />
            <SubmitButton type={"submit"}>SEARCH</SubmitButton>
          </InputContainer>
        </Wrapper>
      </Container>
      <Benefits />
    </>
  );
}
