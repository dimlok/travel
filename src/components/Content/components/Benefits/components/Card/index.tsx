import React, {ReactNode} from "react";
import styled from "styled-components";
import {Button} from "shared/components/Button";

const Container = styled.div`
`;

const Title = styled.h3`
margin: 15px 0;
`;

const Content = styled.p`
margin: 15px 0;
`;

const ShowMore = styled(Button)`
  color: white;
  background-color: #1b7dff;
  width: 150px;
  padding: 0.5em;
`;

interface CardProps {
  title: string;
  content: string;
  icon?: ReactNode;
}
export default function Card({ title, content, icon }: CardProps) {
  return (
    <Container>
      {icon}
      <Title>{title}</Title>
      <Content>{content}</Content>
      <ShowMore>Learn More</ShowMore>
    </Container>
  );
}
