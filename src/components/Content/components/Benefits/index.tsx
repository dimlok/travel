import styled from "styled-components";
import cardsJson from "./cards.json";
import Card from "./components/Card";

const Container = styled.div`
  max-width: 1262px;
  margin: 0 auto;
  height: 35vh;
  box-shadow: 0px 2px 20px rgba(21, 24, 36, 0.15993);
`;

const Title = styled.h1``;

const Cards = styled.div``;

export default function Benefits() {
  const cards = cardsJson.map((item: any, index: number) => {
    return <Card key={index} title={item.title} content={item.content} />;
  });
  return (
    <Container>
      <Title>Benefits of Odigo</Title>
      <Cards>{cards}</Cards>
    </Container>
  );
}
