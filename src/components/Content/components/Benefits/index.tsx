import React from "react";
import styled from "styled-components";
import cardsJson from "./cards.json";
import Card from "./components/Card";

const Container = styled.div`
  max-width: 1262px;
  margin: 0 auto;
  box-shadow: 0 2px 20px rgba(21, 24, 36, 0.2);
  position: relative;
  text-align: center;
`;

const Title = styled.h1`
  width: 100%;
  padding: 100px 100px 30px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-50%);
  background-color: #fff;
`;

const Cards = styled.div`
  padding: 150px 100px 35px;
  display: flex;
  justify-content: space-between;
`;

export default function Benefits() {
  const cards = cardsJson.map((item: any, index: number) => {
    return <Card key={index} title={item.title} content={item.content} icon={item.icon}/>;
  });
  return (
    <Container>
      {/*<BenefitsWrapper>*/}
        <Title>Benefits of Odigo</Title>
        <Cards>{cards}</Cards>
      {/*</BenefitsWrapper>*/}
    </Container>
  );
}
