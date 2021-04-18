import styled from "styled-components";
import { ReactNode } from "react";

const Container = styled.div``;

const Title = styled.h3``;

const Content = styled.p``;

const Button = styled(Button)``;

interface CardProps {
  title: string;
  content: string;
  icon?: ReactNote;
}
export default function Card({ title, content, icon }: CardProps) {
  return (
    <Container>
      {icon}
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Button>Learn More</Button>
    </Container>
  );
}
